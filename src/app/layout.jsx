import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/siteConfig';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Managed Cloud Services Saudi Arabia | GulfStream',
    template: '%s | GulfStream',
  },
  description:
    'GulfStream Technologies provides enterprise-grade multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. FinOps cost optimization, 24/7 monitoring, cloud migration, and security governance.',
  keywords: [
    'AWS managed services Saudi Arabia',
    'Azure managed services Saudi Arabia',
    'Oracle Managed Cloud Services Saudi Arabia',
    'Google Managed Cloud Services Saudi Arabia',
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'GulfStream Technologies | Multi-Managed Cloud Services',
    description:
      'Enterprise-grade multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud. FinOps, 24/7 monitoring, cloud migration & security governance.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GulfStream Technologies | Multi-Managed Cloud Services',
    description:
      'Enterprise-grade multi-Managed Cloud Services in Saudi Arabia — AWS, Azure, Google Cloud & Oracle Cloud.',
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
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.png`,
    description:
      'Enterprise-grade managed cloud services across AWS, Azure, Oracle Cloud & Google Cloud in Saudi Arabia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6526 At Takhassusi Road, Almathar Ash Shamali District',
      addressLocality: siteConfig.headquarters.city,
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
      telephone: siteConfig.contact.phoneHref,
      contactType: 'sales',
      email: siteConfig.contact.salesEmail,
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
        <link rel="alternate" hrefLang="en-SA" href={`${siteConfig.url}/`} />
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
