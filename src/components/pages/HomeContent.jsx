import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeFaqSection from '@/components/pages/home/HomeFaqSection';

const coreCapabilities = [
  {
    title: 'Cloud Services',
    image: '/assets/images/service-custom.png',
    eyebrow: 'CLOUD TRANSFORMATION',
    description:
      'Design, migrate, manage and optimize AWS, Azure, Google Cloud and Oracle Cloud environments with cloud security, FinOps, governance and ongoing operational support.',
    href: '/cloud-services',
    cta: 'Explore Cloud Services →',
  },
  {
    title: 'AI Services',
    image: '/assets/images/ai-services.png',
    eyebrow: 'APPLIED AI',
    description:
      'Identify high-value AI use cases and build secure, production-ready AI applications, data solutions and intelligent automation aligned with measurable business outcomes.',
    href: '/ai-services',
    cta: 'Explore AI Services →',
  },
  {
    title: 'IT Services',
    image: '/assets/images/it-services.png',
    eyebrow: 'MANAGED IT OPERATIONS',
    description:
      'Manage and modernize IT infrastructure, networks, servers, cybersecurity and business-critical systems with structured support and operational oversight.',
    href: '/it-services',
    cta: 'Explore IT Services →',
  },
  {
    title: 'Manpower Services',
    image: '/assets/images/manpower-services.png',
    eyebrow: 'SPECIALIST TECHNOLOGY TALENT',
    description:
      'Scale technology delivery with experienced cloud, AI, data, cybersecurity, infrastructure and IT professionals through flexible staffing and dedicated team models.',
    href: '/manpower-services',
    cta: 'Explore Manpower Services →',
  },
];

const businessChallenges = [
  {
    title: 'Cloud Complexity',
    icon: '🌐',
    description:
      'Simplify cloud migration, modernization and management while improving infrastructure visibility, security, performance and operational control across complex environments.',
  },
  {
    title: 'Rising Technology Costs',
    icon: '💰',
    description:
      'Improve cloud cost management with FinOps governance, usage visibility and optimization strategies that reduce waste and support more predictable technology spending.',
  },
  {
    title: 'AI Adoption Uncertainty',
    icon: '🧠',
    description:
      'Identify valuable AI use cases and move from experimentation to secure, governed and production-ready AI applications, automation and data solutions.',
  },
  {
    title: 'IT Operational Pressure',
    icon: '🔒',
    description:
      'Strengthen managed IT operations with proactive monitoring, cybersecurity, infrastructure support and business continuity services that improve reliability and productivity.',
  },
  {
    title: 'Technology Talent Gaps',
    icon: '🎯',
    description:
      'Access experienced cloud, AI, data, cybersecurity and infrastructure professionals to accelerate delivery without the cost and delay of permanent hiring.',
  },
  {
    title: 'Digital Transformation Delivery',
    icon: '🚀',
    description:
      'Turn technology strategy into measurable progress through practical roadmaps, accountable implementation, coordinated delivery and continuous optimization across business functions.',
  },
];

const deliverySteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the business goals, priorities, data, existing environment and constraints before proposing technology.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Shape the right architecture, roadmap and engagement model for your goals.',
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Deliver cloud, AI, infrastructure, applications and technology initiatives with structured execution.',
  },
  {
    number: '04',
    title: 'Operate',
    description:
      'Run and support environments with monitoring, security, governance and dependable operations.',
  },
  {
    number: '05',
    title: 'Optimize',
    description:
      'Continuously improve cost, performance, security, scalability and business value over time.',
  },
];

const industries = [
  {
    title: 'Retail & E-commerce',
    icon: '🛒',
    description:
      'Help retail organizations create scalable digital operations, improve customer experiences and manage technology across stores, commerce platforms, data and cloud environments.',
  },
  {
    title: 'Hospitality',
    icon: '🏨',
    description:
      'Improve guest experiences and hospitality operations with connected digital platforms, reliable infrastructure, accessible data and technology that supports properties, teams and service delivery.',
  },
  {
    title: 'Logistics & Supply Chain',
    icon: '🚛',
    description:
      'Connect fleet and logistics systems, operational data and automation on resilient infrastructure that gives supply chain teams clearer visibility and faster decisions.',
  },
  {
    title: 'Technology & SaaS',
    icon: '💻',
    description:
      'Build and operate scalable, cloud-native platforms for product teams that need stronger security, reliable data and AI foundations, and a faster path from development to delivery.',
  },
  {
    title: 'Professional Services',
    icon: '🏢',
    description:
      'Support consulting, legal and advisory organizations with productive collaboration, accessible data, secure business applications and dependable IT operations.',
  },
];

