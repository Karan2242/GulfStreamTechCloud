'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CaseStudiesContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Case Studies</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>📁 Cloud Case Studies</div>
          <h1 className="display-lg">Cloud Case Studies<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>Explore real cloud transformation case studies from Saudi Arabia — how GulfStream Technologies helped enterprises across retail, healthcare, and SaaS achieve up to 35% cloud cost savings, 99.99% uptime, and 24/7 monitoring across AWS, Azure, Google Cloud, and Oracle Cloud. Every engagement is measured by results.</p>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section-sm">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>GulfStream Technologies has helped enterprises across Saudi Arabia achieve measurable cloud cost savings, improved security posture, and higher uptime through <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link>, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link>, and <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>cloud migration</Link> across AWS, Azure, Google Cloud, and Oracle Cloud. These case studies document real results from enterprises in Riyadh, Jeddah, and Dammam.</p>
            <p style={{ marginTop: '16px' }}>From retail chains managing peak-season traffic to healthcare organizations meeting strict compliance requirements, our <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security</Link> and optimization expertise delivers outcomes that matter — reduced costs, zero unplanned outages, and full NCA ECC compliance. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free cloud assessment</Link> to see what results we can deliver for your organization.</p>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🎯 Key Takeaways</div>
            <h2 className="display-md">Cloud Transformation Results at a Glance</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">28–35%</span>
              <div className="metric-label">Cloud Cost Reduction</div>
              <div className="metric-sub">Across all engagements</div>
            </div>
            <div className="metric-item"><span className="metric-value">99.99%</span>
              <div className="metric-label">Application Uptime</div>
              <div className="metric-sub">For managed environments</div>
            </div>
            <div className="metric-item"><span className="metric-value">60–90</span>
              <div className="metric-label">Days to Results</div>
              <div className="metric-sub">Measurable cost savings</div>
            </div>
            <div className="metric-item"><span className="metric-value">0</span>
              <div className="metric-label">Unplanned Outages</div>
              <div className="metric-sub">Post-migration track record</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 1: RETAIL */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }} className="reveal">
            <div className="case-study-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                <div>
                  <div className="case-tag">Retail</div>
                  <h2 className="display-sm" style={{ marginBottom: '16px' }}>AWS Cost Optimization Case Study: 28% Reduction for Saudi Retail Chain</h2>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Client Profile</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>A leading Saudi retail chain with 40+ branches in Riyadh, Jeddah, and Dammam, an established e-commerce platform, and strong omnichannel operations. Monthly AWS spend had grown to SAR 280,000 with unclear attribution and increasing performance issues.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>Regular performance degradation during peak hours, no Reserved Instance strategy, poor resource tagging, and 100% On-Demand pricing. Cloud costs were growing 15% month-over-month without corresponding revenue growth.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>GulfStream Solution</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>Comprehensive <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps assessment</Link>, tagging governance, rightsized 35+ EC2 instances, Reserved Instance portfolio for baseline compute, CloudFront CDN with auto-scaling, and 24/7 monitoring with automated runbooks via our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>.</p>
                  </div>
                  <div style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: 'var(--radius-md)', padding: '16px', marginTop: '16px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', fontStyle: 'italic', lineHeight: 1.7 }}>"GulfStream reduced our AWS bill by 28% in the first quarter while simultaneously improving our site performance during peak traffic. Their FinOps approach changed how we think about cloud spending."</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.8rem', marginTop: '8px' }}>— IT Director, Saudi Retail Chain</p>
                  </div>
                </div>
                <div>
                  <div style={{ background: 'var(--dark-bg)', border: '1px solid var(--dark-border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '20px' }}>Results Achieved</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>28%</div><div className="case-result-label">Cloud Cost Reduction</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>40%</div><div className="case-result-label">Faster Page Loads</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>0</div><div className="case-result-label">Peak Outages in 12mo</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>3mo</div><div className="case-result-label">Time to Results</div></div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '8px' }}>Before vs After</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '.85rem' }}>
                      <div style={{ background: 'rgba(255,59,48,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>Before:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>SAR 280K/mo, 100% On-Demand, peak outages</span></div>
                      <div style={{ background: 'rgba(52,199,89,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>After:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>SAR 202K/mo, RI portfolio, zero outages</span></div>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '12px' }}>Tools &amp; Services Used</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="badge badge-primary">AWS EC2</span>
                      <span className="badge badge-primary">Auto Scaling</span>
                      <span className="badge badge-accent">CloudFront CDN</span>
                      <span className="badge badge-primary">AWS Cost Explorer</span>
                      <span className="badge badge-accent">Reserved Instances</span>
                      <span className="badge badge-primary">CloudWatch</span>
                      <span className="badge badge-accent">FinOps Framework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-sm" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Want Results Like These for Your Business?</h2>
            <p>Book a free Cloud Assessment and discover exactly where your cloud environment is overspending — our team delivers actionable recommendations within 5 business days.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
              <Link href="/services" className="btn-white-outline">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 2: HEALTHCARE */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '60px' }} className="reveal">
            <div className="case-study-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                <div>
                  <div className="case-tag">Healthcare</div>
                  <h2 className="display-sm" style={{ marginBottom: '16px' }}>Azure Migration Success Story: 99.99% Uptime for Saudi Hospital Group</h2>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Client Profile</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>A growing private hospital group in Saudi Arabia operating 3 facilities with 800+ beds in Riyadh, a critical EHR system, PACS imaging platform, and an expanding telemedicine service — all requiring enterprise-level cloud infrastructure.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>2–4 system outages per month on on-premises infrastructure, impacting clinical workflows and patient care. Needed to migrate to a HIPAA-aligned, high-availability cloud environment with zero disruption to clinical operations.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>GulfStream Solution</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>Multi-AZ <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure architecture</Link> with active-passive disaster recovery, Microsoft Defender for Cloud with HIPAA compliance controls, EHR and PACS <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>cloud migration</Link> with intelligent blob storage for DICOM archival, and 24/7 monitoring with 15-minute RTO.</p>
                  </div>
                  <div style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: 'var(--radius-md)', padding: '16px', marginTop: '16px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', fontStyle: 'italic', lineHeight: 1.7 }}>"Moving to Azure with GulfStream eliminated the clinical outages that were impacting patient care. Their 24/7 monitoring gives our medical staff complete confidence in our systems."</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.8rem', marginTop: '8px' }}>— CIO, Private Hospital Group, Riyadh</p>
                  </div>
                </div>
                <div>
                  <div style={{ background: 'var(--dark-bg)', border: '1px solid var(--dark-border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '20px' }}>Results Achieved</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>99.99%</div><div className="case-result-label">Application Uptime</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>100%</div><div className="case-result-label">HIPAA Compliance</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>45%</div><div className="case-result-label">Storage Cost Reduction</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>0</div><div className="case-result-label">Clinical Outages</div></div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '8px' }}>Before vs After</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '.85rem' }}>
                      <div style={{ background: 'rgba(255,59,48,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>Before:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>2-4 outages/mo, on-prem, no DR</span></div>
                      <div style={{ background: 'rgba(52,199,89,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>After:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>99.99% uptime, HIPAA, 15-min RTO</span></div>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '12px' }}>Tools &amp; Services Used</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="badge badge-primary">Azure VMs</span>
                      <span className="badge badge-primary">Azure SQL</span>
                      <span className="badge badge-accent">Blob Storage</span>
                      <span className="badge badge-primary">Defender for Cloud</span>
                      <span className="badge badge-accent">Azure Backup</span>
                      <span className="badge badge-primary">Azure Monitor</span>
                      <span className="badge badge-accent">Site Recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 3: SaaS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="reveal">
            <div className="case-study-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                <div>
                  <div className="case-tag">SaaS Platform</div>
                  <h2 className="display-sm" style={{ marginBottom: '16px' }}>Cloud Transformation Case Study: 35% Savings for Saudi SaaS Provider</h2>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Client Profile</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>A fast-growing Saudi enterprise SaaS provider serving 200+ enterprise clients across the GCC from Riyadh. Their AWS bill had reached SAR 180,000/month, growing at 25% per month without corresponding optimization.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>All workloads on oversized On-Demand EC2 instances, no Kubernetes cost governance, no Reserved Instance strategy, and 60% of AWS spend on workloads eligible for Spot or rightsizing. SOC 2 compliance required by enterprise clients but not yet achieved.</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>GulfStream Solution</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>EKS with Karpenter for dynamic node provisioning, strategic Reserved Instance portfolio, Spot Instances for batch workloads, per-tenant <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cost attribution dashboards</Link>, and SOC 2-aligned <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security governance</Link> with automated compliance evidence via <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link>.</p>
                  </div>
                  <div style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: 'var(--radius-md)', padding: '16px', marginTop: '16px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', fontStyle: 'italic', lineHeight: 1.7 }}>"GulfStream's FinOps approach saved us 35% on infrastructure costs while achieving SOC 2 compliance in 60 days. The per-tenant cost dashboards transformed our unit economics."</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.8rem', marginTop: '8px' }}>— VP Engineering, Enterprise SaaS Provider, Riyadh</p>
                  </div>
                </div>
                <div>
                  <div style={{ background: 'var(--dark-bg)', border: '1px solid var(--dark-border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '20px' }}>Results Achieved</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>35%</div><div className="case-result-label">Infrastructure Savings</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>60 days</div><div className="case-result-label">Time to Results</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>SOC 2</div><div className="case-result-label">Compliance Achieved</div></div>
                      <div><div className="case-result" style={{ fontSize: '2rem' }}>100%</div><div className="case-result-label">Cost Visibility</div></div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '8px' }}>Before vs After</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '.85rem' }}>
                      <div style={{ background: 'rgba(255,59,48,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>Before:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>SAR 180K/mo, no compliance, no visibility</span></div>
                      <div style={{ background: 'rgba(52,199,89,0.08)', padding: '12px', borderRadius: 'var(--radius-md)' }}><strong style={{ color: 'var(--text-muted)' }}>After:</strong><br /><span style={{ color: 'var(--text-secondary)' }}>SAR 117K/mo, SOC 2, per-tenant COGS</span></div>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '12px' }}>Tools &amp; Services Used</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="badge badge-primary">AWS EKS</span>
                      <span className="badge badge-primary">Karpenter</span>
                      <span className="badge badge-accent">Spot Instances</span>
                      <span className="badge badge-primary">Reserved Instances</span>
                      <span className="badge badge-accent">Security Hub</span>
                      <span className="badge badge-primary">GuardDuty</span>
                      <span className="badge badge-accent">FinOps Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY INSIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">💡 Industry Insights</div>
            <h2 className="display-md">Cloud Transformation Insights from Saudi Arabia</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 Retail &amp; E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Saudi retail enterprises typically overspend 20-40% on cloud through oversized instances and On-Demand pricing. FinOps-driven optimization with Reserved Instances and auto-scaling delivers consistent 25-30% savings while improving peak performance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Healthcare cloud migrations in Saudi Arabia require HIPAA alignment, data sovereignty, and zero-downtime strategies. Multi-AZ architectures with automated disaster recovery eliminate the clinical outages that impact patient care.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 SaaS &amp; Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>SaaS companies scaling in Saudi Arabia and the Middle East need Kubernetes cost governance, per-tenant unit economics, and Spot optimization. Combined with compliance automation, this drives 30-35% infrastructure savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SEO */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Serving Enterprises in Riyadh &amp; Saudi Arabia</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>GulfStream Technologies is headquartered in Riyadh and delivers <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link> to enterprises across Saudi Arabia and the Middle East. Our team of certified cloud engineers combines deep expertise in <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud services</Link>, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization</Link>, and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security governance</Link> with an understanding of Saudi regulatory requirements including NCA ECC compliance.</p>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What industries does GulfStream serve with Managed Cloud Services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream Technologies serves enterprises across retail, healthcare, SaaS, logistics, banking, government, and professional services in Saudi Arabia with multi-Managed Cloud Services across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What results can be achieved with cloud transformation?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Our clients typically achieve 28-35% cloud cost reduction, 99.99% application uptime, zero unplanned outages, and full NCA ECC/ISO 27001 compliance within 60-90 days of engagement.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How long before cloud transformation results are visible?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Most enterprises see measurable cost savings within 60-90 days. Performance and uptime improvements are typically visible within the first 30 days. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link> to get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Ready to Write Your Success Story?</h2>
            <p>Book a free Cloud Assessment and discover exactly how much you can save with GulfStream managing your cloud in Saudi Arabia — at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free cloud assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Cloud Assessment Saudi Arabia</Link>
              <Link href="/pricing" className="btn-white-outline">💰 Get Cloud Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesContent;
