import ManpowerServicesContent from '@/components/pages/ManpowerServicesContent';
import { faqs } from '@/components/pages/manpowerServicesData';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const pageUrl = 'https://gulfstreamtech.com.sa/manpower-services/';
const pageTitle = 'IT Manpower & Technology Staffing Services | GulfStream Technologies';
const pageDescription = "Scale your technology workforce with GulfStream's IT manpower and resource augmentation services. Access skilled IT, cloud, cybersecurity, AI, data and enterprise technology professionals through flexible staffing models.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['IT manpower services', 'IT staffing services', 'technology staffing solutions', 'IT resource augmentation', 'technical resource augmentation', 'contract IT staffing', 'permanent IT staffing', 'dedicated technology teams', 'offshore IT resources', 'onsite IT consultants', 'cybersecurity staffing', 'cloud staffing'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: 'website', siteName: 'GulfStream Technologies', locale: 'en_US', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [DEFAULT_OG_IMAGE.url] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'IT Manpower and Technology Staffing Services',
  description: pageDescription,
  url: pageUrl,
  provider: { '@type': 'Organization', name: 'GulfStream Technologies', url: 'https://gulfstreamtech.com.sa' },
  serviceType: ['IT Staffing Services', 'IT Resource Augmentation', 'Technology Workforce Solutions'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'Manpower Services', item: pageUrl },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function ManpowerServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ManpowerServicesContent />
    </>
  );
}
