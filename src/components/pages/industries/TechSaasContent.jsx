'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const TechSaasContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Technology / SaaS</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>💻 Tech / SaaS Cloud</div>
          <h1 className="display-lg">SaaS Cloud Infrastructure<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>GulfStream Technologies manages <strong>cloud infrastructure for SaaS and technology companies</strong> in Saudi Arabia — so you can ship faster, scale effortlessly, and spend less. From managed Kubernetes to CI/CD pipelines, FinOps governance, and multi-tenant cloud architecture.</p>
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
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free SaaS Cloud Review</Link>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Saudi Arabia&apos;s tech ecosystem is accelerating — driven by Vision 2030 investment, venture capital growth, and surging enterprise SaaS adoption. <strong>SaaS cloud infrastructure in Saudi Arabia</strong> must support rapid product iteration, auto-scaling for unpredictable growth, cost-efficient Kubernetes operations, and enterprise-grade security (SOC 2, ISO 27001). GulfStream Technologies provides <strong>managed cloud infrastructure</strong> on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> — purpose-built for SaaS companies and technology startups across Riyadh, Jeddah, and the GCC.</p>
            <p>With deep expertise in managed Kubernetes (EKS/AKS), CI/CD pipeline optimization, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost governance</Link>, and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security automation</Link>, we help SaaS companies achieve 35% infrastructure cost reduction, 3x deployment frequency, and SOC 2 compliance readiness — so engineering teams focus on product, not infrastructure.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">SaaS Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Spiraling Infrastructure Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>SaaS companies often scale cloud spend faster than revenue. Unoptimized Kubernetes clusters, over-provisioned databases, and lack of Spot Instance strategy erode margins rapidly.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <h3 style={{ fontSize: '.95rem' }}>DevOps Bottlenecks</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Engineering teams spending time firefighting infrastructure issues instead of building product. Slow deployments, flaky CI/CD pipelines, and manual runbooks block product velocity.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Unpredictable Scale</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Viral growth moments expose under-provisioned infrastructure. Without auto-scaling and load testing, SaaS products crash under demand — at the worst possible time.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🏗️</div>
                <h3 style={{ fontSize: '.95rem' }}>Multi-Tenant Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managing resource isolation, per-tenant cost attribution, and data segregation in multi-tenant SaaS architectures requires deep cloud expertise to implement securely and cost-effectively.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Security &amp; SOC 2 Readiness</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Enterprise customers demand SOC 2 compliance and strong security posture. Without dedicated cloud security expertise, achieving and maintaining certification is resource-intensive.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🌍</div>
                <h3 style={{ fontSize: '.95rem' }}>Global Expansion Readiness</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Expanding beyond Saudi Arabia to GCC, MENA, and global markets requires multi-region architecture, data residency compliance, and low-latency infrastructure management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Accelerates SaaS Companies</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <h3 style={{ fontSize: '.95rem' }}>Managed Kubernetes (EKS/AKS)</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Full lifecycle management of your Kubernetes environment — cluster upgrades, pod scaling, cost optimization with Karpenter/KEDA, and continuous security hardening.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🚀</div>
                <h3 style={{ fontSize: '.95rem' }}>CI/CD Pipeline Management</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We design and manage robust CI/CD pipelines using GitHub Actions, AWS CodePipeline, or Azure DevOps — enabling fast, reliable, and zero-downtime deployments.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>SaaS FinOps</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Per-tenant cost attribution, Spot Instance automation for batch workloads, and commitment planning that gives SaaS companies full unit economics visibility — cost per customer, per feature.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Elastic Auto-Scaling</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Auto-scaling groups, Horizontal Pod Autoscaler, and workload-specific scaling policies that handle 10x traffic spikes automatically — without over-provisioning the rest of the time.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Security &amp; Compliance Automation</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Continuous cloud security posture management, SOC 2 evidence collection automation, secret management with AWS Secrets Manager / Azure Key Vault, and runtime container protection.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🌍</div>
                <h3 style={{ fontSize: '.95rem' }}>Multi-Region Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Global expansion-ready cloud architectures with active-active or active-passive multi-region deployments, data residency enforcement, and latency-optimized routing via CloudFront or Azure Front Door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for SaaS Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>⚙️ Managed Kubernetes Operations</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Full lifecycle EKS/AKS management — cluster provisioning, upgrades, pod autoscaling with Karpenter/KEDA, namespace isolation for multi-tenancy, and continuous security hardening. Ship product, not YAML.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🚀 CI/CD Pipeline Optimization</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Purpose-built CI/CD pipelines on GitHub Actions, AWS CodePipeline, or Azure DevOps — with zero-downtime deployments, canary releases, automated rollbacks, and deployment frequency improvements of 3x or more.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🏗️ Multi-Tenant Architecture</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Secure, cost-efficient multi-tenant cloud architectures with resource isolation, per-tenant cost attribution, data segregation, and shared-nothing database strategies — enabling unit economics visibility at the customer level.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>💸 SaaS FinOps &amp; Unit Economics</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Per-tenant cloud cost attribution, Spot Instance automation for batch workloads, commitment planning (Reserved/Savings Plans), and real-time FinOps dashboards — giving SaaS leadership full visibility into cost per customer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">SaaS Cloud FAQ</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is SaaS cloud infrastructure management?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>SaaS cloud infrastructure management is the practice of outsourcing cloud operations — Kubernetes management, CI/CD pipelines, auto-scaling, security, and cost optimization — to a specialist partner, so SaaS engineering teams can focus entirely on building product rather than managing infrastructure.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you manage Kubernetes for SaaS companies?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We provide full lifecycle management of <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS EKS</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure AKS</Link> clusters — including provisioning, upgrades, pod autoscaling, namespace-based multi-tenancy, cost optimization with Karpenter/KEDA, and container security hardening.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you help with SOC 2 compliance?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security practice</Link> helps SaaS companies achieve SOC 2 readiness through automated evidence collection, continuous security posture management, secret management, and runtime container protection — drastically reducing audit preparation time.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you reduce SaaS cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps practice</Link> delivers an average 35% infrastructure cost reduction for SaaS companies through per-tenant cost attribution, Spot Instance automation, Kubernetes right-sizing, and commitment planning — improving unit economics at every scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🔗 Related Industries</div>
            <h2 className="display-md">Explore Other Industry Solutions</h2>
          </div>
          <div className="grid-4 reveal">
            <Link href="/industries/retail" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🛒</div>
              <h3 style={{ fontSize: '.9rem' }}>Retail Cloud</h3>
            </Link>
            <Link href="/industries/healthcare" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏥</div>
              <h3 style={{ fontSize: '.9rem' }}>Healthcare Cloud</h3>
            </Link>
            <Link href="/industries/logistics" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🚛</div>
              <h3 style={{ fontSize: '.9rem' }}>Logistics Cloud</h3>
            </Link>
            <Link href="/industries/professional-services" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏢</div>
              <h3 style={{ fontSize: '.9rem' }}>Professional Services</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Let GulfStream Manage Your Cloud. You Build Your Product.</h2>
            <p>Book a free SaaS cloud review and discover how to reduce infrastructure costs while accelerating product delivery — across AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month</p>
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
