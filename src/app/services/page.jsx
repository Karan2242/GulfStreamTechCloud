
import ServicesIndexContent from '@/components/pages/ServicesIndexContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Enterprise Cloud Services Saudi Arabia',
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
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/' },
  openGraph: {
    title: 'Enterprise Cloud Services Saudi Arabia | GulfStream',
    description: 'Enterprise managed cloud services in Saudi Arabia. Reduce cloud costs 30% across AWS, Azure, Google Cloud & Oracle Cloud with 24/7 monitoring, FinOps & security governance.',
    url: 'https://gulfstreamtech.com.sa/services/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Cloud Services Saudi Arabia | GulfStream',
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
      mainEntity: [
      { '@type': 'Question', name: 'What are Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Managed Cloud Services involve outsourcing cloud operations, monitoring, security, and optimization to a certified provider.', } },
      { '@type': 'Question', name: 'Which cloud platforms do you support?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments with unified management and governance.', } },
      { '@type': 'Question', name: 'How much can Managed Cloud Services save?', acceptedAnswer: { '@type': 'Answer', text: 'Clients typically save 25-35% on cloud spend through cost optimization and operational efficiency.', } },
      { '@type': 'Question', name: 'How quickly can you deliver results?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see measurable savings and stability improvements within 60-90 days.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for managed cloud services?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, multi-cloud certifications, and a measurable ROI approach for enterprise cloud operations.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesIndexContent />
    </>
  );
}
