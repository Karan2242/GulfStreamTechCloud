'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const HealthcareContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const healthcareFaqs = [
    {
      question: 'What is healthcare cloud infrastructure?',
      answer: 'Healthcare cloud infrastructure supports clinical applications, patient data, and compliance requirements with high availability and secure access.',
    },
    {
      question: 'How do you ensure healthcare compliance in Saudi Arabia?',
      answer: 'We build cloud environments aligned to NCA ECC, Saudi MOH, and healthcare data protection requirements with audit-ready governance.',
    },
    {
      question: 'Which cloud platforms do you support for healthcare?',
      answer: 'We support AWS, Microsoft Azure, Google Cloud, and Oracle Cloud for healthcare workloads, including secure storage and compliant compute.',
    },
    {
      question: 'Can you reduce healthcare cloud costs?',
      answer: 'Yes. We reduce healthcare cloud costs through optimized storage, rightsizing, and FinOps practices while preserving compliance and uptime.',
    },
    {
      question: 'Why choose GulfStream for healthcare cloud in Saudi Arabia?',
      answer: 'We combine healthcare compliance experience with local Saudi cloud expertise and certified multi-cloud operations.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Healthcare</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Healthcare Cloud Solutions Saudi Arabia</span></h1>
          <p>GulfStream Technologies builds <strong>HIPAA-aligned, high-availability cloud infrastructure</strong> for Saudi healthcare organizations — ensuring patient data security, clinical application reliability, and seamless compliance with NCA ECC and Ministry of Health regulations.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Healthcare Cloud Review</Link>
          </div>
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

        </div>
      </section>



      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Healthcare Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏥</div>
                <h3 style={{ fontSize: '.95rem' }}>Clinical Application Availability</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>EHR and clinical systems require 99.99%+ uptime; patient safety depends on continuous availability and zero downtime.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Patient Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>HIPAA, NCA ECC, and Saudi MOH regulations demand strict encryption, access controls, and data residency enforcement.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Navigating Saudi Vision 2030, NCA controls, and HIPAA requirements requires dedicated regulatory compliance expertise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>Healthcare System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Integrating HIS, PACS, and EHR systems with cloud while maintaining HL7 FHIR standards is complex.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Medical Data Storage &amp; Archival</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>DICOM imaging and patient records require cost-effective, long-term cloud storage with instant retrieval and lifecycle policies.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Scalable Digital Health</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Telemedicine platforms require elastic cloud that scales during health crises without compromising performance or security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Healthcare Cloud Solutions</div>
            <h2 className="display-md">How GulfStream Serves Healthcare in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <h3 style={{ fontSize: '.95rem' }}>Compliance-First Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud architectures built with HIPAA, NCA ECC, and Saudi MOH compliance from day one with audit logging.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <h3 style={{ fontSize: '.95rem' }}>High-Availability Clinical Systems</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Multi-AZ deployments with automated failover and disaster recovery matching RPO/RTO targets for patient safety.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Clinical Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>End-to-end encryption with de-identification and IAM controls restricting access on strict need-to-know basis.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>HL7 FHIR Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>HL7 FHIR integration platforms enabling seamless data exchange across HIS, EHR, PACS, and analytics systems.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.95rem' }}>Medical Imaging Storage</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cost-optimized DICOM storage with intelligent tiering for instant access to recent studies and historical archival.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Health Analytics Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>HIPAA-compliant healthcare analytics for population health management, clinical outcomes, and operational efficiency reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Healthcare Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-4 reveal" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🏥</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Hospital EHR Cloud Migration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Migrate on-premises EHR to HIPAA-aligned cloud with zero downtime and 99.99% SLA guarantee.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">📱</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Telemedicine Platform Scaling</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Elastic backends for telemedicine platforms scaling automatically during peak demand with video consultations and remote monitoring.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">💾</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>DICOM Medical Imaging</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Intelligent tiering for PACS and DICOM imaging reduces costs by 45% with instant retrieval access.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Clinical Analytics &amp; AI</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>HIPAA-compliant data lakes and ML environments for population health analytics and predictive patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" >
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
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Healthcare Cloud FAQ</h2>
          </div>
          <div className="faq-accordion reveal">
            {healthcareFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`healthcare-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`healthcare-faq-answer-${index}`}
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
            <h2 className="display-md">Protect Your Patients. Optimize Your Cloud.</h2>
            <p>Book a free healthcare cloud assessment and discover how to achieve 99.99% uptime, full NCA ECC compliance, and up to 45% cost reduction across AWS, Microsoft Cloud, Oracle Cloud, and Google Cloud.</p>
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
