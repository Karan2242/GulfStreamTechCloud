
import FinopsCostOptimizationContent from '@/components/pages/services/FinopsCostOptimizationContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'FinOps & Cloud Cost Optimization Saudi Arabia',
  description: 'FinOps & cloud cost optimization in Saudi Arabia. 32% average cost reduction across AWS, Azure, Google Cloud & Oracle Cloud with spend visibility, rightsizing & RI strategy.',
  keywords: ['FinOps Saudi Arabia', 'cloud cost optimization', 'cloud cost reduction', 'FinOps consulting', 'rightsizing', 'Reserved Instance strategy', 'cloud cost management Riyadh', 'FinOps framework', 'cloud spend optimization', 'GulfStream Technologies'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/finops-cost-optimization/' },
  openGraph: {
    title: 'FinOps & Cloud Cost Optimization Saudi Arabia | GulfStream',
    description: 'FinOps & cloud cost optimization in Saudi Arabia. 32% average cost reduction across AWS, Azure, Google Cloud & Oracle Cloud with spend visibility, rightsizing & RI strategy.',
    url: 'https://gulfstreamtech.com.sa/services/finops-cost-optimization/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinOps & Cloud Cost Optimization Saudi Arabia | GulfStream',
    description: 'FinOps & cloud cost optimization in Saudi Arabia. 32% average cost reduction across AWS, Azure, Google Cloud & Oracle Cloud with spend visibility, rightsizing & RI strategy.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'FinOps & Cloud Cost Optimization',
  description: 'Cloud FinOps and cost optimization services delivering 32% average cost reduction with full spend visibility, rightsizing, Reserved Instance strategy, and governance.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'FinOps Consulting',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What is FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'FinOps is a cloud financial operations framework that brings visibility, accountability, and optimization to cloud spend.', } },
      { '@type': 'Question', name: 'How much can you reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients save 25-35% through rightsizing, reserved capacity, and continuous cost governance.', } },
      { '@type': 'Question', name: 'How quickly can FinOps deliver savings?', acceptedAnswer: { '@type': 'Answer', text: 'Measurable savings can appear within 60-90 days through waste elimination and governance.', } },
      { '@type': 'Question', name: 'Do you support multi-cloud FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide FinOps across AWS, Azure, Google Cloud, Oracle Cloud, and multi-cloud environments.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for cloud cost optimization?', acceptedAnswer: { '@type': 'Answer', text: 'We combine FinOps methodology with local Saudi expertise and managed services to deliver sustainable savings.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'FinOps & Cost Optimization', item: 'https://gulfstreamtech.com.sa/services/finops-cost-optimization/' },
  ],
};

export default function FinopsCostOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FinopsCostOptimizationContent />
    </>
  );
}
