import ServicesIndexContent from '@/components/pages/services/ServicesIndexContent';
import { serviceFaqs } from '@/components/pages/services/servicesData';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const pageUrl = 'https://gulfstreamtech.com.sa/services/';
const pageTitle = 'Technology Services | Cloud, AI & IT Services | GulfStream Technologies';
const pageDescription = "Explore GulfStream Technologies' Cloud, AI, IT and technology talent services designed to help organizations modernize infrastructure, improve efficiency, strengthen security and execute technology initiatives.";

export const metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: ['technology services', 'Cloud Services', 'AI Services', 'IT Services', 'technology talent', 'cloud migration', 'FinOps', 'cybersecurity'],
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
