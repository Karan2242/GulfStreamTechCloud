'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const AwsManagedContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const awsFaqs = [
    {
      question: 'What are AWS Managed Services?',
      answer: 'AWS Managed Services means outsourcing your AWS operations to certified experts who handle monitoring, security, optimization, and incident response.',
    },
    {
      question: 'How much do AWS Managed Services cost in Saudi Arabia?',
      answer: 'Costs vary by AWS account count and support level. We provide flexible pricing with a free assessment to deliver a tailored quote.',
    },
    {
      question: 'How quickly can you reduce AWS costs?',
      answer: 'Many AWS clients see 20-35% cost reduction within 90 days through rightsizing, reserved capacity, and workload optimization.',
    },
    {
      question: 'Do you support AWS multi-account and hybrid environments?',
      answer: 'Yes. We manage AWS multi-account structures and hybrid AWS deployments with consistent operations and governance.',
    },
    {
      question: 'Why choose GulfStream for AWS management in Saudi Arabia?',
      answer: 'A local team of certified AWS engineers offers Saudi compliance, Arabic support, and a focus on measurable cost and performance results.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/services/cloud-managed-services">Managed Cloud Services</Link><span>›</span><span>AWS</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>☁️ AWS Managed Services</div>
          <h1 className="display-lg">AWS Managed Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies is a leading managed cloud services provider for AWS in Saudi Arabia. We manage your entire AWS environment — from EC2, RDS, and EKS to Lambda and S3 — with certified engineers, 24/7 cloud monitoring services, and FinOps consulting to reduce costs by up to 32%.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free AWS Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <CloudSubNav />

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Common Challenges</div>
            <h2 className="display-md">AWS Challenges Enterprises Face</h2>
            <p>Managing AWS at scale across Saudi Arabia requires deep expertise, constant attention, and cloud cost optimization services. Here&apos;s what holds teams back:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💸</div>
                <div className="card-title-row"><h3>Unexpected Cost Spikes</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Unmanaged auto-scaling, forgotten instances, and lack of Reserved Instance planning lead to AWS bills 40–60% higher than necessary.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👁️</div>
                <div className="card-title-row"><h3>Limited Visibility</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Multi-account AWS environments create blind spots in monitoring, security, and cost attribution — leading to reactive operations.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔐</div>
                <div className="card-title-row"><h3>Security &amp; Compliance Drift</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Misconfigured IAM roles, open S3 buckets, and unpatched instances create constant security risk and compliance exposure.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚡</div>
                <div className="card-title-row"><h3>Performance Bottlenecks</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Without continuous performance tuning, workloads underperform, SLAs are missed, and customer experience degrades.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">👥</div>
                <div className="card-title-row"><h3>Talent &amp; Skills Gap</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Skilled AWS engineers are scarce and expensive in Saudi Arabia. Building an in-house team with AWS breadth requires significant investment.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔄</div>
                <div className="card-title-row"><h3>Operational Overhead</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Patching, backups, monitoring setup, and incident management consume engineering time better spent on product innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on AWS</h2>
            <p>Comprehensive AWS managed services covering every layer of your cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>EC2 Instance Management</li>
                <li>Auto Scaling Groups</li>
                <li>AWS Lambda</li>
                <li>ECS / EKS (Kubernetes)</li>
                <li>Elastic Beanstalk</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Amazon RDS</li>
                <li>Aurora PostgreSQL / MySQL</li>
                <li>DynamoDB</li>
                <li>ElastiCache (Redis)</li>
                <li>Amazon Redshift</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>VPC Design &amp; Management</li>
                <li>AWS Direct Connect</li>
                <li>Route 53 DNS</li>
                <li>CloudFront CDN</li>
                <li>ALB / NLB Management</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>AWS IAM Governance</li>
                <li>GuardDuty / Security Hub</li>
                <li>AWS Config Rules</li>
                <li>CloudTrail Audit Logs</li>
                <li>WAF &amp; Shield</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Amazon S3 Management</li>
                <li>EBS Volume Optimization</li>
                <li>AWS Backup</li>
                <li>Glacier Archiving</li>
                <li>EFS File Systems</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>AWS Cost Explorer</li>
                <li>Reserved Instances</li>
                <li>Savings Plans</li>
                <li>Spot Instance Strategy</li>
                <li>Tag-Based Chargeback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream AWS Management Framework</h2>
            <p>Our proven 3-phase approach delivers measurable results for enterprises across the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We audit your entire AWS environment — architecture, spend, security posture, and operational maturity — to establish a baseline and identify quick wins.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We implement best-practice architecture, 24/7 monitoring stacks, automated runbooks, and FinOps tooling across all your AWS accounts.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Ongoing rightsizing, Reserved Instance planning, security reviews, and performance tuning keep your environment efficient and cost-optimized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">↓32%</span>
              <div className="metric-label">Average AWS Cost Reduction</div>
              <div className="metric-sub">Achieved within 90 days</div>
            </div>
            <div className="metric-item"><span className="metric-value">99.98%</span>
              <div className="metric-label">SLA Uptime Guarantee</div>
              <div className="metric-sub">Across all managed workloads</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;5min</span>
              <div className="metric-label">Mean Time to Detect</div>
              <div className="metric-sub">For critical incidents</div>
            </div>
            <div className="metric-item"><span className="metric-value">3x</span>
              <div className="metric-label">Engineering Productivity</div>
              <div className="metric-sub">Your team freed to innovate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for AWS?</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <div className="card-title-row">
                  <h3> Saudi AWS Specialists</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Certified AWS architects based in Riyadh, ensuring local compliance knowledge, Arabic support, and time-zone aligned operations for enterprises across Saudi Arabia.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">📊</div>
                <div className="card-title-row">
                  <h3>FinOps Management</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Every engagement includes structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> with measurable cost reduction targets from day one.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">🔔</div>
                <div className="card-title-row">
                  <h3>24/7 NOC Operations</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>Our NOC monitors your AWS environment around the clock with human-backed alerting and incident response — not just automated emails.</p>
            </div>
            <div className="card premium-card why-us-card">
              <div className="card-header">
                <div className="icon-box">📋</div>
                <div className="card-title-row">
                  <h3>Outcome-Based SLAs</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We commit to specific uptime, cost, and performance targets — not generic best-effort agreements. See also our <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> managed services.</p>
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
            {awsFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`aws-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`aws-faq-answer-${index}`}
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
      <section className="section">
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Start Your AWS Optimization Journey</h2>
            <p>Book a free 60-minute AWS Assessment. Our certified architects will analyze your environment and deliver a prioritized action plan with cost savings projections.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free AWS Assessment</Link>
              <Link href="/book-a-review" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AwsManagedContent;
