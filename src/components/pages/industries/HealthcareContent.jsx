'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const HealthcareContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Healthcare</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🏥 Healthcare Cloud</div>
          <h1 className="display-lg">Healthcare Cloud Solutions<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>GulfStream Technologies builds <strong>HIPAA-aligned, high-availability cloud infrastructure</strong> for Saudi healthcare organizations — ensuring patient data security, clinical application reliability, and seamless compliance with NCA ECC and Ministry of Health regulations.</p>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Multi-cloud certified healthcare cloud experts</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Clinical Uptime</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">Compliance Pass Rate</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">45%</span>
                <span className="hero-quick-stat-label">Storage Cost Savings</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Healthcare Cloud Review</Link>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Saudi Arabia&apos;s healthcare sector is undergoing rapid digital transformation under Vision 2030. From electronic health records and telemedicine to clinical analytics, <strong>healthcare cloud solutions in Saudi Arabia</strong> must balance strict regulatory compliance with operational performance. GulfStream Technology delivers <strong>HIPAA-aligned cloud infrastructure</strong> on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> — purpose-built for healthcare organizations in Riyadh and across the Kingdom.</p>
            <p>Our healthcare cloud practice ensures full <strong>NCA ECC compliance</strong>, Saudi MOH regulatory alignment, and HIPAA readiness — with 99.99% uptime for mission-critical clinical systems. Combined with <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization</Link> and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security governance</Link>, we help healthcare organizations protect patient data while reducing infrastructure costs by up to 45%.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Healthcare Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🏥</div>
                <h3 style={{ fontSize: '.95rem' }}>Clinical Application Availability</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Electronic Health Records (EHR), clinical decision support systems, and patient monitoring applications require 99.99%+ uptime — downtime directly impacts patient safety.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Patient Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Healthcare data is among the most sensitive and most targeted. HIPAA, NCA ECC, and Saudi MOH regulations impose strict requirements for encryption, access control, and data residency.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Navigating overlapping regulatory frameworks — Saudi Vision 2030 Health Transformation, NCA controls, and international HIPAA requirements — requires dedicated specialist expertise.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>Healthcare System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Integrating HIS, PACS, LIS, and EHR systems with cloud environments while maintaining HL7 FHIR standards and data integrity is a complex technical and compliance challenge.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Medical Data Storage &amp; Archival</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>DICOM imaging data, lab results, and patient records require cost-effective, long-term cloud storage with instant retrieval capabilities and strict data lifecycle policies.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Scalable Digital Health</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Telemedicine platforms and digital health services require elastic cloud infrastructure that can scale rapidly during health crises without compromising performance or security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Healthcare Cloud Solutions</div>
            <h2 className="display-md">How GulfStream Serves Healthcare in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance-First Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We architect cloud environments with HIPAA, NCA ECC, and Saudi MOH compliance requirements built in from day one — including data residency enforcement, encryption, and audit logging.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <h3 style={{ fontSize: '.95rem' }}>High-Availability Clinical Systems</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Multi-AZ deployments, automated failover, and disaster recovery for EHR and clinical applications with RPO/RTO targets matched to patient safety requirements.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Clinical Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>End-to-end encryption, de-identification, and data masking for test environments. IAM controls restrict access to patient data on a strict need-to-know basis.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>HL7 FHIR Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managed integration platforms connecting disparate healthcare systems using HL7 FHIR standards — enabling seamless data exchange between HIS, EHR, PACS, and clinical analytics platforms.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Medical Imaging Storage</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cost-optimized DICOM storage with intelligent tiering on AWS S3 or Azure Blob Storage — instant access to recent studies with automated archival of historical imaging data.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Health Analytics Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managed healthcare analytics environments for population health management, clinical outcome analysis, and operational efficiency reporting — built on HIPAA-compliant cloud services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Healthcare Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🏥 Hospital EHR Cloud Migration</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: '1.7' }}>Migrate on-premises Electronic Health Record systems to HIPAA-aligned cloud environments on AWS, Azure, Google Cloud, or Oracle Cloud with zero downtime, full data residency in Saudi regions, and 99.99% availability SLA.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>📱 Telemedicine Platform Scaling</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Elastic cloud backends for telemedicine and digital health platforms that scale automatically during peak demand — supporting video consultations, remote monitoring, and patient portals.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>💾 DICOM Medical Imaging Archive</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Cost-optimized cloud storage for PACS and DICOM imaging with intelligent tiering — reducing storage costs by up to 45% while ensuring instant retrieval for active studies and compliant long-term archival.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>📊 Clinical Analytics &amp; AI</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>HIPAA-compliant data lakes and ML environments for population health analytics, predictive patient outcomes, and operational efficiency — built on AWS HealthLake or Azure Health Data Services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Healthcare Cloud Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">99.99%</span>
              <div className="metric-label">Clinical App Uptime</div>
              <div className="metric-sub">For all critical systems</div>
            </div>
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Compliance Audit Pass Rate</div>
              <div className="metric-sub">NCA ECC &amp; HIPAA aligned</div>
            </div>
            <div className="metric-item"><span className="metric-value">45%</span>
              <div className="metric-label">Storage Cost Reduction</div>
              <div className="metric-sub">Through intelligent tiering</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;30min</span>
              <div className="metric-label">Disaster Recovery RTO</div>
              <div className="metric-sub">For critical clinical systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Healthcare Cloud FAQ</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is healthcare cloud infrastructure?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Healthcare cloud infrastructure is a purpose-built cloud environment designed to host clinical applications (EHR, HIS, PACS), store patient data securely, and ensure compliance with HIPAA, NCA ECC, and Saudi Ministry of Health regulations — while delivering 99.99% uptime for mission-critical systems.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you ensure healthcare compliance in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream architects cloud environments with NCA ECC, Saudi MOH, and HIPAA compliance built in from day one — including data residency enforcement in Saudi regions, end-to-end encryption, audit logging, and automated <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>compliance reporting</Link> for regulatory audits.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you support for healthcare?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We are certified across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, supporting HIPAA-eligible services on all platforms — including AWS HealthLake, Azure Health Data Services, and compliant storage for DICOM imaging and patient records.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you reduce healthcare cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps practice</Link> has delivered 45% storage cost reduction through intelligent tiering for DICOM and medical data, plus right-sizing of clinical application infrastructure — while maintaining full compliance and 99.99% uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🔗 Related Industries</div>
            <h2 className="display-md">Explore Other Industry Solutions</h2>
          </div>
          <div className="grid-4 reveal">
            <Link href="/industries/retail" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🛒</div>
              <h3 style={{ fontSize: '.9rem' }}>Retail Cloud</h3>
            </Link>
            <Link href="/industries/logistics" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🚛</div>
              <h3 style={{ fontSize: '.9rem' }}>Logistics Cloud</h3>
            </Link>
            <Link href="/industries/tech-saas" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💻</div>
              <h3 style={{ fontSize: '.9rem' }}>SaaS Cloud</h3>
            </Link>
            <Link href="/industries/professional-services" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏢</div>
              <h3 style={{ fontSize: '.9rem' }}>Professional Services</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Protect Your Patients. Optimize Your Cloud.</h2>
            <p>Book a free healthcare cloud assessment and discover how to achieve 99.99% uptime, full NCA ECC compliance, and up to 45% cost reduction across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Healthcare Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HealthcareContent;
