
import AwsManagedContent from '@/components/pages/services/cloud-managed/AwsManagedContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'AWS Managed Services Saudi Arabia',
  description: 'AWS managed services in Saudi Arabia — EC2, RDS, EKS, Lambda & S3. 30% cost reduction, 24/7 monitoring, security & FinOps optimization.',
  keywords: ['AWS managed services Saudi Arabia', 'AWS cloud management Riyadh', 'AWS EC2 managed services', 'AWS cost optimization Saudi Arabia', 'AWS security governance', 'AWS monitoring Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/aws/' },
  openGraph: {
    title: 'AWS Managed Services Saudi Arabia | GulfStream',
    description: 'AWS managed services in Saudi Arabia — EC2, RDS, EKS, Lambda & S3. 30% cost reduction, 24/7 monitoring, security & FinOps optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/aws/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Managed Services Saudi Arabia | GulfStream',
    description: 'AWS managed services in Saudi Arabia — EC2, RDS, EKS, Lambda & S3. 30% cost reduction, 24/7 monitoring, security & FinOps optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AWS Managed Services in Saudi Arabia',
  description: 'Complete AWS managed cloud services including EC2, RDS, EKS, Lambda, and S3 management. 24/7 monitoring, FinOps cost optimization, and security governance.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'AWS Managed Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What are AWS Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'AWS Managed Services means outsourcing your AWS operations to certified experts who handle monitoring, security, optimization, and incident response.', } },
      { '@type': 'Question', name: 'How much do AWS Managed Services cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs vary by account count and support level. We provide flexible pricing with a free assessment to deliver a tailored quote.', } },
      { '@type': 'Question', name: 'How quickly can you reduce AWS costs?', acceptedAnswer: { '@type': 'Answer', text: 'Many AWS clients see 20-35% cost reduction within 90 days through rightsizing and optimization.', } },
      { '@type': 'Question', name: 'Do you support AWS multi-account and hybrid environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage AWS multi-account estates and hybrid AWS deployments with consistent governance.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for AWS management in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'A local Saudi team of certified AWS engineers offers compliance expertise, Arabic support, and measurable cloud outcomes.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'AWS Managed Services' },
  ],
};

export default function AwsManagedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AwsManagedContent />
    </>
  );
}
