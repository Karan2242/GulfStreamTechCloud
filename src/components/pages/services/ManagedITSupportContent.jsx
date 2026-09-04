'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { faqs } from './managedItSupportData';

const whyManagedITSupport = [
  {
    icon: '⚡',
    title: 'Faster Support',
    description:
      'Resolve day-to-day IT issues quickly with a defined support process and clearer ownership for user requests and incidents.',
  },
  {
    icon: '🛠️',
    title: 'Proactive Maintenance',
    description:
      'Reduce business disruption by staying ahead of updates, patching needs, system health issues, and recurring technical problems.',
  },
  {
    icon: '📊',
    title: 'Better IT Visibility',
    description:
      'Create clearer operational visibility across users, devices, systems, and support activity so business teams have more confidence in IT readiness.',
  },
  {
    icon: '📈',
    title: 'Scalable IT Operations',
    description:
      'Support business growth with a flexible model that scales alongside new users, devices, locations, and changing operational needs.',
  },
];

const managedSupportIncludes = [
  {
    icon: '🧑‍💻',
    title: 'IT Help Desk & User Support',
    description:
      'Support employees with day-to-day technical issues, access requests, software troubleshooting, and practical business-focused guidance.',
  },
  {
    icon: '💻',
    title: 'Endpoint Management',
    description:
      'Maintain oversight of desktops, laptops, mobile devices, and business endpoints to improve stability and consistency across the environment.',
  },
  {
    icon: '☁️',
    title: 'Microsoft 365 Support',
    description:
      'Assist with account access, Microsoft 365 configuration, productivity tools, and common user support needs across the business.',
  },
  {
    icon: '📡',
    title: 'Proactive IT Monitoring',
    description:
      'Monitor key systems and user environments for health issues so potential disruptions can be addressed before they affect operations.',
  },
  {
    icon: '🔄',
    title: 'Patch & Update Management',
    description:
      'Apply updates and maintain system hygiene as part of a structured approach to reduce risk and improve technology reliability.',
  },
  {
    icon: '👤',
    title: 'User & Device Onboarding',
    description:
      'Standardize onboarding for new employees, devices, and access requirements so teams can be productive from day one.',
  },
  {
    icon: '🩺',
    title: 'IT Health Checks',
    description:
      'Review the current environment to identify operational gaps, aging systems, and improvement opportunities before they become problems.',
  },
  {
    icon: '🚨',
    title: 'Incident Management',
    description:
      'Prioritize and coordinate issue resolution with a clearer process for triage, ownership, and communication during service disruption.',
  },
  {
    icon: '📘',
    title: 'IT Operations Guidance',
    description:
      'Provide practical recommendations on support processes, operational structure, and ongoing technology improvements for the business.',
  },
];

const supportModel = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Review the current environment, user needs, device estate, and support challenges to define the right managed support model.',
  },
  {
    number: '02',
    title: 'Monitor',
    description:
      'Track performance, health, and recurring issues across devices, user environments, and Microsoft 365 services.',
  },
  {
    number: '03',
    title: 'Resolve',
    description:
      'Address incidents, user requests, configuration issues, and operational problems through a structured support process.',
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'Use insights from support activity to strengthen IT operations, reduce recurring issues, and improve service reliability over time.',
  },
];

const outcomes = [
  {
    icon: '🧯',
    title: 'Reduce IT Disruption',
    description:
      'Keep daily business operations running smoothly by addressing recurring issues before they escalate into broader disruption.',
  },
  {
    icon: '👥',
    title: 'Improve Employee Productivity',
    description:
      'Give teams more reliable access to their tools, devices, and support so work can continue without unnecessary delays.',
  },
  {
    icon: '🛡️',
    title: 'Strengthen IT Hygiene',
    description:
      'Improve patching, access control, device consistency, and support processes to reduce preventable technical risk.',
  },
  {
    icon: '📈',
    title: 'Support Business Growth',
    description:
      'Provide a more scalable IT foundation that can support new users, locations, devices, and operational requirements as the business expands.',
  },
  {
    icon: '💰',
    title: 'Control IT Overhead',
    description:
      'Reduce the strain on internal teams by outsourcing or supplementing day-to-day support with a defined managed service model.',
  },
  {
    icon: '🔎',
    title: 'Improve Operational Visibility',
    description:
      'Gain better insight into support activity, system health, and recurring issues so technology decisions are more informed and proactive.',
  },
];

