'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'What is the difference between backup and disaster recovery?',
    answer: 'Backup protects data so it can be restored. Disaster recovery defines how critical systems and operations are recovered after disruption so the business can continue functioning.',
  },
  {
    question: 'When does a business need backup and disaster recovery planning?',
    answer: 'It is usually needed when data is business-critical, downtime is expensive, the environment is growing, or there is no clear recovery process for outages or incidents.',
  },
  {
    question: 'Do you support cloud and on-premises backup strategies?',
    answer: 'Yes. We can design solutions that fit mixed environments and align with business priorities, retention requirements, and recovery objectives.',
  },
  {
    question: 'What are RPO and RTO?',
    answer: 'RPO defines how much data can be lost before recovery is unacceptable, and RTO defines how quickly systems and services need to be restored after disruption.',
  },
  {
    question: 'How often should disaster recovery be tested?',
    answer: 'Testing frequency depends on the environment and business risk, but regular validation is important to confirm backup integrity, recovery sequencing, and operational readiness.',
  },
];

const backupChallenges = [
  {
    icon: '📦',
    title: 'Unreliable Backups',
    description:
      'If backup jobs are incomplete, poorly monitored, or not aligned to business priorities, recoverability becomes uncertain when it matters most.',
  },
  {
    icon: '⏱️',
    title: 'No Clear Recovery Plan',
    description:
      'Without defined recovery steps, teams waste time during disruption and may not restore the right systems in the correct order.',
  },
  {
    icon: '🚨',
    title: 'High Downtime Risk',
    description:
      'When critical data or systems are not protected properly, downtime can affect operations, revenue, trust, and service continuity.',
  },
];

const backupServices = [
  {
    icon: '🗂️',
    title: 'Backup Strategy Review',
    description:
      'Assess the systems that matter most, define retention needs, and identify the right backup model for your operating environment.',
  },
  {
    icon: '📦',
    title: 'Data Protection Planning',
    description:
      'Align backup coverage to business-critical workloads, files, systems, and recovery expectations so protection is practical and consistent.',
  },
  {
    icon: '📏',
    title: 'RPO & RTO Alignment',
    description:
      'Define acceptable recovery windows and data-loss thresholds so the solution supports business continuity rather than just technical storage.',
  },
  {
    icon: '🌐',
    title: 'Cloud & On-Premises Recovery Options',
    description:
      'Support both cloud-based and on-premises backup models depending on performance, cost, and operational requirements.',
  },
  {
    icon: '🧪',
    title: 'Recovery Testing & Validation',
    description:
      'Validate restore processes, identify gaps, and help teams become more confident in actual recovery readiness.',
  },
  {
    icon: '📊',
    title: 'Backup Monitoring & Improvement',
    description:
      'Review health, completion status, and operational issues to reduce silent failures and improve resilience over time.',
  },
];

const backupDelivery = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Review critical systems, available backups, business impact, and current gaps in protection or recovery readiness.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Set out the recovery objectives, retention model, and protection priorities based on the risks the business can accept.',
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Deploy the backup and replication approach in a controlled manner and confirm systems are being protected as intended.',
  },
  {
    number: '04',
    title: 'Test & Improve',
    description:
      'Run validation checks to prove restore capability and adjust the process as business or system requirements evolve.',
  },
];

const backupOutcomes = [
  {
    icon: '🛡️',
    title: 'Better Data Protection',
    description:
      'Ensure critical business data is stored, retained, and recoverable according to business needs and risk tolerance.',
  },
  {
    icon: '🔄',
    title: 'Faster Recovery Readiness',
    description:
      'Improve the confidence and speed with which your organization can restore services after disruption or system failure.',
  },
  {
    icon: '📉',
    title: 'Lower Business Impact',
    description:
      'Reduce disruption by planning for recovery before an incident occurs, rather than trying to respond reactively during a crisis.',
  },
];

const backupCoverage = [
  {
    icon: '🗂️',
    title: 'On-Premises Backup',
  },
  {
    icon: '☁️',
    title: 'Cloud Backup',
  },
  {
    icon: '🔁',
    title: 'Replication',
  },
  {
    icon: '🧪',
    title: 'Recovery Testing',
  },
  {
    icon: '📏',
    title: 'RPO/RTO Planning',
  },
  {
    icon: '📊',
    title: 'Monitoring',
  },
];

const backupUseCases = [
  {
    icon: '🏢',
    title: 'Businesses with Critical Systems',
    description:
      'Organizations that rely on key applications or essential records need a structured approach to restore services reliably.',
  },
  {
    icon: '📍',
    title: 'Multi-Site Operations',
    description:
      'Distributed environments benefit from a recovery model that supports business continuity across different operating locations.',
  },
  {
    icon: '🧭',
    title: 'Organizations Modernizing IT',
    description:
      'Businesses updating software, infrastructure, or cloud environments often need a clearer backup and recovery plan before changes are made.',
  },
];

const BackupDisasterRecoveryContent = () => {
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
            <span>Backup & Disaster Recovery</span>
          </div>

          <h1 className="display-lg">
            <span className="text-gradient">Backup & Disaster Recovery Services</span> for Business Continuity
          </h1>

          <p>
            GulfStream helps businesses protect critical data, define realistic recovery objectives, and build continuity processes that work when operational disruption occurs.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request a Recovery Review
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
            <h2 className="display-md">Backup and recovery are business continuity decisions</h2>
            <p>
              Without a reliable protection model and recovery plan, businesses can lose access to essential systems, records, and day-to-day services far longer than necessary.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {backupChallenges.map((item) => (
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
            <div className="badge badge-accent">💾 Recovery services</div>
            <h2 className="display-md">What backup and disaster recovery services include</h2>
            <p>
              The right recovery strategy is not only about storage. It is about defining what matters most, how quickly it must be restored, and how the business will operate during disruption.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {backupServices.map((item) => (
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
            <h2 className="display-md">A structured continuity and recovery model</h2>
          </div>

          <div className="grid-4 reveal reveal-stagger">
            {backupDelivery.map((item) => (
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
            <h2 className="display-md">Protect the systems and data your business depends on</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {backupOutcomes.map((item) => (
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
            <h2 className="display-md">Protection models commonly supported</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {backupCoverage.map((item) => (
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
            <h2 className="display-md">Most useful when downtime or data loss would matter</h2>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {backupUseCases.map((item) => (
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
            <h2 className="display-md">Recovery planning backed by operational understanding</h2>
            <p>
              We help businesses define backup and continuity models around real operational needs, rather than generic technical templates that do not fit the way the business actually runs.
            </p>
          </div>

          <div className="grid-2 reveal reveal-stagger">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔍</div>
                <div className="card-title-row">
                  <h3>Business-impact driven</h3>
                </div>
              </div>
              <p className="text-muted">
                We assess which systems matter most, what recovery time is acceptable, and what data protection decisions best support operational continuity.
              </p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🧭</div>
                <div className="card-title-row">
                  <h3>Recovery plans you can actually use</h3>
                </div>
              </div>
              <p className="text-muted">
                We help turn technical protection into a practical, understandable continuity model that teams can rely on when disruption occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Common questions about backup and recovery</h2>
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
            <h2 className="display-md">Assess your backup and recovery readiness</h2>
            <p>
              Talk to GulfStream about your critical systems, protection gaps, and the business continuity priorities your organization needs to manage with more confidence.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book a Recovery Consultation
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

export default BackupDisasterRecoveryContent;
