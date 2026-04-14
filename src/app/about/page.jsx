
import AboutContent from '@/components/pages/AboutContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What cloud services does GulfStream Technology offer in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technology offers AWS managed services, Azure managed services, FinOps cost optimization, cloud migration, cloud security & governance, and cloud billing management for enterprises across Saudi Arabia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cloud platforms does GulfStream support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments for Saudi enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GulfStream reduce cloud costs for Saudi enterprises?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We apply FinOps best practices including rightsizing, Reserved Instance planning, Spot optimization, tagging governance, and anomaly detection — delivering an average 32% cloud cost reduction across our client portfolio.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does GulfStream serve in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream serves retail, healthcare, SaaS, logistics, banking, government, and professional services enterprises across Riyadh, Jeddah, Dammam, and the wider Saudi Arabia region.',
      },
    },
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
  description: 'GulfStream Technology is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
  keywords: ['about GulfStream Technology', 'cloud management Saudi Arabia', 'AWS managed services Saudi Arabia', 'Azure consulting Saudi Arabia', 'FinOps consulting Saudi Arabia', 'cloud cost optimization experts'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/about/',
  },
  openGraph: {
    title: 'About Us — Cloud Experts Saudi Arabia | GulfStream',
    description: 'GulfStream Technology is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
    url: 'https://gulfstreamtech.com.sa/about/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Cloud Experts Saudi Arabia | GulfStream',
    description: 'GulfStream Technology is a leading cloud management company in Saudi Arabia specializing in AWS, Azure, FinOps, and cloud cost optimization for enterprises.',
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
