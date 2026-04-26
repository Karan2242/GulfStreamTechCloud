'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import HeroSection from './cloud-managed/HeroSection';
import PlatformSelector from './cloud-managed/PlatformSelector';
import ServicesGrid from './cloud-managed/ServicesGrid';
import ComparisonTable from './cloud-managed/ComparisonTable';
import CTASection from './cloud-managed/CTASection';

const CloudManagedServicesContent = () => {
  useReveal();

  return (
    <main>
      <HeroSection />
      <PlatformSelector />
      <ServicesGrid />

      {/* WHY Managed Cloud Services */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⭐ Key Benefits</div>
            <h2 className="display-md">Why Outsource Cloud Management?</h2>
            <p>Enterprises across Riyadh, Jeddah, and Dammam partner with GulfStream Technologies for measurable cloud outcomes.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <h3>Reduce Cloud Costs</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>FinOps-driven management delivers an average 30% cost reduction across all cloud platforms within the first 90 days.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <h3>Enterprise Security</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Continuous security monitoring, IAM governance, and compliance automation aligned to NCA ECC and ISO 27001.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">⏱️</div>
                <h3>24/7 NOC Operations</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Human-backed monitoring and incident response around the clock — not just automated alerts.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">📈</div>
                <h3>Performance Tuning</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Continuous rightsizing, auto-scaling optimization, and architecture reviews keep workloads at peak efficiency.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <h3>Certified Expert Engineers</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Certified architects and engineers across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle</Link>, and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> — without the hiring overhead.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <h3>Saudi-Based Operations</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Local team in Riyadh ensuring compliance with Saudi regulations, Arabic language support, and time-zone aligned operations.</p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />
      <CTASection />
    </main>
  );
};

export default CloudManagedServicesContent;
