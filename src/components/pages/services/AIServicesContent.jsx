'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const serviceCards = [
  {
    number: '01',
    title: 'AI Strategy & Use-Case Discovery',
    description: 'Identify and prioritize AI opportunities based on business impact, technical feasibility, data readiness and implementation effort.',
    href: '/ai-services/ai-use-case-discovery',
    image: '/assets/images/ai-usecases.png',
    focus: 'Strategy',
    focusKey: 'strategy',
  },
  {
    number: '02',
    title: 'Custom AI Applications',
    description: 'Design and develop AI applications, internal assistants and copilots connected to approved business data, systems and workflows.',
    href: '/ai-services/custom-ai-applications',
    image: '/assets/images/custom-ai.png',
    focus: 'Applications',
    focusKey: 'applications',
  },
  {
    number: '03',
    title: 'Data Engineering & Business Intelligence',
    description: 'Build the data pipelines, reporting foundations and analytics capabilities needed to support reliable insights and AI-driven decision-making.',
    href: '/ai-services/data-engineering-bi',
    image: '/assets/images/data-bi.png',
    focus: 'Data',
    focusKey: 'data',
  },
  {
    number: '04',
    title: 'AI & Workflow Automation',
    description: 'Connect AI with business workflows to automate repetitive processes, reduce manual effort and improve operational consistency..',
    href: '/ai-services/automation-services',
    image: '/assets/images/automation.png',
    focus: 'Automation',
    focusKey: 'automation',
  },
  {
    number: '05',
    title: 'AI Governance & Security',
    description: 'Establish practical controls for AI security, data protection, access, monitoring and responsible adoption across the organization.',
    href: '/ai-services/ai-governance-security',
    image: '/assets/images/ai-security.png',
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

const whyGulfstreamCards = [
  {
    title: 'Business-First AI Strategy',
    description: 'We start with business priorities, operational challenges and measurable outcomes to identify AI opportunities that can create meaningful value—not technology for its own sake.',
    icon: 'strategy',
  },
  {
    title: 'Practical AI Implementation',
    description: 'We turn prioritized AI opportunities into practical applications, assistants, copilots and workflow solutions designed around how your teams actually work.',
    icon: 'implementation',
  },
  {
    title: 'Data & Integration Focus',
    description: 'AI depends on reliable data and connected systems. We consider data readiness, business information, integrations and existing technology environments when designing AI solutions.',
    icon: 'data',
  },
  {
    title: 'Automation That Improves Operations',
    description: 'We apply AI to repetitive and time-consuming workflows to help reduce manual effort, improve process consistency and give teams more time for higher-value work.',
    icon: 'automation',
  },
  {
    title: 'Security & AI Governance',
    description: 'Security and governance are built into the solution from the start, with practical consideration for data protection, access, controls, monitoring and responsible AI adoption.',
    icon: 'security',
  },
  {
    title: 'Designed for Long-Term Adoption',
    description: 'We focus on solutions that can move beyond experimentation by considering user adoption, production readiness, ongoing monitoring and continuous improvement.',
    icon: 'adoption',
  },
];

const faqs = [
  {
    question: 'What AI services does GulfStream Technologies provide?',
    answer: 'GulfStream Technologies provides business-focused AI services covering AI strategy and use-case discovery, custom AI applications, data engineering and business intelligence, workflow automation, and AI governance and security. The services are designed to help organizations identify practical AI opportunities, build useful solutions and support responsible adoption.',
  },
  {
    question: 'How can AI help improve business operations?',
    answer: 'AI can support business operations by automating repetitive tasks, improving access to organizational knowledge, accelerating document processing, strengthening reporting and helping teams make better use of business data. The most useful opportunities depend on the organization\'s workflows, data, technology environment and business priorities.',
  },
  {
    question: 'Can GulfStream help identify AI use cases for our business?',
    answer: 'Yes. AI use-case discovery is part of GulfStream\'s AI services. The process focuses on understanding business challenges and workflows, then evaluating opportunities based on potential business impact, technical feasibility, data readiness and implementation effort.',
  },
  {
    question: 'Does GulfStream build custom AI applications and copilots?',
    answer: 'Yes. GulfStream can design and develop practical AI applications, internal assistants and copilots connected to approved business data, systems and workflows. The objective is to create solutions that address specific organizational requirements rather than applying a generic AI solution to every business problem.',
  },
  {
    question: 'Can GulfStream automate business workflows using AI?',
    answer: 'Yes. AI and workflow automation can be used to reduce repetitive manual processes and improve operational consistency. Potential applications include document processing, information retrieval, workflow assistance and other business processes where AI can support defined tasks and decision workflows.',
  },
  {
    question: 'How does GulfStream approach AI governance and security?',
    answer: 'GulfStream considers AI governance and security as part of the solution lifecycle. This includes practical consideration of data protection, access controls, security requirements, monitoring and responsible AI adoption. Governance requirements should be aligned with the organization\'s data, users, workflows and technology environment.',
  },
  {
    question: 'Can AI solutions work with our existing business data and systems?',
    answer: 'AI solutions can be designed around approved business data, existing technology environments and relevant workflows. The appropriate integration approach depends on the organization\'s systems, data sources, security requirements and use case. Data readiness and integration requirements are therefore considered during AI solution assessment and design.',
  },
  {
    question: 'How does GulfStream deliver an AI project?',
    answer: 'GulfStream follows a structured approach covering discovery, assessment, solution design, development, deployment and governance. This helps connect the business requirement with the technical solution while considering data readiness, security, implementation requirements and ongoing improvement.',
  },
  {
    question: 'Can GulfStream\'s AI services work alongside our existing IT team?',
    answer: 'Yes. AI initiatives can be supported alongside existing internal technology and business teams. GulfStream can contribute specialist AI strategy, application development, data, automation and governance capabilities while working within the organization\'s existing technology environment and operating model.',
  },
  {
    question: 'How do we get started with an AI project with GulfStream?',
    answer: 'The starting point is to discuss the business challenge, workflow or opportunity you want to address. GulfStream can help assess the requirement, identify practical AI opportunities and determine the appropriate next step, whether that involves use-case discovery, solution design, development or another stage of the AI delivery process.',
  },
];

const WhyGulfstreamIcon = ({ name }) => {
  const paths = {
    strategy: <><circle cx="12" cy="12" r="7.5" /><path d="m12 8 1.3 2.7L16 12l-2.7 1.3L12 16l-1.3-2.7L8 12l2.7-1.3L12 8Z" /><path d="M5 5 3.5 3.5M19 5l1.5-1.5" /></>,
    implementation: <><path d="m8.5 8.5-3 3 3 3M15.5 8.5l3 3-3 3M13.5 6l-3 12" /></>,
    data: <><ellipse cx="12" cy="6" rx="6.5" ry="3" /><path d="M5.5 6v6c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3V6M5.5 12v6c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-6" /></>,
    automation: <><path d="M6 6h12v5H6zM6 16h5v2H6zM13 16h5v2h-5z" /><path d="M12 11v3M8.5 14v2M15.5 14v2" /></>,
    security: <><path d="M12 3.5 19 6v5.2c0 4.3-2.8 7-7 9.3-4.2-2.3-7-5-7-9.3V6l7-2.5Z" /><path d="m9 12 2 2 4-4" /></>,
    adoption: <><path d="M5 18 10 13l3 2 6-7" /><path d="M15 8h4v4M5 20h14" /></>,
  };

  return <svg className="why-ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

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
            GulfStream Technologies helps organizations identify, build and deploy practical AI solutions across business workflows, data and operations. From AI strategy and custom applications to automation, data engineering and AI governance, we help turn business challenges into measurable operational value.
          </p>
          <div className="hero-actions">
            <Link href="/book-a-review" className="btn btn-primary btn-lg">Book Your AI Review</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Talk to Technology Expert</Link>
          </div>
        </div>
      </section>





      <section id="ai-services" className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">AI SERVICES</div>
            <h2 className="display-md">AI Services Built Around Your Business Priorities</h2>
            <p>
From identifying the right AI opportunities to building, deploying and governing AI solutions, GulfStream provides practical services designed around business requirements, data readiness and measurable outcomes.            </p>
          </div>
          <div className="ai-services-tile-grid">
            {serviceCards.map((service, index) => (
              <article key={service.title} className={`ai-service-tile ai-service-tile-${index + 1} reveal`}>
                <div className="ai-service-tile-media">
                  <Image src={service.image} alt={`${service.title} illustration`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="ai-service-tile-overlay" />
                  <div className="ai-service-number-row">
                    <span className="badge badge-primary ai-service-number">{service.number}</span>
                    <span className={`ai-service-focus ai-service-focus-${service.focusKey}`}>{service.focus}</span>
                  </div>
                </div>
                <div className="ai-service-tile-content">
                  <div className="ai-service-tile-kicker">Business capability</div>
                  <h3>{service.title}</h3>
                  <p className="ai-service-description">{service.description}</p>
                  <div className="ai-service-tile-footer">
                    <span className="ai-service-tile-index">{service.number} / 05</span>
                    <Link href={service.href} className="ai-service-link">Explore service <span aria-hidden="true">↗</span></Link>
                  </div>
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
            <h2 className="display-md">Practical AI Use Cases for Business Operations</h2>
            <p>
              We focus on AI applications that address identifiable business challenges, improve operational efficiency and help teams make better use of their data and knowledge.
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
            <div className="badge badge-primary">WHY GULFSTREAM FOR AI SERVICES</div>
            <h2 className="display-md">Why Organizations Choose GulfStream for AI Services</h2>
            <p>GulfStream combines business-focused AI strategy, practical implementation, data capabilities and governance to help organizations move from AI opportunities to useful, sustainable business solutions.</p>
          </div>
          <div className="grid-3 reveal">
            {whyGulfstreamCards.map((card) => (
              <article key={card.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box"><WhyGulfstreamIcon name={card.icon} /></div>
                  <h3>{card.title}</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">HOW WE DELIVER AI SERVICES</div>
            <h2 className="display-md">A measured path from strategy to production</h2>
            <p>
              We combine business analysis, data readiness, solution design, and governance to reduce risk and keep AI aligned with what the business actually needs.
            </p>
          </div>

          <div className="home-roadmap ai-roadmap reveal" aria-label="AI delivery process steps">
            {deliveryStages.map((stage, index) => (
              <article className="home-roadmap-step" key={stage.title}>
                <div className="home-roadmap-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="home-roadmap-card">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>





      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="display-md">Frequently Asked Questions About AI Services</h2>
            <p>Answers to common questions about AI strategy, custom AI applications, automation, data, governance and AI implementation.</p>
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
                      <p>{faq.answer}</p>
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
            <h2 className="display-md">Ready to Identify Where AI Can Create Value in Your Business?</h2>
            <p>Start with the business problem, workflow or opportunity—not the technology. GulfStream can help assess your requirements, identify practical AI opportunities and define the right path toward implementation.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">Book Your AI Review</Link>
              <Link href="/ai-services/ai-use-case-discovery" className="btn-white-outline">Talk to an Technology Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIServicesContent;
