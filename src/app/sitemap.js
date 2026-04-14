const BASE_URL = 'https://gulfstreamtech.com.sa';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/insights',
    '/services',
    '/industries',
    '/case-studies',
    '/book-a-review',
    '/services/cloud-managed-services',
    '/services/cloud-managed-services/aws',
    '/services/cloud-managed-services/azure',
    '/services/cloud-managed-services/oracle',
    '/services/cloud-managed-services/google',
    '/services/finops-cost-optimization',
    '/services/cloud-billing-management',
    '/services/cloud-migration',
    '/services/cloud-security-governance',
    '/industries/retail',
    '/industries/healthcare',
    '/industries/logistics',
    '/industries/tech-saas',
    '/industries/professional-services',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: '2025-04-09',
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' || route === '/pricing' || route === '/book-a-review' ? 0.9 : route.includes('/services/') || route.includes('/industries/') ? 0.7 : 0.8,
  }));
}
