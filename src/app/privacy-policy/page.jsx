import PrivacyPolicyContent from '@/components/pages/PrivacyPolicyContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Legal', item: 'https://gulfstreamtech.com.sa/privacy-policy/' },
    { '@type': 'ListItem', position: 3, name: 'Privacy Policy', item: 'https://gulfstreamtech.com.sa/privacy-policy/' },
  ],
};

export const metadata = {
  title: 'Privacy Policy — GulfStream Technologies',
  description: 'Review GulfStream Technologies\' comprehensive privacy policy outlining how we collect, use, and protect your data across cloud managed services.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'cloud services privacy', 'data security', 'cookie policy'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy — GulfStream Technologies',
    description: 'Review GulfStream Technologies\' comprehensive privacy policy outlining how we collect, use, and protect your data across cloud managed services.',
    url: 'https://gulfstreamtech.com.sa/privacy-policy/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — GulfStream Technologies',
    description: 'Review GulfStream Technologies\' comprehensive privacy policy outlining how we collect, use, and protect your data across cloud managed services.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrivacyPolicyContent />
    </>
  );
}
