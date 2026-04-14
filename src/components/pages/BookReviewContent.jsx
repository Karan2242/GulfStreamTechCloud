'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { submitForm } from '@/lib/formSubmit';

const BookReviewContent = () => {
  useReveal();
  const [formState, setFormState] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.subject = 'New Cloud Assessment Request — GulfStream Website';
    try {
      await submitForm(data);
      setFormState('success');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setFormState('error');
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '820px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Book a Free Cloud Review</span>
          </nav>
          <div className="badge badge-accent" style={{ marginBottom: '16px' }}>🎁 100% Free · No Commitment</div>
          <h1 className="display-lg">Free Multi-Cloud Assessment<br /><span className="text-gradient">Saudi Arabia</span></h1>
          <p>Book a free, no-obligation cloud assessment for your Saudi enterprise — covering AWS, Azure, Google Cloud, and Oracle Cloud. Delivered by certified cloud specialists within 5 business days. Discover exact cost savings, security gaps, and performance improvements.</p>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by 40+ Saudi enterprises</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Avg Savings Found</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">5 Days</span>
                <span className="hero-quick-stat-label">Delivery Time</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">100%</span>
                <span className="hero-quick-stat-label">Free, No Strings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>GulfStream Technology offers a <strong>free cloud assessment in Saudi Arabia</strong> across AWS, Azure, Google Cloud, and Oracle Cloud for enterprises looking to reduce cloud costs, strengthen security, and optimize performance. Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>cloud cost optimization audit</Link> has helped 40+ Saudi enterprises identify an average of 30% in cloud savings — across retail, healthcare, SaaS, and logistics.</p>
            <p>Whether you need a <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security assessment</Link>, an <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS managed services</Link> evaluation, or an <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure consulting</Link> review, our team of certified AWS architects and Azure expert engineers delivers a comprehensive, actionable report — completely free and with no obligation to engage.</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🎁 What&apos;s Included</div>
            <h2 className="display-md">What You Get in Your Free Cloud Review</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="icon-box" style={{ marginBottom: 0 }}>📊</div>
                <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Cloud Cost Analysis</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>A detailed breakdown of your current cloud spend — identifying idle resources, oversized instances, On-Demand waste, and actionable savings opportunities with estimated SAR impact.</p>
              <div style={{ marginTop: '16px', padding: '12px', background: 'var(--dark-bg)', borderRadius: 'var(--radius-sm)', fontSize: '.82rem', color: 'var(--accent)' }}>
                Average savings identified: <strong>25–35% of monthly bill</strong>
              </div>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="icon-box" style={{ marginBottom: 0 }}>🔒</div>
                <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Security Posture Review</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>A prioritized report of your cloud security risks — covering IAM over-permissions, misconfigured resources, encryption gaps, and NCA ECC compliance status — with remediation recommendations.</p>
              <div style={{ marginTop: '16px', padding: '12px', background: 'var(--dark-bg)', borderRadius: 'var(--radius-sm)', fontSize: '.82rem', color: 'var(--accent)' }}>
                Delivered within: <strong>5 business days</strong>
              </div>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="icon-box" style={{ marginBottom: 0 }}>🗺️</div>
                <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Optimization Roadmap</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>A 90-day cloud optimization roadmap with prioritized, effort-vs-impact actions — giving you an immediate plan to follow whether or not you engage GulfStream Technology.</p>
              <div style={{ marginTop: '16px', padding: '12px', background: 'var(--dark-bg)', borderRadius: 'var(--radius-sm)', fontSize: '.82rem', color: 'var(--accent)' }}>
                Yours to keep: <strong>100% free, no strings</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FORM */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>
            {/* Left: Trust / Process */}
            <div className="reveal">
              <h2 style={{ marginBottom: '24px', fontSize: '1.3rem' }}>How It Works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.9rem', flexShrink: 0 }}>1</div>
                  <div>
                    <h3 style={{ marginBottom: '6px', fontSize: '.95rem' }}>Submit Your Request</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Fill in the form with your contact details and cloud environment overview.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.9rem', flexShrink: 0 }}>2</div>
                  <div>
                    <h3 style={{ marginBottom: '6px', fontSize: '.95rem' }}>Discovery Call (30 min)</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>A senior cloud specialist contacts you to understand your environment and share read-only access credentials for our analysis tools.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.9rem', flexShrink: 0 }}>3</div>
                  <div>
                    <h3 style={{ marginBottom: '6px', fontSize: '.95rem' }}>Assessment &amp; Analysis</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>Our team analyses your cloud environment using industry-leading assessment tools over 3–5 business days.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.9rem', flexShrink: 0 }}>4</div>
                  <div>
                    <h3 style={{ marginBottom: '6px', fontSize: '.95rem' }}>Findings Presentation</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem' }}>We present your personalized cost analysis, security report, and 90-day optimization roadmap in a live session with your team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal">
              <div className="card" style={{ padding: '48px' }}>
                <h2 style={{ marginBottom: '8px', fontSize: '1.3rem' }}>Book Your Free Cloud Assessment</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', marginBottom: '8px' }}>Takes 3 minutes. We&apos;ll be in touch within 4 business hours.</p>
                <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, marginBottom: '28px' }}>⚡ Limited to 10 free assessments per month</p>
                
                {formState !== 'success' ? (
                  <form className="contact-form" id="reviewForm" onSubmit={handleReviewSubmit}>
                    {/* Honeypot */}
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="revFirstName">First Name *</label>
                        <input type="text" id="revFirstName" name="firstName" autoComplete="given-name" aria-label="First Name" className="form-input" placeholder="Ahmed" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="revLastName">Last Name *</label>
                        <input type="text" id="revLastName" name="lastName" autoComplete="family-name" aria-label="Last Name" className="form-input" placeholder="Al-Rashid" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revEmail">Business Email *</label>
                      <input type="email" id="revEmail" name="email" autoComplete="email" aria-label="Business Email" className="form-input" placeholder="ahmed@yourcompany.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revPhone">Phone Number *</label>
                      <input type="tel" id="revPhone" name="phone" autoComplete="tel" aria-label="Phone Number" className="form-input" placeholder="+966 5X XXX XXXX" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revCompany">Company Name *</label>
                      <input type="text" id="revCompany" name="company" autoComplete="organization" aria-label="Company Name" className="form-input" placeholder="Your Company LLC" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revRole">Your Role *</label>
                      <select id="revRole" name="role" aria-label="Your Role" className="form-input form-select" required defaultValue="">
                        <option value="" disabled>Select your role</option>
                        <option value="cto">CTO / CIO</option>
                        <option value="it-director">IT Director / Manager</option>
                        <option value="cloud-architect">Cloud Architect / Engineer</option>
                        <option value="finance">Finance / Procurement</option>
                        <option value="ceo">CEO / General Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revPlatform">Current Cloud Platform(s) *</label>
                      <select id="revPlatform" name="platform" aria-label="Current Cloud Platform" className="form-input form-select" required defaultValue="">
                        <option value="" disabled>Select cloud platform</option>
                        <option value="aws">AWS</option>
                        <option value="azure">Azure</option>
                        <option value="oracle">Oracle Cloud</option>
                        <option value="gcp">Google Cloud</option>
                        <option value="multi-cloud">Multi-Cloud</option>
                        <option value="planning">Planning to move to cloud</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revSpend">Estimated Monthly Cloud Spend</label>
                      <select id="revSpend" name="monthlySpend" aria-label="Estimated Monthly Cloud Spend" className="form-input form-select" defaultValue="">
                        <option value="" disabled>Select spend range</option>
                        <option value="under-10k">Under SAR 10,000</option>
                        <option value="10k-50k">SAR 10,000 – 50,000</option>
                        <option value="50k-200k">SAR 50,000 – 200,000</option>
                        <option value="200k-500k">SAR 200,000 – 500,000</option>
                        <option value="over-500k">Over SAR 500,000</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="revChallenge">Primary Cloud Challenge</label>
                      <textarea id="revChallenge" name="challenge" aria-label="Primary Cloud Challenge" className="form-input form-textarea" placeholder="e.g. Costs are growing 20% month-over-month, we have no visibility into where the spend is going..." rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full" id="reviewSubmitBtn" style={{ justifyContent: 'center', fontSize: '1rem', padding: '16px' }} disabled={formState === 'submitting'}>
                      {formState === 'submitting' ? 'Submitting...' : '📋 Book My Free Cloud Assessment →'}
                    </button>
                    {formState === 'error' && (
                      <p style={{ textAlign: 'center', color: '#f87171', fontSize: '0.85rem', marginTop: '12px' }}>❌ {errorMsg}</p>
                    )}
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '.8rem', marginTop: '12px' }}>No spam. No commitment. 100% free. We&apos;ll contact you within 4 business hours.</p>
                  </form>
                ) : (
                  <div id="reviewSuccess" style={{ textAlign: 'center', padding: '32px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                    <h3>Request Received!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Thank you for booking your free cloud review. A GulfStream specialist will contact you within 4 business hours to arrange your discovery call.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">💬 Client Feedback</div>
            <h2 className="display-md">What Clients Say After Their Free Review</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card testimonial-card">
              <p>&ldquo;The free cloud review identified SAR 42,000 in monthly savings we had no idea existed. The GulfStream team was thorough, fast, and the recommendations were immediately actionable.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div>
                  <div className="author-name">Ahmed Khalid</div>
                  <div className="author-title">CTO, Leading Saudi Retailer</div>
                </div>
              </div>
            </div>
            <div className="card testimonial-card">
              <p>&ldquo;I expected a sales pitch. What I got was a 35-page detailed assessment of our Azure environment with specific remediation steps. We implemented 80% of the recommendations ourselves — the value was immediate.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">FM</div>
                <div>
                  <div className="author-name">Fatima Mahmoud</div>
                  <div className="author-title">IT Director, Healthcare Group</div>
                </div>
              </div>
            </div>
            <div className="card testimonial-card">
              <p>&ldquo;The security findings alone in the free review justified engaging GulfStream. Three publicly accessible S3 buckets we didn&apos;t know about. That&apos;s the kind of expertise that matters.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">SR</div>
                <div>
                  <div className="author-name">Salman Al-Rashid</div>
                  <div className="author-title">Cloud Architect, SaaS Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>What is included in the free cloud review?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Our free cloud review includes a detailed cloud cost analysis with estimated SAR savings, a security posture review covering IAM, encryption, and NCA ECC compliance, and a 90-day optimization roadmap — all delivered within 5 business days.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>How long does the assessment take?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>The full assessment takes 3-5 business days after the initial 30-minute discovery call. We present findings in a live session with your team, including actionable recommendations you can implement immediately.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Is the cloud review really free?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes, 100% free with no obligation to engage GulfStream afterward. You keep the full assessment report, cost analysis, and optimization roadmap regardless of your decision. <Link href="/pricing" style={{ color: 'var(--accent)' }}>See our pricing</Link> if you decide to continue with managed services.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Which cloud platforms do you assess?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream assesses all major cloud platforms including <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link>. We evaluate single-cloud and multi-cloud environments for Saudi enterprises.</p>
            </div>
            <div className="card" style={{ gridColumn: 'span 2' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Will I receive a cost savings report?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Every free cloud review includes a detailed cost savings report with specific SAR amounts — identifying idle resources, oversized instances, Reserved Instance opportunities, and governance improvements. Our clients typically see 25-35% savings. See <Link href="/case-studies" style={{ color: 'var(--accent)' }}>real results in our case studies</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Discover Your Cloud Savings?</h2>
            <p>Book your free cloud assessment today — certified cloud experts, actionable insights, and a 90-day roadmap delivered within 5 business days. No cost, no commitment.</p>
            <p className="cta-urgency">⚡ Limited to 10 free assessments per month — book now</p>
            <div className="cta-actions">
              <a href="#reviewForm" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</a>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookReviewContent;
