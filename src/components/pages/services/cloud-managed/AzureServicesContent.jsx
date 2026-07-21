'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const AzureServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const azureFaqs = [
    {
      question: 'What are Azure Managed Services?',
      answer: 'Azure Managed Services means outsourcing your Azure operations, security, monitoring, and optimization to certified cloud engineers. We handle everything from VMs and databases to Kubernetes, security, and cost optimization.',
    },
    {
      question: 'How much do Azure Managed Services cost in Saudi Arabia?',
      answer: 'Costs vary with subscription count and support requirements. We provide a tailored quote after a free assessment. Most clients see ROI within 90 days through cost savings alone.',
    },
    {
      question: 'How quickly can you reduce Azure costs?',
      answer: 'Most Azure clients see 25-35% savings within 90 days through reserved instances, hybrid benefit optimization, rightsizing, and automated governance policies.',
    },
    {
      question: 'Do you support hybrid Azure environments?',
      answer: 'Yes. We support complete hybrid environments with Azure hybrid benefits, Azure Arc for on-premises servers, ExpressRoute for connectivity, and on-premises/cloud integration.',
    },
    {
      question: 'Why choose GulfStream for Azure in Saudi Arabia?',
      answer: 'We combine local Saudi expertise, Microsoft Azure certifications, compliance experience with NCA ECC regulations, and 24/7 operations for reliable hybrid cloud management.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><Link href="/services/cloud-managed-services/microsoft-cloud">Microsoft Cloud</Link><span>›</span><span>Azure Services</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Azure Managed Services in Saudi Arabia</span></h1>
          <p>GulfStream Technologies is a trusted managed cloud services provider for Microsoft Azure in Saudi Arabia. We deliver comprehensive Azure cloud management — from VMs, AKS, and Azure SQL to Entra ID and Defender — with 24/7 cloud monitoring services, enterprise governance, and FinOps consulting to cut costs by up to 29%.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Azure Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

     

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Azure Challenges Enterprises Face</h2>
            <p>Managing Azure environments at scale across Riyadh, Jeddah, and Dammam demands specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Azure Cost Sprawl</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Uncontrolled Azure subscriptions, untagged resources, idle VMs, and oversized databases result in ballooning monthly bills with unclear attribution.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>Identity &amp; Access Risks</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Misconfigured Azure Entra ID roles, over-privileged service principals, and weak conditional access policies create critical vulnerabilities.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row"><h3>Compliance Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Meeting NCA ECC, ISO 27001, and industry-specific compliance in Saudi Arabia across Azure requires specialized governance expertise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row"><h3>Monitoring Gaps</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without structured Azure Monitor and Log Analytics, critical alerts go undetected until incidents impact business operations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Hybrid Complexity</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Managing hybrid environments with on-premises Active Directory, Azure Arc, and ExpressRoute requires deep multi-domain expertise.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row"><h3>Skills &amp; Resource Gap</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Azure&apos;s broad service catalog requires specialist expertise across infrastructure, data, security, and DevOps — difficult to maintain in-house.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on Azure</h2>
            <p>Full-stack Azure managed services covering every layer of your Microsoft cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Virtual Machines</li><li>Azure Kubernetes Service (AKS)</li><li>Azure App Service</li><li>Azure Functions</li><li>Azure Container Instances</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure SQL Database</li><li>Azure Cosmos DB</li><li>Azure Database for PostgreSQL</li><li>Azure Cache for Redis</li><li>Azure Synapse Analytics</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Security &amp; Identity</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Entra ID (AAD)</li><li>Microsoft Defender for Cloud</li><li>Azure Sentinel (SIEM)</li><li>Azure Key Vault</li><li>Azure Policy &amp; Blueprints</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Virtual Network (VNet)</li><li>Azure ExpressRoute</li><li>Azure Application Gateway</li><li>Azure Front Door / CDN</li><li>Azure Private Link</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Blob Storage</li><li>Azure Files</li><li>Azure Managed Disks</li><li>Azure Backup</li><li>Azure Archive Storage</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Cost Management</li><li>Azure Reservations</li><li>Azure Advisor</li><li>Tag-Based Cost Attribution</li><li>Budget Alerts &amp; Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream Azure Management Framework</h2>
            <p>Our proven methodology ensures rapid value delivery for Azure environments across the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Comprehensive Azure Well-Architected review covering cost, security, reliability, operational excellence, and performance efficiency.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We implement Azure Monitor, Defender for Cloud, Azure Policy, tagging governance, and automated alerting for a solid operational foundation.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Management</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>24/7 operations — handling incidents, optimizing costs, patching vulnerabilities, and providing monthly executive reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" >
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">↓29%</span>
              <div className="metric-label">Average Azure Cost Reduction</div>
              <div className="metric-sub">Achieved within 90 days</div>
            </div>
            <div className="metric-item"><span className="metric-value">99.99%</span>
              <div className="metric-label">Application Uptime</div>
              <div className="metric-sub">Multi-region HA architectures</div>
            </div>
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Compliance Audit Readiness</div>
              <div className="metric-sub">NCA ECC &amp; ISO 27001 aligned</div>
            </div>
            <div className="metric-item"><span className="metric-value">24/7</span>
              <div className="metric-label">Azure NOC Monitoring</div>
              <div className="metric-sub">Human-backed alerting</div>
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
            {azureFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`azure-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`azure-faq-answer-${index}`}
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
            <h2 className="display-md">Optimize Your Azure Investment</h2>
            <p>Get a free Azure environment assessment and discover how much you can save while improving security and performance across your Microsoft cloud.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Azure Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AzureServicesContent;
