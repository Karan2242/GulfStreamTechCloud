'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const GoogleCloudContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const gcpFaqs = [
    {
      question: 'What are Google Managed Cloud Services?',
      answer: 'Google Managed Cloud Services means outsourcing GCP operations, monitoring, security, and optimization to certified cloud professionals.',
    },
    {
      question: 'How much do Google Cloud services cost?',
      answer: 'Costs depend on your workload mix and project count. We provide flexible pricing and a free assessment for a custom estimate.',
    },
    {
      question: 'Do you manage GKE clusters and BigQuery optimization?',
      answer: 'Yes. We manage GKE cluster lifecycle and optimize BigQuery costs through reservations, query tuning, and data lifecycle policies.',
    },
    {
      question: 'Do you support multi-cloud environments with GCP?',
      answer: 'Yes. We integrate GCP into multi-cloud environments with consistent governance and centralized monitoring.',
    },
    {
      question: 'Why choose GulfStream for Google Cloud in Saudi Arabia?',
      answer: 'We combine GCP expertise with Saudi compliance knowledge and local support to deliver reliable analytics and cloud operations.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><span>Google Cloud</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Google Managed Cloud Services in Saudi Arabia</span></h1>
          <p>GulfStream Technologies is a certified managed cloud services provider for Google Cloud Platform (GCP) in Saudi Arabia. We deliver comprehensive GCP management — from GKE and BigQuery to Cloud Run and Security Command Center — with 24/7 cloud monitoring services, data analytics optimization, and FinOps consulting to cut costs by up to 28%.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free GCP Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <CloudSubNav />

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Google Cloud Challenges Enterprises Face</h2>
            <p>Managing Google Cloud at scale across Riyadh, Jeddah, and Dammam requires specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Billing Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>GCP&apos;s per-second billing, sustained use discounts, and committed use discounts create complex cost structures difficult to optimize without deep expertise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>IAM &amp; Security Gaps</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>GCP&apos;s organization-level IAM, service accounts, and VPC Service Controls require careful configuration to prevent data exposure and ensure NCA ECC compliance.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>Data Platform Scale</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>BigQuery, Dataflow, and Pub/Sub require specialized tuning for cost and performance at enterprise scale — generic management underperforms.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Kubernetes Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>GKE cluster management, Anthos multi-cloud, and service mesh configurations demand deep container orchestration expertise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row"><h3>GCP Talent Scarcity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Google Cloud certified engineers are among the hardest to find in Saudi Arabia, making in-house team building a major challenge.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👁️</div>
                <div className="card-title-row"><h3>Observability Gaps</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without proper Cloud Monitoring and Cloud Logging setup, teams miss critical performance issues and cost anomalies until they impact operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on Google Cloud</h2>
            <p>Full-stack GCP managed services covering every layer of your Google cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Compute Engine VMs</li><li>Google Kubernetes Engine (GKE)</li><li>Cloud Run</li><li>Cloud Functions</li><li>App Engine</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Data &amp; Analytics</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>BigQuery</li><li>Cloud SQL</li><li>Cloud Spanner</li><li>Dataflow</li><li>Pub/Sub</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>VPC Networks</li><li>Cloud Interconnect</li><li>Cloud Load Balancing</li><li>Cloud DNS</li><li>Cloud CDN</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Cloud IAM</li><li>Security Command Center</li><li>VPC Service Controls</li><li>Cloud KMS</li><li>Cloud Armor</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Cloud Storage</li><li>Persistent Disks</li><li>Filestore</li><li>Archive Storage</li><li>Transfer Service</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Billing Account Management</li><li>Committed Use Discounts</li><li>Sustained Use Discounts</li><li>Budget Alerts</li><li>Label-Based Cost Attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream Google Cloud Management Framework</h2>
            <p>Our proven methodology ensures rapid value delivery for GCP environments across the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We audit your GCP environment — architecture, organizational hierarchy, security posture, data platform efficiency, and cost structure.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We implement Cloud Monitoring, Security Command Center, organization policies, FinOps tooling, and automated alerting across your GCP projects.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ongoing GKE optimization, BigQuery cost management, committed use discount planning, and security hardening for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" >
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">↓28%</span>
              <div className="metric-label">Average GCP Cost Reduction</div>
              <div className="metric-sub">Achieved within 90 days</div>
            </div>
            <div className="metric-item"><span className="metric-value">99.97%</span>
              <div className="metric-label">Application Uptime</div>
              <div className="metric-sub">Multi-region GKE architectures</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;5min</span>
              <div className="metric-label">Mean Time to Detect</div>
              <div className="metric-sub">For critical incidents</div>
            </div>
            <div className="metric-item"><span className="metric-value">60%</span>
              <div className="metric-label">BigQuery Cost Savings</div>
              <div className="metric-sub">Through query optimization</div>
            </div>
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
            {gcpFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`gcp-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`gcp-faq-answer-${index}`}
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
            <h2 className="display-md">Optimize Your Google Cloud Investment</h2>
            <p>Get a free GCP environment assessment and discover how much you can save while improving performance, security, and data analytics across your Google Cloud.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free GCP Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GoogleCloudContent;
