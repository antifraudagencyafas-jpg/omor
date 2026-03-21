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

  // Dynamic products routes (crawling filesystem)
  const productsDir = path.join(process.cwd(), 'app/products');
  const productRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ];

  if (fs.existsSync(productsDir)) {
    const categories = fs.readdirSync(productsDir);

    categories.forEach(category => {
      const categoryPath = path.join(productsDir, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        // Add category route
        productRoutes.push({
          url: `${baseUrl}/products/${category}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.9,
        });

        // Add individual product routes (except for solar-pumps which we handle from JSON)
        if (category !== 'solar-pumps') {
          const items = fs.readdirSync(categoryPath);
          items.forEach(item => {
            const itemPath = path.join(categoryPath, item);
            if (fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx'))) {
              productRoutes.push({
                url: `${baseUrl}/products/${category}/${item}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.9,
              });
            }
          });
        }
      }
    });
  }

  // Dynamic news routes
  const newsItems = await getNewsItems();
  const newsRoutes = newsItems.map((item) => ({
    url: `${baseUrl}${item.link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic solar pump routes (from JSON)
  const solarRoutes = solarProducts.map((product) => ({
    url: `${baseUrl}/products/solar-pumps/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes, ...newsRoutes, ...solarRoutes];
}