const engagementModels = [
  {
    icon: '🧭',
    title: 'Consulting',
    description: 'Strategy, assessment and advisory to shape the right technology decisions.',
  },
  {
    icon: '⚙️',
    title: 'Managed Services',
    description:
      'Ongoing operation of cloud and IT with monitoring, security and service-level management.',
  },
  {
    icon: '🚀',
    title: 'Project-Based Delivery',
    description:
      'Defined-scope technology programs delivered with structured execution and clear outcomes.',
  },
  {
    icon: '👥',
    title: 'Resource Augmentation',
    description: 'Skilled technology professionals who embed into and extend your teams.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Teams',
    description: 'A committed technology team aligned to your goals, roadmap and ways of working.',
  },
  {
    icon: '🔗',
    title: 'Long-Term Partnership',
    description:
      'A continuing relationship across strategy, delivery, operations and optimization.',
  },
];

const differentiators = [
  {
      title: 'Business-First Approach',
      icon: '📈',
      description:
        'We align cloud, AI, IT and digital initiatives with your business objectives, operational priorities, budgets and long-term technology roadmap.',
  },
  {
    title: 'Four Integrated Capabilities',
    icon: '🔗',
    description:
      'Access cloud services, AI solutions, managed IT, cybersecurity and technology talent through one coordinated technology partner, reducing complexity and vendor handoffs.',
  },  
  {
    title: 'GCC-Focused Expertise',
    icon: '🌍',
    description:
      'Our technology solutions are designed around the business, operational and technology requirements of organizations operating across Saudi Arabia and the wider GCC.',
  },  
  {
    title: 'Enterprise-Ready Delivery',
    icon: '🏗️',
    description:
      'From cloud migration and infrastructure modernization to AI implementation and IT projects, we provide structured delivery focused on reliability, scalability and measurable outcomes.',
  },
  {
    title: 'Flexible Engagement',
    icon: '🧩',
    description:
      'Choose the right level of support for your organization — from technology consulting and project delivery to managed services, staff augmentation and dedicated technology teams.',
  },
  {
    title: 'Security & Operational Resilience ',
    icon: '🛡️',
    description:
      'We integrate cybersecurity, cloud governance, infrastructure reliability, risk management and operational best practices across the technology lifecycle.',
  },
];



const trustPoints = [
  { label: 'GCC Market Expertise', description: 'Saudi Arabia and regional delivery context' },
  { label: 'Business-First Advisory', description: 'Technology roadmaps tied to outcomes' },
  { label: 'Multi-Cloud Capability', description: 'AWS, Azure, Google Cloud and Oracle Cloud' },
  { label: 'Enterprise Delivery', description: 'Structured programs for complex environments' },
  { label: 'Cloud Cost Governance', description: 'FinOps visibility, control and optimization' },
  { label: 'Secure AI Adoption', description: 'Responsible AI use cases and governance' },
  { label: 'Managed IT Operations', description: 'Reliable infrastructure and service support' },
  { label: 'Cybersecurity Focus', description: 'Risk, resilience and compliance by design' },
  { label: 'Specialist Technology Talent', description: 'Cloud, data, engineering and security experts' },
  { label: 'One Accountable Partner', description: 'Strategy, delivery, operations and optimization' },
];

const heroTrustPoints = ['24/7 Monitoring & Support', 'Business-First Advisory', 'Secure Enterprise Delivery'];

