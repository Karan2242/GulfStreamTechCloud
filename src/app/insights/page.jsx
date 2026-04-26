
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
    { '@type': 'Question', name: 'Who writes GulfStream\'s cloud insights?', acceptedAnswer: { '@type': 'Answer', text: 'Our articles are written by certified AWS architects and Azure expert engineers with hands-on experience managing enterprise cloud environments across Saudi Arabia. Every guide is based on real project experience.' } },
    { '@type': 'Question', name: 'Are these insights relevant to Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All content addresses Saudi-specific considerations including NCA ECC compliance, AWS Middle East and Azure UAE region availability, Vision 2030 digital transformation, and local regulatory requirements for enterprises in Riyadh, Jeddah, and Dammam.' } },
    { '@type': 'Question', name: 'How can I reduce cloud costs in Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Start with our FinOps guide covering rightsizing, Reserved Instance optimization, and waste elimination. For personalized recommendations, book a free cloud assessment — our FinOps team delivers an average 30% cloud cost reduction within 90 days.' } },
    { '@type': 'Question', name: 'Do you offer cloud consulting beyond insights?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GulfStream Technologies provides full Managed Cloud Services including AWS managed services, Azure managed services, FinOps cost optimization, and cloud migration for Saudi enterprises.' } },
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
