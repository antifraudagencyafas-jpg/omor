import { MetadataRoute } from 'next';
import { getNewsItems } from '@/lib/news';
import solarProducts from '@/solar_products.json';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://omrontechpumps.nl';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/downloads',
    '/privacy',
    '/terms',
    '/inquiry',
    '/news',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Product main and category routes
  const productCategoryRoutes = [
    '/products',
    '/products/tipcentrifugalpumps',
    '/products/screwpumps',
    '/products/water-pumps',
    '/products/magnetic-drive-pump',
    '/products/solar-pumps',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic news routes
  const newsItems = await getNewsItems();
  const newsRoutes = newsItems.map((item) => ({
    url: `${baseUrl}${item.link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic solar pump routes
  const solarRoutes = solarProducts.map((product) => ({
    url: `${baseUrl}/products/solar-pumps/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Static product detail routes (crawling filesystem for other categories)
  const productCategories = [
    'tipcentrifugalpumps',
    'screwpumps',
    'water-pumps',
    'magnetic-drive-pump',
  ];

  const otherProductRoutes: MetadataRoute.Sitemap = [];

  productCategories.forEach(category => {
    const categoryPath = path.join(process.cwd(), 'app/products', category);
    if (fs.existsSync(categoryPath)) {
      const items = fs.readdirSync(categoryPath);
      items.forEach(item => {
        const itemPath = path.join(categoryPath, item);
        if (fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx'))) {
          otherProductRoutes.push({
            url: `${baseUrl}/products/${category}/${item}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
          });
        }
      });
    }
  });

  return [...staticRoutes, ...productCategoryRoutes, ...newsRoutes, ...solarRoutes, ...otherProductRoutes];
}
