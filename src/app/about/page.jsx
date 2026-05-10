
import AboutContent from '@/components/pages/AboutContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What are Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Managed Cloud Services mean outsourcing cloud operations, monitoring, security, and optimization to specialists.', } },
      { '@type': 'Question', name: 'How much do your cloud services cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on environment size, platform mix, and support level. We offer flexible packages with clear ROI and a tailored quote.', } },
      { '@type': 'Question', name: 'How quickly can you deliver results?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients see measurable cost savings and improved cloud stability within 60-90 days.', } },
      { '@type': 'Question', name: 'Do you support multi-cloud and hybrid environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage AWS, Azure, Google Cloud, Oracle Cloud, and hybrid on-prem/cloud environments.', } },
      { '@type': 'Question', name: 'Why choose GulfStream Technologies over other providers?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, certified multi-cloud engineers, and transparent delivery for measurable cloud outcomes.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://gulfstreamtech.com.sa/about/' },
  ],
};

export const metadata = {
  title: 'About Us — Cloud Experts Saudi Arabia',
  description: 'GulfStream Technologies is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
  keywords: ['about GulfStream Technologies', 'cloud management Saudi Arabia', 'AWS managed services Saudi Arabia', 'Azure consulting Saudi Arabia', 'FinOps consulting Saudi Arabia', 'cloud cost optimization experts'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/about/',
  },
  openGraph: {
    title: 'About Us — Cloud Experts Saudi Arabia | GulfStream',
    description: 'GulfStream Technologies is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
    url: 'https://gulfstreamtech.com.sa/about/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Cloud Experts Saudi Arabia | GulfStream',
    description: 'GulfStream Technologies is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutContent />
    </>
  );
}
