
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
    { '@type': 'Question', name: 'What are AWS Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'AWS Managed Services involve outsourcing the day-to-day management of your Amazon Web Services environment to certified cloud experts. This includes 24/7 monitoring, security governance, cost optimization, patching, backups, and incident response for services like EC2, RDS, EKS, Lambda, and S3.' } },
    { '@type': 'Question', name: 'How much do AWS Managed Services cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'AWS Managed Services costs vary based on your environment size, number of accounts, and support level required. GulfStream Technologies offers flexible pricing tiers starting from basic monitoring to fully managed operations. Book a free assessment for a tailored quote.' } },
    { '@type': 'Question', name: 'How quickly can you reduce our AWS costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see a 20-35% reduction in AWS spend within the first 90 days through rightsizing, Reserved Instance optimization, unused resource cleanup, and FinOps best practices implemented by our certified engineers.' } },
    { '@type': 'Question', name: 'Why outsource AWS management in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Outsourcing AWS management to a Saudi-based provider like GulfStream Technologies gives you certified engineers, 24/7 NOC monitoring, regulatory compliance expertise, and FinOps-driven cost optimization — without the overhead of building an in-house cloud team.' } },
    { '@type': 'Question', name: 'What AWS services does GulfStream manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage the full AWS stack including EC2, RDS, Aurora, EKS, Lambda, S3, CloudFront, VPC, IAM, GuardDuty, Security Hub, Cost Explorer, and more. Our coverage spans compute, databases, networking, storage, security, and cost management.' } },
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
