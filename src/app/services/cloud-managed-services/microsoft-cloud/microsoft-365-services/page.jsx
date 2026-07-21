import Microsoft365ServicesContent from '@/components/pages/services/cloud-managed/Microsoft365ServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Microsoft 365 Managed Services Saudi Arabia',
  description: 'Microsoft 365 managed services in Saudi Arabia — Exchange Online, Teams, SharePoint, OneDrive, and Microsoft Entra ID. 24/7 support, compliance, and license optimization.',
  keywords: ['Microsoft 365 management Saudi Arabia', 'Exchange Online management', 'Teams administration', 'Microsoft 365 support Riyadh', 'Microsoft 365 security', 'Microsoft 365 compliance Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/microsoft-cloud/microsoft-365-services/' },
  openGraph: {
    title: 'Microsoft 365 Managed Services Saudi Arabia | GulfStream',
    description: 'Complete Microsoft 365 managed services — Exchange, Teams, SharePoint, OneDrive, Entra ID. 24/7 support, compliance, and license optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/microsoft-cloud/microsoft-365-services/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft 365 Managed Services Saudi Arabia | GulfStream',
    description: 'Complete Microsoft 365 managed services — Exchange, Teams, SharePoint, OneDrive, Entra ID. 24/7 support, compliance, and license optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft 365 Managed Services in Saudi Arabia',
  description: 'Comprehensive Microsoft 365 managed services including Exchange Online, Teams, SharePoint, OneDrive, and Microsoft Entra ID. 24/7 operations, security, compliance, and end-user support.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Microsoft 365 Managed Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are Microsoft 365 Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'Microsoft 365 Managed Services means outsourcing management of Exchange Online, Teams, SharePoint, OneDrive, and Microsoft Entra ID to certified specialists. We handle licensing, governance, security, compliance, and end-user support.' } },
    { '@type': 'Question', name: 'How does Microsoft 365 management reduce costs?', acceptedAnswer: { '@type': 'Answer', text: 'We optimize licensing through true-up analysis, eliminate redundant licenses, manage seat usage, negotiate volume discounts. Most organizations save 20-35% annually on Microsoft 365 investments.' } },
    { '@type': 'Question', name: 'Do you provide end-user support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide comprehensive end-user support for Microsoft 365 applications through tiered support (L1/L2/L3) with ticket-based tracking and custom SLAs.' } },
    { '@type': 'Question', name: 'Can you handle Microsoft 365 migrations?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We manage complete migrations from on-premises Exchange/SharePoint to Microsoft 365 with zero business interruption.' } },
    { '@type': 'Question', name: 'How do you ensure Microsoft 365 compliance in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We implement compliance policies aligned to NCA ECC, GDPR, and industry regulations including data governance, retention policies, and audit logging.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Microsoft Cloud', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/microsoft-cloud/' },
    { '@type': 'ListItem', position: 5, name: 'Microsoft 365 Services' },
  ],
};

export default function Microsoft365ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Microsoft365ServicesContent />
    </>
  );
}
