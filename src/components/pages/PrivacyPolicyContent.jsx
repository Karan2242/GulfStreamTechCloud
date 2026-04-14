'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const PrivacyPolicyContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Legal</span><span>›</span><span>Privacy Policy</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🔒 Privacy Policy</div>
          <h1 className="display-lg">
            How We Protect Your
            <br />
            <span className="text-gradient">Data & Privacy</span>
          </h1>
          <p>
            At GulfStream Technology, protecting your privacy and data is our highest priority. This Privacy Policy explains how we collect, use, store, and protect your information across all of our digital properties and cloud managed services.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '16px' }}>
            <strong>Last Updated:</strong> April 14, 2026 | <strong>Effective Date:</strong> April 14, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* 1. INTRODUCTION */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>1. Introduction</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              GulfStream Technology (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;) is committed to transparency regarding how we collect and use information about you. This Privacy Policy applies to our website, cloud managed services, and all digital interactions with our organization.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our website or engage our services.
            </p>
          </div>

          {/* 2. INFORMATION WE COLLECT */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>2. Information We Collect</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We collect various categories of information to provide, maintain, and improve our services:
            </p>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Contact Information</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Full name, email address, phone number</li>
              <li>Company name, job title, department</li>
              <li>Mailing address and geographic location</li>
              <li>Information provided through contact forms, surveys, or service requests</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Technical Information</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Internet Protocol (IP) address and geographic location</li>
              <li>Device type, operating system, and browser information</li>
              <li>Pages visited, time spent on pages, and clickstream data</li>
              <li>Referral source and navigation patterns</li>
              <li>Cookies, web beacons, and similar tracking technologies</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Analytics Data</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Google Analytics data including user behavior and engagement metrics</li>
              <li>Heatmaps and session recordings (where explicitly consented)</li>
              <li>Performance metrics and service usage patterns</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Cloud Service Information</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px' }}>
              <li>Cloud infrastructure details (AWS, Azure, Google Cloud, Oracle Cloud account information)</li>
              <li>API keys, authentication tokens, and access logs</li>
              <li>Service activity and performance data</li>
              <li>Billing and payment information (processed securely by third-party providers)</li>
            </ul>
          </div>

          {/* 3. HOW WE USE INFORMATION */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>3. How We Use Information</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We use the information we collect for the following purposes:
            </p>
            
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our cloud managed services, customer support, and technical assistance</li>
              <li><strong>Communication:</strong> To send service updates, security alerts, billing notifications, and respond to your inquiries</li>
              <li><strong>Marketing & Outreach:</strong> To send newsletters, promotional content, and industry insights (with your consent, where required)</li>
              <li><strong>Analytics & Optimization:</strong> To analyze website usage, optimize user experience, and improve our services</li>
              <li><strong>Security & Compliance:</strong> To detect fraud, prevent abuse, enforce our terms, and comply with legal obligations</li>
              <li><strong>Legal Requirements:</strong> To respond to legal process, court orders, and regulatory requests from authorities</li>
              <li><strong>Business Operations:</strong> To manage accounts, process transactions, and conduct internal operations</li>
            </ul>
          </div>

          {/* 4. COOKIES AND TRACKING TECHNOLOGIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>4. Cookies and Tracking Technologies</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We use cookies and similar tracking technologies to enhance your browsing experience. These include:
            </p>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Types of Cookies</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Essential Cookies:</strong> Required for website functionality, user authentication, and security</li>
              <li><strong>Analytics Cookies:</strong> Used by Google Analytics to measure website traffic and user behavior</li>
              <li><strong>Preference Cookies:</strong> Remember user preferences, language settings, and display options</li>
              <li><strong>Marketing Cookies:</strong> Enable retargeting, social media integration, and campaign tracking</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              For detailed information about cookies, please refer to our <Link href="/cookie-policy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Cookie Policy</Link>.
            </p>
          </div>

          {/* 5. THIRD-PARTY SERVICES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>5. Third-Party Services & Cloud Platforms</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We work with industry-leading cloud platforms and third-party service providers. When you use our cloud managed services, your data may be processed through the following platforms:
            </p>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Cloud Infrastructure Providers</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Amazon Web Services (AWS):</strong> For cloud hosted infrastructure and managed services</li>
              <li><strong>Microsoft Azure:</strong> For enterprise cloud computing and solutions</li>
              <li><strong>Google Cloud Platform (GCP):</strong> For cloud infrastructure, analytics, and AI services</li>
              <li><strong>Oracle Cloud Infrastructure (OCI):</strong> For enterprise database and application services</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Other Service Providers</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Google Analytics:</strong> For website analytics and user behavior measurement</li>
              <li><strong>Email Service Providers:</strong> For communication and marketing campaigns</li>
              <li><strong>Payment Processors:</strong> For secure payment and billing processing</li>
              <li><strong>CRM & Support Platforms:</strong> For customer relationship management and support tickets</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Each of these providers has their own privacy policies. We encourage you to review their policies, as we are not responsible for their practices. All data transfers comply with applicable data protection regulations.
            </p>
          </div>

          {/* 6. DATA PROTECTION & SECURITY */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>6. Data Protection & Security</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We implement industry-standard security measures to protect your data:
            </p>
            
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>End-to-end encryption for data in transit (TLS/SSL protocols)</li>
              <li>Encryption at rest for sensitive data stored in our systems</li>
              <li>Role-based access controls and authentication mechanisms</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with SOC 2 Type II, ISO 27001, and other security standards</li>
              <li>Multi-factor authentication for sensitive operations</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              While we maintain robust security practices, no security system is impenetrable. We cannot guarantee absolute security of your data. If you believe your information has been compromised, please contact us immediately.
            </p>
          </div>

          {/* 7. DATA SHARING & NON-SALE POLICY */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>7. Data Sharing & Non-Sale Policy</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              <strong>We do not sell your personal data.</strong> We only share your information in the following circumstances:
            </p>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>When We Share Data</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Service Providers:</strong> With vendors who assist us in operating our website and delivering services (under data processing agreements)</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, or regulatory authority</li>
              <li><strong>Business Transactions:</strong> In the event of merger, acquisition, or sale of assets (with appropriate data transfer agreements)</li>
              <li><strong>Your Consent:</strong> When you explicitly authorize us to share your information with third parties</li>
              <li><strong>Cloud Platforms:</strong> With AWS, Azure, GCP, and OCI as necessary to deliver managed cloud services</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              All service providers are contractually obligated to maintain strict confidentiality and use your data only for the purposes we specify.
            </p>
          </div>

          {/* 8. USER RIGHTS & CONTROL */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>8. Your Rights & Data Subject Requests</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Your Rights</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you</li>
              <li><strong>Right to Correction:</strong> You may request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> You may request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Right to Restrict Processing:</strong> You may request that we limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> You may request your data in a portable, machine-readable format</li>
              <li><strong>Right to Opt-Out:</strong> You may unsubscribe from marketing communications at any time</li>
              <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent for data processing based on consent</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              To exercise any of these rights, please contact us at <strong>privacy@gulfstreamtech.com.sa</strong>. We will respond to your request within 30 days.
            </p>
          </div>

          {/* 9. INTERNATIONAL DATA TRANSFERS */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>9. International Data Transfers</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              GulfStream Technology is headquartered in Saudi Arabia. Your information may be transferred, stored, and processed in Saudi Arabia or other countries where we or our service providers operate, including the United States, Europe, and Asia.
            </p>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              When we transfer data internationally:
            </p>

            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>We ensure appropriate safeguards are in place, including data processing agreements and standard contractual clauses</li>
              <li>We comply with applicable data protection laws in each jurisdiction</li>
              <li>We assess the adequacy of protection in destination countries</li>
              <li>We obtain your explicit consent where required by local laws</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              By using our services, you consent to the transfer of your data to countries outside Saudi Arabia, where data protection laws may differ from your country of residence.
            </p>
          </div>

          {/* 10. UPDATES & CONTACT */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>10. Updates to This Privacy Policy</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Last Updated" date and, if appropriate, obtaining your consent.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Continued use of our website or services following notification of changes constitutes your acceptance of the updated Privacy Policy.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Contact Us</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              If you have questions about this Privacy Policy, wish to exercise your data rights, or want to report a security issue, please contact us:
            </p>

            <div style={{ background: 'var(--dark-surface)', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong>Email:</strong> <a href="mailto:privacy@gulfstreamtech.com.sa" style={{ color: 'var(--accent)' }}>privacy@gulfstreamtech.com.sa</a>
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong>Phone:</strong> <a href="tel:+966053201917" style={{ color: 'var(--accent)' }}>+966 (0) 53 201 917</a>
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong>Address:</strong> 6526 At Takhassusi Road, Almathar Ash Shamali District, Riyadh 12332, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section className="section" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '40px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Terms of Service
            </Link>
            <Link href="/cookie-policy" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Cookie Policy
            </Link>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © 2026 GulfStream Technologies. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyContent;
