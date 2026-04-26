
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
    {
      '@type': 'Question',
      name: 'What industries does GulfStream serve with Managed Cloud Services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technologies serves enterprises across retail, healthcare, SaaS, logistics, banking, government, and professional services in Saudi Arabia with multi-Managed Cloud Services across AWS, Azure, Google Cloud, and Oracle Cloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results can be achieved with cloud transformation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically achieve 28-35% cloud cost reduction, 99.99% application uptime, zero unplanned outages, and full compliance with NCA ECC and ISO 27001 within 60-90 days of engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before cloud transformation results are visible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most enterprises see measurable cost savings within 60-90 days. Performance improvements and uptime gains are typically visible within the first 30 days of GulfStream managing your cloud environment.',
      },
    },
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
