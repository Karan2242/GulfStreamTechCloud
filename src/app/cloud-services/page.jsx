
import CloudServicesContent from '@/components/pages/CloudServicesContent';
import { cloudFaqs } from '@/components/pages/cloud-services/cloudServicesFaqs';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Managed Cloud Services | GulfStream Technologies',
  description: 'Enterprise managed cloud services in Saudi Arabia. Reduce cloud costs 30% across AWS, Azure, Google Cloud & Oracle Cloud with 24/7 monitoring, FinOps & security governance.',
  keywords: [
    'managed cloud services Saudi Arabia',
    'AWS managed services Saudi Arabia',
    'Azure managed services Saudi Arabia',
    'cloud cost optimization Saudi Arabia',
    'FinOps consulting Saudi Arabia',
    'cloud migration Saudi Arabia',
    'cloud security governance Saudi Arabia',
    'Managed Cloud Services Riyadh',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/cloud-services/' },
  openGraph: {
    title: 'Managed Cloud Services | GulfStream Technologies',
    description: 'Enterprise managed cloud services in Saudi Arabia. Reduce cloud costs 30% across AWS, Azure, Google Cloud & Oracle Cloud with 24/7 monitoring, FinOps & security governance.',
    url: 'https://gulfstreamtech.com.sa/cloud-services/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Cloud Services | GulfStream Technologies',
    description: 'Enterprise managed cloud services in Saudi Arabia. Reduce cloud costs 30% across AWS, Azure, Google Cloud & Oracle Cloud with 24/7 monitoring, FinOps & security governance.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Cloud Services in Saudi Arabia',
  description:
    'Enterprise managed cloud services across AWS, Azure, Oracle Cloud, and Google Cloud in Saudi Arabia. 24/7 monitoring, FinOps cost optimization, cloud migration, and security governance for businesses in Riyadh, Jeddah & Dammam.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'City', name: 'Riyadh' },
    { '@type': 'City', name: 'Jeddah' },
    { '@type': 'City', name: 'Dammam' },
  ],
  serviceType: 'Managed Cloud Services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Managed Cloud Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AWS Managed Services Saudi Arabia' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure Managed Services Saudi Arabia' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FinOps & Cloud Cost Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Billing Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Migration & Modernization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Security & Governance' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: cloudFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/cloud-services/' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CloudServicesContent />
    </>
  );
}
