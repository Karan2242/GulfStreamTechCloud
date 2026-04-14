'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const AzureManagedContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Cloud Managed Services</Link><span>›</span><span>Azure</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🔷 Azure Managed Services</div>
          <h1 className="display-lg">Azure Managed Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technology is a trusted managed cloud services provider for Microsoft Azure in Saudi Arabia. We deliver comprehensive Azure cloud management — from VMs, AKS, and Azure SQL to Entra ID and Defender — with 24/7 cloud monitoring services, enterprise governance, and FinOps consulting to cut costs by up to 29%.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Azure Assessment</Link>
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
            <h2 className="display-md">Azure Challenges Enterprises Face</h2>
            <p>Managing Azure environments at scale across Riyadh, Jeddah, and Dammam demands specialized expertise. Here are the most common pain points:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">💸</div><h3>Azure Cost Sprawl</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Uncontrolled Azure subscriptions, untagged resources, idle VMs, and oversized databases result in ballooning monthly bills with unclear attribution.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔐</div><h3>Identity &amp; Access Risks</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Misconfigured Azure Entra ID roles, over-privileged service principals, and weak conditional access policies create critical vulnerabilities.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>Compliance Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Meeting NCA ECC, ISO 27001, and industry-specific compliance in Saudi Arabia across Azure requires specialized governance expertise.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>Monitoring Gaps</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without structured Azure Monitor and Log Analytics, critical alerts go undetected until incidents impact business operations.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔄</div><h3>Hybrid Complexity</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managing hybrid environments with on-premises Active Directory, Azure Arc, and ExpressRoute requires deep multi-domain expertise.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Skills &amp; Resource Gap</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Azure&apos;s broad service catalog requires specialist expertise across infrastructure, data, security, and DevOps — difficult to maintain in-house.</p>
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Comprehensive Azure Well-Architected review covering cost, security, reliability, operational excellence, and performance efficiency.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We implement Azure Monitor, Defender for Cloud, Azure Policy, tagging governance, and automated alerting for a solid operational foundation.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Management</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>24/7 operations — handling incidents, optimizing costs, patching vulnerabilities, and providing monthly executive reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on Azure</h2>
            <p>Full-stack Azure managed services covering every layer of your Microsoft cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Virtual Machines</li><li>Azure Kubernetes Service (AKS)</li><li>Azure App Service</li><li>Azure Functions</li><li>Azure Container Instances</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure SQL Database</li><li>Azure Cosmos DB</li><li>Azure Database for PostgreSQL</li><li>Azure Cache for Redis</li><li>Azure Synapse Analytics</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Security &amp; Identity</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Entra ID (AAD)</li><li>Microsoft Defender for Cloud</li><li>Azure Sentinel (SIEM)</li><li>Azure Key Vault</li><li>Azure Policy &amp; Blueprints</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Virtual Network (VNet)</li><li>Azure ExpressRoute</li><li>Azure Application Gateway</li><li>Azure Front Door / CDN</li><li>Azure Private Link</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Blob Storage</li><li>Azure Files</li><li>Azure Managed Disks</li><li>Azure Backup</li><li>Azure Archive Storage</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Azure Cost Management</li><li>Azure Reservations</li><li>Azure Advisor</li><li>Tag-Based Cost Attribution</li><li>Budget Alerts &amp; Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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

      {/* USE CASES & INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏢 Use Cases</div>
            <h2 className="display-md">Azure Use Cases &amp; Industries We Serve</h2>
            <p>Our Azure managed services support enterprise workloads across diverse industries in Saudi Arabia and the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>HIPAA-aligned Azure environments for electronic health records, medical imaging, and telemedicine platforms with Saudi data residency compliance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Financial Services</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Secure Azure infrastructure for core banking, payment processing, and regulatory reporting aligned with SAMA requirements in Riyadh.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 Retail &amp; E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Scalable Azure architectures for e-commerce platforms, omnichannel retail, and customer analytics powering businesses across Jeddah and Dammam.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>NCA ECC-compliant Azure environments for government digitalization, citizen portals, and Vision 2030 smart city initiatives.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 Tech &amp; SaaS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>AKS-based microservices, Azure DevOps pipelines, and hybrid cloud architectures for SaaS companies scaling in the Middle East market.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🎓 Education</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Azure-powered learning management systems, student portals, and research computing for universities and institutions across Saudi Arabia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Azure Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Monitor</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Observability &amp; Alerting</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Defender for Cloud</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Security Posture</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Policy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Governance Engine</p>
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
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Sentinel</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>SIEM &amp; SOAR</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure DevOps</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>CI/CD Pipelines</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Arc</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Hybrid Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* AZURE MANAGED SERVICES IN RIYADH */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Azure Managed Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud management company based in Saudi Arabia, GulfStream Technology provides Azure managed services tailored to enterprises in Riyadh, Jeddah, and Dammam. With Azure&apos;s dedicated Saudi cloud region, we help organizations maintain data residency compliance while leveraging the full power of the Microsoft cloud ecosystem.</p>
            <p style={{ marginTop: '16px' }}>Our Riyadh-based team delivers 24/7 cloud monitoring services, hybrid cloud management with Azure Arc, enterprise identity governance through Entra ID, and cloud cost optimization services — ensuring your Azure investment supports Vision 2030 digital transformation objectives. We also offer seamless integration with <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> for multi-cloud strategies.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Azure?</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🇸🇦 Saudi Azure Specialists</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified Azure architects based in Riyadh, ensuring local compliance knowledge, Arabic support, and time-zone aligned operations.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📊 FinOps-First Management</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Every engagement includes structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> with measurable cost reduction targets from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🔔 True 24/7 NOC Operations</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Our NOC monitors your Azure environment around the clock with human-backed alerting and incident response — not just automated emails.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📋 Outcome-Based SLAs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We commit to specific uptime, cost, and performance targets. See also our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> managed services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏅 Certifications</div>
            <h2 className="display-md">Certified Azure Expertise</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔷</div>
              <h3 style={{ fontSize: '.85rem' }}>Azure Solutions Architect Expert</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '.85rem' }}>Azure Security Engineer Associate</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔧</div>
              <h3 style={{ fontSize: '.85rem' }}>Azure DevOps Engineer Expert</h3>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What are Azure Managed Services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Azure Managed Services involve outsourcing the management of your Microsoft Azure environment to certified cloud experts. This includes 24/7 monitoring, security governance with Defender for Cloud, cost optimization, Entra ID management, patching, and incident response.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much do Azure Managed Services cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs depend on your environment complexity, number of subscriptions, and support level. GulfStream Technology offers flexible pricing from basic monitoring to fully managed operations. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link> for a tailored quote.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How quickly can you reduce our Azure costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Most enterprises see a 25-35% reduction in Azure spend within 90 days through rightsizing, Azure Reservations, Hybrid Benefit optimization, and elimination of idle resources using our FinOps methodology.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Why choose Azure cloud management in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Azure has a dedicated cloud region in Saudi Arabia, making it ideal for data residency. A local managed services provider ensures NCA ECC compliance, low-latency support, and deep understanding of the Saudi enterprise market.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you support hybrid Azure environments?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We specialize in managing hybrid Azure environments including Azure Arc, ExpressRoute, Active Directory synchronization, and Azure Stack HCI — ensuring seamless integration between on-premises and cloud infrastructure.</p>
            </div>
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
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AzureManagedContent;
