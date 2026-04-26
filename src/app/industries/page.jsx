
import IndustriesIndexContent from '@/components/pages/IndustriesIndexContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Solutions for Saudi Industries',
  description: 'Industry-specific multi-cloud solutions for Saudi Arabia \u2014 retail, healthcare, logistics, SaaS & professional services with NCA compliance.',
  keywords: ['cloud solutions Saudi industries', 'AWS managed services Saudi Arabia', 'Azure cloud consulting Saudi Arabia', 'industry cloud infrastructure Saudi', 'cloud cost optimization Saudi Arabia', 'FinOps consulting Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/industries/' },
  openGraph: {
    title: 'Cloud Solutions for Saudi Industries | GulfStream',
    description: 'Industry-specific multi-cloud solutions for Saudi Arabia — retail, healthcare, logistics, SaaS & professional services with NCA compliance.',
    url: 'https://gulfstreamtech.com.sa/industries/',
    type: 'website',
    images: [{ url: 'https://gulfstreamtech.com.sa/assets/images/hero-illustration.png', width: 1200, height: 630, alt: 'GulfStream cloud solutions for Saudi industries' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cloud Solutions for Saudi Industries | GulfStream', description: 'Industry-specific multi-cloud solutions for Saudi Arabia — retail, healthcare, logistics, SaaS & professional services with NCA compliance.', images: [DEFAULT_OG_IMAGE.url] },
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Industries Served by GulfStream Technologies',
          description: 'Industry-specific cloud solutions for Saudi enterprises',
          numberOfItems: 5,
          itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Retail Cloud Solutions Saudi Arabia', url: 'https://gulfstreamtech.com.sa/industries/retail/' } },
            { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Healthcare Cloud Solutions Saudi Arabia', url: 'https://gulfstreamtech.com.sa/industries/healthcare/' } },
            { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Logistics Cloud Solutions Saudi Arabia', url: 'https://gulfstreamtech.com.sa/industries/logistics/' } },
            { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'SaaS Cloud Infrastructure Saudi Arabia', url: 'https://gulfstreamtech.com.sa/industries/tech-saas/' } },
            { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Professional Services Cloud Saudi Arabia', url: 'https://gulfstreamtech.com.sa/industries/professional-services/' } },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What industries does GulfStream Technologies support?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream Technologies provides industry-specific cloud solutions for retail, healthcare, logistics, technology/SaaS, and professional services enterprises across Saudi Arabia — with tailored multi-Managed Cloud Services across AWS, Azure, Google Cloud, and Oracle Cloud for each sector.' } },
            { '@type': 'Question', name: 'Do you provide industry-specific cloud solutions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Unlike generic cloud providers, GulfStream builds cloud architectures tailored to each industry\'s regulatory, compliance, and operational requirements — including PCI DSS for retail, HIPAA and NCA ECC for healthcare, and ISO 27001 for professional services.' } },
            { '@type': 'Question', name: 'Which cloud platforms do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage AWS, Microsoft Azure, Google Cloud, and Oracle Cloud, supporting single-cloud and multi-cloud environments. Our certified architects manage Kubernetes, serverless, IoT, data lakes, and enterprise workloads across all platforms.' } },
            { '@type': 'Question', name: 'Do you offer a free cloud consultation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every new engagement starts with a free cloud assessment — including cost analysis, security review, and a 90-day optimization roadmap delivered within 5 business days at no charge.' } },
            { '@type': 'Question', name: 'How do you ensure compliance for Saudi enterprises?', acceptedAnswer: { '@type': 'Answer', text: 'We design cloud environments with NCA ECC, SAMA, Saudi MOH, and international frameworks (HIPAA, ISO 27001, PCI DSS, SOC 2) built in from day one — with continuous compliance monitoring and automated audit reporting.' } },
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
          ],
        }) }}
      />
      <IndustriesIndexContent />
    </>
  );
}
