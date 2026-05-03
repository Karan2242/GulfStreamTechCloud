'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { useReveal } from '@/hooks/useReveal';
import Counter from '@/components/Counter';

const HomeContent = () => {
  useReveal();

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  

  const homeFaqs = [
    {
      question: 'What are Managed Cloud Services?',
      answer: (
        <>
          Managed Cloud Services involve outsourcing the administration, monitoring, security, and optimization of your cloud infrastructure to a specialized provider. This allows your teams to focus on business innovation while certified engineers handle 24/7 operations across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, and other cloud platforms.
        </>
      )
    },
    {
      question: 'Which cloud platforms do you support?',
      answer: 'GulfStream Technologies is certified across AWS, Microsoft Azure, Google Cloud, and Oracle Cloud. We manage single-cloud and multi-cloud environments, helping you choose the right platform — AWS for cloud-native workloads, Azure for hybrid and Microsoft-centric environments, Google Cloud for data and AI, or Oracle Cloud for enterprise applications — and optimize all for cost, security, and performance.'
    },
    {
      question: 'How much cost savings can you deliver?',
      answer: (
        <>
          Our <Link href="/services/finops-cost-optimization" style={{ color: 'var(--accent)' }}>FinOps-driven approach</Link> delivers an average 30% cloud cost reduction within 90 days. Savings come from rightsizing, Reserved Instance optimization, Spot Instance automation, waste elimination, and continuous cost governance — making the investment self-funding.
        </>
      )
    },
    {
      question: 'Do you operate in Saudi Arabia?',
      answer: 'Yes. GulfStream Technologies is headquartered in Riyadh and serves enterprise clients across Jeddah, Dammam, and the wider GCC. We understand local regulations including NCA ECC compliance, support Vision 2030 digital transformation, and provide Arabic-language support.'
    },
    {
      question: 'Is there a free cloud consultation available?',
      answer: (
        <>
          Yes. We offer a complimentary <Link href="/book-a-review" style={{ color: 'var(--accent)' }}>Cloud Assessment</Link> that identifies cost savings opportunities, security gaps, and performance improvements in your current AWS, Azure, Google Cloud, or Oracle Cloud environment — at no cost and no commitment.
        </>
      )
    },
    {
      question: 'What industries do you serve?',
      answer: (
        <>
          We serve enterprises across <Link href="/industries/retail" style={{ color: 'var(--accent)' }}>retail</Link>, <Link href="/industries/healthcare" style={{ color: 'var(--accent)' }}>healthcare</Link>, <Link href="/industries/logistics" style={{ color: 'var(--accent)' }}>logistics</Link>, <Link href="/industries/tech-saas" style={{ color: 'var(--accent)' }}>SaaS/technology</Link>, and <Link href="/industries/professional-services" style={{ color: 'var(--accent)' }}>professional services</Link> in Saudi Arabia — with industry-specific architectures for compliance, scalability, and operational requirements.
        </>
      )
    }
  ];

  const caseStudyCards = [
    <div className="case-study-card" key="retail">
      <div className="case-study-header">
        <span className="case-category">Retail</span>
      </div>
      
      <div className="case-study-metric">
        <div className="metric-value"><Counter target={28} suffix="%" decimals={0} /></div>
        <div className="metric-label">Infrastructure Cost Reduction</div>
      </div>

      <div className="case-study-content">
        <h3>Multi-Branch Retail Chain</h3>
        <p>A leading Saudi retail chain migrated 40+ workloads to AWS, implemented auto-scaling, and adopted FinOps practices — achieving 28% infrastructure cost reduction and 40% improvement in application load times.</p>
      </div>

      <div className="case-study-footer">
        <span className="case-tag">AWS EC2</span>
        <span className="case-tag">Auto-Scaling</span>
        <span className="case-tag">FinOps</span>
      </div>
    </div>,
    <div className="case-study-card" key="healthcare">
      <div className="case-study-header">
        <span className="case-category">Healthcare</span>
      </div>
      
      <div className="case-study-metric">
        <div className="metric-value">99.99%</div>
        <div className="metric-label">Application Uptime Achieved</div>
      </div>

      <div className="case-study-content">
        <h3>Private Hospital Group</h3>
        <p>A regional hospital group required HIPAA-aligned cloud infrastructure. We deployed a multi-AZ Azure architecture with disaster recovery, achieving 99.99% uptime for critical clinical applications and full audit compliance.</p>
      </div>

      <div className="case-study-footer">
        <span className="case-tag">Azure</span>
        <span className="case-tag">HIPAA Aligned</span>
        <span className="case-tag">Disaster Recovery</span>
      </div>
    </div>,
    <div className="case-study-card" key="saas">
      <div className="case-study-header">
        <span className="case-category">SaaS Platform</span>
      </div>
      
      <div className="case-study-metric">
        <div className="metric-value"><Counter target={35} suffix="%" decimals={0} /></div>
        <div className="metric-label">Infrastructure Savings</div>
      </div>

      <div className="case-study-content">
        <h3>Enterprise SaaS Provider</h3>
        <p>A Saudi SaaS company was overspending on unoptimized cloud resources. Through rightsizing, Reserved Instance strategy, and Kubernetes cost governance, we delivered 35% savings within 60 days.</p>
      </div>

      <div className="case-study-footer">
        <span className="case-tag">AWS EKS</span>
        <span className="case-tag">Rightsizing</span>
        <span className="case-tag">Reserved Instances</span>
      </div>
    </div>
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                Saudi Arabia's Multi-Cloud Partner
              </div>
              <div style={{ width: '40px', height: '3px', backgroundColor: '#00AEEF', marginBottom: '20px' }}></div>
              <h1 className="hero-title">
                Multi-Cloud Managed Services in Saudi Arabia
              </h1>
              <p className="hero-subtitle">AWS · Azure · Google Cloud · Oracle Cloud</p>
              <p className="hero-desc">
                Helping SMB and mid-market companies reduce cloud costs, improve reliability, and scale with SLA-driven operations.
              </p>
              <div className="hero-actions">
                <Link href="/book-a-review" className="btn btn-primary btn-lg">
                  Get a Free Cloud Cost & Ops Review →
                </Link>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Book a Call
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">SLA-Backed Operations</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">FinOps Certified</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">24/7 NOC Support</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-background-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BAR */}
      <div className="trust-bar" >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="trust-item">
              <div className="trust-icon">☁️</div>
              <div>
                <div className="trust-label">AWS Expertise</div>
                <div className="trust-desc">Certified AWS cloud architects</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔷</div>
              <div>
                <div className="trust-label">Azure Expertise</div>
                <div className="trust-desc">Microsoft Azure certified engineers</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📊</div>
              <div>
                <div className="trust-label">FinOps Focus</div>
                <div className="trust-desc">Cloud financial management framework</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔔</div>
              <div>
                <div className="trust-label">24/7 Monitoring</div>
                <div className="trust-desc">Round-the-clock incident response</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🇸🇦</div>
              <div>
                <div className="trust-label">Saudi-Based Support</div>
                <div className="trust-desc">Local expertise, regional compliance</div>
              </div>
            </div>
          </div>
          <div className="marquee-track" aria-hidden="true">
            <div className="trust-item">
              <div className="trust-icon">☁️</div>
              <div>
                <div className="trust-label">AWS Expertise</div>
                <div className="trust-desc">Certified AWS cloud architects</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔷</div>
              <div>
                <div className="trust-label">Azure Expertise</div>
                <div className="trust-desc">Microsoft Azure certified engineers</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📊</div>
              <div>
                <div className="trust-label">FinOps Focus</div>
                <div className="trust-desc">Cloud financial management framework</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔔</div>
              <div>
                <div className="trust-label">24/7 Monitoring</div>
                <div className="trust-desc">Round-the-clock incident response</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🇸🇦</div>
              <div>
                <div className="trust-label">Saudi-Based Support</div>
                <div className="trust-desc">Local expertise, regional compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Our Services</div>
            <h2 className="display-md">What We Deliver</h2>
            <p>Explore our full range of managed cloud services — each designed to deliver measurable outcomes for Saudi enterprises.</p>
          </div>
          <div className="services-grid">
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-monitoring.png" alt="Managed cloud monitoring dashboard" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Managed Cloud Services</h3>
                <p>End-to-end managed cloud operations across <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, Google Cloud & Oracle Cloud — 24/7 monitoring, incident response, security governance, and FinOps cost optimization for your entire cloud estate in Saudi Arabia.</p>
                <Link href="/services/cloud-managed-services" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-finops.png" alt="FinOps cost optimization analytics" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud FinOps &amp; Cost Optimization</h3>
                <p>Apply the FinOps framework to gain full visibility into cloud spend, eliminate waste, rightsize resources, and achieve sustainable cost governance — delivering an average 30% cost reduction across your cloud estate.</p>
                <Link href="/services/finops-cost-optimization" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-billing.png" alt="Cloud billing and chargeback reporting" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Billing Management</h3>
                <p>Centralized billing, chargeback reporting, and spend analytics across multiple accounts and teams. Gain accurate cost attribution so every dollar spent on cloud is justified and trackable.</p>
                <Link href="/services/cloud-billing-management" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-migration.png" alt="Cloud migration and modernization roadmap" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Migration &amp; Modernization</h3>
                <p>Migrate legacy on-premises workloads to <Link href="/services/cloud-managed-services/aws" style={{ color: 'var(--accent)' }}>AWS</Link>, <Link href="/services/cloud-managed-services/azure" style={{ color: 'var(--accent)' }}>Azure</Link>, <Link href="/services/cloud-managed-services/google" style={{ color: 'var(--accent)' }}>Google Cloud</Link>, or <Link href="/services/cloud-managed-services/oracle" style={{ color: 'var(--accent)' }}>Oracle Cloud</Link> with zero business disruption. We design, plan, and execute cloud migrations following proven rehost, replatform, and refactor strategies.</p>
                <Link href="/services/cloud-migration" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-security.png" alt="Cloud security governance and compliance" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Cloud Security &amp; Governance</h3>
                <p>Enterprise-level cloud security including IAM governance, NCA ECC compliance automation, security posture management, and continuous threat detection across AWS, Azure, Google Cloud, and Oracle Cloud environments.</p>
                <Link href="/services/cloud-security-governance" className="learn-more">Learn More →</Link>
              </div>
            </div>
            <div className="service-card premium-card reveal">
              <Image src="/assets/images/service-custom.png" alt="Custom cloud solutions architecture" className="service-image" width={800} height={450} />
              <div className="service-content">
                <h3>Custom Cloud Solutions</h3>
                <p>Need a cloud service tailored to your specific requirements? We design and deliver custom cloud solutions for enterprises across Saudi Arabia — from Kubernetes management to multi-cloud architecture.</p>
                <Link href="/contact" className="learn-more">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* WHY GULFSTREAM */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why GulfStream</div>
            <h2 className="display-md">The GulfStream Difference</h2>
            <p>We&apos;re not just another cloud vendor. We&apos;re your strategic partner — FinOps-driven, security-first, and accountable to your outcomes.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🏢</div>
                <div className="card-title-row">
                  <h3>Not a Generic MSP</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We don&apos;t offer one-size-fits-all monitoring. Every engagement is architected around your specific workloads, compliance requirements, and growth trajectory — with dedicated account teams.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">💰</div>
                <div className="card-title-row">
                  <h3>FinOps at its Core</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Cloud cost management is embedded in every engagement — not an upsell. From day one, we optimize spend through rightsizing, Reserved Instances, Spot automation, and continuous governance.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🔒</div>
                <div className="card-title-row">
                  <h3>Security-First Architecture</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>IAM governance, encryption-at-rest, NCA ECC compliance, and continuous threat detection are built into our operations — protecting your cloud environment proactively, not reactively.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🇸🇦</div>
                <div className="card-title-row">
                  <h3>Saudi Compliance Expertise</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Deep understanding of NCA ECC, Saudi data residency requirements, Vision 2030 digital transformation goals, and Arabic-language support — from our Riyadh headquarters.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">☁️</div>
                <div className="card-title-row">
                  <h3>Multi-Cloud Certified Team</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Certified across AWS, Azure, Google Cloud, and Oracle Cloud, we manage complex multi-cloud environments with unified visibility, governance, and optimization — choosing the right platform for every workload.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">✅</div>
                <div className="card-title-row">
                  <h3>Outcome-Based Contracts</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>We commit to measurable SLAs, cost targets, and performance benchmarks — accountable to outcomes that matter to your business, not just uptime dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🏭 Industries</div>
            <h2 className="display-md">Industry-Specific Cloud Solutions in Saudi Arabia</h2>
            <p>We deliver specialized cloud strategies addressing the unique regulatory, operational, and scalability challenges of <Link href="/industries/healthcare" style={{ color: 'var(--accent)' }}>healthcare</Link>, <Link href="/industries/retail" style={{ color: 'var(--accent)' }}>retail</Link>, <Link href="/industries/logistics" style={{ color: 'var(--accent)' }}>logistics</Link>, and more — built for Saudi compliance requirements.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">🛒</div>
                <h3 style={{ fontSize: '0.9rem' }}>Retail Cloud Solutions</h3>
              </div>
              <p>Scale cloud infrastructure seamlessly during Ramadan and peak seasons, enable omnichannel commerce, and optimize inventory and analytics workloads across AWS, Azure, Google Cloud, and Oracle Cloud.</p>
              <Link href="/industries/retail" className="industry-link">Learn More </Link>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">🏥</div>
                <h3 style={{ fontSize: '0.9rem' }}>Healthcare Cloud Solutions</h3>
              </div>
              <p>HIPAA-aligned cloud infrastructure ensuring patient data security, high availability for clinical applications, and compliant cloud storage — built for Saudi healthcare regulations.</p>
              <Link href="/industries/healthcare" className="industry-link">Learn More </Link>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">🚛</div>
                <h3 style={{ fontSize: '0.9rem' }}>Logistics Cloud Solutions</h3>
              </div>
              <p>Power real-time fleet tracking, IoT data processing, supply chain analytics, and warehouse management systems with resilient, always-on cloud infrastructure.</p>
              <Link href="/industries/logistics" className="industry-link">Learn More </Link>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">💻</div>
                <h3 style={{ fontSize: '0.9rem' }}>SaaS Cloud Infrastructure</h3>
              </div>
              <p>Build, deploy, and scale SaaS products on optimized cloud infrastructure. Managed Kubernetes, CI/CD pipelines, and multi-tenant environments with FinOps cost governance.</p>
              <Link href="/industries/tech-saas" className="industry-link">Learn More </Link>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">🏢</div>
                <h3 style={{ fontSize: '0.9rem' }}>Professional Services Cloud</h3>
              </div>
              <p>Secure, compliant cloud environments for consulting, legal, and financial firms — with zero-trust security, ISO 27001 alignment, and encrypted document management.</p>
              <Link href="/industries/professional-services" className="industry-link">Learn More </Link>
            </div>
            <div className="industry-card industry-cta">
              <div className="industry-card-header">
                <div className="industry-icon">🌐</div>
                <h3 style={{ fontSize: '0.9rem' }}>Your Industry</h3>
              </div>
              <p>Don&apos;t see your sector? We work with enterprises across all verticals in Saudi Arabia. Talk to our cloud specialists for a tailored approach.</p>
              <Link href="/contact" className="btn btn-accent btn-sm">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHTS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📁 Case Studies</div>
            <h2 className="display-md">Real Cloud Transformation Results</h2>
            <p>See how we&apos;ve helped Saudi enterprises achieve significant cost savings, performance improvements, and operational resilience.</p>
          </div>
          {isMobile ? (
            <div className="case-swiper-container reveal">
              <Swiper
                modules={[Pagination, EffectCreative]}
                effect="creative"
                creativeEffect={{
                  prev: { translate: ['-105%', 0, 0], opacity: 0.4 },
                  next: { translate: ['105%', 0, 0], opacity: 0.4 },
                }}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                speed={500}
                touchRatio={1.2}
                threshold={8}
                resistance={true}
                resistanceRatio={0.65}
                pagination={{ clickable: true, el: '.case-swiper-pagination' }}
                style={{ overflow: 'visible' }}
              >
                {caseStudyCards.map((card, i) => (
                  <SwiperSlide key={i}>{card}</SwiperSlide>
                ))}
              </Swiper>
              <div className="case-swiper-pagination" />
            </div>
          ) : (
            <div className="grid-3 reveal">
              {caseStudyCards}
            </div>
          )}
          <div className="text-center mt-6 reveal">
            <Link href="/case-studies" className="btn btn-primary">View All Case Studies →</Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently Asked Questions</h2>
            <p>Common questions about Managed Cloud Services in Saudi Arabia.</p>
          </div>
          <div className="faq-accordion reveal">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`home-faq-answer-${index}`}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Is Your Cloud Environment Performing at Its Best?</h2>
            <p>Most enterprises are overpaying by 30–40% on cloud. Our free Cloud Assessment identifies cost savings, security gaps, and performance opportunities across AWS, Azure, Google Cloud, and Oracle Cloud — at no cost and no commitment.</p>
            <p className="cta-urgency">⚡ Limited free assessments available each month</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Your Free Cloud Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to a Cloud Expert</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomeContent;