const integrationCapabilities = [
  {
    number: '01',
    title: 'Cloud Transformation',
    description: 'Modernize, migrate and optimize secure cloud environments with governance, FinOps and operational support for resilient, cost-effective business applications and data.',
  },
  {
    number: '02',
    title: 'Production-Ready AI',
    description: 'Turn practical AI use cases into secure, production-ready applications, data solutions and intelligent automation that deliver measurable business value at scale.',
  },
  {
    number: '03',
    title: 'Managed IT Operations',
    description: 'Improve infrastructure reliability, cybersecurity and business continuity through structured IT support, proactive monitoring and dependable operations for growing organizations across the GCC.',
  },
  {
    number: '04',
    title: 'Specialist Technology Talent',
    description: 'Extend delivery capacity with experienced cloud, AI, data, cybersecurity and infrastructure professionals through flexible staffing and dedicated team models aligned to business priorities.',
  },
];

function SectionHeader({ badgeClass, badgeText, title, description }) {
  return (
    <div className="section-header">
      <div className={badgeClass}>{badgeText}</div>
      <h2 className="display-md">{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function HomeContent() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge"><span className="text-gradient">ONE TECHNOLOGY PARTNER. FOUR CORE CAPABILITIES.</span></div>
              
              <h1 className="hero-title"><span>One Partner. Every Stage of Your Digital Transformation</span></h1>
              <p className="hero-desc">
                From cloud modernization to AI adoption, IT operations to technology talent — GulfStream Technologies brings strategy, execution, and ongoing support together, so businesses across the Saudi Arabia & GCC can move forward with confidence.</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginBottom: '1rem' }}>
                  Talk to a Technology Expert
                </Link>
                <Link href="/services" className="btn btn-cta-white btn-lg" style={{ marginBottom: '1rem' }}>
                  <span className="gradient-text">Explore Our Services</span>
                </Link>
              </div>
              <div className="hero-trust-points" aria-label="GulfStream service commitments">
                {heroTrustPoints.map((point) => (
                  <div className="hero-trust-point" key={point}>
                    <span className="hero-trust-check" aria-hidden="true">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
             </div>

            <div className="hero-visual">
              <div className="hero-background-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar home-trust-bar" aria-label="Why organizations choose GulfStream Technologies">
        <div className="marquee-wrapper">
          {[0, 1].map((track) => (
            <div className="marquee-track" key={track} aria-hidden={track === 1}>
              {trustPoints.map((point) => (
                <div className="trust-item" key={`${track}-${point.label}`}>
                  <span>
                    <span className="trust-label">{point.label}</span>
                    <span className="trust-desc">{point.description}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-primary"
            badgeText="CORE CAPABILITIES"
            title="One technology partner. Four core capabilities."
            description="Cloud, AI, IT and technology talent are connected parts of modern transformation. GulfStream brings them together under one accountable partner."
          />
          <div className="grid-4 home-capabilities-grid">
            {coreCapabilities.map((capability) => (
              <article key={capability.title} className="card premium-card home-capability-card">
                <div className="home-capability-image">
                  <Image src={capability.image} alt={`${capability.title} for business`} fill sizes="(max-width: 991px) 50vw, 25vw" />
                </div>
                <div className="home-capability-content">
                  <div className="home-capability-eyebrow">{capability.eyebrow}</div>
                  <h3>{capability.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{capability.description}</p>
                  <div className="home-card-footer">
                    <Link href={capability.href} className="btn btn-accent btn-sm">
                      {capability.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-integration-section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="home-integration-heading">

            <h2 className="display-md">One Technology Partner Across the Entire Transformation Lifecycle</h2>
            <p>Cloud, AI, IT and technology talent often need to work together to deliver meaningful business outcomes. GulfStream Technologies brings these capabilities together under one coordinated delivery model — reducing handoff gaps between strategy, implementation, operations and optimization.</p>
          </div>
          <div className="home-integration-layout">
            <article className="home-integration-card">
              <div className="home-integration-orbit" aria-hidden="true">
              </div>
              <div className="home-integration-eyebrow">THE GULFSTREAM MODEL</div>
              <h3 className="display-sm" style={{ marginTop: '1rem' }} >One Accountable Team From Strategy Through Operations</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                One accountable team connects strategy, architecture, implementation, governance and ongoing optimization, helping organizations reduce handoff gaps, move faster and sustain measurable business outcomes.
              </p>
              <div className="home-integration-links">
                <Link href="/about" className="home-integration-cta">Explore our Approach <span aria-hidden="true">↗</span></Link>
                <Link href="/contact" className="home-integration-cta home-integration-cta-muted">Start a Conversation <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="home-integration-signature">
                <span className="home-integration-signature-line"></span>
                <span>Strategy / Delivery / Operations / Optimization</span>
              </div>
            </article>
            <div className="home-integration-matrix" aria-label="Integrated capability model">
              {integrationCapabilities.map((capability) => (
                <article key={capability.number} className="home-integration-item">
                  <div className="home-integration-item-topline">
                    <span className="home-integration-number">{capability.number}</span>
                  </div>
                  <div>
                    <h3>{capability.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{capability.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-primary"
            badgeText="BUSINESS FIRST"
            title="Technology Challenges We Help Organizations Solve"
            description="GulfStream helps organizations address cloud complexity, rising technology costs, AI adoption, IT operations and technology talent shortages through practical, secure solutions."
          />
          <div className="home-challenges-grid">
            {businessChallenges.map((challenge, index) => (
              <article key={challenge.title} className="home-challenge-card">
                <div className="home-challenge-topline">
                  <span className="home-challenge-number">0{index + 1}</span>
                  <span className="home-challenge-status">BUSINESS PRESSURE</span>
                </div>
                <div className="home-challenge-content">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-accent"
            badgeText="HOW WE HELP"
            title="From Technology Strategy to Reliable Day-to-Day Operations"
            description="GulfStream can engage at any stage of the journey from first strategy to continuous optimization."
          />
          <div className="home-roadmap" aria-label="GulfStream delivery roadmap">
            {deliverySteps.map((step) => (
              <article
                key={step.title}
                className="home-roadmap-step"
              >
                <div className="home-roadmap-node">{step.number}</div>
                <div className="home-roadmap-card">
                  <div className="home-roadmap-kicker">PHASE {step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-primary"
            badgeText="WHY GULFSTREAM"
            title="Why Organizations Choose GulfStream Technologies"
            description="Technology expertise, structured delivery and flexible engagement models to help organizations across Saudi Arabia and the GCC modernize, operate and scale their technology environments."
          />
          <div className="grid-3 home-differentiator-grid">
            {differentiators.map((item) => (
              <article key={item.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box" aria-hidden="true">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-accent"
            badgeText="ENGAGEMENT MODELS"
            title="Flexible Engagement Models for Different Business Needs"
            description="From advisory to fully managed operations, choose the engagement model that matches your needs today and evolve it over time."
          />
          <div className="grid-3 home-engagement-grid">
            {engagementModels.map((model, index) => (
              <article key={model.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box" aria-hidden="true">{model.icon}</div>
                  <div className="card-title-row">
                    <h3>{model.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>     

      <section className="section">
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-primary"
            badgeText="INDUSTRIES"
            title="Technology Solutions Aligned to Your Industry"
            description="Every industry has different operational, regulatory and technology requirements. GulfStream combines cloud, AI, IT and technology talent to build solutions around the way your organization actually operates."
          />
          <div className="grid-3 home-industries-grid">
            {industries.map((industry) => (
              <Link key={industry.title} href="/industries" className="home-industry-link">
                <article className="industry-card home-industry-card">
                  <div className="industry-card-header">
                    <div className="industry-icon" aria-hidden="true">{industry.icon}</div>
                    <h3>{industry.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{industry.description}</p>
                </article>
              </Link>
            ))}
            <Link href="/industries" className="home-industry-link">
              <article className="industry-card home-industry-card home-industry-all">
                <div className="industry-card-header">
                  <div className="industry-icon" aria-hidden="true">🌐</div>
                  <h3>View All Industries</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Explore industry-specific cloud, AI, IT and technology talent solutions supporting operational priorities, governance and sustainable business growth.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <HomeFaqSection />

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="display-md">Ready to Turn Your Technology Priorities Into a Practical Plan? </h2>
            <p>
              Whether you're planning a cloud migration, exploring AI, improving IT operations, strengthening cybersecurity or expanding your technology team, GulfStream can help you define the right next step.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Talk to a Technology Expert
              </Link>
              <Link href="/services" className="btn-white-outline">
                Explore Our Services
              </Link>
            </div>  
          </div>
        </div>
      </section>
    </main>
  );
}
