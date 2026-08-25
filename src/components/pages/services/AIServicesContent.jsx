'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const serviceCards = [
  {
    number: '01',
    title: 'AI Strategy & Use-Case Discovery',
    description: 'We help identify the business problems that are worth solving first, based on impact, readiness, and return on effort.',
    href: '/ai-services/ai-use-case-discovery',
    icon: '🧭',
    focus: 'Strategy',
    focusKey: 'strategy',
  },
  {
    number: '02',
    title: 'Custom AI Applications',
    description: 'We design practical internal tools, copilots, and AI experiences connected to approved business data and workflows.',
    href: '/ai-services/custom-ai-applications',
    icon: '🤖',
    focus: 'Applications',
    focusKey: 'applications',
  },
  {
    number: '03',
    title: 'Data Engineering & Business Intelligence',
    description: 'We build the data foundations and reporting layers that make AI and better decisions possible across the business.',
    href: '/ai-services/data-engineering-bi',
    icon: '📊',
    focus: 'Data',
    focusKey: 'data',
  },
  {
    number: '04',
    title: 'AI & Workflow Automation',
    description: 'We automate repetitive tasks and connect AI to operational workflows so employees spend less time on manual work.',
    href: '/ai-services/automation-services',
    icon: '⚙️',
    focus: 'Automation',
    focusKey: 'automation',
  },
  {
    number: '05',
    title: 'AI Governance & Security',
    description: 'We create the controls and governance needed to safely adopt AI while protecting data, users, and business processes.',
    href: '/ai-services/ai-governance-security',
    icon: '🛡️',
    focus: 'Governance',
    focusKey: 'governance',
  },
];

const useCases = [
  {
    icon: '💬',
    title: 'Employee Knowledge Assistant',
    challenge: 'Employees spend time searching across documents, policies, procedures, and internal knowledge.',
    solution: 'An AI powered knowledge assistant connected to approved business information and internal documentation.',
    outcome: 'Faster answers and improved productivity across teams.',
  },
  {
    icon: '📄',
    title: 'Document Processing Automation',
    challenge: 'Teams are still handling invoices, forms, contracts, and records manually.',
    solution: 'AI-driven extraction, classification, summarization, and document workflow support.',
    outcome: 'Less manual processing and faster form-to-decision cycles.',
  },
  {
    icon: '📈',
    title: 'Management Intelligence',
    challenge: 'Leaders are relying on fragmented reports and manual data gathering to make decisions.',
    solution: 'Connected reporting, analytics, and AI-assisted business insights built on trusted data.',
    outcome: 'Faster reporting and clearer decision support.',
  },
  {
    icon: '🔄',
    title: 'Intelligent Workflow Automation',
    challenge: 'Operational teams repeat the same steps across multiple systems and processes.',
    solution: 'AI-enabled workflow automation tied to real business processes, approvals, and data routes.',
    outcome: 'Reduced manual effort and more consistent execution.',
  },
  {
    icon: '🎧',
    title: 'Customer & Employee AI Support',
    challenge: 'Support teams repeatedly answer the same questions and service requests.',
    solution: 'AI assistants and support experiences designed around common questions and internal procedures.',
    outcome: 'Faster responses and better service consistency.',
  },
  {
    icon: '🔎',
    title: 'Business Search & Discovery',
    challenge: 'Important business knowledge is spread across disconnected systems and documents.',
    solution: 'Search experiences that help teams find relevant information and context quickly.',
    outcome: 'Quicker access to the knowledge employees actually need.',
  },
];

const deliveryStages = [
  {
    title: 'Discover',
    description: 'We identify the business pain points, workflows, and opportunities where AI can create measurable value.',
    outputLabel: 'Outcome: opportunity map',
  },
  {
    title: 'Assess',
    description: 'We evaluate business value, technical feasibility, data readiness, risk, and implementation effort.',
    outputLabel: 'Outcome: prioritised use cases',
  },
  {
    title: 'Design',
    description: 'We define the business process, architecture, integrations, security controls, and success metrics.',
    outputLabel: 'Outcome: solution blueprint',
  },
  {
    title: 'Build',
    description: 'We develop the solution, connect the data, automate the workflow, and test the experience with real users.',
    outputLabel: 'Outcome: working solution',
  },
  {
    title: 'Deploy',
    description: 'We roll out the capability with governance, access controls, and monitoring built in from day one.',
    outputLabel: 'Outcome: production ready',
  },
  {
    title: 'Govern',
    description: 'We monitor adoption, performance, security, and business outcomes so the solution keeps delivering value.',
    outputLabel: 'Outcome: continuous improvement',
  },
];

const industryCards = [
  {
    title: 'Retail',
    description: 'Customer insight, operations automation, knowledge access, and more efficient retail workflows.',
  },
  {
    title: 'Healthcare',
    description: 'Administrative support, reporting, information discovery, and governed AI adoption for healthcare operations.',
  },
  {
    title: 'Logistics',
    description: 'Operational reporting, workflow automation, and data-driven decision support for fast-moving teams.',
  },
  {
    title: 'Professional Services',
    description: 'Knowledge management, research support, document workflows, and productivity improvements across client delivery.',
  },
  {
    title: 'Technology & SaaS',
    description: 'Internal copilots, analytics, automation, and knowledge systems that support product and operations teams.',
  },
  {
    title: 'SMBs',
    description: 'Practical AI solutions that improve productivity without the need for a large-scale transformation project.',
  },
];

