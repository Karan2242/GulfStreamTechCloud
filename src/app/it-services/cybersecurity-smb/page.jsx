import CybersecuritySMBContent from '@/components/pages/services/CybersecuritySMBContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cybersecurity Essentials for SMB | GulfStream Technology',
  description: 'Practical cybersecurity support for small and medium businesses in Saudi Arabia, covering endpoint protection, email security, MFA, patching, and security awareness.',
  keywords: [
    'cybersecurity for SMB Saudi Arabia',
    'small business cybersecurity Saudi Arabia',
    'endpoint protection Saudi Arabia',
    'email security Saudi Arabia',
    'MFA implementation Saudi Arabia',
    'patch management Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/cybersecurity-smb/' },
  openGraph: {
    title: 'Cybersecurity Essentials for SMB | GulfStream Technology',
    description: 'Practical cybersecurity support for small and medium businesses in Saudi Arabia, covering endpoint protection, email security, MFA, patching, and security awareness.',
    url: 'https://gulfstreamtech.com.sa/it-services/cybersecurity-smb/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Essentials for SMB | GulfStream Technology',
    description: 'Practical cybersecurity support for small and medium businesses in Saudi Arabia, covering endpoint protection, email security, MFA, patching, and security awareness.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cybersecurity Essentials for SMB',
  description:
    'Managed cybersecurity services for SMBs, including endpoint protection, MFA, patching, email security, vulnerability management, and policy guidance.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Cybersecurity for SMB',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'Cybersecurity Essentials for SMB', item: 'https://gulfstreamtech.com.sa/it-services/cybersecurity-smb/' },
  ],
};

export default function CybersecuritySmbPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CybersecuritySMBContent />
    </>
  );
}
