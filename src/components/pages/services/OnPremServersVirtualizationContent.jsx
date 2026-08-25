'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'Do you support both physical servers and virtual environments?',
    answer: 'Yes. We work with physical server environments, virtualization platforms, and mixed infrastructure setups that still support business-critical workloads.',
  },
  {
    question: 'Can you support VMware and Hyper-V environments?',
    answer: 'Yes. We can support environments based on VMware, Hyper-V, or Microsoft server platforms depending on the current architecture and business needs.',
  },
  {
    question: 'When does a business need server or virtualization support?',
    answer: 'It is usually time to review this when hardware is aging, workloads are growing, performance is inconsistent, or the environment is becoming difficult to manage and support.',
  },
  {
    question: 'Do you help with modernization and upgrades?',
    answer: 'Yes. We help assess the current environment, identify gaps, and plan upgrades or consolidations that improve reliability and reduce operational risk.',
  },
  {
    question: 'How does the engagement usually start?',
    answer: 'Most projects begin with a review of the current server estate, workload needs, hardware lifecycle status, and business priorities before designing the next step.',
  },
];

const serverChallenges = [
  {
    icon: '🧱',
    title: 'Aging Infrastructure',
    description:
      'Older servers, storage, and virtualization platforms can create performance bottlenecks and increase the risk of disruption.',
  },
  {
    icon: '📈',
    title: 'Capacity Constraints',
    description:
      'Growing workloads often push server resources beyond their original design limits, affecting stability and responsiveness.',
  },
  {
    icon: '🔁',
    title: 'Virtualization Sprawl',
    description:
      'As environments grow, unmanaged virtual machines and inconsistent platform practices can make support more difficult and less predictable.',
  },
];

const serverServices = [
  {
    icon: '🖥️',
    title: 'Physical Server Deployment',
    description:
      'Design and deployment of business servers that support core workloads, authentication, file services, and essential applications.',
  },
  {
    icon: '⚙️',
    title: 'Virtualization Planning & Support',
    description:
      'Assess and improve virtualized environments to support better utilization, easier management, and more reliable workload delivery.',
  },
  {
    icon: '💾',
    title: 'Storage & Performance Review',
    description:
      'Review storage performance, capacity, and resilience to support critical workloads and reduce operational bottlenecks.',
  },
  {
    icon: '🗂️',
    title: 'Active Directory & Identity Services',
    description:
      'Support the core identity and access environment so users, devices, and access policies remain consistent and manageable.',
  },
  {
    icon: '🪟',
    title: 'Windows Server Environment Support',
    description:
      'Maintain the health, configuration, and patching of server environments used across day-to-day business operations.',
  },
  {
    icon: '📊',
    title: 'Server Monitoring & Health Checks',
    description:
      'Track utilization, availability, and recurring issues so problems can be addressed before they affect service continuity.',
  },
];

const serverDelivery = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Review server utilization, environment stability, workload criticality, and existing operational challenges before proposing a path forward.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Define the right server model, capacity needs, virtualization strategy, and renewal or modernization priorities.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Implement the approved design carefully to minimize disruption and validate the environment against business requirements.',
  },
  {
    number: '04',
    title: 'Monitor & Improve',
    description:
      'Continuously review performance, health, and resilience so the platform remains stable and easier to manage over time.',
  },
];

const serverOutcomes = [
  {
    icon: '🧭',
    title: 'Improved Reliability',
    description:
      'Help keep critical business applications and infrastructure more stable, predictable, and easier to support.',
  },
  {
    icon: '📉',
    title: 'Reduced Operational Risk',
    description:
      'Address aging hardware, weak architecture, and performance issues before they become more disruptive business problems.',
  },
  {
    icon: '🚀',
    title: 'Stronger Modernization Readiness',
    description:
      'Create a clearer foundation for future upgrades, cloud adoption, or infrastructure optimization with less uncertainty.',
  },
];

const serverCoverage = [
  {
    icon: '🖥️',
    title: 'Physical Servers',
  },
  {
    icon: '🪟',
    title: 'Windows Server',
  },
  {
    icon: '🗂️',
    title: 'Active Directory',
  },
  {
    icon: '⚙️',
    title: 'VMware & Hyper-V',
  },
  {
    icon: '💾',
    title: 'Storage',
  },
  {
    icon: '📈',
    title: 'Monitoring',
  },
];

const serverUseCases = [
  {
    icon: '🏢',
    title: 'Businesses with On-Prem Workloads',
    description:
      'Organizations that rely on internal apps, file services, or domain-based operations often need a more structured server strategy.',
  },
  {
    icon: '🔄',
    title: 'Infrastructure Refreshes',
    description:
      'When hardware is nearing end-of-life or performance is degrading, a planned refresh or redesign can reduce operational risk.',
  },
  {
    icon: '📍',
    title: 'Growing Organizations',
    description:
      'As the business expands, server capacity, virtualization, and resilience planning become more important to maintain service quality.',
  },
];

const OnPremServersVirtualizationContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/it-services">IT Services</Link>
            <span>›</span>
            <span>On-Prem Servers & Virtualization</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">On-Premises Server & Virtualization Services</span>
          </h1>

          <p>
            GulfStream helps organizations keep critical on-premises workloads reliable, efficient, and easier to manage as business demands grow and infrastructure ages.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Server Review
            </Link>
            <Link href="/it-services" className="btn btn-outline btn-lg">
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Why this matters</div>
            <h2 className="display-md">Server issues usually surface as business disruption</h2>
            <p>
              Aging infrastructure, poor virtualization planning, or rising workload demand can affect performance, availability, and the day-to-day confidence of IT operations.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {serverChallenges.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🖥️ Server services</div>
            <h2 className="display-md">Support for critical on-premises environments</h2>
            <p>
              We help manage the infrastructure that supports core business applications, identity services, shared systems, and day-to-day technology operations.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {serverServices.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🧭 How we deliver</div>
            <h2 className="display-md">A structured path to better server operations</h2>
          </div>

          <div className="grid-4 reveal reveal-stagger">
            {serverDelivery.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.number}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📈 Business outcomes</div>
            <h2 className="display-md">Support continuity without overcomplicating the environment</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {serverOutcomes.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🧩 Supported environments</div>
            <h2 className="display-md">Platforms and workloads we commonly support</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {serverCoverage.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">👥 Who it is for</div>
            <h2 className="display-md">Most useful for businesses with essential on-premises systems</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {serverUseCases.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">💡 Why GulfStream</div>
            <h2 className="display-md">A practical, lifecycle-focused approach</h2>
            <p>
              We help businesses make informed decisions around modernization, capacity, workload placement, and supportability without creating unnecessary complexity or disruption.
            </p>
          </div>

          <div className="grid-2 reveal reveal-stagger">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🧠</div>
                <div className="card-title-row">
                  <h3>Technology fit over technology noise</h3>
                </div>
              </div>
              <p className="text-muted">
                We focus on the right server and virtualization strategy for each workload and business context rather than forcing a one-size-fits-all setup.
              </p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <div className="card-title-row">
                  <h3>Connected infrastructure thinking</h3>
                </div>
              </div>
              <p className="text-muted">
                Server design is considered alongside wider IT operations, networking, security, and business continuity requirements to support the broader environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Common questions about server support</h2>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div id={`faq-answer-${index}`} className="faq-answer">
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Plan your next server or virtualization upgrade</h2>
            <p>
              Talk to GulfStream about your current server environment, workload pressures, and the modernisation path that best supports your business continuity goals.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Schedule a Server Consultation
              </Link>
              <Link href="/it-services" className="btn-white-outline">
                View all IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnPremServersVirtualizationContent;
