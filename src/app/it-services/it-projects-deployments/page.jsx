import ITProjectsDeploymentsContent from '@/components/pages/services/ITProjectsDeploymentsContent';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

export const metadata = {
  title: 'IT Projects & Deployments | GulfStream Technology',
  description: 'IT project delivery and deployment services in Saudi Arabia covering office setups, network deployment, Microsoft 365 rollout, hardware refresh, and infrastructure upgrades.',
  keywords: [
    'IT projects Saudi Arabia',
    'IT deployments Saudi Arabia',
    'office IT setup Saudi Arabia',
    'Microsoft 365 deployment Saudi Arabia',
    'infrastructure upgrade Saudi Arabia',
    'IT migration services Saudi Arabia',
  ],
  alternates: { canonical: 'https://gulfstreamtech.com.sa/it-services/it-projects-deployments/' },
  openGraph: {
    title: 'IT Projects & Deployments | GulfStream Technology',
    description: 'IT project delivery and deployment services in Saudi Arabia covering office setups, network deployment, Microsoft 365 rollout, hardware refresh, and infrastructure upgrades.',
    url: 'https://gulfstreamtech.com.sa/it-services/it-projects-deployments/',
    type: 'website',
    siteName: 'GulfStream Technology',
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Projects & Deployments | GulfStream Technology',
    description: 'IT project delivery and deployment services in Saudi Arabia covering office setups, network deployment, Microsoft 365 rollout, hardware refresh, and infrastructure upgrades.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Projects & Deployments',
  description:
    'Planning and execution of office IT rollouts, server and network deployments, Microsoft 365 migrations, and technology refresh projects for growing organizations.',
  provider: {
    '@type': 'Organization',
    name: 'GulfStream Technology',
    url: 'https://gulfstreamtech.com.sa',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  serviceType: 'IT Projects & Deployments',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gulfstreamtech.com.sa/' },
    { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://gulfstreamtech.com.sa/it-services/' },
    { '@type': 'ListItem', position: 3, name: 'IT Projects & Deployments', item: 'https://gulfstreamtech.com.sa/it-services/it-projects-deployments/' },
  ],
};

export default function ITProjectsDeploymentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ITProjectsDeploymentsContent />
    </>
  );
}
