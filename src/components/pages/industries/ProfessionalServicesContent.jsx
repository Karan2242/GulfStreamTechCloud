'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const ProfessionalServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const professionalServicesFaqs = [
    {
      question: 'What is secure cloud for professional services?',
      answer: 'Secure cloud for professional services is a compliance-first environment that protects sensitive client data while enabling collaboration and productivity.',
    },
    {
      question: 'How do you ensure regulatory compliance?',
      answer: 'We build cloud governance around NCA ECC, ISO 27001, and industry requirements with automated monitoring and audit-ready reporting.',
    },
    {
      question: 'Which cloud platforms do you support?',
      answer: 'We support AWS, Microsoft Azure, Google Cloud, and Oracle Cloud for professional services workloads, including secure data management and file sharing.',
    },
    {
      question: 'Can you reduce IT overhead costs?',
      answer: 'Yes. We reduce costs by managing cloud operations, automating compliance, and optimizing resource usage across the estate.',
    },
    {
      question: 'Why choose GulfStream for professional services cloud?',
      answer: 'Because we deliver secure, compliant cloud operations with local Saudi support and a focus on protecting sensitive client information.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Professional Services</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Secure Cloud for Professional Services Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>secure, compliant cloud environments</strong> for consulting, legal, and financial services firms in Saudi Arabia — protecting sensitive client data, enabling enterprise collaboration, and ensuring regulatory compliance across all cloud operations.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Cloud Security Review</Link>
          </div>
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
          
        </div>
      </section>


      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Professional Services Cloud Challenges</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Client Data Confidentiality</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Consulting, legal, and financial firms hold sensitive data; security breaches cause reputational damage and liability.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚖️</div>
                <h3 style={{ fontSize: '.95rem' }}>Regulatory Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>CMA regulations, Saudi Bar Association requirements, ISO 27001, and GDPR impose strict data handling obligations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Remote Work &amp; Collaboration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Hybrid work requires secure, high-performance cloud environments accessible anywhere without compromising data security.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <h3 style={{ fontSize: '.95rem' }}>Governance &amp; Audit Trails</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Firms must maintain complete audit trails of data access; structured IAM and audit logging required.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Secure Document Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Document repositories need cloud storage with fine-grained controls, encryption, versioning, and long-term archival.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Cost Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Unpredictable cloud usage tied to projects; without FinOps, client and project billing attribution unclear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Serves Professional Services</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Zero-Trust Security Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Zero Trust network access, MFA, and conditional policies protect client data without disrupting workflows.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance-First Cloud Design</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud environments designed with Saudi regulations, ISO 27001, and compliance frameworks with automated reporting.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <h3 style={{ fontSize: '.95rem' }}>Enterprise Collaboration Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Managed Microsoft 365, Azure Virtual Desktop, and Teams enable secure hybrid work with DLP protection.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🗂️</div>
                <h3 style={{ fontSize: '.95rem' }}>Secure Document Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Azure Blob or AWS S3 with client encryption, RBAC, versioning, legal hold, and long-term archival.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👁️</div>
                <h3 style={{ fontSize: '.95rem' }}>Complete Audit Trails</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>CloudTrail and Activity Log integration provide complete, tamper-proof audit trails ready for audits.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Client-Attributable Cloud Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Project-tagged environments with FinOps dashboards attribute infrastructure costs to clients for accurate billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Professional Services Cloud</h2>
          </div>
          <div className="grid-4 reveal" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Zero-Trust Work</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Zero Trust network access with conditional policies, Azure Virtual Desktop, and DLP-protected Microsoft 365 for secure remote work.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🗂️</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Secure Document Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud repositories with client-specific encryption, granular RBAC, versioning, legal hold, and automated retention for firms.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Compliance Automation</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Automated compliance reporting for ISO 27001, NCA ECC, CMA with posture monitoring and audit-ready dashboards.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Cloud Cost Attribution</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Project-tagged cloud environments with FinOps dashboards for accurate cost attribution per client, matter, or engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" >
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
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Professional Services Cloud FAQ</h2>
          </div>
          <div className="faq-accordion reveal">
            {professionalServicesFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`professional-services-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`professional-services-faq-answer-${index}`}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
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
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Protect Your Clients. Grow Your Firm.</h2>
            <p>Book a free cloud security review and discover how GulfStream builds zero-trust, ISO 27001-aligned cloud environments for professional services firms in Saudi Arabia — across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud.</p>
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
