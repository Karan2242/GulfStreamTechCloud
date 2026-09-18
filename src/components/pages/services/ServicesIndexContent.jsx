import Link from 'next/link';
import ServicesFaq from './ServicesFaq';
import { businessOutcomes, coreCapabilities, differentiators, engagementModels, industries, lifecycleSteps } from './servicesData';
import { siteConfig } from '@/config/siteConfig';

function SectionIntro({ eyebrow, title, description, badgeClass = 'badge badge-primary' }) {
  return (
    <div className="section-header">
      <div className={badgeClass}>{eyebrow}</div>
      <h2 className="display-md">{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

const outcomeIcons = {
  Modernize: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  Optimize: <path d="M4 19V5m0 14h16M7 15l3-4 3 2 5-7" />,
  Automate: <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />,
  Secure: <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  Scale: <path d="M12 4v16M7 20h10M5 7h14M7 7l-3 6a3 3 0 0 0 6 0L7 7Zm10 0-3 6a3 3 0 0 0 6 0l-3-6Z" />,
  Deliver: <path d="m13 3-1 6h5l-8 12 1-7H5l8-11Zm-1 0h5" />,
};

function OutcomeIcon({ title }) {
  return (
    <svg className="services-outcome-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {outcomeIcons[title]}
    </svg>
  );
}

const differentiatorIcons = {
  'Cross-Disciplinary Expertise': <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M18.36 5.64 5.64 18.36M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />,
  'One Accountable Partner': <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />,
  'Flexible Engagement': <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-9 0h10a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a3 3 0 0 1 3-3Zm1 6h8" />,
  'Structured Delivery': <path d="M4 5h16M4 12h16M4 19h16M8 3v4M16 10v4M10 17v4" />,
  'Business-Aligned Technology': <path d="M4 19V5m0 14h16M7 15l3-4 3 2 5-7" />,
  'Practical Expertise': <path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-.9.7-1 1.5-1 2H9c0-.5-.1-1.3-1-2Z" />,
};

function DifferentiatorIcon({ title }) {
  return (
    <svg className="services-differentiator-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {differentiatorIcons[title]}
    </svg>
  );
}

function CapabilityCard({ capability }) {
  return (
    <article className="services-capability-card">
      <div className="services-capability-image">
        <img src={`/assets/images/${capability.image}`} alt="" />
        <span className="services-capability-number">{capability.number}</span>
      </div>
      <div className="services-capability-heading">
        <div>
          <span className="services-capability-label">Capability</span>
          <h3>{capability.title}</h3>
        </div>
      </div>
      <p className="services-capability-subheading">{capability.subheading}</p>
      <p>{capability.description}</p>
      <ul className="services-capability-list">
        {capability.services.map((service) => <li key={service}>{service}</li>)}
      </ul>
      <p className="services-outcome">{capability.outcome}</p>
      <Link className="text-link" href={capability.href}>
        Explore {capability.title} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function ServicesIndexContent() {
  return (
    <main className="services-page">
      <section className="page-hero services-hero" >
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Services</span>
          </nav>
          <h1 className="display-lg">
            <span className="text-gradient">Technology Services Built Around Your Business Priorities</span>
          </h1>
          <p>GulfStream Technologies brings Cloud, AI, IT and technology talent together through one accountable technology partner. From strategy and implementation to managed operations and specialist expertise, we help organizations modernize technology, improve operational efficiency and build the capabilities needed to support long-term growth.</p>
          <div className="hero-actions">
            <Link href={siteConfig.cta.primary.href} className="btn btn-primary btn-lg">{siteConfig.cta.primary.label}</Link>
          </div>
        </div>
      </section>

      <section className="section services-tone" id="core-capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="FOUR CORE CAPABILITIES"
            title="One partner. Four connected capabilities."
            description="Modern business initiatives often span multiple technology disciplines. Cloud, AI, IT and technology talent work together to support applications, data, security, operations and transformation. GulfStream brings these capabilities together through one accountable partner."
          />
          <div className="services-capability-grid">
            {coreCapabilities.map((capability) => <CapabilityCard key={capability.title} capability={capability} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="BUSINESS OUTCOMES" title="Technology Services Aligned With Business Outcomes" />
          <div className="grid-3 home-differentiator-grid">
            {businessOutcomes.map(([number, title, description]) => (
              <article key={title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box"><OutcomeIcon title={title} /></div>
                  <div className="card-title-row">
                    <h3>{title}</h3>
                  </div>
                </div>
                <p className="services-outcome-description">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-tone">
        <div className="container">
          <SectionIntro
            badgeClass="badge badge-accent"
            eyebrow="HOW WE HELP"
            title="From Technology Strategy to Day-to-Day Operations"
            description="Whether you are defining a technology strategy, implementing a transformation initiative or managing an existing environment, GulfStream can support you across the technology lifecycle."
          />
          <div className="home-roadmap" aria-label="GulfStream delivery roadmap">
            {lifecycleSteps.map(([number, title, description]) => (
              <article key={title} className="home-roadmap-step">
                <div className="home-roadmap-node">{number}</div>
                <div className="home-roadmap-card">
                  <div className="home-roadmap-kicker">PHASE {number}</div>
                  <h3>{title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="WHY GULFSTREAM" title="One accountable partner across the technology lifecycle" />
          <div className="grid-3 home-differentiator-grid">
            {differentiators.map(([, title, description]) => (
              <article className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box"><DifferentiatorIcon title={title} /></div>
                  <div className="card-title-row">
                  <h3>{title}</h3>
                  </div>
                </div>
                <p className="services-differentiator-description">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-tone">
        <div className="container">
          <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions About Our Technology Services" />
          <ServicesFaq />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="display-md">Let&apos;s turn your technology priorities into action.</h2>
            <p>Whether you are modernizing infrastructure, adopting AI, improving IT operations or expanding technology capacity, GulfStream can help you assess priorities, define the right approach and move toward implementation.</p>
            <div className="cta-actions">
              <Link href={siteConfig.cta.primary.href} className="btn btn-white btn-lg">{siteConfig.cta.primary.label}</Link>
              <Link href={siteConfig.cta.secondary.href === '/services' ? '#core-capabilities' : siteConfig.cta.secondary.href} className="btn-white-outline">Explore Our Capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
