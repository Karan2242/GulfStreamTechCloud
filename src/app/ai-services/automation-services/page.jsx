import AutomationServicesContent from '@/components/pages/services/AutomationServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const pageUrl =
  'https://gulfstreamtech.com.sa/ai-services/automation-services/';

const pageTitle =
  'Automation Services | Workflow, RPA & AI Automation | GulfStream Technology';

const pageDescription =
  'Automation services for workflow automation, RPA, business process automation, IT automation, system integration, and AI-assisted workflows in Saudi Arabia.';

const faqs = [
  {
    question: 'What are automation services?',
    answer:
      'Automation services help businesses reduce repetitive manual work by using workflows, integrations, business rules, RPA, and AI-assisted processes to execute routine tasks more efficiently and consistently.',
  },
  {
    question: 'What business processes can be automated?',
    answer:
      'Common candidates include approvals, notifications, employee onboarding, ticket routing, document processing, data synchronization, reporting, invoice workflows, and other repetitive rule-based processes.',
  },
  {
    question: 'What is workflow automation?',
    answer:
      'Workflow automation uses predefined rules and triggers to move tasks, information, approvals, and notifications through a business process with less manual intervention.',
  },
  {
    question: 'What is RPA?',
    answer:
      'Robotic Process Automation, or RPA, uses software-based bots to perform repetitive, rule-based tasks across applications, particularly when those tasks follow consistent steps.',
  },
  {
    question: 'Does automation always require AI?',
    answer:
      'No. Many automation projects can be implemented using workflows, integrations, APIs, and business rules. AI is introduced when capabilities such as document understanding, classification, summarization, or intelligent routing provide additional value.',
  },
  {
    question: 'How do you identify processes that should be automated?',
    answer:
      'We evaluate factors such as task frequency, manual effort, process consistency, error risk, system dependencies, complexity, and potential business impact before recommending automation.',
  },
  {
    question: 'Can automation connect different business applications?',
    answer:
      'Yes. Automation can connect applications and systems through available integrations, APIs, workflows, or other appropriate integration mechanisms to move information between processes.',
  },
  {
    question: 'How does an automation project typically start?',
    answer:
      'A typical engagement starts with process discovery, followed by prioritization, workflow design, integration planning, implementation, testing, deployment, and ongoing optimization.',
  },
];

export const metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    'automation services',
    'workflow automation services',
    'business process automation',
    'RPA services Saudi Arabia',
    'RPA automation',
    'IT automation services',
    'AI automation',
    'AI-assisted workflow automation',
    'process automation solutions',
    'business automation solutions',
    'system integration automation',
  ],

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,

  name: 'Automation Services',

  description:
    'Business automation services including workflow automation, business process automation, RPA, IT automation, system integration, and AI-assisted automation.',

  url: pageUrl,

  serviceType: [
    'Workflow Automation',
    'Business Process Automation',
    'Robotic Process Automation',
    'IT Automation',
    'AI-Assisted Automation',
    'System Integration',
  ],

  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa/',
  },

  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gulfstreamtech.com.sa/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Services',
      item: 'https://gulfstreamtech.com.sa/ai-services/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Automation Services',
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AutomationServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <AutomationServicesContent />
    </>
  );
}