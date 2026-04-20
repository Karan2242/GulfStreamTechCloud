
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
    { '@type': 'Question', name: 'How do you ensure NCA ECC compliance in the cloud?', acceptedAnswer: { '@type': 'Answer', text: 'We implement automated compliance monitoring using AWS Config, Azure Policy, and continuous audit reporting aligned to NCA ECC controls. Our team maintains compliance as cloud environments evolve, preventing drift.' } },
    { '@type': 'Question', name: 'What cloud security tools do you use?', acceptedAnswer: { '@type': 'Answer', text: 'We use AWS GuardDuty, Security Hub, Azure Sentinel, Defender for Cloud, along with Terraform for policy-as-code, SIEM integration, and custom detection rules tailored to each client environment.' } },
    { '@type': 'Question', name: 'Do you provide 24/7 cloud security monitoring?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our security operations center provides 24/7 threat detection, real-time alert triage, incident response, and automated remediation — with human-backed analysis, not just automated emails.' } },
    { '@type': 'Question', name: 'How much does cloud security cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on environment size, compliance requirements, and support level. GulfStream offers flexible plans from security assessments to fully managed 24/7 security operations. Book a free assessment for pricing.' } },
    { '@type': 'Question', name: 'Can you secure multi-cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide unified security governance across AWS, Azure, Oracle Cloud, and Google Cloud — with centralized IAM, consistent compliance policies, and cross-cloud threat detection from a single pane of glass.' } },
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
