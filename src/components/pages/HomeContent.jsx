'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const HomeContent = () => {
  const router = useRouter();
  useReveal();

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  

    const homeFaqs = [
    {
      question: 'What are Managed Cloud Services?',
      answer: 'Managed Cloud Services involve outsourcing cloud operations, security, monitoring, and optimization to certified experts.',
    },
    {
      question: 'How much can you save on cloud costs?',
      answer: 'Our clients typically save 25-35% on cloud spend through rightsizing, reserved capacity, and ongoing FinOps governance.',
    },
    {
      question: 'How quickly can you see results?',
      answer: 'Most organizations see measurable savings and stability improvements within 60-90 days of starting with us.',
    },
    {
      question: 'Do you support AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud?',
      answer: 'Yes. We manage AWS, Microsoft Cloud, Google Cloud, Oracle Cloud, and hybrid environments with unified visibility and control.',
    },
    {
      question: 'Why choose GulfStream for cloud management in Saudi Arabia?',
      answer: 'A local Saudi team with multi-cloud certifications, FinOps expertise, and Saudi compliance experience delivers faster outcomes.',
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid"> 
            <div className="hero-content">
              <div className="hero-badge">
                Saudi Arabia&apos;s Multi-Cloud Partner
              </div>
              <div style={{ width: '40px', height: '3px', backgroundColor: '#00AEEF', marginBottom: '20px' }}></div>
              <h1 className="hero-title">
                Multi-Cloud Managed Services in Saudi Arabia
              </h1>
              <p className="hero-subtitle">AWS · Microsoft · Google Cloud · Oracle Cloud</p>
              <p className="hero-desc">
We reduce cloud costs, improve reliability, and scale operations 
      for Saudi SMBs and mid-market enterprises — with SLA-backed, 
      FinOps-driven managed cloud.              </p>
              <div className="hero-actions">
                <Link href="/book-a-review" className="btn btn-primary btn-lg">
                  Get a Free Cloud Cost & Ops Review →
                </Link>
                <Link href="/contact" className="btn btn-cta-white btn-lg">
                  <span className="gradient-text">Book a Call →</span>
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">SLA-Backed Operations</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">FinOps Certified</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">24/7 NOC Support</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-background-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BAR */}
      <div className="trust-bar" >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="trust-item">
              <div className="trust-icon">💰</div>
              <div>
                <div className="trust-label">FinOps-Driven Operations</div>
                <div className="trust-desc">Continuous cloud cost optimization</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <div>
                <div className="trust-label">Security-First Architecture</div>
                <div className="trust-desc">Proactive security and compliance</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🇸🇦</div>
              <div>
                <div className="trust-label">Saudi Compliance Expertise</div>
                <div className="trust-desc">NCA ECC and data residency</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">☁️</div>
              <div>
                <div className="trust-label">Multi-Cloud Certified Team</div>
                <div className="trust-desc">AWS, Azure, GCP, Oracle</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📈</div>
              <div>
                <div className="trust-label">Outcome-Based Delivery</div>
                <div className="trust-desc">Focused on measurable outcomes</div>
              </div>
            </div>
          </div>
          <div className="marquee-track" aria-hidden="true">
            <div className="trust-item">
              <div className="trust-icon">💰</div>
              <div>
                <div className="trust-label">FinOps-Driven Operations</div>
                <div className="trust-desc">Continuous cloud cost optimization</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <div>
                <div className="trust-label">Security-First Architecture</div>
                <div className="trust-desc">Proactive security and compliance</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🇸🇦</div>
              <div>
                <div className="trust-label">Saudi Compliance Expertise</div>
                <div className="trust-desc">NCA ECC and data residency</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">☁️</div>
              <div>
                <div className="trust-label">Multi-Cloud Certified Team</div>
                <div className="trust-desc">AWS, Azure, GCP, Oracle</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📈</div>
              <div>
                <div className="trust-label">Outcome-Based Delivery</div>
                <div className="trust-desc">Focused on measurable outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Our Services</div>
            <h2 className="display-md">What We Deliver</h2>
            <p >Explore our full range of managed cloud services — each designed to deliver measurable outcomes for Saudi enterprises.</p>
          </div>
          <div className="services-grid">
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/services/cloud-managed-services')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-monitoring.png" alt="Managed cloud monitoring dashboard" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Managed Cloud Services</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>End-to-end managed cloud operations across AWS, Microsoft, Google Cloud & Oracle Cloud — 24/7 monitoring, incident response, security governance, and FinOps cost optimization for your entire cloud estate in Saudi Arabia.</p>
                  <Link href="/services/cloud-managed-services" className="btn btn-accent btn-sm">Optimize Your Cloud Operations →</Link>

                </div>
              </div>
            </div>
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/services/finops-cost-optimization')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-finops.png" alt="FinOps cost optimization analytics" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud FinOps & Cost Optimization</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Apply the FinOps framework to gain full visibility into cloud spend, eliminate waste, rightsize resources, and achieve sustainable cost governance — delivering an average 30% cost reduction across your cloud estate.</p>
                  <Link href="/services/finops-cost-optimization" className="btn btn-accent btn-sm">Unlock Cloud Cost Savings →</Link>

                </div>
              </div>
            </div>
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/services/cloud-billing-management')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-billing.png" alt="Cloud billing and chargeback reporting" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Billing Management</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Centralized billing, chargeback reporting, and spend analytics across multiple accounts and teams. Gain accurate cost attribution so that each and every money spent on cloud is justified and trackable.</p>
                  <Link href="/services/cloud-billing-management" className="btn btn-accent btn-sm">Simplify Cloud Billing & Spend →</Link>
                </div>
              </div>
            </div>
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/services/cloud-migration')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-migration.png" alt="Cloud migration and modernization roadmap" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Migration & Modernization</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Migrate legacy on-premises workloads to AWS, Microsoft, Google Cloud, or Oracle Cloud with zero business disruption. We design, plan, and execute cloud migrations following proven rehost, replatform, and refactor strategies.</p>
                  <Link href="/services/cloud-migration" className="btn btn-accent btn-sm">Accelerate Your Cloud Migration→</Link>
                </div>
              </div>
            </div>
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/services/cloud-security-governance')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-security.png" alt="Cloud security governance and compliance" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Security & Governance</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Enterprise-level cloud security including IAM governance, NCA ECC compliance automation, security posture management, and continuous threat detection across AWS, Microsoft, Google Cloud, and Oracle Cloud environments.</p>
                  <Link href="/services/cloud-security-governance" className="btn btn-accent btn-sm">Strengthen Your Cloud Security →</Link>
                </div>
              </div>
            </div>
            <div className="service-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={() => router.push('/contact')}>
              <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-custom.png" alt="Custom cloud solutions architecture" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Custom Cloud Solutions</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Need a cloud service tailored to your specific requirements? We design and deliver custom cloud solutions for enterprises across Saudi Arabia — from Kubernetes management to multi-cloud architecture.</p>
                  <Link href="/services/custom-cloud-solutions" className="btn btn-accent btn-sm">Tailor Your Cloud Experience →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM PARTNERS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">☁️ Supported Platforms</div>
            <h2 className="display-md">Multi-Cloud Platform Support</h2>
            <p>We are certified partners and specialists across all major cloud providers. Unified expertise for AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud environments in Saudi Arabia.</p>
          </div>
          <div className="grid-4 reveal">
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-aws.png"
                  alt="Amazon Web Services"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Amazon Web Services</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>AWS management including EC2 optimization, S3 storage governance, cost reduction, and multi-region disaster recovery with certified AWS architects.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/services/cloud-managed-services/aws" className="btn btn-accent btn-sm">Explore AWS Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-azure.png"
                  alt="Microsoft (Azure/M365)"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Microsoft (Azure/M365)</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>End-to-end Azure management covering VMs, App Services, databases, security, and hybrid cloud integration with proven Microsoft certification expertise.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/services/cloud-managed-services/microsoft-cloud" className="btn btn-accent btn-sm">Explore Microsoft Cloud Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-gcp.png"
                  alt="Google Cloud"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Google Cloud</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Advanced GCP operations including Compute Engine, BigQuery analytics, Kubernetes clusters, and data residency compliance for Saudi organizations.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/services/cloud-managed-services/google" className="btn btn-accent btn-sm">Explore Google Cloud Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-oracle.png"
                  alt="Oracle Cloud"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Oracle Cloud</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Specialized Oracle Cloud expertise for database workloads, enterprise applications, and hybrid infrastructure with certified Oracle specialists.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/services/cloud-managed-services/oracle" className="btn btn-accent btn-sm">Explore Oracle Cloud Services →</Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* WHY GULFSTREAM */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">The GulfStream Technologies Difference</h2>
            <p>We&apos;re not just another cloud vendor. We&apos;re your strategic partner — FinOps-driven, security-first, and accountable to your outcomes.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏢</div>
                <div className="card-title-row">
                  <h3>Not a Generic MSP</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8 rem', color: 'var(--text-secondary)' }}>Custom cloud operations tailored to your workloads, compliance requirements, and long-term business growth.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row">
                  <h3>FinOps at its Core</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Continuous cloud cost optimization focused on reducing waste and maximizing operational efficiency and ROI.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row">
                  <h3>Security-First Architecture</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Proactive cloud security with governance, encryption, compliance monitoring, and continuous threat detection capabilities.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <div className="card-title-row">
                  <h3>Saudi Compliance Expertise</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Expertise in NCA ECC, Saudi regulations, data residency, and Vision 2030 cloud transformation initiatives.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">☁️</div>
                <div className="card-title-row">
                  <h3>Multi-Cloud Certified Team</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Certified AWS, Microsoft, Google Cloud, and Oracle specialists managing unified multi-cloud enterprise environments efficiently.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">✅</div>
                <div className="card-title-row">
                  <h3>Outcome-Based Contracts</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>SLA-driven engagements focused on measurable performance, reliability, optimization targets, and long-term business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏭 Industries</div>
            <h2 className="display-md">Industry-Specific Cloud Solutions in Saudi Arabia</h2>
            <p>We deliver specialized cloud strategies addressing the unique regulatory, operational, and scalability challenges of <Link href="/industries/healthcare" style={{ color: 'var(--accent)' }}>healthcare</Link>, <Link href="/industries/retail" style={{ color: 'var(--accent)' }}>retail</Link>, <Link href="/industries/logistics" style={{ color: 'var(--accent)' }}>logistics</Link>, and more — built for Saudi compliance requirements.</p>
          </div>
          <div className="grid-3 reveal">
              <Link href="/industries/retail" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">🛒</div>
                    <h3 style={{ fontSize: '0.9rem' }}>Retail</h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Scale cloud infrastructure seamlessly during Ramadan and peak seasons, enable omnichannel commerce, and optimize inventory and analytics workloads across AWS, Microsoft, Google, and Oracle Cloud.</p>
                </div>
              </Link>
              <Link href="/industries/healthcare" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">🏥</div>
                    <h3 style={{ fontSize: '0.9rem' }}>Healthcare</h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>HIPAA-aligned cloud infrastructure ensuring patient data security, high availability for clinical applications, and compliant cloud storage — built for Saudi healthcare regulations.</p>
                </div>
              </Link>
              <Link href="/industries/logistics" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">🚛</div>
                    <h3 style={{ fontSize: '0.9rem' }}>Logistics</h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Power real-time fleet tracking, IoT data processing, supply chain analytics, and warehouse management systems with resilient, always-on cloud infrastructure.</p>
                </div>
              </Link>
              <Link href="/industries/tech-saas" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">💻</div>
                    <h3 style={{ fontSize: '0.9rem' }}>SaaS Infrastructure</h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Build, deploy, and scale SaaS products on optimized cloud infrastructure. Managed Kubernetes, CI/CD pipelines, and multi-tenant environments with FinOps cost governance.</p>
                </div>
              </Link>
              <Link href="/industries/professional-services" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">🏢</div>
                    <h3 style={{ fontSize: '0.9rem' }}>Professional Services </h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Secure, compliant cloud environments for consulting, legal, and financial firms — with zero-trust security, ISO 27001 alignment, and encrypted document management.</p>
                </div>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="industry-card industry-cta" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="industry-card-header">
                    <div className="industry-icon">🌐</div>
                    <h3 style={{ fontSize: '0.9rem' }}>Your Industry</h3>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Don&apos;t see your sector? We work with enterprises across all verticals in Saudi Arabia. Talk to our cloud specialists for a tailored approach.</p>
                  <span className="btn btn-accent btn-sm">Get in Touch</span>
                </div>
              </Link>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">💬 Client Feedback</div>
            <h2 className="display-md">What Clients Say After Their Free Review</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card testimonial-card">
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>&ldquo;The free cloud review identified SAR 42,000 in monthly savings we had no idea existed. The GulfStream team was thorough, fast, and the recommendations were immediately actionable.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div>
                  <div className="author-name">Ahmed Khalid</div>
                  <div className="author-title">CTO, Leading Saudi Retailer</div>
                </div>
              </div>
            </div>
            <div className="card testimonial-card">
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>&ldquo;I expected a sales pitch. What I got was a 35-page detailed assessment of our Azure environment with specific remediation steps. We implemented 80% of the recommendations ourselves — the value was immediate.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">FM</div>
                <div>
                  <div className="author-name">Fatima Mahmoud</div>
                  <div className="author-title">IT Director, Healthcare Group</div>
                </div>
              </div>
            </div>
            <div className="card testimonial-card">
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>&ldquo;The security findings alone in the free review justified engaging GulfStream. Three publicly accessible S3 buckets we didn&apos;t know about. That&apos;s the kind of expertise that matters.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">SR</div>
                <div>
                  <div className="author-name">Salman Al-Rashid</div>
                  <div className="author-title">Cloud Architect, SaaS Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ SECTION */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
            <p>Common questions about Managed Cloud Services in Saudi Arabia.</p>
          </div>
          <div className="faq-accordion reveal">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`home-faq-answer-${index}`}
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

      {/* FINAL CTA BANNER */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Is Your Cloud Environment Performing at Its Best?</h2>
            <p style={{ fontSize: '.8rem' }}>Most enterprises are overpaying by 30–40% on cloud. Our free Cloud Assessment identifies cost savings, security gaps, and performance opportunities across AWS, Microsoft , Google Cloud, and Oracle Cloud — at no cost and no commitment.</p>

            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Your Free Cloud Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to a Cloud Expert</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomeContent;
