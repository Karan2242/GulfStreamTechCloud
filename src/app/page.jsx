
import HomeContent from '@/components/pages/HomeContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud, AI, IT & Technology Talent Partner | GulfStream Technologies',
  description: 'GulfStream Technologies helps organizations modernize cloud infrastructure, adopt practical AI, strengthen IT operations, and access technology talent through one accountable partner across the GCC.',
  keywords: [
    'GulfStream Technologies',
    'technology services',
    'digital transformation partner',
    'cloud services',
    'AI services',
    'IT services',
    'technology talent services',
    'GCC technology solutions',
    'business technology partner',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/' },
  openGraph: {
    title: 'Cloud, AI, IT & Technology Talent Partner | GulfStream Technologies',
    description: 'One technology partner across Cloud, AI, IT and Technology Talent for organizations modernizing and scaling across the GCC.',
    url: 'https://gulfstreamtech.com.sa/',
    siteName: 'GulfStream Technologies',
    locale: 'en_US',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud, AI, IT & Technology Talent Partner | GulfStream Technologies',
    description: 'One technology partner across Cloud, AI, IT and Technology Talent for strategy, delivery, operations and optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Integrated Technology Services',
  description:
    'Integrated Cloud, AI, IT and technology talent services delivered by one accountable partner for organizations across the GCC.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: {
    '@type': 'Place',
    name: 'GCC',
  },
  serviceType: 'Integrated Technology Services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technology Capabilities',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manpower Services' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does GulfStream Technologies provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream provides integrated Cloud Services, AI Services, IT Services, and Manpower Services for organizations that need one accountable technology partner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream support projects that require multiple technology capabilities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream combines cloud, AI, IT and technology talent in one coordinated engagement so strategy, implementation and operations stay aligned.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide both project-based and ongoing managed services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream supports consulting, project delivery, managed services and long-term partnership models based on business needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of technology professionals can GulfStream provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream provides professionals across cloud platforms, cybersecurity, AI, data engineering, infrastructure, software delivery and enterprise IT operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream help modernize existing IT environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream supports assessment, architecture, migration, implementation, optimization and ongoing support for existing environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with organizations across the GCC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream works with organizations across Saudi Arabia and the broader GCC, aligned to regional operational and regulatory needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we start a conversation with GulfStream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact GulfStream for an initial discussion and practical next-step recommendations based on your business priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream support both strategic advisory and implementation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream can engage from discovery and strategy through implementation, operation and continuous optimization.',
      },
    },
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
