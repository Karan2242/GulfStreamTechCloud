'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CloudMigrationContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const migrationFaqs = [
    {
      question: 'How long does a cloud migration take?',
      answer: 'Migration timelines vary, but simple cloud moves can complete in 4-8 weeks and enterprise modernization projects typically take 3-6 months.',
    },
    {
      question: 'Is downtime required during cloud migration?',
      answer: 'We design migrations to avoid or minimize downtime using phased cutovers, replication, and blue-green deployment patterns.',
    },
    {
      question: 'How much does cloud migration cost in Saudi Arabia?',
      answer: 'Costs depend on workload complexity and scope. We provide a free migration assessment with a tailored estimate.',
    },
    {
      question: 'Do you support AWS, Azure, Google Cloud, and Oracle Cloud migrations?',
      answer: 'Yes. We migrate workloads to AWS, Azure, Google Cloud, and Oracle Cloud, including multi-cloud and hybrid transition strategies.',
    },
    {
      question: 'Do you provide post-migration support?',
      answer: 'Yes. Every migration includes post-migration optimization, monitoring, and transition support to our managed cloud operations team.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Cloud Migration</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🚀 Cloud Migration &amp; Modernization</div>
          <h1 className="display-lg">Cloud Migration &amp; Modernization<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies designs and executes cloud migration projects in Saudi Arabia with zero business disruption — moving your workloads to AWS, Azure, or multi-cloud using our proven 6Rs methodology, wave-based planning, and post-migration optimization for enterprises in Riyadh, Jeddah, and Dammam.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Migration Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">35%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">Zero</span>
                <span className="hero-quick-stat-label">Downtime</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">3 Month</span>
                <span className="hero-quick-stat-label">Time to Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 What You Get</div>
            <h2 className="display-md">What You Get with GulfStream</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🧩</div>
                <div className="card-title-row"><h3>Migration Strategy</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>End-to-end migration strategy with workload assessment, dependency mapping, and wave-based execution planning.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🚀</div>
                <div className="card-title-row"><h3>Zero Downtime</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Seamless migration using replication, phased cutovers, and rollback strategies to ensure zero business disruption.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row"><h3>Security Compliance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Migration aligned with NCA ECC, ISO standards, and data residency requirements with secure architecture design.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📦</div>
                <div className="card-title-row"><h3>Modernization</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Transform legacy applications into cloud-native architectures using containers, microservices, and managed services.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row"><h3>Cost Optimization</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>FinOps-driven migration with right-sizing and cost controls to reduce cloud spend from day one.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Post-Migration Support</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Continuous monitoring, optimization, and 24/7 support to ensure performance, stability, and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Migration Risks</div>
            <h2 className="display-md">Why Cloud Migrations Fail</h2>
            <p>Cloud migrations are complex and high-stakes. Without the right expertise and methodology, they commonly result in downtime, cost overruns, and security breaches.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💥</div>
                <div className="card-title-row"><h3>Unplanned Downtime</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Rushed migrations without proper runbooks and rollback plans lead to critical system outages that impact revenue and customer trust.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Cost Overruns</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Lift-and-shift migrations with no cloud optimization result in cloud bills that exceed on-premises costs — defeating the business case.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔓</div>
                <div className="card-title-row"><h3>Security Gaps</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Replicating insecure on-premises configurations to the cloud creates serious security vulnerabilities in your new environment.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Dependency Blind Spots</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Undiscovered application dependencies cause cascading failures during cutovers, turning planned maintenance into extended outages.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <div className="card-title-row"><h3>Compliance Neglect</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Data sovereignty, NCA compliance, and Saudi regulatory requirements must be maintained in the cloud — and require specialist design.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🗂️</div>
                <div className="card-title-row"><h3>No Post-Migration Optimization</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Migration teams move workloads and disappear. Without optimization, costs creep up and performance issues accumulate over time.</p>
            </div>
          </div>
        </div>
      </section>



      {/* METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Migration Results</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Unplanned Downtime Events</div>
              <div className="metric-sub">Across all migration projects</div>
            </div>
            <div className="metric-item"><span className="metric-value">40%</span>
              <div className="metric-label">Avg. Performance Improvement</div>
              <div className="metric-sub">Post-migration vs on-premises</div>
            </div>
            <div className="metric-item"><span className="metric-value">35%</span>
              <div className="metric-label">Avg. Infrastructure Cost Reduction</div>
              <div className="metric-sub">vs legacy on-premises costs</div>
            </div>
            <div className="metric-item"><span className="metric-value">3mo</span>
              <div className="metric-label">Avg. Time to Value</div>
              <div className="metric-sub">From discovery to go-live</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Migration Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏢</div>
                <div className="card-title-row"><h3>Data Center Exit</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Complete datacenter decommissioning with full workload migration to AWS, Azure, Google Cloud, or Oracle Cloud — eliminating colocation costs, hardware refresh cycles, and physical infrastructure management for Saudi enterprises.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Legacy Modernization</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Transform legacy monolithic applications into cloud-native microservices, containerized deployments, and serverless architectures for improved agility and reduced operational costs.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">☁️</div>
                <div className="card-title-row"><h3>Hybrid Cloud Adoption</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Strategic hybrid cloud architectures connecting on-premises infrastructure with AWS, Azure, or multi-cloud environments using ExpressRoute, Direct Connect, and VPN for enterprises in Riyadh.</p>
            </div>
          </div>
        </div>
      </section>

    
      {/* COMPARISON */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚖️ Compare</div>
            <h2 className="display-md">Why GulfStream vs Others</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight-col">GulfStream</th>
                  <th>Freelancers</th>
                  <th>In-House</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Proven 6Rs Methodology</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Zero-Downtime Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Certified Migration Architects</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Post-Migration Optimization</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>SLA Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>24/7 Managed Services</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

     

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {migrationFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`migration-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`migration-faq-answer-${index}`}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" >
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Ready to Migrate to the Cloud?</h2>
            <p>Book a free Migration Assessment and receive a detailed cloud readiness report, target architecture recommendations, and a migration roadmap — at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free migration assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">🚀 Book Free Migration Assessment</Link>
              <Link href="/book-a-review" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudMigrationContent;
