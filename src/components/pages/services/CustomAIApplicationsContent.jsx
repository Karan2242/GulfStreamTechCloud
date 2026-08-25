'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const whatCanBuild = [
  { icon: '🧠', title: 'Internal AI Copilots', copy: 'Assistants that help employees draft content, summarize information, answer questions and complete repetitive tasks using approved business context.', outcome: 'Employee productivity' },
  { icon: '📚', title: 'Enterprise Knowledge Assistants', copy: 'AI-powered knowledge experiences that help employees find policies, procedures, guidelines and operational information across approved sources.', outcome: 'Knowledge management' },
  { icon: '📄', title: 'Document Intelligence', copy: 'Summarize, classify, extract and review information from business documents to accelerate document-heavy workflows.', outcome: 'Document-heavy workflows' },
  { icon: '🔎', title: 'AI-Powered Enterprise Search', copy: 'Combine natural-language questions with approved company information to surface relevant answers faster.', outcome: 'Information discovery' },
  { icon: '⚙️', title: 'AI Workflow Assistants', copy: 'Embed AI into processes to reduce repetitive work, support decisions and improve operational consistency.', outcome: 'Process automation' },
  { icon: '🧩', title: 'Custom AI Business Tools', copy: 'Purpose-built applications designed around specific business requirements, users, data sources, workflows and access controls.', outcome: 'Specialized business needs' },
];

const whyCards = [
  { icon: '🧠', title: 'Business-Specific Context', copy: 'Design the AI experience around your organization\'s workflows, terminology, processes and business knowledge.' },
  { icon: '🔐', title: 'Controlled Access', copy: 'Connect the application to approved information and design access around users, roles and business permissions where appropriate.' },
  { icon: '⚙️', title: 'Workflow Integration', copy: 'Bring AI into specific business processes so employees can use AI capabilities as part of the work they already perform.' },
  { icon: '🎯', title: 'Purpose-Built Experience', copy: 'Create an AI application around a defined business problem, specific users and measurable operational objectives.' },
];


const businessChallenges = [
  {
    icon: '🗂️',
    title: 'Information is scattered',
    description:
      'Employees spend too much time searching across documents, portals, shared drives, and business systems.',
  },
  {
    icon: '⏱️',
    title: 'Teams repeat manual work',
    description:
      'Drafting, summarizing, classifying, searching, and reviewing information consumes valuable employee time.',
  },
  {
    icon: '📑',
    title: 'Documents slow processes',
    description:
      'Important information is often buried inside contracts, policies, reports, forms, and operational documents.',
  },
  {
    icon: '🔐',
    title: 'AI needs controlled access',
    description:
      'Business AI applications must respect approved data sources, permissions, users, and organizational policies.',
  },
  {
    icon: '🔄',
    title: 'Processes lack consistency',
    description:
      'Different teams may perform the same knowledge-based task differently, creating delays and unnecessary variation.',
  },
  {
    icon: '📈',
    title: 'Generic AI is not enough',
    description:
      'Public AI tools may not understand your business context, workflows, internal knowledge, or operational requirements.',
  },
];



const outcomes = [
  { num: '01', title: 'Faster access to information', copy: 'Help employees find relevant business knowledge without navigating multiple sources.' },
  { num: '02', title: 'Less repetitive work', copy: 'Reduce time spent on routine drafting, summarization and information processing.' },
  { num: '03', title: 'Better employee productivity', copy: 'Provide AI-assisted tools that support everyday tasks.' },
  { num: '04', title: 'More consistent processes', copy: 'Create repeatable AI-assisted workflows around approved information and processes.' },
  { num: '05', title: 'Controlled AI adoption', copy: 'Introduce AI around defined business use cases with proper controls.' },
  { num: '06', title: 'Improved decision quality', copy: 'Provide concise AI-generated insights and summaries that help teams make faster, more consistent, and better-informed decisions.' },
];

