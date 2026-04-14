import TermsOfServiceContent from '@/components/pages/TermsOfServiceContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Legal', item: 'https://gulfstreamtech.com.sa/terms-of-service/' },
    { '@type': 'ListItem', position: 3, name: 'Terms of Service', item: 'https://gulfstreamtech.com.sa/terms-of-service/' },
  ],
};

export const metadata = {
  title: 'Terms of Service — GulfStream Technology',
  description: 'Read the terms and conditions governing the use of GulfStream Technology\'s website and cloud managed services.',
  keywords: ['terms of service', 'terms and conditions', 'service agreement', 'website terms', 'legal terms', 'cloud services terms'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/terms-of-service/',
  },
  openGraph: {
    title: 'Terms of Service — GulfStream Technology',
    description: 'Read the terms and conditions governing the use of GulfStream Technology\'s website and cloud managed services.',
    url: 'https://gulfstreamtech.com.sa/terms-of-service/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — GulfStream Technology',
    description: 'Read the terms and conditions governing the use of GulfStream Technology\'s website and cloud managed services.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TermsOfServiceContent />
    </>
  );
}
