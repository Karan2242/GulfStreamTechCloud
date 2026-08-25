import BackupDisasterRecoveryContent from '@/components/pages/services/BackupDisasterRecoveryContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Backup & Disaster Recovery Services | GulfStream Technology',
  description: 'Backup and disaster recovery planning for businesses in Saudi Arabia to protect critical data, reduce downtime, and strengthen business continuity.',
  keywords: [
    'backup and disaster recovery Saudi Arabia',
    'business continuity planning Saudi Arabia',
    'RPO and RTO planning Saudi Arabia',
    'data protection Saudi Arabia',
    'cloud backup Saudi Arabia',
    'disaster recovery services Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/backup-disaster-recovery/' },
  openGraph: {
    title: 'Backup & Disaster Recovery Services | GulfStream Technology',
    description: 'Backup and disaster recovery planning for businesses in Saudi Arabia to protect critical data, reduce downtime, and strengthen business continuity.',
    url: 'https://gulfstreamtech.com.sa/it-services/backup-disaster-recovery/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backup & Disaster Recovery Services | GulfStream Technology',
    description: 'Backup and disaster recovery planning for businesses in Saudi Arabia to protect critical data, reduce downtime, and strengthen business continuity.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Backup & Disaster Recovery',
  description:
    'Backup strategy, recovery planning, business continuity support, and disaster recovery testing for organizations protecting critical business data.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Backup & Disaster Recovery',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'Backup & Disaster Recovery', item: 'https://gulfstreamtech.com.sa/it-services/backup-disaster-recovery/' },
  ],
};

export default function BackupDisasterRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BackupDisasterRecoveryContent />
    </>
  );
}
