'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CloudBillingManagementContent = () => {
  useReveal();

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
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>24/7 Cost Monitoring</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Real-time monitoring of cloud spend with automated anomaly alerts and budget threshold notifications across all accounts and providers.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">💰</div><h3>Cost Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Proactive identification of billing waste, unused resources, and optimization opportunities integrated directly into your billing workflows.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔒</div><h3>Security Compliance</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Billing data governance aligned with NCA ECC and ISO 27001, ensuring sensitive financial data is properly managed and auditable.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Dedicated Cloud Engineers</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified cloud billing specialists assigned to your account who understand your architecture and financial requirements.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📈</div><h3>Real-Time Dashboards</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Executive-ready dashboards with drill-down cost views, trend analysis, forecasts, and anomaly reports — accessible to all stakeholders.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>SLA-Backed Support</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Committed SLAs for billing report delivery, anomaly response times, and forecast accuracy — not generic best-effort promises.</p>
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
            <div className="card">
              <div className="card-header"><div className="icon-box">😱</div><h3>End-of-Month Bill Shock</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cloud bills arrive at month-end with no prior warning. Unexpected spikes from new workloads, data transfer, or licensing fees catch finance teams completely off guard.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🏷️</div><h3>No Cost Attribution</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>When every team shares a single cloud account, or resources aren't tagged, attributing cloud costs to business units, projects, or products becomes effectively impossible.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>Complex Multi-Account Bills</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Enterprises with dozens of AWS accounts or Azure subscriptions receive fragmented, confusing billing data that requires significant manual processing and reconciliation.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔮</div><h3>No Forecasting Capability</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without historical trend analysis and predictive modeling, finance teams cannot accurately budget for cloud spend, leading to repeated budget overruns.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🤝</div><h3>Finance-Engineering Disconnect</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Finance teams lack cloud context; engineering teams lack billing visibility. Neither side has the full picture needed to make informed cost decisions.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🗂️</div><h3>Marketplace &amp; License Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>AWS Marketplace and Azure Marketplace purchases, BYOL licensing, and support tiers add layers of billing complexity that require specialist knowledge to interpret.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">✅ Our Solution</div>
            <h2 className="display-md">Complete Cloud Billing Management</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Unified Billing Dashboard</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We aggregate AWS, Azure, Oracle, and Google Cloud costs into a single real-time dashboard that gives every stakeholder appropriate visibility.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">📋</div><h3>Chargeback &amp; Showback</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We implement tag-based chargeback and showback reporting so finance teams can accurately allocate cloud costs to business units, projects, and products.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">🚨</div><h3>Anomaly Detection &amp; Alerts</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Real-time spend anomaly detection and budget threshold alerts ensure you're notified of unexpected cost spikes before they reach your monthly bill.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Spend Forecasting</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Using historical trends, growth projections, and workload modeling, we provide accurate cloud spend forecasts that enable confident financial planning.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">🤝</div><h3>Executive Reporting</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Monthly executive billing reports — cloud ROI, cost trends, savings achieved, and forecasts — designed for C-suite and board presentations.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">🧮</div><h3>Invoice Validation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We validate every cloud invoice against actual usage, identify discrepancies, and manage cloud provider credit and refund processes on your behalf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES / METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Billing Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📊 Multi-Account Cost Tracking</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Consolidate billing data across dozens of AWS accounts, Azure subscriptions, and multi-cloud environments into unified cost views with real-time tracking.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📋 Finance Reporting &amp; Compliance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Automated monthly executive reports, C-suite presentations, and audit-ready billing documentation aligned with Saudi regulatory requirements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🔮 Budget Forecasting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Predictive spend modeling using historical trends, seasonality, and growth patterns — enabling confident cloud budgeting for enterprises in Riyadh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏢 Industries</div>
            <h2 className="display-md">Industries We Serve</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Banking &amp; Finance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>SAMA-compliant cloud billing with department-level chargeback, regulatory audit trails, and granular cost reporting for financial institutions in Riyadh.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>HIPAA-aligned billing management with cost tracking per department, facility, or application for healthcare providers across Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 E-Commerce &amp; Retail</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Seasonal spend forecasting, campaign cost attribution, and real-time billing dashboards for retail enterprises scaling across the Middle East.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>NCA ECC-compliant billing governance, procurement-aligned reporting, and budget accountability for Vision 2030 digital transformation projects.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 SaaS &amp; Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Per-customer cost attribution, unit economics tracking, and COGS-aligned cloud billing for SaaS companies growing in the Saudi market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Billing Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Cost Explorer</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Spend Analytics</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Cost Management</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Budget &amp; Alerts</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>CloudHealth</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Multi-Cloud Billing</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Kubecost</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>K8s Cost Allocation</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Budgets</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Threshold Alerts</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Power BI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Executive Dashboards</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Tag Governance</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Custom APIs</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Billing Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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

      {/* LOCATION SEO */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Cloud Billing Management in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud billing management provider based in Saudi Arabia, GulfStream Technologies delivers specialized cost visibility and financial governance for enterprises in Riyadh, Jeddah, and Dammam. Our local team understands the unique billing complexities of multi-cloud environments in the Middle East — from currency and tax considerations to regulatory reporting requirements.</p>
            <p style={{ marginTop: '16px' }}>Our billing management services integrate seamlessly with our <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link> and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link>, providing a complete financial operations framework for your cloud environment. For platform-specific billing, see our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud services</Link>.</p>
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
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is cloud billing management?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Cloud billing management is the practice of tracking, analyzing, and optimizing cloud spending across providers like AWS, Azure, Oracle, and Google Cloud. It includes real-time dashboards, chargeback reporting, anomaly detection, spend forecasting, and invoice validation.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you reduce cloud billing costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We reduce cloud billing costs through tag-based cost attribution, anomaly detection, spend forecasting, invoice validation, and integration with FinOps practices. Most enterprises see full cost visibility within 30 days.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you manage billing across multiple cloud providers?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. GulfStream Technologies provides unified billing management across AWS, Azure, Oracle Cloud, and Google Cloud — aggregating costs into a single dashboard with consistent chargeback and showback reporting.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much does cloud billing management cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs depend on the number of cloud accounts, providers, and complexity. GulfStream offers flexible pricing from basic billing dashboards to fully managed billing operations. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free audit</Link> for a tailored quote.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How quickly can you set up billing dashboards?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We typically deploy unified billing dashboards within 2-4 weeks, including tag governance, cost allocation rules, budget alerts, and executive reporting — with full chargeback capability within 30 days.</p>
            </div>
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
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudBillingManagementContent;
