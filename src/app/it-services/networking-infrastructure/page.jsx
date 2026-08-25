import NetworkingInfrastructureContent from '@/components/pages/services/NetworkingInfrastructureContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Networking & Infrastructure Services | GulfStream Technology',
  description: 'Networking and infrastructure services for businesses in Saudi Arabia, including LAN/WAN design, Wi-Fi, switching, routing, firewall integration, and monitoring.',
  keywords: [
    'networking services Saudi Arabia',
    'network infrastructure Saudi Arabia',
    'LAN/WAN design Saudi Arabia',
    'Wi-Fi solutions Saudi Arabia',
    'firewall integration Saudi Arabia',
    'network monitoring Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/networking-infrastructure/' },
  openGraph: {
    title: 'Networking & Infrastructure Services | GulfStream Technology',
    description: 'Networking and infrastructure services for businesses in Saudi Arabia, including LAN/WAN design, Wi-Fi, switching, routing, firewall integration, and monitoring.',
    url: 'https://gulfstreamtech.com.sa/it-services/networking-infrastructure/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Networking & Infrastructure Services | GulfStream Technology',
    description: 'Networking and infrastructure services for businesses in Saudi Arabia, including LAN/WAN design, Wi-Fi, switching, routing, firewall integration, and monitoring.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Networking & Infrastructure Services',
  description:
    'LAN/WAN design, network optimization, firewall integration, Wi-Fi, routing, switching, and monitoring services for businesses in Saudi Arabia.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Networking & Infrastructure',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'Networking & Infrastructure', item: 'https://gulfstreamtech.com.sa/it-services/networking-infrastructure/' },
  ],
};

export default function NetworkingInfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NetworkingInfrastructureContent />
    </>
  );
}
