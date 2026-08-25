import DataEngineeringBIContent from '@/components/pages/services/DataEngineeringBIContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Data Engineering & BI Services | GulfStream Technology',
  description: 'Data engineering, BI, reporting, and dashboard services that create clean data foundations for AI, analytics, and decision-making.',
  keywords: [
    'data engineering services',
    'business intelligence Saudi Arabia',
    'data pipelines',
    'dashboard development',
    'AI-ready data foundations',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/ai-services/data-engineering-bi/' },
  openGraph: {
    title: 'Data Engineering & BI Services | GulfStream Technology',
    description: 'Data engineering, BI, reporting, and dashboard services that create clean data foundations for AI, analytics, and decision-making.',
    url: 'https://gulfstreamtech.com.sa/ai-services/data-engineering-bi/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Engineering & BI Services | GulfStream Technology',
    description: 'Data engineering, BI, reporting, and dashboard services that create clean data foundations for AI, analytics, and decision-making.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Engineering & BI',
  description:
    'Data integration, transformation, pipeline design, business intelligence, reporting, and analytics services for organizations preparing data for AI and operational insight.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Data Engineering & BI',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'AI Services', item: 'https://gulfstreamtech.com.sa/ai-services/' },
    { '@type': 'ListItem', position: 3, name: 'Data Engineering & BI', item: 'https://gulfstreamtech.com.sa/ai-services/data-engineering-bi/' },
  ],
};

export default function DataEngineeringBIPage() {
  const faqs = [
    {
      question: 'What is data engineering?',
      answer:
        'Data engineering is the process of collecting, integrating, transforming, storing, and preparing data so it can be reliably used for analytics, business intelligence, and AI.',
    },
    {
      question: 'What are data engineering services?',
      answer:
        'Data engineering services typically include data integration, ETL or ELT pipelines, data transformation, data warehousing, data quality, and analytics preparation.',
    },
    {
      question: 'What is the difference between data engineering and business intelligence?',
      answer:
        'Data engineering focuses on collecting, moving, transforming, and preparing data. Business intelligence uses that prepared data to create dashboards, reports, KPIs, and insights for decision-making.',
    },
    {
      question: 'Why is data engineering important for business intelligence?',
      answer:
        'BI depends on reliable and consistent data. Data engineering creates the pipelines, transformations, and data structures required for accurate and usable reporting.',
    },
    {
      question: 'Can data engineering support AI initiatives?',
      answer:
        'Yes. AI applications benefit from accessible, structured, consistent, and governed data. Data engineering helps create the foundation required for AI applications and automation.',
    },
    {
      question: 'What is a data pipeline?',
      answer:
        'A data pipeline is a repeatable process that moves and processes data from source systems into a destination where it can be analyzed, reported on, or used by applications.',
    },
    {
      question: 'What is a data warehouse?',
      answer:
        'A data warehouse is a centralized analytical data environment designed to organize business information for reporting, analytics, and decision-making.',
    },
    {
      question: 'Can you integrate data from multiple business systems?',
      answer:
        'Yes. Data integration can connect information from applications, databases, APIs, files, cloud services, and other business systems into more consistent analytical workflows.',
    },
    {
      question: 'Can a business start with a small data engineering project?',
      answer:
        'Yes. A phased approach can begin with priority data sources or reporting requirements and expand as the organization\'s data maturity and business needs grow.',
    },
    {
      question: 'How do I know if my business needs data engineering?',
      answer:
        'Data engineering may be valuable when business data is spread across multiple systems, reporting requires significant manual preparation, teams lack consistent data definitions, or the organization wants a stronger foundation for analytics and AI.',
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
      <DataEngineeringBIContent />
    </>
  );
}
