
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
      { '@type': 'Question', name: 'What are Azure Managed Services?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Managed Services means outsourcing your Azure operations, security, monitoring, and optimization to certified cloud engineers.', } },
      { '@type': 'Question', name: 'How much do Azure Managed Services cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs vary with subscription count and support requirements. We provide tailored quotes after a free assessment.', } },
      { '@type': 'Question', name: 'How quickly can you reduce Azure costs?', acceptedAnswer: { '@type': 'Answer', text: 'Most Azure clients see 25-35% savings within 90 days through reserved instances and hybrid benefit optimization.', } },
      { '@type': 'Question', name: 'Do you support hybrid Azure environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We support Azure Arc, ExpressRoute, and hybrid on-premises/cloud integration.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for Azure in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, Azure certifications, and compliance experience for reliable hybrid cloud operations.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
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
