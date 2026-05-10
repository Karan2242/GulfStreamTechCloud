
import HealthcareContent from '@/components/pages/industries/HealthcareContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Healthcare Cloud Solutions Saudi Arabia',
  description: 'HIPAA-aligned healthcare cloud in Saudi Arabia. Secure patient data, NCA ECC compliance & 99.99% clinical uptime with multi-cloud experts in Riyadh.',
  keywords: ['healthcare cloud solutions Saudi Arabia', 'HIPAA cloud Saudi Arabia', 'NCA ECC compliance healthcare cloud', 'AWS healthcare cloud Saudi', 'Azure healthcare infrastructure Saudi', 'medical cloud computing Riyadh'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/healthcare/' },
  openGraph: {
    title: 'Healthcare Cloud Solutions Saudi Arabia | GulfStream',
    description: 'HIPAA-aligned healthcare cloud in Saudi Arabia. Secure patient data, NCA ECC compliance & 99.99% clinical uptime with multi-cloud experts in Riyadh.',
    url: 'https://gulfstreamtech.com.sa/industries/healthcare/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'Healthcare cloud solutions Saudi Arabia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Cloud Solutions Saudi Arabia | GulfStream', description: 'HIPAA-aligned healthcare cloud in Saudi Arabia. Secure patient data, NCA ECC compliance & 99.99% clinical uptime with multi-cloud experts in Riyadh.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function HealthcarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Healthcare Cloud Solutions Saudi Arabia',
          description: 'HIPAA-aligned, high-availability multi-cloud infrastructure for Saudi healthcare organizations — patient data security, clinical application reliability, and NCA ECC compliance across AWS, Azure, Google Cloud, and Oracle Cloud.',
          provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa/' },
          areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          serviceType: 'Healthcare Cloud Infrastructure',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
                              mainEntity: [
            { '@type': 'Question', name: 'What is healthcare cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare cloud infrastructure supports clinical systems, patient data, and compliance with high availability and security.', } },
            { '@type': 'Question', name: 'How do you ensure healthcare compliance in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We align cloud environments to NCA ECC, Saudi MOH, and healthcare data protection requirements with audit-ready governance.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you support for healthcare?', acceptedAnswer: { '@type': 'Answer', text: 'We support AWS, Azure, Google Cloud, and Oracle Cloud for compliant healthcare workloads.', } },
            { '@type': 'Question', name: 'Can you reduce healthcare cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We optimize healthcare cloud costs through storage efficiency, rightsizing, and FinOps practices.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for healthcare cloud in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'We combine healthcare compliance experience with local Saudi cloud expertise and certified operations.', } },
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
            { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://gulfstreamtech.com.sa/industries/healthcare/' },
          ],
        }) }}
      />
      <HealthcareContent />
    </>
  );
}
