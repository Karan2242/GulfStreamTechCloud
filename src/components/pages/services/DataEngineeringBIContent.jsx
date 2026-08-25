'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const challenges = [
  {
    title: 'Disconnected Data',
    copy:
      'Critical information can be spread across CRM, ERP, spreadsheets, databases, cloud applications, and operational systems.',
    icon: '🔗',
  },
  {
    title: 'Unreliable Reporting',
    copy:
      'Teams may spend too much time preparing and reconciling data before they can confidently use it for reporting and decisions.',
    icon: '⚠️',
  },
  {
    title: 'AI Readiness Gaps',
    copy:
      'AI initiatives depend on accessible, structured, governed, and high-quality data. Weak data foundations can limit the value of AI investments.',
    icon: '🧭',
  },
];

const services = [
  { title: 'Data Engineering', copy: 'Design and build reliable data workflows, ETL/ELT processes, and pipelines that move business data into usable analytical environments.', icon: '🛠️' },
  { title: 'Data Integration', copy: 'Connect data from applications, databases, cloud services, APIs, and operational systems so critical information can be accessed consistently.', icon: '🔌' },
  { title: 'Data Pipelines', copy: 'Build repeatable data ingestion and processing workflows that move information from source systems into analytical platforms.', icon: '🔄' },
  { title: 'Data Warehousing & Lakes', copy: 'Design centralized data storage and analytics environments that make business information easier to organize, access, and analyze.', icon: '🗄️' },
  { title: 'Data Transformation', copy: 'Clean, normalize, structure, and model data so it becomes more consistent and useful for reporting, analytics, and downstream applications.', icon: '🧹' },
  { title: 'AI-Ready Data Foundations', copy: 'Prepare data environments with the structure, quality, accessibility, and governance required to support AI-enabled applications and automation.', icon: '🤖' },
];

const processSteps = [
  { title: 'Data Sources', copy: 'Collect information from the systems and sources that matter to your business.' },
  { title: 'Data Integration', copy: 'Connect applications, databases, APIs, files, and operational systems.' },
  { title: 'Data Pipelines', copy: 'Move and process data through repeatable ingestion and transformation workflows.' },
  { title: 'Clean & Transform', copy: 'Improve consistency, quality, structure, and usability.' },
  { title: 'BI & Analytics', copy: 'Make trusted data available through dashboards, reports, KPIs, and analytical views.' },
  { title: 'AI & Automation', copy: 'Use stronger data foundations to support AI-enabled workflows and automation.' },
];

const biFeatures = [
  { title: 'Operational Dashboards', copy: 'Sales performance, operations, customer activity, and inventory or service metrics where applicable.', icon: '📊' },
  { title: 'KPI & Performance Reporting', copy: 'Executive KPIs, performance trends, period-over-period analysis, and business reporting.', icon: '📈' },
  { title: 'Decision Support', copy: 'Trend identification, performance comparison, opportunity identification, and better planning.', icon: '🧭' },
];

const useCases = [
  { title: 'Retail', copy: 'Sales, inventory, customer, and operational analytics.', icon: '🛍️' },
  { title: 'Healthcare', copy: 'Operational, performance, and reporting insights.', icon: '🏥' },
  { title: 'Logistics', copy: 'Delivery, fleet, operational, and performance intelligence.', icon: '🚚' },
  { title: 'Technology & SaaS', copy: 'Product, customer, usage, and revenue analytics.', icon: '💻' },
  { title: 'Professional Services', copy: 'Project, financial, utilization, and operational reporting.', icon: '📁' },
];

const differentiators = [
  { title: 'Business-First Architecture', copy: 'Design data solutions around business requirements, reporting needs, and decision-making workflows.', icon: '🎯' },
  { title: 'Scalable Foundations', copy: 'Start with priority data sources and expand the data environment as requirements mature.', icon: '📈' },
  { title: 'Analytics + AI Alignment', copy: 'Build BI capabilities with future AI use cases in mind instead of creating disconnected data environments.', icon: '🔗' },
  { title: 'Practical Implementation', copy: 'Focus on usable pipelines, reliable data workflows, actionable reporting, and sustainable foundations.', icon: '🛠️' },
];

const implementation = [
  { title: 'Assess', copy: 'Review current systems, data sources, reporting requirements, data quality, and business priorities.' },
  { title: 'Design', copy: 'Define the target data architecture, integration approach, pipelines, storage, transformation, and BI requirements.' },
  { title: 'Build', copy: 'Implement data workflows, transformations, analytical structures, dashboards, and required integrations.' },
  { title: 'Improve', copy: 'Monitor data quality, refine reporting, optimize workflows, and expand the platform as business needs evolve.' },
];

