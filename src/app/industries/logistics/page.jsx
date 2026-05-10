
import LogisticsContent from '@/components/pages/industries/LogisticsContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Logistics Cloud Solutions Saudi Arabia',
  description: 'Resilient logistics cloud in Saudi Arabia. Real-time fleet tracking, IoT platforms, supply chain analytics & 99.99% uptime across AWS, Azure, GCP & OCI.',
  keywords: ['logistics cloud solutions Saudi Arabia', 'supply chain cloud infrastructure Saudi', 'AWS IoT logistics Saudi', 'fleet management cloud Saudi Arabia', 'logistics cloud cost optimization', 'warehouse management cloud Riyadh'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/logistics/' },
  openGraph: {
    title: 'Logistics Cloud Solutions Saudi Arabia | GulfStream',
    description: 'Resilient logistics cloud in Saudi Arabia. Real-time fleet tracking, IoT platforms, supply chain analytics & 99.99% uptime across AWS, Azure, GCP & OCI.',
    url: 'https://gulfstreamtech.com.sa/industries/logistics/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'Logistics cloud solutions Saudi Arabia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Logistics Cloud Solutions Saudi Arabia | GulfStream', description: 'Resilient logistics cloud in Saudi Arabia. Real-time fleet tracking, IoT platforms, supply chain analytics & 99.99% uptime across AWS, Azure, GCP & OCI.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function LogisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Logistics Cloud Solutions Saudi Arabia',
          description: 'Resilient multi-cloud infrastructure for Saudi logistics operations — real-time fleet tracking, IoT data platforms, supply chain analytics, and 99.99% uptime across AWS, Azure, Google Cloud, and Oracle Cloud.',
          provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa/' },
          areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          serviceType: 'Logistics Cloud Infrastructure',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
                              mainEntity: [
            { '@type': 'Question', name: 'What is logistics cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Logistics cloud infrastructure supports fleet tracking, IoT data, and supply chain analytics with scalable, reliable operations.', } },
            { '@type': 'Question', name: 'Do you support logistics IoT and real-time data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design cloud platforms for real-time IoT telemetry, tracking, and analytics on AWS and Azure.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you support for logistics?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, and Oracle Cloud and choose the best platform for your logistics workloads.', } },
            { '@type': 'Question', name: 'Can you reduce logistics cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our logistics clients save 25-35% through elastic scaling, optimization, and FinOps governance.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for logistics cloud operations?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver reliable logistics cloud solutions with local Saudi support and multi-cloud engineering expertise.', } },
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
            { '@type': 'ListItem', position: 3, name: 'Logistics', item: 'https://gulfstreamtech.com.sa/industries/logistics/' },
          ],
        }) }}
      />
      <LogisticsContent />
    </>
  );
}
