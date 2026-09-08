'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const principles = [
  ['01', 'Business Outcomes First', 'Technology is a means to an end. We start with the result the business needs.'],
  ['02', 'Integrated, Not Fragmented', 'Cloud, AI, IT and people work better when they operate under one accountable partner.'],
  ['03', 'Security by Default', 'Security, governance and resilience are considered throughout what we design and operate.'],
  ['04', 'Practical Over Hype', 'We favour useful, proven approaches over trends that do not create meaningful value.'],
  ['05', 'Accountability Through Delivery', 'We stay engaged beyond recommendations, helping move initiatives into execution and operation.'],
  ['06', 'Built for Long-Term Value', 'We focus on sustainable technology decisions rather than short-term fixes.'],
];

const audiences = [
  ['SMB', 'Practical technology support, modernization and specialist expertise without unnecessary complexity.'],
  ['MID-MARKET', 'Scalable capabilities that help growing organizations improve operations, efficiency and resilience.'],
  ['ENTERPRISE', 'Structured delivery for complex environments, transformation initiatives and business-critical technology.'],
  ['GOVERNMENT', 'Technology support focused on reliable operations, modernization, security and digital service delivery.'],
];

const lifecycle = [
  ['01', 'Discover', 'Understand the business, priorities, technology environment, data and constraints before proposing solutions.'],
  ['02', 'Design', 'Shape the right architecture, roadmap, delivery approach and engagement model.'],
  ['03', 'Implement', 'Deliver migrations, AI initiatives, infrastructure, applications and technology programs with structured execution.'],
  ['04', 'Operate', 'Run and support environments with monitoring, security, governance and dependable operations.'],
  ['05', 'Optimize', 'Continuously improve cost, performance, security, scalability and business value over time.'],
];

const differentiators = [
  ['01', 'Saudi & GCC Focus', 'Built around the priorities and operating context of organizations across Saudi Arabia and the GCC.'],
  ['02', 'Four Integrated Capabilities', 'Cloud, AI, IT and technology talent under one accountable partner.'],
  ['03', 'Business-First Approach', 'We solve business problems, not just technical ones, starting from outcomes.'],
  ['04', 'Enterprise-Ready Delivery', 'Structured, secure and dependable delivery suited to serious organizations.'],
  ['05', 'Flexible Engagement', 'Consulting, managed services, projects, augmentation and dedicated teams, as needed.'],
  ['06', 'End-to-End Capability', 'Support spanning strategy, implementation, operations, optimization and skilled people.'],
  ['07', 'Practical Technology', 'Recommendations focused on useful, achievable business value rather than technology for its own sake.'],
];

const capabilities = [['Cloud Services', '/cloud-services'], ['AI Services', '/ai-services'], ['IT Services', '/it-services'], ['Manpower Services', '/manpower-services']];



function EditorialHeader({ eyebrow, title, description }) {
  return <div className="about-editorial-header"><span className="about-eyebrow">{eyebrow}</span><h2 className="display-md">{title}</h2>{description ? <p>{description}</p> : null}</div>;
}

function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  return <section className="section about-faq-section"><div className="container"><EditorialHeader eyebrow="FAQ" title="Questions about GulfStream" /><div className="faq-accordion reveal">
    {faqs.map(([question, answer], index) => { const isOpen = openFaqIndex === index; return <div className={`faq-item ${isOpen ? 'active' : ''}`} key={question}>
      <button className="faq-question" type="button" onClick={() => setOpenFaqIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`about-faq-answer-${index}`} id={`about-faq-question-${index}`}><span>{question}</span><span className="faq-toggle" aria-hidden="true">+</span></button>
      <div id={`about-faq-answer-${index}`} className="faq-answer" role="region" aria-labelledby={`about-faq-question-${index}`}><div className="faq-answer-inner"><p>{answer}</p></div></div>
    </div>; })}
  </div></div></section>;
}

