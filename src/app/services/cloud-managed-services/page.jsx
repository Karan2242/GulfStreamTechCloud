
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
      { '@type': 'Question', name: 'What are Managed Cloud Services?', acceptedAnswer: { '@type': 'Answer', text: 'Managed Cloud Services involve outsourcing cloud operations, monitoring, security, and optimization to a certified provider.', } },
      { '@type': 'Question', name: 'Which cloud platforms do you support?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments with unified management and governance.', } },
      { '@type': 'Question', name: 'How much can Managed Cloud Services save?', acceptedAnswer: { '@type': 'Answer', text: 'Clients typically save 25-35% on cloud spend through cost optimization and operational efficiency.', } },
      { '@type': 'Question', name: 'How quickly can you deliver results?', acceptedAnswer: { '@type': 'Answer', text: 'Most enterprises see measurable savings and stability improvements within 60-90 days.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for managed cloud services?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, multi-cloud certifications, and measurable ROI delivery for enterprise cloud operations.', } },
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
