'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const LogisticsContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/industries">Industries</Link><span>›</span><span>Logistics</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🚛 Logistics Cloud</div>
          <h1 className="display-lg">Logistics Cloud Solutions<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>GulfStream Technology delivers <strong>resilient, always-on multi-cloud infrastructure</strong> that powers Saudi Arabia’s most demanding logistics operations — from real-time fleet tracking and IoT integration to supply chain analytics and warehouse management systems.</p>
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
          <div style={{ marginTop: '24px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Logistics Cloud Review</Link>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Saudi Arabia&apos;s logistics sector is a cornerstone of Vision 2030, with massive investment in supply chain infrastructure, port expansions, and last-mile delivery networks. <strong>Logistics cloud infrastructure in Saudi Arabia</strong> must support 24/7 operations, process millions of IoT data points in real time, and integrate legacy ERP and TMS systems with modern cloud analytics. GulfStream Technology provides <strong>always-on cloud solutions</strong> on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link> and <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link> — purpose-built for logistics companies across Riyadh, Jeddah, and the GCC.</p>
            <p>With deep expertise in <strong>AWS IoT</strong>, real-time data processing, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization</Link>, we help logistics enterprises achieve 99.99% uptime, sub-second IoT telemetry processing, and 30% infrastructure cost reduction — without compromising operational reliability or <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>data security</Link>.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Challenges</div>
            <h2 className="display-md">Logistics Cloud Challenges in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⏰</div>
                <h3 style={{ fontSize: '.95rem' }}>24/7 Uptime Demands</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Logistics never stops. Fleet management, tracking systems, and warehouse operations require always-on cloud infrastructure — any downtime translates directly to missed SLAs and lost revenue.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📡</div>
                <h3 style={{ fontSize: '.95rem' }}>IoT Data Volumes</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>GPS trackers, temperature sensors, and warehouse scanners generate millions of data points per hour. Processing and storing this data in real time requires elastic, cost-efficient cloud architectures.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>Legacy System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>ERP, TMS, and WMS systems often use proprietary data formats and APIs that are difficult to integrate with modern cloud services, creating visibility gaps across the supply chain.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🌐</div>
                <h3 style={{ fontSize: '.95rem' }}>Cross-Border Complexity</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Logistics operations spanning Saudi Arabia, the GCC, and international routes require cloud infrastructure with data sovereignty capabilities and compliance with multiple regional regulations.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <h3 style={{ fontSize: '.95rem' }}>Cloud Cost Optimization</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Unpredictable data processing loads make cloud cost management complex. Without proper architecture, IoT and analytics workloads drive up costs without proportional business value.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Cargo &amp; Data Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Logistics data — routes, cargo manifests, client shipments — is commercially sensitive. Data breaches can compromise operational security and erode customer trust irreparably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Solutions</div>
            <h2 className="display-md">How GulfStream Powers Logistics in Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <h3 style={{ fontSize: '.95rem' }}>High-Availability Infrastructure</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Multi-AZ, multi-region cloud architecture with automated failover and 99.99% uptime SLAs ensures your logistics operations never stop — even during cloud provider incidents.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📡</div>
                <h3 style={{ fontSize: '.95rem' }}>IoT Data Platform</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Managed IoT data ingestion platforms on AWS IoT Core or Azure IoT Hub — processing millions of fleet and warehouse sensor events in real time with sub-second latency.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <h3 style={{ fontSize: '.95rem' }}>Supply Chain Analytics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cloud data lake and analytics architecture (AWS Redshift, Azure Synapse) delivering real-time supply chain visibility — from origin to delivery — with operational dashboards for leadership.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔗</div>
                <h3 style={{ fontSize: '.95rem' }}>System Integration</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>API and ETL integration connecting SAP, Oracle TMS, WMS, and proprietary ERP systems to cloud analytics and AI platforms — creating a unified operational view.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🚛</div>
                <h3 style={{ fontSize: '.95rem' }}>Fleet Management Cloud</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Scalable cloud backends for fleet management platforms — real-time telemetry processing, route optimization, predictive maintenance analytics, and driver performance monitoring.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3 style={{ fontSize: '.95rem' }}>Data Security &amp; Compliance</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>End-to-end encryption for logistics data, granular access controls, and NCA-compliant cloud architecture protecting cargo manifests, route data, and customer shipment information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Use Cases</div>
            <h2 className="display-md">Use Cases for Logistics Cloud in Saudi Arabia</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🚛 Real-Time Fleet Tracking Platform</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Cloud-native fleet management backends processing GPS, fuel, and telemetry data from thousands of vehicles across Saudi Arabia — with real-time dashboards, route optimization, and predictive maintenance alerts.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>📦 Warehouse Management Cloud</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Scalable cloud infrastructure for WMS platforms supporting barcode/RFID scanning, inventory tracking, pick-pack-ship workflows, and integration with ERP and e-commerce systems.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>🌡️ Cold Chain IoT Monitoring</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>AWS IoT or Azure IoT Hub ingestion for temperature, humidity, and condition sensors on cold chain shipments — with automated alerts, compliance logging, and analytics for food and pharmaceutical logistics.</p>
            </div>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>📊 Supply Chain Analytics Platform</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.7 }}>Cloud data lakes connecting TMS, WMS, and ERP data sources into unified supply chain analytics dashboards — enabling 360° visibility from origin to final delivery for Saudi logistics operators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Logistics Cloud FAQ</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is logistics cloud infrastructure?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Logistics cloud infrastructure is a purpose-built cloud environment designed to support always-on fleet management, real-time IoT data processing from GPS and temperature sensors, supply chain analytics, and warehouse management — with 99.99% uptime and elastic scaling for peak demand.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you handle IoT data for logistics?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We build managed IoT data platforms on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS IoT Core</Link> or <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure IoT Hub</Link> that process millions of fleet and warehouse sensor events per hour in real time with sub-second latency — supporting GPS tracking, temperature monitoring, and predictive maintenance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you support for logistics?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We design logistics cloud architectures using AWS IoT, Redshift, and Lambda, or Azure IoT Hub, Synapse Analytics, and Azure Functions — based on your existing technology stack.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you reduce logistics cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps practice</Link> delivers an average 30% infrastructure cost reduction for logistics companies through elastic scaling, Spot Instance automation for batch analytics, and right-sizing of always-on fleet management systems.</p>
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
            <Link href="/industries/tech-saas" className="card" style={{ textAlign: 'center', textDecoration: 'none', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💻</div>
              <h3 style={{ fontSize: '.9rem' }}>SaaS Cloud</h3>
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
            <h2 className="display-md">Optimize Your Logistics Cloud Operations</h2>
            <p>Book a free consultation to discover how GulfStream builds always-on cloud infrastructure that powers your logistics operations at every scale — across AWS, Azure, Google Cloud, and Oracle Cloud in Saudi Arabia.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month</p>
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
