'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'Why does a business need AI governance and security?',
    answer:
      'As organizations introduce AI into business processes, they may expose sensitive information, create uncontrolled access, or rely on AI outputs without sufficient oversight. AI governance establishes practical controls for data handling, identity, access, usage, monitoring, and human review.',
  },
  {
    question: 'What does an AI governance assessment include?',
    answer:
      'An AI governance assessment can review current AI use cases, data exposure, user access, third-party AI tools, business risks, approval processes, monitoring practices, and existing policies. The objective is to identify gaps and prioritize practical controls.',
  },
  {
    question: 'How do you protect sensitive business data used with AI?',
    answer:
      'A strong AI security approach starts by identifying what information can be used with AI systems and what information requires additional protection. Controls can include identity-based access, data classification, usage policies, approval workflows, monitoring, and restrictions around sensitive information.',
  },
  {
    question: 'Can AI governance be implemented without slowing down AI adoption?',
    answer:
      'Yes. Effective governance should enable responsible AI adoption rather than create unnecessary barriers. The goal is to establish clear rules, ownership, risk-based controls, and review processes that allow teams to use approved AI capabilities confidently.',
  },
  {
    question: 'Is AI governance only relevant to large enterprises?',
    answer:
      'No. Businesses of different sizes can benefit from AI governance. Smaller organizations may need a simpler framework, while larger organizations may require more formal policies, monitoring, approval workflows, and role-based controls.',
  },
  {
    question: 'Can AI governance support compliance requirements?',
    answer:
      'AI governance can help organizations demonstrate that AI usage is managed through documented policies, access controls, risk reviews, monitoring, and accountability processes. The exact compliance requirements depend on the organization, industry, data, and jurisdictions involved.',
  },
];

const governancePillars = [
  {
    icon: '🧭',
    title: 'AI governance strategy',
    description:
      'Define the operating principles, ownership model, approval processes, and governance priorities that guide AI adoption across the organization.',
  },
  {
    icon: '🛡️',
    title: 'AI security controls',
    description:
      'Establish practical safeguards for AI applications, users, integrations, credentials, data flows, and business-critical AI workloads.',
  },
  {
    icon: '🔐',
    title: 'Identity & access',
    description:
      'Apply role-based access and identity-aware controls so users receive only the AI capabilities and information appropriate to their responsibilities.',
  },
  {
    icon: '🗂️',
    title: 'Data governance',
    description:
      'Determine what business information can enter AI workflows, how sensitive data should be handled, and where additional controls are required.',
  },
  {
    icon: '⚠️',
    title: 'AI risk assessment',
    description:
      'Identify operational, security, privacy, data, and decision-making risks associated with AI use cases and prioritize appropriate mitigation measures.',
  },
  {
    icon: '👤',
    title: 'Human oversight',
    description:
      'Define where people must review, approve, validate, or override AI-generated outputs before business decisions are made.',
  },
];

const securityControls = [
  {
    icon: '🔑',
    title: 'Access & permissions',
    description:
      'Review who can access AI platforms, models, tools, data sources, and administrative capabilities.',
  },
  {
    icon: '📋',
    title: 'AI usage policies',
    description:
      'Create clear guidelines for approved AI tools, prohibited activities, sensitive information, and responsible employee usage.',
  },
  {
    icon: '🔎',
    title: 'Monitoring & visibility',
    description:
      'Improve visibility into AI usage, access patterns, risky activity, and governance exceptions over time.',
  },
  {
    icon: '🧾',
    title: 'Governance documentation',
    description:
      'Document important AI use cases, ownership, controls, decisions, policies, and review processes for consistency and accountability.',
  },
  {
    icon: '🚨',
    title: 'Risk & incident response',
    description:
      'Define escalation paths for inappropriate AI usage, data exposure, unexpected outputs, and security or operational incidents.',
  },
  {
    icon: '✅',
    title: 'Review & assurance',
    description:
      'Periodically evaluate whether governance controls remain effective as AI use cases, users, technologies, and business requirements evolve.',
  },
];

const implementationSteps = [
  {
    number: '01',
    title: 'Discover AI usage',
    description:
      'Identify the AI tools, applications, workflows, users, data sources, and business processes currently using or planning to use AI.',
  },
  {
    number: '02',
    title: 'Assess risk',
    description:
      'Evaluate security, privacy, operational, data, access, and decision-making risks based on the business context of each use case.',
  },
  {
    number: '03',
    title: 'Define controls',
    description:
      'Establish policies, ownership, identity controls, data handling rules, review requirements, and monitoring mechanisms.',
  },
  {
    number: '04',
    title: 'Implement governance',
    description:
      'Put practical controls into operation and align teams around approved AI usage, responsibilities, and escalation procedures.',
  },
  {
    number: '05',
    title: 'Monitor & improve',
    description:
      'Review AI usage and governance effectiveness continuously so controls can evolve with new technologies, risks, and business needs.',
  },
];

