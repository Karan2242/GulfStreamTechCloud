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
      'Modernize, migrate and optimize AWS, Azure, Google Cloud and Oracle Cloud environments for secure growth.',
    href: '/services',
    cta: 'Explore Cloud Services →',
  },
  {
    title: 'AI Services',
    image: '/assets/images/ai-services.png',
    eyebrow: 'APPLIED AI',
    description:
      'Move from high-value use cases to secure, production-ready AI applications and business process automation.',
    href: '/ai-services',
    cta: 'Explore AI Services →',
  },
  {
    title: 'IT Services',
    image: '/assets/images/it-services.png',
    eyebrow: 'MANAGED IT OPERATIONS',
    description:
      'Strengthen infrastructure, networking and cybersecurity with reliable managed IT support and delivery.',
    href: '/it-services',
    cta: 'Explore IT Services →',
  },
  {
    title: 'Manpower Services',
    image: '/assets/images/manpower-services.png',
    eyebrow: 'SPECIALIST TECHNOLOGY TALENT',
    description:
      'Extend delivery capacity with experienced cloud, AI, data, cybersecurity and enterprise IT specialists.',
    href: '/manpower-services',
    cta: 'Explore Manpower Services →',
  },
];

const businessChallenges = [
  {
    title: 'Cloud Complexity',
    icon: '🌐',
    description:
      'Modernize, migrate and manage complex cloud environments while improving visibility, performance and control.',
  },
  {
    title: 'Rising Technology Costs',
    icon: '💰',
    description:
      'Improve cloud and IT cost visibility, governance and operational efficiency.',
  },
  {
    title: 'AI Uncertainty',
    icon: '🧠',
    description:
      'Identify practical AI use cases and move from experimentation to secure, production-ready implementation.',
  },
  {
    title: 'IT Operational Pressure',
    icon: '🔒',
    description:
      'Improve reliability, support, cybersecurity and infrastructure performance through managed IT services.',
  },
  {
    title: 'Technology Talent Shortages',
    icon: '🎯',
    description:
      'Quickly access specialized technology professionals and delivery teams without the overhead of building internal capacity.',
  },
  {
    title: 'Digital Transformation Delivery',
    icon: '🚀',
    description:
      'Turn technology strategy into measurable progress with a practical roadmap, accountable delivery and continuous optimization.',
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
  { title: 'Retail & E-commerce', icon: '🛒' },
  { title: 'Healthcare', icon: '🏥' },
  { title: 'Logistics & Supply Chain', icon: '🚛' },
  { title: 'Technology & SaaS', icon: '💻' },
  { title: 'Professional Services', icon: '🏢' },
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
    title: 'Staff Augmentation',
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
    title: 'GCC-Focused Expertise',
    icon: '🌍',
    description:
      'Built around the priorities, expectations and operating context of organizations across the GCC.',
  },
  {
    title: 'Four Integrated Capabilities',
    icon: '🔗',
    description:
      'Cloud, AI, IT and technology talent under one accountable partner.',
  },
  {
    title: 'Business-First Approach',
    icon: '📈',
    description:
      'We solve business problems, not just technical ones, starting from measurable outcomes.',
  },
  {
    title: 'Enterprise-Ready Delivery',
    icon: '🏗️',
    description:
      'Structured, secure and dependable delivery designed for complex organizations.',
  },
  {
    title: 'Flexible Engagement',
    icon: '🧩',
    description:
      'Consulting, managed services, projects, staff augmentation and dedicated teams as you need them.',
  },
  {
    title: 'Security-Conscious Delivery',
    icon: '🛡️',
    description:
      'Security, governance and operational resilience considered across the solutions we design and support.',
  },
];

