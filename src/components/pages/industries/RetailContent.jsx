'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const RetailContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const retailFaqs = [
    {
      question: 'What is retail cloud infrastructure?',
      answer: 'Retail cloud infrastructure supports e-commerce, inventory, payments, and peak traffic events with scalable, secure cloud architecture.',
    },
    {
      question: 'How do you handle PCI DSS compliance?',
      answer: 'We build and manage PCI DSS-compliant retail cloud environments with network controls, encryption, and continuous monitoring.',
    },
    {
      question: 'Which cloud platforms do you support for retail?',
      answer: 'We support AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud, tailoring retail solutions to your existing systems and growth needs.',
    },
    {
      question: 'Can you reduce retail cloud costs?',
      answer: 'Yes. We cut retail cloud spending through seasonal scaling, rightsizing, and FinOps controls without impacting performance.',
    },
    {
      question: 'Why choose GulfStream for retail cloud in Saudi Arabia?',
      answer: 'We combine retail cloud experience, peak-event scaling, and Saudi regulatory awareness to keep your customer experience reliable.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Retail</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Retail Cloud Solutions Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>scalable multi-cloud infrastructure</strong> that powers the modern Saudi retail experience — from omnichannel e-commerce to real-time inventory analytics and seamless seasonal scaling during Ramadan, National Day, and peak shopping events.</p>
           <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Retail Cloud Review</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Multi-cloud certified retail cloud experts</span>
            
          <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">28%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">0</span>
                <span className="hero-quick-stat-label">Peak Outages</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">PCI DSS Compliance</span>
              </div>
            </div>
          </div>
         
        </div>
      </section>


      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Retail Challenges</div>
            <h2 className="display-md">Cloud Challenges Facing Saudi Retailers</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Seasonal Traffic Spikes</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ramadan and peak campaigns create massive traffic spikes requiring elastic architecture to prevent outages.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Omnichannel Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Keeping inventory, pricing, and customer data synchronized across all retail channels requires sophisticated cloud infrastructure.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>High Cloud Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Over-provisioned capacity and poor scaling discipline waste cloud budgets with idle infrastructure costs.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>PCI DSS Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Secure payment processing demands PCI DSS-compliant cloud infrastructure with specialist security expertise.</p>
            </div>
            <div className="card premium-card premium-card">
              <div className="card-header">
                <div className="icon-box">📦</div>
                <h3 style={{ fontSize: '.95rem' }}>Supply Chain Visibility</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Real-time visibility across suppliers, warehouses, and fulfillment centers requires scalable data integration platforms.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤖</div>
                <h3 style={{ fontSize: '.95rem' }}>Personalization &amp; Analytics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>AI-driven personalization and analytics require managed ML and data services on cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Retail Cloud Solutions</div>
            <h2 className="display-md">How GulfStream Powers Saudi Retail</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3 style={{ fontSize: '.95rem' }}>Elastic Auto-Scaling Architecture</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Auto-scaling architectures that provision capacity during peaks and scale down automatically, eliminating idle costs.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Omnichannel Integration Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Event-driven architectures synchronize inventory, orders, and customer data across channels in real time.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Retail Analytics &amp; AI</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Managed data lakes and ML pipelines power demand forecasting, segmentation, and recommendation engines.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>PCI DSS-Compliant Infrastructure</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Secure payment cloud with network segmentation, encryption, access controls, and continuous compliance monitoring.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📦</div>
                <h3 style={{ fontSize: '.95rem' }}>Supply Chain Visibility</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>IoT integration and real-time visibility platforms provide end-to-end supply chain transparency and control.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>FinOps for Retail</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>FinOps practices align cloud costs to revenue events with Reserved Instances and dynamic optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Retail Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-4 reveal" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3>Peak Season AutoScaling</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Auto-scale from baseline to 10x capacity during peak events, then scale down automatically to eliminate idle costs. Zero outages, zero manual intervention.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3>Omnichannel Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Event-driven architectures synchronizing inventory, pricing, and orders across e-commerce, mobile, POS, and stores in real time.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🤖</div>
                <h3>Retail AI &amp; Personalization</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud data lakes and ML pipelines power demand forecasting, customer segmentation, and personalized recommendations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3>PCI DSS Payment Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Secure, compliant payment processing with encryption, segmentation, controls, and continuous compliance monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📁 Results</div>
            <h2 className="display-md">Retail Cloud Results</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">28%</span>
              <div className="metric-label">Infrastructure Cost Reduction</div>
              <div className="metric-sub">Multi-branch retail chain</div>
            </div>
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Outages During Peak Events</div>
              <div className="metric-sub">Ramadan &amp; National Day</div>
            </div>
            <div className="metric-item"><span className="metric-value">40%</span>
              <div className="metric-label">Faster Page Load Times</div>
              <div className="metric-sub">Post-CloudFront CDN deployment</div>
            </div>
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">PCI DSS Compliance</div>
              <div className="metric-sub">Across all cloud environments</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Retail Cloud FAQ</h2>
          </div>
          <div className="faq-accordion reveal">
            {retailFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`retail-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`retail-faq-answer-${index}`}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
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
            <h2 className="display-md">Ready to Power Your Retail Cloud?</h2>
            <p>Book a free consultation and discover how GulfStream builds auto-scaling, PCI DSS-compliant cloud infrastructure that powers Saudi retail at every scale — across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Retail Cloud Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RetailContent;
