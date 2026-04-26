'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const OracleCloudContent = () => {
  useReveal();

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
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
            <p>Running Oracle workloads in the cloud across Riyadh, Jeddah, and Dammam demands specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">💸</div><h3>Complex Licensing Costs</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Oracle licensing in the cloud is notoriously complex. Misconfigured BYOL, unused Universal Credits, and over-provisioned shapes lead to bills far exceeding expectations.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔐</div><h3>Security &amp; Compliance</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Misconfigured IAM policies, unencrypted data at rest, and gaps in Oracle Cloud Guard leave critical workloads exposed to risk and NCA ECC non-compliance.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>Database Performance</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Oracle databases require specialized tuning for Autonomous DB, Exadata, and RAC configurations — generic cloud management falls short.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔄</div><h3>Migration Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Moving Oracle workloads from on-premises or other clouds to OCI requires careful planning to avoid downtime and data loss.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>OCI Skills Shortage</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Oracle Cloud engineers with deep OCI expertise are scarce in Saudi Arabia. Building an in-house team requires significant investment.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👁️</div><h3>Operational Visibility</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without proper observability across OCI services, teams operate reactively — missing performance degradation and cost anomalies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream Oracle Cloud Management Framework</h2>
            <p>Our proven methodology ensures rapid value delivery for Oracle Cloud workloads in the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We audit your OCI environment — architecture, licensing, security posture, database performance, and cost efficiency — to establish a clear baseline.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We implement OCI best practices — monitoring with Cloud Guard, tagging governance, automated alerting, and FinOps tooling across your tenancy.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Ongoing database tuning, compute rightsizing, licensing optimization, and security hardening to maximize your Oracle Cloud investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on Oracle Cloud</h2>
            <p>Full-stack OCI managed services covering every layer of your Oracle cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI Compute Instances</li><li>OCI Container Engine (OKE)</li><li>OCI Functions</li><li>Dedicated VM Hosts</li><li>Autoscaling Configurations</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Autonomous Database (ATP/ADW)</li><li>Oracle Database Cloud Service</li><li>Exadata Cloud Service</li><li>MySQL HeatWave</li><li>NoSQL Database</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Virtual Cloud Network (VCN)</li><li>FastConnect</li><li>Load Balancer</li><li>DNS Management</li><li>Web Application Firewall</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI IAM &amp; Policies</li><li>Cloud Guard</li><li>Vulnerability Scanning</li><li>OCI Vault (Key Management)</li><li>Security Zones</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>OCI Object Storage</li><li>Block Volume Management</li><li>File Storage Service</li><li>Archive Storage</li><li>Storage Gateway</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Universal Credit Optimization</li><li>BYOL License Management</li><li>Cost Analysis Reports</li><li>Budget Alerts</li><li>Compartment-Based Chargeback</li>
              </ul>
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

      {/* USE CASES & INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏢 Use Cases</div>
            <h2 className="display-md">Oracle Cloud Use Cases &amp; Industries We Serve</h2>
            <p>Our OCI managed services support mission-critical Oracle workloads across diverse industries in Saudi Arabia and the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Financial Services</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>High-performance Oracle databases for core banking, risk analytics, and SAMA-compliant transaction processing in Riyadh&apos;s financial district.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Oracle ERP and database workloads for government agencies, ministries, and Vision 2030 digital transformation programs with NCA ECC compliance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Oracle Health Sciences and clinical data platforms on OCI with Saudi data residency, HIPAA alignment, and Autonomous Database reliability.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛢️ Oil &amp; Gas / Energy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Oracle-based ERP systems and high-performance computing for energy enterprises, upstream analytics, and IoT data processing on OCI.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 Retail &amp; Supply Chain</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Oracle Retail and supply chain management on OCI for enterprises across Jeddah, Dammam, and the Eastern Province.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏭 Manufacturing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Oracle Cloud for manufacturing ERP, quality management, and production analytics supporting Saudi industrial development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Oracle Cloud Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cloud Guard</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Security Monitoring</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Autonomous DB</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Self-Driving Database</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>OCI Monitoring</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Observability Platform</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform OCI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Infrastructure as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Exadata Cloud</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>High-Performance DB</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>OCI Logging</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Log Analytics</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>OKE</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Container Orchestration</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Resource Manager</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Stack Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ORACLE MANAGED SERVICES IN RIYADH */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Oracle Managed Cloud Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud management company based in Saudi Arabia, GulfStream Technologies provides Oracle Managed Cloud Services tailored to enterprises in Riyadh, Jeddah, and Dammam. With Oracle&apos;s dedicated Saudi Arabia cloud region, we help organizations maintain data residency compliance while leveraging the full power of OCI — including Autonomous Database, Exadata, and Oracle&apos;s industry-leading enterprise applications.</p>
            <p style={{ marginTop: '16px' }}>Our Riyadh-based team delivers 24/7 Oracle database monitoring, licensing optimization for BYOL and Universal Credits, security governance through Cloud Guard, and cloud cost management services — ensuring your Oracle Cloud investment supports Vision 2030 objectives. For multi-cloud strategies, see our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure managed services</Link>.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Oracle Cloud?</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🇸🇦 Saudi Oracle Specialists</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified Oracle Cloud architects based in Riyadh with deep expertise in OCI, Autonomous DB, Exadata, and enterprise Oracle workloads.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📊 Licensing Optimization</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Expert guidance on Oracle BYOL, Universal Credits, and license compliance through structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> — ensuring you never overpay.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🔔 24/7 Database Monitoring</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Specialized Oracle database monitoring with performance baselines, alert tuning, and proactive capacity management — not just automated emails.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📋 Outcome-Based SLAs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We commit to specific uptime, performance, and cost targets. See also our <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> managed services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏅 Certifications</div>
            <h2 className="display-md">Certified Oracle Cloud Expertise</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔴</div>
              <h3 style={{ fontSize: '.85rem' }}>OCI Architect Professional</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '.85rem' }}>OCI Security Specialist</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🗄️</div>
              <h3 style={{ fontSize: '.85rem' }}>Oracle Database Administrator</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📊</div>
              <h3 style={{ fontSize: '.85rem' }}>FinOps Certified Practitioner</h3>
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
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What are Oracle Managed Cloud Services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Oracle Managed Cloud Services involve outsourcing the management of your OCI environment to certified cloud experts. This includes 24/7 monitoring, security governance with Cloud Guard, database performance tuning, licensing optimization, and incident response.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you optimize Oracle licensing costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We analyze your Oracle licensing across BYOL, Universal Credits, and Support contracts. We identify unused licenses, optimize processor metrics, and implement BYOL strategies that reduce licensing costs by up to 35% on OCI.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you manage Oracle database migrations to OCI?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We handle end-to-end Oracle database migrations from on-premises or other clouds to OCI, including Autonomous Database and Exadata Cloud Service — with zero-downtime strategies and full data validation.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much do Oracle Managed Cloud Services cost?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs depend on your environment complexity, number of tenancies, and database workloads. GulfStream Technologies offers flexible pricing from basic monitoring to fully managed operations. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link> for a tailored quote.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Why choose OCI managed services in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Oracle has a dedicated cloud region in Saudi Arabia, making it ideal for data residency and regulatory compliance. A local managed services provider ensures NCA ECC compliance, low-latency support, and deep Oracle database expertise.</p>
            </div>
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
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OracleCloudContent;
