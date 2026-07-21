const BASE_URL = 'https://gulfstreamtech.com.sa';

export const dynamic = 'force-static';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/contact',
    '/insights',
    '/services',
    '/industries',
    '/book-a-review',
    '/cookie-policy',
    '/privacy-policy',
    '/terms-of-service',
    '/services/cloud-managed-services',
    '/services/cloud-managed-services/aws',
    '/services/cloud-managed-services/microsoft-cloud',
    '/services/cloud-managed-services/microsoft-cloud/azure-services',
    '/services/cloud-managed-services/microsoft-cloud/microsoft-365-services',
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
    // Blog Insight Pages - FinOps
    '/insights/cloud-cost-optimization-strategy',
    '/insights/reserved-instances-vs-savings-plans',
    '/insights/cloud-waste-reduction',
    '/insights/finops-governance',
    // Blog Insight Pages - Security
    '/insights/cloud-iam-security-best-practices',
    '/insights/multi-cloud-threat-detection',
    '/insights/cloud-compliance-governance',
    '/insights/security-monitoring-aws-azure',
    // Blog Insight Pages - Migration
    '/insights/cloud-migration-planning',
    '/insights/lift-and-shift-vs-modernization',
    '/insights/zero-downtime-migration',
    '/insights/hybrid-cloud-migration',
    // Blog Insight Pages - Architecture
    '/insights/auto-scaling-architecture',
    '/insights/multi-region-high-availability',
    '/insights/resilient-cloud-infrastructure',
    '/insights/cloud-performance-optimization',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: '2026-05-20',
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: 
      route === '' ? 1 
      : route === '/services' || route === '/book-a-review' ? 0.9
      : route === '/insights' || route.startsWith('/insights/') ? 0.8
      : route.includes('/services/') || route.includes('/industries/') ? 0.7 
      : route === '/cookie-policy' || route === '/privacy-policy' || route === '/terms-of-service' ? 0.6 
      : 0.8,
  }));
}
