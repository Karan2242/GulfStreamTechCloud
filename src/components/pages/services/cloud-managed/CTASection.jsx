'use client';

import Link from 'next/link';

const CTASection = () => (
  <section className="section">
    <div className="container reveal">
      <div className="cta-banner">
        <h2 className="display-md">Ready to Optimize Your Cloud?</h2>
        <p>Book a free 60-minute Cloud Assessment. Our certified architects will analyze your environment across any platform and deliver a prioritized action plan.</p>
        <p className="cta-urgency">⚡ Limited free assessments available this month</p>
        <div className="cta-actions">
          <Link href="/book-a-review" className="btn btn-white btn-lg">📋 Book Free Cloud Assessment</Link>
          <Link href="/contact" className="btn-white-outline">💬 Talk to an Expert</Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
