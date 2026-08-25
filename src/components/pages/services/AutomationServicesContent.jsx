'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const challenges = [
  { title: 'Too much repetitive work', copy: 'Employees spend valuable time performing the same manual tasks instead of focusing on higher-value activities.', icon: '🔁' },
  { title: 'Slow approvals and handoffs', copy: 'Manual routing and follow-ups create delays between departments, systems, and decision makers.', icon: '⏳' },
  { title: 'Manual data entry', copy: 'Teams repeatedly enter or copy information between applications, increasing effort and error risk.', icon: '✍️' },
  { title: 'Missed follow-ups', copy: 'Manual reminders and status tracking make it difficult to maintain consistent response times.', icon: '🔔' },
  { title: 'Manual reporting', copy: 'Teams may spend hours collecting, formatting, and distributing operational information.', icon: '📑' },
  { title: 'Disconnected systems', copy: 'Applications that do not communicate effectively create unnecessary manual work between teams.', icon: '🔗' },
];

const solutions = [
  { title: 'Workflow Automation', copy: 'Automate repeatable workflows such as task routing, approvals, handoffs, status updates, and follow-ups across teams.', outcome: 'Faster processes with fewer manual touchpoints.', icon: '🔄' },
  { title: 'Business Process Automation', copy: 'Turn structured business processes into reliable digital workflows that execute consistently according to defined rules.', outcome: 'More consistent execution and better operational control.', icon: '📋' },
  { title: 'RPA Solutions', copy: 'Automate repetitive, rule-based tasks across applications where employees currently spend time copying, entering, or validating information.', outcome: 'Less repetitive work and improved processing efficiency.', icon: '🤖' },
  { title: 'IT Automation', copy: 'Automate recurring IT operations including provisioning, notifications, service workflows, routine checks, and coordination.', outcome: 'More efficient and repeatable IT operations.', icon: '🖥️' },
  { title: 'AI-Assisted Automation', copy: 'Introduce AI into suitable workflow steps such as document understanding, classification, summarization, routing, and decision support.', outcome: 'More intelligent processes without unnecessary complexity.', icon: '🧠' },
  { title: 'System & Data Integration', copy: 'Connect applications and move information between systems so business processes can operate with fewer manual data transfers.', outcome: 'Better data flow and fewer disconnected processes.', icon: '🔌' },
];

const useCases = [
  { title: 'Employee onboarding', copy: 'Coordinate account creation, access requests, notifications, documentation, and task assignments across teams.' , icon: '🧑‍💼'},
  { title: 'IT service workflows', copy: 'Automate ticket routing, notifications, escalations, approvals, and routine service operations.' , icon: '🛠️'},
  { title: 'Invoice processing', copy: 'Route invoices through defined approval workflows and reduce repetitive document and data handling.' , icon: '📥'},
  { title: 'Document processing', copy: 'Use automation and AI-assisted steps to classify, extract, route, and process business documents.' , icon: '📄'},
  { title: 'Customer notifications', copy: 'Trigger timely communications based on business events, workflow status, or defined conditions.' , icon: '✉️'},
  { title: 'Data synchronization', copy: 'Move and synchronize information between business applications to reduce duplicate manual entry.' , icon: '🔁'},
];

const processSteps = [
  { title: 'Discover', copy: 'Understand the current process, manual effort, dependencies, systems, and business objectives.' },
  { title: 'Prioritize', copy: 'Identify processes where automation can deliver meaningful operational value without unnecessary complexity.' },
  { title: 'Design & Integrate', copy: 'Design the workflow and connect the applications, data, business rules, and AI capabilities required.' },
  { title: 'Deploy & Optimize', copy: 'Test, deploy, monitor, and continuously improve the automation as business requirements evolve.' },
];

const outcomes = [
  { title: 'Reduce repetitive work', copy: 'Automate recurring tasks so employees can focus on activities that require human judgment and expertise.', icon: '⚡' },
  { title: 'Improve consistency', copy: 'Apply standardized workflows and business rules across repeatable operational processes.', icon: '✅' },
  { title: 'Accelerate operations', copy: 'Reduce unnecessary handoffs, waiting time, and manual processing across business workflows.', icon: '⚡' },
  { title: 'Reduce manual errors', copy: 'Minimize repetitive data entry and inconsistent execution through controlled automation.', icon: '🔒' },
];

const aiFeatures = [
  { title: 'Document understanding', copy: 'Extract and organize information from business documents.' },
  { title: 'Classification & routing', copy: 'Categorize information and route it to the appropriate workflow or team.' },
  { title: 'Summarization', copy: 'Convert large amounts of information into useful, actionable summaries.' },
  { title: 'Decision support', copy: 'Assist teams with information-driven workflow decisions.' },
];

