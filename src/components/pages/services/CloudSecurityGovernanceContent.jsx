'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CloudSecurityGovernanceContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><span>Cloud Security &amp; Governance</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🔒 Cloud Security &amp; Governance</div>
          <h1 className="display-lg">Cloud Security &amp; Governance<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technology delivers enterprise-grade cloud security and governance across AWS, Azure, and multi-cloud environments in Saudi Arabia — combining continuous threat detection, IAM hardening, NCA ECC compliance automation, and policy enforcement to protect your most critical cloud workloads in Riyadh, Jeddah, and Dammam.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Free Security Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">Compliance</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">&lt;5min</span>
                <span className="hero-quick-stat-label">Threat Detection</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">24/7</span>
                <span className="hero-quick-stat-label">Security Ops</span>
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
              <div className="card-header"><div className="icon-box">🛡️</div><h3>24/7 Threat Monitoring</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Round-the-clock security operations with real-time threat detection, alert triage, and automated response across your entire cloud estate.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>Compliance Automation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Continuous compliance monitoring for NCA ECC, ISO 27001, PCI DSS, and HIPAA with automated drift detection and audit-ready reports.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔐</div><h3>IAM Hardening</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Least-privilege enforcement, MFA implementation, service account governance, and privileged access management across all cloud accounts.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">👥</div><h3>Dedicated Security Engineers</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Certified multi-cloud security architects assigned as your team — handling incident response, remediation, and ongoing posture improvement across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📊</div><h3>Security Dashboards</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Real-time security posture dashboards showing compliance scores, threat landscape, misconfiguration status, and risk trends at executive and technical levels.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📄</div><h3>SLA-Backed Response</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Committed SLAs for mean-time-to-detect (MTTD), mean-time-to-respond (MTTR), incident escalation, and compliance remediation timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⚠️ Threats</div>
            <h2 className="display-md">Cloud Security Risks Enterprises Face</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="card-header"><div className="icon-box">🔓</div><h3>Misconfigured Resources</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Publicly accessible S3 buckets, open security groups, and improperly configured Azure Blob storage are among the most common causes of cloud data breaches.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🕵️</div><h3>Over-Privileged Access</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>IAM roles and identities with excessive permissions violate the principle of least privilege, creating massive blast radius in the event of a credential compromise.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🦠</div><h3>Insider Threats &amp; Account Takeover</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Compromised credentials, malicious insiders, and API key exposure can give attackers persistent, privileged access to your cloud environment without detection.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">📋</div><h3>Compliance Drift</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Cloud environments that start compliant often drift from regulatory requirements (NCA ECC, ISO 27001, PCI DSS) as configurations change and teams scale rapidly.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔍</div><h3>Limited Threat Visibility</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Without centralized logging, SIEM integration, and threat intelligence, malicious activity can persist undetected in cloud environments for months.</p>
            </div>
            <div className="card">
              <div className="card-header"><div className="icon-box">🔗</div><h3>Supply Chain Vulnerabilities</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Third-party dependencies, marketplace components, and container images may contain vulnerabilities that compromise your cloud workloads at the software supply chain level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY FRAMEWORK */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛡️ Our Approach</div>
            <h2 className="display-md">End-to-End Cloud Security Framework</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div className="card-header"><div className="icon-box">🔍</div><h3>Security Assessment</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Comprehensive security posture assessment covering IAM, network configuration, encryption policies, compliance status, and vulnerability exposure across your entire cloud estate.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div className="card-header"><div className="icon-box">🛡️</div><h3>Security Implementation</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Deploy and configure security tooling — GuardDuty, Security Hub, Defender for Cloud, Azure Sentinel — alongside IAM hardening, encryption enforcement, and network segmentation.</p>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div className="card-header"><div className="icon-box">🔄</div><h3>Continuous Monitoring</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>24/7 threat detection, real-time alert triage, compliance drift detection, and automated remediation — keeping your cloud security posture strong as environments evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🔧 What We Secure</div>
            <h2 className="display-md">Cloud Security Service Coverage</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Identity &amp; Access</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>IAM Policy Hardening</li>
                <li>Least Privilege Enforcement</li>
                <li>MFA Implementation</li>
                <li>Privileged Access Management</li>
                <li>Service Account Governance</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Threat Detection</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>AWS GuardDuty</li>
                <li>Azure Microsoft Sentinel</li>
                <li>Threat Intelligence Integration</li>
                <li>Behavioral Anomaly Detection</li>
                <li>Incident Response Playbooks</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Compliance Automation</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>NCA ECC Controls</li>
                <li>ISO 27001 Alignment</li>
                <li>PCI DSS &amp; HIPAA</li>
                <li>AWS Config / Azure Policy</li>
                <li>Continuous Audit Reporting</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Data Protection</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Encryption at Rest &amp; Transit</li>
                <li>Key Management (KMS/Key Vault)</li>
                <li>Data Classification</li>
                <li>S3 / Blob Access Controls</li>
                <li>Data Loss Prevention</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Network Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>VPC / VNet Segmentation</li>
                <li>Security Group Hardening</li>
                <li>WAF &amp; DDoS Protection</li>
                <li>Private Link Enforcement</li>
                <li>Network Flow Analysis</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Cloud CSPM</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Security Posture Dashboard</li>
                <li>Misconfiguration Remediation</li>
                <li>Security Score Improvement</li>
                <li>AWS Security Hub</li>
                <li>Defender for Cloud</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Container Security</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>EKS / AKS Security</li>
                <li>Container Image Scanning</li>
                <li>Runtime Protection</li>
                <li>Pod Security Policies</li>
                <li>Registry Governance</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '.95rem' }}>Logging &amp; Audit</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>CloudTrail / Activity Logs</li>
                <li>Centralized Log Management</li>
                <li>SIEM Integration</li>
                <li>Forensic Investigation</li>
                <li>Audit-Ready Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Results</div>
            <h2 className="display-md">Security Outcomes</h2>
          </div>
          <div className="metrics-grid reveal">
            <div className="metric-item"><span className="metric-value">100%</span>
              <div className="metric-label">Compliance Coverage</div>
              <div className="metric-sub">NCA ECC &amp; ISO 27001 aligned</div>
            </div>
            <div className="metric-item"><span className="metric-value">&lt;5min</span>
              <div className="metric-label">Threat Detection Time</div>
              <div className="metric-sub">Mean time to detect (MTTD)</div>
            </div>
            <div className="metric-item"><span className="metric-value">Zero</span>
              <div className="metric-label">Critical Misconfiguration</div>
              <div className="metric-sub">In managed environments</div>
            </div>
            <div className="metric-item"><span className="metric-value">24/7</span>
              <div className="metric-label">Security Operations</div>
              <div className="metric-sub">Continuous threat monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎯 Use Cases</div>
            <h2 className="display-md">Cloud Security Use Cases</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>📋 NCA ECC &amp; ISO 27001 Compliance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Automated compliance monitoring and enforcement for Saudi regulatory frameworks including NCA ECC, ISO 27001, and PCI DSS — with continuous audit reporting and drift remediation.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🔍 Threat Detection &amp; Incident Response</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>24/7 threat monitoring using GuardDuty, Sentinel, and custom detection rules with automated incident response playbooks and sub-5-minute mean time to detect.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🔐 IAM Governance &amp; Zero Trust</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Enterprise IAM hardening with least-privilege enforcement, service account governance, conditional access policies, and zero-trust network architecture across multi-cloud environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏢 Industries</div>
            <h2 className="display-md">Industries We Secure</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏦 Banking &amp; Finance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>SAMA-compliant cloud security for banking platforms, payment gateways, and financial data with encryption, DLP, and real-time fraud detection.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏥 Healthcare</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>HIPAA-aligned security for healthcare systems and medical data with encryption, access controls, audit logging, and Saudi data residency compliance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🏗️ Government &amp; Public Sector</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>NCA ECC-compliant cloud security for government agencies, Vision 2030 digital programs, and critical national infrastructure in Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>🛒 E-Commerce &amp; Retail</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>PCI DSS compliance, WAF protection, DDoS mitigation, and secure payment processing for e-commerce platforms operating in Saudi Arabia.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1.05rem' }}>💻 SaaS &amp; Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Container security, CI/CD pipeline hardening, secrets management, and multi-tenant isolation for SaaS companies serving the Middle East market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Tools &amp; Technologies</div>
            <h2 className="display-md">Security Tools &amp; Technologies We Use</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS GuardDuty</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Threat Detection</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Sentinel</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>SIEM &amp; SOAR</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Security Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Posture Management</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Defender for Cloud</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Azure CSPM</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>AWS Config</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Compliance Rules</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Azure Policy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Governance</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Terraform</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Security as Code</p>
            </div>
            <div className="card text-center" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '.9rem', marginBottom: '4px' }}>Prisma Cloud</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>Multi-Cloud Security</p>
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
                <tr><td>24/7 Threat Monitoring</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>NCA ECC Compliance</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Certified Security Engineers</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Multi-Cloud Security</td><td className="highlight-col">✅</td><td>⚠️</td><td>❌</td></tr>
                <tr><td>SLA Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
                <tr><td>Incident Response Playbooks</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
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
            <h2 className="display-md">Cloud Security Services in Riyadh</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>As a cloud security partner based in Saudi Arabia, GulfStream Technology delivers comprehensive security and governance services for enterprises in Riyadh, Jeddah, and Dammam. Our team of certified security engineers combines deep expertise in NCA ECC compliance, Saudi data sovereignty requirements, and enterprise-grade threat detection across AWS, Azure, Google Cloud, and Oracle Cloud environments.</p>
            <p style={{ marginTop: '16px' }}>Our security services integrate seamlessly with our <Link href="/services/cloud-managed-services" style={{ color: 'var(--accent)' }}>cloud managed services</Link> for ongoing operations, <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> for AWS-native security, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud services</Link> for Azure-native protection, and <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cloud billing management</Link> for security cost optimization.</p>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How do you ensure NCA ECC compliance?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We implement NCA ECC controls using AWS Config, Azure Policy, and custom compliance rules with continuous monitoring, automated drift detection, and audit-ready reporting for Saudi regulatory requirements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What security tools do you use?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We deploy AWS GuardDuty, Azure Sentinel, Security Hub, Defender for Cloud, AWS Config, Azure Policy, and leading CSPM tools — configured and tuned specifically for your environment.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you provide 24/7 security monitoring?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. GulfStream provides round-the-clock threat monitoring with sub-5-minute mean time to detect (MTTD), automated alert triage, and SLA-backed incident response for all managed environments.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How much does cloud security cost in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Costs depend on your cloud estate size and compliance requirements. GulfStream offers a free security assessment with a detailed risk report and remediation roadmap. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free assessment</Link>.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you secure multi-cloud environments?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. We secure AWS, Azure, and multi-cloud environments with unified security policies, centralized monitoring, and cross-cloud compliance enforcement using tools like Prisma Cloud and native services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container reveal">
          <div className="cta-banner">
            <h2 className="display-md">Secure Your Cloud Environment Today</h2>
            <p>Book a free Cloud Security Assessment and receive a prioritized report of your security risks, compliance gaps, and a remediation roadmap — at no cost or commitment.</p>
            <p className="cta-urgency">⚡ Limited free security assessments available this month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">🔒 Book Free Security Assessment</Link>
              <Link href="/pricing" className="btn-white-outline">💰 Get a Cost Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudSecurityGovernanceContent;
