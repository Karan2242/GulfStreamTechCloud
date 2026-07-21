import PlatformContent from '@/components/pages/PlatformContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Multi-Cloud Managed Platform | GulfStream Technologies',
  description: 'Multi-cloud platform operations for AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia and the GCC. Governance-driven cloud services built for enterprise compliance, security, observability, and cost optimization.',
  keywords: [
    'multi-cloud managed services Saudi Arabia',
    'cloud platform operations Riyadh',
    'AWS azure gcp oracle management',
    'multi-cloud governance',
    'cloud security operations',
    '24/7 NOC saudi',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/platform' },
  openGraph: {
    title: 'Multi-Cloud Managed Platform | GulfStream Technologies',
    description: 'Multi-cloud platform operations for AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia and the GCC.',
    url: 'https://gulfstreamtech.com.sa/platform',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Cloud Managed Platform | GulfStream Technologies',
    description: 'Multi-cloud platform operations for AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia and the GCC.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Platform',
  description: 'Multi-cloud platform operations for AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia and the GCC.',
  url: 'https://gulfstreamtech.com.sa/platform',
  publisher: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What cloud platforms does GulfStream support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream supports AWS, Microsoft Azure, Google Cloud, and Oracle Cloud with local Saudi delivery, governance, security operations, and hybrid cloud integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GulfStream manage AWS and Azure together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream delivers a unified multi-cloud operating model that manages AWS and Azure together under one governance framework for compliance, security, and cost optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide cloud cost optimization services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream delivers FinOps, billing governance, rightsizing, and automated cost controls across AWS, Azure, Google Cloud, and Oracle Cloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream manage hybrid cloud environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream manages hybrid cloud environments that include on-premises systems, public cloud, and Oracle Cloud infrastructure with enterprise-grade governance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support Saudi enterprise compliance requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support Saudi Arabia and GCC compliance requirements through security hardening, local data governance, NCA-aligned policies, and enterprise risk management.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you support in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream supports healthcare, logistics, retail, professional services, technology, and other Saudi enterprise industries with tailored cloud platform operations.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Platform', item: 'https://gulfstreamtech.com.sa/platform' },
  ],
};

export default function PlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlatformContent />
    </>
  );
}