const faqs = [
  {
    question: 'What are data engineering services?',
    answer:
      'Data engineering services typically include data integration, ETL or ELT pipelines, data transformation, data warehousing, data quality, and analytics preparation.',
  },
  {
    question: 'What is the difference between data engineering and business intelligence?',
    answer:
      'Data engineering focuses on collecting, moving, transforming, and preparing data. Business intelligence uses that prepared data to create dashboards, reports, KPIs, and insights for decision-making.',
  },
  {
    question: 'Why is data engineering important for business intelligence?',
    answer:
      'BI depends on reliable and consistent data. Data engineering creates the pipelines, transformations, and data structures required for accurate and usable reporting.',
  },

  {
    question: 'What is a data pipeline?',
    answer:
      'A data pipeline is a repeatable process that moves and processes data from source systems into a destination where it can be analyzed, reported on, or used by applications.',
  },
  {
    question: 'What is a data warehouse?',
    answer:
      'A data warehouse is a centralized analytical data environment designed to organize business information for reporting, analytics, and decision-making.',
  },
  {
    question: 'Can you integrate data from multiple business systems?',
    answer:
      'Yes. Data integration can connect information from applications, databases, APIs, files, cloud services, and other business systems into more consistent analytical workflows.',
  },

];

const DataEngineeringBIContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/ai-services">AI Services</Link>
            <span>›</span>
            <span>Data Engineering &amp; BI</span>
          </div>

          <h1 className="display-lg"><span className="text-gradient">Data Engineering &amp; Business Intelligence Services</span></h1>
            <p className="hero-desc">
              We design and implement reliable data pipelines, unified platforms, and BI dashboards that deliver trusted insights, reduce manual reporting, enforce data quality and governance, and enable scalable analytics-ready environments—accelerating data-driven decisions today while creating an AI-ready foundation for future automation and measurable growth and scale.
            </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to a Data Expert</Link>
            <Link href="/ai-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Explore AI Services</Link>
          </div>
        </div>
      </section>

      {/* WHY DATA ENGINEERING */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why Data Engineering?</div>
            <h2 className="display-md">Why build a reliable data foundation?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Reliable data foundations reduce manual reporting effort, improve decision-making, and enable AI initiatives to deliver predictable value.
            </p>
          </div>

          <div className="grid-4 reveal">
            {differentiators.map((d) => (
              <div key={d.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{d.icon}</div>
                  <div>
                    <h3>{d.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{d.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Data Architecture</div>
            <h2 className="display-md">How data flows from systems to insights</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              A practical architecture connects sources, pipelines, transformation, storage, and analytics with governance and access controls.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">📥</div><h3>Data Sources</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Collect data from applications, databases, files, APIs, and external feeds.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">🔗</div><h3>Integration &amp; Pipelines</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Move and transform data through repeatable, monitored pipelines into analytical storage.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">🗄️</div><h3>Storage &amp; Modeling</h3></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Structure and model data for analytics, reporting, and AI readiness with lineage and governance.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%', maxWidth: 920 }}>
              <div className="card premium-card">
                <div className="card-header"><div className="icon-box">📊</div><h3>Analytics &amp; BI</h3></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Dashboards, reports, and operational views that provide trusted insights.</p>
              </div>

              <div className="card premium-card">
                <div className="card-header"><div className="icon-box">🤖</div><h3>AI &amp; Automation</h3></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Model-ready data feeding AI features and automation with appropriate controls.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN YOU BUILD */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">DATA ENGINEERING SERVICES</div>
            <h2 className="display-md">What we build</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Practical data engineering deliverables that make analytics and AI work.</p>
          </div>

          <div className="grid-3 reveal">
            {services.map((s) => (
              <div key={s.title} className="card premium-card ai-solution-card">
                <div className="card-header">
                  <div className="icon-box">{s.icon}</div>
                  <div className="card-title-row"><h3>{s.title}</h3></div>
                </div>
                <p className="ai-solution-copy" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">THE DATA CHALLENGE</div>
            <h2 className="display-md">Turn fragmented business data into trusted intelligence</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Without integration, transformation, and governance, reporting is slow and AI projects struggle.</p>
          </div>

          <div className="grid-3 reveal">
            {challenges.map((c) => (
              <article key={c.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{c.icon}</div>
                  <div className="card-title-row"><h3>{c.title}</h3></div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>{c.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">BUSINESS OUTCOMES</div>
            <h2 className="display-md">What your teams can gain</h2>
          </div>

          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header"><div className="icon-box">⚡</div><div><h3>Faster decisions</h3></div></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Analytical views and dashboards that get answers to the right people sooner.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header"><div className="icon-box">🔒</div><div><h3>Trusted data</h3></div></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Consistent models, lineage, and quality controls for reliable reporting and AI inputs.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header"><div className="icon-box">🔁</div><div><h3>Operational efficiency</h3></div></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Automated pipelines and repeatable processes reduce manual effort and error.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="display-md">Data Engineering &amp; BI FAQs</h2>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`de-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden>+</span>
                  </button>

                  <div id={`de-faq-answer-${index}`} className="faq-answer" style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="faq-answer-inner">
                      <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to turn your business data into actionable intelligence?</h2>
            <p>Talk to our team about data engineering, data integration, BI dashboards, or building an AI-ready data foundation for your organization.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Discuss Your Data Requirements</Link>
              <Link href="/ai-services" className="btn-white-outline">Explore AI Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataEngineeringBIContent;
