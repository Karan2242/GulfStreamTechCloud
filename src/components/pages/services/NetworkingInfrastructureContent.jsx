'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'What does a network infrastructure service include?',
    answer: 'It typically covers network assessment, connectivity design, switching and routing, Wi-Fi planning, firewall integration, VPN access, monitoring, and performance improvements for business environments.',
  },
  {
    question: 'When does a business need network infrastructure support?',
    answer: 'Businesses often need it when connectivity is unreliable, branch locations are difficult to connect, Wi-Fi performance is inconsistent, or legacy infrastructure is creating bottlenecks and support challenges.',
  },
  {
    question: 'Can GulfStream work with an existing network environment?',
    answer: 'Yes. We can assess the current design, identify gaps, and support both upgrades and new deployments without disrupting operational continuity more than necessary.',
  },
  {
    question: 'Do you support Wi-Fi, VPN, and firewall environments?',
    answer: 'Yes. We support the core components that keep business networks operational, including local and wide-area connectivity, access controls, secure connectivity, and network health monitoring.',
  },
  {
    question: 'How does the process usually work?',
    answer: 'The process normally starts with a review of the current environment, business requirements, and pain points, followed by design, implementation, testing, and post-deployment optimization.',
  },
];

const networkChallenges = [
  {
    icon: '📶',
    title: 'Unreliable Connectivity',
    description:
      'Slow links, inconsistent performance, and intermittent connectivity issues can affect productivity and service delivery across the business.',
  },
  {
    icon: '📡',
    title: 'Wi-Fi Coverage Gaps',
    description:
      'Dead zones, weak signal strength, and high device density can create frustration for staff and disrupt day-to-day operations.',
  },
  {
    icon: '🔁',
    title: 'Aging Network Equipment',
    description:
      'Outdated switching, routing, or firewall infrastructure can increase downtime risk and limit supportability as the business grows.',
  },
];

const networkServices = [
  {
    icon: '🌐',
    title: 'Network Infrastructure Assessment',
    description:
      'Review the current environment, identify bottlenecks, and define a practical improvement plan based on business usage, risks, and future growth.',
  },
  {
    icon: '🏢',
    title: 'LAN/WAN & Branch Connectivity',
    description:
      'Support reliable office connectivity, site-to-site communication, and consistent access across departments, locations, and remote teams.',
  },
  {
    icon: '📶',
    title: 'Wi-Fi Design & Optimization',
    description:
      'Assess wireless coverage, capacity, access-point placement, and interference to create a more dependable workplace connectivity experience.',
  },
  {
    icon: '🔀',
    title: 'Switching & Routing Support',
    description:
      'Improve the core network foundation with stable switching, routing, and configuration practices that support day-to-day operations.',
  },
  {
    icon: '🛡️',
    title: 'Firewall & Secure Connectivity',
    description:
      'Help align network design with applied security controls, remote access needs, and segmentation requirements for a safer environment.',
  },
  {
    icon: '📊',
    title: 'Network Monitoring & Optimization',
    description:
      'Track health, identify emerging performance issues, and apply practical optimizations to keep the network stable and easier to manage.',
  },
];

const networkDelivery = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Carry out a review of the current network, usage patterns, pain points, and performance issues before proposing any changes.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Define a fit-for-purpose architecture that supports resilience, growth, and operational clarity for users and services.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Implement the right network changes carefully to minimize disruption and confirm the environment works as expected.',
  },
  {
    number: '04',
    title: 'Secure & Monitor',
    description:
      'Confirm connectivity, security controls, and health visibility remain aligned with business requirements over time.',
  },
  {
    number: '05',
    title: 'Optimize',
    description:
      'Use operational feedback and performance data to improve reliability, simplify support, and plan future enhancements.',
  },
];

