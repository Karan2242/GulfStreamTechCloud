
import BookReviewContent from '@/components/pages/BookReviewContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Multi-Cloud Assessment',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
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
      { '@type': 'Question', name: 'What is included in the free cloud review?', acceptedAnswer: { '@type': 'Answer', text: 'The review includes a cost analysis, security posture check, operational assessment, and an optimization roadmap delivered within five business days.', } },
      { '@type': 'Question', name: 'Is the cloud review really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The cloud review is free with no obligation, and you keep the full report regardless of engagement.', } },
      { '@type': 'Question', name: 'How long does the assessment take?', acceptedAnswer: { '@type': 'Answer', text: 'The assessment typically completes in 3-5 business days after the initial discovery call.', } },
      { '@type': 'Question', name: 'Which cloud platforms do you assess?', acceptedAnswer: { '@type': 'Answer', text: 'We assess AWS, Azure, Google Cloud, and Oracle Cloud environments, including single-cloud and multi-cloud estates.', } },
      { '@type': 'Question', name: 'Will I receive a cost savings report?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You receive a detailed savings report showing expected cost reductions and practical actions for ROI.', } },
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
    siteName: 'GulfStream Technologies',
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
