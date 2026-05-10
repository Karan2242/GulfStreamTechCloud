
import RetailContent from '@/components/pages/industries/RetailContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Retail Cloud Solutions Saudi Arabia',
  description: 'Scalable retail cloud in Saudi Arabia. Auto-scaling for peak seasons, omnichannel integration, PCI DSS compliance & analytics across AWS, Azure, GCP & OCI.',
  keywords: ['retail cloud solutions Saudi Arabia', 'e-commerce cloud infrastructure Saudi', 'AWS retail cloud Saudi', 'PCI DSS cloud compliance Saudi', 'omnichannel cloud Saudi Arabia', 'retail cloud cost optimization Riyadh'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/retail/' },
  openGraph: {
    title: 'Retail Cloud Solutions Saudi Arabia | GulfStream',
    description: 'Scalable retail cloud in Saudi Arabia. Auto-scaling for peak seasons, omnichannel integration, PCI DSS compliance & analytics across AWS, Azure, GCP & OCI.',
    url: 'https://gulfstreamtech.com.sa/industries/retail/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'Retail cloud solutions Saudi Arabia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Retail Cloud Solutions Saudi Arabia | GulfStream', description: 'Scalable retail cloud in Saudi Arabia. Auto-scaling for peak seasons, omnichannel integration, PCI DSS compliance & analytics across AWS, Azure, GCP & OCI.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function RetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Retail Cloud Solutions Saudi Arabia',
          description: 'Scalable multi-cloud infrastructure for Saudi retail — elastic auto-scaling, omnichannel integration, PCI DSS compliance, and retail analytics across AWS, Azure, Google Cloud, and Oracle Cloud.',
          provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa/' },
          areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          serviceType: 'Retail Cloud Infrastructure',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
                              mainEntity: [
            { '@type': 'Question', name: 'What is retail cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Retail cloud infrastructure supports e-commerce, inventory, and peak traffic events with secure, scalable architecture.', } },
            { '@type': 'Question', name: 'How do you handle PCI DSS compliance?', acceptedAnswer: { '@type': 'Answer', text: 'We build PCI DSS-compliant retail cloud environments with network controls, encryption, and continuous monitoring.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you support for retail?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, and Oracle Cloud for retail workloads and seasonal scaling.', } },
            { '@type': 'Question', name: 'Can you reduce retail cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cut retail cloud spend through elastic scaling, rightsizing, and FinOps controls.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for retail cloud in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We combine retail cloud experience, peak-event scaling, and Saudi compliance knowledge for reliable operations.', } },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://gulfstreamtech.com.sa/industries/' },
            { '@type': 'ListItem', position: 3, name: 'Retail', item: 'https://gulfstreamtech.com.sa/industries/retail/' },
          ],
        }) }}
      />
      <RetailContent />
    </>
  );
}
