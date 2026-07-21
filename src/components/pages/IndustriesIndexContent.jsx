  'use client';

  import React, { useState } from 'react';
  import Link from 'next/link';
  import { useReveal } from '@/hooks/useReveal';

  const IndustriesIndexContent = () => {
    useReveal();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

      const industriesFaqs = [
      {
        question: 'Which industries do you support with cloud services?',
        answer: 'We support retail, healthcare, logistics, SaaS, and professional services enterprises across Saudi Arabia.',
      },
      {
        question: 'Do you manage multi-cloud environments for different industries?',
        answer: 'Yes. We build industry-specific cloud solutions across AWS, Microsoft Cloud, Google Cloud, Oracle Cloud, and hybrid environments.',
      },
      {
        question: 'How much can industry cloud services reduce costs?',
        answer: 'Industry clients typically save 25-35% on cloud costs through tailored FinOps and platform optimization.',
      },
      {
        question: 'How quickly can you start working with us?',
        answer: 'We can begin assessments and planning immediately, with the first improvement recommendations delivered within days.',
      },
      {
        question: 'Why choose GulfStream for Saudi enterprise cloud?',
        answer: 'Because we combine local Saudi expertise with certified multi-cloud engineering and industry-specific compliance experience.',
      },
    ];

    return (
      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'left' }}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>›</span><span>Industries</span>
            </nav>
            <h1 className="display-lg">Industry Specific Cloud Solutions <span className="text-gradient">for Saudi Enterprises</span></h1>
            <p>GulfStream Technologies delivers industry specific multi-cloud solutions across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud for Saudi enterprises — addressing the unique regulatory, operational, and scalability requirements of each sector we serve across Saudi Arabia and the GCC.</p>
          </div>
        </section>

        {/* SEO INTRO */}
        <section className="section" style={{ paddingBottom: '0', background: 'var(--dark-surface)' }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
              <p>Every industry has unique cloud requirements — from <strong>HIPAA compliance in healthcare</strong> to <strong>PCI DSS for retail payments</strong> and <strong>real-time IoT for logistics</strong>. GulfStream Technologies provides <strong>cloud solutions for Saudi industries</strong> that go beyond generic infrastructure. Our certified <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/microsoft-cloud" style={{ color: 'var(--accent)' }}>Microsoft Cloud</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> consulting teams design, deploy, and manage cloud environments tailored to your sector&apos;s regulatory frameworks and operational demands.</p>
            </div>
          </div>
        </section>

        {/* INDUSTRY CARDS */}
        <section className="section" style={{ background: 'var(--dark-surface)' }}>
          <div className="container">
            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2,1fr)', gap: '32px' }}>
              <Link href="/industries/retail" className="card premium-card" style={{ textDecoration: 'none' }}>
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🛒</div>
                  <div className="card-title-row">
                    <h3>Retail Cloud Solutions</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Scale cloud infrastructure seamlessly during Ramadan and peak seasons. Enable omnichannel commerce, real-time inventory management, and customer analytics across AWS, Microsoft Cloud, and Google Cloud — with PCI DSS compliance built in.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Retail Cloud →</span>
              </Link>
              <Link href="/industries/healthcare" className="card premium-card" style={{ textDecoration: 'none' }}>
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🏥</div>
                  <div className="card-title-row">
                    <h3>Healthcare Cloud Solutions</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>HIPAA-aligned, high-availability cloud infrastructure for clinical applications, patient data management, and healthcare analytics — with NCA ECC compliance and 99.99% uptime.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Healthcare Cloud →</span>
              </Link>
              <Link href="/industries/logistics" className="card premium-card" style={{ textDecoration: 'none' }}>
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🚛</div>
                  <div className="card-title-row">
                    <h3>Logistics Cloud Solutions</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Resilient cloud infrastructure for real-time fleet tracking, supply chain visibility, warehouse management, and IoT workloads — built for 24/7 operational demands across Saudi Arabia.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Logistics Cloud →</span>
              </Link>
              <Link href="/industries/tech-saas" className="card premium-card" style={{ textDecoration: 'none' }}>
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>💻</div>
                  <div className="card-title-row">
                    <h3>Technology / SaaS Cloud</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Managed Kubernetes, CI/CD pipelines, multi-tenant architectures, and FinOps cost management for SaaS companies — enabling rapid product scaling with full unit economics visibility.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Tech/SaaS Cloud →</span>
              </Link>
              <Link href="/industries/professional-services" className="card premium-card" style={{ textDecoration: 'none' }}>
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🏢</div>
                  <div className="card-title-row">
                    <h3>Professional Services Cloud</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Secure, compliant cloud environments for consulting, legal, and financial services firms — zero-trust security, ISO 27001 alignment, and enterprise collaboration across AWS, Microsoft Cloud, and Oracle Cloud.</p>
                <span style={{ color: 'var(--accent)', fontSize: '.875rem', fontWeight: 600, display: 'inline-block', marginTop: '12px' }}>Explore Professional Services Cloud →</span>
              </Link>
              <div className="card premium-card">
                <div className="card-header">
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 0, flexShrink: 0 }}>🌐</div>
                  <div className="card-title-row">
                    <h3>Your Industry</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Don&apos;t see your sector? We work with a wide range of Saudi enterprises. Contact our cloud specialists for a tailored cloud strategy designed for your specific business needs.</p>
                <Link href="/contact" className="btn btn-accent btn-sm" style={{ marginTop: '16px', display: 'inline-block' }}>Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY SPECIALIZATION */}
        <section className="section" >
          <div className="container">
            <div className="section-header reveal">
              <div className="badge badge-primary">⭐ Why Industry Specialization Matters</div>
              <h2 className="display-md">Tailored Cloud — Not Generic Templates</h2>
              <p>Generic cloud management ignores the compliance, operational, and technology requirements that are specific to each industry. Our vertical specialization means faster results, fewer risks, and lower costs for Saudi enterprises.</p>
            </div>
            <div className="grid-4 reveal">
              <div className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">🏛️</div>
                  <div className="card-title-row">
                    <h3 style={{ fontSize: '.9rem' }}>Regulatory Alignment</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Industry-specific compliance frameworks (NCA ECC, HIPAA, PCI DSS, ISO 27001) built into every cloud design from day one.</p>
              </div>
              <div className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">⚡</div>
                  <div className="card-title-row">
                    <h3 style={{ fontSize: '.9rem' }}>Faster Deployment</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Pre-built industry reference architectures accelerate multi-cloud deployments significantly.</p>
              </div>
              <div className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">🎯</div>
                  <div className="card-title-row">
                    <h3 style={{ fontSize: '.9rem' }}>Business Context</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Our engineers understand your industry drivers, not just your technical requirements.</p>
              </div>
              <div className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">📊</div>
                  <div className="card-title-row">
                    <h3 style={{ fontSize: '.9rem' }}>Proven Results</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Industry-specific benchmarks and <Link href="/case-studies" style={{ color: 'var(--accent)' }}>case studies</Link> demonstrate real-world outcomes across Saudi enterprises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'var(--dark-surface)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="badge badge-accent">❓ FAQ</div>
              <h2 className="display-md">Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion reveal">
              {industriesFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                    <button
                      className="faq-question"
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`industries-faq-answer-${index}`}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle" aria-hidden="true">+</span>
                    </button>
                    <div
                      id={`industries-faq-answer-${index}`}
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
        <section className="section" >
          <div className="container">
            <div className="cta-banner reveal">
              <h2 className="display-md">Let&apos;s Build Your Industry Cloud Strategy</h2>
              <p>Book a free cloud assessment and discover how GulfStream Technologies designs cloud environments optimized for your industry&apos;s unique requirements — tailored for Saudi enterprises across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud.</p>
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
