'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const CookiePolicyContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Legal</span><span>›</span><span>Cookie Policy</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🍪 Cookie Policy</div>
          <h1 className="display-lg">
            How We Use Cookies
            <br />
            <span className="text-gradient">& Tracking Technologies</span>
          </h1>
          <p>
            This Cookie Policy explains what cookies are, how GulfStream Technologies uses them, and how you can control them. By continuing to browse our website, you consent to our use of cookies as outlined below.
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
              GulfStream Technologies uses cookies and similar tracking technologies to enhance your browsing experience, understand how you use our website, and deliver personalized content and services. This Cookie Policy provides transparent information about our cookie practices.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Please review this policy carefully. If you do not agree with our cookie practices, you can disable cookies through your browser settings or opt out using the methods described below.
            </p>
          </div>

          {/* 2. WHAT ARE COOKIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>2. What Are Cookies?</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Cookies are small text files stored on your device (computer, smartphone, tablet) that are created when you visit a website. They contain information about your browsing activity and preferences. Cookies serve numerous legitimate purposes in improving user experience and website functionality.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Related Technologies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              Beyond cookies, we may also use other tracking technologies:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Web Beacons (Pixels):</strong> Tiny graphics used to track page views and user interactions</li>
              <li><strong>Local Storage:</strong> Browser storage used to save user preferences and data</li>
              <li><strong>Session Identifiers:</strong> Temporary tokens used to maintain your session during website visits</li>
              <li><strong>Analytics Trackers:</strong> Scripts used to measure website performance and user behavior</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              For clarity, this policy refers to all these technologies collectively as "cookies," though they may function differently.
            </p>
          </div>

          {/* 3. TYPES OF COOKIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>3. Types of Cookies We Use</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We use different categories of cookies based on their purpose:
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Essential Cookies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Purpose:</strong> These cookies are necessary for the basic functionality of our website. They enable core features like user authentication, session management, security, and load balancing.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              <strong>Examples:</strong> Session tokens, security tokens, load-balancing identifiers, authentication cookies.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              <em>These cookies cannot be disabled while using our website.</em>
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Analytics & Performance Cookies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Purpose:</strong> These cookies help us understand how visitors use our website by collecting aggregated, anonymous data about page views, bounce rates, session duration, and user interactions.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              <strong>Tools Used:</strong> Google Analytics (see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google Privacy Policy</a>)
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              <em>These cookies do not identify you personally; they provide us with insights to improve website performance and user experience.</em>
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Preference Cookies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Purpose:</strong> These cookies remember your preferences and settings to personalize your experience on our website.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              <strong>Examples:</strong> Language preference, theme selection (dark/light mode), display preferences, location settings.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              <em>You can control these through browser settings or our preference center.</em>
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Marketing & Retargeting Cookies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Purpose:</strong> These cookies are used to track your browsing activity across websites to deliver targeted advertisements and marketing messages relevant to your interests.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              <strong>Examples:</strong> LinkedIn Pixel, Facebook Pixel, Google Ads retargeting, social media tracking.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <em>You can opt out of these cookies using your browser's privacy settings or the methods described in Section 5.</em>
            </p>
          </div>

          {/* 4. HOW WE USE COOKIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>4. How We Use Cookies</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We use cookies for the following purposes:
            </p>

            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Authentication & Security:</strong> To verify your identity and maintain secure sessions</li>
              <li><strong>Website Functionality:</strong> To enable core features like form submissions and navigation</li>
              <li><strong>User Experience:</strong> To personalize content based on your preferences and behavior</li>
              <li><strong>Performance Monitoring:</strong> To analyze website speed, errors, and downtime</li>
              <li><strong>Analytics & Insights:</strong> To measure traffic sources, user engagement, and conversion rates</li>
              <li><strong>Marketing & Advertising:</strong> To deliver targeted ads and measure campaign effectiveness</li>
              <li><strong>Fraud Prevention:</strong> To detect suspicious activity and protect against abuse</li>
              <li><strong>Compliance:</strong> To meet legal, regulatory, and contractual obligations</li>
            </ul>
          </div>

          {/* 5. MANAGING YOUR COOKIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>5. Managing & Controlling Cookies</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              You have multiple options to control cookies on our website:
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Browser Settings</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              Most web browsers allow you to control cookies through settings. You can:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '20px' }}>
              <li>Allow all cookies</li>
              <li>Block specific types of cookies</li>
              <li>Delete cookies when closing your browser</li>
              <li>Block third-party cookies</li>
              <li>Enable private browsing mode</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              <strong>Note:</strong> Disabling essential cookies may impact website functionality and your ability to access certain features.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Opt-Out of Google Analytics</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              To opt out of Google Analytics tracking, visit: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google Analytics Opt-Out</a>
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Do-Not-Track (DNT) Signals</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
              Some browsers include a &ldquo;Do Not Track&rdquo; feature. While we recognize DNT signals, we cannot guarantee compliance as universal DNT standards are not established. You can typically enable DNT in your browser's privacy settings.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Cookie Manager</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              If available, you may use our website's cookie preference manager or consent banner to adjust your cookie settings directly.
            </p>
          </div>

          {/* 6. THIRD-PARTY COOKIES */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>6. Third-Party Cookies & Partners</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Our website integrates third-party services that may set their own cookies:
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Analytics Providers</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google Privacy Policy</a></li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Advertising & Marketing Partners</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li><strong>LinkedIn Pixel:</strong> For professional targeting and campaign measurement</li>
              <li><strong>Google Ads:</strong> For search advertising and retargeting</li>
              <li><strong>Facebook Pixel:</strong> For social media advertising and audience insights</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', marginTop: '16px', color: 'var(--text-primary)' }}>Cloud Infrastructure Partners</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              Our website is hosted on cloud infrastructure (AWS, Azure, GCP) which may use performance cookies and monitoring tools. Review their privacy policies for details.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <strong>Important:</strong> We are not responsible for third-party cookie practices. We encourage you to review their privacy policies directly. To opt out of specific third-party cookies, visit their respective opt-out pages.
            </p>
          </div>

          {/* 7. UPDATES TO THIS POLICY */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>7. Updates to This Cookie Policy</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We may update this Cookie Policy periodically to reflect changes in our cookie practices, technology, and legal requirements. Any material changes will be communicated via:
            </p>

            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: '24px', marginBottom: '16px' }}>
              <li>Updated &ldquo;Last Updated&rdquo; date on this page</li>
              <li>Email notification (for material changes)</li>
              <li>Prominent notice on our website</li>
            </ul>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Your continued use of our website following any changes constitutes your acceptance of the updated Cookie Policy.
            </p>
          </div>

          {/* 8. CONTACT INFORMATION */}
          <div className="card reveal" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>8. Contact Us</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              If you have questions about our cookie practices, need more information, or wish to report concerns, please contact us:
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

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              We are committed to transparency in our cookie practices and respect your privacy preferences.
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

export default CookiePolicyContent;
