'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const ServicesIndexContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Services</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🛠️ Managed Cloud Services</div>
          <h1 className="display-lg">Managed Cloud Services <span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>enterprise multi-Managed Cloud Services across AWS, Azure, Google Cloud, and Oracle Cloud</strong> for organizations across <strong>Saudi Arabia</strong>. We Operate, Optimize, Secure, Govern, and Modernize your cloud — reducing costs by up to <strong>30%</strong> while maintaining <strong>99.99% uptime</strong>.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Your Free Cloud Cost Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Get a Cloud Optimization Report</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by 40+ enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Avg Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Uptime SLA</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">150+</span>
                <span className="hero-quick-stat-label">Cloud Environments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Our Services</div>
            <h2 className="display-md">What We Deliver</h2>
            <p >Explore our full range of managed cloud services — each designed to deliver measurable outcomes for Saudi enterprises.</p>
          </div>
          <div className="services-grid">
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-monitoring.png" alt="Managed cloud monitoring dashboard" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Managed Cloud Services</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>End-to-end managed cloud operations across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, Google Cloud & Oracle Cloud — 24/7 monitoring, incident response, security governance, and FinOps cost optimization for your entire cloud estate in Saudi Arabia.</p>
                <Link href="/services/cloud-managed-services" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-finops.png" alt="FinOps cost optimization analytics" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud FinOps &amp; Cost Optimization</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Apply the FinOps framework to gain full visibility into cloud spend, eliminate waste, rightsize resources, and achieve sustainable cost governance — delivering an average 30% cost reduction across your cloud estate.</p>
                <Link href="/services/finops-cost-optimization" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-billing.png" alt="Cloud billing and chargeback reporting" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Billing Management</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Centralized billing, chargeback reporting, and spend analytics across multiple accounts and teams. Gain accurate cost attribution so every dollar spent on cloud is justified and trackable.</p>
                <Link href="/services/cloud-billing-management" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-migration.png" alt="Cloud migration and modernization roadmap" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Migration &amp; Modernization</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Migrate legacy on-premises workloads to <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, or <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> with zero business disruption. We design, plan, and execute cloud migrations following proven rehost, replatform, and refactor strategies.</p>
                <Link href="/services/cloud-migration" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-security.png" alt="Cloud security governance and compliance" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Security &amp; Governance</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Enterprise-level cloud security including IAM governance, NCA ECC compliance automation, security posture management, and continuous threat detection across AWS, Azure, Google Cloud, and Oracle Cloud environments.</p>
                <Link href="/services/cloud-security-governance" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-custom.png" alt="Custom cloud solutions architecture" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Custom Cloud Solutions</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Need a cloud service tailored to your specific requirements? We design and deliver custom cloud solutions for enterprises across Saudi Arabia — from Kubernetes management to multi-cloud architecture.</p>
                <Link href="/contact" className="learn-more" >Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GULFSTREAM ADVANTAGE */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ GulfStream Advantage</div>
            <h2 className="display-md">Why Choose GulfStream</h2>
            <p>Experience the difference with our proven approach to managed cloud services in Saudi Arabia.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">☁️</div>
                <div className="card-title-row">
                  <h3>50+ Enterprise Clients</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Trusted by leading Saudi enterprises across Saudi Arabia for mission-critical cloud management.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row">
                  <h3>25+ Certified Engineers</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Multi-cloud certified team with deep expertise in AWS, Azure, Google Cloud, and Oracle Cloud platforms.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row">
                  <h3>Transparent Billing</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Clear, detailed billing with no hidden fees. Full visibility into costs and ROI from day one.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row">
                  <h3>Predictable Budgeting</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Fixed monthly pricing with predictable costs. No surprise bills or unexpected cloud expenses.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <div className="card-title-row">
                  <h3>Continuous Optimization</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Ongoing cost optimization and performance tuning to ensure maximum ROI from your cloud investment.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <div className="card-title-row">
                  <h3>Local Saudi Cloud Expertise</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Regional cloud experience with NCA compliance, Vision 2030 alignment, and local GCC infrastructure best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Proven Results</div>
            <h2 className="display-md">Measurable Cloud Outcomes</h2>
            <p>Real results delivered across our managed cloud environments in Saudi Arabia.</p>
          </div>
          <div className="grid-4 reveal" style={{ textAlign: 'center' }}>
            <div className="card premium-card">
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💰</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>30%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Average Cost Reduction</p>
            </div>
            <div className="card premium-card">
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>99.99%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Uptime SLA Consistently Delivered</p>
            </div>
            <div className="card premium-card">
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>☁️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>150+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud Environments Managed</p>
            </div>
            <div className="card premium-card">
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🕒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>24/7 Support</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Always-on operational support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" >
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Optimize Your Cloud in Saudi Arabia?</h2>
            <p>Book a free 60-minute Cloud Assessment with our certified engineers in Saudi Arabia and discover exactly where your cloud is underperforming or overspending.</p>
            <p className="cta-urgency">⚡ Limited free cloud assessments available — join 40+ Saudi enterprises already saving 30%</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Your Free Cloud Cost Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesIndexContent;