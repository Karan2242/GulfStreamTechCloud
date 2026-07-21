'use client';

const ComparisonTable = () => (
  <section className="section">
    <div className="container">
      <div className="section-header reveal">
        <div className="badge badge-accent">⚖️ Compare</div>
        <h2 className="display-md">Why GulfStream vs Others</h2>
      </div>
      <div className="reveal" style={{ overflowX: 'auto' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th className="highlight-col">GulfStream</th>
              <th>Freelancers</th>
              <th>In-House</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>24/7 Cloud Monitoring</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
            <tr><td>Certified Cloud Engineers (AWS, Azure, OCI, GCP)</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
            <tr><td>FinOps Cost Optimization</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
            <tr><td>SLA-Backed Guarantee</td><td className="highlight-col">✅</td><td>❌</td><td>❌</td></tr>
            <tr><td>Multi-Cloud Platform Expertise</td><td className="highlight-col">✅</td><td>⚠️</td><td>❌</td></tr>
            <tr><td>Security & Compliance Governance</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
            <tr><td>Disaster Recovery Planning</td><td className="highlight-col">✅</td><td>❌</td><td>⚠️</td></tr>
            <tr><td>Saudi Market & Regulation Knowledge</td><td className="highlight-col">✅</td><td>❌</td><td>✅</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
