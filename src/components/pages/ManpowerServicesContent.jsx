'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { faqs } from './manpowerServicesData';

const valueProps = [
  ['Specialized Expertise', 'Access professionals across cloud, cybersecurity, enterprise IT, AI, data, DevOps and other technology disciplines.'],
  ['Rapid Workforce Scaling', 'Expand technical capacity to support project deadlines, transformation initiatives, and changing business requirements.'],
  ['Flexible Engagement Models', 'Choose contract, permanent, temporary, dedicated, onsite, offshore, or project-based staffing models.'],
  ['Reduced Hiring Pressure', 'Extend your technology workforce without relying entirely on lengthy internal recruitment cycles.'],
  ['Project-Aligned Resources', 'Deploy professionals according to the skills, duration, location, and responsibilities required by the project.'],
  ['Enterprise-Ready Support', 'Support organizations across complex technology and operating environments.'],
];

const capabilities = [
  { title: 'IT Resource Augmentation', icon: '👥', href: '/it-services', description: 'Strengthen your existing technology teams with qualified professionals who can integrate into your operating environment and contribute across short-term, long-term, or project-specific requirements.', items: ['Contract IT Staffing', 'Permanent Technology Hiring', 'Temporary IT Resources', 'Dedicated Technology Teams', 'Offshore IT Resources', 'Onsite IT Consultants'], cta: 'Explore IT Resource Augmentation' },
  { title: 'Cybersecurity Professionals', icon: '🛡️', href: '/it-services/cybersecurity-smb', description: 'Strengthen security operations, governance, compliance, risk management, and security engineering capabilities with experienced cybersecurity professionals.', items: ['SOC Analysts', 'Security Engineers', 'Penetration Testers', 'Cloud Security Engineers', 'GRC Consultants', 'Security Architects'], cta: 'Explore Cybersecurity Staffing' },
  { title: 'Cloud Professionals', icon: '☁️', href: '/services/cloud-managed-services', description: 'Access cloud specialists supporting migration, modernization, infrastructure operations, optimization, DevOps, and managed cloud initiatives.', items: ['AWS Engineers', 'Azure Engineers', 'Google Cloud Engineers', 'Oracle Cloud Engineers', 'DevOps Engineers', 'Cloud Architects'], cta: 'Explore Cloud Staffing' },
  { title: 'Enterprise IT Professionals', icon: '🖥️', href: '/it-services', description: 'Extend enterprise IT capabilities with experienced infrastructure professionals supporting core systems, networks, platforms, and business-critical environments.', items: ['System Administrators', 'Network Engineers', 'VMware Engineers', 'Microsoft 365 Administrators', 'Linux Administrators', 'Database Administrators'], cta: 'Explore Enterprise IT Staffing' },
  { title: 'AI & Data Professionals', icon: '📊', href: '/ai-services', description: 'Build specialist capabilities required for AI adoption, intelligent automation, analytics, machine learning, and data-driven transformation.', items: ['AI Engineers', 'Machine Learning Engineers', 'Data Scientists', 'Data Engineers', 'Prompt Engineers', 'Power BI Developers'], cta: 'Explore AI & Data Staffing' },
  { title: 'Project-Based Delivery Teams', icon: '🚀', href: '/it-services/it-projects-deployments', description: 'Deploy complete technical teams structured around specific transformation initiatives, technical programs, and enterprise project requirements.', items: ['Digital Transformation Projects', 'Data Center Migration', 'Cloud Migration Teams', 'AI Implementation Teams', 'ERP Support Teams', 'PMO & Technical Consultants'], cta: 'Build a Project Delivery Team' },
];

const engagementModels = [
  ['Contract Staffing', 'Access specialized technology professionals for defined periods or project requirements.'],
  ['Permanent Hiring', 'Build long-term internal technology capabilities with qualified professionals aligned to your organization.'],
  ['Temporary Resources', 'Address short-term workforce requirements, urgent skill gaps, or peak project workloads.'],
  ['Dedicated Teams', 'Create dedicated technical teams aligned with your technology roadmap and operational requirements.'],
  ['Offshore Resources', 'Extend your technology workforce through remote professionals and specialized offshore resources.'],
  ['Onsite Consultants', 'Deploy qualified technology professionals directly into your environment when onsite collaboration is required.'],
];