const useCases = [
  {
    icon: '💼',
    title: 'Enterprise AI adoption',
    description:
      'Create a structured governance model before AI becomes embedded across departments, teams, and business workflows.',
  },
  {
    icon: '👥',
    title: 'Employee AI usage',
    description:
      'Define practical rules for employees using generative AI assistants, productivity tools, and external AI platforms.',
  },
  {
    icon: '📊',
    title: 'AI-powered analytics',
    description:
      'Apply governance around business data, analytical outputs, access permissions, and human review of AI-generated insights.',
  },
  {
    icon: '🤖',
    title: 'AI applications & automation',
    description:
      'Establish security and accountability controls for AI applications, agents, automations, and integrated business workflows.',
  },
  {
    icon: '🔗',
    title: 'Third-party AI platforms',
    description:
      'Evaluate external AI providers, integrations, data flows, user permissions, and operational dependencies.',
  },
  {
    icon: '🏢',
    title: 'Regulated business environments',
    description:
      'Build stronger governance processes where sensitive data, customer information, or business-critical decisions are involved.',
  },
];

const AIGovernanceSecurityContent = () => {
  useReveal();

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <main>
      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/ai-services">AI Services</Link>
            <span>›</span>
            <span>AI Governance &amp; Security</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">AI Governance and Security: Risk &amp; Compliance</span></h1>

          <p>We establish pragmatic AI governance and security—risk assessments, data protection, identity and access controls, monitoring, and human review—so organizations can adopt AI confidently, reduce operational risk, meet compliance expectations, preserve business velocity, and accelerate measurable enterprise outcomes across functions today.</p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Discuss AI Governance
            </Link>

            <Link href="/ai-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT IS AI GOVERNANCE
      ====================================================== */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="grid-2 reveal">
            <div>
              <div className="badge badge-accent">What AI governance means</div>

              <h2 style={{ marginTop: '1rem' }} className="display-md">
                Governance that supports responsible AI adoption
              </h2>

              <p style={{color: 'var(--text-secondary)', fontSize: '.9rem', marginTop: '1rem'}}>
                AI governance defines how AI is selected, approved, accessed, used, and monitored across the business. It creates clear ownership, decision rights, and operational controls for teams deploying AI in business workflows.
              </p>

              <p style={{color: 'var(--text-secondary)', fontSize: '.9rem', marginTop: '1rem'}}>
                The goal is not to slow innovation. It is to give organizations a practical framework for managing security, data exposure, accountability, privacy risks, and business continuity while maintaining operational velocity.
              </p>

              <p style={{color: 'var(--text-secondary)', fontSize: '.9rem', marginTop: '1rem'}}>
                We integrate governance into everyday AI operations so controls remain visible, aligned with business requirements, and usable across teams, systems, and decision-making processes.
              </p>
            </div>

            <div className="card premium-card ai-outcome-panel">
              <div className="card-header">
                <div className="icon-box icon-box-lg">🎯</div>
                <div className="card-title-row">
                  <h3>What an effective AI governance program delivers</h3>
                </div>
              </div>

              <ul className="ai-outcome-list">
                <li>
                  <span>01</span>
                  <div>
                    <strong>Clear accountability</strong>
                    <small>
                      Define ownership for AI use cases, decision-making, data
                      stewardship, approvals, and risk management.
                    </small>
                  </div>
                </li>

                <li>
                  <span>02</span>
                  <div>
                    <strong>Controlled AI access</strong>
                    <small>
                      Limit AI capabilities and sensitive data access to the users,
                      teams, and systems that require them.
                    </small>
                  </div>
                </li>

                <li>
                  <span>03</span>
                  <div>
                    <strong>Protected business data</strong>
                    <small>
                      Set policies for sensitive information, intellectual property,
                      and approved AI workflows across the enterprise.
                    </small>
                  </div>
                </li>

                <li>
                  <span>04</span>
                  <div>
                    <strong>Human oversight</strong>
                    <small>
                      Preserve accountability for high-impact decisions by keeping
                      people in the review and approval loop.
                    </small>
                  </div>
                </li>

                <li>
                  <span>05</span>
                  <div>
                    <strong>Operational visibility</strong>
                    <small>
                      Monitor AI usage, governance effectiveness, and emerging
                      risks as technology and business needs evolve.
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GOVERNANCE PILLARS
      ====================================================== */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">AI Governance Services</div>

            <h2 className="display-md">
              The core pillars of AI governance and security
            </h2>

            <p>
              A practical AI governance framework combines strategy, risk
              management, security, data controls, identity, and accountability.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {governancePillars.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>

                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECURITY CONTROLS
      ====================================================== */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Security Controls</div>

            <h2 className="display-md">
              Practical controls for safer AI adoption
            </h2>

            <p>
              AI security is broader than protecting the AI model itself. It also
              involves people, identities, data, applications, integrations,
              policies, and operational processes.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {securityControls.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>

                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ======================================================
          USE CASES
      ====================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Business Use Cases</div>

            <h2 className="display-md">
              Where AI governance becomes essential
            </h2>

            <p>
              Governance should reflect how your organization actually uses AI,
              including employee productivity, analytics, applications,
              automation, and third-party platforms.
            </p>
          </div>

          <div className="grid-3 reveal reveal-stagger">
            {useCases.map((item) => (
              <article className="card premium-card" key={item.title}>
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>

                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Frequently Asked Questions</div>

            <h2 className="display-md">
              AI governance and security questions
            </h2>

            <p>
              Answers to common questions businesses ask before introducing
              stronger governance and security controls for AI.
            </p>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-toggle" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">
              Build a safer foundation for AI adoption
            </h2>

            <p>
              From AI risk assessment and data protection to identity controls,
              governance policies, monitoring, and human oversight, we can help
              create an AI operating model aligned with your business.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Discuss Your AI Governance Needs
              </Link>

              <Link href="/ai-services" className="btn-white-outline">
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIGovernanceSecurityContent;