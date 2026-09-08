import ServicesIndexContent from '@/components/pages/services/ServicesIndexContent';
import { serviceFaqs } from '@/components/pages/services/servicesData';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const pageUrl = 'https://gulfstreamtech.com.sa/services/';
const pageTitle = 'GulfStream Technologies | Cloud, AI, IT & Manpower Services';
const pageDescription = "Explore GulfStream Technologies' Cloud, AI, IT and Manpower Services for organizations across Saudi Arabia and the GCC.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['Cloud Services Saudi Arabia', 'AI Services Saudi Arabia', 'IT Services Saudi Arabia', 'IT manpower services Saudi Arabia', 'technology services GCC'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: 'website', siteName: 'GulfStream Technologies', locale: 'en_US', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [DEFAULT_OG_IMAGE.url] },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  publisher: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: serviceFaqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function ServicesPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <ServicesIndexContent />
  </>;
}
