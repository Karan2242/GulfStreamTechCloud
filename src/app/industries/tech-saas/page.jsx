
import TechSaasContent from '@/components/pages/industries/TechSaasContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'SaaS Cloud Infrastructure Saudi Arabia',
  description: 'Managed SaaS cloud in Saudi Arabia. Kubernetes, CI/CD pipelines, FinOps cost optimization & multi-tenant architecture across AWS, Azure, GCP & OCI.',
  keywords: ['SaaS cloud infrastructure Saudi Arabia', 'managed Kubernetes Saudi Arabia', 'CI/CD cloud Saudi Arabia', 'FinOps consulting Saudi Arabia', 'technology cloud solutions Saudi', 'SaaS cost optimization Riyadh'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/tech-saas/' },
  openGraph: {
    title: 'SaaS Cloud Infrastructure Saudi Arabia | GulfStream',
    description: 'Managed SaaS cloud in Saudi Arabia. Kubernetes, CI/CD pipelines, FinOps cost optimization & multi-tenant architecture across AWS, Azure, GCP & OCI.',
    url: 'https://gulfstreamtech.com.sa/industries/tech-saas/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'SaaS cloud infrastructure Saudi Arabia' }],
  },
  twitter: { card: 'summary_large_image', title: 'SaaS Cloud Infrastructure Saudi Arabia | GulfStream', description: 'Managed SaaS cloud in Saudi Arabia. Kubernetes, CI/CD pipelines, FinOps cost optimization & multi-tenant architecture across AWS, Azure, GCP & OCI.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function TechSaasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SaaS Cloud Infrastructure Saudi Arabia',
          description: 'Managed cloud infrastructure for SaaS and technology companies in Saudi Arabia — Kubernetes orchestration, CI/CD pipelines, FinOps cost management, and multi-tenant architecture.',
          provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa/' },
          areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          serviceType: 'SaaS Cloud Infrastructure',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
                              mainEntity: [
            { '@type': 'Question', name: 'What is SaaS cloud infrastructure management?', acceptedAnswer: { '@type': 'Answer', text: 'SaaS cloud infrastructure management means outsourcing your platform operations, security, and cost control to cloud experts.', } },
            { '@type': 'Question', name: 'Can you reduce SaaS cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We reduce SaaS cloud costs through Kubernetes optimization, rightsizing, and FinOps governance.', } },
            { '@type': 'Question', name: 'Do you manage Kubernetes for SaaS companies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage Kubernetes clusters, autoscaling, and cost governance for SaaS workloads.', } },
            { '@type': 'Question', name: 'Do you support multi-cloud SaaS deployments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We support multi-cloud SaaS environments with consistent observability and security.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for SaaS cloud operations?', acceptedAnswer: { '@type': 'Answer', text: 'We combine SaaS expertise with Saudi cloud operations to deliver faster, more reliable product delivery.', } },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://gulfstreamtech.com.sa/industries/' },
            { '@type': 'ListItem', position: 3, name: 'Technology / SaaS', item: 'https://gulfstreamtech.com.sa/industries/tech-saas/' },
          ],
        }) }}
      />
      <TechSaasContent />
    </>
  );
}