const faqs = [
  { question: 'What are automation services?', answer: 'Automation services help businesses reduce repetitive manual work by using workflows, integrations, business rules, RPA, and AI-assisted processes to execute routine tasks more efficiently and consistently.' },
  { question: 'What business processes can be automated?', answer: 'Common candidates include approvals, notifications, employee onboarding, ticket routing, document processing, data synchronization, reporting, invoice workflows, and other repetitive rule-based processes.' },
  { question: 'What is workflow automation?', answer: 'Workflow automation uses predefined rules and triggers to move tasks, information, approvals, and notifications through a business process with less manual intervention.' },
  { question: 'What is RPA?', answer: 'Robotic Process Automation, or RPA, uses software-based bots to perform repetitive, rule-based tasks across applications, particularly when those tasks follow consistent steps.' },
  { question: 'How do you identify processes that should be automated?', answer: 'We evaluate factors such as task frequency, manual effort, process consistency, error risk, system dependencies, complexity, and potential business impact before recommending automation.' },
  { question: 'Can automation connect different business applications?', answer: 'Yes. Automation can connect applications and systems through available integrations, APIs, workflows, or other appropriate integration mechanisms to move information between processes.' },
];

const AutomationServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (i) => setOpenFaqIndex(openFaqIndex === i ? null : i);

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
            <span>Automation Services</span>
          </div>

          <div className="section-header reveal" style={{ textAlign: 'left' }}>
            <h1 className="display-lg"> <span className="text-gradient">Automation Services for Smarter & Efficient Operations</span></h1>
            <p className="hero-desc">We design automation solutions that eliminate repetitive work by combining workflow automation, RPA, system integration, IT automation, and targeted AI features aligned to existing processes. Our approach improves throughput, reduces manual errors, enforces data governance, and delivers measurable operational efficiency while scaling with your business.</p>
            <div className="hero-actions" style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Identify Automation Opportunities</Link>
              <Link href="/ai-services" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Explore AI Services</Link>
            </div>

           
          </div>
        </div>
      </section>

      {/* WHAT ARE AUTOMATION SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">📌 What is automation?</div>
            <h2 className="display-md">Turn repetitive processes into reliable digital workflows</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Automation services help enterprises streamline operations by connecting systems, enforcing business rules, and automating approvals, notifications, and data flows. Implemented correctly, automation delivers repeatable, auditable workflows that reduce cost, shorten cycle times, and lower operational risk.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We prioritize high-impact processes, design resilient integrations and transformations, and apply RPA or targeted AI only where it improves accuracy or decisioning—ensuring solutions are maintainable, compliant, and aligned to measurable ROI.</p>
            </div>

            <div>
              <h3 style={{ marginTop: 0, fontSize: '1.25rem', marginBottom: '1rem' }}>Practical first steps</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Start with a short discovery to evaluate process frequency, manual effort, error rates, system dependencies, and business impact. We then recommend a pragmatic automation roadmap focused on quick wins and scalable, low-risk delivery.</p>
              <p><Link href="/contact" className="btn btn-primary">Request an assessment</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">⚠️ Common operational challenges</div>
            <h2 className="display-md">Where manual processes slow your business down</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Automation is most valuable when it removes repetitive work, reduces process friction, and improves how information moves across your organization.</p>
          </div>

          <div className="grid-3 reveal">
            {challenges.map((c) => (
              <article key={c.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{c.icon}</div>
                  <div className="card-title-row"><h3>{c.title}</h3></div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{c.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">🛠️ Automation capabilities</div>
            <h2 className="display-md">Automation solutions built around your processes</h2>
            <p style={{ color: 'var(--text-secondary)' }}>We combine workflow automation, RPA, integrations, IT automation, and AI-assisted capabilities based on the requirements of each process.</p>
          </div>

          <div className="grid-3 reveal">
            {solutions.map((s) => (
              <div key={s.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{s.icon}</div>
                  <div className="card-title-row"><h3>{s.title}</h3></div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{s.copy}</p>
                <div className="automation-outcome" style={{ marginTop: 8 }}>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Outcome:</strong> <span style={{ color: 'var(--text-secondary)', fontSize: '0.65rem' }}>{s.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">💡 Automation use cases</div>
            <h2 className="display-md">What can you automate?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Automation can support processes across IT, operations, finance, HR, customer service, and other business functions.</p>
          </div>

          <div className="grid-3 reveal">
            {useCases.map((u) => (
              <article key={u.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{u.icon}</div>
                  <div className="card-title-row"><h3>{u.title}</h3></div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{u.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* OUTCOMES */}
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">📈 Business outcomes</div>
            <h2 className="display-md">Automation designed around measurable operational value</h2>
          </div>

          <div className="grid-4 reveal">
            {outcomes.map((o) => (
              <div key={o.title} className="card premium-card">
                <div className="card-header"><div className="icon-box">{o.icon}</div><div className="card-title-row"><h3>{o.title}</h3></div></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{o.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="display-md">Automation Services FAQs</h2>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((f, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={f.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    aria-controls={`as-faq-answer-${i}`}
                  >
                    <span>{f.question}</span>
                    <span className="faq-toggle" aria-hidden>+</span>
                  </button>

                  <div id={`as-faq-answer-${i}`} className="faq-answer" style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="faq-answer-inner">
                      <p style={{ color: 'var(--text-secondary)', fontSize: '.8rem' }}>{f.answer}</p>
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
            <h2 className="display-md">Ready to reduce repetitive manual work?</h2>
            <p>Tell us about a process that consumes too much time, requires repetitive data entry, or depends on manual follow-ups. We can help assess whether automation is the right solution.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Discuss an Automation Opportunity</Link>
              <Link href="/ai-services" className="btn-white-outline">Explore AI Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AutomationServicesContent;
