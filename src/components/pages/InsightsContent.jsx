'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const articles = [
  {
    slug: '/insights/nca-ecc-cloud-compliance-saudi',
    icon: '🔒',
    category: 'Security',
    title: 'NCA ECC Cloud Compliance: What Saudi Enterprises Must Know in 2025',
    summary: 'The National Cybersecurity Authority’s Essential Cybersecurity Controls apply to all Saudi organizations using cloud. Here’s exactly what you need to implement and how AWS, Azure, Google Cloud, and Oracle Cloud controls map to NCA requirements.',
    readTime: '8 min read',
    date: '2025-02',
    dateLabel: 'Feb 2025',
  },
  {
    slug: '/insights/aws-vs-azure-saudi-2025',
    icon: '🚀',
    category: 'Migration',
    title: 'AWS vs. Azure for Saudi Enterprises: 2025 Comparison Guide',
    summary: 'A detailed comparison of AWS Middle East (UAE/Bahrain) and Azure UAE North regions for Saudi Arabian enterprises \u2014 covering pricing, compliance, service breadth, and Saudi-specific considerations.',
    readTime: '10 min read',
    date: '2025-02',
    dateLabel: 'Feb 2025',
  },
  {
    slug: '/insights/cloud-cost-optimization-hidden-costs',
    icon: '💸',
    category: 'FinOps',
    title: 'The Hidden Cloud Costs Draining Your Multi-Cloud Budget',
    summary: 'Data transfer costs, NAT Gateway charges, forgotten snapshots, and idle Elastic IPs \u2014 the cloud costs that consistently surprise enterprises. A complete guide to finding and eliminating them.',
    readTime: '7 min read',
    date: '2025-01',
    dateLabel: 'Jan 2025',
  },
  {
    slug: '/insights/auto-scaling-cloud-architecture-saudi-retail',
    icon: '📈',
    category: 'Architecture',
    title: 'Building Auto-Scaling Cloud Architectures for Saudi Retail Peak Events',
    summary: 'How to design cloud architectures on AWS, Azure, and Google Cloud that automatically scale during Ramadan, Saudi National Day, and promotional peak traffic — and scale back down to minimize cost.',
    readTime: '9 min read',
    date: '2025-01',
    dateLabel: 'Jan 2025',
  },
  {
    slug: '/insights/azure-savings-plans-vs-reserved-instances',
    icon: '🔷',
    category: 'FinOps',
    title: 'Microsoft Azure Savings Plans vs Reserved Instances: Which Should You Buy?',
    summary: 'A practical guide for Azure enterprise customers on choosing between 1-year and 3-year Reserved Instances versus Savings Plans \u2014 with a decision matrix for different workload types.',
    readTime: '6 min read',
    date: '2024-12',
    dateLabel: 'Dec 2024',
  },
  {
    slug: '/insights/cloud-tagging-strategy-guide',
    icon: '🔗',
    category: 'Architecture',
    title: 'Cloud Tagging Strategy: How to Build a Tagging Taxonomy That Actually Works',
    summary: 'A complete guide to cloud resource tagging for cost allocation, compliance, and automation. Includes recommended tag keys, enforcement strategies, and automation with AWS Config and Azure Policy.',
    readTime: '8 min read',
    date: '2024-12',
    dateLabel: 'Dec 2024',
  },
];

const categories = ['All', 'FinOps', 'Security', 'Migration', 'Architecture'];

