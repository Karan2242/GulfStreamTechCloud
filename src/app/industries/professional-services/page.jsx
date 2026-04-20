
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
            { '@type': 'Question', name: 'What is secure cloud infrastructure for professional services?', acceptedAnswer: { '@type': 'Answer', text: 'Secure cloud infrastructure for professional services is a purpose-built cloud environment with zero-trust network access, MFA, conditional access policies, and end-to-end encryption — designed to protect sensitive client data for consulting, legal, and financial services firms while enabling seamless hybrid collaboration.' } },
            { '@type': 'Question', name: 'How do you ensure compliance for professional services firms in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream designs cloud environments with Saudi regulatory requirements (NCA ECC, CMA, SAMA), ISO 27001, and international compliance frameworks built in from day one — with automated compliance reporting, complete audit trails, and continuous security monitoring.' } },
            { '@type': 'Question', name: 'Which cloud platforms do you support for professional services?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage cloud environments including Microsoft 365 integration, Azure Virtual Desktop for secure remote work, AWS WorkSpaces, and enterprise collaboration platforms with DLP policies protecting sensitive documents automatically.' } },
            { '@type': 'Question', name: 'Can you reduce IT costs for professional services firms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our managed cloud services deliver 40% average IT overhead reduction for professional services firms through managed infrastructure, project-tagged cost attribution (enabling client pass-through billing), and elimination of on-premise hardware maintenance.' } },
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
