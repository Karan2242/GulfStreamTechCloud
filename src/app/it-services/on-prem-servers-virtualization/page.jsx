import OnPremServersVirtualizationContent from '@/components/pages/services/OnPremServersVirtualizationContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'On-Prem Servers & Virtualization | GulfStream Technology',
  description: 'Server deployment, virtualization, VMware and Hyper-V support, storage, and Active Directory services for businesses modernizing on-premises infrastructure.',
  keywords: [
    'on-prem server services Saudi Arabia',
    'virtualization services Saudi Arabia',
    'VMware support Saudi Arabia',
    'Hyper-V support Saudi Arabia',
    'Windows Server support Saudi Arabia',
    'server consolidation Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/on-prem-servers-virtualization/' },
  openGraph: {
    title: 'On-Prem Servers & Virtualization | GulfStream Technology',
    description: 'Server deployment, virtualization, VMware and Hyper-V support, storage, and Active Directory services for businesses modernizing on-premises infrastructure.',
    url: 'https://gulfstreamtech.com.sa/it-services/on-prem-servers-virtualization/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Prem Servers & Virtualization | GulfStream Technology',
    description: 'Server deployment, virtualization, VMware and Hyper-V support, storage, and Active Directory services for businesses modernizing on-premises infrastructure.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'On-Prem Servers & Virtualization',
  description:
    'Physical server deployment, virtualization design, hypervisor support, storage configuration, and on-premises platform management for business-critical workloads.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'On-Prem Infrastructure',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'On-Prem Servers & Virtualization', item: 'https://gulfstreamtech.com.sa/it-services/on-prem-servers-virtualization/' },
  ],
};

export default function OnPremServersVirtualizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OnPremServersVirtualizationContent />
    </>
  );
}