const featuredInsights = [
  {
    slug: 'cloud-cost-optimization-strategy',
    category: 'FinOps',
    title: 'Cloud Cost Optimization Strategy: A Complete Framework',
    summary:
      'Learn proven FinOps methodologies to reduce cloud costs through rightsizing, commitment planning, and governance.',
    readTime: '8 min read',
  },
  {
    slug: 'cloud-iam-security-best-practices',
    category: 'Security',
    title: 'Cloud IAM Security Best Practices: AWS, Azure, GCP',
    summary:
      'Implement zero-trust identity models, least privilege, and MFA across modern cloud operations.',
    readTime: '8 min read',
  },
  {
    slug: 'cloud-migration-planning',
    category: 'Migration',
    title: 'Cloud Migration Planning Strategy: From Discovery to Go-Live',
    summary:
      'A practical framework for assessment, design, validation, and cutover planning in enterprise migration programs.',
    readTime: '10 min read',
  },
  {
    slug: 'auto-scaling-architecture',
    category: 'Architecture',
    title: 'Auto-Scaling Cloud Architecture: Design Patterns',
    summary:
      'Build elastic architecture patterns that improve performance while keeping infrastructure spend controlled.',
    readTime: '10 min read',
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

const heroTrustPoints = ['24/7 Monitoring & Support', 'FinOps-Led Cost Control', 'Secure Enterprise Delivery'];

const integrationCapabilities = [
  {
    number: '01',
    title: 'Cloud Foundation',
    description: 'Secure, scalable infrastructure for enterprise applications and data.',
  },
  {
    number: '02',
    title: 'Applied AI',
    description: 'Practical automation and intelligence connected to measurable business value.',
  },
  {
    number: '03',
    title: 'Reliable IT',
    description: 'Managed operations, cybersecurity and resilience that keep teams productive.',
  },
  {
    number: '04',
    title: 'Specialist Talent',
    description: 'Experienced cloud, data and engineering professionals to extend delivery capacity.',
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
              
              <h1 className="hero-title"><span>Empowering Digital Transformation Across <span className="text-gradient">Saudi Arabia & the GCC</span></span></h1>
              <p className="hero-desc">
                GulfStream Technologies helps organizations modernize cloud infrastructure, adopt practical AI, strengthen IT operations and access specialized technology talent through one coordinated technology partner.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Talk to a Technology Expert
                </Link>
                <Link href="/services" className="btn btn-cta-white btn-lg">
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
            <div className="badge badge-accent">INTEGRATED CAPABILITIES</div>
            <h2 className="display-md">One partner. Four capabilities. One accountable team.</h2>
            <p>Technology initiatives rarely exist in isolation. GulfStream connects the capabilities, people and operational discipline needed to move from strategy to measurable results.</p>
          </div>
          <div className="home-integration-layout">
            <article className="home-integration-card">
              <div className="home-integration-orbit" aria-hidden="true">
                <span className="home-integration-orbit-ring"></span>
                <span className="home-integration-orbit-core">GS</span>
              </div>
              <div className="home-integration-eyebrow">THE GULFSTREAM MODEL</div>
              <h3 className="display-sm">From strategy to operations, without the handoff gaps.</h3>
              <p>
                One coordinated team aligns architecture, implementation, governance and ongoing optimization around your business priorities.
              </p>
              <div className="home-integration-links">
                <Link href="/about" className="home-integration-cta">Explore our approach <span aria-hidden="true">↗</span></Link>
                <Link href="/contact" className="home-integration-cta home-integration-cta-muted">Start a conversation <span aria-hidden="true">↗</span></Link>
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
            title="Solve business challenges, not just technology problems."
            description="We start with the business outcome you need and bring together the right combination of cloud, AI, IT and technology talent to achieve it."
          />
          <div className="home-challenges-grid">
            {businessChallenges.map((challenge, index) => (
              <article key={challenge.title} className={`home-challenge-card${index === 0 ? ' home-challenge-card-featured' : ''}`}>
                <div className="home-challenge-topline">
                  <span className="home-challenge-number">0{index + 1}</span>
                  <span className="home-challenge-status">BUSINESS PRESSURE</span>
                </div>
                <div className="home-challenge-content">
                  <h3>{challenge.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{challenge.description}</p>
                </div>
                <span className="home-challenge-arrow" aria-hidden="true"></span>
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
            title="From strategy to continuous optimization."
            description="GulfStream can engage at any stage of the journey from first strategy to continuous optimization."
          />
          <div className="delivery-process home-delivery-process">
            {deliverySteps.map((step) => (
              <article key={step.title} className="process-step">
                <div className="process-step-header">
                  <span className="process-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                </div>
                <div className="process-step-body">
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{step.description}</p>
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
            badgeText="INDUSTRIES"
            title="Technology solutions shaped around your industry."
            description="We tailor cloud, AI, IT and technology talent to the operational realities, regulatory requirements and growth priorities of your industry."
          />
          <div className="grid-3 home-industries-grid">
            {industries.map((industry) => (
              <Link key={industry.title} href="/industries" className="home-industry-link">
                <article className="industry-card home-industry-card">
                  <div className="industry-card-header">
                    <div className="industry-icon" aria-hidden="true">{industry.icon}</div>
                    <h3>{industry.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Solutions aligned to business operations, governance, and growth targets for {industry.title.toLowerCase()} organizations.</p>
                </article>
              </Link>
            ))}
            <Link href="/industries" className="home-industry-link">
              <article className="industry-card home-industry-card home-industry-all">
                <div className="industry-card-header">
                  <div className="industry-icon" aria-hidden="true">🌐</div>
                  <h3>View All Industries</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Explore all available industry pages and engagement priorities GulfStream supports.</p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <SectionHeader
            badgeClass="badge badge-accent"
            badgeText="ENGAGEMENT MODELS"
            title="Work with us in the way that fits your business."
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
            badgeText="WHY GULFSTREAM"
            title="A technology partner built for serious organizations."
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

 

      <HomeFaqSection />

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="display-md">Let&apos;s solve your next technology challenge.</h2>
            <p>
              Whether you are modernizing infrastructure, exploring AI, improving IT operations or building technology capacity, GulfStream can help you define the right next step.
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
