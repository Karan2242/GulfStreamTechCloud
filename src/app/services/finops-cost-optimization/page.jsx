
import FinopsCostOptimizationContent from '@/components/pages/services/FinopsCostOptimizationContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'FinOps & Cloud Cost Optimization Saudi Arabia',
  description: 'FinOps & cloud cost optimization in Saudi Arabia. 32% average cost reduction across AWS, Azure, Google Cloud & Oracle Cloud with spend visibility, rightsizing & RI strategy.',
  keywords: ['FinOps Saudi Arabia', 'cloud cost optimization', 'cloud cost reduction', 'FinOps consulting', 'rightsizing', 'Reserved Instance strategy', 'cloud cost management Riyadh', 'FinOps framework', 'cloud spend optimization', 'GulfStream Technology'],
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
  provider: { '@type': 'Organization', name: 'GulfStream Technology', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'FinOps Consulting',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'FinOps (Cloud Financial Operations) is a framework for managing cloud costs through collaboration between finance, engineering, and business teams. It follows three phases — Inform, Optimize, Operate — to drive continuous cloud cost reduction and accountability.' } },
    { '@type': 'Question', name: 'How quickly can you reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see a 20-35% reduction in cloud spend within 90 days through rightsizing, Reserved Instance optimization, idle resource cleanup, and architectural improvements. Quick wins are typically identified within the first 2 weeks.' } },
    { '@type': 'Question', name: 'What is the ROI of FinOps consulting?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream\'s FinOps engagements deliver an average 3x ROI on Reserved Instances and an overall 32% cost reduction. The investment in FinOps typically pays for itself within the first month of optimization.' } },
    { '@type': 'Question', name: 'How much does FinOps cost optimization cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs vary based on environment size and cloud spend. GulfStream offers flexible pricing from one-time cost assessments to ongoing FinOps-as-a-service. Book a free cost analysis to see potential savings before committing.' } },
    { '@type': 'Question', name: 'Do you support multi-cloud FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GulfStream provides unified FinOps across AWS, Azure, Oracle Cloud, and Google Cloud — with consolidated dashboards, cross-cloud rightsizing, and commitment optimization across all providers.' } },
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
