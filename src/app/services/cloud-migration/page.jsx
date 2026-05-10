
import CloudMigrationContent from '@/components/pages/services/CloudMigrationContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Migration & Modernization Saudi Arabia',
  description: 'End-to-end cloud migration in Saudi Arabia with zero disruption. 6Rs methodology, wave-based planning & post-migration optimization across AWS, Azure, GCP & OCI.',
  keywords: ['cloud migration Saudi Arabia', 'cloud migration services', 'cloud modernization', 'AWS migration', 'Azure migration', 'data center migration', 'legacy modernization', 'cloud migration Riyadh', '6Rs migration', 'GulfStream Technologies'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/services/cloud-migration/' },
  openGraph: {
    title: 'Cloud Migration & Modernization Saudi Arabia | GulfStream',
    description: 'End-to-end cloud migration in Saudi Arabia with zero disruption. 6Rs methodology, wave-based planning & post-migration optimization across AWS, Azure, GCP & OCI.',
    url: 'https://gulfstreamtech.com.sa/services/cloud-migration/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Migration & Modernization Saudi Arabia | GulfStream',
    description: 'End-to-end cloud migration in Saudi Arabia with zero disruption. 6Rs methodology, wave-based planning & post-migration optimization across AWS, Azure, GCP & OCI.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Migration & Modernization',
  description: 'End-to-end cloud migration services with zero business disruption using proven 6Rs methodology, wave-based planning, and post-migration optimization.',
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'Cloud Migration Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'How long does a cloud migration take?', acceptedAnswer: { '@type': 'Answer', text: 'Migration timelines vary, but simple cloud moves can complete in 4-8 weeks and enterprise projects often take 3-6 months.', } },
      { '@type': 'Question', name: 'Is downtime required during cloud migration?', acceptedAnswer: { '@type': 'Answer', text: 'We design migrations to avoid or minimize downtime using phased cutovers, replication, and blue-green deployment patterns.', } },
      { '@type': 'Question', name: 'How much does cloud migration cost in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on workload complexity and scope. We provide a free migration assessment with a tailored estimate.', } },
      { '@type': 'Question', name: 'Do you support AWS, Azure, Google Cloud, and Oracle Cloud migrations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We migrate workloads to AWS, Azure, Google Cloud, and Oracle Cloud, including multi-cloud and hybrid transitions.', } },
      { '@type': 'Question', name: 'Do you provide post-migration support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every migration includes post-migration optimization, monitoring, and transition support to our managed services team.', } },
    ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gulfstreamtech.com.sa/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Migration', item: 'https://gulfstreamtech.com.sa/services/cloud-migration/' },
  ],
};

export default function CloudMigrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CloudMigrationContent />
    </>
  );
}
