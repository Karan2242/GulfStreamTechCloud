'use client';

const rows = [
  { feature: '24/7 Cloud Monitoring', gulf: true, freelance: false, inhouse: 'partial' },
  { feature: 'Certified Cloud Engineers (AWS, Azure, OCI, GCP)', gulf: true, freelance: false, inhouse: 'partial' },
  { feature: 'FinOps Cost Optimization', gulf: true, freelance: false, inhouse: false },
  { feature: 'SLA-Backed Guarantee', gulf: true, freelance: false, inhouse: false },
  { feature: 'Multi-Cloud Platform Expertise', gulf: true, freelance: 'partial', inhouse: false },
  { feature: 'Security & Compliance Governance', gulf: true, freelance: false, inhouse: 'partial' },
  { feature: 'Disaster Recovery Planning', gulf: true, freelance: false, inhouse: 'partial' },
  { feature: 'Saudi Market & Regulation Knowledge', gulf: true, freelance: false, inhouse: true },
];

const Cell = ({ value }) => {
  if (value === true) return <span className="check-yes">✔</span>;
  if (value === false) return <span className="check-no">✘</span>;
  return <span className="check-partial">Varies</span>;
};

const ComparisonTable = () => (
  <section className="section" style={{ background: 'var(--dark-surface)' }}>
    <div className="container">
      <div className="section-header reveal">
        <div className="badge badge-accent">⚖️ Compare</div>
        <h2 className="display-md">Why GulfStream vs Others</h2>
        <p>See how a dedicated managed services provider compares against freelancers and in-house teams.</p>
      </div>
      <div className="comparison-wrapper reveal">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th className="highlight-col">GulfStream</th>
              <th>Freelancers</th>
              <th>In-House Teams</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td className="highlight-col"><Cell value={row.gulf} /></td>
                <td><Cell value={row.freelance} /></td>
                <td><Cell value={row.inhouse} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
