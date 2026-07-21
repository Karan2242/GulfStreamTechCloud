'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const platformCards = [
  {
    badge: 'AWS',
   
    title: 'AWS Managed Services Saudi Arabia',
    description:
      '24/7 AWS operations, governance, security hardening, cloud migration, observability, and FinOps optimization for enterprise workloads across Saudi Arabia.',
    capabilities: ['FinOps', 'Security', 'Migration', 'Monitoring'],
    expertise: 'Certified AWS Partner in Riyadh',
    cta: 'Explore AWS Operations',
    link: '/services/cloud-managed-services/aws',
  },
  {
    badge: 'Microsoft',
  
    title: 'Microsoft Cloud Managed Services Saudi Arabia',
    description:
      'Mission-critical Azure platform operations with governance automation, Entra ID integration, cloud security, and enterprise performance engineering.',
    capabilities: ['Identity', 'Governance', 'Security', 'Optimization'],
    expertise: 'Microsoft cloud delivery specialists',
    cta: 'Explore Microsoft Cloud Operations',
    link: '/services/cloud-managed-services/microsoft-cloud',
  },
  {
    badge: 'GCP',

    title: 'Google Cloud Managed Services Saudi Arabia',
    description:
      'Managed Google Cloud infrastructure with Kubernetes operations, observability, analytics, and scalable cloud-native engineering.',
    capabilities: ['Kubernetes', 'Analytics', 'DevOps', 'Observability'],
    expertise: 'GCP operations and data platform expertise',
    cta: 'Explore Google Cloud',
    link: '/services/cloud-managed-services/google',
  },
  {
    badge: 'OCI',

    title: 'Oracle Cloud Managed Services Saudi Arabia',
    description:
      'Enterprise Oracle Cloud operations with workload optimization, governance, hybrid cloud orchestration, and compliance-driven infrastructure management.',
    capabilities: ['Enterprise Apps', 'Hybrid Cloud', 'Governance', 'Compliance'],
    expertise: 'OCI enterprise workload specialists',
    cta: 'Explore Oracle Cloud',
    link: '/services/cloud-managed-services/oracle',
  },
];

const featureCards = [
  {
    title: 'Unified Multi-Cloud Governance',
    description: 'One operating model for AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud with centralized policy, security, and compliance controls.',
  },
  {
    title: 'Real-Time Cost & Security Visibility',
    description: 'Cloud spend governance, observability, and security monitoring that keeps platform operations transparent and accountable.',
  },
  {
    title: 'Cloud Platform Engineering',
    description: 'Platform automation, IaC, Kubernetes, and enterprise DevOps practices for mission-critical Saudi workloads.',
  },
  {
    title: 'Saudi & GCC Compliance Delivery',
    description: 'Local delivery with GCC regulatory alignment, NCA-aware controls, and enterprise-grade cloud operations.',
  },
];

const faqItems = [
  {
    question: 'What cloud platforms does GulfStream support?',
    answer:
      'GulfStream supports AWS, Microsoft Azure, Google Cloud, and Oracle Cloud with local Saudi delivery, governance, security operations, and hybrid cloud integration.',
  },
  {
    question: 'Does GulfStream manage AWS and Azure together?',
    answer:
      'Yes. Our multi-cloud operating model allows AWS and Azure workloads to be managed together under one governance framework for compliance, security, and cost optimization.',
  },
  {
    question: 'Do you provide cloud cost optimization services?',
    answer:
      'Absolutely. We combine FinOps, rightsizing, billing governance, and automated cost controls to reduce cloud spend across AWS, Azure, Google Cloud, and Oracle Cloud.',
  },
  {
    question: 'Can GulfStream manage hybrid cloud environments?',
    answer:
      'Yes. We manage hybrid cloud environments that include on-premises, public cloud, and Oracle Cloud infrastructure, with architecture designed for GCC compliance and enterprise resiliency.',
  },
  {
    question: 'Do you support Saudi enterprise compliance requirements?',
    answer:
      'We support Saudi Arabia and GCC compliance requirements through security hardening, local data governance, NCA-aligned policy controls, and enterprise-level risk management.',
  },
];

