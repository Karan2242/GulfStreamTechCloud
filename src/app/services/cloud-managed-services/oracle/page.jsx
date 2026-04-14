
import OracleCloudContent from '@/components/pages/services/cloud-managed/OracleCloudContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Oracle Cloud Managed Services Saudi Arabia',
  description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
  keywords: ['Oracle Cloud managed services Saudi Arabia', 'OCI managed services Riyadh', 'Oracle database management Saudi Arabia', 'Oracle licensing optimization', 'Oracle Cloud cost reduction', 'OCI monitoring Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/oracle/' },
  openGraph: {
    title: 'Oracle Cloud Managed Services Saudi Arabia | GulfStream',
    description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/oracle/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle Cloud Managed Services Saudi Arabia | GulfStream',
    description: 'Oracle Cloud (OCI) managed services in Saudi Arabia — Autonomous Database, Exadata & OCI Compute. 35% cost reduction, 24/7 monitoring & licensing optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oracle Cloud Managed Services in Saudi Arabia',
  description: 'Enterprise Oracle Cloud Infrastructure managed services including Autonomous Database, Exadata, OCI Compute, and networking. 24/7 monitoring, licensing optimization, and FinOps governance.',
  provider: { '@type': 'Organization', name: 'GulfStream Technology', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Oracle Cloud Managed Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are Oracle Cloud Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'Oracle Cloud Managed Services involve outsourcing the management of your OCI environment to certified experts. This includes 24/7 monitoring, Autonomous Database management, Exadata operations, security governance, licensing optimization, and FinOps-driven cost management.' } },
    { '@type': 'Question', name: 'How much do Oracle Cloud Managed Services cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on your OCI environment size, database complexity, and licensing model (BYOL vs Universal Credits). GulfStream Technology offers flexible pricing tiers. Book a free assessment for a tailored quote that includes potential savings.' } },
    { '@type': 'Question', name: 'Can you optimize Oracle licensing costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Oracle licensing optimization is a core part of our service. We help enterprises maximize BYOL benefits, optimize Universal Credit consumption, right-size compute shapes, and ensure license compliance — typically reducing costs by 25-35%.' } },
    { '@type': 'Question', name: 'Why choose Oracle Cloud in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Oracle Cloud offers dedicated infrastructure options, strong database performance, and competitive pricing for enterprises running Oracle workloads. With a managed services provider like GulfStream Technology in Saudi Arabia, you get local compliance expertise and 24/7 support.' } },
    { '@type': 'Question', name: 'Do you support Oracle database migration to OCI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide end-to-end Oracle database migration services from on-premises or other clouds to OCI, including assessment, migration planning, execution, and post-migration optimization for enterprises across Riyadh, Jeddah, and Dammam.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Managed Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Oracle Cloud Managed Services' },
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