const useCases = [
  ['Filling Critical Skill Gaps', 'Access specialized expertise when existing teams lack specific technical capabilities.'],
  ['Accelerating Technology Projects', 'Add technical resources to support demanding implementation and delivery timelines.'],
  ['Supporting Digital Transformation', 'Scale technical teams supporting modernization and enterprise transformation initiatives.'],
  ['Cloud Migration & Modernization', 'Add cloud, DevOps, infrastructure, and architecture professionals to migration and modernization programs.'],
  ['Cybersecurity Capability Expansion', 'Strengthen security operations, engineering, governance, compliance, and risk functions.'],
  ['Scaling AI & Data Initiatives', 'Add AI, machine learning, data engineering, analytics, and automation expertise as initiatives grow.'],
];

const roleGroups = [
  ['Cloud & DevOps', '☁️', ['AWS Engineers', 'Azure Engineers', 'Google Cloud Engineers', 'Oracle Cloud Engineers', 'DevOps Engineers', 'Cloud Architects']],
  ['Cybersecurity', '🛡️', ['SOC Analysts', 'Security Engineers', 'Penetration Testers', 'Cloud Security Engineers', 'GRC Consultants', 'Security Architects']],
  ['AI & Data', '📊', ['AI Engineers', 'Machine Learning Engineers', 'Data Scientists', 'Data Engineers', 'Prompt Engineers', 'Power BI Developers']],
  ['Enterprise IT', '🖥️', ['System Administrators', 'Network Engineers', 'VMware Engineers', 'Microsoft 365 Administrators', 'Linux Administrators', 'Database Administrators']],
];

const processSteps = [
  ['01', '📝', 'Define Requirements', 'Understand your technical, project, experience, location, timeline, and engagement requirements.'],
  ['02', '🎯', 'Identify Right Expertise', 'Map your requirements to the appropriate technology professionals or team structure.'],
  ['03', '🔎', 'Evaluate Candidates', 'Screen professionals according to the technical and business requirements of the role.'],
  ['04', '🚀', 'Select & Deploy', 'Coordinate selection and deploy the required professionals through the chosen engagement model.'],
  ['05', '📈', 'Scale as Needed', 'Adjust workforce capacity as project requirements, priorities, or business needs evolve.'],
];

const differentiators = [
  ['Technology-Focused Expertise', 'Our workforce solutions are centered on specialized technology capabilities.'],
  ['Flexible Resource Models', 'Support contract, permanent, temporary, dedicated, onsite, offshore, and project-based requirements.'],
  ['Cross-Domain Talent', 'Access expertise across IT infrastructure, cloud, cybersecurity, AI, data, DevOps, and enterprise platforms.'],
  ['Project Delivery Capability', 'Support organizations that require complete technical teams rather than individual resources.'],
  ['Business-Aligned Deployment', "Match technical talent to the organization's project and operational requirements."],
  ['Scalable Workforce Support', 'Add or adjust technical capacity as business and project requirements change.'],
];



function CardGrid({ items, className = 'grid-3', icons = ['🧩', '📈', '⚙️', '🎯', '🛠️', '🔗'] }) {
  return (
    <div className={`${className} reveal`}>
      {items.map(([title, description], index) => (
        <article className="card premium-card" key={title}>
          <div className="card-header">
            <div className="icon-box">{icons[index % icons.length]}</div>
            <div className="card-title-row">
              <h3>{title}</h3>
            </div>
          </div>
          <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{description}</p>
        </article>
      ))}
    </div>
  );
}

