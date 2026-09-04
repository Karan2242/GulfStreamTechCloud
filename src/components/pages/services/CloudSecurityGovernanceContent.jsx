'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import ComparisonTable from './cloud-managed/ComparisonTable';

const CloudSecurityGovernanceContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const securityFaqs = [
    {
      question: 'How do you ensure NCA ECC compliance?',
      answer: 'We implement NCA ECC controls with automated monitoring, policy enforcement, and audit-ready reporting across your cloud estate.',
    },
    {
      question: 'Do you provide 24/7 security monitoring?',
      answer: 'Yes. Our security operations team monitors threats around the clock and responds to incidents with SLA-backed support.',
    },
    {
      question: 'Can you secure multi-cloud environments?',
      answer: 'Yes. We secure AWS, Microsoft Cloud, Google Cloud, Oracle Cloud, and multi-cloud environments with centralized governance and controls.',
    },
    {
      question: 'How much does cloud security governance cost?',
      answer: 'Costs depend on your cloud estate and compliance needs. We offer a free security assessment with a customized estimate.',
    },
    {
      question: 'Why choose GulfStream for cloud security in Saudi Arabia?',
      answer: 'We combine local compliance expertise, certified security engineers, and managed operations to protect cloud workloads effectively.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Cloud Security &amp; Governance</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Enterprise Cloud Security &amp; Governance Services</span></h1>
          <p>GulfStream Technologies delivers enterprise-grade cloud security and governance across multi-cloud environments in Saudi Arabia — combining continuous threat detection, IAM hardening, NCA ECC compliance automation, and policy enforcement to protect your most critical cloud workloads in Saudi Arabia.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Security Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to an Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">Compliance</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">&lt;5min</span>
                <span className="hero-quick-stat-label">Threat Detection</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">24/7</span>
                <span className="hero-quick-stat-label">Security Ops</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* THREATS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Threats</div>
            <h2 className="display-md">Cloud Security Risks Enterprises Face</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔓</div>
                <div className="card-title-row"><h3>Misconfigured Resources</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Publicly accessible S3 buckets, open security groups, and improperly configured Azure Blob storage are among the most common causes of cloud data breaches.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🕵️</div>
                <div className="card-title-row"><h3>Over-Privileged Access</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>IAM roles and identities with excessive permissions violate the principle of least privilege, creating massive blast radius in the event of a credential compromise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🦠</div>
                <div className="card-title-row"><h3>Insider Threats &amp; Account Takeover</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Compromised credentials, malicious insiders, and API key exposure can give attackers persistent, privileged access to your cloud environment without detection.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Compliance Drift</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud environments that start compliant often drift from regulatory requirements (NCA ECC, ISO 27001, PCI DSS) as configurations change and teams scale rapidly.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔍</div>
                <div className="card-title-row"><h3>Limited Threat Visibility</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without centralized logging, SIEM integration, and threat intelligence, malicious activity can persist undetected in cloud environments for months.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <div className="card-title-row"><h3>Supply Chain Vulnerabilities</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Third-party dependencies, marketplace components, and container images may contain vulnerabilities that compromise your cloud workloads at the software supply chain level.</p>
            </div>
          </div>
        </div>
      </section>




      {/* WHAT YOU GET */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 What You Get</div>
            <h2 className="display-md">What You Get with GulfStream</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🛡️</div>
                <div className="card-title-row"><h3>Threat Detection</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Continuous threat monitoring with real-time detection, alert triage, and automated incident response.</p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Compliance Automation</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Automated enforcement for NCA ECC, ISO 27001, and regulatory frameworks with audit-ready reporting.</p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>IAM Governance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Least-privilege access, MFA enforcement, and privileged account control across multi-cloud environments.</p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔍</div>
                <div className="card-title-row"><h3>Risk Visibility</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Real-time visibility into misconfigurations, vulnerabilities, and compliance status across your cloud estate.</p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <div className="card-title-row"><h3>Security Hardening</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Implementation of encryption, network security, CSPM, and cloud-native protection controls.</p>
            </div>

            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Continuous Monitoring</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ongoing monitoring, compliance drift detection, and proactive remediation to maintain security posture.</p>
            </div>
          </div>
        </div>
      </section>




      {/* METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Security Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Compliance Coverage</div>
              <div className="metric-sub">NCA ECC &amp; ISO 27001 aligned</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;5min</span>
              <div className="metric-label">Threat Detection Time</div>
              <div className="metric-sub">Mean time to detect (MTTD)</div>
            </div>
            <div className="metric-item"><span className="metric-value">Zero</span>
              <div className="metric-label">Critical Misconfiguration</div>
              <div className="metric-sub">In managed environments</div>
            </div>
            <div className="metric-item"><span className="metric-value">24/7</span>
              <div className="metric-label">Security Operations</div>
              <div className="metric-sub">Continuous threat monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Security Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Saudi Compliance</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Automated compliance monitoring and enforcement for Saudi regulatory frameworks including NCA ECC, ISO 27001, and PCI DSS — with continuous audit reporting and drift remediation.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔍</div>
                <div className="card-title-row"><h3>Threat &amp; Incident Response</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>24/7 threat monitoring using GuardDuty, Sentinel, and custom detection rules with automated incident response playbooks and sub-5-minute mean time to detect.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>IAM Governance &amp; Zero Trust</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Enterprise IAM hardening with least-privilege enforcement, service account governance, conditional access policies, and zero-trust network architecture across multi-cloud environments.</p>
            </div>
          </div>
        </div>
      </section>

 
      <ComparisonTable
        badge="⚖️ Compare Security Operating Models"
        title="Choose Cloud Security Governance With Continuous Protection"
        description="Compare the monitoring, compliance, and incident response capabilities protecting your cloud estate."
        rows={[
          ['24/7 threat monitoring', 'yes', 'no', 'partial'],
          ['NCA ECC compliance support', 'yes', 'no', 'partial'],
          ['Certified cloud security engineers', 'yes', 'no', 'partial'],
          ['Multi-cloud security coverage', 'yes', 'partial', 'no'],
          ['SLA-backed security operations', 'yes', 'no', 'partial'],
          ['Incident response playbooks', 'yes', 'no', 'no'],
        ]}
      />


      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {securityFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`security-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`security-faq-answer-${index}`}
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
            <h2 className="display-md">Secure Your Cloud Environment Today</h2>
            <p>Book a free Cloud Security Assessment and receive a prioritized report of your security risks, compliance gaps, and a remediation roadmap — at no cost or commitment.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">🔒 Book Free Security Assessment</Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudSecurityGovernanceContent;
