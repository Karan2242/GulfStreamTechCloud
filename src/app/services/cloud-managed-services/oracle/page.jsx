
import OracleCloudContent from '@/components/pages/services/cloud-managed/OracleCloudContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Oracle Managed Cloud Services Saudi Arabia',
  description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
  keywords: ['Oracle Managed Cloud Services Saudi Arabia', 'OCI managed services Riyadh', 'Oracle database management Saudi Arabia', 'Oracle licensing optimization', 'Oracle Cloud cost reduction', 'OCI monitoring Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/oracle/' },
  openGraph: {
    title: 'Oracle Managed Cloud Services Saudi Arabia | GulfStream',
    description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/oracle/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle Managed Cloud Services Saudi Arabia | GulfStream',
    description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oracle Managed Cloud Services in Saudi Arabia',
  description: 'Enterprise Oracle Cloud Infrastructure managed services including Autonomous Database, Exadata, OCI Compute, and networking. 24/7 monitoring, licensing optimization, and FinOps governance.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Oracle Managed Cloud Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What are Oracle Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Oracle Managed Cloud Services means outsourcing your OCI operations, security, and optimization to experienced Oracle cloud specialists.', } },
      { '@type': 'Question', name: 'How much do Oracle managed services cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on tenancy and database workload complexity. We provide a tailored estimate after a free OCI assessment.', } },
      { '@type': 'Question', name: 'Can you manage Oracle database migrations to OCI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We handle Oracle database migrations to OCI with zero-downtime planning and full validation.', } },
      { '@type': 'Question', name: 'Do you support Oracle Cloud licensing optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We optimize Oracle licensing with BYOL and Universal Credits strategies.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for OCI managed services in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We offer local Oracle expertise, Saudi compliance support, and deep OCI management experience for enterprise workloads.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Oracle Managed Cloud Services' },
  ],
};

export default function OracleCloudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OracleCloudContent />
    </>
  );
}
