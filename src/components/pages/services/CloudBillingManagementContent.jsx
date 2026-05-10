'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CloudBillingManagementContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const billingFaqs = [
    {
      question: 'What is cloud billing management?',
      answer: 'Cloud billing management tracks, analyzes, and optimizes cloud spend across providers so you can eliminate surprises and charge costs accurately.',
    },
    {
      question: 'Can you manage billing across multiple cloud providers?',
      answer: 'Yes. We unify billing for AWS, Azure, Google Cloud, and Oracle Cloud into a single view with consistent reporting.',
    },
    {
      question: 'How much does cloud billing management cost?',
      answer: 'Costs depend on the number of accounts and complexity. We offer flexible pricing with a free audit to estimate your needs.',
    },
    {
      question: 'How quickly can you set up billing dashboards?',
      answer: 'We typically deploy unified billing dashboards within 2-4 weeks, including budget alerts and cost allocation reports.',
    },
    {
      question: 'Why choose GulfStream for cloud billing management?',
      answer: 'We combine managed billing, FinOps controls, and local Saudi support to deliver accurate, audit-ready cloud spend visibility.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Cloud Billing Management</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🧾 Cloud Billing Management</div>
          <h1 className="display-lg">Cloud Billing Management<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers unified, transparent cloud billing management across AWS, Azure, Oracle, and Google Cloud — with real-time dashboards, chargeback reporting, anomaly detection, and executive-ready spend analytics that eliminate billing surprises for enterprises in Riyadh and the Middle East.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Get a Free Billing Audit</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">24/7</span>
                <span className="hero-quick-stat-label">Monitoring</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Uptime SLA</span>
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
    <div className="icon-box">📊</div>
    <div className="card-title-row"><h3>Unified Billing Dashboard</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Single real-time dashboard across AWS, Azure, Oracle, and Google Cloud with complete cost visibility and drill-down insights.</p>
</div>

<div className="card premium-card">
  <div className="card-header">
    <div className="icon-box">💰</div>
    <div className="card-title-row"><h3>Cost Allocation</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Tag-based cost allocation across teams, projects, and business units for accurate financial accountability and reporting.</p>
</div>

<div className="card premium-card">
  <div className="card-header">
    <div className="icon-box">🚨</div>
    <div className="card-title-row"><h3>Real-Time Alerts</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Instant alerts for unusual spend, budget breaches, and usage spikes — before they impact your monthly bill.</p>
</div>

<div className="card premium-card">
  <div className="card-header">
    <div className="icon-box">📈</div>
    <div className="card-title-row"><h3>Cost Optimization</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Identify unused resources, over-provisioning, and savings opportunities with continuous FinOps optimization recommendations.</p>
</div>

<div className="card premium-card">
  <div className="card-header">
    <div className="icon-box">🔮</div>
    <div className="card-title-row"><h3>Spend Forecasting</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Predict future cloud spend using historical trends and growth patterns with accurate budgeting and financial planning.</p>
</div>

<div className="card premium-card">
  <div className="card-header">
    <div className="icon-box">📋</div>
    <div className="card-title-row"><h3>Executive Reporting</h3></div>
  </div>
  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Audit-ready reports, ROI tracking, and invoice validation to ensure billing accuracy and executive-level visibility.</p>
</div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Challenges</div>
            <h2 className="display-md">Billing Challenges That Cost You Millions</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">😱</div>
                <div className="card-title-row"><h3>End-of-Month Bill Shock</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud bills arrive at month-end with no prior warning. Unexpected spikes from new workloads, data transfer, or licensing fees catch finance teams completely off guard.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏷️</div>
                <div className="card-title-row"><h3>No Cost Attribution</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>When every team shares a single cloud account, or resources aren't tagged, attributing cloud costs to business units, projects, or products becomes effectively impossible.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>Complex Multi-Account Bills</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Enterprises with dozens of AWS accounts or Azure subscriptions receive fragmented, confusing billing data that requires significant manual processing and reconciliation.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔮</div>
                <div className="card-title-row"><h3>No Forecasting Capability</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without historical trend analysis and predictive modeling, finance teams cannot accurately budget for cloud spend, leading to repeated budget overruns.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <div className="card-title-row"><h3>Finance-Engineering Disconnect</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Finance teams lack cloud context; engineering teams lack billing visibility. Neither side has the full picture needed to make informed cost decisions.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🗂️</div>
                <div className="card-title-row"><h3>Marketplace &amp; License Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>AWS Marketplace and Azure Marketplace purchases, BYOL licensing, and support tiers add layers of billing complexity that require specialist knowledge to interpret.</p>
            </div>
          </div>
        </div>
      </section>


      {/* OUTCOMES / METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📊 Results</div>
            <h2 className="display-md">Billing Management Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Cost Visibility Achieved</div>
              <div className="metric-sub">Every dollar tagged &amp; attributed</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;1hr</span>
              <div className="metric-label">Anomaly Alert Response</div>
              <div className="metric-sub">Real-time spend monitoring</div>
            </div>
            <div className="metric-item"><span className="metric-value">±5%</span>
              <div className="metric-label">Forecast Accuracy</div>
              <div className="metric-sub">Predictable cloud budgeting</div>
            </div>
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Billing Surprises</div>
              <div className="metric-sub">Proactive alert coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Billing Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>Multi-Account Cost Tracking</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Consolidate billing data across dozens of AWS accounts, Azure subscriptions, and multi-cloud environments into unified cost views with real-time tracking.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Finance Reporting &amp; Compliance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Automated monthly executive reports, C-suite presentations, and audit-ready billing documentation aligned with Saudi regulatory requirements.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔮</div>
                <div className="card-title-row"><h3>Budget Forecasting</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Predictive spend modeling using historical trends, seasonality, and growth patterns — enabling confident cloud budgeting for enterprises in Riyadh.</p>
            </div>
          </div>
        </div>
      </section>

     

 
      {/* COMPARISON */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚖️ Compare</div>
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
                <tr><td>24/7 Billing Monitoring</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Certified Cloud Engineers</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Multi-Cloud Billing</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Cost Optimization Built-In</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>SLA Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Executive Reporting</td><td className="highlight-col">✅</td><td>⚠️</td><td>⚠️</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {billingFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`billing-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`billing-faq-answer-${index}`}
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
      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Start Controlling Your Cloud Spend</h2>
            <p>Book a free billing audit and get a complete breakdown of your cloud spend with actionable attribution and savings opportunities — at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free billing audits available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Get a Free Billing Audit</Link>
              <Link href="/book-a-review" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudBillingManagementContent;
