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
      name: 'What AI services does GulfStream Technologies provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technologies provides business-focused AI services covering AI strategy and use-case discovery, custom AI applications, data engineering and business intelligence, workflow automation, and AI governance and security. The services are designed to help organizations identify practical AI opportunities, build useful solutions and support responsible adoption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI improve business operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can support business operations by automating repetitive tasks, improving access to organizational knowledge, accelerating document processing, strengthening reporting and helping teams make better use of business data. The most useful opportunities depend on the organization\'s workflows, data, technology environment and business priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream help identify AI use cases for our business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI use-case discovery is part of GulfStream\'s AI services. The process focuses on understanding business challenges and workflows, then evaluating opportunities based on potential business impact, technical feasibility, data readiness and implementation effort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GulfStream build custom AI applications and copilots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GulfStream can design and develop practical AI applications, internal assistants and copilots connected to approved business data, systems and workflows. The objective is to create solutions that address specific organizational requirements rather than applying a generic AI solution to every business problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream automate business workflows using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI and workflow automation can be used to reduce repetitive manual processes and improve operational consistency. Potential applications include document processing, information retrieval, workflow assistance and other business processes where AI can support defined tasks and decision workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GulfStream approach AI governance and security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream considers AI governance and security as part of the solution lifecycle. This includes practical consideration of data protection, access controls, security requirements, monitoring and responsible AI adoption. Governance requirements should be aligned with the organization\'s data, users, workflows and technology environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI solutions work with our existing business data and systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI solutions can be designed around approved business data, existing technology environments and relevant workflows. The appropriate integration approach depends on the organization\'s systems, data sources, security requirements and use case. Data readiness and integration requirements are therefore considered during AI solution assessment and design.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GulfStream deliver an AI project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream follows a structured approach covering discovery, assessment, solution design, development, deployment and governance. This helps connect the business requirement with the technical solution while considering data readiness, security, implementation requirements and ongoing improvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream\'s AI services work alongside our existing IT team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI initiatives can be supported alongside existing internal technology and business teams. GulfStream can contribute specialist AI strategy, application development, data, automation and governance capabilities while working within the organization\'s existing technology environment and operating model.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we get started with an AI project with GulfStream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The starting point is to discuss the business challenge, workflow or opportunity you want to address. GulfStream can help assess the requirement, identify practical AI opportunities and determine the appropriate next step, whether that involves use-case discovery, solution design, development or another stage of the AI delivery process.',
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
