'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const GoogleCloudContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><span>Google Cloud</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🟢 Google Managed Cloud Services</div>
          <h1 className="display-lg">Google Managed Cloud Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies is a certified managed cloud services provider for Google Cloud Platform (GCP) in Saudi Arabia. We deliver comprehensive GCP management — from GKE and BigQuery to Cloud Run and Security Command Center — with 24/7 cloud monitoring services, data analytics optimization, and FinOps consulting to cut costs by up to 28%.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free GCP Assessment</Link>
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
            <h2 className="display-md">Google Cloud Challenges Enterprises Face</h2>
            <p>Managing Google Cloud at scale across Riyadh, Jeddah, and Dammam requires specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">💸</div><h3>Billing Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>GCP&apos;s per-second billing, sustained use discounts, and committed use discounts create complex cost structures difficult to optimize without deep expertise.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔐</div><h3>IAM &amp; Security Gaps</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>GCP&apos;s organization-level IAM, service accounts, and VPC Service Controls require careful configuration to prevent data exposure and ensure NCA ECC compliance.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>Data Platform Scale</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>BigQuery, Dataflow, and Pub/Sub require specialized tuning for cost and performance at enterprise scale — generic management underperforms.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔄</div><h3>Kubernetes Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>GKE cluster management, Anthos multi-cloud, and service mesh configurations demand deep container orchestration expertise.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>GCP Talent Scarcity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Google Cloud certified engineers are among the hardest to find in Saudi Arabia, making in-house team building a major challenge.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👁️</div><h3>Observability Gaps</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without proper Cloud Monitoring and Cloud Logging setup, teams miss critical performance issues and cost anomalies until they impact operations.</p>
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We audit your GCP environment — architecture, organizational hierarchy, security posture, data platform efficiency, and cost structure.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We implement Cloud Monitoring, Security Command Center, organization policies, FinOps tooling, and automated alerting across your GCP projects.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Ongoing GKE optimization, BigQuery cost management, committed use discount planning, and security hardening for continuous improvement.</p>
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
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Compute Engine VMs</li><li>Google Kubernetes Engine (GKE)</li><li>Cloud Run</li><li>Cloud Functions</li><li>App Engine</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Data &amp; Analytics</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>BigQuery</li><li>Cloud SQL</li><li>Cloud Spanner</li><li>Dataflow</li><li>Pub/Sub</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>VPC Networks</li><li>Cloud Interconnect</li><li>Cloud Load Balancing</li><li>Cloud DNS</li><li>Cloud CDN</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Cloud IAM</li><li>Security Command Center</li><li>VPC Service Controls</li><li>Cloud KMS</li><li>Cloud Armor</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Cloud Storage</li><li>Persistent Disks</li><li>Filestore</li><li>Archive Storage</li><li>Transfer Service</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Billing Account Management</li><li>Committed Use Discounts</li><li>Sustained Use Discounts</li><li>Budget Alerts</li><li>Label-Based Cost Attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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

      {/* USE CASES & INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏢 Use Cases</div>
            <h2 className="display-md">Google Cloud Use Cases &amp; Industries We Serve</h2>
            <p>Our GCP managed services support data-driven and cloud-native workloads across diverse industries in Saudi Arabia and the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📊 Data &amp; Analytics</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Enterprise data lakes, BigQuery analytics pipelines, and real-time dashboards for data-driven decision making across Saudi organizations.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 Tech &amp; SaaS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>GKE-based microservices, Cloud Run serverless APIs, and CI/CD pipelines for SaaS companies scaling in the Middle East market from Riyadh.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 Retail &amp; E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Scalable GCP architectures for e-commerce platforms, recommendation engines, and customer analytics powering businesses across Jeddah and Dammam.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Health data analytics, medical imaging AI, and HIPAA-aligned GCP environments with Saudi data residency for healthcare providers.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🎓 Education &amp; Research</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>BigQuery research computing, AI/ML workloads on Vertex AI, and cloud-native learning platforms for Saudi universities and institutions.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🚚 Logistics &amp; Transportation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Google Maps Platform integration, fleet tracking, route optimization, and real-time data processing for logistics companies across Saudi Arabia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Google Cloud Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cloud Monitoring</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Observability &amp; Alerting</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Security Command Center</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Security Posture</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>BigQuery</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Data Warehouse</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cost Management</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>FinOps Analytics</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Infrastructure as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cloud Armor</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>DDoS &amp; WAF</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cloud Build</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>CI/CD Pipelines</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Anthos</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Multi-Cloud Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE Managed Cloud Services IN RIYADH */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Google Managed Cloud Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud management company based in Saudi Arabia, GulfStream Technologies provides Google Managed Cloud Services tailored to enterprises in Riyadh, Jeddah, and Dammam. With Google Cloud&apos;s dedicated Saudi Arabia region (Dammam), we help organizations maintain data residency compliance while leveraging GCP&apos;s industry-leading data analytics, AI/ML, and container orchestration capabilities.</p>
            <p style={{ marginTop: '16px' }}>Our Riyadh-based team delivers 24/7 cloud monitoring services, GKE management, BigQuery cost optimization, security governance through Security Command Center, and cloud cost management services — ensuring your GCP investment supports Vision 2030 digital transformation objectives. For multi-cloud strategies, see our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure managed services</Link>.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Google Cloud?</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🇸🇦 Saudi GCP Specialists</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified Google Cloud architects based in Riyadh with deep expertise in GKE, BigQuery, Cloud Run, and Vertex AI.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📊 FinOps-First Management</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Every engagement includes structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> with measurable cost reduction targets from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🔔 True 24/7 NOC Operations</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Our NOC monitors your Google Cloud environment around the clock with human-backed alerting and incident response — not just automated emails.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📋 Outcome-Based SLAs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We commit to specific uptime, cost, and performance targets. See also our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> managed services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏅 Certifications</div>
            <h2 className="display-md">Certified Google Cloud Expertise</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🟢</div>
              <h3 style={{ fontSize: '.85rem' }}>Professional Cloud Architect</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '.85rem' }}>Professional Cloud Security Engineer</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📊</div>
              <h3 style={{ fontSize: '.85rem' }}>Professional Data Engineer</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What are Google Managed Cloud Services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Google Managed Cloud Services involve outsourcing the management of your GCP environment to certified cloud experts. This includes 24/7 monitoring, GKE cluster management, BigQuery optimization, security governance with Security Command Center, cost optimization, and incident response.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much do Google Managed Cloud Services cost?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs depend on your environment complexity, number of projects, and workload types. GulfStream Technologies offers flexible pricing from basic monitoring to fully managed operations. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link> for a tailored quote.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you optimize BigQuery costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We implement slot reservations, partition and cluster tables, optimize query patterns, use materialized views, and implement storage lifecycle policies — typically reducing BigQuery costs by 40-60%.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you manage GKE clusters?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We provide full GKE lifecycle management including cluster upgrades, node pool optimization, autoscaling configuration, security hardening, and cost management for containerized workloads on Google Cloud.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Why choose GCP managed services in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Google Cloud has a dedicated region in Dammam, Saudi Arabia, ideal for data residency. A local managed services provider ensures NCA ECC compliance, low-latency support, and deep expertise in GCP&apos;s data and analytics stack.</p>
            </div>
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
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GoogleCloudContent;
