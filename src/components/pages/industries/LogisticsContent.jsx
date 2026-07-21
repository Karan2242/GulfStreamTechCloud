'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const LogisticsContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const logisticsFaqs = [
    {
      question: 'What is logistics cloud infrastructure?',
      answer: 'Logistics cloud infrastructure supports fleet management, IoT data, supply chain analytics, and warehouse systems with reliable, scalable operations.',
    },
    {
      question: 'Do you support logistics IoT and real-time data?',
      answer: 'Yes. We design and manage cloud platforms for real-time IoT telemetry, tracking, and analytics across AWS and Azure.',
    },
    {
      question: 'Which cloud platforms do you support for logistics?',
      answer: 'We support AWS, Microsoft Azure, Google Cloud, and Oracle Cloud, choosing the best platform for your logistics workload and data needs.',
    },
    {
      question: 'Can you reduce logistics cloud costs?',
      answer: 'Yes. Our logistics clients save 25-35% through elastic scaling, workload optimization, and FinOps governance.',
    },
    {
      question: 'Why choose GulfStream for logistics cloud operations?',
      answer: 'Because we deliver reliable, compliant logistics cloud solutions with local Saudi support and multi-cloud engineering expertise.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Logistics</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Logistics Cloud Solutions Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>resilient, always-on multi-cloud infrastructure</strong> that powers Saudi Arabia’s most demanding logistics operations — from real-time fleet tracking and IoT integration to supply chain analytics and warehouse management systems.</p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Logistics Cloud Review</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Multi-cloud certified logistics cloud experts</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Operations Uptime</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">sub-1s</span>
                <span className="hero-quick-stat-label">IoT Processing</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
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
            <h2 className="display-md">Logistics Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⏰</div>
                <h3 style={{ fontSize: '.95rem' }}>24/7 Uptime Demands</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Fleet management, tracking systems, and warehouse operations demand always-on infrastructure; downtime means missed SLAs and lost revenue.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📡</div>
                <h3 style={{ fontSize: '.95rem' }}>IoT Data Volumes</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>GPS trackers and sensors generate millions of data points hourly; processing and storing real-time data requires elastic, cost-efficient architecture.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>Legacy System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>ERP, TMS, and WMS systems use proprietary formats creating integration gaps; modern cloud services struggle with legacy system compatibility.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Cross-Border Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Operations spanning Saudi Arabia, GCC, and international routes need data sovereignty and compliance with multiple regional regulations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Cloud Cost Optimization</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Unpredictable data processing loads complicate cost management; IoT and analytics workloads drive expenses without proportional business value.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Cargo &amp; Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Routes, cargo manifests, and shipment data are commercially sensitive; breaches compromise operational security and erode customer trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Powers Logistics in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <h3 style={{ fontSize: '.95rem' }}>High-Availability Infrastructure</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Multi-AZ, multi-region architecture with automated failover ensures operations continue even during cloud provider incidents.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📡</div>
                <h3 style={{ fontSize: '.95rem' }}>IoT Data Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>AWS IoT Core and Azure IoT Hub platforms process millions of fleet and warehouse sensor events in real time sub-second latency.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Supply Chain Analytics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>AWS Redshift and Azure Synapse deliver real-time supply chain visibility from origin to delivery with operational leadership dashboards.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>API and ETL integration connect SAP, Oracle TMS, and WMS to cloud analytics platforms creating unified operational visibility.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🚛</div>
                <h3 style={{ fontSize: '.95rem' }}>Fleet Management Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Scalable backends for fleet management with real-time telemetry, route optimization, predictive maintenance, and driver performance analytics.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Data Security &amp; Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>End-to-end encryption with granular access controls and NCA-compliant architecture protecting cargo, routes, and customer shipment data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Logistics Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-4 reveal" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🚛</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Real-Time Fleet Tracking</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud-native fleet backends process GPS, fuel, and telemetry from thousands of vehicles with real-time dashboards and predictive maintenance.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">📦</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Warehouse Management Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Scalable WMS platforms supporting barcode/RFID scanning, inventory tracking, pick-pack-ship workflows, and ERP system integration.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">🌡️</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Cold Chain IoT Monitoring</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>IoT Hub ingestion for temperature and condition sensors with automated alerts and compliance logging for food and pharmaceutical.</p>
            </div>
            <div className="card premium-card" style={{ minHeight: '100%' }}>
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.9rem', lineHeight: 1.3 }}>Supply Chain Analytics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Cloud data lakes connect TMS, WMS, and ERP sources into unified dashboards providing 360° visibility origin to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Logistics Cloud Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">99.99%</span>
              <div className="metric-label">Operations Uptime</div>
              <div className="metric-sub">Fleet &amp; warehouse systems</div>
            </div>
            <div className="metric-item"><span className="metric-value">sub-1s</span>
              <div className="metric-label">IoT Data Processing</div>
              <div className="metric-sub">Real-time fleet telemetry</div>
            </div>
            <div className="metric-item"><span className="metric-value">30%</span>
              <div className="metric-label">Infrastructure Cost Reduction</div>
              <div className="metric-sub">Through elastic scaling</div>
            </div>
            <div className="metric-item"><span className="metric-value">360°</span>
              <div className="metric-label">Supply Chain Visibility</div>
              <div className="metric-sub">Origin to final delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Logistics Cloud FAQ</h2>
          </div>
          <div className="faq-accordion reveal">
            {logisticsFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`logistics-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`logistics-faq-answer-${index}`}
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
            <h2 className="display-md">Optimize Your Logistics Cloud Operations</h2>
            <p>Book a free consultation to discover how GulfStream builds always-on cloud infrastructure that powers your logistics operations at every scale — across AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud in Saudi Arabia.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Logistics Review</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LogisticsContent;
