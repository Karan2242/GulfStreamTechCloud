
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
      { '@type': 'Question', name: 'What are Google Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Google Managed Cloud Services means outsourcing your GCP operations, monitoring, security, and optimization to certified cloud professionals.', } },
      { '@type': 'Question', name: 'How much do Google Cloud services cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on workload mix and project count. We provide flexible pricing and a free assessment for a tailored estimate.', } },
      { '@type': 'Question', name: 'Do you manage GKE clusters and BigQuery optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage GKE cluster lifecycles and optimize BigQuery costs through reservations, query tuning, and data lifecycle policies.', } },
      { '@type': 'Question', name: 'Do you support multi-cloud environments with GCP?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate GCP into multi-cloud environments with consistent governance and centralized monitoring.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for Google Cloud in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We combine GCP expertise with Saudi compliance knowledge and local support to deliver reliable cloud operations.', } },
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
