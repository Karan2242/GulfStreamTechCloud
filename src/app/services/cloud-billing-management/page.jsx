
import CloudBillingManagementContent from '@/components/pages/services/CloudBillingManagementContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Billing Management Saudi Arabia',
  description: 'Unified cloud billing for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Real-time dashboards, chargeback reporting & anomaly detection.',
  keywords: ['cloud billing management', 'cloud cost attribution', 'chargeback reporting', 'cloud spend forecasting', 'billing anomaly detection', 'cloud billing Saudi Arabia', 'cloud billing Riyadh', 'multi-cloud billing', 'cloud invoice management', 'GulfStream Technologies'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-billing-management/' },
  openGraph: {
    title: 'Cloud Billing Management Saudi Arabia | GulfStream',
    description: 'Unified cloud billing for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Real-time dashboards, chargeback reporting & anomaly detection.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-billing-management/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Billing Management Saudi Arabia | GulfStream',
    description: 'Unified cloud billing for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Real-time dashboards, chargeback reporting & anomaly detection.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Billing Management',
  description: 'Unified cloud billing management across AWS, Azure, Oracle & Google Cloud with real-time dashboards, chargeback reporting, anomaly detection, and spend forecasting.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Cloud Billing Management',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What is cloud billing management?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud billing management tracks, analyzes, and optimizes cloud spend across providers to eliminate surprises and improve visibility.', } },
      { '@type': 'Question', name: 'Can you manage billing across multiple cloud providers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We unify billing for AWS, Azure, Google Cloud, and Oracle Cloud into a single view with consistent reporting.', } },
      { '@type': 'Question', name: 'How much does cloud billing management cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on account count and complexity. We offer flexible pricing and a free audit for a tailored estimate.', } },
      { '@type': 'Question', name: 'How quickly can you set up billing dashboards?', acceptedAnswer: { '@type': 'Answer', text: 'We typically deploy unified billing dashboards within 2-4 weeks, including budget alerts and cost allocation reports.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for cloud billing management?', acceptedAnswer: { '@type': 'Answer', text: 'We combine managed billing, FinOps controls, and local Saudi support to deliver accurate, audit-ready cloud spend visibility.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Billing Management', item: 'https://gulfstreamtech.com.sa/services/cloud-billing-management/' },
  ],
};

export default function CloudBillingManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CloudBillingManagementContent />
    </>
  );
}
