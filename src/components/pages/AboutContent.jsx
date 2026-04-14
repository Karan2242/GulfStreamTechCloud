'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const AboutContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>About Us</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🏢 About GulfStream Technology</div>
          <h1 className="display-lg">
            Saudi Arabia&apos;s Specialist<br />
            <span className="text-gradient">Cloud Management Partner</span>
          </h1>
          <p>
            GulfStream Technology is a leading cloud management company in Saudi Arabia — specializing in AWS managed services, Azure consulting, FinOps cost optimization, and cloud security governance for enterprises across Riyadh, Jeddah, and Dammam.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="reveal">
            <div>
              <div className="badge badge-accent" style={{ marginBottom: '16px' }}>🌊 Our Story</div>
              <h2 className="display-sm" style={{ marginBottom: '20px' }}>Built by Cloud Engineers, for Cloud-Forward Enterprises</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>
                GulfStream Technology was founded by a team of senior cloud engineers and certified AWS architects who spent years working inside enterprise cloud environments across Saudi Arabia and the GCC. We saw the same problems repeated across every industry: spiraling cloud costs, security misconfigurations, fragmented visibility, and under-resourced IT teams struggling to keep pace with cloud complexity.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>
                We built GulfStream Technology to solve exactly those problems — combining deep <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure consulting</Link> expertise with a structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps discipline</Link> and a proactive, always-on service model that enterprises can trust.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Today, we manage cloud environments for enterprises across retail, healthcare, SaaS, logistics, and professional services — delivering an average of 32% cloud cost reduction and 99.99% uptime across our entire client portfolio.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>7+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Years of Cloud Operations Experience</div>
              </div>
              <div className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>80+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Enterprise Cloud Certifications</div>
              </div>
              <div className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>40+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Active Enterprise Clients</div>
              </div>
              <div className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>SAR 50M+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Cloud Costs Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏆 Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Cloud Management in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>☁️ Multi-Cloud Experts</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>Our team of certified cloud architects across AWS, Azure, Google Cloud, and Oracle Cloud delivers enterprise-grade <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>cloud managed services</Link> with 24/7 monitoring, automated runbooks, and proactive optimization — tailored for Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💰 FinOps-Driven Savings</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>Our FinOps certified practitioners apply <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization best practices</Link> — rightsizing, RI planning, Spot optimization, and tagging governance — delivering 28-35% savings across engagements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🔒 Security &amp; Compliance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>We implement <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link> aligned with NCA ECC, ISO 27001, HIPAA, and SOC 2 — ensuring your cloud meets Saudi regulatory requirements from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🇸🇦 Saudi-Based Team</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>Headquartered in Riyadh with engineers supporting enterprises across Jeddah, Dammam, and the wider GCC — we understand Saudi business culture, regulatory landscape, and local cloud requirements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📊 Measurable ROI</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>Every engagement is backed by clear success metrics. Our clients see measurable cloud savings within 60-90 days — see our <Link href="/case-studies" style={{ color: 'var(--accent)' }}>case studies</Link> for documented results.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🤝 Partnership Model</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.7 }}>We work as an extension of your team — not a black-box vendor. Monthly reports, quarterly architecture reviews, and dedicated account management keep you in control. See our <Link href="/pricing" style={{ color: 'var(--accent)' }}>transparent pricing</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Our Values</div>
            <h2 className="display-md">What Drives Us</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: '28px' }}>
              <div className="card-header">
                <div className="icon-box">🏆</div>
                <h3 style={{ fontSize: '.95rem' }}>Excellence First</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6 }}>We set technical and service standards that exceed industry norms. Average is not an option — we optimize for cloud outcomes our clients can measure.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <div className="card-header">
                <div className="icon-box">🙏</div>
                <h3 style={{ fontSize: '.95rem' }}>Client Accountability</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6 }}>We own our results. Every engagement is backed by clear success metrics, regular reporting, and a commitment to delivering documented ROI.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <h3 style={{ fontSize: '.95rem' }}>Partnership Mindset</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6 }}>We work as an extension of your team — understanding your business goals, communicating proactively, and always acting in your long-term interest.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Security by Default</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6 }}>Security is never an afterthought. Every cloud design, configuration, and change we make defaults to the most secure posture — without compromising agility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Work with Cloud Experts in Saudi Arabia?</h2>
            <p>Book a free Cloud Assessment and discover how GulfStream Technology can reduce your cloud costs, strengthen security, and scale your infrastructure.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
              <Link href="/services" className="btn-white-outline">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏅 Credentials &amp; Certifications</div>
            <h2 className="display-md">Certified Cloud Expertise You Can Trust</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>☁️</div>
              <h3 style={{ fontSize: '.95rem' }}>AWS Advanced Consulting Partner</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.82rem' }}>Recognized AWS partner with validated cloud expertise</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🔷</div>
              <h3 style={{ fontSize: '.95rem' }}>Microsoft Azure Expert MSP</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.82rem' }}>Microsoft-verified managed service provider status</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>📊</div>
              <h3 style={{ fontSize: '.95rem' }}>FinOps Foundation Member</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.82rem' }}>Certified practitioners of the FinOps framework</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🛡️</div>
              <h3 style={{ fontSize: '.95rem' }}>ISO 27001 Certified Operations</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.82rem' }}>Information security management certification</p>
            </div>
          </div>
          <div className="grid-4 reveal" style={{ marginTop: '20px' }}>
            <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', margin: 0 }}>AWS Solutions Architect<br /><strong style={{ color: 'var(--text-primary)' }}>Professional</strong></p>
            </div>
            <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', margin: 0 }}>AWS Security Specialty<br /><strong style={{ color: 'var(--text-primary)' }}>Certified</strong></p>
            </div>
            <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', margin: 0 }}>Azure Solutions Architect<br /><strong style={{ color: 'var(--text-primary)' }}>Expert Certified</strong></p>
            </div>
            <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', margin: 0 }}>Azure Security Engineer<br /><strong style={{ color: 'var(--text-primary)' }}>Certified</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What cloud services does GulfStream offer in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream Technology offers <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure managed services</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud managed services</Link>, <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud managed services</Link>, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link>, <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>cloud migration</Link>, <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security &amp; governance</Link>, and <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cloud billing management</Link> for enterprises across Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms does GulfStream support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments for Saudi enterprises with 24/7 monitoring and dedicated support.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How does GulfStream reduce cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We apply FinOps best practices including rightsizing, Reserved Instance planning, Spot optimization, tagging governance, and anomaly detection — delivering an average 32% cloud cost reduction. See our <Link href="/case-studies" style={{ color: 'var(--accent)' }}>case studies</Link> for documented results.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What industries does GulfStream serve?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We serve <Link href="/industries/retail" style={{ color: 'var(--accent)' }}>retail</Link>, <Link href="/industries/healthcare" style={{ color: 'var(--accent)' }}>healthcare</Link>, <Link href="/industries/tech-saas" style={{ color: 'var(--accent)' }}>SaaS</Link>, <Link href="/industries/logistics" style={{ color: 'var(--accent)' }}>logistics</Link>, banking, government, and <Link href="/industries/professional-services" style={{ color: 'var(--accent)' }}>professional services</Link> enterprises across Riyadh, Jeddah, Dammam, and the wider Saudi Arabia region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Let&apos;s Build Something Excellent Together</h2>
            <p>Book a free Cloud Assessment and meet the GulfStream team. We&apos;ll assess your cloud environment, identify savings opportunities, and propose a plan — with no commitment needed.</p>
            <p className="cta-urgency">⚡ Limited free cloud assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Cloud Assessment Saudi Arabia</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
