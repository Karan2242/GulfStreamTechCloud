import IndustriesIndexContent from '@/components/pages/IndustriesIndexContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const BASE_URL = 'https://gulfstreamtech.com.sa';
const industryNames = [
  'Retail & E-commerce',
  'Professional Services',
  'Logistics & Supply Chain',
  'Technology & SaaS',
  'Healthcare',
  'Real Estate',
  'Financial Services',
  'Oil & Gas',
  'Manufacturing',
  'Government',
];

export const metadata = {
  title: 'Technology Solutions Shaped Around Your Industry',
  description: 'Industry technology solutions across Cloud, AI, IT and technology talent for retail, professional services, logistics, SaaS, healthcare and other organizations in Saudi Arabia and the GCC.',
  keywords: ['technology solutions for industries', 'industry technology solutions', 'cloud and AI solutions for business', 'IT solutions for enterprises', 'industry-specific technology services'],
  alternates: { canonical: `${BASE_URL}/industries/` },
  openGraph: {
    title: 'Technology Solutions Shaped Around Your Industry | GulfStream',
    description: 'Industry-focused Cloud, AI, IT and technology talent for organizations across Saudi Arabia and the GCC.',
    url: `${BASE_URL}/industries/`,
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE.url, width: 1200, height: 630, alt: 'GulfStream industry technology solutions' }],
  },
  twitter: { card: 'summary_large_image', title: 'Technology Solutions Shaped Around Your Industry | GulfStream', description: 'Industry-focused Cloud, AI, IT and technology talent for organizations across Saudi Arabia and the GCC.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function IndustriesPage() {
  const itemListElement = industryNames.map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Industries Served by GulfStream Technologies',
          description: 'Industry-focused technology solutions across Cloud, AI, IT and technology talent.',
          numberOfItems: industryNames.length,
          itemListElement,
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: `${BASE_URL}/industries/` },
          ],
        }) }}
      />
      <IndustriesIndexContent />
    </>
  );
}
