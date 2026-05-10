'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const OracleCloudContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const ociiFaqs = [
    {
      question: 'What are Oracle Managed Cloud Services?',
      answer: 'Oracle Managed Cloud Services means outsourcing your OCI operations, security, and optimization to experienced Oracle cloud specialists.',
    },
    {
      question: 'How much do Oracle managed services cost?',
      answer: 'Costs depend on tenancy and database workload complexity. We provide a tailored estimate after a free OCI assessment.',
    },
    {
      question: 'Can you manage Oracle database migrations to OCI?',
      answer: 'Yes. We handle Oracle database migrations to OCI with zero-downtime planning and full validation.',
    },
    {
      question: 'Do you support Oracle Cloud licensing optimization?',
      answer: 'Yes. We optimize Oracle licensing with BYOL and Universal Credits strategies to reduce costs by up to 35%.',
    },
    {
      question: 'Why choose GulfStream for OCI managed services in Saudi Arabia?',
      answer: 'We offer local Oracle expertise, Saudi compliance support, and deep OCI management experience for enterprise workloads.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><span>Oracle Cloud</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🔴 Oracle Managed Cloud Services</div>
          <h1 className="display-lg">Oracle Managed Cloud Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies is a specialized managed cloud services provider for Oracle Cloud Infrastructure (OCI) in Saudi Arabia. We deliver end-to-end OCI management — from Autonomous Database and Exadata to OKE and Cloud Guard — with 24/7 cloud monitoring services, Oracle licensing optimization, and FinOps consulting to reduce costs by up to 35%.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free OCI Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <CloudSubNav />

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Oracle Cloud Challenges Enterprises Face</h2>
            <p>Running Oracle workloads in the cloud across Saudi Arabia demands specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Complex Licensing Costs</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Oracle licensing in the cloud is notoriously complex. Misconfigured BYOL, unused Universal Credits, and over-provisioned shapes lead to bills far exceeding expectations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>Security &amp; Compliance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Misconfigured IAM policies, unencrypted data at rest, and gaps in Oracle Cloud Guard leave critical workloads exposed to risk and NCA ECC non-compliance.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>Database Performance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Oracle databases require specialized tuning for Autonomous DB, Exadata, and RAC configurations — generic cloud management falls short.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Migration Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Moving Oracle workloads from on-premises or other clouds to OCI requires careful planning to avoid downtime and data loss.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row"><h3>OCI Skills Shortage</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Oracle Cloud engineers with deep OCI expertise are scarce in Saudi Arabia. Building an in-house team requires significant investment.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👁️</div>
                <div className="card-title-row"><h3>Operational Visibility</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without proper observability across OCI services, teams operate reactively — missing performance degradation and cost anomalies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on Oracle Cloud</h2>
            <p>Full-stack OCI managed services covering every layer of your Oracle cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI Compute Instances</li><li>OCI Container Engine (OKE)</li><li>OCI Functions</li><li>Dedicated VM Hosts</li><li>Autoscaling Configurations</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Autonomous Database (ATP/ADW)</li><li>Oracle Database Cloud Service</li><li>Exadata Cloud Service</li><li>MySQL HeatWave</li><li>NoSQL Database</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Virtual Cloud Network (VCN)</li><li>FastConnect</li><li>Load Balancer</li><li>DNS Management</li><li>Web Application Firewall</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI IAM &amp; Policies</li><li>Cloud Guard</li><li>Vulnerability Scanning</li><li>OCI Vault (Key Management)</li><li>Security Zones</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI Object Storage</li><li>Block Volume Management</li><li>File Storage Service</li><li>Archive Storage</li><li>Storage Gateway</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Universal Credit Optimization</li><li>BYOL License Management</li><li>Cost Analysis Reports</li><li>Budget Alerts</li><li>Compartment-Based Chargeback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream Oracle Cloud Management Framework</h2>
            <p>Our proven methodology ensures rapid value delivery for Oracle Cloud workloads in the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We audit your OCI environment — architecture, licensing, security posture, database performance, and cost efficiency — to establish a clear baseline.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We implement OCI best practices — monitoring with Cloud Guard, tagging governance, automated alerting, and FinOps tooling across your tenancy.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ongoing database tuning, compute rightsizing, licensing optimization, and security hardening to maximize your Oracle Cloud investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">↓35%</span>
              <div className="metric-label">Average OCI Cost Reduction</div>
              <div className="metric-sub">Including licensing optimization</div>
            </div>
            <div className="metric-item"><span className="metric-value">99.95%</span>
              <div className="metric-label">Database Uptime SLA</div>
              <div className="metric-sub">Across managed Oracle databases</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;10min</span>
              <div className="metric-label">Incident Response Time</div>
              <div className="metric-sub">For critical database issues</div>
            </div>
            <div className="metric-item"><span className="metric-value">2x</span>
              <div className="metric-label">Database Performance</div>
              <div className="metric-sub">Through expert tuning</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Oracle Cloud?</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <div className="card-title-row"><h3>Oracle Specialists</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Certified Oracle Cloud architects based in Riyadh with deep expertise in OCI, Autonomous DB, Exadata, and enterprise Oracle workloads.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>License Optimization</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Expert guidance on Oracle BYOL, Universal Credits, and license compliance through structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> — ensuring you never overpay.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">🔔</div>
                <div className="card-title-row"><h3>24/7 Monitoring</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Specialized Oracle database monitoring with performance baselines, alert tuning, and proactive capacity management — not just automated emails.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Outcome-Based SLAs</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We commit to specific uptime, performance, and cost targets. See also our <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> managed services.</p>
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
            {ociiFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`oci-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`oci-faq-answer-${index}`}
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
            <h2 className="display-md">Optimize Your Oracle Cloud Investment</h2>
            <p>Get a free OCI environment assessment and discover how much you can save on licensing and infrastructure while improving database performance and security.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free OCI Assessment</Link>
              <Link href="/book-a-review" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OracleCloudContent;
