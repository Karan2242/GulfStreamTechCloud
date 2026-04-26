'use client';

import Link from 'next/link';

const HeroSection = () => (
  <section className="page-hero">
    <div className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Managed Cloud Services</span>
      </div>
      <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🌐 Managed Cloud Services</div>
      <h1 className="display-lg">Enterprise Managed Cloud Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
      <p>GulfStream Technologies delivers enterprise-grade managed services across AWS, Azure, Oracle Cloud, and Google Cloud for businesses in Riyadh, Jeddah, and Dammam. We operate, optimize, secure, and modernize your cloud — so you can focus on growth.</p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Cloud Assessment</Link>
        <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
      </div>

      <div className="hero-trust-strip">
        <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
        <div className="hero-quick-stats">
          <div className="hero-quick-stat">
            <span className="hero-quick-stat-value">30%</span>
            <span className="hero-quick-stat-label">Cost Reduction</span>
          </div>
          <div className="hero-quick-stat">
            <span className="hero-quick-stat-value">24/7</span>
            <span className="hero-quick-stat-label">Monitoring</span>
          </div>
          <div className="hero-quick-stat">
            <span className="hero-quick-stat-value">99.99%</span>
            <span className="hero-quick-stat-label">Uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