const InsightsContent = () => {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Insights</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>📚 Cloud Insights &amp; Resources</div>
          <h1 className="display-lg">Cloud Insights<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>Expert cloud insights across AWS, Azure, Google Cloud, and Oracle Cloud — FinOps strategies, cloud cost optimization guides, and security best practices from the GulfStream Technologies team — helping Saudi enterprises make smarter cloud decisions.</p>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            <p>GulfStream Technologies publishes in-depth guides on <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization in Saudi Arabia</Link>, <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud consulting</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud solutions</Link>, <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link>, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps services for Saudi enterprises</Link>. Our insights are written by certified multi-cloud architects with hands-on experience managing enterprise cloud environments across Riyadh, Jeddah, and Dammam.</p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="reveal" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'} btn-sm`}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FEATURED ARTICLE */}
          <article className="reveal" style={{ marginBottom: '60px' }}>
            <div style={{ display: 'block' }} className="card featured-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: 'var(--radius-lg)', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px', minHeight: '220px' }}>
                  📊
                </div>
                <div>
                  <header style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                    <span className="badge badge-accent">FinOps</span>
                    <span className="badge badge-primary">Featured</span>
                  </header>
                  <h2 style={{ marginBottom: '14px', fontSize: '1.6rem', lineHeight: 1.3 }}>The Complete FinOps Guide for Saudi Enterprises: Reduce Cloud Costs by 30% in 90 Days</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>A comprehensive guide to implementing the FinOps Foundation framework across AWS, Azure, Google Cloud, and Oracle Cloud environments — covering cost visibility, rightsizing, commitment planning, and governance for Saudi enterprises.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-muted)', fontSize: '.85rem' }}>
                    <span>12 min read</span><span>•</span><time dateTime="2025-03">March 2025</time>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ARTICLE GRID */}
          <div className="grid-3 reveal" style={{ marginBottom: '48px' }}>
            {filtered.slice(0, 2).map(a => (
              <article key={a.slug}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{a.icon}</div>
                  <header style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}><span className={`badge ${a.category === 'FinOps' || a.category === 'Security' ? 'badge-primary' : 'badge-accent'}`}>{a.category}</span></header>
                  <h2 style={{ marginBottom: '10px', flex: 1, fontSize: '1.1rem' }}>{a.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6, flex: 2 }}>{a.summary}</p>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '.82rem' }}>
                    <span>{a.readTime}</span><span>•</span><time dateTime={a.date}>{a.dateLabel}</time>
                  </div>
                </div>
              </article>
            ))}

            {/* INLINE CTA after 2nd article */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,82,204,0.12), rgba(255,107,53,0.12))', border: '1px solid rgba(255,107,53,0.25)' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>💰</div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>Want Help Reducing Your Cloud Cost?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '20px' }}>Get a free assessment from our FinOps certified practitioners — average 30% cost savings in 90 days.</p>
              <Link href="/book-a-review" className="btn btn-primary btn-sm">Book Free Assessment</Link>
            </div>

            {filtered.slice(2).map(a => (
              <article key={a.slug}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{a.icon}</div>
                  <header style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}><span className={`badge ${a.category === 'FinOps' || a.category === 'Security' ? 'badge-primary' : 'badge-accent'}`}>{a.category}</span></header>
                  <h2 style={{ marginBottom: '10px', flex: 1, fontSize: '1.1rem' }}>{a.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.6, flex: 2 }}>{a.summary}</p>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '.82rem' }}>
                    <span>{a.readTime}</span><span>•</span><time dateTime={a.date}>{a.dateLabel}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container" style={{ maxWidth: '620px' }}>
          <div className="section-header reveal">
            <div className="badge badge-primary">📬 Newsletter</div>
            <h2 className="display-md">Cloud Insights, Monthly.</h2>
            <p>Join 1,200+ Saudi cloud professionals who receive expert cloud cost optimization tips, security updates, and AWS/Azure news monthly — no spam, ever.</p>
          </div>
          <form className="contact-form reveal" style={{ gap: '16px' }} onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px' }}>
              <input type="email" placeholder="Your business email address" className="form-input" style={{ margin: 0 }} required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '.8rem', textAlign: 'center' }}>No spam. Monthly insights only. Unsubscribe any time.</p>
          </form>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏆 Why Trust GulfStream Insights</div>
            <h2 className="display-md">Written by Certified Cloud Practitioners</h2>
            <p>Every article is authored by our team of AWS-certified architects and Azure expert engineers with hands-on experience managing enterprise cloud environments across Saudi Arabia.</p>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏢</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>40+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Enterprise Clients in Saudi Arabia</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>30%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Average Cloud Cost Reduction</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>99.99%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Uptime SLA Delivered</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏅</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>80+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>80+ Multi-Cloud Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ Frequently Asked Questions</div>
            <h2 className="display-md">Cloud Insights FAQ</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '16px' }}>
              <h3 style={{ marginBottom: '8px' }}>Who writes GulfStream&apos;s cloud insights?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Our articles are written by certified multi-cloud architects and engineers with hands-on experience managing enterprise <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>cloud environments across Saudi Arabia</Link>. Every guide is based on real project experience, not theory.</p>
            </div>
            <div className="card" style={{ marginBottom: '16px' }}>
              <h3 style={{ marginBottom: '8px' }}>Are these insights relevant to Saudi Arabia?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. All our content addresses Saudi-specific considerations including <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>NCA ECC compliance</Link>, AWS Middle East and Azure UAE region availability, Vision 2030 digital transformation, and local regulatory requirements for enterprises in Riyadh, Jeddah, and Dammam.</p>
            </div>
            <div className="card" style={{ marginBottom: '16px' }}>
              <h3 style={{ marginBottom: '8px' }}>How can I reduce cloud costs in Saudi Arabia?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Start with our FinOps guide covering rightsizing, Reserved Instance optimization, and waste elimination. For personalized recommendations, <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>book a free cloud assessment</Link> — our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps team</Link> delivers an average 30% cloud cost reduction within 90 days.</p>
            </div>
            <div className="card" style={{ marginBottom: '16px' }}>
              <h3 style={{ marginBottom: '8px' }}>Do you offer cloud consulting beyond insights?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. GulfStream Technologies provides <Link href="/services" style={{ color: 'var(--accent)' }}>full Managed Cloud Services</Link> including <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure managed services</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud services</Link>, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link>, and <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>cloud migration</Link> for Saudi enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Want Expert Cloud Advice for Your Business?</h2>
            <p>Book a free Cloud Assessment and get personalized recommendations from our certified multi-cloud architects and engineers — at no cost or commitment.</p>
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

export default InsightsContent;
