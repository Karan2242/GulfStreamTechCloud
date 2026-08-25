'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'What is an AI Use-Case Discovery Workshop?',
    answer:
      'An AI Use-Case Discovery Workshop is a structured business and technology assessment designed to identify practical opportunities where artificial intelligence can create measurable value. The workshop examines business processes, data, systems, challenges, and priorities before ranking potential AI use cases by impact and feasibility.',
  },
  {
    question: 'What happens during an AI discovery workshop?',
    answer:
      'The workshop typically covers business priorities, operational workflows, current technology and data capabilities, potential AI opportunities, feasibility considerations, use-case prioritization, and recommended next steps.',
  },
  {
    question: 'How do you identify AI use cases for a business?',
    answer:
      'AI opportunities are identified by examining business processes, repetitive tasks, knowledge-intensive activities, customer interactions, data-driven decisions, and operational challenges where AI or intelligent automation could improve efficiency, quality, or decision-making.',
  },
  {
    question: 'How are AI use cases prioritized?',
    answer:
      'Potential use cases are evaluated using factors such as business impact, implementation feasibility, data readiness, technical complexity, integration requirements, security considerations, and expected time to value.',
  },
  {
    question: 'Do we need existing AI infrastructure before the workshop?',
    answer:
      'No. The workshop can be used to assess your current technology, data, and AI readiness and determine what capabilities may be required for future implementation.',
  },
  {
    question: 'What do we receive after the workshop?',
    answer:
      'You receive a prioritized shortlist of AI opportunities, assessment criteria, key feasibility considerations, recommended solution direction, and a practical roadmap for the next stage of implementation.',
  },
  {
    question: 'Can the workshop identify AI automation opportunities?',
    answer:
      'Yes. The assessment can identify workflows where AI, intelligent automation, copilots, document intelligence, knowledge assistants, or AI-powered decision support could improve business operations.',
  },
  {
    question: 'Is the workshop suitable for small and medium-sized businesses?',
    answer:
      'Yes. The workshop can be tailored to the organization’s size, technology environment, business priorities, available data, and operational maturity.',
  },
];

const useCases = [
  {
    icon: '🤖',
    title: 'AI Assistants & Copilots',
    description:
      'Identify opportunities for employee copilots, knowledge assistants, customer support assistants, and AI-powered productivity tools.',
  },
  {
    icon: '⚙️',
    title: 'Process Automation',
    description:
      'Find repetitive and manual workflows that could benefit from AI-powered automation and intelligent process orchestration.',
  },
  {
    icon: '💬',
    title: 'Customer Experience',
    description:
      'Explore AI opportunities across customer support, personalization, engagement, and service operations.',
  },
  {
    icon: '📚',
    title: 'Knowledge Management',
    description:
      'Identify opportunities to make enterprise documents, policies, procedures, and organizational knowledge easier to access.',
  },
  {
    icon: '📊',
    title: 'Data & Decision Intelligence',
    description:
      'Assess opportunities for forecasting, reporting, anomaly detection, recommendations, and AI-assisted decision-making.',
  },
  {
    icon: '🔄',
    title: 'AI-Powered Operations',
    description:
      'Discover intelligent workflows that can improve operational efficiency, consistency, and service delivery.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand your business priorities, workflows, operational challenges, systems, and customer needs.',
  },
  {
    number: '02',
    title: 'Identify',
    description:
      'Map practical AI opportunities across automation, knowledge, customer experience, data, and operations.',
  },
  {
    number: '03',
    title: 'Prioritize',
    description:
      'Evaluate opportunities based on business impact, feasibility, data readiness, complexity, and time to value.',
  },
  {
    number: '04',
    title: 'Roadmap',
    description:
      'Define recommended next steps, solution direction, and a realistic path from discovery to implementation.',
  },
];

const AIUseCaseDiscoveryContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
            <span>AI Use-Case Discovery Workshop</span>
          </div>

          <h1 className="display-lg">
            
            <span className="text-gradient">AI Use-Case Discovery{' '} Workshop</span>
          </h1>

          <p>Identify practical AI opportunities, prioritize high-value use cases, and receive a clear, phased roadmap to implement them — aligning technical feasibility with business impact to deliver measurable outcomes.
          </p>

          <div className="hero-actions">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Book an AI Discovery Workshop
            </Link>

            <Link
              href="/ai-services"
              className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}
            >
              Explore AI Services
            </Link>
          </div>


        </div>
      </section>

      {/* PROBLEM */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">
              Why AI Discovery?
            </div>

            <h2 className="display-md">
              Not sure where AI can create real business value?
            </h2>

            <p>
              AI can create significant opportunities, but the challenge is
              knowing which ideas are worth pursuing. Our discovery workshop
              helps separate practical opportunities from ideas that may not
              justify the investment.
            </p>
          </div>

          <div className="grid-3 reveal">
            {[
              ['🎯', 'Too many AI possibilities', 'Identify the opportunities most relevant to your business.'],
              ['📉', 'Unclear business value', 'Connect AI opportunities to measurable operational or customer outcomes.'],
              ['🗄️', 'Data readiness concerns', 'Understand whether your available data can support the proposed use case.'],
              ['🔗', 'Integration complexity', 'Identify dependencies across applications, systems, and workflows.'],
              ['💰', 'Uncertain ROI', 'Prioritize opportunities based on expected business impact and feasibility.'],
              ['🧭', 'No implementation direction', 'Turn promising AI ideas into a practical next-step roadmap.'],
            ].map(([icon, title, description]) => (
              <div className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{icon}</div>
                  <div>
                    <h3>{title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="section">
        <div className="container">
          <div className="grid-2 reveal">
            <div>
              <div className="badge badge-primary">
                What Is AI Discovery?
              </div>

              <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>
                A structured approach to finding practical AI opportunities
              </h2>

              <p className="section-content" style={{ color: 'var(--text-secondary)', fontSize: '.9rem', marginBottom: '1.25rem' }}>
                An AI Use-Case Discovery Workshop is a focused business and
                technology assessment designed to identify where artificial
                intelligence can create meaningful value.
              </p>

              <p className="section-content" style={{ color: 'var(--text-secondary)', fontSize: '.9rem' }}>
                We examine business processes, operational challenges, data,
                systems, customer journeys, and strategic priorities to
                identify potential AI applications and determine which ones
                are realistic to pursue.
              </p>
            </div>

            <div className="card premium-card ai-outcome-panel">
              <div className="badge badge-accent">
                Workshop Outcome
              </div>

              <ul className="ai-outcome-list">
                {[
                  ['01', 'Business priorities', 'Understand the areas where improvement matters most.'],
                  ['02', 'AI opportunities', 'Identify practical use cases aligned with business needs.'],
                  ['03', 'Feasibility', 'Assess data, technology, integration, and operational requirements.'],
                  ['04', 'Priority scoring', 'Separate quick wins from longer-term initiatives.'],
                  ['05', 'Implementation direction', 'Define the recommended path forward.'],
                ].map(([number, title, description]) => (
                  <li key={number}>
                    <span>{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{description}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">
              Our Approach
            </div>

            <h2 className="display-md">
              How the AI Discovery Workshop works
            </h2>

            <p>
              A structured four-stage process takes you from business
              challenges to a prioritized AI roadmap.
            </p>
          </div>

          <div className="grid-4 reveal">
            {process.map((step) => (
              <div className="card premium-card" key={step.number}>
                <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="badge badge-accent" aria-hidden="true">{step.number}</div>
                  <h3 style={{ margin: 0 }}>{step.title}</h3>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem', marginTop: '10px' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">
              AI Opportunity Areas
            </div>

            <h2 className="display-md">
              What AI use cases can we identify?
            </h2>

            <p>
              The workshop explores practical AI opportunities across
              business operations, customer experience, knowledge, data,
              and automation.
            </p>
          </div>

          <div className="grid-3 reveal">
            {useCases.map((useCase) => (
              <div className="card premium-card" key={useCase.title}>
                <div className="card-header">
                  <div className="icon-box">
                    {useCase.icon}
                  </div>

                  <h3>{useCase.title}</h3>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* DELIVERABLES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">
              Deliverables
            </div>

            <h2 className="display-md">
              What you receive after the workshop
            </h2>
          </div>

          <div className="grid-3 reveal">
            {[
              ['🧾', 'Prioritized AI Use-Case List', 'A ranked shortlist of AI opportunities relevant to your business.'],
              ['📊', 'Opportunity Assessment', 'Business value, feasibility, readiness, and implementation considerations.'],
              ['🗄️', 'AI Readiness Insights', 'Key observations around your data, systems, processes, and technology environment.'],
              ['🏗️', 'Recommended Solution Direction', 'A high-level technical and operating direction for priority opportunities.'],
              ['🗺️', 'AI Implementation Roadmap', 'A phased path from discovery and validation toward implementation.'],
              ['➡️', 'Next-Step Recommendations', 'Clear actions for moving from identified opportunity to execution.'],
            ].map(([icon, title, description]) => (
              <div className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{icon}</div>
                  <h3>{title}</h3>
                </div>

                <p style={{ color: 'var(--text-secondary)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">
              Who Is It For
            </div>

            <h2 className="display-md">
              Who should attend an AI Discovery Workshop?
            </h2>
          </div>

          <div className="grid-3 reveal">
            {[
              ['👔', 'Business Leaders', 'Define AI opportunities aligned with business strategy and growth priorities.'],
              ['⚙️', 'Operations Teams', 'Identify workflows where AI and automation can improve efficiency.'],
              ['💻', 'IT & Technology Teams', 'Evaluate technical feasibility, systems, data, and integration requirements.'],
              ['📈', 'Digital Transformation Teams', 'Build a practical portfolio of AI initiatives and priorities.'],
              ['📊', 'Data & Analytics Teams', 'Explore AI opportunities across data, insights, and decision support.'],
              ['🤝', 'Customer Experience Teams', 'Identify AI opportunities across customer interactions and service delivery.'],
            ].map(([icon, title, description]) => (
              <div className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{icon}</div>
                  <h3>{title}</h3>
                </div>

                <p style={{ color: 'var(--text-secondary)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">
            ❓ FAQs  
            </div>

            <h2 className="display-md">
             Frequently Asked Questions 
            </h2>

            <p>
              Answers to common questions about AI discovery, use-case
              identification, prioritization, and implementation planning.
            </p>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`ai-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>

                  <div id={`ai-faq-answer-${index}`} className="faq-answer">
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
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">
              Turn AI ideas into a practical business roadmap
            </h2>

            <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>
              Discover where AI can create meaningful value, which
              opportunities to prioritize, and what it will take to move
              from idea to implementation.
            </p>

            <div className="cta-actions">
              <Link
                href="/contact"
                className="btn btn-white btn-lg"
              >
                Book an AI Discovery Workshop
              </Link>

              <Link
                href="/ai-services"
                className="btn-white-outline"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIUseCaseDiscoveryContent;