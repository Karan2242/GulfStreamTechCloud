import ITServicesContent from '@/components/pages/services/ITServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Managed IT Services in Saudi Arabia | GulfStream Technology',
  description: 'Reliable managed IT services in Saudi Arabia covering IT support, cybersecurity, infrastructure, backup, and deployment projects for growing businesses.',
  keywords: [
    'managed IT services Saudi Arabia',
    'IT support Saudi Arabia',
    'managed IT support Riyadh',
    'IT infrastructure services Saudi Arabia',
    'cybersecurity for SMB Saudi Arabia',
    'backup and disaster recovery Saudi Arabia',
    'IT projects and deployments Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/' },
  openGraph: {
    title: 'Managed IT Services in Saudi Arabia | GulfStream Technology',
    description: 'Reliable managed IT services in Saudi Arabia covering IT support, cybersecurity, infrastructure, backup, and deployment projects for growing businesses.',
    url: 'https://gulfstreamtech.com.sa/it-services/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT Services in Saudi Arabia | GulfStream Technology',
    description: 'Reliable managed IT services in Saudi Arabia covering IT support, cybersecurity, infrastructure, backup, and deployment projects for growing businesses.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed IT Services in Saudi Arabia',
  description:
    'Managed IT support, infrastructure, cybersecurity, backup, and IT deployment services for businesses in Saudi Arabia and the GCC.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'GCC' },
  ],
  serviceType: 'Managed IT Services',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
  ],
};

export default function ITServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ITServicesContent />
    </>
  );
}
