
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
    { '@type': 'Question', name: 'What is cloud billing management?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud billing management is the practice of tracking, analyzing, and optimizing cloud spending across providers like AWS, Azure, Oracle, and Google Cloud. It includes real-time dashboards, chargeback reporting, anomaly detection, spend forecasting, and invoice validation.' } },
    { '@type': 'Question', name: 'How do you reduce cloud billing costs?', acceptedAnswer: { '@type': 'Answer', text: 'We reduce cloud billing costs through tag-based cost attribution, anomaly detection, spend forecasting, invoice validation, and integration with FinOps practices. Most enterprises see full cost visibility within 30 days.' } },
    { '@type': 'Question', name: 'Can you manage billing across multiple cloud providers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GulfStream Technologies provides unified billing management across AWS, Azure, Oracle Cloud, and Google Cloud — aggregating costs into a single dashboard with consistent chargeback and showback reporting.' } },
    { '@type': 'Question', name: 'How much does cloud billing management cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on the number of cloud accounts, providers, and complexity. GulfStream offers flexible pricing from basic billing dashboards to fully managed billing operations. Book a free audit for a tailored quote.' } },
    { '@type': 'Question', name: 'How quickly can you set up billing dashboards?', acceptedAnswer: { '@type': 'Answer', text: 'We typically deploy unified billing dashboards within 2-4 weeks, including tag governance, cost allocation rules, budget alerts, and executive reporting — with full chargeback capability within 30 days.' } },
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
