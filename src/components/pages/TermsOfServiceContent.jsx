'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const TermsOfServiceContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Legal</span><span>›</span><span>Terms of Service</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>⚖️ Terms of Service</div>
          <h1 className="display-lg">
            Terms & Conditions for
            <br />
            <span className="text-gradient">Cloud Services</span>
          </h1>
          <p>
            These Terms of Service govern your access to and use of GulfStream Technologies's website and cloud management services. Please read them carefully before engaging with our services.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '16px' }}>
            <strong>Last Updated:</strong> April 14, 2026 | <strong>Effective Date:</strong> April 14, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* 1. ACCEPTANCE OF TERMS */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              By accessing and using GulfStream Technologies's website, booking services, or engaging with our cloud management solutions, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you must discontinue use of our services immediately.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              GulfStream Technologies reserves the right to update these Terms at any time. Your continued use of our services following notification of changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 2. USE OF WEBSITE */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>2. Permitted Use of Website</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              You agree to use this website only for lawful purposes and in ways that do not infringe upon the rights of others or restrict their use and enjoyment of the website.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Prohibited Conduct</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>You agree not to:</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Harass, threaten, abuse, or defame any person or entity</li>
              <li>Engage in unauthorized access to our systems or data</li>
              <li>Transmit viruses, malware, or any code of a destructive nature</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in phishing, spamming, or social engineering attacks</li>
              <li>Attempt to reverse engineer, decompile, or disassemble our software or services</li>
              <li>Use automated systems (bots, scrapers) without explicit permission</li>
              <li>Violate intellectual property rights of GulfStream Technologies or third parties</li>
              <li>Engage in any activity that disrupts the normal functioning of our website or services</li>
            </ul>
          </div>

          {/* 3. SERVICES OFFERED */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>3. Services Offered</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              GulfStream Technologies provides comprehensive cloud management and optimization services, including but not limited to:
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Cloud Platforms Supported</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Amazon Web Services (AWS):</strong> Managed services, consulting, and optimization</li>
              <li><strong>Microsoft Azure:</strong> Enterprise cloud solutions and managed services</li>
              <li><strong>Google Cloud Platform (GCP):</strong> Infrastructure, analytics, and AI services</li>
              <li><strong>Oracle Cloud Infrastructure (OCI):</strong> Database and enterprise application services</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Service Categories</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Managed Cloud Services and 24/7 monitoring</li>
              <li>FinOps cost optimization and billing management</li>
              <li>Cloud migration and infrastructure modernization</li>
              <li>Cloud security, governance, and compliance</li>
              <li>Consulting, training, and implementation support</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Specific service terms, SLAs, pricing, and deliverables will be outlined in individual service agreements or proposals.
            </p>
          </div>

          {/* 4. INTELLECTUAL PROPERTY RIGHTS */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>4. Intellectual Property Rights</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              All content on this website, including text, graphics, logos, images, code, and other materials (&ldquo;Content&rdquo;), is the property of GulfStream Technologies or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>License Grant</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              We grant you a limited, non-exclusive, non-transferable license to view and print content for personal, non-commercial use only. You may not:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Modify, copy, or distribute any content without written permission</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use content for commercial purposes or public display</li>
              <li>Sublicense, sell, or exploit any content</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Your Content</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              If you provide any content, materials, or feedback to GulfStream Technologies, you grant us a worldwide, perpetual, royalty-free license to use, modify, reproduce, and distribute such content for any purpose related to our services.
            </p>
          </div>

          {/* 5. LIMITATION OF LIABILITY */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>5. Limitation of Liability & Disclaimers</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              To the maximum extent permitted by law, GulfStream Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption, arising from your use or inability to use our website or services.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Warranty Disclaimer</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis.</strong> GulfStream Technologies makes no warranties, express or implied, regarding:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Accuracy, completeness, or reliability of content</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Uninterrupted, error-free, or secure operation</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Indemnification</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              You agree to indemnify, defend, and hold harmless GulfStream Technologies, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your violation of these Terms, your use of our website or services, or infringement of any third-party rights.
            </p>
          </div>

          {/* 6. THIRD-PARTY LINKS */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>6. Third-Party Links & External Resources</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Our website may contain links to third-party websites, services, and resources. While we strive to link only to reputable sources, we do not endorse, warrant, or assume responsibility for the accuracy, legality, or content of external websites.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Your use of third-party websites is at your own risk.</strong> We recommend reviewing their terms of service and privacy policies before engaging. GulfStream Technologies shall not be liable for:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Availability or content of third-party websites</li>
              <li>Transactions or interactions with third parties</li>
              <li>Loss or damage resulting from third-party services or content</li>
            </ul>
          </div>

          {/* 7. TERMINATION OF ACCESS */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>7. Termination of Access</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              GulfStream Technologies reserves the right to terminate or restrict your access to our website and services at any time, without notice or liability, for the following reasons:
            </p>

            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Violation of these Terms of Service</li>
              <li>Unauthorized access or malicious activity</li>
              <li>Non-payment of invoices or service fees</li>
              <li>Breach of confidentiality or security obligations</li>
              <li>Violation of applicable laws or regulations</li>
              <li>Sustained abuse of our systems or services</li>
              <li>Violation of our acceptable use policy</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Upon termination, your rights to use our services cease immediately, and we may delete your account data after a retention period as outlined in applicable laws.
            </p>
          </div>

          {/* 8. CHANGES TO TERMS & GOVERNING LAW */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>8. Changes to Terms & Governing Law</h2>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Modification of Terms</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We may modify these Terms of Service at any time. The &ldquo;Last Updated&rdquo; date will reflect any changes. Material changes will be communicated via email or notice on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Governing Law & Jurisdiction</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law principles. Any legal action or proceeding shall be exclusively submitted to the courts of Saudi Arabia.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Dispute Resolution</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              Before initiating legal action, both parties agree to attempt to resolve disputes through good-faith negotiation. If negotiation fails, disputes may be submitted to arbitration or mediation under Saudi Arabian law.
            </p>
          </div>

          {/* 9. CONTACT INFORMATION */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>9. Contact Information</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              If you have questions about these Terms of Service, wish to report a violation, or need further clarification, please contact us:
            </p>

            <div style={{ background: 'var(--dark-surface)', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong>Email:</strong> <a href="mailto:legal@gulfstreamtech.com.sa" style={{ color: 'var(--accent)' }}>legal@gulfstreamtech.com.sa</a>
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong>Phone:</strong> <a href="tel:+966053201917" style={{ color: 'var(--accent)' }}>+966 (0) 53 201 917</a>
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong>Address:</strong> 6526 At Takhassusi Road, Almathar Ash Shamali District, Riyadh 12332, Saudi Arabia
              </p>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              We appreciate your engagement with GulfStream Technologies and your commitment to complying with these Terms of Service.
            </p>
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

export default TermsOfServiceContent;