const audiences = [
  'IT & Technology Teams',
  'Operations Teams',
  'Human Resources',
  'Finance & Administration',
  'Customer Service',
  'Knowledge-Heavy Teams',
];

const faqs = [
  {
    question: 'What are custom AI applications?',
    answer:
      'Custom AI applications are business-specific software solutions that use artificial intelligence to support defined workflows, employees, knowledge management, document processing, search, or operational tasks. Unlike generic AI tools, they are designed around an organization’s users, business requirements, approved information sources, and workflows.',
  },
  {
    question: 'What types of custom AI applications can GulfStream build?',
    answer:
      'GulfStream can help design and build internal AI copilots, enterprise knowledge assistants, document intelligence solutions, AI-powered enterprise search, workflow assistants, and other purpose-built AI applications based on business requirements.',
  },
  {
    question: 'Can a custom AI application connect to company data?',
    answer:
      'Yes. Where appropriate, a solution can connect to approved business information sources, documents, repositories, and internal systems. The architecture should be designed around appropriate authentication, permissions, access controls, and business requirements.',
  },
  {
    question: 'Can AI applications respect employee permissions?',
    answer:
      'Yes. Access-aware architecture can be used so that users interact with information and systems according to the permissions and controls defined for the solution.',
  },
  {
    question: 'Are custom AI applications only suitable for large enterprises?',
    answer:
      'No. A custom AI application can be designed around the size, complexity, processes, data environment, and maturity of a business. Projects can start with a focused use case and expand as the organization gains experience.',
  },
  {
    question: 'How do we identify the right AI use case?',
    answer:
      'The right use case usually combines a clear business problem, repetitive or knowledge-intensive work, accessible business information, measurable potential value, and an appropriate level of risk and control. A discovery exercise can help prioritize suitable opportunities.',
  },
];

const CustomAIApplicationsContent = () => {
  useReveal();

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="page-hero" >
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/ai-services">AI Services</Link>
            <span>›</span>
            <span>Custom AI Applications</span>
          </div>

          <div className="hero-content">


            <h1 className="display-lg">
              
              <span className="text-gradient">
              Custom AI Applications for{' '} Real Business Workflows
              </span>
            </h1>

            <p className="hero-desc">
              Build practical AI applications around your employees,
              business knowledge, documents, workflows, and approved data.
              From internal copilots and knowledge assistants to AI-powered
              search and workflow tools, we help turn specific business
              problems into useful AI experiences.
            </p>

            <div className="hero-actions">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Discuss Your AI Use Case
              </Link>

              <Link
                href="/ai-services"
                className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}
              >
                Explore AI Services
              </Link>
            </div>

            
          </div>
        </div>
      </section>

    

      {/* =========================================================
          WHY CUSTOM AI?
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why Custom AI?</div>
            <h2 className="display-md">Why Build a Custom AI Application?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Generic AI tools can be useful for general tasks, but business workflows often require specific context, approved information, controlled access and purpose-built experiences. Custom AI applications are designed around the way your teams and processes actually work.
            </p>
          </div>

          <div className="grid-4 reveal custom-ai-why-grid">
            {whyCards.map((c) => (
              <div key={c.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{c.icon}</div>
                  <div>
                    <h3>{c.title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.88rem' }}>{c.copy}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 18, color: 'var(--text-secondary)', fontSize: '.9rem' }}>
            <em>Start with a focused business use case and expand as your organization gains confidence with AI.</em>
          </p>
        </div>
      </section>

      {/* =========================================================
          AI APPLICATION ARCHITECTURE
      ========================================================= */}
      <section className="section"  style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">AI Application Architecture</div>
            <h2 className="display-md">How Custom AI Connects to Your Business</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              A custom AI application can bring together users, AI capabilities, approved business knowledge and internal systems within an architecture designed around the organization&#39;s requirements and access controls.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">👥</div><h3>Employees & Business Users</h3></div>
              <p style={{ color: 'var(--text-secondary)' }}>Users interact with the AI application to access knowledge, complete tasks and inform decisions.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">🤖</div><h3>Custom AI Application</h3></div>
              <p style={{ color: 'var(--text-secondary)' }}>The application (copilot, assistant, search, or workflow tool) orchestrates AI capabilities and data access where appropriate.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">🧠</div><h3>AI & Knowledge Layer</h3></div>
              <p style={{ color: 'var(--text-secondary)' }}>Natural-language interaction, retrieval, summarization, classification and workflow automation capabilities.</p>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%', maxWidth: 920 }}>
              <div className="card premium-card">
                <div className="card-header"><div className="icon-box">📚</div><h3>Approved Business Data</h3></div>
                <p style={{ color: 'var(--text-secondary)' }}>Documents, policies, knowledge bases and internal repositories — used where appropriate and approved.</p>
              </div>

              <div className="card premium-card">
                <div className="card-header"><div className="icon-box">🔗</div><h3>Business Systems</h3></div>
                <p style={{ color: 'var(--text-secondary)' }}>Internal applications and workflow systems that the AI application can integrate with, depending on the use case.</p>
              </div>
            </div>

            <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>

            <div className="card premium-card" style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
              <div className="card-header"><div className="icon-box">🔐</div><h3>Identity, Permissions & Governance</h3></div>
              <p style={{ color: 'var(--text-secondary)' }}>Authentication, user permissions, access controls and governance measures that ensure appropriate use of data and AI features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION TYPES
      ========================================================= */}
