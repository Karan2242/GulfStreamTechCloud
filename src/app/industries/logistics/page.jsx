
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
          provider: { '@type': 'Organization', name: 'GulfStream Technology', url: 'https://gulfstreamtech.com.sa/' },
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
            { '@type': 'Question', name: 'What is logistics cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Logistics cloud infrastructure is a purpose-built cloud environment designed to support always-on fleet management, real-time IoT data processing from GPS and temperature sensors, supply chain analytics, and warehouse management — with 99.99% uptime and elastic scaling for peak demand.' } },
            { '@type': 'Question', name: 'How do you handle IoT data for logistics in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We build managed IoT data platforms on AWS IoT Core or Azure IoT Hub that process millions of fleet and warehouse sensor events per hour in real time with sub-second latency — supporting GPS tracking, temperature monitoring, and predictive maintenance analytics.' } },
            { '@type': 'Question', name: 'Which cloud platforms do you support for logistics?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We design logistics cloud architectures using AWS IoT, Redshift, and Lambda, or Azure IoT Hub, Synapse Analytics, and Azure Functions — based on your existing technology stack.' } },
            { '@type': 'Question', name: 'Can you reduce logistics cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our FinOps practice delivers an average 30% infrastructure cost reduction for logistics companies through elastic scaling, Spot Instance automation for batch analytics, and right-sizing of always-on fleet management systems.' } },
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
