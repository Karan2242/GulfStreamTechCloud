
import InsightsContent from '@/components/pages/InsightsContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Cloud Insights & Resources | GulfStream Technologies',
  url: 'https://gulfstreamtech.com.sa/insights/',
  description: 'Expert multi-cloud insights, FinOps strategies, cost optimization guides, and security best practices for Saudi enterprises.',
  publisher: {
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa/',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://gulfstreamtech.com.sa/insights/' },
  ],
};

export const metadata = {
  title: 'Cloud Insights & Guides Saudi Arabia',
  description: 'Expert multi-cloud insights, FinOps strategies, cost optimization guides, and security best practices for Saudi enterprises.',
  keywords: ['cloud insights Saudi Arabia', 'AWS guides Saudi Arabia', 'Azure cloud consulting Saudi Arabia', 'FinOps best practices', 'cloud cost optimization Saudi Arabia', 'NCA ECC compliance guide'],
  alternates: {
    canonical: 'https://gulfstreamtech.com.sa/insights/',
  },
  openGraph: {
    title: 'Cloud Insights & Guides Saudi Arabia | GulfStream',
    description: 'Expert multi-cloud insights, FinOps strategies, cost optimization guides, and security best practices for Saudi enterprises.',
    url: 'https://gulfstreamtech.com.sa/insights/',
    type: 'website',
    siteName: 'GulfStream Technologies',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Insights & Guides Saudi Arabia | GulfStream',
    description: 'Expert multi-cloud insights, FinOps strategies, cost optimization guides, and security best practices for Saudi enterprises.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      mainEntity: [
      { '@type': 'Question', name: 'Who writes GulfStream cloud insights?', acceptedAnswer: { '@type': 'Answer', text: 'Our insights are written by certified cloud architects and engineers with hands-on experience in enterprise AWS, Azure, Google Cloud, and Oracle Cloud projects.', } },
      { '@type': 'Question', name: 'Are these insights relevant to Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our content covers Saudi-specific cloud regulations, local region considerations, and enterprise requirements for Riyadh, Jeddah, and Dammam.', } },
      { '@type': 'Question', name: 'How can I get help beyond these articles?', acceptedAnswer: { '@type': 'Answer', text: 'You can book a free cloud assessment or contact our team to turn the recommendations into a practical managed cloud engagement.', } },
      { '@type': 'Question', name: 'Do you offer managed services for cloud platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide managed services across AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments.', } },
      { '@type': 'Question', name: 'Why choose GulfStream for cloud transformation?', acceptedAnswer: { '@type': 'Answer', text: 'We focus on measurable outcomes, local Saudi support, multi-cloud expertise, and fast ROI from cost optimization and governance.', } },
    ],
};

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsightsContent />
    </>
  );
}
