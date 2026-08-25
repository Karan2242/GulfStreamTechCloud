import ManagedITSupportContent from '@/components/pages/services/ManagedITSupportContent';
import { faqs } from '@/components/pages/services/managedItSupportData';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Managed IT Support in Saudi Arabia | GulfStream Technology',
  description:
    'Managed IT support in Saudi Arabia for reliable business IT operations, Microsoft 365 support, endpoint management, monitoring, and IT help desk services.',
  keywords: [
    'managed IT support Saudi Arabia',
    'managed IT services Saudi Arabia',
    'business IT support',
    'IT help desk services',
    'endpoint management services',
    'Microsoft 365 support',
    'proactive IT monitoring',
    'patch management',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/managed-it-support/' },
  openGraph: {
    title: 'Managed IT Support in Saudi Arabia | GulfStream Technology',
    description:
      'Managed IT support in Saudi Arabia for reliable business IT operations, Microsoft 365 support, endpoint management, monitoring, and IT help desk services.',
    url: 'https://gulfstreamtech.com.sa/it-services/managed-it-support/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT Support in Saudi Arabia | GulfStream Technology',
    description:
      'Managed IT support in Saudi Arabia for reliable business IT operations, Microsoft 365 support, endpoint management, monitoring, and IT help desk services.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed IT Support',
  description:
    'Managed IT support for businesses in Saudi Arabia, covering help desk services, endpoint management, Microsoft 365 support, proactive monitoring, patch management, and day-to-day IT operations.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Managed IT Support',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed IT Support', item: 'https://gulfstreamtech.com.sa/it-services/managed-it-support/' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ManagedITSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ManagedITSupportContent />
    </>
  );
}
