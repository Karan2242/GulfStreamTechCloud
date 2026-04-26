
import CloudManagedServicesContent from '@/components/pages/services/CloudManagedServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Multi-Managed Cloud Services Saudi Arabia',
  description: '24/7 managed cloud services for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Monitoring, FinOps, security governance & certified cloud experts.',
  keywords: [
    'Managed Cloud Services Saudi Arabia',
    'AWS managed services Riyadh',
    'Azure managed services Saudi Arabia',
    'Oracle Managed Cloud Services',
    'Google Managed Cloud Services',
    'cloud operations Saudi Arabia',
    'FinOps cost optimization',
    'cloud security governance',
    '24/7 cloud monitoring',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
  openGraph: {
    title: 'Multi-Managed Cloud Services Saudi Arabia | GulfStream',
    description: '24/7 managed cloud services for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Monitoring, FinOps, security governance & certified cloud experts.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Managed Cloud Services Saudi Arabia | GulfStream',
    description: '24/7 managed cloud services for AWS, Azure, Oracle & Google Cloud in Saudi Arabia. Monitoring, FinOps, security governance & certified cloud experts.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Cloud Services',
  description: 'Enterprise Managed Cloud Services across AWS, Azure, Oracle Cloud, and Google Cloud. 24/7 monitoring, FinOps cost optimization, cloud migration, and security governance in Saudi Arabia.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  serviceType: 'Managed Cloud Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Managed Cloud Services involve outsourcing 24/7 cloud operations — monitoring, security, optimization, and maintenance — to a certified provider like GulfStream Technologies. We manage AWS, Azure, Oracle Cloud, and Google Cloud environments for enterprises across Saudi Arabia.' } },
    { '@type': 'Question', name: 'Which cloud platform is best for Saudi enterprises?', acceptedAnswer: { '@type': 'Answer', text: 'The best platform depends on your workloads, compliance needs, and budget. AWS and Azure lead in Saudi Arabia with local regions, while Oracle and Google Cloud suit specific use cases. GulfStream helps you choose and manage the right platform or multi-cloud strategy.' } },
    { '@type': 'Question', name: 'How much can Managed Cloud Services save?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream clients typically achieve 25-35% cloud cost reduction through FinOps optimization, rightsizing, Reserved Instance planning, and elimination of idle resources — visible within the first 90 days.' } },
    { '@type': 'Question', name: 'Do you operate in Riyadh, Jeddah, and Dammam?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GulfStream Technologies serves enterprises across Riyadh, Jeddah, Dammam, and the wider GCC region with 24/7 Managed Cloud Services, on-site consulting, and regulatory compliance expertise.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed Cloud Services', item: 'https://gulfstreamtech.com.sa/services/cloud-managed-services/' },
  ],
};

export default function CloudManagedServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CloudManagedServicesContent />
    </>
  );
}
