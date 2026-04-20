import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://gulfstreamtech.com.sa'),
  title: {
    default: 'Cloud Managed Services Saudi Arabia | GulfStream',
    template: '%s | GulfStream',
  },
  description:
    'GulfStream Technologies provides enterprise-grade multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. FinOps cost optimization, 24/7 monitoring, cloud migration, and security governance.',
  keywords: [
    'AWS managed services Saudi Arabia',
    'Azure managed services Saudi Arabia',
    'Oracle Cloud managed services Saudi Arabia',
    'Google Cloud managed services Saudi Arabia',
    'cloud cost optimization',
    'FinOps Saudi Arabia',
    'cloud migration Saudi Arabia',
    'managed cloud services',
    'cloud security governance',
    'GulfStream Technologies',
  ],
  authors: [{ name: 'GulfStream Technologies' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gulfstreamtech.com.sa',
    siteName: 'GulfStream Technologies',
    title: 'GulfStream Technologies | Multi-Cloud Managed Services',
    description:
      'Enterprise-grade multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. FinOps, 24/7 monitoring, cloud migration & security governance.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GulfStream Technologies | Multi-Cloud Managed Services',
    description:
      'Enterprise-grade multi-cloud managed services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud.',
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  other: {
    'theme-color': '#0F1A2E',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GulfStream Technologies',
    url: 'https://gulfstreamtech.com.sa',
    logo: 'https://gulfstreamtech.com.sa/assets/logo.png',
    description:
      'Enterprise-grade managed cloud services across AWS, Azure, Oracle Cloud & Google Cloud in Saudi Arabia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6526 At Takhassusi Road, Almathar Ash Shamali District',
      addressLocality: 'Riyadh',
      postalCode: '12332',
      addressCountry: 'SA',
    },
    areaServed: [
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'City', name: 'Riyadh' },
      { '@type': 'City', name: 'Jeddah' },
      { '@type': 'City', name: 'Dammam' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-053-201-917',
      contactType: 'sales',
      email: 'sales@gulfstreamtech.com.sa',
      availableLanguage: ['English', 'Arabic'],
    },
    knowsAbout: [
      'AWS Managed Services',
      'Azure Managed Services',
      'FinOps & Cloud Cost Optimization',
      'Cloud Security & Governance',
      'Cloud Migration & Modernization',
      'Cloud Billing Management',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en-SA" href="https://gulfstreamtech.com.sa/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
