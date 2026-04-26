'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef(null);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={() => setIsActive(!isActive)}>
        {question}
        <div className="faq-toggle">+</div>
      </div>
      <div 
        className="faq-answer" 
        ref={contentEl} 
        style={isActive && contentEl.current ? { maxHeight: contentEl.current.scrollHeight + 'px' } : { maxHeight: '0px' }}
      >
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
};

const PricingContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Pricing</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>💰 Pricing</div>
          <h1 className="display-lg">Managed Cloud Services Pricing<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>Transparent, enterprise-grade multi-Managed Cloud Services pricing starting from SAR 8,500/month — with no setup fees, no lock-in contracts, and no markup on cloud provider costs. Every engagement starts with a free Cloud Assessment to right-size your plan.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card reveal">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">
                <span className="price-currency">SAR</span>
                <span className="price-amount">8,500</span>
              </div>
              <div className="price-period">per month · billed monthly</div>
              <div className="pricing-desc">For growing businesses taking their first steps in managed cloud with up to 2 cloud accounts and straightforward workloads.</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><div className="check-icon">✓</div>Up to 2 Cloud Accounts (AWS, Azure, GCP, or OCI)</li>
                <li><div className="check-icon">✓</div>Up to 20 Managed Resources</li>
                <li><div className="check-icon">✓</div>Business Hours Monitoring (8am–6pm)</li>
                <li><div className="check-icon">✓</div>Monthly Cost Optimization Review</li>
                <li><div className="check-icon">✓</div>Basic FinOps Dashboard</li>
                <li><div className="check-icon">✓</div>Automated Patch Management</li>
                <li><div className="check-icon">✓</div>Monthly Performance Report</li>
                <li><div className="check-icon">✓</div>Email &amp; Ticket Support</li>
                <li><div className="check-icon">✓</div>Quarterly Architecture Review</li>
              </ul>
              <Link href="/book-a-review" className="btn btn-outline w-full" style={{ justifyContent: 'center', marginTop: '32px' }}>Get Started</Link>
            </div>

            {/* Growth */}
            <div className="pricing-card popular reveal">
              <div className="pricing-popular-badge">⭐ Most Popular</div>
              <div className="pricing-tier">Growth</div>
              <div className="pricing-price">
                <span className="price-currency">SAR</span>
                <span className="price-amount">22,000</span>
              </div>
              <div className="price-period">per month · billed monthly</div>
              <div className="pricing-desc">For mid-market enterprises with multiple cloud accounts, production workloads requiring 24/7 attention and active FinOps governance.</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><div className="check-icon">✓</div>Up to 10 Cloud Accounts (AWS, Azure, GCP &amp; OCI)</li>
                <li><div className="check-icon">✓</div>Up to 100 Managed Resources</li>
                <li><div className="check-icon">✓</div><strong>24/7 NOC Monitoring</strong></li>
                <li><div className="check-icon">✓</div>Full FinOps Dashboard &amp; Chargeback</li>
                <li><div className="check-icon">✓</div>Monthly FinOps Optimization Sprints</li>
                <li><div className="check-icon">✓</div>Security Posture Management (CSPM)</li>
                <li><div className="check-icon">✓</div>Reserved Instance Planning</li>
                <li><div className="check-icon">✓</div>Anomaly Detection &amp; Budget Alerts</li>
                <li><div className="check-icon">✓</div>CI/CD Pipeline Support</li>
                <li><div className="check-icon">✓</div>Dedicated Account Manager</li>
                <li><div className="check-icon">✓</div>Monthly Executive Reports</li>
                <li><div className="check-icon">✓</div>Priority Phone &amp; Slack Support</li>
              </ul>
              <Link href="/book-a-review" className="btn btn-primary w-full" style={{ justifyContent: 'center', marginTop: '32px' }}>Get Started</Link>
            </div>

            {/* Premium */}
            <div className="pricing-card reveal">
              <div className="pricing-tier">Premium</div>
              <div className="pricing-price">
                <span className="price-currency">SAR</span>
                <span className="price-amount">55,000</span>
              </div>
              <div className="price-period">per month · billed monthly</div>
              <div className="pricing-desc">For large enterprises with complex multi-cloud environments requiring dedicated engineering support, SLA guarantees, and board-level reporting.</div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li><div className="check-icon">✓</div>Unlimited Cloud Accounts</li>
                <li><div className="check-icon">✓</div>Unlimited Managed Resources</li>
                <li><div className="check-icon">✓</div>24/7 NOC + Dedicated Engineer</li>
                <li><div className="check-icon">✓</div>Multi-Cloud (AWS, Azure, GCP &amp; OCI)</li>
                <li><div className="check-icon">✓</div>Full FinOps Program (All Phases)</li>
                <li><div className="check-icon">✓</div>Enterprise Security &amp; Governance</li>
                <li><div className="check-icon">✓</div>Compliance Automation (ISO/NCA)</li>
                <li><div className="check-icon">✓</div>Custom SLA (99.99% Uptime)</li>
                <li><div className="check-icon">✓</div>Disaster Recovery Design &amp; Testing</li>
                <li><div className="check-icon">✓</div>Architecture Advisory Service</li>
                <li><div className="check-icon">✓</div>Quarterly CTO/CIO Review</li>
                <li><div className="check-icon">✓</div>White-Glove Onboarding</li>
              </ul>
              <Link href="/contact" className="btn btn-accent w-full" style={{ justifyContent: 'center', marginTop: '32px' }}>Contact Sales</Link>
            </div>
          </div>

          <div className="text-center mt-6 reveal">
            <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}>
              All prices are listed in SAR and exclude VAT. Custom enterprise pricing available for larger environments. <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact our sales team</Link> for a tailored quote.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN EVERY PLAN */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">✅ Every Plan Includes</div>
            <h2 className="display-md">What&apos;s Included in Every Managed Services Plan</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>☁️ Cloud Monitoring</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Proactive monitoring of compute, storage, networking, and application health with automated alerting and incident response.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>💰 FinOps Dashboard</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Real-time <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cost visibility</Link> across all accounts with budget alerts, anomaly detection, and monthly optimization recommendations.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>🔒 Security Baseline</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>CIS benchmark compliance, IAM governance, <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security posture management</Link>, and automated patch management from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>📊 Monthly Reports</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Detailed executive reports covering cost trends, performance metrics, security posture, and optimization recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📋 How It Works</div>
            <h2 className="display-md">How Managed Cloud Services Pricing Works</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>1️⃣</div>
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Free Cloud Assessment</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>We audit your cloud environment across AWS, Azure, Google Cloud, or Oracle Cloud, identify savings opportunities, and recommend the right plan — at no cost or commitment.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>2️⃣</div>
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>2-Week Onboarding</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Structured onboarding: account access, tooling deployment, monitoring setup, FinOps dashboard, and security baseline — fully managed by day 14.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>3️⃣</div>
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Ongoing Management</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Continuous monitoring, monthly optimization sprints, quarterly architecture reviews, and dedicated support — with measurable savings within 60-90 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Not Sure Which Plan Fits Your Business?</h2>
            <p>Book a free Cloud Assessment — our team will analyze your current cloud environment across AWS, Azure, Google Cloud, or Oracle Cloud and recommend the optimal plan based on your cloud footprint, team size, and growth objectives.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI OF MANAGED SERVICES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📈 ROI</div>
            <h2 className="display-md">ROI of Managed Cloud Services</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Our clients typically recover the full cost of managed services through cloud savings alone — within the first 60-90 days. See how the numbers work for a typical Growth plan client.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '16px', fontSize: '1.05rem' }}>💸 Before GulfStream</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>Monthly Cloud Spend</span><span>SAR 150,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>Wasted Spend (est. 30%)</span><span style={{ color: '#FF6B6B' }}>SAR 45,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>Internal Cloud Team Cost</span><span>SAR 35,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}><span>Total Monthly Cost</span><span style={{ color: '#FF6B6B' }}>SAR 185,000</span></div>
              </div>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '16px', fontSize: '1.05rem' }}>✅ With GulfStream (Growth Plan)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>Optimized Cloud Spend</span><span>SAR 105,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>GulfStream Fee</span><span>SAR 22,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border-subtle)', paddingBottom: '8px' }}><span style={{ color: 'var(--text-secondary)' }}>Internal Team (Reduced)</span><span>SAR 15,000</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}><span>Total Monthly Cost</span><span style={{ color: 'var(--accent)' }}>SAR 142,000</span></div>
              </div>
              <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255,107,53,0.08)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)' }}>SAR 43,000/mo saved</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'block' }}>Net savings after GulfStream fee</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 reveal">
            <Link href="/case-studies" style={{ color: 'var(--accent)', fontWeight: 600 }}>See real client results in our case studies →</Link>
          </div>
        </div>
      </section>

      {/* LOCATION SEO */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">Managed Cloud Services Pricing for Saudi Enterprises</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>GulfStream Technologies is headquartered in Riyadh and delivers <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>Managed Cloud Services</Link> to enterprises across Saudi Arabia. Our pricing is designed for the Saudi market — billed in SAR with no markup on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, or <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> provider costs. Whether you operate in Riyadh, Jeddah, or Dammam, our team of certified engineers provides 24/7 monitoring, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link>, and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security governance</Link> aligned with NCA ECC compliance requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            <FaqItem 
              question="How much do Managed Cloud Services cost in Saudi Arabia?" 
              answer="GulfStream's Managed Cloud Services start at SAR 8,500/month for the Starter plan, SAR 22,000/month for Growth (most popular), and SAR 55,000/month for Premium enterprise. All plans are billed monthly with no setup fees. Cloud provider costs (AWS, Azure, Google Cloud, Oracle Cloud) are billed separately by the provider — we do not mark up cloud costs."
            />
            <FaqItem 
              question="Are there any hidden charges or markup on cloud costs?" 
              answer="No. GulfStream's pricing is fully transparent. Your managed service fee covers our expertise, tooling, monitoring, and operations. Cloud provider costs are billed directly to your cloud account — we never add markup. A detailed billing breakdown is included in your monthly executive report."
            />
            <FaqItem 
              question="Can I customize my plan if I need more or fewer resources?" 
              answer="Absolutely. Our packages are starting points — not ceilings. We regularly customize plans to match the exact size and complexity of your environment. If you have specific requirements (e.g., more accounts, specific compliance frameworks like NCA ECC or ISO 27001, dedicated engineers), we'll build a custom package. Book a free assessment or contact sales to discuss."
            />
            <FaqItem 
              question="Are there long-term contracts or lock-in periods?" 
              answer="We operate on a month-to-month basis with no long-term commitment required. Most clients choose to stay because they see consistent, measurable value. We do offer a 10% annual discount for clients who prefer a 12-month commitment upfront."
            />
            <FaqItem 
              question="What happens during the onboarding process?" 
              answer="After contract signing, we begin a structured two-week onboarding process: (1) Account access and tooling deployment, (2) Environment baseline assessment, (3) Monitoring and alerting configuration, (4) FinOps dashboard setup, (5) Security posture review. By day 14, your environment is fully under GulfStream management."
            />
            <FaqItem 
              question="Do you guarantee cloud cost savings?" 
              answer="We commit to specific cost optimization targets as part of every engagement. After our initial assessment, we provide a cost savings estimate. For most clients, our managed service fee is offset by cloud cost savings within the first 60–90 days. We cannot guarantee a specific SAR amount before assessment, but we commit to measurable, documented improvement."
            />
            <FaqItem 
              question="What cloud platforms do you support?" 
              answer="We are certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. All packages support multi-cloud environments. Our team manages single-cloud and multi-cloud estates, optimizing each platform for cost, security, and performance."
            />
            <FaqItem 
              question="How do you handle security and data access?" 
              answer="We access your cloud environment using read-only access where possible, with write access limited to specific, documented operational needs. All access is governed by least-privilege IAM policies, logged via CloudTrail or Azure Activity Logs, and reviewed quarterly. We sign an NDA and Data Processing Agreement before onboarding begins."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Not Sure Which Plan Is Right for You?</h2>
            <p>Book a free Cloud Assessment — we&apos;ll audit your cloud environment, estimate your savings, and recommend the right managed services plan for your business in Saudi Arabia.</p>
            <p className="cta-urgency">⚡ Limited free cloud assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Cloud Assessment Saudi Arabia</Link>
              <Link href="/contact" className="btn-white-outline">💰 Get Custom Cloud Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingContent;
