'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import CloudSubNav from '@/components/CloudSubNav';

const AwsManagedContent = () => {
  useReveal();

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
            <p>Managing AWS at scale across Riyadh, Jeddah, and Dammam requires deep expertise, constant attention, and cloud cost optimization services. Here&apos;s what holds teams back:</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">💸</div><h3>Unexpected Cost Spikes</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Unmanaged auto-scaling, forgotten instances, and lack of Reserved Instance planning lead to AWS bills 40–60% higher than necessary.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👁️</div><h3>Limited Visibility</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Multi-account AWS environments create blind spots in monitoring, security, and cost attribution — leading to reactive operations.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔐</div><h3>Security &amp; Compliance Drift</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Misconfigured IAM roles, open S3 buckets, and unpatched instances create constant security risk and compliance exposure.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">⚡</div><h3>Performance Bottlenecks</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without continuous performance tuning, workloads underperform, SLAs are missed, and customer experience degrades.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Talent &amp; Skills Gap</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Skilled AWS engineers are scarce and expensive in Saudi Arabia. Building an in-house team with AWS breadth requires significant investment.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔄</div><h3>Operational Overhead</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Patching, backups, monitoring setup, and incident management consume engineering time better spent on product innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">✅ Our Process</div>
            <h2 className="display-md">The GulfStream AWS Management Framework</h2>
            <p>Our proven 3-phase approach delivers measurable results for enterprises across the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Phase 1: Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We audit your entire AWS environment — architecture, spend, security posture, and operational maturity — to establish a baseline and identify quick wins.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">⚙️</div><h3>Phase 2: Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We implement best-practice architecture, 24/7 monitoring stacks, automated runbooks, and FinOps tooling across all your AWS accounts.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">📈</div><h3>Phase 3: Optimization</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Ongoing rightsizing, Reserved Instance planning, security reviews, and performance tuning keep your environment efficient and cost-optimized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔧 Coverage</div>
            <h2 className="display-md">What We Manage on AWS</h2>
            <p>Comprehensive AWS managed services covering every layer of your cloud infrastructure.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Compute</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>EC2 Instance Management</li>
                <li>Auto Scaling Groups</li>
                <li>AWS Lambda</li>
                <li>ECS / EKS (Kubernetes)</li>
                <li>Elastic Beanstalk</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Databases</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Amazon RDS</li>
                <li>Aurora PostgreSQL / MySQL</li>
                <li>DynamoDB</li>
                <li>ElastiCache (Redis)</li>
                <li>Amazon Redshift</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Networking</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>VPC Design &amp; Management</li>
                <li>AWS Direct Connect</li>
                <li>Route 53 DNS</li>
                <li>CloudFront CDN</li>
                <li>ALB / NLB Management</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>AWS IAM Governance</li>
                <li>GuardDuty / Security Hub</li>
                <li>AWS Config Rules</li>
                <li>CloudTrail Audit Logs</li>
                <li>WAF &amp; Shield</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Storage</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Amazon S3 Management</li>
                <li>EBS Volume Optimization</li>
                <li>AWS Backup</li>
                <li>Glacier Archiving</li>
                <li>EFS File Systems</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.05rem' }}>Cost Management</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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

      {/* USE CASES & INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏢 Use Cases</div>
            <h2 className="display-md">AWS Use Cases &amp; Industries We Serve</h2>
            <p>Our AWS managed services support mission-critical workloads across diverse industries in Saudi Arabia and the Middle East.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>HIPAA-aligned AWS environments for electronic health records, medical imaging, and patient portals with strict data residency in Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Financial Services</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Secure, compliant AWS infrastructure for banking platforms, payment processing, and regulatory reporting aligned with SAMA requirements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 Retail &amp; E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Scalable AWS architectures for e-commerce platforms, inventory management, and customer-facing applications during peak traffic in Riyadh.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🚚 Logistics &amp; Supply Chain</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Real-time AWS IoT and data processing for fleet tracking, warehouse management, and supply chain optimization across the Kingdom.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 Tech &amp; SaaS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Containerized workloads on EKS, serverless architectures with Lambda, and CI/CD pipelines for SaaS companies scaling in the Middle East.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>NCA ECC-compliant AWS environments for government digitalization projects aligned with Saudi Vision 2030 initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">AWS Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>CloudWatch</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Monitoring &amp; Alerting</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Config</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Compliance Tracking</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Security Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Security Posture</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Cost Explorer</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>FinOps Analytics</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Infrastructure as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>GuardDuty</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Threat Detection</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Systems Manager</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Ops Automation</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>CloudFormation</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Stack Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* AWS MANAGED SERVICES IN RIYADH */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🇸🇦 Local Expertise</div>
            <h2 className="display-md">AWS Managed Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud management company based in Saudi Arabia, GulfStream Technologies provides AWS managed services tailored to the unique needs of enterprises in Riyadh, Jeddah, and Dammam. Our Riyadh-based team of certified AWS architects delivers 24/7 cloud monitoring services with local response times, ensuring your workloads meet Saudi regulatory requirements including NCA ECC compliance.</p>
            <p style={{ marginTop: '16px' }}>Whether you&apos;re running mission-critical applications on EC2, managing databases with RDS and Aurora, or deploying containerized workloads on EKS — our team ensures enterprise-grade operations, security governance, and FinOps consulting that aligns with your business goals and Vision 2030 digital transformation objectives.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream for AWS?</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🇸🇦 Saudi AWS Specialists</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Certified AWS architects based in Riyadh, ensuring local compliance knowledge, Arabic support, and time-zone aligned operations for enterprises across Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📊 FinOps-First Management</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Every engagement includes structured <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps consulting</Link> with measurable cost reduction targets from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>🔔 True 24/7 NOC Operations</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Our NOC monitors your AWS environment around the clock with human-backed alerting and incident response — not just automated emails.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>📋 Outcome-Based SLAs</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>We commit to specific uptime, cost, and performance targets — not generic best-effort agreements. See also our <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, and <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link> managed services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / TRUST SIGNALS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏅 Certifications</div>
            <h2 className="display-md">Certified AWS Expertise</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>☁️</div>
              <h3 style={{ fontSize: '.85rem' }}>AWS Solutions Architect Professional</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '.85rem' }}>AWS Security Specialty</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔧</div>
              <h3 style={{ fontSize: '.85rem' }}>AWS DevOps Engineer Professional</h3>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📊</div>
              <h3 style={{ fontSize: '.85rem' }}>FinOps Certified Practitioner</h3>
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
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What are AWS Managed Services?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>AWS Managed Services involve outsourcing the day-to-day management of your Amazon Web Services environment to certified cloud experts. This includes 24/7 monitoring, security governance, cost optimization, patching, backups, and incident response for services like EC2, RDS, EKS, Lambda, and S3.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much do AWS Managed Services cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs vary based on your environment size, number of AWS accounts, and support level required. GulfStream Technologies offers flexible pricing tiers from basic monitoring to fully managed operations. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link> for a tailored quote.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How quickly can you reduce our AWS costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Most enterprises see a 20-35% reduction in AWS spend within the first 90 days through rightsizing, Reserved Instance optimization, unused resource cleanup, and FinOps best practices implemented by our certified engineers.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Why outsource AWS management in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Outsourcing to a Saudi-based provider like GulfStream gives you certified engineers, 24/7 NOC monitoring, regulatory compliance expertise, and cloud cost optimization services — without building an expensive in-house cloud team.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What AWS services does GulfStream manage?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We manage the full AWS stack: EC2, RDS, Aurora, EKS, Lambda, S3, CloudFront, VPC, IAM, GuardDuty, Security Hub, Cost Explorer, and more. Our coverage spans compute, databases, networking, storage, security, and cost management.</p>
            </div>
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
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AwsManagedContent;
