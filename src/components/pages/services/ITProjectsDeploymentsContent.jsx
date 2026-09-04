'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'What kinds of IT projects do you support?',
    answer: 'We support office IT rollouts, network deployments, server installations, Microsoft 365 setups, infrastructure refreshes, and technology migration or upgrade projects for growing businesses.',
  },
  {
    question: 'How do you manage delivery?',
    answer: 'We work through discovery, planning, design, deployment, testing, and handover so the project remains aligned with the business purpose and operational requirements.',
  },
  {
    question: 'Can you support office moves or branch setups?',
    answer: 'Yes. New office launches, office moves, branch expansion, and infrastructure refreshes are common projects that benefit from a clear delivery process and technical coordination.',
  },
  {
    question: 'Can you work with an existing environment?',
    answer: 'Yes. We can assess the current setup and help plan changes that integrate with existing systems, user needs, and operational constraints.',
  },
  {
    question: 'Do you provide post-deployment support?',
    answer: 'Often, yes. A project does not end at go-live. We can support final tuning, testing, documentation, and handover so the new environment is stable and manageable afterward.',
  },
];

const projectChallenges = [
  {
    icon: '🏢',
    title: 'Office Expansion',
    description:
      'New offices, relocations, or branch rollouts often require network, user, and device readiness to be coordinated properly from the start.',
  },
  {
    icon: '⚙️',
    title: 'Legacy Infrastructure Constraints',
    description:
      'Outdated systems, inconsistent configurations, and legacy dependencies can create delivery risk when projects are not planned carefully.',
  },
  {
    icon: '🔄',
    title: 'Migration Complexity',
    description:
      'Infrastructure changes, application moves, and user transitions often create disruption unless the project is structured and staged properly.',
  },
];

const projectServices = [
  {
    icon: '🏢',
    title: 'Office IT Setup & Rollouts',
    description:
      'Plan and deploy the user experience, connectivity, and infrastructure needed for new offices, office moves, or expansion projects.',
  },
  {
    icon: '🌐',
    title: 'Network Deployment',
    description:
      'Install and configure the required network foundation for new locations, branches, and refreshed workplace environments.',
  },
  {
    icon: '🖥️',
    title: 'Server & Infrastructure Deployment',
    description:
      'Provision and configure the required server, storage, and compute platform components needed to support critical operations.',
  },
  {
    icon: '💼',
    title: 'Microsoft 365 Deployment',
    description:
      'Support user onboarding, mail setup, identity configuration, and productivity platform readiness as part of business deployment projects.',
  },
  {
    icon: '☁️',
    title: 'Cloud-to-Office Connectivity',
    description:
      'Connect core systems, cloud services, and office environments so the technology stack works together with less friction.',
  },
  {
    icon: '🔁',
    title: 'Migration & Refresh Projects',
    description:
      'Coordinate phased migration and refresh work to help reduce operational disruption while improving reliability and supportability.',
  },
];

const projectDelivery = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Review the business goals, existing environment, constraints, and technical dependencies before the project is scoped.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Define timelines, responsibilities, dependencies, risks, and the sequence of work needed to reduce project disruption.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Implement the technology changes carefully, keeping testing and validation active throughout delivery.',
  },
  {
    number: '04',
    title: 'Handover',
    description:
      'Document outcomes, transfer knowledge, and support the final stabilisation phase so the business can adopt the new environment confidently.',
  },
];

const projectOutcomes = [
  {
    icon: '📉',
    title: 'Lower Delivery Risk',
    description:
      'Structured planning and testing reduce the risk of disruption, delays, or avoidable rework during implementation.',
  },
  {
    icon: '⚡',
    title: 'Faster Adoption',
    description:
      'Clear deployment planning helps teams get to a stable working environment sooner with less confusion around handover and support.',
  },
  {
    icon: '🚀',
    title: 'Better Business Readiness',
    description:
      'Every implementation is aligned to business needs so the final environment supports real operational requirements, not just technical completion.',
  },
];

