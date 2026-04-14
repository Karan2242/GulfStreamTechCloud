'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { submitForm } from '@/lib/formSubmit';

const ContactContent = () => {
  useReveal();
  const [formState, setFormState] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.subject = 'New Contact Enquiry — GulfStream Website';
    try {
      await submitForm(data);
      setFormState('success');
      e.target.reset();
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setFormState('error');
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Contact</span>
          </nav>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>📞 Contact Cloud Experts</div>
          <h1 className="display-lg">Contact Multi-Cloud Experts<br /><span className="text-gradient">in Riyadh, Saudi Arabia</span></h1>
          <p>Get in touch with GulfStream Technology — a leading <strong>cloud consulting company in Riyadh, Saudi Arabia</strong>. Whether you need <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure consulting</Link>, or a <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>free cloud assessment</Link>, our certified specialists respond within 4 business hours.</p>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by 40+ Saudi enterprises</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">&lt; 4 hrs</span>
                <span className="hero-quick-stat-label">Response Time</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">Sun–Thu</span>
                <span className="hero-quick-stat-label">8 AM – 6 PM AST</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">Riyadh</span>
                <span className="hero-quick-stat-label">HQ, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section-sm">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>GulfStream Technology is a leading <strong>cloud consulting company in Riyadh, Saudi Arabia</strong>, specializing in <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure cloud consulting</Link>, <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link>, and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link>. Our certified specialists serve enterprises across Riyadh, Jeddah, Dammam, and the wider GCC region.</p>
            <p style={{ marginTop: '16px' }}>Whether you need help reducing cloud costs, migrating to AWS, Azure, Google Cloud, or Oracle Cloud, or strengthening your <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security posture</Link>, our team responds within 4 business hours. Start with a <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>free cloud assessment</Link> to identify savings opportunities and optimization pathways for your cloud environment.</p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section">
        <div className="container">
          <div className="contact-grid-2col">
            {/* Contact Info */}
            <div className="reveal">
              <h2 style={{ marginBottom: '32px', fontSize: '1.3rem' }}>Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)' }}>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>📧</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem', wordBreak: 'break-word' }}>Email</h3>
                    <a href="mailto:sales@gulfstreamtech.com.sa" style={{ color: 'var(--accent)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', wordBreak: 'break-all' }}>sales@gulfstreamtech.com.sa</a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: '4px' }}>We respond within 4 business hours</p>
                  </div>
                </div>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>📞</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>Phone</h3>
                    <a href="tel:+966053201917" style={{ color: 'var(--accent)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+966 (0) 53 201 917</a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: '4px' }}>Sun–Thu, 8:00 AM – 6:00 PM AST</p>
                  </div>
                </div>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>📍</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>Office — Riyadh, Saudi Arabia</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', margin: 0 }}>6526 At Takhassusi Road, Almathar Ash Shamali District, Central Province, Riyadh 12332, Saudi Arabia</p>
                  </div>
                </div>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>⚡</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>24/7 Client Support</h3>
                    <a href="tel:+966112345680" style={{ color: 'var(--accent)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+966 11 234 5680 (Clients)</a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: '4px' }}>For active GulfStream-managed environments</p>
                  </div>
                </div>
              </div>

              {/* Urgent Help CTA */}
              <div style={{ marginTop: '24px', padding: '20px', background: 'var(--dark-bg)', border: '1px solid var(--accent)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '8px', fontSize: '.95rem' }}>🚨 Need Urgent Cloud Help?</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', margin: 0 }}>Call us now: <a href="tel:+966053201917" style={{ color: 'var(--accent)', fontWeight: 600 }}>+966 (0) 53 201 917</a></p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <div className="card" style={{ padding: 'clamp(20px, 4vw, 48px)' }}>
                <h2 style={{ marginBottom: '8px', fontSize: '1.3rem' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', marginBottom: '32px' }}>Fill in your details and one of our cloud specialists will be in touch within 4 hours during business hours.</p>
                <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                  {/* Honeypot — hidden from users, caught by Web3Forms */}
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" autoComplete="given-name" aria-label="First Name" className="form-input" placeholder="Ahmed" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" autoComplete="family-name" aria-label="Last Name" className="form-input" placeholder="Al-Rashid" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Business Email *</label>
                    <input type="email" id="email" name="email" autoComplete="email" aria-label="Business Email" className="form-input" placeholder="ahmed@yourcompany.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" aria-label="Phone Number" className="form-input" placeholder="+966 5X XXX XXXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name *</label>
                    <input type="text" id="company" name="company" autoComplete="organization" aria-label="Company Name" className="form-input" placeholder="Your Company LLC" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="enquiry">How Can We Help? *</label>
                    <select id="enquiry" name="enquiry" aria-label="How Can We Help" className="form-input form-select" required defaultValue="">
                      <option value="" disabled>Select enquiry type</option>
                      <option value="aws-managed-services">AWS Managed Services</option>
                      <option value="azure-managed-services">Azure Managed Services</option>
                      <option value="oracle-cloud-managed-services">Oracle Cloud Managed Services</option>
                      <option value="google-cloud-managed-services">Google Cloud Managed Services</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cost-optimization">Cloud Cost Optimization</option>
                      <option value="cloud-security">Cloud Security</option>
                      <option value="pricing">Pricing &amp; Packages</option>
                      <option value="other">General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell Us More</label>
                    <textarea id="message" name="message" aria-label="Tell Us More" className="form-input form-textarea" placeholder="Briefly describe your cloud environment, challenges, or goals..." rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center' }} disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending...' : 'Send Message →'}
                  </button>
                  {formState === 'success' && (
                    <p style={{ textAlign: 'center', color: 'var(--accent)', fontSize: '0.9rem', marginTop: '12px', fontWeight: 600 }}>✅ Message sent! We&apos;ll be in touch within 4 business hours.</p>
                  )}
                  {formState === 'error' && (
                    <p style={{ textAlign: 'center', color: '#f87171', fontSize: '0.9rem', marginTop: '12px' }}>❌ {errorMsg}</p>
                  )}
                  {formState === 'idle' && (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '12px' }}>We&apos;ll respond within 4 business hours. No spam, ever.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">⭐ Why Reach Out?</div>
            <h2 className="display-md">What Happens When You Contact Us</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 28px)', marginBottom: '12px' }}>1️⃣</div>
              <h3 style={{ fontSize: '.95rem' }}>We Listen First</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>We start by understanding your business goals, cloud challenges, and priorities — not by selling packages.</p>
            </div>
            <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 28px)', marginBottom: '12px' }}>2️⃣</div>
              <h3 style={{ fontSize: '.95rem' }}>Free Assessment</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>We offer a <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>free cloud assessment</Link> for every prospective client — delivering real value before you commit anything.</p>
            </div>
            <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 28px)', marginBottom: '12px' }}>3️⃣</div>
              <h3 style={{ fontSize: '.95rem' }}>Custom Proposal</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>We build a tailored proposal based on your environment — not a generic pitch deck. See our <Link href="/pricing" style={{ color: 'var(--accent)' }}>transparent pricing</Link>.</p>
            </div>
            <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 28px)', marginBottom: '12px' }}>4️⃣</div>
              <h3 style={{ fontSize: '.95rem' }}>No Pressure Decision</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>You take the time you need. We don&apos;t do high-pressure sales. Our <Link href="/case-studies" style={{ color: 'var(--accent)' }}>case studies</Link> speak for themselves.</p>
            </div>
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
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How quickly do you respond to enquiries?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We respond to all enquiries within 4 business hours during our working days (Sunday to Thursday, 8 AM – 6 PM AST). For existing clients, we provide 24/7 support with priority response times.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Do you offer a free consultation?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Every new engagement starts with a free consultation and <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>complimentary cloud assessment</Link> — including cost analysis, security review, and a 90-day optimization roadmap delivered within 5 business days.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We specialize in <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>, supporting single-cloud and multi-cloud environments. Our certified architects help Saudi enterprises with managed services, migration, security, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cost optimization</Link>.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Can you help reduce our cloud costs?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps and cloud cost optimization</Link> practice has delivered an average 32% cost reduction for Saudi enterprises — through right-sizing, Reserved Instance optimization, waste elimination, and governance automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Optimize Your Cloud?</h2>
            <p>Talk to certified multi-cloud experts in Riyadh, Saudi Arabia. Get a free consultation, a complimentary cloud assessment, and actionable recommendations — no commitment required.</p>
            <p className="cta-urgency">⚡ We respond within 4 business hours — reach out today</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
              <a href="tel:+966053201917" className="btn-white-outline">📞 Call +966 53 201 917</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;
