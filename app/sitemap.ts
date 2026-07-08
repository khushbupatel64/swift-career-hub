import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftcareerhub.com';
  const routes = ['', '/swift', '/swiftui', '/interview', '/leetcode', '/blog', '/about', '/contact', '/privacy-policy', '/terms', '/disclaimer'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
