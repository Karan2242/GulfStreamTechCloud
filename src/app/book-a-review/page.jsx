
import BookReviewContent from '@/components/pages/BookReviewContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Multi-Cloud Assessment',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  description: 'Free multi-cloud assessment including cost optimization audit, security posture review, and 90-day optimization roadmap for Saudi enterprises.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SAR',
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in a free cloud review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our free cloud review includes a detailed cloud cost analysis with estimated SAR savings, a security posture review covering IAM, encryption, and NCA ECC compliance, and a 90-day optimization roadmap — all delivered within 5 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the cloud assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The full assessment takes 3-5 business days after the initial 30-minute discovery call. We present findings in a live session with your team, including actionable recommendations you can implement immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the cloud review really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% free with no obligation to engage GulfStream afterward. You keep the full assessment report, cost analysis, and optimization roadmap regardless of your decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cloud platforms do you assess?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We assess single-cloud and multi-cloud environments for Saudi enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I receive a cost savings report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every free cloud review includes a detailed cost savings report with specific SAR amounts, identifying idle resources, oversized instances, Reserved Instance opportunities, and governance improvements. Our clients typically see 25-35% savings opportunities identified.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Book a Free Cloud Review', item: 'https://gulfstreamtech.com.sa/book-a-review/' },
  ],
};

export const metadata = {
  title: 'Free Cloud Assessment Saudi Arabia',
  description: 'Book a free multi-cloud assessment in Saudi Arabia. Identify cost savings, security gaps & optimization opportunities with certified cloud experts.',
  keywords: ['free cloud assessment Saudi Arabia', 'AWS cloud review Saudi Arabia', 'Azure cloud assessment', 'cloud cost optimization audit', 'cloud security assessment Saudi Arabia', 'free cloud consultation Riyadh'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/book-a-review/',
  },
  openGraph: {
    title: 'Free Cloud Assessment Saudi Arabia | GulfStream',
    description: 'Book a free multi-cloud assessment in Saudi Arabia. Identify cost savings, security gaps & optimization opportunities with certified cloud experts.',
    url: 'https://gulfstreamtech.com.sa/book-a-review/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cloud Assessment Saudi Arabia | GulfStream',
    description: 'Book a free multi-cloud assessment in Saudi Arabia. Identify cost savings, security gaps & optimization opportunities with certified cloud experts.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function BookReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BookReviewContent />
    </>
  );
}
