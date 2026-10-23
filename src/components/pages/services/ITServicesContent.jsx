'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const serviceCards = [
  {
    title: 'Managed IT Support',
    description: 'Keep users, devices, applications, and everyday IT operations running structured support, troubleshooting, monitoring, maintenance, and proactive issue management.',
    href: '/it-services/managed-it-support',
    cta: 'Explore Managed IT Support →',
    icon: '🛠️',
    image: '/assets/images/itsupport.png',
  },
  {
    title: 'Networking & Infrastructure',
    description: 'Build reliable connectivity with network design, Wi‑Fi, switching, routing, firewall integration, and infrastructure monitoring.',
    href: '/it-services/networking-infrastructure',
    cta: 'Explore Networking Services →',
    icon: '🌐',
    image: '/assets/images/itnetwork.png',
  },
  {
    title: 'Servers & Virtualization',
    description: 'Manage physical and virtual server environments, storage, Active Directory, and on-premises infrastructure supporting critical business applications.',
    href: '/it-services/on-prem-servers-virtualization',
    cta: 'Explore Server Services →',
    icon: '🖥️',
    image: '/assets/images/itservers.png',
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Protect critical business data with backup strategies, recovery planning, monitoring, and business continuity designed around your operational requirements.',
    href: '/it-services/backup-disaster-recovery',
    cta: 'Explore Backup & DR →',
    icon: '💾',
    image: '/assets/images/itrecovery.png',
  },
  {
    title: 'Cybersecurity for SMBs',
    description: 'Strengthen everyday IT security with practical controls across endpoints, email, identity, access, MFA, patching, and user environments.',
    href: '/it-services/cybersecurity-smb',
    cta: 'Explore Cybersecurity →',
    icon: '🔐',
    image: '/assets/images/itsecurity.png',
  },
  {
    title: 'IT Projects & Deployments',
    description: 'Plan and implement Microsoft 365 deployments, infrastructure upgrades, office technology rollouts, migrations, and other IT projects.',
    href: '/it-services/it-projects-deployments',
    cta: 'Explore IT Projects →',
    icon: '🚀',
    image: '/assets/images/itprojects.png',
  },
];

const itServiceCapabilities = [
  {
    title: 'User & Endpoint Support',
    icon: '🖥️',
    items: [
      'User troubleshooting',
      'Device support',
      'Endpoint management',
      'Software and application support',
      'Patch and maintenance activities',
    ],
  },
  {
    title: 'Microsoft 365 & Productivity',
    icon: '📧',
    items: [
      'Microsoft 365 administration',
      'User and access management',
      'Email and collaboration support',
      'Microsoft 365 deployment assistance',
    ],
  },
  {
    title: 'Network & Infrastructure',
    icon: '🌐',
    items: [
      'Network management',
      'Wi-Fi',
      'Switching and routing',
      'Firewall integration',
      'Infrastructure monitoring',
    ],
  },
  {
    title: 'Servers & Systems',
    icon: '🗄️',
    items: [
      'Physical servers',
      'Virtualization',
      'Storage',
      'Active Directory',
      'On-premises infrastructure',
    ],
  },
  {
    title: 'Security',
    icon: '🔐',
    items: [
      'Endpoint protection',
      'MFA',
      'Email security',
      'Access controls',
      'Patch management',
    ],
  },
  {
    title: 'Backup & Recovery',
    icon: '💾',
    items: [
      'Backup strategy',
      'Backup monitoring',
      'Recovery planning',
      'Disaster recovery',
      'Business continuity',
    ],
  },
];

const challengeCards = [
  { title: 'Frequent IT Issues', description: 'Recurring technical issues can interrupt employee workflows, increase support requests, and consume internal IT resources.', icon: '⚠️' },
  { title: 'Slow Support', description: 'Delayed troubleshooting can leave employees waiting and allow small technology issues to become larger operational disruptions.', icon: '⏱️' },
  { title: 'Network Problems', description: 'Unreliable networks, Wi-Fi, or connectivity can affect business applications, communication, collaboration, and customer-facing operations.', icon: '📡' },
  { title: 'Security Gaps', description: 'Inconsistent endpoint, identity, email, patching, or access controls can create avoidable security and operational risks.', icon: '🛡️' },
  { title: 'Backup Concerns', description: 'Without reliable backup and tested recovery processes, technology failures can put critical business data and operations at risk.', icon: '💾' },
  { title: 'Growing IT Complexity', description: 'New employees, devices, applications, locations, and cloud services can make IT environments increasingly difficult to manage internally.', icon: '📈' },
];

const outcomeCards = [
  { title: 'Reduce Operational Downtime', description: 'Improve the reliability of critical systems, devices, networks, and infrastructure.', icon: '🛠️' },
  { title: 'Improve Employee Productivity', description: 'Give employees dependable access to the technology, applications, and systems they need to work effectively.', icon: '👥' },
  { title: 'Strengthen IT Security', description: 'Improve protection across endpoints, users, email, networks, and access.', icon: '🔒' },
  { title: 'Protect Business Data', description: 'Build reliable backup and recovery capabilities for critical information.', icon: '🗂️' },
  { title: 'Simplify IT Operations', description: 'Bring support, monitoring, infrastructure, and technology management into a more structured operating model.', icon: '⚙️' },
  { title: 'Support Business Growth', description: 'Build an IT environment that can adapt to new users, locations, applications, changing business requirements.', icon: '📊' },
];

