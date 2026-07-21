'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { submitForm } from '@/lib/formSubmit';

const ContactContent = () => {
  useReveal();
  const [formState, setFormState] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const contactFaqs = [
    {
      question: 'Do you offer a free cloud consultation?',
      answer: 'Yes. Every new enquiry includes a free cloud consultation and assessment to identify savings, security gaps, and operational improvements.',
    },
    {
      question: 'How quickly do you respond to enquiries?',
      answer: 'We respond within four business hours on working days, and existing clients receive priority support through our 24/7 operations team.',
    },
    {
      question: 'Which cloud platforms do you support?',
      answer: 'We support AWS, Microsoft Cloud, Google Cloud, and Oracle Cloud, including single-cloud and multi-cloud enterprise environments.',
    },
    {
      question: 'Can you help reduce our cloud costs?',
      answer: 'Yes. Our managed services and FinOps teams regularly deliver 25-35% cost reduction for Saudi enterprises.',
    },
    {
      question: 'Do you support multi-cloud and hybrid environments?',
      answer: 'Yes. We help enterprises manage multi-cloud estates and hybrid on-premises environments with consistent governance and automation.',
    },
  ];

  const serviceOptions = [
    { id: 'service-aws', value: 'AWS Managed Services', title: 'AWS Managed Services', description: 'Managed AWS operations, governance, and optimization.' },
    { id: 'service-azure', value: 'Azure Managed Services', title: 'Azure Managed Services', description: 'Azure cloud management, migration and security support.' },
    { id: 'service-m365', value: 'M365 Services', title: 'M365 Services', description: 'Microsoft 365 deployment, security, and collaboration support for enterprise teams.' },
    { id: 'service-gcp', value: 'Google Cloud Services', title: 'Google Cloud Services', description: 'GCP architecture, managed workloads, and cost controls.' },
    { id: 'service-oracle', value: 'Oracle Cloud Services', title: 'Oracle Cloud Services', description: 'OCI managed services, integration, and support for enterprise workloads.' },
    { id: 'service-migration', value: 'Cloud Migration', title: 'Cloud Migration', description: 'End-to-end migration planning, execution, and cutover support.' },
    { id: 'service-finops', value: 'FinOps & Cost Optimization', title: 'FinOps & Cost Optimization', description: 'Cloud cost reduction, governance, and efficiency for GCC enterprises.' },
    { id: 'service-billing', value: 'Cloud Billing Management', title: 'Cloud Billing Management', description: 'Automated billing, showback, and cost accountability for multi-cloud estates.' },
    { id: 'service-security', value: 'Cloud Security & Governance', title: 'Cloud Security & Governance', description: 'Cloud security controls, compliance, and governance for enterprise workloads.' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    const fd = new FormData(e.target);
    const data = {};

    for (const [key, value] of fd.entries()) {
      if (data[key]) {
        data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
      } else {
        data[key] = value;
      }
    }

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
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Contact</span>
          </nav>
          <h1 className="display-lg"><span className="text-gradient">Contact Multi-Cloud Experts in Saudi Arabia</span></h1>
          <p>Connect with GulfStream Technologies for expert-led cloud consulting, managed services, and cloud optimization solutions across AWS, Microsoft, Oracle Cloud, and Google Cloud. We help enterprises across the GCC improve performance, strengthen security, and reduce cloud costs with scalable multi-cloud strategies.</p>
          
        </div>
      </section>



      {/* CONTACT GRID */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
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
                    <a href="tel:+9660532019172" style={{ color: 'var(--accent)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+966 (0) 53 201 9172</a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: '4px' }}>Sun–Thu, 8:00 AM – 6:00 PM AST</p>
                  </div>
                </div>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>📍</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>Location — Riyadh, Saudi Arabia<br />  Muscat, Oman</h3>
                    
                  </div>
                </div>
                <div className="card" style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', gap: 'clamp(12px, 2vw, 16px)', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ margin: 0, flexShrink: 0 }}>⚡</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>24/7 Client Support</h3>
                    <a href="tel:+9660532019172" style={{ color: 'var(--accent)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+966 (0) 53 201 9172 (Clients)</a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: '4px' }}>For active GulfStream-managed environments</p>
                  </div>
                </div>
              </div>

           
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <div 
                className="card contact-form-card"
                style={{
                  position: 'relative',
                  background: 'linear-gradient(145deg, rgba(26, 40, 71, 0.95), rgba(15, 26, 46, 0.95))',
                  border: '1.5px solid rgba(255, 107, 53, 0.15)',
                  boxShadow: '0 0 0 1px rgba(255, 107, 53, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 20px 60px rgba(255, 107, 53, 0.08), 0 0 40px rgba(255, 107, 53, 0.05)',
                  transition: 'all 0.35s ease',
                }}
              >
                <h2 style={{ marginBottom: '12px', fontSize: '1.4rem', fontWeight: 700, background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.8))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#fff' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', marginBottom: '20px', lineHeight: 1.6 }}>Fill in your details and one of our cloud specialists will be in touch within 4 hours during business hours.</p>
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
                    <label className="form-label" htmlFor="service">What service are you interested in?</label>
                    <select id="service" name="service" aria-label="What service are you interested in" className="form-input form-select" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option.id} value={option.value}>{option.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cloud-size">Cloud Environment Size</label>
                    <select id="cloud-size" name="cloudSize" aria-label="Cloud Environment Size" className="form-input form-select" defaultValue="" required>
                      <option value="" disabled>Select size</option>
                      <option value="startup-small">1 - 50</option>
                      <option value="mid-market">51 - 200</option>
                      <option value="enterprise">201 - 1000</option>
                      <option value="multi-cloud">1000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Requirements or Challenges</label>
                    <textarea id="message" name="message" aria-label="Project Requirements or Challenges" className="form-input form-textarea" placeholder="Briefly describe your cloud environment, challenges, or goals..." rows="4"></textarea>
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
      <section className="section" >
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
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>We build a tailored proposal based on your environment — not a generic pitch deck. <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact us</Link> for details.</p>
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
      <section className="section"style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion reveal">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`contact-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`contact-faq-answer-${index}`}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" >
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Optimize Your Cloud?</h2>
            <p>Talk to certified multi-cloud experts in Riyadh, Saudi Arabia. Get a free consultation, a complimentary cloud assessment, and actionable recommendations — no commitment required.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;
