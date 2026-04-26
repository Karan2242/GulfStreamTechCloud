
import PricingContent from '@/components/pages/PricingContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'Cloud Services Pricing Saudi Arabia',
  description: 'Managed Cloud Services pricing in Saudi Arabia. Multi-cloud plans from SAR 8,500/month with 24/7 monitoring, FinOps optimization & 30% average savings.',
  keywords: ['Managed Cloud Services pricing Saudi Arabia', 'AWS managed services cost', 'Azure managed services pricing', 'cloud management pricing plans', 'managed cloud pricing Riyadh', 'cloud services cost Saudi Arabia'],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/pricing/' },
  openGraph: {
    title: 'Cloud Services Pricing Saudi Arabia | GulfStream',
    description: 'Managed Cloud Services pricing in Saudi Arabia. Multi-cloud plans from SAR 8,500/month with 24/7 monitoring, FinOps optimization & 30% average savings.',
    url: 'https://gulfstreamtech.com.sa/pricing/',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Services Pricing Saudi Arabia | GulfStream',
    description: 'Managed Cloud Services pricing in Saudi Arabia. Multi-cloud plans from SAR 8,500/month with 24/7 monitoring, FinOps optimization & 30% average savings.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Cloud Services',
  description: 'Enterprise Managed Cloud Services with transparent pricing, 24/7 monitoring, FinOps optimization, and security governance across AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia.',
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
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'SAR',
    lowPrice: '8500',
    highPrice: '55000',
    offerCount: '3',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do managed cloud services cost in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GulfStream Technologies offers Managed Cloud Services starting from SAR 8,500/month for the Starter plan, SAR 22,000/month for Growth, and SAR 55,000/month for Premium. All plans include monitoring, optimization, and no setup fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden charges in Managed Cloud Services pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. GulfStream pricing is fully transparent with no hidden fees, no markup on cloud provider costs, and no lock-in contracts. Cloud provider costs (AWS, Azure) are billed separately by the provider directly to your account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Managed Cloud Services pricing be customized?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our packages are starting points. We customize pricing based on cloud environment size, number of accounts, compliance requirements, and dedicated engineering needs. Contact our team for a tailored quote.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://gulfstreamtech.com.sa/pricing/' },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PricingContent />
    </>
  );
}
