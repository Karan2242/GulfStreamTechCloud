'use client';

import { useState } from 'react';
import { serviceFaqs } from './servicesData';

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-accordion">
      {serviceFaqs.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const answerId = `services-faq-answer-${index}`;
        const questionId = `services-faq-question-${index}`;
        return (
          <div className={`faq-item ${isOpen ? 'active' : ''}`} key={question}>
            <button
              className="faq-question"
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{question}</span>
              <span className="faq-toggle" aria-hidden="true">+</span>
            </button>
            <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId}>
              <div className="faq-answer-inner"><p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
