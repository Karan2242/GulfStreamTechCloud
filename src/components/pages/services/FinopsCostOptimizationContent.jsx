'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const FinopsCostOptimizationContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>FinOps &amp; Cost Optimization</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>📊 FinOps &amp; Cost Optimization</div>
          <h1 className="display-lg">Cloud FinOps &amp; Cost Optimization<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technology applies the FinOps framework to give enterprises in Saudi Arabia complete visibility into cloud spend across AWS, Azure, and multi-cloud — eliminating waste, rightsizing infrastructure, and building a culture of cloud financial accountability in Riyadh, Jeddah, and Dammam with an average 32% cost reduction.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Get a Free Cost Analysis</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to a FinOps Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">32%</span>
                <span className="hero-quick-stat-label">Avg Savings</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">90 Day</span>
                <span className="hero-quick-stat-label">Time to Value</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">3x</span>
                <span className="hero-quick-stat-label">ROI on RIs</span>
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
              <div className="card-header"><div className="icon-box">📊</div><h3>Real-Time Cost Dashboards</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Live cloud spend visibility across all accounts, services, and regions with anomaly detection, budget alerts, and executive-level reporting.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">💰</div><h3>Cost Optimization Engine</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Continuous rightsizing, RI/SP purchasing, Spot strategies, and idle resource cleanup — engineered for ongoing savings, not one-time fixes.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🏷️</div><h3>Tagging &amp; Chargeback</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Enterprise tagging governance with automated enforcement, showback/chargeback reporting, and cost allocation to business units and teams.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Dedicated FinOps Engineers</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified FinOps practitioners assigned to your accounts — handling analysis, optimization execution, and monthly cost reviews on your behalf.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📈</div><h3>Forecasting &amp; Budgets</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>ML-powered spend forecasting, budget creation with automated threshold alerts, and variance analysis to eliminate end-of-month bill shock.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>SLA-Backed Savings</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Committed SLAs for cost reduction targets, optimization delivery timelines, and ongoing savings maintenance with monthly performance reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">💡 The Problem</div>
            <h2 className="display-md">Why Cloud Costs Spiral Out of Control</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">🔍</div><h3>No Spend Visibility</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without proper tagging, cost allocation, and dashboards, business units have no idea how much they're spending — or why bills keep growing month over month.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">💤</div><h3>Idle &amp; Oversized Resources</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Dev/test instances left running overnight, oversized production databases, and forgotten snapshots silently consume 20–40% of typical cloud budgets.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📉</div><h3>No Reserved Instance Strategy</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Paying On-Demand for predictable workloads can cost 3x more than Reserved Instances or Savings Plans — savings most enterprises leave on the table.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🏷️</div><h3>Poor Tagging &amp; Attribution</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without consistent tagging, chargeback to business units is impossible, eliminating accountability and enabling continued unchecked spending.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔮</div><h3>No Forecasting or Budgets</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cloud spend projections are guesswork. Budget alerts are set too high or missing entirely, leading to end-of-month bill shock.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🏗️</div><h3>Architecture Inefficiencies</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Legacy lift-and-shift architectures not optimized for the cloud consume far more resources than cloud-native equivalents designed for elasticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINOPS FRAMEWORK */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">✅ Our FinOps Approach</div>
            <h2 className="display-md">The GulfStream FinOps Framework</h2>
            <p>We apply the FinOps Foundation's three-phase methodology — Inform, Optimize, Operate — to drive continuous, sustainable cloud cost reduction.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">📊</div><h3>Phase 1: Inform</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We establish full visibility through tagging governance, cost dashboards, showback/chargeback reporting, and baseline spend analysis across all your cloud accounts and services.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚡</div><h3>Phase 2: Optimize</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We execute rightsizing, Reserved Instance and Savings Plan purchasing, Spot/Preemptible strategies, and architectural optimization to eliminate waste and reduce costs.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">🔄</div><h3>Phase 3: Operate</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We embed FinOps into your operating model — monthly cost reviews, anomaly detection, budget alerts, and a governance framework that keeps costs under control as you scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🔧 What We Deliver</div>
            <h2 className="display-md">FinOps Optimization Services</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Cost Visibility</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Real-time spend dashboards</li>
                <li>Multi-account cost aggregation</li>
                <li>Service-level cost breakdown</li>
                <li>Anomaly detection &amp; alerts</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Rightsizing</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>EC2 / VM rightsizing analysis</li>
                <li>Database instance optimization</li>
                <li>Storage tier optimization</li>
                <li>Idle resource termination</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Commitment Planning</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Reserved Instance strategy</li>
                <li>Savings Plans purchasing</li>
                <li>Spot/Preemptible VM usage</li>
                <li>Commitment utilization monitoring</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Governance</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Tagging policy enforcement</li>
                <li>Chargeback reporting</li>
                <li>Budget creation &amp; tracking</li>
                <li>FinOps KPI reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">FinOps Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">32%</span>
              <div className="metric-label">Average Cost Reduction</div>
              <div className="metric-sub">Within 90 days of engagement</div>
            </div>
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Cloud Spend Visibility</div>
              <div className="metric-sub">Tagged, attributed, allocated</div>
            </div>
            <div className="metric-item"><span className="metric-value">3x</span>
              <div className="metric-label">ROI on Reserved Instances</div>
              <div className="metric-sub">vs On-Demand pricing</div>
            </div>
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Budget Surprises</div>
              <div className="metric-sub">Anomaly &amp; overspend alerts</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">FinOps Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💸 Multi-Cloud Cost Reduction</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Unified cost optimization across AWS, Azure, Google Cloud, and Oracle Cloud accounts — rightsizing, RI/SP purchasing, Spot strategies, and idle resource cleanup for enterprises spending $50K+ monthly on cloud.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📋 Budget Control &amp; Forecasting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>ML-powered spend forecasting, automated budget alerts, and variance analysis with monthly executive reporting — eliminating bill shock for Saudi enterprises during scaling phases.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏷️ Chargeback &amp; Cost Allocation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Enterprise tagging governance, automated enforcement, and showback/chargeback reporting — enabling business unit accountability and informed cost decisions across your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏢 Industries</div>
            <h2 className="display-md">Industries We Optimize</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Banking &amp; Finance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>FinOps for banking platforms with multi-account cost allocation, regulatory workload optimization, and chargeback reporting for Saudi financial institutions.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Cost optimization for healthcare cloud infrastructure with HIPAA-aligned tagging, data storage tier optimization, and seasonal workload scaling.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 E-Commerce &amp; Retail</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Elastic cloud cost management for e-commerce — peak-season Spot strategies, auto-scaling optimization, and CDN cost reduction for Saudi retail platforms.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Cloud cost governance for government agencies with budget compliance, procurement optimization, and transparent reporting for Vision 2030 digital programs.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 SaaS &amp; Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Unit economics optimization for SaaS companies — COGS reduction, per-customer cost attribution, and Kubernetes cost allocation for multi-tenant platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">FinOps Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Cost Explorer</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Spend Analysis</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Cost Mgmt</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Cost &amp; Budgets</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>CloudHealth</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Multi-Cloud FinOps</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Kubecost</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>K8s Cost Allocation</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Budgets</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Budget Alerts</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Power BI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Executive Reporting</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Infrastructure as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Spot.io</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Spot Optimization</p>
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
                <tr><td>Certified FinOps Practitioners</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Multi-Cloud Optimization</td><td className="highlight-col">✅</td><td>⚠️</td><td>❌</td></tr>
                <tr><td>RI/SP Purchasing Strategy</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Continuous Cost Monitoring</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>SLA-Backed Savings</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Executive Reporting</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOCATION SEO */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Cloud FinOps Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud FinOps partner based in Saudi Arabia, GulfStream Technology delivers end-to-end cost optimization services for enterprises in Riyadh, Jeddah, and Dammam. Our certified FinOps practitioners combine deep expertise in AWS, Azure, Google Cloud, and Oracle Cloud cost management with an understanding of Saudi business requirements and cloud spending patterns.</p>
            <p style={{ marginTop: '16px' }}>Our FinOps services integrate with our <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>cloud managed services</Link> for ongoing operational savings, <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cloud billing management</Link> for granular cost tracking, <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud services</Link> for platform-specific optimization.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is FinOps?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>FinOps (Cloud Financial Operations) is a framework with three phases — Inform, Optimize, Operate — that brings financial accountability to cloud spending through visibility, optimization, and continuous governance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How quickly can you reduce our cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Most enterprises see 20-35% cost reduction within the first 90 days through rightsizing, idle resource cleanup, and commitment-based purchasing. Ongoing optimization maintains and increases savings.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What ROI can we expect from FinOps?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Our clients typically see 3x ROI on Reserved Instance investments and 32% overall cost reduction. The free cost analysis provides a detailed savings estimate for your specific environment.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much does FinOps cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>FinOps engagement costs depend on your cloud estate size and complexity. GulfStream offers a free cost analysis to identify savings potential before any commitment. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Get a free analysis</Link>.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you support multi-cloud FinOps?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We optimize costs across AWS, Azure, and multi-cloud environments using tools like CloudHealth, native cost management services, and custom dashboards for unified visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Discover Your Cloud Cost Savings</h2>
            <p>Get a complimentary cloud cost analysis. We'll identify exactly where your money is going and what you can save — with a detailed savings roadmap at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free cost analysis spots available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Get a Free Cost Analysis</Link>
              <Link href="/pricing" className="btn-white-outline">💰 View Pricing Plans</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinopsCostOptimizationContent;
