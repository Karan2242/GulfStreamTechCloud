
import AzureManagedContent from '@/components/pages/services/cloud-managed/AzureManagedContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Azure Managed Services Saudi Arabia',
  description: 'Azure managed services in Saudi Arabia — VMs, AKS, Azure SQL, Entra ID & Defender. 29% cost reduction, 24/7 monitoring & FinOps optimization.',
  keywords: ['Azure managed services Saudi Arabia', 'Azure cloud consulting Riyadh', 'Azure cost optimization Saudi Arabia', 'Azure security governance', 'hybrid cloud management Saudi Arabia', 'Azure monitoring Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/azure/' },
  openGraph: {
    title: 'Azure Managed Services Saudi Arabia | GulfStream',
    description: 'Azure managed services in Saudi Arabia — VMs, AKS, Azure SQL, Entra ID & Defender. 29% cost reduction, 24/7 monitoring & FinOps optimization.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/azure/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure Managed Services Saudi Arabia | GulfStream',
    description: 'Azure managed services in Saudi Arabia — VMs, AKS, Azure SQL, Entra ID & Defender. 29% cost reduction, 24/7 monitoring & FinOps optimization.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure Managed Services in Saudi Arabia',
  description: 'Comprehensive Microsoft Azure managed services including VMs, AKS, Azure SQL, Entra ID, and Defender. 24/7 monitoring, hybrid cloud governance, and FinOps cost optimization.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Azure Managed Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are Azure Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Managed Services involve outsourcing the management of your Microsoft Azure environment to certified cloud experts. This includes 24/7 monitoring, security governance with Defender for Cloud, cost optimization, patching, Entra ID management, and incident response.' } },
    { '@type': 'Question', name: 'How much do Azure Managed Services cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Managed Services costs depend on your environment complexity, number of subscriptions, and support level. GulfStream Technologies offers flexible pricing from basic monitoring to fully managed operations including hybrid cloud support. Book a free assessment for a quote.' } },
    { '@type': 'Question', name: 'How quickly can you reduce our Azure costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises achieve a 25-35% reduction in Azure spend within the first 90 days through rightsizing, Azure Reservations, Hybrid Benefit optimization, and elimination of idle resources using our FinOps methodology.' } },
    { '@type': 'Question', name: 'Why choose Azure Managed Services in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Azure has a dedicated cloud region in Saudi Arabia, making it ideal for data residency requirements. A local managed services provider like GulfStream Technologies ensures low-latency support, NCA ECC compliance, and deep understanding of the Saudi enterprise market.' } },
    { '@type': 'Question', name: 'Do you support hybrid Azure environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialize in managing hybrid Azure environments including Azure Arc, ExpressRoute connectivity, Active Directory synchronization, and Azure Stack HCI — ensuring seamless integration between on-premises and cloud infrastructure.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Managed Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
    { '@type': 'ListItem', position: 4, name: 'Azure Managed Services' },
  ],
};

export default function AzureManagedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureManagedContent />
    </>
  );
}