export default function ManpowerServicesContent() {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Manpower Services</span>
          </nav>
          <h1 className="display-lg">
            <span className="text-gradient">Scale Your Technology Workforce With Right Expertise</span>
          </h1>
          <p>
            Access specialized technology professionals and delivery teams to fill critical skill gaps, accelerate projects, and scale your IT workforce with the flexibility your business requires. GulfStream Technologies provides IT resource augmentation, specialized technology staffing, and project-based technical teams across cloud, cybersecurity, enterprise IT, AI, data, and DevOps.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request Technology Resources
            </Link>
            <Link
              href="#technology-capabilities"
              className="btn btn-outline btn-lg"
              style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Technology Workforce Solutions</div>
            <h2 className="display-md">Technology Talent Aligned to Your Business Needs</h2>
            <p>
              Technology initiatives often require specialized expertise that may not exist within your internal workforce. GulfStream helps organizations access qualified technology professionals and technical teams without the complexity of building every capability internally.
            </p>
          </div>
          <CardGrid items={valueProps} icons={['🧠', '📈', '🔄', '⏱️', '🎯', '🏢']} />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="technology-capabilities" className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Technology Talent Capabilities</div>
            <h2 className="display-md">Technology Professionals for Critical IT Functions</h2>
            <p>
              Connect your organization with specialized professionals across the technology functions required to operate, secure, modernize, and transform your business.
            </p>
          </div>
          <div className="services-grid reveal">
            {capabilities.map((capability) => (
              <article className="service-card premium-card" key={capability.title}>
                <div className="service-content">
                  <div className="card-header">
                    <div className="icon-box">{capability.icon}</div>
                    <div className="card-title-row">
                      <h3>{capability.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>
                    {capability.description}
                  </p>
                  <ul className="check-list">
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Engagement Models</div>
            <h2 className="display-md">Flexible IT Staffing and Resource Engagement Models</h2>
            <p>
              Select the engagement model that best matches your workforce requirements, project duration, technical complexity, and operating environment.
            </p>
          </div>
          <div className="it-outcomes-grid reveal">
            {engagementModels.map(([title, description], index) => (
              <article className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{['📄', '👥', '⏳', '🧩', '🌐', '📍'][index % 6]}</div>
                  <div className="card-title-row">
                    <h3>{title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Business Use Cases</div>
            <h2 className="display-md">Built for Real-World Technology Workforce Challenges</h2>
          </div>
          <div className="it-challenges-grid reveal">
            {useCases.map(([title, description], index) => (
              <article className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{['🧩', '🚀', '🔄', '☁️', '🛡️', '📊'][index % 6]}</div>
                  <div className="card-title-row">
                    <h3>{title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ROLES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Technology Roles</div>
            <h2 className="display-md">Technology Roles We Support</h2>
            <p>
              A professional technology capability catalogue for organizations building, scaling, or supplementing technical teams.
            </p>
          </div>
          <div className="grid-4 reveal">
            {roleGroups.map(([title, icon, roles]) => (
              <article className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{icon}</div>
                  <div className="card-title-row">
                    <h3>{title}</h3>
                  </div>
                </div>
                <ul className="check-list">
                  {roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT PROCESS */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">Resource Deployment Process</div>
            <h2 className="display-md">A Structured Approach to Technology Resource Deployment</h2>
          </div>
          <div className="resource-process-grid reveal">
            {processSteps.map(([step, icon, title, description]) => (
              <article className="card resource-process-card" key={step}>
                <div className="resource-process-top">
                  <span className="resource-process-step">{step}</span>
                  <span className="resource-process-icon">{icon}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GULFSTREAM */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why GulfStream</div>
            <h2 className="display-md">A Technology Workforce Partner, Not Just a Staffing Provider</h2>
            <p>
              Workforce planning is more effective when technical expertise, project context, and operating requirements are considered together.
            </p>
          </div>
          <div className="it-outcomes-grid reveal">
            {differentiators.map(([title, description], index) => (
              <article className="card premium-card" key={title}>
                <div className="card-header">
                  <div className="icon-box">{['💡', '🔄', '🌐', '🚀', '🎯', '📈'][index % 6]}</div>
                  <div className="card-title-row">
                    <h3>{title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Frequently Asked Questions</div>
            <h2 className="display-md">Frequently Asked Questions About IT Manpower Services</h2>
          </div>
          <div className="faq-accordion it-faq reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`manpower-faq-answer-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div id={`manpower-faq-answer-${index}`} className="faq-answer">
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

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Need to Scale Your Technology Team?</h2>
            <p>
              Tell us about the technology skills, team structure, project requirements, and engagement model you need. Our team can help identify an appropriate workforce solution for your organization.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">
                Request Technology Resources
              </Link>
              <Link href="/contact" className="btn-white-outline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
