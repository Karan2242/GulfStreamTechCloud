
import CloudSecurityGovernanceContent from '@/components/pages/services/CloudSecurityGovernanceContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Security & Governance Saudi Arabia',
  description: 'Cloud security & governance in Saudi Arabia across AWS, Azure, Google Cloud & Oracle Cloud. Threat detection, IAM hardening, NCA ECC compliance & 24/7 SOC.',
  keywords: ['cloud security Saudi Arabia', 'cloud governance', 'IAM hardening', 'NCA ECC compliance', 'threat detection', 'cloud security Riyadh', 'CSPM', 'cloud compliance', 'security operations center', 'GulfStream Technologies'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-security-governance/' },
  openGraph: {
    title: 'Cloud Security & Governance Saudi Arabia | GulfStream',
    description: 'Cloud security & governance in Saudi Arabia across AWS, Azure, Google Cloud & Oracle Cloud. Threat detection, IAM hardening, NCA ECC compliance & 24/7 SOC.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-security-governance/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Security & Governance Saudi Arabia | GulfStream',
    description: 'Cloud security & governance in Saudi Arabia across AWS, Azure, Google Cloud & Oracle Cloud. Threat detection, IAM hardening, NCA ECC compliance & 24/7 SOC.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Security & Governance',
  description: 'Enterprise cloud security and governance with continuous threat detection, IAM hardening, NCA ECC compliance automation, and 24/7 security operations.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Cloud Security Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'How do you ensure NCA ECC compliance?', acceptedAnswer: { '@type': 'Answer', text: 'We implement NCA ECC controls with automated monitoring, policy enforcement, and audit-ready reporting across your cloud estate.', } },
      { '@type': 'Question', name: 'Do you provide 24/7 security monitoring?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our security operations team monitors threats around the clock and responds with SLA-backed support.', } },
      { '@type': 'Question', name: 'Can you secure multi-cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We secure AWS, Azure, Google Cloud, Oracle Cloud, and multi-cloud environments with centralized governance.', } },
      { '@type': 'Question', name: 'How much does cloud security governance cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on your cloud estate and compliance needs. We offer a free security assessment with a customized estimate.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for cloud security in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local compliance expertise, certified security engineers, and managed operations to protect cloud workloads effectively.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Security & Governance', item: 'https://gulfstreamtech.com.sa/services/cloud-security-governance/' },
  ],
};

export default function CloudSecurityGovernancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CloudSecurityGovernanceContent />
    </>
  );
}
