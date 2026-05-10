
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
            { '@type': 'Question', name: 'Which industries does GulfStream Technologies support?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream supports retail, healthcare, logistics, technology/SaaS, and professional services enterprises across Saudi Arabia.', } },
            { '@type': 'Question', name: 'Do you provide industry-specific cloud solutions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build cloud architectures tailored to regulatory, compliance, and operational requirements for each sector.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage AWS, Azure, Google Cloud, and Oracle Cloud for industry cloud workloads with consistent governance.', } },
            { '@type': 'Question', name: 'Do you offer a free cloud consultation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer a free cloud assessment that includes cost analysis, security review, and an optimization roadmap.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for Saudi industry cloud solutions?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, industry experience, and multi-cloud engineering to deliver reliable enterprise cloud outcomes.', } },
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