const whyChoose = [
  { title: 'Business-Focused IT Support', description: 'IT services aligned with operational priorities rather than technology for its own sake.', icon: '🎧' },
  { title: 'Proactive IT Operations', description: 'Monitoring and maintenance designed to identify issues early and improve day-to-day IT reliability.', icon: '📡' },
  { title: 'Integrated IT Capabilities', description: 'Support across users, endpoints, networks, servers, security, backup, and infrastructure through one coordinated service model.', icon: '🛡️' },
  { title: 'Security-Minded Approach', description: 'Security considerations integrated into everyday IT operations, infrastructure, access, and data protection.', icon: '🔄' },
  { title: 'Scalable Services', description: 'IT capabilities that can adapt as your users, offices, applications, infrastructure, business requirements change.', icon: '📈' },
  { title: 'GCC-Focused Support', description: 'IT services designed for organizations operating across Saudi Arabia and the wider GCC.', icon: '🌍' },
];

const deliverySteps = [
  { step: '01', title: 'Assess', description: 'Understand your users, devices, applications, infrastructure, existing IT processes, and key operational challenges.' },
  { step: '02', title: 'Plan', description: 'Identify priorities, risks, service requirements, improvement opportunities, and the capabilities needed to support your business.' },
  { step: '03', title: 'Implement', description: 'Deploy required infrastructure, security, backup, Microsoft 365, networking, or technology solutions.' },
  { step: '04', title: 'Support', description: 'Provide ongoing assistance for users, devices, applications, systems, and infrastructure based on the agreed service scope.' },
  { step: '05', title: 'Monitor', description: 'Monitor agreed systems and infrastructure to identify issues requiring attention and support operational reliability.' },
  { step: '06', title: 'Improve', description: 'Review recurring issues, operational requirements, and technology needs to identify opportunities for continuous improvement.' },
];

const securityCards = [
  { title: 'Security', description: 'Protect users, endpoints, email, networks, and access with practical security controls.' },
  { title: 'Backup', description: 'Protect critical business information with reliable backup strategies and recovery planning.' },
  { title: 'Continuity', description: 'Prepare your business to recover from technology failures and operational disruptions.' },
];

const industryCards = [
  { title: 'Retail', description: 'POS systems, connectivity, endpoints, security, and operational support.' },
  { title: 'Healthcare', description: 'Secure infrastructure, endpoint management, backup, and reliable connectivity.' },
  { title: 'Logistics', description: 'Network reliability, device support, infrastructure, and business continuity.' },
  { title: 'Professional Services', description: 'Microsoft 365, endpoint support, cybersecurity, and productivity infrastructure.' },
  { title: 'Technology & SaaS', description: 'Infrastructure support, networking, security, and scalable IT operations.' },
  { title: 'SMBs', description: 'Cost-conscious IT support, security, backup, and infrastructure management.' },
];

const faqs = [
  {
    question: 'What are managed IT services?',
    answer: 'Managed IT services provide ongoing support, monitoring, maintenance, and management of an organization\'s technology environment.',
  },
  {
    question: 'What does a managed IT service provider do?',
    answer: 'A managed IT service provider can support users, endpoints, networks, infrastructure, security, backup, Microsoft 365, and other day-to-day IT operations.',
  },
  {
    question: 'Why should a business outsource IT support?',
    answer: 'Outsourcing IT support can provide access to technical expertise, structured support processes, monitoring, and maintenance without requiring every capability to be built internally.',
  },
  {
    question: 'Does GulfStream support small and medium-sized businesses?',
    answer: 'Yes. GulfStream provides IT services for organizations that need structured support, infrastructure management, security, backup, and technology management.',
  },
  {
    question: 'Can GulfStream manage our existing IT infrastructure?',
    answer: 'IT services can be structured around an organization\'s existing environment, including networks, endpoints, servers, Microsoft 365, backup, and security systems, depending on business requirements.',
  },
  {
    question: 'What is included in managed IT support?',
    answer: 'Managed IT support can include help desk assistance, troubleshooting, endpoint management, monitoring, maintenance, user support, and ongoing IT operations.',
  },
  {
    question: 'Can GulfStream support Microsoft 365 environments?',
    answer: 'GulfStream can support Microsoft 365 environments as part of an organization\'s broader IT service requirements, depending on the agreed scope.',
  },
  {
    question: 'Can you manage cloud and on-premises infrastructure?',
    answer: 'IT services can support environments that combine cloud services, Microsoft 365, on-premises infrastructure, networks, servers, and endpoints.',
  },
  {
    question: 'Can GulfStream work alongside an internal IT team?',
    answer: 'Yes. External IT services can complement internal teams by providing additional operational support, specialist capabilities, project delivery, or infrastructure management.',
  },
  {
    question: 'How much do managed IT services cost?',
    answer: 'Pricing depends on factors such as users, devices, infrastructure complexity, required support coverage, security requirements, and the services included.',
  },
  {
    question: 'How quickly can IT support respond to issues?',
    answer: 'Response times depend on the agreed support model, service scope, and severity of the issue. GulfStream can define appropriate response and escalation requirements based on business needs.',
  },
  {
    question: 'Can GulfStream support businesses across Saudi Arabia and the GCC?',
    answer: 'GulfStream provides IT services designed for organizations operating across Saudi Arabia and the wider GCC, with the specific service model determined by business requirements and agreed scope.',
  },
];

