'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useReveal } from '@/hooks/useReveal';

const ServicesIndexContent = () => {
  useReveal();
  const router = useRouter();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Services</span>
          </div>
          <h1 className="display-lg">Managed Cloud Services <span className="text-gradient">in Saudi Arabia</span></h1>
          <p >GulfStream Technologies delivers enterprise multi-Managed Cloud Services across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud for organizations across Saudi Arabia. We Operate, Optimize, Secure, Govern, and Modernize your cloud — reducing costs by up to 30% while maintaining 99.99% uptime.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Your Free Cloud Cost Assessment</Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg"
              style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}
            >
              Get a Cloud Optimization Report
            </Link>
          </div>
          
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section" style={{ background: 'var(--dark-surface)' }} >
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

      {/* GULFSTREAM ADVANTAGE */}
      <section className="section" >
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
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Multi-cloud certified team with deep expertise in AWS, Microsoft, Google Cloud, and Oracle Cloud platforms.</p>
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
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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