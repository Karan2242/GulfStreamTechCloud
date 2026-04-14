
import ContactContent from '@/components/pages/ContactContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'GulfStream Technology',
  url: 'https://gulfstreamtech.com.sa',
  description: 'Leading cloud consulting company in Riyadh, Saudi Arabia — AWS managed services, Azure consulting, FinOps, and cloud cost optimization experts.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6526 At Takhassusi Road, Almathar Ash Shamali District',
    addressLocality: 'Riyadh',
    postalCode: '12332',
    addressRegion: 'Central Province',
    addressCountry: 'SA',
  },
  telephone: '+96653201917',
  email: 'sales@gulfstreamtech.com.sa',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '08:00',
    closes: '18:00',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '24.7136',
    longitude: '46.6753',
  },
  priceRange: 'SAR 8,500 - SAR 55,000/month',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly does GulfStream respond to enquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We respond to all enquiries within 4 business hours during Sun-Thu 8am-6pm AST. For active managed services clients, we provide 24/7 support with 15-minute response times for critical issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GulfStream offer a free cloud consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every prospective client receives a free cloud assessment including cost analysis, security posture review, and a 90-day optimization roadmap — delivered within 5 business days at no cost or commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud platforms does GulfStream support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments for Saudi enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GulfStream help reduce our cloud costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our FinOps-certified team delivers an average 32% cloud cost reduction through rightsizing, Reserved Instance planning, Spot optimization, and governance improvements. See our case studies for documented results.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://gulfstreamtech.com.sa/contact/' },
  ],
};

export const metadata = {
  title: 'Contact Cloud Experts Riyadh, Saudi Arabia',
  description: 'Contact GulfStream for multi-cloud consulting in Riyadh, Saudi Arabia. AWS, Azure, Google Cloud & Oracle Cloud experts. Response within 4 hours.',
  keywords: ['contact cloud experts Saudi Arabia', 'cloud consulting company Riyadh', 'AWS consulting Saudi Arabia', 'Azure consulting Saudi Arabia', 'FinOps services Saudi Arabia', 'cloud cost optimization Saudi Arabia'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/contact/',
  },
  openGraph: {
    title: 'Contact Cloud Experts Riyadh, Saudi Arabia | GulfStream',
    description: 'Contact GulfStream for multi-cloud consulting in Riyadh, Saudi Arabia. AWS, Azure, Google Cloud & Oracle Cloud experts. Response within 4 hours.',
    url: 'https://gulfstreamtech.com.sa/contact/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cloud Experts Riyadh, Saudi Arabia | GulfStream',
    description: 'Contact GulfStream for multi-cloud consulting in Riyadh, Saudi Arabia. AWS, Azure, Google Cloud & Oracle Cloud experts. Response within 4 hours.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactContent />
    </>
  );
}
