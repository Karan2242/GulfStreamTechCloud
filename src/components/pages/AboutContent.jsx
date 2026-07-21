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
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>About Us</span>
          </nav>
          <h1 className="display-lg">
            
            <span className="text-gradient">Saudi Arabia&apos;s Specialist Cloud Management Partner</span>
          </h1>
          <p>
            Founded in 2023, GulfStream Technologies is a Saudi Arabia-based cloud management company helping enterprise organizations optimize, secure, and scale workloads across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container" style={{ textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="reveal">
            <div>
              <div className="badge badge-accent" style={{ marginBottom: '16px' }}>🌊 Our Story</div>
              <h2 className="display-sm" style={{ marginBottom: '20px' }}>Built by Cloud Engineers, for Cloud-Forward Enterprises</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
Founded in 2023 by experienced cloud professionals, GulfStream Technologies began as a specialist managed cloud company serving enterprise clients across the Middle East. From the start, the leadership team built the business around disciplined cloud operations, governance, and long-term partnerships.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
The company launched operations in Oman and later expanded into Saudi Arabia as its customer base and regional expertise grew. That evolution reinforced GulfStream’s focus on trusted, outcome-driven cloud delivery across the Gulf region.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
Today, GulfStream supports AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud while helping enterprises modernize, secure, optimize, and manage their multi-cloud environments with experience, stability, and measurable business value.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="about-stat-card">
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>25+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Experienced Cloud Engineers & Architects</div>
              </div>
              <div className="about-stat-card">
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>80+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Enterprise Cloud Certifications</div>
              </div>
              <div className="about-stat-card">
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>50+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Clients Across GCC</div>
              </div>
              <div className="about-stat-card">
                <div style={{ fontSize: '2.2rem', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>500+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Managed Cloud Workloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Vision & Mission</div>
            <h2 className="display-md">Driving Cloud Excellence in the Middle East</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="vision-card premium-card">
              <div className="card-header">
                <div className="card-title-row">
                  <h3>Our Vision</h3>
                </div>
              </div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>To become the GCC’s most trusted cloud transformation and managed services partner — enabling enterprises to innovate securely, optimize continuously, and scale confidently in a multi-cloud world.</p>
            </div>
            <div className="vision-card premium-card">
              <div className="card-header">
                <div className="card-title-row">
                  <h3>Our Mission</h3>
                </div>
              </div>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>To help organizations across Saudi Arabia and the GCC simplify cloud operations through proactive management, FinOps optimization, cloud security governance, and expert multi-cloud engineering support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏆 Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for Cloud Management in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">☁️</div>
                <div className="card-title-row">
                  <h3>Multi-Cloud Experts</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Certified cloud architects across AWS, Azure, Google Cloud, and Oracle Cloud deliver enterprise-grade <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link> with 24/7 monitoring and proactive optimization for Saudi enterprises.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row">
                  <h3>FinOps-Driven Savings</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>FinOps certified practitioners apply <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization</Link> best practices including rightsizing and RI planning, delivering 28-35% savings across all engagements.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row">
                  <h3>Security &amp; Compliance</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We implement <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link> aligned with NCA ECC, ISO 27001, HIPAA, and SOC 2 — ensuring compliance with Saudi regulatory requirements.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <div className="card-title-row">
                  <h3>Saudi-Based Team</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Headquartered in Riyadh with engineers supporting enterprises across the GCC — we understand Saudi business culture and local cloud requirements.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row">
                  <h3>Measurable ROI</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Every engagement includes clear success metrics. Clients see measurable cloud savings within 60-90 days.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <div className="card-title-row">
                  <h3>Partnership Model</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We work as an extension of your team with monthly reports, quarterly reviews, and dedicated account management. <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact us</Link> for partnership details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Our Values</div>
            <h2 className="display-md">What Drives Us</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏆</div>
                <div className="card-title-row">
                  <h3>Excellence First</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We set technical and service standards that exceed industry norms. Average is not an option — we optimize for cloud outcomes our clients can measure.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🙏</div>
                <div className="card-title-row">
                  <h3>Client Accountability</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We own our results. Every engagement is backed by clear success metrics, regular reporting, and a commitment to delivering documented ROI.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤝</div>
                <div className="card-title-row">
                  <h3>Partnership Mindset</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We work as an extension of your team — understanding your business goals, communicating proactively, and always acting in your long-term interest.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row">
                  <h3>Security by Default</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Security is never an afterthought. Every cloud design, configuration, and change we make defaults to the most secure posture — without compromising agility.</p>
            </div>
          </div>
        </div>
      </section>

 

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Talk to Our Cloud Experts</h2>
            <p>Discuss your cloud operations, FinOps strategy, security posture, or modernization goals with GulfStream’s certified multi-cloud specialists.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">🚀 Schedule Expert Consultation</Link>
              <Link href="/contact" className="btn-white-outline">Talk to a Cloud Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
