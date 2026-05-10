
import ProfessionalServicesContent from '@/components/pages/industries/ProfessionalServicesContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud for Professional Services Saudi Arabia',
  description: 'Secure cloud for consulting, legal & financial firms in Saudi Arabia. Zero-trust security, ISO 27001 alignment & collaboration across AWS, Azure, GCP & OCI.',
  keywords: ['secure cloud professional services Saudi Arabia', 'cloud for consulting firms Saudi', 'legal firm cloud infrastructure Saudi', 'ISO 27001 cloud Saudi Arabia', 'zero trust cloud Saudi Arabia', 'financial services cloud Riyadh'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/professional-services/' },
  openGraph: {
    title: 'Cloud for Professional Services Saudi Arabia | GulfStream',
    description: 'Secure cloud for consulting, legal & financial firms in Saudi Arabia. Zero-trust security, ISO 27001 alignment & collaboration across AWS, Azure, GCP & OCI.',
    url: 'https://gulfstreamtech.com.sa/industries/professional-services/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'Secure cloud for professional services Saudi Arabia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cloud for Professional Services Saudi Arabia | GulfStream', description: 'Secure cloud for consulting, legal & financial firms in Saudi Arabia. Zero-trust security, ISO 27001 alignment & collaboration across AWS, Azure, GCP & OCI.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Secure Cloud for Professional Services Saudi Arabia',
          description: 'Secure, compliant cloud environments for consulting, legal, and financial services firms in Saudi Arabia — zero-trust security, ISO 27001 alignment, and enterprise collaboration.',
          provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa/' },
          areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          serviceType: 'Professional Services Cloud Infrastructure',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
                              mainEntity: [
            { '@type': 'Question', name: 'What is secure cloud for professional services?', acceptedAnswer: { '@type': 'Answer', text: 'Secure cloud for professional services protects sensitive client data while enabling collaboration and compliance.', } },
            { '@type': 'Question', name: 'How do you ensure regulatory compliance?', acceptedAnswer: { '@type': 'Answer', text: 'We build cloud governance around NCA ECC, ISO 27001, and relevant industry regulations with audit-ready reporting.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you support?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, and Oracle Cloud for professional services workloads and secure collaboration.', } },
            { '@type': 'Question', name: 'Can you reduce IT overhead costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We reduce costs by managing cloud operations, automating compliance, and optimizing resource usage.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for professional services cloud?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver secure, compliant cloud operations with local Saudi support and a focus on protecting sensitive client information.', } },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://gulfstreamtech.com.sa/industries/' },
            { '@type': 'ListItem', position: 3, name: 'Professional Services', item: 'https://gulfstreamtech.com.sa/industries/professional-services/' },
          ],
        }) }}
      />
      <ProfessionalServicesContent />
    </>
  );
}
