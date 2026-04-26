
import GoogleCloudContent from '@/components/pages/services/cloud-managed/GoogleCloudContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Google Managed Cloud Services Saudi Arabia',
  description: 'Google Cloud (GCP) managed services in Saudi Arabia — GKE, BigQuery, Cloud Run & Cloud SQL. 28% cost reduction, 24/7 monitoring & data analytics.',
  keywords: ['Google Managed Cloud Services Saudi Arabia', 'GCP managed services Riyadh', 'BigQuery management Saudi Arabia', 'GKE managed services', 'Google Cloud cost optimization', 'GCP monitoring Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/google/' },
  openGraph: {
    title: 'Google Managed Cloud Services Saudi Arabia | GulfStream',
    description: 'Google Cloud (GCP) managed services in Saudi Arabia — GKE, BigQuery, Cloud Run & Cloud SQL. 28% cost reduction, 24/7 monitoring & data analytics.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/google/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Managed Cloud Services Saudi Arabia | GulfStream',
    description: 'Google Cloud (GCP) managed services in Saudi Arabia — GKE, BigQuery, Cloud Run & Cloud SQL. 28% cost reduction, 24/7 monitoring & data analytics.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Managed Cloud Services in Saudi Arabia',
  description: 'Comprehensive Google Cloud Platform managed services including GKE, BigQuery, Cloud Run, and Cloud SQL. 24/7 monitoring, security governance, and FinOps-driven cost optimization.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Google Managed Cloud Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are Google Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Google Managed Cloud Services involve outsourcing GCP operations to certified experts. This includes 24/7 monitoring, GKE cluster management, BigQuery optimization, security governance with Security Command Center, and FinOps-driven cost management.' } },
    { '@type': 'Question', name: 'How much do Google Managed Cloud Services cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on your GCP environment size, services used, and support level. GulfStream Technologies offers flexible tiers from basic monitoring to fully managed operations including data platform support. Book a free assessment for a tailored quote.' } },
    { '@type': 'Question', name: 'How quickly can you reduce Google Cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see a 20-30% reduction in GCP spend within 90 days through committed use discount planning, BigQuery slot optimization, GKE rightsizing, and elimination of idle resources.' } },
    { '@type': 'Question', name: 'Why choose Google Cloud for enterprises in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud offers industry-leading data analytics with BigQuery, strong Kubernetes support with GKE, and competitive pricing. With GulfStream Technologies as your managed services partner in Saudi Arabia, you get local expertise, 24/7 support, and regulatory compliance knowledge.' } },
    { '@type': 'Question', name: 'Do you manage BigQuery and data analytics workloads?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide specialized BigQuery management including query optimization (up to 60% cost savings), slot management, data pipeline monitoring with Dataflow and Pub/Sub, and cost governance for data analytics workloads.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Google Managed Cloud Services' },
  ],
};

export default function GoogleCloudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GoogleCloudContent />
    </>
  );
}
