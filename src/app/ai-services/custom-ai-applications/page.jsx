import CustomAIApplicationsContent from '@/components/pages/services/CustomAIApplicationsContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Custom AI Applications | AI Application Development',
  description: 'Build custom AI applications for business workflows, enterprise knowledge, document processing, AI-powered search and employee productivity with GulfStream Technologies.',
  keywords: [
    'custom AI applications',
    'internal copilot',
    'knowledge assistant',
    'AI-powered business tools',
    'RAG AI solutions',
    'custom AI applications',
    'custom AI application development',
    'enterprise AI applications',
    'AI application development',
    'custom AI solutions',
    'business AI solutions',
    'AI workflow automation',
    'enterprise knowledge assistants',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/ai-services/custom-ai-applications/' },
  openGraph: {
    title: 'Custom AI Applications | GulfStream Technology',
    description: 'Custom AI applications and internal copilots for businesses that need practical AI experiences connected to approved business knowledge and workflows.',
    url: 'https://gulfstreamtech.com.sa/ai-services/custom-ai-applications/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Applications | GulfStream Technology',
    description: 'Custom AI applications and internal copilots for businesses that need practical AI experiences connected to approved business knowledge and workflows.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom AI Applications',
  description:
    'Development of internal AI assistants, knowledge search tools, document support features, and business applications connected to approved operational data and workflows.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Custom AI Applications',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'AI Services', item: 'https://gulfstreamtech.com.sa/ai-services/' },
    { '@type': 'ListItem', position: 3, name: 'Custom AI Applications', item: 'https://gulfstreamtech.com.sa/ai-services/custom-ai-applications/' },
  ],
};

export default function CustomAIApplicationsPage() {
  const faqs = [
    {
      question: 'What are custom AI applications?',
      answer:
        'Custom AI applications are purpose-built software experiences that use AI to solve specific business problems by integrating approved data, workflows, and user permissions.',
    },
    {
      question: 'What types of custom AI applications can GulfStream build?',
      answer:
        'We build internal AI copilots, enterprise knowledge assistants, document intelligence tools, AI-powered search, workflow assistants, and tailored business applications.',
    },
    {
      question: 'Can a custom AI application connect to company data?',
      answer:
        'Yes. Applications can integrate approved information sources and internal systems when allowed, with controls to limit access and scope.',
    },
    {
      question: 'Can AI applications respect employee permissions?',
      answer:
        'Absolutely. Solutions are designed around role-based access and business permissions so responses and actions respect user entitlements.',
    },
    {
      question: 'Are custom AI applications only suitable for large enterprises?',
      answer:
        'No. We tailor solutions to fit organizations of different sizes and maturity — start small with a high-value use case and scale from there.',
    },
    {
      question: 'How do we identify the right AI use case?',
      answer:
        'We start from a business problem, identify measurable outcomes, and map available data and workflows to the simplest practical solution that delivers value.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CustomAIApplicationsContent faqs={faqs} />
    </>
  );
}
