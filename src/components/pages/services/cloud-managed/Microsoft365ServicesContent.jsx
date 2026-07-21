'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const Microsoft365ServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const m365Faqs = [
    {
      question: 'What are Microsoft 365 Managed Services?',
      answer: 'Microsoft 365 Managed Services means outsourcing management of your Exchange Online, Teams, SharePoint, OneDrive, and Microsoft Entra ID to certified Microsoft specialists. We handle licensing, governance, security, compliance, and end-user support.',
    },
    {
      question: 'How does Microsoft 365 management reduce costs?',
      answer: 'We optimize licensing through true-up analysis, eliminate redundant licenses, manage seat usage, negotiate volume discounts, and identify cost-saving features. Most organizations save 20-35% annually on Microsoft 365 investments.',
    },
    {
      question: 'Do you provide end-user support?',
      answer: 'Yes. We provide comprehensive end-user support for Microsoft 365 applications through tiered support (L1/L2/L3) with ticket-based tracking, knowledge base, and escalation procedures. Custom SLAs available.',
    },
    {
      question: 'Can you handle Microsoft 365 migrations?',
      answer: 'Absolutely. We manage complete migrations from on-premises Exchange/SharePoint to Microsoft 365, including mailbox migrations, data preservation, training, and cutover planning with zero business interruption.',
    },
    {
      question: 'How do you ensure Microsoft 365 compliance in Saudi Arabia?',
      answer: 'We implement compliance policies aligned to NCA ECC, GDPR, and industry regulations. This includes data governance, retention policies, eDiscovery setup, audit logging, and regular compliance audits.',
    },
    {
      question: 'Do you manage Teams security and governance?',
      answer: 'Yes. We implement Teams governance including channel naming policies, messaging policies, guest access controls, data retention, DLP rules, and security configurations aligned to enterprise requirements.',
    },
  ];

  const services = [
    {
      title: 'Microsoft 365 Management',
      icon: '📊',
      description: 'Comprehensive tenant management, licensing, user provisioning, governance policies, and compliance monitoring across your entire Microsoft 365 environment.',
      features: [
        'Tenant Administration',
        'User & Group Management',
        'License Optimization',
        'Governance Policies',
        'Compliance Monitoring',
        'Security Configuration',
        'Multi-factor Authentication (MFA)',
        'Password Policy Management',
      ],
    },
    {
      title: 'Exchange Online Management',
      icon: '📧',
      description: 'Full lifecycle management of Exchange Online including mailbox creation, distribution groups, security, compliance, and email flow optimization.',
      features: [
        'Mailbox Provisioning & Management',
        'Distribution Groups & Security Groups',
        'Email Flow & Connectors',
        'Transport Rules & Journaling',
        'Shared Mailbox Management',
        'Resource Mailboxes (Rooms, Equipment)',
        'Retention Policies',
        'Message Encryption & Protection',
      ],
    },
    {
      title: 'Teams Administration',
      icon: '💬',
      description: 'Governance, security, and optimization of Microsoft Teams for enterprise collaboration, communication, and compliance.',
      features: [
        'Team Creation & Management',
        'Channel Governance',
        'Guest Access Control',
        'Security Policies',
        'Retention & eDiscovery',
        'App Management & Controls',
        'Meeting Recording & Storage',
        'Analytics & Usage Monitoring',
      ],
    },
    {
      title: 'SharePoint & OneDrive',
      icon: '☁️',
      description: 'Complete management of SharePoint Online and OneDrive for Business including content governance, security, performance, and user adoption.',
      features: [
        'Site Collection Management',
        'Permissions & Access Control',
        'Content Migration',
        'Information Architecture',
        'Retention & Compliance',
        'Search Optimization',
        'OneDrive Provisioning',
        'Storage Quota Management',
      ],
    },
    {
      title: 'Identity & Access Management',
      icon: '🔐',
      description: 'Azure Entra ID (formerly Azure AD) and identity governance ensuring secure authentication, access control, and compliance with least-privilege principles.',
      features: [
        'Azure Entra ID Configuration',
        'Conditional Access Policies',
        'Role-Based Access Control (RBAC)',
        'Multi-Factor Authentication (MFA)',
        'Single Sign-On (SSO)',
        'Application Integration',
        'Hybrid Identity Management',
        'Access Reviews & Certification',
      ],
    },
    {
      title: 'Security & Compliance',
      icon: '🛡️',
      description: 'Enterprise security and compliance management using Microsoft Defender for Microsoft 365, DLP, audit logging, and threat protection.',
      features: [
        'Microsoft Defender for Microsoft 365',
        'Data Loss Prevention (DLP)',
        'Audit Logging & eDiscovery',
        'Threat & Vulnerability Management',
        'Phishing & Malware Protection',
        'Advanced Threat Protection',
        'Security Alerts & Incidents',
        'Compliance Reports & Documentation',
      ],
    },
    {
      title: 'License Optimization',
      icon: '💰',
      description: 'Strategic license management, cost optimization, and negotiation to maximize your Microsoft 365 investment and reduce unnecessary spending.',
      features: [
        'License Inventory & Audit',
        'True-Up Analysis',
        'Cost Allocation',
        'License Recommendations',
        'Unused License Identification',
        'Volume Discount Negotiation',
        'License Migration Planning',
        'Billing & Cost Reporting',
      ],
    },
    {
      title: 'End User Support',
      icon: '👥',
      description: '24/7 tiered support for Microsoft 365 users including helpdesk, training, knowledge base, and issue resolution.',
      features: [
        'Tier 1 Helpdesk Support',
        'Tier 2/3 Technical Support',
        'Ticket-Based Tracking',
        'Knowledge Base & Documentation',
        'User Training & Onboarding',
        'Feature Adoption Programs',
        'Custom SLAs Available',
        'Escalation Management',
      ],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container"  style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><Link href="/services/cloud-managed-services/microsoft-cloud">Microsoft Cloud</Link><span>›</span><span>Microsoft 365 Services</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Microsoft 365 Managed Services in Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers comprehensive management of your Microsoft 365 environment — from Exchange Online and Teams to SharePoint, OneDrive, and Microsoft Entra ID. We provide 24/7 operations, compliance governance, license optimization, and end-user support tailored for Saudi enterprises.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Free Microsoft 365 Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* WHY MICROSOFT 365 MANAGEMENT */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Why Microsoft 365 Management</div>
            <h2 className="display-md">Complexity Requires Expertise</h2>
            <p>Microsoft 365 is powerful but complex. Security misconfigurations, licensing waste, and poor governance create risk and cost. Expert management ensures productivity without compromise.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <h3>Reduce License Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Most organizations waste 20-35% on Microsoft 365 through unused licenses, over-licensing, and missed discount opportunities. We optimize your investment.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3>Enterprise Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Misconfigured Exchange, Teams, and SharePoint create security gaps. We implement Microsoft Defender, DLP, MFA, and compliance controls across all services.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <h3>Compliance & Governance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>NCA ECC, GDPR, and Saudi regulations require specific governance. We implement retention, eDiscovery, audit logging, and compliance policies aligned to regulations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <h3>User Adoption & Support</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Complex Microsoft 365 features overwhelm users. We provide training, helpdesk support, and adoption programs to maximize productivity and minimize disruption.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <h3>Operational Excellence</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Migrations, upgrades, maintenance, and troubleshooting require specialized knowledge. Our team handles all operational tasks around the clock.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <h3>Saudi-Based Expertise</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Local Riyadh-based team with deep knowledge of Saudi business practices, regulatory requirements, and enterprise cloud adoption patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Our Microsoft 365 Services</div>
            <h2 className="display-md">Complete Microsoft 365 Coverage</h2>
            <p>End-to-end management of every component in your Microsoft 365 ecosystem.</p>
          </div>

          <div className="grid-2 reveal" style={{ marginTop: '48px', gap: '24px' }}>
            {services.map((service, index) => (
              <div key={index} className="card premium-card" style={{ padding: '28px' }}>
                <div className="card-header" style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {service.description}
                </p>
                <div>
                  <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '12px', textTransform: 'uppercase' }}>Capabilities:</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ fontSize: '.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: 'var(--accent)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Common Challenges</div>
            <h2 className="display-md">Microsoft 365 Challenges We Solve</h2>
            <p>Organizations struggle with Microsoft 365 complexity. Here&apos;s how we help:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>License Sprawl</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Unused licenses, overlapping plans, and poor governance cause waste. We audit, optimize, and manage licenses for cost efficiency.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Security Gaps</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Misconfigured Teams channels, weak Exchange security, and poor identity controls create vulnerabilities. We implement defense-in-depth.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Data Governance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Unmanaged SharePoint sites, uncontrolled data retention, and missing compliance policies violate regulations. We enforce governance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Teams Chaos</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Uncontrolled Teams proliferation, poor naming conventions, and security risks. We establish governance and best practices.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Migration Complexity</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Moving from on-premises Exchange/SharePoint is risky and complex. We execute zero-downtime migrations with full data integrity.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>User Adoption</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6 }}>Users struggle with Microsoft 365 features and best practices. We provide training, helpdesk support, and adoption programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Engagement Model</div>
            <h2 className="display-md">How We Deliver Microsoft 365 Management</h2>
            <p>Our proven methodology ensures successful implementation and continuous optimization.</p>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">1️⃣</div><h3>Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Comprehensive audit of your Microsoft 365 environment covering security, compliance, licenses, governance, and optimization opportunities.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">2️⃣</div><h3>Planning</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Custom roadmap addressing security, governance, compliance, licensing optimization, and user adoption based on assessment findings.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">3️⃣</div><h3>Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Execute security policies, governance controls, compliance configurations, license optimization, and user training with minimal disruption.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">4️⃣</div><h3>24/7 Management</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ongoing operations including user support, security monitoring, compliance auditing, optimization, and quarterly business reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">↓25-35%</span>
              <div className="metric-label">License Cost Reduction</div>
              <div className="metric-sub">Achieved within first 60 days</div>
            </div>
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Compliance Readiness</div>
              <div className="metric-sub">NCA ECC, GDPR, ISO 27001 aligned</div>
            </div>
            <div className="metric-item"><span className="metric-value">24/7</span>
              <div className="metric-label">Operations Center</div>
              <div className="metric-sub">24-hour support & monitoring</div>
            </div>
            <div className="metric-item"><span className="metric-value">4-Hour</span>
              <div className="metric-label">Average Response Time</div>
              <div className="metric-sub">Helpdesk support SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {m365Faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`m365-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`m365-faq-answer-${index}`}
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
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Optimize Your Microsoft 365 Investment</h2>
            <p>Get a free Microsoft 365 environment assessment covering security, compliance, licensing, governance, and optimization opportunities specific to your organization.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Microsoft365ServicesContent;