const PlatformContent = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  useReveal();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Platform</span>
          </nav>
          <div className="section-header reveal">
            <div className="badge badge-primary">Multi-Cloud Platforms</div>
            <h1 className="display-lg">Multi-cloud managed operations for Saudi enterprises</h1>
            <p>
              Saudi Arabia’s leading managed cloud platform operations for AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud. Governance-driven delivery with 24/7 security, FinOps cost control, observability, and hybrid modernization for enterprise cloud.
            </p>
          </div>

          <div className="cta-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to Cloud Specialists</Link>
            <Link href="/book-a-review" className="btn btn-outline btn-lg">Request Cloud Assessment</Link>
          </div>
        </div>
      </section>





      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Enterprise Cloud Operations</div>
            <h2 className="display-md">Multi-cloud platforms with premium managed services</h2>
            <p>
              Complete managed operations for AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud with enterprise-grade governance, security, and FinOps optimization.
            </p>
          </div>

          <div className="grid-2 reveal">
            {platformCards.map((platform, index) => (
              <Link href={platform.link} key={platform.badge} style={{ textDecoration: 'none' }}>
                <motion.article
                  className="premium-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  style={{ cursor: 'pointer', height: '100%' }}
                >
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)' }}>{platform.short}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', background: 'rgba(255, 107, 53, 0.08)', padding: '6px 12px', borderRadius: '20px' }}>{platform.badge}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.4', margin: '0 0 10px 0' }}>
                      {platform.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                      {platform.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {platform.capabilities.map((capability) => (
                      <span
                        key={capability}
                        style={{
                          background: 'rgba(255, 107, 53, 0.08)',
                          color: 'var(--accent)',
                          border: '1px solid rgba(255, 107, 53, 0.2)',
                          borderRadius: '18px',
                          padding: '5px 14px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          display: 'inline-block'
                        }}
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255, 107, 53, 0.1)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', margin: '0 0 12px 0' }}>
                      {platform.expertise}
                    </p>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.3s ease' }}>
                      {platform.cta} <span style={{ fontSize: '1rem' }}>→</span>
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="display-md">Enterprise Cloud Solutions</h2>
            <p>
              Complete platform services for multi-cloud governance, security, cost optimization, and compliance delivery across Saudi Arabia.
            </p>
          </div>

          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🎛️</div>
                <div className="card-title-row">
                  <h3>Unified Governance</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>One operating model with centralized policy, security, and compliance controls across AWS, Azure, Google Cloud, Oracle.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row">
                  <h3>Cost Optimization</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Real-time FinOps, automated rightsizing, and spend governance to reduce cloud expenses while maintaining reliability.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row">
                  <h3>Security Hardening</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Enterprise-grade threat detection, compliance monitoring, incident response, and NCA-aligned security operations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <div className="card-title-row">
                  <h3>Platform Engineering</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Kubernetes orchestration, IaC automation, DevOps practices, and cloud-native architecture for mission-critical workloads.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <div className="card-title-row">
                  <h3>Hybrid Modernization</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Seamless integration between on-premises and public cloud with scalable architecture and data governance.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">✓</div>
                <div className="card-title-row">
                  <h3>GCC Compliance</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Saudi Arabia and GCC regulatory alignment with local governance, enterprise risk management, and certified delivery.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
            <p>Common questions about multi-cloud platforms, hybrid operations, FinOps, compliance, and enterprise delivery in Saudi Arabia.</p>
          </div>

          <div className="faq-accordion reveal">
            {faqItems.map((item, index) => {
              const isOpen = index === activeFaq;
              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`platform-faq-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div id={`platform-faq-answer-${index}`} className="faq-answer">
                    <div className="faq-answer-inner">
                      <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Looking for a unified multi-cloud operating model?</h2>
            <p>
              GulfStream helps Saudi enterprises manage AWS, Azure, Google Cloud, and Oracle environments through centralized operations, governance, optimization, and security frameworks.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Talk to Cloud Specialists
              </Link>
              <Link href="/book-a-review" className="btn btn-white-outline btn-lg">
                Request Cloud Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlatformContent;

