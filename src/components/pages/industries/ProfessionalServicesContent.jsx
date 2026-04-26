'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const ProfessionalServicesContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Professional Services</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🏢 Professional Services Cloud</div>
          <h1 className="display-lg">Secure Cloud for<br /><span className="text-gradient">Professional Services Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>secure, compliant cloud environments</strong> for consulting, legal, and financial services firms in Saudi Arabia — protecting sensitive client data, enabling enterprise collaboration, and ensuring regulatory compliance across all cloud operations.</p>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Multi-cloud certified cloud security experts</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">Encryption Coverage</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">ISO 27001</span>
                <span className="hero-quick-stat-label">Compliance Aligned</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">Zero</span>
                <span className="hero-quick-stat-label">Data Breaches</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Cloud Security Review</Link>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Professional services firms in Saudi Arabia — consulting, legal, accounting, and financial advisory — handle some of the most sensitive data in the enterprise landscape. <strong>Secure cloud for professional services in Saudi Arabia</strong> must provide zero-trust security, ISO 27001-aligned compliance, complete audit trails, and encrypted document management — while enabling seamless hybrid collaboration. GulfStream Technologies builds <strong>compliance-first cloud environments</strong> on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> — designed for firms across Riyadh, Jeddah, and the GCC.</p>
            <p>With deep expertise in <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>zero-trust cloud architecture</Link>, regulatory compliance automation, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>client-attributable cloud cost management</Link>, we help professional services firms achieve 100% data encryption, ISO 27001 alignment, 40% IT overhead reduction, and zero data breach incidents — protecting client trust while modernizing operations.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Professional Services Cloud Challenges</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Client Data Confidentiality</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Consulting, legal, and financial firms hold highly sensitive client information. A single cloud security breach can cause irreparable reputational damage and legal liability.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⚖️</div>
                <h3 style={{ fontSize: '.95rem' }}>Regulatory Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>CMA financial regulations, Saudi Bar Association requirements, and international compliance frameworks (ISO 27001, GDPR for international clients) impose strict data handling obligations.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Remote Work &amp; Collaboration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Post-COVID hybrid work models require secure, high-performance cloud collaboration environments accessible from anywhere — without compromising client data security.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <h3 style={{ fontSize: '.95rem' }}>Governance &amp; Audit Trails</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Professional service firms must maintain complete audit trails of who accessed what data, when, and why — a requirement that demands structured IAM and audit logging in cloud environments.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Secure Document Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Large document repositories, case files, and financial records require cloud storage with fine-grained access controls, encryption, versioning, and long-term compliant archival.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Cost Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Professional services firms often have unpredictable cloud usage tied to project activity. Without FinOps practices, billing attributable to specific clients or projects remains unclear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Serves Professional Services</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Zero-Trust Security Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Implement Zero Trust network access, MFA, and conditional access policies that protect client data from internal and external threats — without disrupting professional workflows.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance-First Cloud Design</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cloud environments designed with Saudi regulatory requirements, ISO 27001, and international compliance frameworks built in — with automated compliance reporting for audit readiness.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <h3 style={{ fontSize: '.95rem' }}>Enterprise Collaboration Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managed Microsoft 365 integration, Azure Virtual Desktop, and Teams environments that enable secure hybrid work — with DLP policies protecting sensitive documents automatically.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🗂️</div>
                <h3 style={{ fontSize: '.95rem' }}>Secure Document Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Azure Blob or AWS S3 document management with client-specific encryption, granular RBAC, versioning, legal hold capabilities, and long-term archival meeting retention requirements.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">👁️</div>
                <h3 style={{ fontSize: '.95rem' }}>Complete Audit Trails</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>CloudTrail and Azure Activity Log integration with SIEM provides complete, tamper-proof audit trails for all data access events — ready for regulatory and client audits on demand.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Client-Attributable Cloud Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Project-tagged cloud environments with FinOps dashboards that attribute infrastructure costs to specific clients or matters — enabling accurate cloud cost pass-through billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Professional Services Cloud</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🔒 Zero-Trust Hybrid Work Environment</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Secure remote work infrastructure with Zero Trust network access, conditional access policies, Azure Virtual Desktop, and DLP-protected Microsoft 365 — enabling consultants and advisors to work securely from anywhere.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🗂️ Encrypted Document Management</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Cloud document repositories (Azure Blob / AWS S3) with client-specific encryption keys, granular RBAC, versioning, legal hold capabilities, and automated retention policies for legal, consulting, and financial firms.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>📋 Compliance Audit Automation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Automated compliance reporting against ISO 27001, NCA ECC, and CMA frameworks — with continuous posture monitoring, automated evidence collection, and audit-ready dashboards that reduce manual preparation by 60%.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>💸 Client Cloud Cost Attribution</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Project-tagged cloud environments with FinOps dashboards attributing infrastructure costs to specific clients, matters, or engagements — enabling accurate cost pass-through billing and profitability analysis per client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Professional Services Cloud Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Data Encryption Coverage</div>
              <div className="metric-sub">At rest and in transit</div>
            </div>
            <div className="metric-item"><span className="metric-value">ISO 27001</span>
              <div className="metric-label">Compliance Aligned</div>
              <div className="metric-sub">Audit-ready at all times</div>
            </div>
            <div className="metric-item"><span className="metric-value">40%</span>
              <div className="metric-label">IT Overhead Reduction</div>
              <div className="metric-sub">Through managed cloud services</div>
            </div>
            <div className="metric-item"><span className="metric-value">Zero</span>
              <div className="metric-label">Data Breach Incidents</div>
              <div className="metric-sub">Across all managed clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Professional Services Cloud FAQ</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is secure cloud for professional services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Secure cloud for professional services is a compliance-first cloud environment designed for consulting, legal, and financial firms — with zero-trust security, encrypted document management, complete audit trails, and ISO 27001-aligned governance to protect sensitive client data.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you ensure regulatory compliance?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We design cloud environments with <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>compliance built in</Link> — including NCA ECC, ISO 27001, CMA regulations, and international frameworks (GDPR for global clients). Automated compliance monitoring and evidence collection ensure audit readiness at all times.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream is certified across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>. We design secure cloud architectures using AWS IAM, CloudTrail, S3, and KMS, or Azure AD, Activity Logs, Blob Storage, and Key Vault — based on your existing technology stack.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you reduce IT overhead costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>managed cloud and FinOps practice</Link> delivers an average 40% IT overhead reduction for professional services firms — by managing all cloud operations, automating compliance, and enabling client-level cost attribution for accurate pass-through billing.</p>
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
            <Link href="/industries/healthcare" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏥</div>
              <h3 style={{ fontSize: '.9rem' }}>Healthcare Cloud</h3>
            </Link>
            <Link href="/industries/logistics" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🚛</div>
              <h3 style={{ fontSize: '.9rem' }}>Logistics Cloud</h3>
            </Link>
            <Link href="/industries/tech-saas" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💻</div>
              <h3 style={{ fontSize: '.9rem' }}>SaaS Cloud</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Protect Your Clients. Grow Your Firm.</h2>
            <p>Book a free cloud security review and discover how GulfStream builds zero-trust, ISO 27001-aligned cloud environments for professional services firms in Saudi Arabia — across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfessionalServicesContent;
