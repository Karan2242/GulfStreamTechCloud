
import CaseStudiesContent from '@/components/pages/CaseStudiesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Case Studies Saudi Arabia — Real Results',
  description: 'Cloud case studies from Saudi Arabia. See how enterprises achieved 35% cost savings, 99.99% uptime & 24/7 monitoring with multi-Managed Cloud Services.',
  keywords: ['cloud case studies Saudi Arabia', 'cloud transformation case study', 'AWS cost optimization case study', 'Azure migration success story', 'Managed Cloud Services results', 'cloud cost savings Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/case-studies/' },
  openGraph: {
    title: 'Cloud Case Studies Saudi Arabia | GulfStream',
    description: 'Cloud case studies from Saudi Arabia. See how enterprises achieved 35% cost savings, 99.99% uptime & 24/7 monitoring with multi-Managed Cloud Services.',
    url: 'https://gulfstreamtech.com.sa/case-studies/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Case Studies Saudi Arabia | GulfStream',
    description: 'Cloud case studies from Saudi Arabia. See how enterprises achieved 35% cost savings, 99.99% uptime & 24/7 monitoring with multi-Managed Cloud Services.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Cloud Services',
  description: 'Enterprise Managed Cloud Services with 24/7 monitoring, FinOps optimization, and security governance across AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  serviceType: 'Managed Cloud Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'What results do GulfStream clients achieve?', acceptedAnswer: { '@type': 'Answer', text: 'Clients typically achieve 25-35% cloud cost reduction, 99.99% uptime, and stronger operational visibility within months.', } },
      { '@type': 'Question', name: 'How quickly can cloud transformation deliver value?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see measurable results in 60-90 days, with early wins from cost and performance optimization.', } },
      { '@type': 'Question', name: 'Which industries do you serve with cloud services?', acceptedAnswer: { '@type': 'Answer', text: 'We serve retail, healthcare, SaaS, logistics, government, and professional services enterprises across Saudi Arabia.', } },
      { '@type': 'Question', name: 'Do you support multi-cloud or hybrid environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments with unified operations.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for enterprise cloud transformation?', acceptedAnswer: { '@type': 'Answer', text: 'A local Saudi team with multi-cloud certifications and ROI-driven delivery makes transformations faster and more reliable.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://gulfstreamtech.com.sa/case-studies/' },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CaseStudiesContent />
    </>
  );
}