<section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">AI Application Development</div>
            <h2 className="display-md">What can you build with custom AI?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Practical AI applications that help employees access knowledge, process information, complete tasks, and interact with business systems more effectively.</p>
          </div>

          <div className="grid-3 reveal">
            {whatCanBuild.map((s) => (
              <div key={s.title} className="card premium-card ai-solution-card">
                <div className="card-header">
                  <div className="icon-box">{s.icon}</div>
                  <div>
                    <h3>{s.title}</h3>
                    <div className="ai-solution-label">Best for: {s.outcome}</div>
                  </div>
                </div>
                <div className="ai-solution-body">
                  <div className="ai-solution-copy" style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                    {s.copy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CHALLENGES
      ========================================================= */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">
              Business Challenges
            </div>

            <h2 className="display-md">
              Where custom AI can create practical value
            </h2>

            <p>
              The strongest AI use cases usually begin with a business
              problem rather than an AI technology.
            </p>
          </div>

          <div className="grid-3 reveal">
            {businessChallenges.map((item) => (
              <article
                key={item.title}
                className="card premium-card"
              >
                <div className="card-header">
                  <div className="icon-box">
                    {item.icon}
                  </div>

                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '.8rem',
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>



 
      {/* =========================================================
          OUTCOMES
      ========================================================= */}
            <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Business Outcomes</div>
            <h2 className="display-md">What your teams can gain from custom AI</h2>
          </div>

          <div className="grid-3 reveal">
            {outcomes.map((o) => (
              <div key={o.num} className="card premium-card">
                <div className="card-header"><div className="icon-box">✅</div><div><h3>{o.title}</h3></div></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>
                  {o.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ / AEO
      ========================================================= */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">
             ❓ FAQ 
            </div>

            <h2 className="display-md">
            Frequently Asked Questions
            </h2>

            <p>
              Answers to common questions about custom AI application
              development, business data, security, use cases and
              implementation.
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
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`ai-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>

                  <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
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

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">

            <h2 className="display-md">
              Have a business process that could benefit from AI?
            </h2>

            <p>
              Tell us what your teams are trying to improve. We can help
              explore the use case, identify suitable data sources and
              shape a practical custom AI application.
            </p>

            <div className="cta-actions">
              <Link
                href="/contact"
                className="btn btn-white btn-lg"
              >
                Discuss Your AI Use Case
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

export default CustomAIApplicationsContent;