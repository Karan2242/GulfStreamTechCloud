import AIServicesContent from '@/components/pages/services/AIServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'What Can GulfStream Help My Business Achieve with AI? | GulfStream Technology',
  description:
    'GulfStream helps businesses automate repetitive work, improve access to information, and turn AI into measurable business outcomes with strategy, custom solutions, and governance.',
  keywords: [
    'AI services',
    'AI consulting',
    'AI solutions',
    'AI automation',
    'custom AI applications',
    'business AI solutions',
    'AI governance',
    'data engineering',
    'business intelligence',
    'AI services Saudi Arabia',
    'AI consulting Saudi Arabia',
    'AI solutions GCC',
  ],
  alternates: {
    canonical: '/ai-services',
  },
  openGraph: {
    title: 'What Can GulfStream Help My Business Achieve with AI? | GulfStream Technology',
    description:
      'Discover how GulfStream helps businesses automate work, improve decisions, and build practical AI solutions that create measurable value.',
    url: '/ai-services',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Can GulfStream Help My Business Achieve with AI? | GulfStream Technology',
    description:
      'Discover how GulfStream helps businesses automate work, improve decisions, and build practical AI solutions that create measurable value.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are AI services for businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI services help businesses identify, build, deploy, automate, and govern practical artificial intelligence solutions. These can include AI assistants, business automation, document intelligence, data analytics, custom AI applications, and AI governance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI improve business operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can help businesses reduce repetitive work, improve access to information, accelerate analysis, automate workflows, support employees, and turn business data into more useful insights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GulfStream build custom AI applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream can help businesses design and build custom AI applications such as internal AI assistants, knowledge tools, copilots, workflow solutions, and applications connected to approved business data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream help with AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI and workflow automation can be used to reduce repetitive tasks, improve process consistency, and connect intelligent capabilities with existing business workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is AI governance important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI governance helps organizations establish practical controls around data access, security, permissions, monitoring, responsible usage, policies, and ongoing management of AI solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we start an AI project with GulfStream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A practical starting point is an AI use-case discovery workshop. The workshop helps identify business opportunities, assess feasibility and readiness, prioritize use cases, and define potential next steps.',
      },
    },
  ],
};

export default function AIServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AIServicesContent />
    </>
  );
}