export default function AboutContent() {
  useReveal();
  return <main className="about-page">
    <section className="page-hero"><div className="container" style={{ textAlign: 'left' }}>
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><span>About Us</span></nav>
      <h1 className="display-lg"><span className="text-gradient">A Saudi & GCC technology partner built to deliver</span></h1>
      <p>GulfStream Technologies is a Saudi Arabia & GCC-focused B2B technology partner combining consulting, managed services, transformation capabilities and technology workforce solutions — under one accountable relationship.</p>
    </div></section>
    <section className="section" >
      <div className="container about-two-column reveal">
        <div>
          <EditorialHeader
            eyebrow="WHO WE ARE"
            title="Integrated Cloud, AI, IT, and Workforce Solutions"
          />
          <p>
            GulfStream Technologies is a Saudi Arabia and GCC-focused B2B technology partner helping organizations modernize, secure and scale their operations. We combine cloud services, AI solutions, managed IT services and technology workforce solutions under one accountable relationship. This integrated model helps businesses move from strategy and consulting to implementation, ongoing support and continuous optimization without coordinating multiple disconnected providers.
          </p>
          <p>
            Our services support SMBs, mid-market companies, enterprises and government organizations across Saudi Arabia and the GCC. Whether you need cloud migration, AI adoption, cybersecurity, IT infrastructure, digital transformation or specialized technology professionals, GulfStream provides practical guidance and dependable delivery aligned with your business goals. We stay involved throughout the technology lifecycle, helping clients improve performance, manage risk, control costs and build long-term operational resilience.
          </p>
        </div>
        <div className="about-side-story">
          <EditorialHeader
            eyebrow="WHAT WE DO"
            title="End-to-End Technology Services"
            description="GulfStream delivers practical technology solutions for organizations across Saudi Arabia and the GCC. Our cloud services support migration, modernization, security and cost optimization. Our AI services help businesses identify valuable use cases, automate workflows and turn data into better decisions. We strengthen IT infrastructure and operations through managed IT services, cybersecurity and dependable support. When additional expertise is required, our technology workforce solutions provide qualified professionals and project teams. From consulting and implementation to managed operations and optimization, we connect the right capabilities to business goals through one accountable B2B technology partner."
          />
          <Link href="/cloud-services" className="btn btn-primary about-services-cta">
            Explore Our Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
    <section className="section" style={{ background: 'var(--dark-surface)' }}><div className="container"><EditorialHeader eyebrow="WHAT WE BELIEVE" title="Principles that shape how we work" /><div className="about-principles-grid reveal">{principles.map(([number, title, description]) => <article className="about-numbered-block" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><EditorialHeader eyebrow="WHO WE SERVE" title="From growing businesses to government" description="We adapt our approach to the scale, complexity, operational realities and expectations of each organization we support." /><div className="about-audience-grid reveal">{audiences.map(([title, description]) => <article key={title}><span className="about-eyebrow">{title}</span><p>{description}</p></article>)}</div></div></section>
    <section className="section" style={{ background: 'var(--dark-surface)' }}><div className="container"><EditorialHeader eyebrow="HOW WE WORK" title="A clear path from idea to outcome" description="We engage at any stage and stay accountable through delivery and operations." /><div className="about-lifecycle reveal">{lifecycle.map(([number, title, description]) => <article key={title}><span className="about-step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section"><div className="container about-two-column reveal"><div><EditorialHeader eyebrow="SAUDI & GCC FOCUS" title="Built for the region we serve" description="Our primary focus is Saudi Arabia, with strong coverage across the GCC. That regional focus shapes how we approach technology delivery, security, governance, operations and workforce requirements." /></div><div><EditorialHeader eyebrow="SECURITY & GOVERNANCE" title="Security-conscious by design" description="Security and governance are considered across the solutions we design and support. We take a practical approach to protecting systems, data, users and business operations while aligning technology decisions with the needs of each organization." /></div></div></section>
    <section className="section" style={{ background: 'var(--dark-surface)' }}><div className="container"><EditorialHeader eyebrow="WHY ORGANIZATIONS CHOOSE GULFSTREAM" title="A technology partner you can rely on" /><div className="about-differentiators reveal">{differentiators.map(([number, title, description]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <h2 className="display-md">Let&apos;s build what your business needs next.</h2>
          <p>
            Whether you are modernizing infrastructure, adopting AI, strengthening IT operations or expanding technology capacity, GulfStream can help define the right next step.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-white btn-lg">
              Talk to a Technology Expert
            </Link>
            <Link href="/cloud-services" className="btn-white-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
