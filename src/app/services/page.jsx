
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
    'cloud managed services Riyadh',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/' },
  openGraph: {
    title: 'Enterprise Cloud Services Saudi Arabia | GulfStream',
    description: 'Enterprise managed cloud services in Saudi Arabia. Reduce cloud costs 30% across AWS, Azure, Google Cloud & Oracle Cloud with 24/7 monitoring, FinOps & security governance.',
    url: 'https://gulfstreamtech.com.sa/services/',
    type: 'website',
    siteName: 'GulfStream Technology',
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
    name: 'GulfStream Technology',
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
    name: 'Cloud Managed Services',
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
    {
      '@type': 'Question',
      name: 'What are managed cloud services in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Managed cloud services in Saudi Arabia involve outsourcing 24/7 cloud operations — monitoring, security, optimization, and maintenance — to a certified provider like GulfStream Technology. We manage AWS, Azure, Oracle Cloud, and Google Cloud environments for enterprises across Riyadh, Jeddah, and Dammam, delivering an average 30% cost reduction and 99.99% uptime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cloud platforms do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technology is certified across AWS (Advanced Consulting Partner), Microsoft Azure (Expert MSP), Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments, helping Saudi enterprises optimize all platforms for cost, security, and performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cost savings can I expect from managed cloud services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our FinOps-driven approach delivers an average 30% cloud cost reduction within 90 days. Savings come from rightsizing, Reserved Instance optimization, Spot Instance automation, waste elimination, and continuous cost governance — making the investment self-funding from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer multi-cloud support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream provides unified managed services across AWS, Azure, Oracle Cloud, and Google Cloud. We operate multi-cloud environments with centralized monitoring, consistent security policies, cross-cloud FinOps, and a single pane of glass for operations — eliminating the complexity of managing multiple providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you start managing our cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can begin onboarding within 1-2 weeks of engagement. The process starts with a free Cloud Assessment (3-5 business days), followed by a phased onboarding — monitoring and alerting within week 1, full managed operations within 30 days. Quick wins in cost savings are typically identified within the first 2 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you operate in Riyadh, Jeddah, and Dammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream Technology is headquartered in Riyadh and serves enterprise clients across Jeddah, Dammam, and the wider GCC region. We provide on-site consulting, 24/7 remote operations, and understand local regulations including NCA ECC compliance and Vision 2030 digital transformation requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes GulfStream different from other cloud providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream is not a generic MSP. We specialize exclusively in cloud management with FinOps at the core, security-first architecture, and Saudi compliance expertise. Our outcome-based contracts mean we are accountable for measurable results — cost reduction, uptime, and security posture improvements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free cloud consultation available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every prospective client receives a complimentary Cloud Assessment that identifies cost savings opportunities, security gaps, and performance improvements in your current cloud environment — across AWS, Azure, Google Cloud, or Oracle Cloud — delivered within 5 business days at no cost and no commitment.',
      },
    },
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
