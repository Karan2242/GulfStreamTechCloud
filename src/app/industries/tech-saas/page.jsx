
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
          provider: { '@type': 'Organization', name: 'GulfStream Technology', url: 'https://gulfstreamtech.com.sa/' },
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
            { '@type': 'Question', name: 'What is SaaS cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'SaaS cloud infrastructure is a purpose-built cloud environment optimized for software-as-a-service products — including managed Kubernetes (EKS/AKS), CI/CD pipelines, auto-scaling for 10x traffic spikes, multi-tenant resource isolation, and FinOps cost management with per-customer unit economics visibility.' } },
            { '@type': 'Question', name: 'How do you manage Kubernetes for SaaS companies?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream provides full lifecycle Kubernetes management on AWS EKS or Azure AKS — including cluster upgrades, Horizontal Pod Autoscaler configuration, Karpenter/KEDA cost optimization, security hardening, and 24/7 monitoring with incident response.' } },
            { '@type': 'Question', name: 'Do you support SOC 2 compliance for SaaS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We help SaaS companies achieve SOC 2 readiness with automated evidence collection, continuous cloud security posture management, secret management (AWS Secrets Manager/Azure Key Vault), and runtime container protection.' } },
            { '@type': 'Question', name: 'Can you reduce SaaS infrastructure costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our SaaS FinOps practice delivers 35% average infrastructure cost reduction through per-tenant cost attribution, Spot Instance automation, commitment planning, and Kubernetes resource optimization — giving you full unit economics visibility.' } },
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
