
import AboutContent from '@/components/pages/AboutContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does GulfStream Technologies do?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream is a B2B technology partner helping organizations modernize, transform, operate and optimize technology across Cloud, AI, IT and technology talent.' } },
    { '@type': 'Question', name: "What are GulfStream's four core capabilities?", acceptedAnswer: { '@type': 'Answer', text: 'Our four capabilities are Cloud Services, AI Services, IT Services and Manpower Services.' } },
    { '@type': 'Question', name: 'Can GulfStream support projects involving multiple technology areas?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We coordinate the capabilities needed for connected technology initiatives through one accountable relationship.' } },
    { '@type': 'Question', name: 'Do you provide consulting as well as implementation and managed services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We can engage for advisory work, project delivery, managed operations or specialist talent.' } },
    { '@type': 'Question', name: 'Can GulfStream provide specialized technology professionals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Manpower Services provides access to specialized technology professionals and project-based technical teams.' } },
    { '@type': 'Question', name: 'Which types of organizations does GulfStream work with?', acceptedAnswer: { '@type': 'Answer', text: 'We support SMB, mid-market, enterprise and government organizations.' } },
    { '@type': 'Question', name: 'Do you support organizations across Saudi Arabia and the GCC?', acceptedAnswer: { '@type': 'Answer', text: 'Our primary focus is Saudi Arabia, with strong coverage across the GCC.' } },
    { '@type': 'Question', name: 'How do we start working with GulfStream?', acceptedAnswer: { '@type': 'Answer', text: 'Start a conversation through our contact page or book a review to discuss your priorities and current technology environment.' } },
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
  title: 'About GulfStream Technologies — One Technology Partner',
  description: 'GulfStream Technologies is a Saudi Arabia and GCC-focused technology partner across Cloud, AI, IT and technology talent, supporting organizations from strategy through optimization.',
  keywords: ['GulfStream Technologies', 'technology partner Saudi Arabia', 'Cloud AI IT services GCC', 'technology talent Saudi Arabia'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/about/',
  },
  openGraph: {
    title: 'About GulfStream Technologies — One Technology Partner',
    description: 'One technology partner across Cloud, AI, IT and technology talent for organizations in Saudi Arabia and the GCC.',
    url: 'https://gulfstreamtech.com.sa/about/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GulfStream Technologies — One Technology Partner',
    description: 'One technology partner across Cloud, AI, IT and technology talent for organizations in Saudi Arabia and the GCC.',
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