const idealCustomers = [
  {
    icon: '🏢',
    title: 'Small & Medium Businesses',
    description:
      'Support teams that need dependable IT operations without the cost and complexity of maintaining a large internal IT function.',
  },
  {
    icon: '📍',
    title: 'Multi-Location Businesses',
    description:
      'Standardize support processes and reduce operational inconsistency across offices, remote staff, and distributed teams.',
  },
  {
    icon: '💼',
    title: 'Hybrid Workforces',
    description:
      'Help employees stay productive with reliable access, user support, and device oversight across office and remote working environments.',
  },
  {
    icon: '🚀',
    title: 'Growing Companies',
    description:
      'Create a more structured IT foundation as the business adds users, departments, systems, and operational complexity.',
  },
];

const whyGulfStream = [
  {
    icon: '🇸🇦',
    title: 'Saudi & GCC Business Focus',
    description:
      'We support businesses operating in Saudi Arabia and the broader GCC with practical IT services aligned to local operational realities.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Microsoft Expertise',
    description:
      'Our managed IT support model is designed to work alongside cloud environments, Microsoft 365, and broader business technology platforms.',
  },
  {
    icon: '🛡️',
    title: 'Security-Aware Operations',
    description:
      'Support processes are built around operational stability, security awareness, and better governance over user access and system health.',
  },
  {
    icon: '🤝',
    title: 'Flexible Support Model',
    description:
      'Whether you need a full managed IT function or a stronger support layer for your current internal team, we can tailor the support structure to fit.',
  },
  {
    icon: '📋',
    title: 'Structured Support Process',
    description:
      'Clear ownership, issue triage, and escalation paths help businesses resolve service needs consistently and with less operational friction.',
  },
  {
    icon: '🧭',
    title: 'Business-Aligned IT Strategy',
    description:
      'We align day-to-day support with broader priorities so your IT environment supports business goals instead of slowing them down.',
  },
];

const ManagedITSupportContent = () => {
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
            <span>Managed IT Support</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">Managed IT Support Services in Saudi Arabia for Reliable Business Operations</span>
          </h1>

          <p>
            GulfStream provides proactive managed IT support for businesses that need dependable help desk services, endpoint management, Microsoft 365 support, monitoring, and faster issue resolution without the overhead of a large internal IT team.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Talk to an IT Specialist
            </Link>

            <Link href="/it-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why Managed IT Support</div>
            <h2 className="display-md">A more reliable way to manage day-to-day IT</h2>
            <p>
              Businesses depend on technology to keep teams productive, customers served, and operations running without friction. When day-to-day IT issues are left unmanaged, they can affect productivity, service quality, and operational continuity.
            </p>
          </div>

          <div className="grid-4 reveal reveal-stagger">
            {whyManagedITSupport.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Managed IT Services</div>
            <h2 className="display-md">What does managed IT support include?</h2>
            <p>
              Managed IT support gives businesses ongoing assistance, monitoring, maintenance, and operational oversight across users, devices, applications, and IT environments. It is designed to keep technology reliable while reducing disruption and internal overhead.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {managedSupportIncludes.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Business Outcomes</div>
            <h2 className="display-md">Turn IT support into a business enabler</h2>
            <p>
              Managed IT support should create business value beyond day-to-day troubleshooting. The right model strengthens reliability, improves operational consistency, and helps teams focus on business priorities.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {outcomes.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Who We Support</div>
            <h2 className="display-md">Managed IT support for growing businesses</h2>
            <p>
              We support organizations that need dependable technology operations without the overhead of a large internal IT function, while also helping teams that want to strengthen existing IT capabilities.
            </p>
          </div>

          <div className="grid-4 reveal reveal-stagger">
            {idealCustomers.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Why GulfStream Technology</div>
            <h2 className="display-md">More than a help desk</h2>
            <p>
              GulfStream Technology brings managed IT support together with broader capabilities across cloud, Microsoft technologies, infrastructure, and managed services, helping businesses align day-to-day support with wider technology strategy.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {whyGulfStream.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Frequently Asked Questions</div>
            <h2 className="display-md">Managed IT support questions</h2>
            <p>
              Answers to common questions businesses ask before strengthening or outsourcing their IT support model.
            </p>
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
                      <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
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
            <h2 className="display-md">Make your IT environment more reliable</h2>
            <p>
              Talk to our team about your current IT environment, support challenges, and the operational priorities your business needs to manage more effectively.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book an IT Consultation
              </Link>

              <Link href="/it-services" className="btn-white-outline">
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManagedITSupportContent;