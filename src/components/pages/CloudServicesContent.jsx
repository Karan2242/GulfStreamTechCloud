'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { cloudFaqs } from './cloud-services/cloudServicesFaqs';

const cloudDeliverySteps = [
  ['01', 'Assess', 'Understand your existing cloud environment, workloads, costs, risks and operational requirements.'],
  ['02', 'Plan', 'Define priorities, architecture, migration or optimization strategy and an actionable roadmap.'],
  ['03', 'Implement', 'Execute cloud initiatives with structured delivery, technical expertise and controlled change.'],
  ['04', 'Operate', 'Provide ongoing monitoring, support, governance and operational management where required.'],
  ['05', 'Optimize', 'Continuously improve performance, security, reliability and cloud cost efficiency.'],
];

const cloudResults = [
  ['30%', 'Average Cost Reduction'],
  ['99.99%', 'Uptime SLA'],
  ['150+', 'Cloud Environments Managed'],
  ['24/7', 'Cloud Operations & Support'],
];

const cloudBenefitIcons = {
  'One Accountable Cloud Partner': <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />,
  'Multi-Cloud Expertise': <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M18.36 5.64 5.64 18.36M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />,
  'Business-Aligned Cloud Strategy': <path d="M4 19V5m0 14h16M7 15l3-4 3 2 5-7" />,
  'Continuous Optimization': <path d="M4 19V5m0 14h16M7 15l3-4 3 2 5-7" />,
  'Operational Visibility': <path d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  'Local Saudi Cloud Expertise': <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />,
};

function CloudBenefitIcon({ title }) {
  return (
    <svg className="cloud-benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {cloudBenefitIcons[title]}
    </svg>
  );
}

const CloudServicesContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  useReveal();

  return (
    <main>  
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Services</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">Enterprise Cloud Services for Organizations in Saudi Arabia</span></h1>
          <p >GulfStream Technologies provides managed cloud services across AWS, Microsoft Azure, Google Cloud and Oracle Cloud, helping organizations modernize infrastructure, optimize cloud costs, strengthen security and manage day-to-day cloud operations.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book a Cloud Assessment</Link>
            <Link
              href="/contact"
              className="btn btn-outline-light btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}
            >
              Talk to a Cloud Expert
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Our Services</div>
            <h2 className="display-md">Cloud Services Designed Around Your Business Needs</h2>
            <p >From day-to-day cloud operations to migration, cost optimization and security, GulfStream provides the expertise and managed services needed to build, operate and continuously improve your cloud environment.</p>
          </div>
          <div className="services-grid">
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-monitoring.png" alt="Managed cloud monitoring dashboard" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Managed Cloud Services</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>End-to-end managed cloud operations across AWS, Microsoft, Google Cloud & Oracle Cloud — 24/7 monitoring, incident response, security governance, and FinOps cost optimization for your entire cloud estate in Saudi Arabia.</p>
                  <Link href="/cloud-services/cloud-managed-services" className="btn btn-accent btn-sm">Optimize Your Cloud Operations →</Link>

                </div>
            </div>
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-finops.png" alt="FinOps cost optimization analytics" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud FinOps & Cost Optimization</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Apply the FinOps framework to gain full visibility into cloud spend, eliminate waste, rightsize resources, and achieve sustainable cost governance — delivering an average 30% cost reduction across your cloud estate.</p>
                  <Link href="/cloud-services/finops-cost-optimization" className="btn btn-accent btn-sm">Unlock Cloud Cost Savings →</Link>

                </div>
            </div>
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-billing.png" alt="Cloud billing and chargeback reporting" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Billing Management</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Centralized billing, chargeback reporting, and spend analytics across multiple accounts and teams. Gain accurate cost attribution so that each and every money spent on cloud is justified and trackable.</p>
                  <Link href="/cloud-services/cloud-billing-management" className="btn btn-accent btn-sm">Simplify Cloud Billing & Spend →</Link>
                </div>
            </div>
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-migration.png" alt="Cloud migration and modernization roadmap" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Migration & Modernization</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Migrate legacy on-premises workloads to AWS, Microsoft, Google Cloud, or Oracle Cloud with zero business disruption. We design, plan, and execute cloud migrations following proven rehost, replatform, and refactor strategies.</p>
                  <Link href="/cloud-services/cloud-migration" className="btn btn-accent btn-sm">Accelerate Your Cloud Migration →</Link>
                </div>
            </div>
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-security.png" alt="Cloud security governance and compliance" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Cloud Security & Governance</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Enterprise-level cloud security including IAM governance, NCA ECC compliance automation, security posture management, and continuous threat detection across AWS, Microsoft, Google Cloud, and Oracle Cloud environments.</p>
                  <Link href="/cloud-services/cloud-security-governance" className="btn btn-accent btn-sm">Strengthen Your Cloud Security →</Link>
                </div>
            </div>
            <div className="service-card premium-card reveal">
                <Image src="/assets/images/service-custom.png" alt="Custom cloud solutions architecture" className="service-image" width={800} height={450} />
                <div className="service-content">
                  <h3>Custom Cloud Solutions</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Need a cloud service tailored to your specific requirements? We design and deliver custom cloud solutions for enterprises across Saudi Arabia — from Kubernetes management to multi-cloud architecture.</p>
                  <Link href="/contact" className="btn btn-accent btn-sm">Tailor Your Cloud Experience →</Link>
                </div>
              </div>
          </div>
        </div>
      </section>
            {/* PLATFORM PARTNERS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">☁️ Supported Platforms</div>
            <h2 className="display-md">Cloud Expertise Across Leading Platforms</h2>
            <p>GulfStream Technologies supports organizations across leading cloud platforms, helping businesses manage, optimize and modernize workloads in environments that match their technology and business requirements.</p>
          </div>
          <div className="grid-4 reveal">
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-aws.png"
                  alt="Amazon Web Services"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Amazon Web Services</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>AWS management including EC2 optimization, S3 storage governance, cost reduction, and multi-region disaster recovery with certified AWS architects.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/cloud-services/cloud-managed-services/aws" className="btn btn-accent btn-sm">Explore AWS Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-azure.png"
                  alt="Microsoft (Azure/M365)"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Microsoft (Azure/M365)</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>End-to-end Azure management covering VMs, App Services, databases, security, and hybrid cloud integration with proven Microsoft certification expertise.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/cloud-services/cloud-managed-services/microsoft-cloud" className="btn btn-accent btn-sm">Explore Microsoft Cloud Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-gcp.png"
                  alt="Google Cloud"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Google Cloud</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Advanced GCP operations including Compute Engine, BigQuery analytics, Kubernetes clusters, and data residency compliance for Saudi organizations.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/cloud-services/cloud-managed-services/google" className="btn btn-accent btn-sm">Explore Google Cloud Services →</Link>
              </div>
            </div>
            <div className="card premium-card">
              <div className="platform-logo-container">
                <Image
                  src="/assets/images/logo-oracle.png"
                  alt="Oracle Cloud"
                  fill
                  className="platform-logo"
                  priority
                />
              </div>
              <h3 style={{ margin: '1rem 0 0.5rem 0', textAlign: 'center', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal' }}>Oracle Cloud</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Specialized Oracle Cloud expertise for database workloads, enterprise applications, and hybrid infrastructure with certified Oracle specialists.</p>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/cloud-services/cloud-managed-services/oracle" className="btn btn-accent btn-sm">Explore Oracle Cloud Services →</Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CLOUD DELIVERY APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">HOW WE DELIVER CLOUD SERVICES</div>
            <h2 className="display-md">A Structured Approach to Cloud Transformation</h2>
            <p>Whether you are moving to the cloud, optimizing an existing environment or looking for ongoing operational support, GulfStream follows a structured approach designed around your current environment, business priorities and technology roadmap.</p>
          </div>
          <div className="home-roadmap reveal" aria-label="Cloud services delivery roadmap">
            {cloudDeliverySteps.map(([number, title, description]) => (
              <article className="home-roadmap-step" key={title}>
                <div className="home-roadmap-node" aria-hidden="true">{number}</div>
                <div className="home-roadmap-card">
                  <div className="home-roadmap-kicker">PHASE {number}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GULFSTREAM ADVANTAGE */}
      <section className="section"  style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⭐ Why Us for Cloud Services</div>
            <h2 className="display-md">Why Organizations Choose GulfStream Technologies for Cloud Services</h2>
            <p>GulfStream combines cloud expertise, operational support and business-focused technology services to help organizations manage cloud environments with greater visibility, control and accountability.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="One Accountable Cloud Partner" /></div>
                <div className="card-title-row">
                  <h3>One Accountable Cloud Partner</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Coordinate cloud operations, optimization, security and transformation through one technology partner.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="Multi-Cloud Expertise" /></div>
                <div className="card-title-row">
                  <h3>Multi-Cloud Expertise</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Multi-cloud certified team with deep expertise in AWS, Microsoft, Google Cloud, and Oracle Cloud platforms.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="Business-Aligned Cloud Strategy" /></div>
                <div className="card-title-row">
                  <h3>Business-Aligned Cloud Strategy</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Align cloud architecture, investment and operations with business requirements rather than technology alone.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="Continuous Optimization" /></div>
                <div className="card-title-row">
                  <h3>Continuous Optimization</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Go beyond initial implementation with ongoing opportunities to improve performance, utilization, security and cost efficiency.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="Operational Visibility" /></div>
                <div className="card-title-row">
                  <h3>Operational Visibility</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Improve visibility into cloud environments, costs, workloads, performance and operational priorities.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box"><CloudBenefitIcon title="Local Saudi Cloud Expertise" /></div>
                <div className="card-title-row">
                  <h3>Local Saudi Cloud Expertise</h3>
                </div>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>Deliver cloud services with an understanding of the technology, regulatory and operational requirements relevant to organizations in Saudi Arabia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section className="section cloud-results-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">PROVEN CLOUD OUTCOMES</div>
            <h2 className="display-md">Cloud Performance at a Glance</h2>
            <p>Our cloud services are designed around measurable improvements in cost efficiency, operational reliability, scalability and ongoing support.</p>
          </div>
          <div className="cloud-results-grid reveal">
            {cloudResults.map(([value, label]) => (
              <article className="cloud-result-item" key={label}>
                <div className="cloud-result-value">{value}</div>
                <p className="cloud-result-label">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section cloud-faq-section" style={{ background: 'var(--dark-surface)' }} >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">FAQ</div>
            <h2 className="display-md">Frequently Asked Questions About Cloud Services</h2>
          </div>
          <div className="faq-accordion reveal">
            {cloudFaqs.map(({ question, answer }, index) => {
              const isOpen = openFaqIndex === index;
              const answerId = `cloud-faq-answer-${index}`;
              const questionId = `cloud-faq-question-${index}`;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={question}>
                  <button
                    className="faq-question"
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId}>
                    <div className="faq-answer-inner"><p>{answer}</p></div>
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
            <h2 className="display-md">Ready to Move Your Cloud Strategy Forward?</h2>
            <p>Whether you are planning a cloud migration, optimizing an existing environment, improving cloud security or looking for ongoing managed cloud support, GulfStream Technologies can help assess your requirements and define the right next step.</p>
            <div className="cta-actions">
              <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book a Free Cloud Assessment</Link>
              <Link href="/contact" className="btn-white-outline">Talk to Cloud Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudServicesContent;