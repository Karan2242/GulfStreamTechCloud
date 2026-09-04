'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const serviceCards = [
  {
    title: 'Managed IT Support',
    description: 'Keep users, devices, applications, and everyday IT operations running with responsive support, monitoring, and proactive maintenance.',
    href: '/it-services/managed-it-support',
    cta: 'Explore Managed IT Support →',
    icon: '🛠️',
    image: '/assets/images/it-support-tile.svg',
  },
  {
    title: 'Networking & Infrastructure',
    description: 'Build reliable connectivity with network design, Wi‑Fi, switching, routing, firewall integration, and infrastructure monitoring.',
    href: '/it-services/networking-infrastructure',
    cta: 'Explore Networking Services →',
    icon: '🌐',
    image: '/assets/images/it-network-tile.svg',
  },
  {
    title: 'Servers & Virtualization',
    description: 'Deploy and manage physical servers, virtualization, storage, Active Directory, and on-premises infrastructure.',
    href: '/it-services/on-prem-servers-virtualization',
    cta: 'Explore Server Services →',
    icon: '🖥️',
    image: '/assets/images/it-servers-tile.svg',
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Protect critical systems and business data with backup strategies, recovery planning, and continuity solutions.',
    href: '/it-services/backup-disaster-recovery',
    cta: 'Explore Backup & DR →',
    icon: '💾',
    image: '/assets/images/it-recovery-tile.svg',
  },
  {
    title: 'Cybersecurity for SMBs',
    description: 'Strengthen your business with endpoint protection, email security, MFA, patching, and practical security controls.',
    href: '/it-services/cybersecurity-smb',
    cta: 'Explore Cybersecurity →',
    icon: '🔐',
    image: '/assets/images/it-security-tile.svg',
  },
  {
    title: 'IT Projects & Deployments',
    description: 'Plan and deliver office technology rollouts, Microsoft 365 deployments, infrastructure upgrades, and new technology projects.',
    href: '/it-services/it-projects-deployments',
    cta: 'Explore IT Projects →',
    icon: '🚀',
    image: '/assets/images/it-projects-tile.svg',
  },
];

const challengeCards = [
  { title: 'Frequent IT Issues', description: 'Repeated technical problems slow down employees and operations.', icon: '⚠️' },
  { title: 'Slow Support', description: 'Users wait too long for technical issues to be identified and resolved.', icon: '⏱️' },
  { title: 'Network Problems', description: 'Unreliable connectivity can affect communication, applications, and productivity.', icon: '📡' },
  { title: 'Security Gaps', description: 'Weak endpoint, email, identity, or access controls can increase business risk.', icon: '🛡️' },
  { title: 'Backup Concerns', description: 'Critical business data needs reliable protection and a clear recovery strategy.', icon: '💾' },
  { title: 'Growing IT Complexity', description: 'New employees, devices, applications, and locations can make IT harder to manage.', icon: '📈' },
];

const outcomeCards = [
  { title: 'Reduce Downtime', description: 'Keep critical systems, devices, and networks operational.', icon: '🛠️' },
  { title: 'Improve Employee Productivity', description: 'Give employees reliable access to the technology they need.', icon: '👥' },
  { title: 'Strengthen IT Security', description: 'Improve protection across endpoints, users, email, networks, and access.', icon: '🔒' },
  { title: 'Protect Business Data', description: 'Build reliable backup and recovery capabilities for critical information.', icon: '🗂️' },
  { title: 'Simplify IT Operations', description: 'Bring support, monitoring, infrastructure, and technology management together.', icon: '⚙️' },
  { title: 'Scale With Confidence', description: 'Prepare your IT environment for new employees, locations, systems, and business growth.', icon: '📊' },
];

const whyChoose = [
  { title: 'Practical Support', description: 'IT support focused on resolving issues and keeping employees productive.', icon: '🎧' },
  { title: 'Proactive Operations', description: 'Monitoring and maintenance designed to identify problems before they become larger disruptions.', icon: '📡' },
  { title: 'Security-Minded', description: 'Security considerations built into everyday IT operations and infrastructure.', icon: '🛡️' },
  { title: 'Business Continuity', description: 'Backup and recovery planning focused on keeping critical business operations resilient.', icon: '🔄' },
  { title: 'Scalable IT', description: 'Technology services that can adapt as your business, users, offices, and systems grow.', icon: '📈' },
  { title: 'GCC-Focused Support', description: 'IT services designed for organizations operating across Saudi Arabia and the wider GCC.', icon: '🌍' },
];

const deliverySteps = [
  { step: '01', title: 'Assess', description: 'Understand your current IT environment, users, systems, infrastructure, and challenges.' },
  { step: '02', title: 'Plan', description: 'Define priorities, improvements, risks, and required services.' },
  { step: '03', title: 'Implement', description: 'Deploy the required infrastructure, security, backup, or technology solutions.' },
  { step: '04', title: 'Support', description: 'Provide ongoing support for users, devices, systems, and infrastructure.' },
  { step: '05', title: 'Monitor', description: 'Monitor critical systems and identify issues requiring attention.' },
  { step: '06', title: 'Improve', description: 'Review performance and continuously improve your IT environment.' },
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
    answer: 'A managed IT service provider can support users, devices, networks, infrastructure, security, backup, and other day-to-day IT operations.',
  },
  {
    question: 'Why should a business outsource IT support?',
    answer: 'Outsourcing IT support can give businesses access to technical expertise, proactive maintenance, monitoring, and structured IT support without having to build every capability internally.',
  },
  {
    question: 'Does GulfStream support small and medium-sized businesses?',
    answer: 'GulfStream provides practical IT services for businesses that need reliable support, infrastructure, security, backup, and technology management.',
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
    question: 'How much do managed IT services cost?',
    answer: 'The cost depends on factors such as the number of users and devices, infrastructure complexity, required support coverage, security requirements, and the services included.',
  },
  {
    question: 'How quickly can IT support respond to issues?',
    answer: 'Response times depend on the support plan and severity of the issue. GulfStream can define appropriate response and escalation requirements based on business needs.',
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
          <h1 className="display-lg"><span className="text-gradient">Managed IT Services That Keep Your Business Running</span></h1>
          <p>
Reliable managed IT support, secure network and server management, pragmatic cybersecurity, and robust backup solutions that minimize downtime, protect critical data, and enable your business to operate efficiently and scale across Saudi Arabia and the GCC.          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'left', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to an IT Specialist</Link>
            <Link href="#it-services-overview" className="btn btn-outline btn-lg" style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-accent">IT Service Portfolio</div>
            <h2 className="display-md">IT Services for Your Entire Technology Environment</h2>
            <p>
              From day-to-day IT support to infrastructure projects and business continuity, GulfStream provides practical IT services designed around your organization&apos;s operational requirements.
            </p>
          </div>
          <div className="it-services-tile-grid">
            {serviceCards.map((service, index) => (
              <article key={service.title} className={`it-service-tile it-service-tile-${index + 1} reveal`}>
                <div className="it-service-tile-media">
                  <Image src={service.image} alt={`${service.title} illustration`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="it-service-tile-overlay" />
                  <div className="it-service-tile-meta">
                    <span className="it-service-tile-number">0{index + 1}</span>
                    <div className="icon-box" aria-hidden="true">{service.icon}</div>
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
      <section id="it-services-overview" className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Business IT Challenges</div>
            <h2 className="display-md">Is Your IT Environment Holding Your Business Back?</h2>
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
            <h2 className="display-md">What GulfStream Helps Your Business Achieve</h2>
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




      <section className="section" style={{ background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Why GulfStream</div>
            <h2 className="display-md">Why Businesses Choose GulfStream for IT</h2>
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


      <section className="section" >
        <div className="container">
          <div className="section-header reveal">
            <div className="badge badge-primary">Security &amp; Resilience</div>
            <h2 className="display-md">Keep Your IT Environment Secure and Resilient</h2>
            <p>
              Reliable IT requires more than support. GulfStream helps businesses strengthen security, protect critical data, and prepare for technology disruptions.
            </p>
          </div>
          <div className="it-security-grid reveal">
            {securityCards.map((item) => (
              <div key={item.title} className="card premium-card">
                <div className="card-header">
                  <div className="icon-box">{item.title === 'Security' ? '🔐' : item.title === 'Backup' ? '💾' : '🧯'}</div>
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
            <h2 className="display-md">Ready to Improve Your IT Environment?</h2>
            <p>
              Let&apos;s review your current technology environment and identify practical improvements for support, security, infrastructure, and business continuity.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white btn-lg">Book an IT Consultation</Link>
              <Link href="/it-services/managed-it-support" className="btn-white-outline">Explore Managed IT Support</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ITServicesContent;
