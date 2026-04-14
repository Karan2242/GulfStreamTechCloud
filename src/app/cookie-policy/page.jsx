import CookiePolicyContent from '@/components/pages/CookiePolicyContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Legal', item: 'https://gulfstreamtech.com.sa/cookie-policy/' },
    { '@type': 'ListItem', position: 3, name: 'Cookie Policy', item: 'https://gulfstreamtech.com.sa/cookie-policy/' },
  ],
};

export const metadata = {
  title: 'Cookie Policy — GulfStream Technology',
  description: 'Learn how GulfStream Technology uses cookies and similar tracking technologies to enhance your browsing experience.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'website cookies', 'analytics cookies', 'cookie consent'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/cookie-policy/',
  },
  openGraph: {
    title: 'Cookie Policy — GulfStream Technology',
    description: 'Learn how GulfStream Technology uses cookies and similar tracking technologies to enhance your browsing experience.',
    url: 'https://gulfstreamtech.com.sa/cookie-policy/',
    type: 'website',
    siteName: 'GulfStream Technology',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy — GulfStream Technology',
    description: 'Learn how GulfStream Technology uses cookies and similar tracking technologies to enhance your browsing experience.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CookiePolicyContent />
    </>
  );
}
