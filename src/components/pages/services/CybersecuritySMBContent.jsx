'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'What does SMB cybersecurity include?',
    answer: 'It usually includes endpoint protection, identity controls, email security, patching, access review, secure configuration, and practical guidance for staff and business processes.',
  },
  {
    question: 'How do you keep cybersecurity practical for a smaller business?',
    answer: 'We focus on the highest-value controls first: identity protection, email security, patching, endpoint protection, and consistent operational practices that reduce business risk without unnecessary complexity.',
  },
  {
    question: 'Can GulfStream help with an existing environment?',
    answer: 'Yes. We can review the current environment, identify the biggest risks, and recommend a measured plan that fits your current systems and internal support model.',
  },
  {
    question: 'Do you support MFA and identity controls?',
    answer: 'Yes. Identity protection and access controls are a core part of a practical security strategy for business systems, especially for email, cloud services, and internal applications.',
  },
  {
    question: 'Is this only for large enterprises?',
    answer: 'No. Smaller businesses are often exposed because they do not have the same internal security depth. A practical baseline can significantly reduce risk and improve resilience.',
  },
];

const securityChallenges = [
  {
    icon: '📧',
    title: 'Credential & Phishing Risk',
    description:
      'Email-based attacks and weak login practices remain some of the most common ways business systems are compromised.',
  },
  {
    icon: '🧩',
    title: 'Unpatched Systems',
    description:
      'Outdated software and inconsistent updates create easy entry points for known vulnerabilities and malware activity.',
  },
  {
    icon: '🔑',
    title: 'Weak Identity Controls',
    description:
      'Without strong identity protections, user accounts, cloud services, and internal systems may be exposed more than they should be.',
  },
];

const securityServices = [
  {
    icon: '🛡️',
    title: 'Security Baseline Assessment',
    description:
      'Review the current environment, identify risk areas, and define the most practical controls needed for a more resilient business setup.',
  },
  {
    icon: '💻',
    title: 'Endpoint Security',
    description:
      'Protect business devices with guidance and controls that reduce malware exposure, suspicious activity, and common attack paths.',
  },
  {
    icon: '✉️',
    title: 'Email & Phishing Protection',
    description:
      'Improve defenses against phishing attempts, malicious links, and compromised mail-based attacks that target employees.',
  },
  {
    icon: '🔐',
    title: 'Identity & MFA Controls',
    description:
      'Support stronger sign-in practices and access management for business systems and cloud productivity platforms.',
  },
  {
    icon: '🔄',
    title: 'Patch & Vulnerability Management',
    description:
      'Reduce known risk by addressing out-of-date systems, configuration weaknesses, and recurring security gaps.',
  },
  {
    icon: '🧠',
    title: 'Security Awareness & Policy Support',
    description:
      'Help staff understand safe behaviors and adopt practical security habits that reduce human-error-driven risk.',
  },
];

const securityDelivery = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Identify the current risk areas, environment complexity, and business priorities before recommending controls.',
  },
  {
    number: '02',
    title: 'Prioritize',
    description:
      'Focus on the controls that offer the strongest risk reduction for the business and the existing environment.',
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Apply practical controls around endpoints, identity, email, patching, and secure operational practices.',
  },
  {
    number: '04',
    title: 'Monitor & Improve',
    description:
      'Review ongoing configuration health, user behaviors, and security posture so the baseline becomes stronger over time.',
  },
];

const securityOutcomes = [
  {
    icon: '🛡️',
    title: 'Stronger Risk Reduction',
    description:
      'Target the most common business exposures so the organization is less vulnerable to avoidable cyber events.',
  },
  {
    icon: '👥',
    title: 'More Confident Staff',
    description:
      'Improve user awareness and reduce risky behaviors that can undermine otherwise solid technology controls.',
  },
  {
    icon: '🔒',
    title: 'Better Operational Resilience',
    description:
      'Create a more stable security baseline that supports growth, remote work, and business continuity with less operational uncertainty.',
  },
];

const securityCoverage = [
  {
    icon: '💻',
    title: 'Endpoint Protection',
  },
  {
    icon: '✉️',
    title: 'Email Security',
  },
  {
    icon: '🔐',
    title: 'Identity & MFA',
  },
  {
    icon: '🔄',
    title: 'Patch Management',
  },
  {
    icon: '🚧',
    title: 'Firewall Controls',
  },
  {
    icon: '🔍',
    title: 'Vulnerability Review',
  },
];

const securityUseCases = [
  {
    icon: '🏢',
    title: 'Growing SMBs',
    description:
      'Businesses with limited internal security resources often need a practical baseline to strengthen protection without building a large security function.',
  },
  {
    icon: '📍',
    title: 'Organizations Using Cloud Services',
    description:
      'Cloud productivity and SaaS environments require secure identity and access controls to reduce exposure across employee and system access.',
  },
  {
    icon: '🧭',
    title: 'Businesses Preparing for Growth',
    description:
      'As staff and systems expand, foundational security controls become even more important to maintain consistency and reduce operational risk.',
  },
];

const CybersecuritySMBContent = () => {
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
            <span>Cybersecurity for SMB</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">Cybersecurity Services</span> for Small & Medium Businesses
          </h1>

          <p>
            GulfStream helps growing organizations build practical cyber protection around their systems, users, devices, and business operations without creating unnecessary complexity.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Security Review
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
            <div className="badge badge-primary">⚠️ Why security matters</div>
            <h2 className="display-md">Cyber risk affects businesses of every size</h2>
            <p>
              Many breaches begin with common gaps such as poor identity controls, unpatched systems, weak endpoint protection, or inconsistent user awareness.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityChallenges.map((item) => (
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
            <div className="badge badge-accent">🔐 Security services</div>
            <h2 className="display-md">Practical controls for a stronger business baseline</h2>
            <p>
              Security should be built around priorities, risk exposure, and the way the business works rather than an overly complicated model that is difficult to operate.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityServices.map((item) => (
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
            <h2 className="display-md">A focused approach to cyber improvements</h2>
          </div>

          <div className="grid-4 reveal reveal-stagger">
            {securityDelivery.map((item) => (
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
            <h2 className="display-md">Reduce risk while supporting business growth</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityOutcomes.map((item) => (
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
            <div className="badge badge-primary">🧩 Supported areas</div>
            <h2 className="display-md">Core control areas we commonly address</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityCoverage.map((item) => (
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
            <h2 className="display-md">Best suited to growing businesses without a dedicated security team</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityUseCases.map((item) => (
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
            <h2 className="display-md">Security guidance that matches business realities</h2>
            <p>
              Our approach focuses on practical, business-minded controls that improve resilience without creating unnecessary operational burden or complexity.
            </p>
          </div>

          <div className="grid-2 reveal reveal-stagger">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🎯</div>
                <div className="card-title-row">
                  <h3>Focused on the highest-value controls</h3>
                </div>
              </div>
              <p className="text-muted">
                We prioritize the measures that most reduce risk in a real business environment rather than chasing complexity for its own sake.
              </p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <div className="card-title-row">
                  <h3>Aligned with wider IT operations</h3>
                </div>
              </div>
              <p className="text-muted">
                Security is considered alongside infrastructure, user support, backup, and broader technology operations so the controls remain workable and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Common questions about SMB cybersecurity</h2>
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
            <h2 className="display-md">Strengthen your business security baseline</h2>
            <p>
              Talk to GulfStream about your current security posture, your key exposures, and the practical steps that will improve protection with the least operational friction.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book a Security Consultation
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

export default CybersecuritySMBContent;
