import AIUseCaseDiscoveryContent from '@/components/pages/services/AIUseCaseDiscoveryContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'AI Use-Case Discovery Workshop | GulfStream Technology',
  description: 'A structured AI use-case discovery workshop helping businesses identify practical opportunities, assess feasibility, and prioritize next steps.',
  keywords: [
    'AI use case discovery workshop',
    'AI workshop Saudi Arabia',
    'AI opportunity assessment',
    'AI use case prioritization',
    'business AI strategy',
    'AI use case discovery workshop',
    'AI discovery workshop',
    'AI use cases for business',
    'AI consulting',
    'AI strategy consulting',
    'AI automation opportunities',
    'AI implementation roadmap',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/ai-services/ai-use-case-discovery/' },
  openGraph: {
    title: 'AI Use-Case Discovery Workshop | GulfStream Technology',
    description: 'A structured AI use-case discovery workshop helping businesses identify practical opportunities, assess feasibility, and prioritize next steps.',
    url: 'https://gulfstreamtech.com.sa/ai-services/ai-use-case-discovery/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Use-Case Discovery Workshop | GulfStream Technology',
    description: 'A structured AI use-case discovery workshop helping businesses identify practical opportunities, assess feasibility, and prioritize next steps.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Use-Case Discovery Workshop',
  description:
    'A fixed-scope AI discovery workshop to identify business opportunities, assess feasibility, prioritize use cases, and define recommended next steps.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'AI Discovery Workshop',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'AI Services', item: 'https://gulfstreamtech.com.sa/ai-services/' },
    { '@type': 'ListItem', position: 3, name: 'AI Use-Case Discovery Workshop', item: 'https://gulfstreamtech.com.sa/ai-services/ai-use-case-discovery/' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI Use-Case Discovery Workshop?',
      acceptedAnswer: { '@type': 'Answer', text: 'An AI Use-Case Discovery Workshop is a structured business and technology assessment designed to identify practical opportunities where artificial intelligence can create measurable value. The workshop examines business processes, data, systems, challenges, and priorities before ranking potential AI use cases by impact and feasibility.' },
    },
    {
      '@type': 'Question',
      name: 'What happens during an AI discovery workshop?',
      acceptedAnswer: { '@type': 'Answer', text: 'The workshop typically covers business priorities, operational workflows, current technology and data capabilities, potential AI opportunities, feasibility considerations, use-case prioritization, and recommended next steps.' },
    },
    {
      '@type': 'Question',
      name: 'How do you identify AI use cases for a business?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI opportunities are identified by examining business processes, repetitive tasks, knowledge-intensive activities, customer interactions, data-driven decisions, and operational challenges where AI or intelligent automation could improve efficiency, quality, or decision-making.' },
    },
    {
      '@type': 'Question',
      name: 'How are AI use cases prioritized?',
      acceptedAnswer: { '@type': 'Answer', text: 'Potential use cases are evaluated using factors such as business impact, implementation feasibility, data readiness, technical complexity, integration requirements, security considerations, and expected time to value.' },
    },
    {
      '@type': 'Question',
      name: 'Do we need existing AI infrastructure before the workshop?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. The workshop can be used to assess your current technology, data, and AI readiness and determine what capabilities may be required for future implementation.' },
    },
    {
      '@type': 'Question',
      name: 'What do we receive after the AI discovery workshop?',
      acceptedAnswer: { '@type': 'Answer', text: 'You receive a prioritized shortlist of AI opportunities, assessment criteria, key feasibility considerations, recommended solution direction, and a practical roadmap for the next stage of implementation.' },
    },
    {
      '@type': 'Question',
      name: 'Can the workshop identify AI automation opportunities?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The assessment can identify workflows where AI, intelligent automation, copilots, document intelligence, knowledge assistants, or AI-powered decision support could improve business operations.' },
    },
    {
      '@type': 'Question',
      name: 'Is the workshop suitable for small and medium-sized businesses?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The workshop can be tailored to the organization\'s size, technology environment, business priorities, available data, and operational maturity.' },
    },
  ],
};

export default function AIUseCaseDiscoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AIUseCaseDiscoveryContent />
    </>
  );
}
