'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const ServicesIndexContent = () => {
  useReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Services</span>
          </div>
          <div className="badge badge-primary" style={{ marginBottom: '16px' }}>🛠️ Managed Cloud Services</div>
          <h1 className="display-lg">Managed Cloud Services<br /><span className="text-gradient">in Saudi Arabia</span></h1>
          <p>GulfStream Technologies delivers <strong>enterprise multi-cloud managed services across AWS, Azure, Google Cloud, and Oracle Cloud</strong> for organizations across <strong>Riyadh, Jeddah, and Dammam</strong>. We Operate, Optimize, Secure, Govern, and Modernize your cloud — reducing costs by up to <strong>30%</strong> while maintaining <strong>99.99% uptime</strong>.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Your Free Cloud Cost Assessment</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Get a Cloud Optimization Report</Link>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-label">Trusted by 40+ enterprises across Saudi Arabia</span>
            <div className="hero-quick-stats">
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">30%</span>
                <span className="hero-quick-stat-label">Avg Cost Reduction</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">99.99%</span>
                <span className="hero-quick-stat-label">Uptime SLA</span>
              </div>
              <div className="hero-quick-stat">
                <span className="hero-quick-stat-value">150+</span>
                <span className="hero-quick-stat-label">Cloud Environments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE MANAGED CLOUD SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">☁️ Cloud Managed Services</div>
            <h2 className="display-md">What Are Managed Cloud Services in Saudi Arabia?</h2>
          </div>
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <p>Managed cloud services involve outsourcing the day-to-day management, monitoring, and optimization of your cloud infrastructure to a dedicated team of certified experts. For enterprises operating in Saudi Arabia, this means partnering with a provider who understands the unique demands of the regional market — from regulatory compliance and data residency to supporting Vision 2030 digital transformation goals. GulfStream Technologies provides managed services across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, and <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> designed specifically for the Saudi enterprise ...
            <p style={{ marginTop: '16px' }}>Our approach goes beyond basic monitoring. We integrate <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps cost optimization</Link> into every engagement, delivering an average <strong>30% cloud cost reduction within 90 days</strong>. Combined with <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud security governance</Link> aligned to NCA ECC compliance standards, enterprises in Riyadh, Jeddah, and Dammam gain a fully managed cloud environment that is secure, cost-efficient, and always available.</p>
            <p style={{ marginTop: '16px' }}>Whether you need to <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>migrate to the cloud</Link>, optimize an existing multi-cloud estate, or centralize <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cloud billing management</Link> across departments — GulfStream is the trusted managed cloud services provider in Saudi Arabia with a proven track record across 40+ enterprise clients. <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Book a free cloud assessment</Link> to see where your environment stands today.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS OF MANAGED CLOUD SERVICES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">✅ Key Benefits</div>
            <h2 className="display-md">Benefits of Managed Cloud Services</h2>
            <p>Partnering with a managed cloud provider in Saudi Arabia delivers measurable advantages for your enterprise.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>📊</div>
              <h3 style={{ fontSize: '1.1rem' }}>Cost Optimization (FinOps)</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Reduce cloud spend by up to <strong>30%</strong> through continuous rightsizing, Reserved Instance management, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps best practices</Link> tailored to your workloads across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🔔</div>
              <h3 style={{ fontSize: '1.1rem' }}>24/7 Monitoring &amp; Support</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Round-the-clock infrastructure monitoring, alerting, and incident response ensures your cloud environments achieve <strong>99.99% uptime</strong> — backed by our <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>managed operations</Link> team.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🔒</div>
              <h3 style={{ fontSize: '1.1rem' }}>Security &amp; Compliance</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Enterprise-grade security posture management, IAM governance, and <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>compliance automation</Link> aligned with NCA ECC and Saudi regulatory requirements.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>📈</div>
              <h3 style={{ fontSize: '1.1rem' }}>Scalability on Demand</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Scale your cloud resources up or down instantly to meet business demands without overprovisioning — whether on <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link> or <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🏅</div>
              <h3 style={{ fontSize: '1.1rem' }}>Certified Cloud Experts</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Access multi-cloud certified engineers with deep expertise managing enterprise environments across Riyadh, Jeddah, and Dammam.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '1.1rem' }}>Performance Optimization</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Enhance application speed, reduce latency, and improve throughput through continuous performance tuning, caching strategies, and infrastructure optimization across your cloud estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🔑 Our Pillars</div>
            <h2 className="display-md">The Five Pillars of Our Service Model</h2>
            <p>Our managed cloud framework is built around five core pillars that ensure complete coverage of your cloud environment.</p>
          </div>
          <div className="services-pillars-grid reveal">
            <div className="card text-center" style={{ gridColumn: 'span 1' }}>
              <div className="icon-box icon-box-lg" style={{ margin: '0 auto 16px' }}>⚙️</div>
              <h3 style={{ fontSize: '1.1rem' }}>Operate</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>24/7 <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>cloud operations</Link>, monitoring, patching, and incident response that keep your environments running with 99.99% uptime.</p>
            </div>
            <div className="card text-center" style={{ gridColumn: 'span 1' }}>
              <div className="icon-box icon-box-lg" style={{ margin: '0 auto 16px' }}>📈</div>
              <h3 style={{ fontSize: '1.1rem' }}>Optimize</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Continuous rightsizing, Reserved Instance management, and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps practices</Link> to drive maximum ROI from your cloud investments.</p>
            </div>
            <div className="card text-center">
              <div className="icon-box icon-box-lg" style={{ margin: '0 auto 16px' }}>🔒</div>
              <h3 style={{ fontSize: '1.1rem' }}>Secure</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>End-to-end <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security posture management</Link>, threat detection, IAM governance, and NCA ECC compliance automation.</p>
            </div>
            <div className="card text-center">
              <div className="icon-box icon-box-lg" style={{ margin: '0 auto 16px' }}>🏛️</div>
              <h3 style={{ fontSize: '1.1rem' }}>Govern</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Cloud governance frameworks, policy enforcement, tagging strategies, and <Link href="/services/cloud-billing-management" style={{ color: 'var(--accent)' }}>cost attribution</Link> with audit-ready reporting.</p>
            </div>
            <div className="card text-center">
              <div className="icon-box icon-box-lg" style={{ margin: '0 auto 16px' }}>🚀</div>
              <h3 style={{ fontSize: '1.1rem' }}>Modernize</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}><Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>Migrate legacy systems</Link>, re-architect into microservices, and adopt cloud-native technologies for future-ready infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📦 All Services</div>
            <h2 className="display-md">What We Deliver</h2>
            <p>Explore our full range of managed cloud services — each designed to deliver measurable outcomes for Saudi enterprises.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-card-header">
                <div className="service-icon">🌐</div>
                <h3>Cloud Managed Services</h3>
              </div>
              <p>End-to-end managed services across <strong>AWS, Azure, Oracle Cloud, and Google Cloud</strong> — 24/7 operations, monitoring, security governance, and FinOps cost optimization delivering 99.99% uptime and 30% average cost savings for your entire cloud estate.</p>
              <Link href="/services/cloud-managed-services/aws" className="learn-more">AWS Managed Services →</Link>
              <Link href="/services/cloud-managed-services/azure" className="learn-more" style={{ marginLeft: '16px' }}>Azure Managed Services →</Link>
            </div>
            <div className="service-card reveal">
              <div className="service-card-header">
                <div className="service-icon">📊</div>
                <h3>FinOps &amp; Cost Optimization</h3>
              </div>
              <p>Apply the <strong>FinOps framework</strong> to achieve full cloud spend visibility, eliminate wasted resources, implement rightsizing strategies, and build a culture of cloud financial accountability — delivering an average <strong>30% cost reduction within 90 days</strong>.</p>
              <Link href="/services/finops-cost-optimization" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-card reveal">
              <div className="service-card-header">
                <div className="service-icon">🧾</div>
                <h3>Cloud Billing Management</h3>
              </div>
              <p>Centralized, multi-account <strong>cloud billing management</strong> with chargeback reporting, anomaly detection, and executive dashboards — giving CFOs and finance teams full visibility across Riyadh, Jeddah, and Dammam operations.</p>
              <Link href="/services/cloud-billing-management" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-card reveal">
              <div className="service-card-header">
                <div className="service-icon">🚀</div>
                <h3>Cloud Migration &amp; Modernization</h3>
              </div>
              <p>End-to-end <strong>cloud migration services</strong> from discovery and assessment through cutover and post-migration optimization — using proven rehost, replatform, and refactor strategies to minimize downtime and accelerate time-to-value.</p>
              <Link href="/services/cloud-migration" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-card reveal">
              <div className="service-card-header">
                <div className="service-icon">🔒</div>
                <h3>Cloud Security &amp; Governance</h3>
              </div>
              <p>Enterprise <strong>cloud security</strong> — continuous compliance monitoring, CSPM, IAM hardening, encryption governance, and incident response aligned with <strong>NCA ECC standards</strong> and Saudi regulatory requirements.</p>
              <Link href="/services/cloud-security-governance" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-card reveal" style={{ background: 'var(--gradient-card)', borderColor: 'var(--dark-border)' }}>
              <div className="service-card-header">
                <div className="service-icon">🛠️</div>
                <h3>Custom Cloud Solutions</h3>
              </div>
              <p>Need a cloud service tailored to your specific requirements? We design and deliver <strong>custom multi-cloud solutions</strong> for enterprises across Riyadh, Jeddah, Dammam, and the wider Kingdom — from architecture design to full managed operations.</p>
              <Link href="/contact" className="btn btn-accent btn-sm" style={{ marginTop: '8px' }}>Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Need Help Choosing the Right Cloud Service?</h2>
            <p>Book a free Cloud Assessment — our certified engineers will evaluate your current AWS, Azure, Google Cloud, or Oracle Cloud environment and recommend the optimal service combination for your business goals.</p>
            <p className="cta-urgency">⚡ Limited free assessments available this month — average 30% savings identified</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Your Free Cloud Cost Assessment</Link>
              <Link href="/pricing" className="btn-white-outline">View Pricing Plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GULFSTREAM */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏆 Why GulfStream</div>
            <h2 className="display-md">Why Choose GulfStream Technologies in Saudi Arabia?</h2>
            <p>We combine global cloud expertise with deep Saudi market knowledge to deliver managed services that drive real, measurable business outcomes.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🇸🇦</div>
              <h3 style={{ fontSize: '1.1rem' }}>Saudi Market Expertise</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Headquartered in Riyadh, serving <strong>40+ enterprise clients</strong> across Jeddah and Dammam. We understand NCA ECC compliance, data residency requirements, and the Saudi business culture — delivering <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>cloud solutions</Link> that fit the local enterprise environment.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontSize: '1.1rem' }}>Vision 2030 Aligned</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>Our managed cloud services help Saudi enterprises accelerate digital transformation in alignment with Vision 2030 — <Link href="/services/cloud-migration" style={{ color: 'var(--accent)' }}>modernizing infrastructure</Link> and building cloud-native capabilities that future-proof your organization.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-lg" style={{ marginBottom: '16px' }}>🏢</div>
              <h3 style={{ fontSize: '1.1rem' }}>Enterprise-Grade Delivery</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>From multi-cloud governance and <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps</Link> to 24/7 operations, we deliver <strong>outcome-based contracts</strong> with measurable KPIs — cost reduction, uptime guarantees, and security posture improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📊 Proven Results</div>
            <h2 className="display-md">Delivering Measurable Cloud Outcomes</h2>
          </div>
          <div className="grid-4 reveal" style={{ textAlign: 'center' }}>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏢</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>40+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Enterprise Clients Across Saudi Arabia</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>30%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Proven Average Cloud Cost Reduction</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>99.99%</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Uptime SLA Consistently Delivered</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏅</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>Multi-Cloud</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem' }}>Certified Cloud Partner Engineers</p>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>Serving enterprises across <strong>Riyadh, Jeddah, Dammam</strong>, and the wider GCC region</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions About Managed Cloud Services</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>What are managed cloud services in Saudi Arabia?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Managed cloud services in Saudi Arabia involve outsourcing 24/7 cloud operations — monitoring, security, optimization, and maintenance — to a certified provider like GulfStream Technologies. We manage <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, Oracle Cloud, and Google Cloud environments for enterprises across Riyadh, Jeddah, and Dammam, delivering an average 30% cost reduction and 99.99% uptime.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>Which cloud platforms do you support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream Technologies is certified across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Microsoft Azure</Link>, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments, helping Saudi enterprises optimize all platforms for cost, security, and performance.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>How much cost savings can I expect?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps-driven approach</Link> delivers an average <strong>30% cloud cost reduction within 90 days</strong>. Savings come from rightsizing, Reserved Instance optimization, Spot Instance automation, waste elimination, and continuous cost governance — making the investment self-funding from day one.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>Do you offer multi-cloud support?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. GulfStream provides unified managed services across AWS, Azure, Oracle Cloud, and Google Cloud. We operate multi-cloud environments with centralized monitoring, consistent <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security policies</Link>, cross-cloud FinOps, and a single pane of glass for operations.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>How quickly can you start managing our cloud?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>We can begin onboarding within 1–2 weeks of engagement. The process starts with a <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>free Cloud Assessment</Link> (3–5 business days), followed by phased onboarding — monitoring and alerting within week 1, full managed operations within 30 days.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>Do you operate in Riyadh, Jeddah, and Dammam?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. GulfStream Technologies is headquartered in Riyadh and serves enterprise clients across Jeddah, Dammam, and the wider GCC region. We provide on-site consulting, 24/7 remote operations, and ensure compliance with NCA ECC and Vision 2030 requirements. <Link href="/about" style={{ color: 'var(--accent)' }}>Learn more about us</Link>.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>What makes GulfStream different from other cloud providers?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>GulfStream is not a generic MSP. We specialize exclusively in cloud management with <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps at the core</Link>, <Link href="/services/cloud-security-governance" style={{ color: 'var(--accent)' }}>security-first architecture</Link>, and Saudi compliance expertise. Our outcome-based contracts deliver measurable results — cost reduction, uptime guarantees, and security improvements.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>Is there a free cloud consultation available?</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Yes. Every prospective client receives a complimentary <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Cloud Assessment</Link> that identifies cost savings opportunities, security gaps, and performance improvements in your current cloud environment — delivered within 5 business days at no cost. <Link href="/pricing" style={{ color: 'var(--accent)' }}>View our pricing plans</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Optimize Your Cloud in Saudi Arabia?</h2>
            <p>Book a free 60-minute Cloud Assessment with our certified engineers in Riyadh, Jeddah, or Dammam and discover exactly where your cloud is underperforming or overspending.</p>
            <p className="cta-urgency">⚡ Limited free cloud assessments available — join 40+ Saudi enterprises already saving 30%</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Your Free Cloud Cost Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesIndexContent;
