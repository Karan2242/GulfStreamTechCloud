'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const IndustriesIndexContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Industries</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🏭 Industries</div>
          <h1 className="display-lg">Industry-Specific Cloud Solutions<br /><span className="text-gradient">for Saudi Enterprises</span></h1>
          <p>GulfStream Technologies delivers <strong>industry-specific multi-cloud solutions across AWS, Azure, Google Cloud, and Oracle Cloud</strong> for Saudi enterprises — addressing the unique regulatory, operational, and scalability requirements of each sector we serve across Saudi Arabia and the GCC.</p>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by 40+ Saudi enterprises</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">5</span>
                <span className="hero-quick-stat-label">Industries Served</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Avg Cost Savings</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Every industry has unique cloud requirements — from <strong>HIPAA compliance in healthcare</strong> to <strong>PCI DSS for retail payments</strong> and <strong>real-time IoT for logistics</strong>. GulfStream Technology provides <strong>cloud solutions for Saudi industries</strong> that go beyond generic infrastructure. Our certified <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> consulting teams design, deploy, and manage cloud environments tailored to your sector&apos;s regulatory frameworks and operational demands.</p>
            <p>With deep expertise in <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization</Link> and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link>, we help Saudi enterprises reduce cloud spend by an average of 30% while maintaining full compliance with NCA ECC, SAMA, and industry-specific regulations. Explore our industry-specific cloud infrastructure solutions below, or <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>book a free cloud assessment</Link> to get started.</p>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2,1fr)', gap: '32px' }}>
            <Link href="/industries/retail" className="card" style={{ display: 'flex', gap: '24px', textDecoration: 'none', alignItems: 'flex-start' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🛒</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Retail Cloud Solutions</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>Scale cloud infrastructure seamlessly during Ramadan and peak seasons. Enable omnichannel commerce, real-time inventory management, and customer analytics across AWS, Azure, and Google Cloud — with PCI DSS compliance built in.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Retail Cloud →</span>
              </div>
            </Link>
            <Link href="/industries/healthcare" className="card" style={{ display: 'flex', gap: '24px', textDecoration: 'none', alignItems: 'flex-start' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🏥</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Healthcare Cloud Solutions</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>HIPAA-aligned, high-availability cloud infrastructure for clinical applications, patient data management, and healthcare analytics — with NCA ECC compliance and 99.99% uptime.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Healthcare Cloud →</span>
              </div>
            </Link>
            <Link href="/industries/logistics" className="card" style={{ display: 'flex', gap: '24px', textDecoration: 'none', alignItems: 'flex-start' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🚛</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Logistics Cloud Solutions</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>Resilient cloud infrastructure for real-time fleet tracking, supply chain visibility, warehouse management, and IoT workloads — built for 24/7 operational demands across Saudi Arabia.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Logistics Cloud →</span>
              </div>
            </Link>
            <Link href="/industries/tech-saas" className="card" style={{ display: 'flex', gap: '24px', textDecoration: 'none', alignItems: 'flex-start' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>💻</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Technology / SaaS Cloud</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>Managed Kubernetes, CI/CD pipelines, multi-tenant architectures, and FinOps cost management for SaaS companies — enabling rapid product scaling with full unit economics visibility.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Tech/SaaS Cloud →</span>
              </div>
            </Link>
            <Link href="/industries/professional-services" className="card" style={{ display: 'flex', gap: '24px', textDecoration: 'none', alignItems: 'flex-start' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🏢</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Professional Services Cloud</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>Secure, compliant cloud environments for consulting, legal, and financial services firms — zero-trust security, ISO 27001 alignment, and enterprise collaboration across AWS, Azure, and Oracle Cloud.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Professional Services Cloud →</span>
              </div>
            </Link>
            <div className="card" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--gradient-card)', borderColor: 'var(--dark-border)' }}>
              <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🌐</div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Your Industry</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.65 }}>Don&apos;t see your sector? We work with a wide range of Saudi enterprises. Contact our cloud specialists for a tailored cloud strategy designed for your specific business needs.</p>
                <Link href="/contact" className="btn btn-accent btn-sm" style={{ marginTop: '16px' }}>Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPECIALIZATION */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⭐ Why Industry Specialization Matters</div>
            <h2 className="display-md">Tailored Cloud — Not Generic Templates</h2>
            <p>Generic cloud management ignores the compliance, operational, and technology requirements that are specific to each industry. Our vertical specialization means faster results, fewer risks, and lower costs for Saudi enterprises.</p>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: '24px' }}>
              <div className="card-header">
                <div className="icon-box">🏛️</div>
                <h3 style={{ fontSize: '.95rem' }}>Regulatory Alignment</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Industry-specific compliance frameworks (NCA ECC, HIPAA, PCI DSS, ISO 27001) built into every cloud design from day one.</p>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <h3 style={{ fontSize: '.95rem' }}>Faster Deployment</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Pre-built industry reference architectures accelerate multi-cloud deployments significantly.</p>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <div className="card-header">
                <div className="icon-box">🎯</div>
                <h3 style={{ fontSize: '.95rem' }}>Business Context</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Our engineers understand your industry drivers, not just your technical requirements.</p>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Proven Results</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Industry-specific benchmarks and <Link href="/case-studies" style={{ color: 'var(--accent)' }}>case studies</Link> demonstrate real-world outcomes across Saudi enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What industries does GulfStream Technologies support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream Technologies provides industry-specific cloud solutions for <Link href="/industries/retail" style={{ color: 'var(--accent)' }}>retail</Link>, <Link href="/industries/healthcare" style={{ color: 'var(--accent)' }}>healthcare</Link>, <Link href="/industries/logistics" style={{ color: 'var(--accent)' }}>logistics</Link>, <Link href="/industries/tech-saas" style={{ color: 'var(--accent)' }}>technology/SaaS</Link>, and <Link href="/industries/professional-services" style={{ color: 'var(--accent)' }}>professional services</Link> enterprises across Saudi Arabia — with tailored multi-cloud managed services for each sector.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you provide industry-specific cloud solutions?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Unlike generic cloud providers, GulfStream builds cloud architectures tailored to each industry&apos;s regulatory, compliance, and operational requirements — including PCI DSS for retail, HIPAA and NCA ECC for healthcare, and ISO 27001 for professional services.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you manage?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We manage <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, supporting single-cloud and multi-cloud environments. Our certified architects manage Kubernetes, serverless, IoT, data lakes, and enterprise workloads across all platforms.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you offer a free cloud consultation?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Every new engagement starts with a <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>free cloud assessment</Link> — including cost analysis, security review, and a 90-day optimization roadmap delivered within 5 business days at no charge.</p>
            </div>
            <div className="card" style={{ gridColumn: 'span 2' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you ensure compliance for Saudi enterprises?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We design cloud environments with NCA ECC, SAMA, Saudi MOH, and international frameworks (HIPAA, ISO 27001, PCI DSS, SOC 2) built in from day one — with continuous compliance monitoring and automated audit reporting. See our <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security and governance</Link> services for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Let&apos;s Build Your Industry Cloud Strategy</h2>
            <p>Book a free cloud assessment and discover how GulfStream Technology designs cloud environments optimized for your industry&apos;s unique requirements — tailored for Saudi enterprises across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month — book now</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesIndexContent;
