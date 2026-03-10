import * as cheerio from 'cheerio';

const BASE_URL = 'https://www.teffiko.com';

export interface NewsItem {
  title: string;
  description: string;
  dateDay: string;
  dateMonthYear: string;
  link: string;
  image: string;
  slug: string;
}

export interface NewsDetail {
  title: string;
  content: string;
  date: string;
}

function replaceBrand(text: string): string {
  if (!text) return text;
  // Replace Teffiko (case insensitive) with Omron Tech Pumps
  return text.replace(/Teffiko/gi, 'Omron Tech Pumps');
}

/**
 * Replaces the brand name in text nodes only, to avoid breaking HTML attributes (like href or src).
 */
function replaceBrandInHtml($: cheerio.CheerioAPI, element: cheerio.Cheerio<any>): void {
  element.find('*').contents().each((_, node) => {
    if (node.type === 'text') {
      const text = $(node).text();
      const newText = replaceBrand(text);
      if (text !== newText) {
        $(node).replaceWith(newText);
      }
    }
  });
}

function makeAbsolute(url: string): string {
  if (!url) return url;
  if (url.startsWith('http')) return url;
  return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const response = await fetch(`${BASE_URL}/news.html`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const newsItems: NewsItem[] = [];

    $('.sep-news-list .item').each((_, element) => {
      const $el = $(element);
      const title = replaceBrand($el.find('.title').text().trim());
      const description = replaceBrand($el.find('.summary').text().trim());
      const dateDay = $el.find('.day').text().trim();
      const dateMonthYear = $el.find('.ym').text().trim();
      const rawLink = $el.find('a.thumb').attr('href') || '';
      const image = makeAbsolute($el.find('img').attr('src') || '');

      const slug = rawLink.replace(/^\//, '').replace(/\.html$/, '');

      newsItems.push({
        title,
        description,
        dateDay,
        dateMonthYear,
        link: `/news/${slug.replace(/^news\//, '')}`,
        image,
        slug
      });
    });

    return newsItems;
  } catch (error) {
    console.error('Error fetching news items:', error);
    return [];
  }
}

export async function getNewsDetail(slug: string): Promise<NewsDetail | null> {
  try {
    const path = slug.startsWith('news/') ? slug : `news/${slug}`;
    const url = `${BASE_URL}/${path}.html`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const title = replaceBrand($('h1').first().text().trim() || $('.sep-news-detail h1').text().trim());

    let $contentEl = $('.sep-news-detail .info-box');
    if ($contentEl.length === 0) $contentEl = $('.sep-news-detail .datal');
    if ($contentEl.length === 0) $contentEl = $('.sep-news-detail .sep-primary');
    if ($contentEl.length === 0) $contentEl = $('.datal');
    if ($contentEl.length === 0) $contentEl = $('.info-box');
    if ($contentEl.length === 0) $contentEl = $('.sep-primary');

    // Process content: replace brand and make images absolute
    $contentEl.find('img').each((_, img) => {
      const src = $(img).attr('src');
      if (src) {
        $(img).attr('src', makeAbsolute(src));
      }
    });

    $contentEl.find('a').each((_, a) => {
      const href = $(a).attr('href');
      if (href) {
        if (href.startsWith('/news/') && href.endsWith('.html')) {
          const internalSlug = href.split('/').pop()?.replace('.html', '');
          $(a).attr('href', `/news/${internalSlug}`);
        } else if (href.startsWith('/')) {
          $(a).attr('href', makeAbsolute(href));
        }
      }
    });

    // Replace brand only in text nodes
    replaceBrandInHtml($, $contentEl);

    return {
      title,
      content: $contentEl.html() || '',
      date: $('.sep-news-detail .date').text().trim()
    };
  } catch (error) {
    console.error(`Error fetching news detail for ${slug}:`, error);
    return null;
  }
}
