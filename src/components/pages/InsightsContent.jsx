'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const InsightsContent = () => {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      slug: 'cloud-cost-optimization-strategy',
      icon: '💰',
      category: 'FinOps',
      title: 'Cloud Cost Optimization Strategy: A Complete Framework',
      summary: 'Learn proven FinOps methodologies to reduce cloud costs by 25-35% through rightsizing, commitment planning, and intelligent resource allocation.',
      readTime: '8 min read',
      date: '2026-05-15',
      dateLabel: 'May 15, 2026',
    },
    {
      slug: 'auto-scaling-architecture',
      icon: '📈',
      category: 'Architecture',
      title: 'Auto-Scaling Cloud Architecture: Design Patterns',
      summary: 'Build elastic architectures that automatically scale based on demand, reducing costs and improving performance across AWS, Azure, and GCP.',
      readTime: '10 min read',
      date: '2026-05-14',
      dateLabel: 'May 14, 2026',
    },
    {
      slug: 'cloud-migration-planning',
      icon: '📦',
      category: 'Migration',
      title: 'Cloud Migration Planning Strategy: From Discovery to Go-Live',
      summary: 'A step-by-step migration framework covering assessment, design, validation, and cutover planning for zero-downtime enterprise migrations.',
      readTime: '10 min read',
      date: '2026-05-13',
      dateLabel: 'May 13, 2026',
    },
    {
      slug: 'cloud-iam-security-best-practices',
      icon: '🔐',
      category: 'Security',
      title: 'Cloud IAM Security Best Practices: AWS, Azure, GCP',
      summary: 'Implement zero-trust identity models, least privilege access, and MFA across multi-cloud environments with practical implementation steps.',
      readTime: '8 min read',
      date: '2026-05-12',
      dateLabel: 'May 12, 2026',
    },
    {
      slug: 'multi-region-high-availability',
      icon: '🌍',
      category: 'Architecture',
      title: 'Multi-Region High Availability Design: 99.99% Uptime',
      summary: 'Architect resilient multi-region deployments with automated failover, data replication, and disaster recovery ensuring mission-critical availability.',
      readTime: '11 min read',
      date: '2026-05-11',
      dateLabel: 'May 11, 2026',
    },
    {
      slug: 'reserved-instances-vs-savings-plans',
      icon: '💳',
      category: 'FinOps',
      title: 'Reserved Instances vs Savings Plans: Which Should You Buy?',
      summary: 'A practical comparison of AWS Reserved Instances, Savings Plans, and on-demand pricing with decision matrices for different workload types.',
      readTime: '7 min read',
      date: '2026-05-10',
      dateLabel: 'May 10, 2026',
    },
    {
      slug: 'lift-and-shift-vs-modernization',
      icon: '🔄',
      category: 'Migration',
      title: 'Lift-and-Shift vs Modernization: Which Path is Right?',
      summary: 'Compare rehost, replatform, and refactor strategies with cost-benefit analysis, timeline considerations, and decision frameworks.',
      readTime: '9 min read',
      date: '2026-05-09',
      dateLabel: 'May 09, 2026',
    },
    {
      slug: 'multi-cloud-threat-detection',
      icon: '⚠️',
      category: 'Security',
      title: 'Multi-Cloud Threat Detection and Response Strategy',
      summary: 'Unified security monitoring across AWS, Azure, and Google Cloud with SIEM integration, automated detection, and incident response procedures.',
      readTime: '11 min read',
      date: '2026-05-08',
      dateLabel: 'May 08, 2026',
    },
    {
      slug: 'cloud-waste-reduction',
      icon: '🔍',
      category: 'FinOps',
      title: 'Cloud Waste Reduction Techniques: Finding Hidden Costs',
      summary: 'Discover data transfer charges, idle resources, and orphaned snapshots draining your budget. A complete guide to finding and eliminating cloud waste.',
      readTime: '9 min read',
      date: '2026-05-05',
      dateLabel: 'May 05, 2026',
    },
    {
      slug: 'zero-downtime-migration',
      icon: '⚡',
      category: 'Migration',
      title: 'Zero Downtime Cloud Migration: Advanced Techniques',
      summary: 'Implement dual-running, database replication, and cutover strategies ensuring business continuity during cloud migration.',
      readTime: '11 min read',
      date: '2026-05-03',
      dateLabel: 'May 03, 2026',
    },
    {
      slug: 'resilient-cloud-infrastructure',
      icon: '🛡️',
      category: 'Architecture',
      title: 'Resilient Cloud Infrastructure: Fault Tolerance Design',
      summary: 'Design fault-tolerant systems using microservices, containerization, and infrastructure-as-code for production-grade reliability.',
      readTime: '9 min read',
      date: '2026-05-02',
      dateLabel: 'May 02, 2026',
    },
    {
      slug: 'cloud-compliance-governance',
      icon: '✅',
      category: 'Security',
      title: 'Cloud Compliance & Governance: A Practical Roadmap',
      summary: 'Navigate HIPAA, SOC 2, ISO 27001, and Saudi regulations with automated compliance frameworks and continuous monitoring strategies.',
      readTime: '9 min read',
      date: '2026-05-01',
      dateLabel: 'May 01, 2026',
    },
    {
      slug: 'finops-governance',
      icon: '📋',
      category: 'FinOps',
      title: 'FinOps Governance Best Practices: Building Cost Culture',
      summary: 'Implement FinOps governance policies, automated cost controls, and organizational structures that make cloud cost management a team discipline.',
      readTime: '10 min read',
      date: '2026-04-30',
      dateLabel: 'Apr 30, 2026',
    },
    {
      slug: 'security-monitoring-aws-azure',
      icon: '📊',
      category: 'Security',
      title: 'Security Monitoring in AWS/Azure: Native Tools Guide',
      summary: 'Compare native security tools, implement centralized logging, and set up real-time alerts across AWS and Azure environments.',
      readTime: '8 min read',
      date: '2026-04-28',
      dateLabel: 'Apr 28, 2026',
    },
    {
      slug: 'cloud-performance-optimization',
      icon: '⚙️',
      category: 'Architecture',
      title: 'Cloud Performance Optimization: Beyond CPU and Memory',
      summary: 'Optimize application performance through caching strategies, CDN integration, database optimization, and observability best practices.',
      readTime: '8 min read',
      date: '2026-04-27',
      dateLabel: 'Apr 27, 2026',
    },
    {
      slug: 'hybrid-cloud-migration',
      icon: '🌐',
      category: 'Migration',
      title: 'Hybrid Cloud Migration Best Practices',
      summary: 'Strategies for phased cloud adoption, managing on-premises and cloud infrastructure, and hybrid cloud governance models.',
      readTime: '8 min read',
      date: '2026-04-26',
      dateLabel: 'Apr 26, 2026',
    },
  ];

  const categories = ['All', 'FinOps', 'Security', 'Migration', 'Architecture'];
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Insights</span>
          </nav>
          <h1 className="display-lg">Cloud Insights & Resources <span className="text-gradient">Expert Guidance for Saudi Enterprises</span></h1>
          <p>In-depth guides on FinOps, security, migration, and cloud architecture from GulfStream certified cloud engineers — helping you make smarter decisions across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud.</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container">
          {/* FILTER TABS */}
          <div className="insights-filter-tabs reveal">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`insights-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* INSIGHTS GRID */}
          <div className="grid-3 reveal" style={{ marginTop: '48px' }}>
            {filtered.map(a => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="insight-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}>
                  <header style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge badge-accent">{a.category}</span>
                  </header>
                  <h2 style={{ marginBottom: '10px', flex: 1, fontSize: '1.1rem', lineHeight: 1.3 }}>{a.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '.825rem', lineHeight: 1.6, flex: 2, marginBottom: '16px' }}>
                    {a.summary}
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '.82rem', paddingTop: '16px', borderTop: '1px solid rgba(255, 107, 53, 0.1)' }}>
                    <span>{a.readTime}</span>
                    <span>•</span>
                    <time dateTime={a.date}>{a.dateLabel}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}  >
        <div className="container">
          <div className="newsletter-banner reveal" style={{ textAlign: 'center' }}>
            <div className="badge badge-primary" style={{ marginBottom: '24px', justifyContent: 'center', width: 'fit-content', margin: '0 auto 24px' }}>📧 NEWSLETTER</div>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>Cloud Insights, Monthly.</h2>
            <p style={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1rem', color: 'var(--text-secondary)' }}>Join 1,200+ Saudi cloud professionals who receive expert cloud cost optimization tips, security updates, and Cloud news monthly — no spam, ever.</p>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                try {
                  await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  });
                  e.target.email.value = '';
                  alert('✅ Subscription confirmed! Check your email.');
                } catch (err) {
                  alert('Error subscribing. Please try again.');
                }
              }
            }} style={{ display: 'flex', gap: '12px', maxWidth: '550px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                name="email"
                placeholder="Your business email address"
                required
                style={{
                  flex: 1,
                  minWidth: '300px',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(15, 26, 46, 0.8)',
                  border: '1px solid var(--dark-border)',
                  color: 'var(--text-primary)',
                  fontSize: '.95rem',
                  transition: 'all var(--transition)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--dark-border)'; e.target.style.boxShadow = 'none'; }}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Subscribe
              </button>
            </form>

            <p style={{ marginTop: '16px', fontSize: '.875rem', color: 'var(--text-muted)' }}>No spam. Monthly insights only. Unsubscribe any time.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Transform Your Cloud Strategy?</h2>
            <p>Book a free cloud assessment to discuss how these strategies apply to your organization and discover your specific optimization opportunities.</p>
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

export default InsightsContent;