const faqs = [
  {
    question: 'What can GulfStream help my business achieve with AI?',
    answer: 'GulfStream helps businesses reduce manual work, improve access to knowledge, automate workflows, make smarter decisions, and deploy AI in a secure and practical way that matches business goals.',
  },
  {
    question: 'How can AI improve business operations?',
    answer: 'AI can help teams work faster, reduce repetitive work, improve data visibility, automate operational tasks, and support better decisions using trusted business information.',
  },
  {
    question: 'Does GulfStream build custom AI applications?',
    answer: 'Yes. We can design custom AI tools such as internal assistants, knowledge systems, copilots, document support experiences, and workflow automations connected to your business context.',
  },
  {
    question: 'Can GulfStream help with AI automation?',
    answer: 'Yes. We can connect AI to business workflows to automate repetitive tasks, reduce operational friction, and improve consistency across teams and processes.',
  },
  {
    question: 'Why is AI governance important?',
    answer: 'AI governance ensures access, security, monitoring, and responsible usage are handled in a way that protects the business while still enabling practical value from AI.',
  },
  {
    question: 'How do we start an AI project with GulfStream?',
    answer: 'The most practical first step is a discovery session to identify where AI can create value, assess readiness, and shape the right next phase of implementation.',
  },
];

const AIServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>AI Services</span>
          </div>
          <h1 className="display-lg">
            <span className="text-gradient">Turn Business Challenges Into Practical AI Solutions</span>
          </h1>
          <p>
            GulfStream Technologies helps organizations turn AI from an idea into measurable business value: faster decisions, less manual work, stronger knowledge access, better reporting, and more efficient operations.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Discuss Your AI Opportunity</Link>
            <Link href="#ai-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Explore AI Services</Link>
          </div>
        </div>
      </section>





      <section id="ai-services" className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🧩 AI services</div>
            <h2 className="display-md">AI capabilities built around your business</h2>
            <p>
              From identifying the right opportunity to deployment and governance, our services are designed to move AI from concept to practical business impact.
            </p>
          </div>
          <div className="services-grid">
            {serviceCards.map((service) => (
              <article key={service.title} className="service-card premium-card reveal">
                <div className="service-content">
                  <div className="ai-service-number-row">
                    <span className="badge badge-primary ai-service-number">{service.number}</span>
                    <span className={`ai-service-focus ai-service-focus-${service.focusKey}`}>{service.focus}</span>
                    <div className="icon-box ai-service-icon">{service.icon}</div>
                  </div>
                  <h3>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }} className="ai-service-description">{service.description}</p>
                  <Link href={service.href} className="btn btn-accent btn-sm">Explore Service →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">💡 Use cases</div>
            <h2 className="display-md">Where AI can move the needle in real business workflows</h2>
            <p>
              We focus on practical use cases where AI can reduce effort, improve access to information, and support faster, more confident decisions.
            </p>
          </div>
          <div className="grid-3 reveal">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card premium-card ai-solution-card">
                <div className="card-header">
                  <div className="icon-box">{useCase.icon}</div>
                  <div className="card-title-row"><h3 style={{ fontSize: '0.9rem' }}>{useCase.title}</h3></div>
                </div>
                <div className="ai-solution-body">
                  <p className="ai-solution-label" style={{ fontSize: '0.8rem' }}>Business challenge</p>
                  <p className="ai-solution-copy" style={{ fontSize: '0.7rem' }}>{useCase.challenge}</p>
                  <p className="ai-solution-label" style={{ fontSize: '0.8rem' }}>AI solution</p>
                  <p className="ai-solution-copy" style={{ fontSize: '0.7rem' }}>{useCase.solution}</p>
                  <p className="ai-solution-label" style={{ fontSize: '0.8rem' }}>Outcome</p>
                  <p className="ai-solution-copy ai-solution-outcome" style={{ fontSize: '0.7rem' }}>{useCase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🛠️ Delivery approach</div>
            <h2 className="display-md">A measured path from strategy to production</h2>
            <p>
              We combine business analysis, data readiness, solution design, and governance to reduce risk and keep AI aligned with what the business actually needs.
            </p>
          </div>

          <div className="delivery-process reveal" aria-label="AI delivery process steps">
            {deliveryStages.map((stage, index) => (
              <div key={stage.title} className="process-step">
                <div className="process-step-header">
                  <div className="process-step-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{stage.title}</h3>
                </div>
                <div className="process-step-body">
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }} ><strong>{stage.outputLabel}</strong> {stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">🏆 Why us for AI services</div>
            <h2 className="display-md">We help businesses move from AI ideas to real operational value</h2>
            <p>
              GulfStream combines strategic clarity, practical implementation, and governance so AI is not just discussed, but deployed in ways that support productivity, performance, and long-term business resilience.
            </p>
          </div>
          <div className="grid-3 reveal">
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🎯</div>
                <div className="card-title-row"><h3>Business-first thinking</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We focus on the opportunities that matter most to your operations, not just the technologies that look impressive.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">⚙️</div>
                <div className="card-title-row"><h3>Execution that works</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }} >From discovery to deployment, we turn AI concepts into usable workflows, tools, and measurable business outcomes.</p>
            </div>
            <div className="card premium-card">
              <div className="card-header">
                <div className="icon-box">🛡️</div>
                <div className="card-title-row"><h3>Governance built in</h3></div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>We help organizations adopt AI responsibly with the right controls, data handling, and operational confidence.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">❓ FAQ</div>
            <h2 className="display-md">Frequently asked questions</h2>
            <p>
              Common questions about business AI, implementation approach, automation, governance, and where GulfStream fits in.
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
                    aria-controls={`ai-services-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div id={`ai-services-faq-answer-${index}`} className="faq-answer">
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

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to identify where AI can create value in your business?</h2>
            <p>Let&apos;s start with the business problem, the workflow, and the measurable opportunity—then shape the right AI path forward.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">Discuss Your AI Opportunity</Link>
              <Link href="/ai-services/ai-use-case-discovery" className="btn-white-outline">Book an AI Discovery Workshop</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIServicesContent;
