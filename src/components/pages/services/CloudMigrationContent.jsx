'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CloudMigrationContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Cloud Migration</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🚀 Cloud Migration &amp; Modernization</div>
          <h1 className="display-lg">Cloud Migration &amp; Modernization<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies designs and executes cloud migration projects in Saudi Arabia with zero business disruption — moving your workloads to AWS, Azure, or multi-cloud using our proven 6Rs methodology, wave-based planning, and post-migration optimization for enterprises in Riyadh, Jeddah, and Dammam.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Migration Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">35%</span>
                <span className="hero-quick-stat-label">Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">Zero</span>
                <span className="hero-quick-stat-label">Downtime</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">3 Month</span>
                <span className="hero-quick-stat-label">Time to Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 What You Get</div>
            <h2 className="display-md">What You Get with GulfStream</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>24/7 Migration Monitoring</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Continuous monitoring throughout every migration wave with real-time health checks, performance baselines, and immediate rollback capability.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">💰</div><h3>Cost Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Post-migration rightsizing and FinOps baked into every project — ensuring your cloud runs leaner from day one, not as an afterthought.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔒</div><h3>Security Compliance</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>NCA ECC, ISO 27001, and data sovereignty compliance maintained throughout the migration process and hardened in the target architecture.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Dedicated Cloud Engineers</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Certified multi-cloud migration architects assigned to your project from assessment through post-migration stabilization.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📈</div><h3>Real-Time Dashboards</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Live migration progress dashboards showing wave status, workload health, dependency mapping, and cutover readiness at a glance.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>SLA-Backed Support</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Committed SLAs for migration timelines, downtime windows, rollback procedures, and post-migration hypercare support periods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Migration Risks</div>
            <h2 className="display-md">Why Cloud Migrations Fail</h2>
            <p>Cloud migrations are complex and high-stakes. Without the right expertise and methodology, they commonly result in downtime, cost overruns, and security breaches.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">💥</div><h3>Unplanned Downtime</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Rushed migrations without proper runbooks and rollback plans lead to critical system outages that impact revenue and customer trust.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">💸</div><h3>Cost Overruns</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Lift-and-shift migrations with no cloud optimization result in cloud bills that exceed on-premises costs — defeating the business case.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔓</div><h3>Security Gaps</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Replicating insecure on-premises configurations to the cloud creates serious security vulnerabilities in your new environment.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>Dependency Blind Spots</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Undiscovered application dependencies cause cascading failures during cutovers, turning planned maintenance into extended outages.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🏛️</div><h3>Compliance Neglect</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Data sovereignty, NCA compliance, and Saudi regulatory requirements must be maintained in the cloud — and require specialist design.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🗂️</div><h3>No Post-Migration Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Migration teams move workloads and disappear. Without optimization, costs creep up and performance issues accumulate over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6Rs FRAMEWORK */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🗺️ Methodology</div>
            <h2 className="display-md">The 6Rs Migration Framework</h2>
            <p>We apply the proven 6Rs migration strategy, selecting the optimal approach for each workload in your environment.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card"><span className="badge badge-accent" style={{ marginBottom: '12px' }}>Rehost</span>
              <h3>Lift &amp; Shift</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Move workloads to the cloud with minimal changes. Fastest migration path for legacy systems requiring rapid datacenter exit.</p>
            </div>
            <div className="card"><span className="badge badge-primary" style={{ marginBottom: '12px' }}>Replatform</span>
              <h3>Lift, Tinker &amp; Shift</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Migrate with targeted optimizations — managed databases, containerization, or cloud-native services for key benefits.</p>
            </div>
            <div className="card"><span className="badge badge-accent" style={{ marginBottom: '12px' }}>Refactor</span>
              <h3>Re-architect</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Redesign for cloud-native using microservices, serverless, and managed services for maximum agility and cost efficiency.</p>
            </div>
            <div className="card"><span className="badge badge-primary" style={{ marginBottom: '12px' }}>Repurchase</span>
              <h3>Move to SaaS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Replace on-premises software with cloud SaaS alternatives — CRM, ERP, collaboration — eliminating maintenance overhead.</p>
            </div>
            <div className="card"><span className="badge badge-accent" style={{ marginBottom: '12px' }}>Retire</span>
              <h3>Decommission</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Identify and decommission low-utilization or redundant applications, reducing complexity and immediately lowering costs.</p>
            </div>
            <div className="card"><span className="badge badge-primary" style={{ marginBottom: '12px' }}>Retain</span>
              <h3>Keep On-Premises</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>For workloads with compliance, latency, or technical constraints, retain on-premises while planning future cloud readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📋 Our Process</div>
            <h2 className="display-md">Our Migration Process</h2>
          </div>
          <div className="timeline reveal">
            <div className="timeline-item">
              <div className="timeline-title">1. Discovery &amp; Assessment</div>
              <div className="timeline-desc">Comprehensive inventory of all workloads, dependencies, data flows, and compliance requirements using AWS Migration Evaluator and Azure Migrate.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">2. Migration Plan &amp; Wave Design</div>
              <div className="timeline-desc">Workloads grouped into waves based on complexity, dependency, and criticality. Target architectures, SLAs, and detailed runbooks for each wave.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">3. Proof of Concept (PoC)</div>
              <div className="timeline-desc">Subset migration to validate architecture, test connectivity, verify security controls, and fine-tune tooling before full-scale execution.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">4. Wave-by-Wave Migration</div>
              <div className="timeline-desc">Systematic migration with rollback procedures, validation checkpoints, and stakeholder sign-off at each stage.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">5. Cutover &amp; Go-Live</div>
              <div className="timeline-desc">Coordinated cutover events with real-time monitoring, rapid response teams, and immediate post-cutover health checks.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">6. Post-Migration Optimization</div>
              <div className="timeline-desc">Immediate rightsizing, cost optimization, and performance tuning — ensuring your cloud investment delivers ROI from day one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Migration Results</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Unplanned Downtime Events</div>
              <div className="metric-sub">Across all migration projects</div>
            </div>
            <div className="metric-item"><span className="metric-value">40%</span>
              <div className="metric-label">Avg. Performance Improvement</div>
              <div className="metric-sub">Post-migration vs on-premises</div>
            </div>
            <div className="metric-item"><span className="metric-value">35%</span>
              <div className="metric-label">Avg. Infrastructure Cost Reduction</div>
              <div className="metric-sub">vs legacy on-premises costs</div>
            </div>
            <div className="metric-item"><span className="metric-value">3mo</span>
              <div className="metric-label">Avg. Time to Value</div>
              <div className="metric-sub">From discovery to go-live</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Migration Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏢 Data Center Exit</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Complete datacenter decommissioning with full workload migration to AWS, Azure, Google Cloud, or Oracle Cloud — eliminating colocation costs, hardware refresh cycles, and physical infrastructure management for Saudi enterprises.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🔄 Legacy Modernization</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Transform legacy monolithic applications into cloud-native microservices, containerized deployments, and serverless architectures for improved agility and reduced operational costs.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>☁️ Hybrid Cloud Adoption</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Strategic hybrid cloud architectures connecting on-premises infrastructure with AWS, Azure, or multi-cloud environments using ExpressRoute, Direct Connect, and VPN for enterprises in Riyadh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏢 Industries</div>
            <h2 className="display-md">Industries We Serve</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Banking &amp; Finance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>SAMA-compliant cloud migration for core banking, payment systems, and regulatory workloads with zero-downtime cutover strategies.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>HIPAA-aligned migration of healthcare systems, EHR platforms, and medical imaging with Saudi data residency compliance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 E-Commerce &amp; Retail</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Scalable cloud migration for e-commerce platforms with performance optimization, auto-scaling, and peak-season readiness.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>NCA ECC-compliant migrations for government agencies and Vision 2030 digital transformation programs in Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 SaaS &amp; Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Cloud-native modernization for SaaS companies migrating to Kubernetes, serverless, and managed services for the Middle East market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Migration Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS MGN</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Server Migration</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Migrate</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Assessment &amp; Migration</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS DMS</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Database Migration</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Infrastructure as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>CloudEndure</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Live Migration</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Docker / K8s</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Containerization</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Migration Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Progress Tracking</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Ansible</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Configuration Mgmt</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚖️ Compare</div>
            <h2 className="display-md">Why GulfStream vs Others</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight-col">GulfStream</th>
                  <th>Freelancers</th>
                  <th>In-House</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Proven 6Rs Methodology</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Zero-Downtime Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Certified Migration Architects</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Post-Migration Optimization</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>SLA Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>24/7 Managed Services</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOCATION SEO */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Cloud Migration Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud migration partner based in Saudi Arabia, GulfStream Technologies delivers end-to-end migration services for enterprises in Riyadh, Jeddah, and Dammam. Our local team ensures NCA ECC compliance, data sovereignty requirements, and Arabic-language support throughout every phase of your cloud migration journey.</p>
            <p style={{ marginTop: '16px' }}>Post-migration, we transition seamlessly into our <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link> for ongoing 24/7 operations. Our migration expertise spans <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud services</Link>, and multi-cloud environments — with integrated <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link> from day one.</p>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How long does a cloud migration take?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Migration timelines depend on complexity. Simple lift-and-shift migrations can complete in 4-8 weeks, while full enterprise migrations with modernization typically take 3-6 months. GulfStream uses wave-based planning for predictable delivery.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Is downtime required during cloud migration?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream designs zero-downtime migration strategies using blue-green deployments, database replication, and phased cutovers. Critical applications maintain availability throughout.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is the 6Rs migration framework?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>The 6Rs framework classifies each workload as Rehost, Replatform, Refactor, Repurchase, Retire, or Retain — ensuring the optimal migration strategy for each application in your portfolio.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much does cloud migration cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs vary based on environment size, complexity, and modernization scope. GulfStream provides a free migration assessment with detailed cost estimates. Most enterprises see 35% infrastructure cost reduction. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link>.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you provide post-migration support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Every migration includes post-migration optimization — rightsizing, cost optimization, performance tuning, and transition to our managed services for ongoing 24/7 cloud operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Ready to Migrate to the Cloud?</h2>
            <p>Book a free Migration Assessment and receive a detailed cloud readiness report, target architecture recommendations, and a migration roadmap — at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free migration assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">🚀 Book Free Migration Assessment</Link>
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudMigrationContent;
