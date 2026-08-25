import AIGovernanceSecurityContent from '@/components/pages/services/AIGovernanceSecurityContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'AI Governance & Security | GulfStream Technology',
  description: 'AI governance and security services for businesses covering AI risk assessment, responsible AI, data protection, identity and access controls, monitoring, and human oversight.',
  keywords: [
    'AI governance Saudi Arabia',
    'AI security services',
    'responsible AI policy',
    'AI risk assessment',
    'data handling for AI',
    'AI governance services',
    'AI governance and security',
    'AI security services',
    'responsible AI consulting',
    'AI risk assessment',
    'AI data governance',
    'AI compliance',
    'AI security consulting',
    'responsible AI services',
    'AI governance Saudi Arabia',
    'AI security Saudi Arabia'
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/ai-services/ai-governance-security/' },
  openGraph: {
    title: 'AI Governance & Security | GulfStream Technology',
    description: 'AI governance and security services for businesses covering AI risk assessment, responsible AI, data protection, identity and access controls, monitoring, and human oversight.',
    url: 'https://gulfstreamtech.com.sa/ai-services/ai-governance-security/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance & Security | GulfStream Technology',
    description: 'Practical AI governance and security services for businesses adopting AI responsibly with access controls, monitoring, risk review, and policy support.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Governance & Security',
  description:
    'AI governance, risk guidance, access controls, structured review of AI use cases, and policy frameworks to support responsible deployment in business environments.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'AI Governance & Security',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'AI Services', item: 'https://gulfstreamtech.com.sa/ai-services/' },
    { '@type': 'ListItem', position: 3, name: 'AI Governance & Security', item: 'https://gulfstreamtech.com.sa/ai-services/ai-governance-security/' },
  ],
};

export default function AIGovernanceSecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIGovernanceSecurityContent />
    </>
  );
}