const ITServicesContent = () => {
  useReveal();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>IT Services</span>
          </div>
          <h1 className="display-lg"><span className="text-gradient">IT Services for Reliable, Secure Business Operations</span></h1>
          <p>
GulfStream Technologies provides managed IT support, infrastructure management, network and server services, cybersecurity, backup, and IT project delivery for businesses across Saudi Arabia and the GCC. We help organizations improve IT reliability, protect critical systems, and support business growth through structured, business-focused technology services.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to an IT Specialist</Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--dark-surface)' }} >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">IT Service Portfolio</div>
            <h2 className="display-md">IT Services for Your Entire Technology Environment</h2>
            <p>
              From day-to-day user support to infrastructure management and technology projects, GulfStream provides IT services designed around your organization&apos;s operational requirements. Choose individual capabilities or combine services to create a more structured approach to IT support, infrastructure, security, and business continuity.
            </p>
          </div>
          <div className="it-services-tile-grid">
            {serviceCards.map((service, index) => (
              <article key={service.title} className={`it-service-tile it-service-tile-${index + 1} reveal`}>
                <div className="it-service-tile-media">
                  <Image src={service.image} alt={`${service.title} illustration`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="it-service-tile-overlay" />
                  <div className="it-service-tile-meta">

                  </div>
                </div>
                <div className="it-service-tile-content">
                  <h3>{service.title}</h3>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{service.description}</p>
                  <Link href={service.href} className="it-service-link">{service.cta.replace(' →', '')} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="display-md">What&apos;s Included in Our IT Services</h2>
            <p>
              GulfStream can support the technology environment behind your day-to-day operations, from users and endpoints to networks, servers, Microsoft 365, security, and data protection. Services can be structured around your existing environment and business requirements.
            </p>
          </div>
          <div className="it-challenges-grid reveal">
            {itServiceCapabilities.map((capability) => (
              <article key={capability.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box" aria-hidden="true">{capability.icon}</div>
                  <div className="card-title-row"><h3>{capability.title}</h3></div>
                </div>
                <ul className="check-list">
                  {capability.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="it-services-overview" className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Business IT Challenges</div>
            <h2 className="display-md">Business IT Challenges That Can Affect Growth</h2>
            <p>
              Unplanned downtime, slow support, aging infrastructure, security gaps, and unreliable backups can disrupt operations and affect productivity.
            </p>
          </div>
          <div className="it-challenges-grid reveal">
            {challengeCards.map((item) => (
              <div key={item.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row"><h3>{item.title}</h3></div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Business Outcomes</div>
            <h2 className="display-md">What GulfStream Technologies Helps Your Business Achieve</h2>
          </div>
          <div className="it-outcomes-grid reveal">
            {outcomeCards.map((item) => (
              <div key={item.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row"><h3>{item.title}</h3></div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="section" style={{ background: 'var(--dark-surface)' }} >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">HOW WE DELIVER IT SERVICES</div>
            <h2 className="display-md">A Structured Approach to IT Service Delivery</h2>
            <p>
              Every organization has a different technology environment. GulfStream starts by understanding your current infrastructure, operational requirements, and priorities before defining the appropriate support and service model.
            </p>
          </div>
          <div className="home-roadmap ai-roadmap reveal" aria-label="IT service delivery process steps">
            {deliverySteps.map((step) => (
              <article className="home-roadmap-step" key={step.step}>
                <div className="home-roadmap-node" aria-hidden="true">{step.step}</div>
                <div className="home-roadmap-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why Us for IT Services</div>
            <h2 className="display-md">Why Organizations Choose GulfStream Technologies for IT Services</h2>
          </div>
          <div className="it-outcomes-grid reveal">
            {whyChoose.map((item) => (
              <div key={item.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-title-row"><h3>{item.title}</h3></div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Frequently Asked Questions</div>
            <h2 className="display-md">Frequently Asked Questions About Managed IT Services</h2>
          </div>

          <div className="faq-accordion it-faq reveal">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`it-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </button>
                  <div id={`it-faq-answer-${index}`} className="faq-answer">
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

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="display-md">Ready to Build a More Reliable IT Environment?</h2>
            <p>
              Tell us about your current IT environment, operational challenges, and business priorities. GulfStream can help identify practical opportunities across IT support, infrastructure, cybersecurity, backup, and technology operations.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">Talk to an IT Specialist</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ITServicesContent;
