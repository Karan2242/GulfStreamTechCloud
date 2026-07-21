'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const MicrosoftCloudContent = () => {
  useReveal();

  const services = [
    {
      id: 'azure-services',
      title: 'Azure Services',
      icon: '/assets/images/azure.png',
      description: 'Comprehensive Azure managed services covering VMs, AKS, Azure SQL, Entra ID, Defender for Cloud, and hybrid environments. 24/7 monitoring, FinOps optimization, and enterprise governance for Saudi enterprises.',
      features: [
        'Virtual Machines & Scale Sets',
        'Azure Kubernetes Service (AKS)',
        'Azure SQL & Cosmos DB',
        'Entra ID & Access Management',
        'Defender for Cloud Security',
        'Azure Monitor & Analytics',
        'Cost Management & Advisor',
        'Hybrid Cloud Integration',
      ],
      href: '/services/cloud-managed-services/microsoft-cloud/azure-services',
      ctaText: 'Explore Azure Services',
    },
    {
      id: 'microsoft-365-services',
      title: 'Microsoft 365 Services',
      icon: '/assets/images/m365.png',
      description: 'End-to-end Microsoft 365 management including Exchange Online, Teams, SharePoint, OneDrive, and Microsoft Entra ID. Compliance, security, license optimization, and user support for enterprises across Saudi Arabia.',
      features: [
        'Exchange Online Management',
        'Teams Administration & Governance',
        'SharePoint & OneDrive Optimization',
        'Microsoft Entra ID (Azure AD)',
        'Microsoft Defender for Microsoft 365',
        'Compliance Management',
        'License & Cost Optimization',
        'End User Support & Training',
      ],
      href: '/services/cloud-managed-services/microsoft-cloud/microsoft-365-services',
      ctaText: 'Explore Microsoft 365 Services',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><span>Microsoft Cloud</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Microsoft Cloud Services in Saudi Arabia</span></h1>
          <p>GulfStream Technologies provides comprehensive managed services for your entire Microsoft cloud ecosystem — from Azure infrastructure to Microsoft 365 productivity and collaboration tools. We deliver enterprise-grade management, security, and compliance across all Microsoft platforms with 24/7 NOC operations and FinOps-driven cost optimization.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Free Microsoft Cloud Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

       <CloudSubNav />

      {/* WHY MICROSOFT CLOUD */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Why Microsoft Cloud</div>
            <h2 className="display-md">Enterprise Scale. Integrated. Secure.</h2>
            <p>Microsoft Azure and Microsoft 365 power enterprise operations worldwide. GulfStream brings Saudi expertise, certifications, and compliance knowledge to optimize your Microsoft cloud investment.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3>Integrated Ecosystem</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Seamless integration between Azure infrastructure, Microsoft 365 productivity, and on-premises environments through hybrid cloud architecture.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🛡️</div>
                <h3>Enterprise Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>End-to-end security from Azure Defender for Cloud to Microsoft Defender for Microsoft 365, with compliance aligned to NCA ECC and ISO 27001.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <h3>Cost Optimization</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>FinOps-driven strategies for both Azure infrastructure and Microsoft 365 licensing reduce costs by 25-40% while improving utilization.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3>Unified Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Single point of management for Azure resources, Microsoft 365 tenants, and hybrid on-premises infrastructure through our integrated platform.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <h3>Saudi Expertise</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Local Riyadh-based team with deep knowledge of Saudi regulatory requirements, compliance, and enterprise cloud adoption patterns.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">24/7</div>
                <h3>24/7 Operations</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Round-the-clock network operations center (NOC) monitoring, incident response, and proactive management across both Azure and Microsoft 365.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OPTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Our Microsoft Services</div>
            <h2 className="display-md">Choose Your Microsoft Cloud Services</h2>
            <p>Whether you need enterprise Azure infrastructure, Microsoft 365 management, or both integrated together, we deliver expert-managed solutions.</p>
          </div>

          <div className="grid-2 reveal" style={{ marginTop: '48px', gap: '32px' }}>
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="service-option-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'all var(--transition)', padding: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '16px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: 0, fontWeight: 700, flex: 1 }}>{service.title}</h3>
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      style={{ objectFit: 'contain', height: '72px', width: 'auto', flexShrink: 0 }}
                      width={72}
                      height={72}
                    />
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                    {service.description}
                  </p>
                  <div style={{ marginBottom: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255, 107, 53, 0.1)' }}>
                    <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '12px', textTransform: 'uppercase' }}>Key Capabilities</h4>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.features.map((feature) => (
                        <li key={feature} style={{ fontSize: '.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ color: 'var(--accent)' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginTop: 'auto', color: 'var(--accent)', fontSize: '.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{service.ctaText}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MICROSOFT CLOUD FOR KSA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎖️ Microsoft Cloud in Saudi Arabia</div>
            <h2 className="display-md">Enterprise Adoption Made Simple</h2>
            <p>Saudi enterprises trust Microsoft technologies. We make adoption, management, and optimization effortless at scale.</p>
          </div>
          <div className="grid-4 reveal" style={{ gap: '20px' }}>
            <div className="card premium-card" style={{ padding: '24px', border: '1px solid rgba(255,107,53,0.16)', boxShadow: '0 10px 32px rgba(0, 0, 0, 0.12)' }}>
              <div className="card-header" style={{ marginBottom: '10px' }}>
                <div className="icon-box">🏢</div>
                <h3 style={{ marginBottom: 0, fontSize: '1.05rem' }}>Enterprise Scale</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem', lineHeight: 1.6 }}>Startups to enterprises, our Microsoft cloud operations scale seamlessly with strong governance, support, & enterprise-grade security built in.</p>
            </div>
            <div className="card premium-card" style={{ padding: '24px', border: '1px solid rgba(255,107,53,0.16)', boxShadow: '0 10px 32px rgba(0, 0, 0, 0.12)' }}>
              <div className="card-header" style={{ marginBottom: '10px' }}>
                <div className="icon-box">🇸🇦</div>
                <h3 style={{ marginBottom: 0, fontSize: '1.05rem' }}>Saudi Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem', lineHeight: 1.6 }}>Our Saudi team guides NCA, Absher, GDPR, and industry regulations, keeping Microsoft deployments compliant, secure, and audit-ready from launch.</p>
            </div>
            <div className="card premium-card" style={{ padding: '24px', border: '1px solid rgba(255,107,53,0.16)', boxShadow: '0 10px 32px rgba(0, 0, 0, 0.12)' }}>
              <div className="card-header" style={{ marginBottom: '10px' }}>
                <div className="icon-box">📱</div>
                <h3 style={{ marginBottom: 0, fontSize: '1.05rem' }}>Unified Communication</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem', lineHeight: 1.6 }}>Teams, Exchange, and SharePoint improve collaboration while we manage governance, adoption, and security so your workforce stays productive.</p>
            </div>
            <div className="card premium-card" style={{ padding: '24px', border: '1px solid rgba(255,107,53,0.16)', boxShadow: '0 10px 32px rgba(0, 0, 0, 0.12)' }}>
              <div className="card-header" style={{ marginBottom: '10px' }}>
                <div className="icon-box">🔐</div>
                <h3 style={{ marginBottom: 0, fontSize: '1.05rem' }}>Integrated Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem', lineHeight: 1.6 }}>Azure and Microsoft 365 work together under one security model, helping you simplify identity, threat detection, and compliance management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Ready to Optimize Your Microsoft Cloud?</h2>
            <p>Get a comprehensive assessment of your Azure infrastructure and Microsoft 365 environment. Discover optimization opportunities, security improvements, and cost savings specific to your organization.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MicrosoftCloudContent;
