
import HomeContent from '@/components/pages/HomeContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Managed Cloud Services | GulfStream Technologies',
  description: 'Multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
  keywords: [
    'Managed Cloud Services Saudi Arabia',
    'AWS managed services Saudi Arabia',
    'Azure cloud consulting Saudi Arabia',
    'cloud cost optimization Saudi Arabia',
    'FinOps consulting Saudi Arabia',
    'cloud security Saudi Arabia',
    'cloud migration Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/' },
  openGraph: {
    title: 'Managed Cloud Services | GulfStream Technologies',
    description: 'Multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
    siteName: 'GulfStream Technologies',
    locale: 'en_US',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Cloud Services | GulfStream Technologies',
    description: 'Multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Cloud Services Saudi Arabia',
  description:
    'Enterprise-grade managed cloud services across AWS, Azure, Oracle Cloud and Google Cloud in Saudi Arabia. 24/7 monitoring, FinOps cost optimization, cloud security, and cloud migration.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  serviceType: 'Managed Cloud Services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cloud Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AWS Managed Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure Cloud Consulting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FinOps Cost Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Security & Governance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Migration' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What are Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Managed Cloud Services involve outsourcing cloud operations, monitoring, security, and optimization to certified experts.', } },
      { '@type': 'Question', name: 'How much can you save on cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Clients typically save 25-35% through rightsizing, Reserved Instance planning, and continuous cost governance.', } },
      { '@type': 'Question', name: 'How quickly can you see results with GulfStream?', acceptedAnswer: { '@type': 'Answer', text: 'Most organizations see measurable cloud savings and stability improvements within 60-90 days.', } },
      { '@type': 'Question', name: 'Do you support AWS, Azure, Google Cloud, and Oracle Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We support AWS, Azure, Google Cloud, Oracle Cloud, and hybrid operations with unified governance.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for cloud management in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'A local Saudi team with multi-cloud certifications, FinOps expertise, and compliance experience delivers faster outcomes.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeContent />
    </>
  );
}
