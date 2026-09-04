'use client';

import React, { useState } from 'react';

const homeFaqs = [
  {
    question: 'What services does GulfStream Technologies provide?',
    answer:
      'GulfStream Technologies provides four integrated capabilities: Cloud Services, AI Services, IT Services, and Manpower Services for technology teams.',
  },
  {
    question: 'Can GulfStream support projects that require multiple technology capabilities?',
    answer:
      'Yes. We combine cloud, AI, IT, and technology talent under one coordinated engagement model so strategy, delivery, and operations stay aligned.',
  },
  {
    question: 'Do you provide both project-based and ongoing managed services?',
    answer:
      'Yes. We support consulting, project delivery, managed services, and long-term partnership models depending on your business priorities.',
  },
  {
    question: 'What types of technology professionals can GulfStream provide?',
    answer:
      'We provide professionals across cloud platforms, cybersecurity, AI, data engineering, infrastructure, software delivery, and enterprise IT operations.',
  },
  {
    question: 'Can GulfStream help modernize existing IT environments?',
    answer:
      'Yes. We support assessment, architecture, migration, implementation, optimization, and ongoing operational support for existing environments.',
  },
  {
    question: 'Do you work with organizations across the GCC?',
    answer:
      'Yes. GulfStream works with organizations across Saudi Arabia and the broader GCC, with delivery aligned to regional operational and regulatory requirements.',
  },
  {
    question: 'How do we start a conversation with GulfStream?',
    answer:
      'You can contact our team for an initial discussion and practical next-step recommendations based on your current priorities and constraints.',
  },
  {
    question: 'Can GulfStream support both strategic advisory and implementation?',
    answer:
      'Yes. We can engage from discovery and strategy through implementation, operations, and continuous optimization.',
  },
];

export default function HomeFaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section className="section" style={{ background: 'var(--dark-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">FAQ</div>
          <h2 className="display-md">Questions about working with GulfStream?</h2>
        </div>

        <div className="faq-accordion">
          {homeFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
                  id={`home-faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </button>
                <div
                  id={`home-faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`home-faq-question-${index}`}
                >
                  <div className="faq-answer-inner">
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
