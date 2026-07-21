'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const FinopsCostOptimizationContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const finopsFaqs = [
    {
      question: 'What is FinOps?',
      answer: 'FinOps is a cloud financial operations framework that brings visibility, accountability, and optimization to cloud spend.',
    },
    {
      question: 'How much can you reduce cloud costs?',
      answer: 'Most clients save 25-35% through rightsizing, reserved capacity, and continuous cost governance.',
    },
    {
      question: 'How quickly can FinOps deliver savings?',
      answer: 'You can expect measurable savings within 60-90 days, with quick wins from waste elimination and billing governance.',
    },
    {
      question: 'Do you support multi-cloud FinOps?',
      answer: 'Yes. We provide FinOps across AWS, Azure, Google Cloud, Oracle Cloud, and multi-cloud environments.',
    },
    {
      question: 'Why choose GulfStream for cloud cost optimization?',
      answer: 'We combine FinOps methodology with local Saudi expertise and managed services to deliver sustainable savings and transparency.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>FinOps &amp; Cost Optimization</span>
          </div>

          <h1 className="display-lg">Cloud FinOps &amp; Cost Optimization <span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies applies the FinOps framework to give enterprises in Saudi Arabia complete visibility into cloud spend across AWS, Microsoft Cloud, Google Cloud & Oracle Cloud — eliminating waste, rightsizing infrastructure, and building a culture of cloud financial accountability in Saudi Arabia with an average 32% cost reduction.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Get a Free Cost Analysis</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to a FinOps Expert</Link>
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



      {/* THE PROBLEM */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">💡 The Problem</div>
            <h2 className="display-md">Why Cloud Costs Spiral Out of Control</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔍</div>
                <div className="card-title-row"><h3>No Spend Visibility</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without proper tagging, cost allocation, and dashboards, business units have no idea how much they&apos;re spending — or why bills keep growing month over month.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💤</div>
                <div className="card-title-row"><h3>Idle &amp; Oversized Resources</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Dev/test instances left running overnight, oversized production databases, and forgotten snapshots silently consume 20–40% of typical cloud budgets.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📉</div>
                <div className="card-title-row"><h3>No Reserved Instance Strategy</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Paying On-Demand for predictable workloads can cost 3x more than Reserved Instances or Savings Plans — savings most enterprises leave on the table.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏷️</div>
                <div className="card-title-row"><h3>Poor Tagging &amp; Attribution</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without consistent tagging, chargeback to business units is impossible, eliminating accountability and enabling continued unchecked spending.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔮</div>
                <div className="card-title-row"><h3>No Forecasting or Budgets</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud spend projections are guesswork. Budget alerts are set too high or missing entirely, leading to end-of-month bill shock.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏗️</div>
                <div className="card-title-row"><h3>Architecture Inefficiencies</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Legacy lift-and-shift architectures not optimized for the cloud consume far more resources than cloud-native equivalents designed for elasticity.</p>
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
                <div className="card-title-row"><h3>Real-Time Cost Dashboards</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Live cloud spend visibility across all accounts, services, and regions with anomaly detection, budget alerts, and executive-level reporting.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row"><h3>Cost Optimization Engine</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Continuous rightsizing, RI/SP purchasing, Spot strategies, and idle resource cleanup — engineered for ongoing savings, not one-time fixes.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏷️</div>
                <div className="card-title-row"><h3>Tagging &amp; Chargeback</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Enterprise tagging governance with automated enforcement, showback/chargeback reporting, and cost allocation to business units and teams.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row"><h3>Dedicated FinOps Engineers</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Certified FinOps practitioners assigned to your accounts — handling analysis, optimization execution, and monthly cost reviews on your behalf.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <div className="card-title-row"><h3>Forecasting &amp; Budgets</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>ML-powered spend forecasting, budget creation with automated threshold alerts, and variance analysis to eliminate end-of-month bill shock.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>SLA-Backed Savings</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Committed SLAs for cost reduction targets, optimization delivery timelines, and ongoing savings maintenance with monthly performance reporting.</p>
            </div>
          </div>
        </div>
      </section>



      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">FinOps Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Multi-Cloud Cost Reduction</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Unified cost optimization across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud accounts — rightsizing, RI/SP purchasing, Spot strategies, and idle resource cleanup for enterprises spending $50K+ monthly on cloud.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Budget Control &amp; Forecasting</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>ML-powered spend forecasting, automated budget alerts, and variance analysis with monthly executive reporting — eliminating bill shock for Saudi enterprises during scaling phases.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏷️</div>
                <div className="card-title-row"><h3>Chargeback &amp; Cost Allocation</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Enterprise tagging governance, automated enforcement, and showback/chargeback reporting — enabling business unit accountability and informed cost decisions across your organization.</p>
            </div>
          </div>
        </div>
      </section>





      {/* COMPARISON */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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



      {/* FAQ */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {finopsFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`finops-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`finops-faq-answer-${index}`}
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
            <h2 className="display-md">Discover Your Cloud Cost Savings</h2>
            <p>Get a complimentary cloud cost analysis. We&apos;ll identify exactly where your money is going and what you can save — with a detailed savings roadmap at no cost or commitment.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Get a Free Cost Analysis</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinopsCostOptimizationContent;
