'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const InsightsContent = () => {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      slug: 'ai-use-case-discovery-roadmap',
      icon: '💡',
      category: 'AI',
      title: 'AI Use Case Discovery: From Business Challenge to Roadmap',
      summary: 'Prioritize practical AI opportunities by assessing business value, data readiness, feasibility, and measurable outcomes before investing.',
      readTime: '9 min read',
      date: '2026-10-19',
      dateLabel: 'Oct 19, 2026',
    },
    {
      slug: 'responsible-ai-governance-framework',
      icon: '⚖️',
      category: 'AI',
      title: 'Responsible AI Governance: A Practical Framework',
      summary: 'Set clear ownership, risk reviews, human oversight, and monitoring controls for responsible AI adoption across your organization.',
      readTime: '10 min read',
      date: '2026-08-21',
      dateLabel: 'Aug 21, 2026',
    },
    {
      slug: 'custom-ai-application-development',
      icon: '🧠',
      category: 'AI',
      title: 'Building Custom AI Applications: From Prototype to Production',
      summary: 'Explore the architecture, integration, evaluation, and deployment practices needed to move a custom AI application into production.',
      readTime: '11 min read',
      date: '2026-09-26',
      dateLabel: 'Sep 26, 2026',
    },
    {
      slug: 'enterprise-data-engineering-ai-readiness',
      icon: '🗃️',
      category: 'AI',
      title: 'Data Engineering for AI-Ready Analytics',
      summary: 'Build reliable data pipelines and governed analytics foundations that make enterprise data useful for AI and business intelligence.',
      readTime: '8 min read',
      date: '2026-07-28',
      dateLabel: 'Jul 28, 2026',
    },
    {
      slug: 'business-process-automation-with-ai',
      icon: '⚡',
      category: 'AI',
      title: 'AI-Powered Business Process Automation: Where to Start',
      summary: 'Identify repeatable workflows for automation, connect AI safely to business systems, and measure quality and time savings.',
      readTime: '9 min read',
      date: '2026-10-01',
      dateLabel: 'Oct 01, 2026',
    },
    {
      slug: 'managed-it-support-proactive-operations',
      icon: '🖥️',
      category: 'IT Services',
      title: 'Proactive Managed IT Support: A Guide for Growing Businesses',
      summary: 'Learn how monitoring, help desk workflows, patching, and service-level targets can make day-to-day IT more dependable.',
      readTime: '8 min read',
      date: '2026-10-17',
      dateLabel: 'Oct 17, 2026',
    },
    {
      slug: 'small-business-cybersecurity-baseline',
      icon: '🛡️',
      category: 'IT Services',
      title: 'Small Business Cybersecurity: Essential Controls to Prioritize',
      summary: 'Build a practical security baseline with identity protection, endpoint controls, backups, employee awareness, and incident readiness.',
      readTime: '9 min read',
      date: '2026-09-17',
      dateLabel: 'Sep 17, 2026',
    },
    {
      slug: 'network-infrastructure-modernization',
      icon: '🌐',
      category: 'IT Services',
      title: 'Modernizing Business Network Infrastructure',
      summary: 'Plan resilient wired, wireless, and remote access networks with practical guidance for capacity, segmentation, and ongoing support.',
      readTime: '8 min read',
      date: '2026-08-09',
      dateLabel: 'Aug 09, 2026',
    },
    {
      slug: 'business-backup-disaster-recovery-planning',
      icon: '🔄',
      category: 'IT Services',
      title: 'Backup and Disaster Recovery Planning for Business IT',
      summary: 'Define recovery objectives, protect critical systems, and validate restoration plans before an outage puts operations at risk.',
      readTime: '10 min read',
      date: '2026-10-07',
      dateLabel: 'Oct 07, 2026',
    },
    {
      slug: 'successful-it-project-deployment-checklist',
      icon: '📋',
      category: 'IT Services',
      title: 'A Practical Checklist for Successful IT Project Deployments',
      summary: 'Coordinate requirements, stakeholders, testing, communications, and handover to reduce disruption during technology rollouts.',
      readTime: '7 min read',
      date: '2026-09-08',
      dateLabel: 'Sep 08, 2026',
    },
    {
      slug: 'cloud-cost-optimization-strategy',
      icon: '💰',
      category: 'FinOps',
      title: 'Cloud Cost Optimization Strategy: A Complete Framework',
      summary: 'Learn proven FinOps methodologies to reduce cloud costs by 25-35% through rightsizing, commitment planning, and intelligent resource allocation.',
      readTime: '8 min read',
      date: '2026-10-23',
      dateLabel: 'Oct 23, 2026',
    },
    {
      slug: 'auto-scaling-architecture',
      icon: '📈',
      category: 'Architecture',
      title: 'Auto-Scaling Cloud Architecture: Design Patterns',
      summary: 'Build elastic architectures that automatically scale based on demand, reducing costs and improving performance across AWS, Azure, and GCP.',
      readTime: '10 min read',
      date: '2026-09-11',
      dateLabel: 'Sep 11, 2026',
    },
    {
      slug: 'cloud-migration-planning',
      icon: '📦',
      category: 'Migration',
      title: 'Cloud Migration Planning Strategy: From Discovery to Go-Live',
      summary: 'A step-by-step migration framework covering assessment, design, validation, and cutover planning for zero-downtime enterprise migrations.',
      readTime: '10 min read',
      date: '2026-10-03',
      dateLabel: 'Oct 03, 2026',
    },
    {
      slug: 'cloud-iam-security-best-practices',
      icon: '🔐',
      category: 'Security',
      title: 'Cloud IAM Security Best Practices: AWS, Azure, GCP',
      summary: 'Implement zero-trust identity models, least privilege access, and MFA across multi-cloud environments with practical implementation steps.',
      readTime: '8 min read',
      date: '2026-08-25',
      dateLabel: 'Aug 25, 2026',
    },
    {
      slug: 'multi-region-high-availability',
      icon: '🌍',
      category: 'Architecture',
      title: 'Multi-Region High Availability Design: 99.99% Uptime',
      summary: 'Architect resilient multi-region deployments with automated failover, data replication, and disaster recovery ensuring mission-critical availability.',
      readTime: '11 min read',
      date: '2026-10-21',
      dateLabel: 'Oct 21, 2026',
    },
    {
      slug: 'reserved-instances-vs-savings-plans',
      icon: '💳',
      category: 'FinOps',
      title: 'Reserved Instances vs Savings Plans: Which Should You Buy?',
      summary: 'A practical comparison of AWS Reserved Instances, Savings Plans, and on-demand pricing with decision matrices for different workload types.',
      readTime: '7 min read',
      date: '2026-09-05',
      dateLabel: 'Sep 05, 2026',
    },
    {
      slug: 'lift-and-shift-vs-modernization',
      icon: '🔄',
      category: 'Migration',
      title: 'Lift-and-Shift vs Modernization: Which Path is Right?',
      summary: 'Compare rehost, replatform, and refactor strategies with cost-benefit analysis, timeline considerations, and decision frameworks.',
      readTime: '9 min read',
      date: '2026-08-17',
      dateLabel: 'Aug 17, 2026',
    },
    {
      slug: 'multi-cloud-threat-detection',
      icon: '⚠️',
      category: 'Security',
      title: 'Multi-Cloud Threat Detection and Response Strategy',
      summary: 'Unified security monitoring across AWS, Azure, and Google Cloud with SIEM integration, automated detection, and incident response procedures.',
      readTime: '11 min read',
      date: '2026-10-13',
      dateLabel: 'Oct 13, 2026',
    },
    {
      slug: 'cloud-waste-reduction',
      icon: '🔍',
      category: 'FinOps',
      title: 'Cloud Waste Reduction Techniques: Finding Hidden Costs',
      summary: 'Discover data transfer charges, idle resources, and orphaned snapshots draining your budget. A complete guide to finding and eliminating cloud waste.',
      readTime: '9 min read',
      date: '2026-07-31',
      dateLabel: 'Jul 31, 2026',
    },
    {
      slug: 'zero-downtime-migration',
      icon: '⚡',
      category: 'Migration',
      title: 'Zero Downtime Cloud Migration: Advanced Techniques',
      summary: 'Implement dual-running, database replication, and cutover strategies ensuring business continuity during cloud migration.',
      readTime: '11 min read',
      date: '2026-09-20',
      dateLabel: 'Sep 20, 2026',
    },
    {
      slug: 'resilient-cloud-infrastructure',
      icon: '🛡️',
      category: 'Architecture',
      title: 'Resilient Cloud Infrastructure: Fault Tolerance Design',
      summary: 'Design fault-tolerant systems using microservices, containerization, and infrastructure-as-code for production-grade reliability.',
      readTime: '9 min read',
      date: '2026-08-13',
      dateLabel: 'Aug 13, 2026',
    },
    {
      slug: 'cloud-compliance-governance',
      icon: '✅',
      category: 'Security',
      title: 'Cloud Compliance & Governance: A Practical Roadmap',
      summary: 'Navigate HIPAA, SOC 2, ISO 27001, and Saudi regulations with automated compliance frameworks and continuous monitoring strategies.',
      readTime: '9 min read',
      date: '2026-09-29',
      dateLabel: 'Sep 29, 2026',
    },
    {
      slug: 'finops-governance',
      icon: '📋',
      category: 'FinOps',
      title: 'FinOps Governance Best Practices: Building Cost Culture',
      summary: 'Implement FinOps governance policies, automated cost controls, and organizational structures that make cloud cost management a team discipline.',
      readTime: '10 min read',
      date: '2026-08-29',
      dateLabel: 'Aug 29, 2026',
    },
    {
      slug: 'security-monitoring-aws-azure',
      icon: '📊',
      category: 'Security',
      title: 'Security Monitoring in AWS/Azure: Native Tools Guide',
      summary: 'Compare native security tools, implement centralized logging, and set up real-time alerts across AWS and Azure environments.',
      readTime: '8 min read',
      date: '2026-10-05',
      dateLabel: 'Oct 05, 2026',
    },
    {
      slug: 'cloud-performance-optimization',
      icon: '⚙️',
      category: 'Architecture',
      title: 'Cloud Performance Optimization: Beyond CPU and Memory',
      summary: 'Optimize application performance through caching strategies, CDN integration, database optimization, and observability best practices.',
      readTime: '8 min read',
      date: '2026-09-14',
      dateLabel: 'Sep 14, 2026',
    },
    {
      slug: 'hybrid-cloud-migration',
      icon: '🌐',
      category: 'Migration',
      title: 'Hybrid Cloud Migration Best Practices',
      summary: 'Strategies for phased cloud adoption, managing on-premises and cloud infrastructure, and hybrid cloud governance models.',
      readTime: '8 min read',
      date: '2026-07-25',
      dateLabel: 'Jul 25, 2026',
    },
  ];

  const categories = ['All', 'FinOps', 'Security', 'Migration', 'Architecture', 'AI', 'IT Services'];
  const mixedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = activeCategory === 'All'
    ? mixedArticles
    : mixedArticles.filter(a => a.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Insights</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Cloud Insights & Resources Expert Guidance for Saudi Enterprises</span></h1>
          <p>In-depth guides on AI, IT services, FinOps, security, migration, and cloud architecture from GulfStream experts — helping you make smarter decisions across your technology landscape.</p>
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
