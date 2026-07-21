import MicrosoftCloudContent from '@/components/pages/services/cloud-managed/MicrosoftCloudContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Microsoft Cloud Services Saudi Arabia | Azure & Microsoft 365',
  description: 'Microsoft Cloud managed services in Saudi Arabia — Azure infrastructure and Microsoft 365 management. 24/7 operations, enterprise security, compliance, and cost optimization.',
  keywords: ['Microsoft Cloud Saudi Arabia', 'Azure managed services', 'Microsoft 365 management', 'cloud services Riyadh', 'Microsoft cloud security', 'Azure compliance Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/microsoft-cloud/' },
  openGraph: {
    title: 'Microsoft Cloud Services Saudi Arabia | GulfStream',
    description: 'Comprehensive Microsoft Cloud managed services — Azure infrastructure and Microsoft 365. 24/7 operations, security, compliance, and FinOps optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/microsoft-cloud/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Cloud Services Saudi Arabia | GulfStream',
    description: 'Comprehensive Microsoft Cloud managed services — Azure infrastructure and Microsoft 365. 24/7 operations, security, compliance, and FinOps optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft Cloud Services in Saudi Arabia',
  description: 'Comprehensive managed services for Microsoft Azure infrastructure and Microsoft 365 productivity platform, including 24/7 monitoring, enterprise governance, and FinOps cost optimization.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Microsoft Cloud Managed Services',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Microsoft Cloud' },
  ],
};

export default function MicrosoftCloudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MicrosoftCloudContent />
    </>
  );
}