const projectCoverage = [
  {
    icon: '🏢',
    title: 'Office Setup',
    description: 'Prepare new or relocated offices with coordinated users, devices, connectivity, and workplace technology.',
  },
  {
    icon: '🌐',
    title: 'Network Rollouts',
    description: 'Deploy reliable wired and wireless networks for offices, branches, and growing business locations.',
  },
  {
    icon: '🖥️',
    title: 'Server Deployments',
    description: 'Implement server, storage, and compute infrastructure that supports critical business workloads.',
  },
  {
    icon: '💼',
    title: 'Microsoft 365',
    description: 'Configure productivity, identity, email, and user access as part of a structured rollout.',
  },
  {
    icon: '☁️',
    title: 'Cloud Connectivity',
    description: 'Connect offices and users to cloud applications with dependable, secure access and integration.',
  },
  {
    icon: '🔄',
    title: 'Infrastructure Refreshes',
    description: 'Modernize aging technology through phased upgrades designed to reduce operational disruption.',
  },
];

const projectUseCases = [
  {
    icon: '📍',
    title: 'Business Expansion',
    description:
      'When the business launches a new office, hires quickly, or adds locations, project delivery becomes essential to support growth without disruption.',
  },
  {
    icon: '🧰',
    title: 'Technology Refresh',
    description:
      'Older infrastructure, hardware renewal, or platform updates often require a controlled deployment plan to maintain continuity.',
  },
  {
    icon: '🔗',
    title: 'Platform Change',
    description:
      'Migrations and system changes often need careful scoping, staging, testing, and sign-off to keep operations stable.',
  },
];

const ITProjectsDeploymentsContent = () => {
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
            <span>IT Projects & Deployments</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">IT Project Deployment Services for Business Growth</span>
          </h1>

          <p>
            GulfStream delivers end-to-end IT project and infrastructure deployment services for businesses launching offices, upgrading systems, or expanding operations. We coordinate networks, servers, Microsoft 365, cloud connectivity, and workplace technology to reduce disruption, improve implementation quality, and create a reliable foundation for long-term business growth.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Discuss a Project
            </Link>
            <Link href="/it-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Why projects need structure</div>
            <h2 className="display-md">Poorly planned rollouts create business friction</h2>
            <p>
              Projects often fail to deliver value when dependencies are unclear, deployment sequencing is weak, or critical business needs are not fully considered at the planning stage.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {projectChallenges.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.description}</p>
                  </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🚀 Project services</div>
            <h2 className="display-md">What GulfStream can deliver</h2>
            <p>
              We support the implementation work that enables business operations to move forward without unnecessary technical disruption.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {projectServices.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.description}</p>
                  </article>
            ))}
          </div>
        </div>
      </section>



      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📈 Business outcomes</div>
            <h2 className="display-md">Project delivery that supports real business goals</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {projectOutcomes.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🧩 Deployment capabilities</div>
            <h2 className="display-md">IT deployment capabilities for every growth stage</h2>
            <p>
              From new office launches to infrastructure modernization, we coordinate the technology work needed to help businesses expand with confidence and less disruption.
            </p>
          </div>

          <div className="project-deployment-board reveal">
            <div className="project-deployment-feature">
              <span className="project-deployment-kicker">BUSINESS-READY IMPLEMENTATION</span>
              <div className="project-deployment-feature-icon">🚀</div>
              <h3>Turn technology plans into working environments</h3>
              <p>
                Coordinated deployment helps your teams adopt new technology faster while keeping dependencies, testing, and handover under control.
              </p>
              <span className="project-deployment-count">06 DELIVERY AREAS</span>
            </div>

            <div className="project-deployment-grid reveal reveal-stagger">
              {projectCoverage.map((item, index) => (
                <article className="project-deployment-item" key={item.title}>
                  <div className="project-deployment-item-top">
                    <span className="project-deployment-index">0{index + 1}</span>
                    <span className="project-deployment-icon" aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">👥 Who it is for</div>
            <h2 className="display-md">Best suited to changing business environments</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {projectUseCases.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Common questions about IT project delivery</h2>
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
            <h2 className="display-md">Plan your next IT infrastructure project</h2>
            <p>
              Talk to GulfStream about your upcoming deployment, infrastructure refresh, or office technology change and how to structure the project with less operational risk.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book a Project Consultation
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

export default ITProjectsDeploymentsContent;
