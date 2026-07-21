'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const TechSaasContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const saasFaqs = [
    {
      question: 'What is SaaS cloud infrastructure management?',
      answer: 'SaaS cloud infrastructure management means outsourcing your platform operations, deployments, security, and cost control to expert cloud engineers.',
    },
    {
      question: 'Can you reduce SaaS cloud costs?',
      answer: 'Yes. We reduce SaaS costs through Kubernetes optimization, rightsizing, reserved capacity, and FinOps automation.',
    },
    {
      question: 'Do you manage Kubernetes for SaaS companies?',
      answer: 'Yes. We manage Kubernetes clusters, autoscaling, security, and cost governance for SaaS workloads on AWS and Azure.',
    },
    {
      question: 'Do you support multi-cloud SaaS deployments?',
      answer: 'Yes. We support multi-cloud SaaS platforms and hybrid deployments with consistent observability and governance.',
    },
    {
      question: 'Why choose GulfStream for SaaS cloud operations in Saudi Arabia?',
      answer: 'Our team combines SaaS product expertise with cloud operations, enabling faster launches and stable growth with lower infrastructure costs.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Technology / SaaS</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">SaaS Cloud Infrastructure in Saudi Arabia</span></h1>
          <p>GulfStream Technologies manages <strong>cloud infrastructure for SaaS and technology companies</strong> in Saudi Arabia — so you can ship faster, scale effortlessly, and spend less. From managed Kubernetes to CI/CD pipelines, FinOps governance, and multi-tenant cloud architecture.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free SaaS Cloud Review</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Multi-cloud certified SaaS cloud experts</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">35%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">3x</span>
                <span className="hero-quick-stat-label">Deploy Frequency</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">SOC 2</span>
                <span className="hero-quick-stat-label">Compliance Ready</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">SaaS Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Spiraling Infrastructure Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Unoptimized Kubernetes clusters and lack of Spot Instance strategy erode SaaS margins faster than revenue growth.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <h3 style={{ fontSize: '.95rem' }}>DevOps Bottlenecks</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Teams firefighting infrastructure instead of building product; slow deployments and flaky CI/CD pipelines block velocity.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Unpredictable Scale</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Viral growth exposes under-provisioned infrastructure; without auto-scaling, SaaS products crash under critical demand.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏗️</div>
                <h3 style={{ fontSize: '.95rem' }}>Multi-Tenant Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Multi-tenant architecture requires expertise in resource isolation, cost attribution, and secure data segregation.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Security &amp; SOC 2 Readiness</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Enterprise customers demand SOC 2 compliance; achieving and maintaining certification without expertise is resource-intensive.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌍</div>
                <h3 style={{ fontSize: '.95rem' }}>Global Expansion Readiness</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Global expansion requires multi-region architecture, data residency compliance, and low-latency infrastructure management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Accelerates SaaS Companies</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <h3 style={{ fontSize: '.95rem' }}>Managed Kubernetes (EKS/AKS)</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Full lifecycle Kubernetes management with cluster upgrades, pod scaling, cost optimization, and continuous hardening.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🚀</div>
                <h3 style={{ fontSize: '.95rem' }}>CI/CD Pipeline Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Robust CI/CD pipelines on GitHub Actions, AWS CodePipeline, or Azure DevOps enable fast deployments.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>SaaS FinOps</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Per-tenant cost attribution, Spot Instance automation, and commitment planning deliver unit economics visibility.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Elastic Auto-Scaling</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Auto-scaling groups and Horizontal Pod Autoscaler handle 10x traffic spikes without unnecessary over-provisioning.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Security &amp; Compliance Automation</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Continuous security posture management, automated SOC 2 evidence collection, secrets management, and runtime protection.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌍</div>
                <h3 style={{ fontSize: '.95rem' }}>Multi-Region Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Multi-region architectures with active-active deployments, data residency enforcement, and latency-optimized routing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for SaaS Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-4 reveal" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Kubernetes Operations</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Full lifecycle EKS/AKS management with cluster provisioning, upgrades, pod autoscaling, namespace isolation, and security hardening.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🚀</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>CI/CD Optimization</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Purpose-built pipelines on GitHub Actions, AWS CodePipeline, or Azure DevOps with zero-downtime deployments and 3x frequency improvement.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🏗️</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Multi-Tenant SaaS</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cost-efficient multi-tenant architectures with resource isolation, per-tenant cost attribution, data segregation, and unit economics visibility.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>SaaS FinOps</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Per-tenant cost attribution, Spot Instance automation, commitment planning, and real-time dashboards for cost per customer visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">SaaS Cloud Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">35%</span>
              <div className="metric-label">Infrastructure Cost Reduction</div>
              <div className="metric-sub">Through FinOps optimization</div>
            </div>
            <div className="metric-item"><span className="metric-value">3x</span>
              <div className="metric-label">Deployment Frequency</div>
              <div className="metric-sub">Post CI/CD optimization</div>
            </div>
            <div className="metric-item"><span className="metric-value">10x</span>
              <div className="metric-label">Traffic Scaling Capability</div>
              <div className="metric-sub">Without performance degradation</div>
            </div>
            <div className="metric-item"><span className="metric-value">SOC 2</span>
              <div className="metric-label">Compliance Readiness</div>
              <div className="metric-sub">Enterprise customer trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">SaaS Cloud FAQ</h2>
          </div>
          <div className="faq-accordion reveal">
            {saasFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`saas-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`saas-faq-answer-${index}`}
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
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Let GulfStream Manage Your Cloud. You Build Your Product.</h2>
            <p>Book a free SaaS cloud review and discover how to reduce infrastructure costs while accelerating product delivery — across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud in Saudi Arabia.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free SaaS Cloud Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechSaasContent;
