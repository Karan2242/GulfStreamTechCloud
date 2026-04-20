
import HomeContent from '@/components/pages/HomeContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Managed Services Saudi Arabia',
  description: 'Multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
  keywords: [
    'cloud managed services Saudi Arabia',
    'AWS managed services Saudi Arabia',
    'Azure cloud consulting Saudi Arabia',
    'cloud cost optimization Saudi Arabia',
    'FinOps consulting Saudi Arabia',
    'cloud security Saudi Arabia',
    'cloud migration Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/' },
  openGraph: {
    title: 'Cloud Managed Services Saudi Arabia | GulfStream',
    description: 'Multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
    siteName: 'GulfStream Technologies',
    locale: 'en_US',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Managed Services Saudi Arabia | GulfStream',
    description: 'Multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. Reduce costs 30%, strengthen security & scale with certified cloud specialists.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Managed Services Saudi Arabia',
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
  serviceType: 'Cloud Managed Services',
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
    {
      '@type': 'Question',
      name: 'What are cloud managed services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloud managed services involve outsourcing the day-to-day management, monitoring, security, and optimization of your cloud infrastructure to a specialized provider. This includes 24/7 operations, incident response, FinOps cost governance, and performance tuning across platforms like AWS, Azure, Oracle Cloud, and Google Cloud — so your teams focus on business growth, not infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cloud platforms do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream Technologies is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments, helping Saudi enterprises choose the right platform and optimize for cost, security, and performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cost savings can you deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our FinOps-driven approach delivers an average 30% cloud cost reduction within 90 days. Savings come from rightsizing, Reserved Instance optimization, Spot Instance automation, waste elimination, and continuous cost governance — making the investment self-funding through immediate infrastructure savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you operate in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream Technologies is headquartered in Riyadh and serves enterprise clients across Jeddah, Dammam, and the wider GCC. We understand local regulations including NCA ECC compliance, support Vision 2030 digital transformation goals, and provide Arabic-language support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free cloud consultation available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer a complimentary Cloud Assessment that identifies cost savings opportunities, security gaps, and performance improvements in your current cloud environment — across AWS, Azure, Google Cloud, or Oracle Cloud — at no cost and no commitment. Book your free review at gulfstreamtech.com.sa/book-a-review.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technologies serves enterprises across retail, healthcare, logistics, SaaS/technology, and professional services in Saudi Arabia. Each industry engagement includes specialized cloud architectures designed for sector-specific compliance, scalability, and operational requirements.',
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