const networkOutcomes = [
  {
    icon: '🧭',
    title: 'More Reliable Connectivity',
    description:
      'Improve day-to-day access to business systems, applications, and communication tools without recurring network disruption.',
  },
  {
    icon: '⚡',
    title: 'Better User Experience',
    description:
      'Reduce slowdowns and connectivity issues so teams can work with fewer interruptions and less frustration.',
  },
  {
    icon: '🔒',
    title: 'Better Security Posture',
    description:
      'Align network design with secure access, segmentation, and policy controls that support a more controlled environment.',
  },
];

const networkCoverage = [
  {
    icon: '🏠',
    title: 'LAN/WAN',
  },
  {
    icon: '📶',
    title: 'Wi-Fi',
  },
  {
    icon: '🔀',
    title: 'Switching & Routing',
  },
  {
    icon: '🛡️',
    title: 'Firewall Integration',
  },
  {
    icon: '🔐',
    title: 'VPN Access',
  },
  {
    icon: '📊',
    title: 'Monitoring',
  },
];

const networkUseCases = [
  {
    icon: '🏢',
    title: 'Growing Businesses',
    description:
      'Businesses expanding staff, locations, or applications often need stronger network foundations to support steady operations.',
  },
  {
    icon: '📍',
    title: 'Multi-Location Organizations',
    description:
      'Distributed teams and branch offices benefit from consistent, well-designed, and easier-to-support connectivity.',
  },
  {
    icon: '🧭',
    title: 'Modern Workplace Environments',
    description:
      'Hybrid work, cloud services, and collaboration applications depend on a network that performs reliably at scale.',
  },
];

const NetworkingInfrastructureContent = () => {
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
            <span>Networking & Infrastructure</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">Network Infrastructure Services</span> for Reliable Business Connectivity
          </h1>

          <p>
            GulfStream helps businesses build and maintain dependable network infrastructure that supports productivity, stable communications, and secure access across the workplace.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Network Review
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
            <div className="badge badge-primary">⚠️ Why it matters</div>
            <h2 className="display-md">Connectivity problems create operational drag</h2>
            <p>
              Poor network performance can slow down operations, affect employee productivity, and limit the performance of business-critical systems.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkChallenges.map((item) => (
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
            <div className="badge badge-accent">🌐 Network services</div>
            <h2 className="display-md">Network infrastructure services we provide</h2>
            <p>
              Our work focuses on the areas that most influence business connectivity, performance, and operational confidence.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkServices.map((item) => (
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
            <div className="badge badge-primary">🧭 How we work</div>
            <h2 className="display-md">A practical network delivery approach</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkDelivery.map((item) => (
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
            <h2 className="display-md">Improve reliability without adding unnecessary complexity</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkOutcomes.map((item) => (
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
            <h2 className="display-md">Network areas we commonly support</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkCoverage.map((item) => (
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
            <h2 className="display-md">Ideal for businesses with connected operations</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {networkUseCases.map((item) => (
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
            <h2 className="display-md">Business-first network guidance</h2>
            <p>
              We focus on practical infrastructure decisions that support business continuity, security, and long-term manageability rather than technology for its own sake.
            </p>
          </div>

          <div className="grid-2 reveal reveal-stagger">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🎯</div>
                <div className="card-title-row">
                  <h3>Practical recommendations</h3>
                </div>
              </div>
              <p className="text-muted">
                We assess the real operating environment and align network improvements with day-to-day business needs, user experience, and infrastructure priorities.
              </p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <div className="card-title-row">
                  <h3>Connected IT perspective</h3>
                </div>
              </div>
              <p className="text-muted">
                Network services are considered alongside broader IT, cybersecurity, cloud, and support needs so infrastructure decisions support the wider environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Common questions about network services</h2>
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
            <h2 className="display-md">Build a more reliable network foundation</h2>
            <p>
              Talk to GulfStream about your current network environment, performance concerns, and the improvements your business needs to support stable operations.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book a Network Consultation
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

export default NetworkingInfrastructureContent;
