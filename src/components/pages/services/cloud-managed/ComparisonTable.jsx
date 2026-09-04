'use client';

const defaultRows = [
  ['24/7 cloud monitoring', 'yes', 'partial', 'partial'],
  ['Certified multi-cloud engineers', 'yes', 'partial', 'partial'],
  ['FinOps cost optimization', 'yes', 'partial', 'no'],
  ['SLA-backed accountability', 'yes', 'no', 'no'],
  ['Multi-cloud platform expertise', 'yes', 'partial', 'no'],
  ['Security and compliance governance', 'yes', 'partial', 'partial'],
  ['Disaster recovery planning', 'yes', 'partial', 'partial'],
  ['Saudi market and regulation knowledge', 'yes', 'no', 'yes'],
];

const statusLabels = {
  yes: 'Included',
  partial: 'Limited',
  no: 'Not included',
};

const ComparisonTable = ({
  badge = '⚖️ Make the right call',
  badgeClassName = 'badge-accent',
  title = 'The operating model behind better cloud outcomes',
  description = 'Compare the ownership, coverage, and accountability your cloud estate receives with GulfStream.',
  firstColumnLabel = 'Capability',
  rows = defaultRows,
}) => (
  <section className="section comparison-section">
    <div className="container">
      <div className="section-header reveal">
        <div className={`badge ${badgeClassName}`}>{badge}</div>
        <h2 className="display-md">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="reveal" style={{ overflowX: 'auto' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">{firstColumnLabel}</th>
              <th scope="col" className="highlight-col">GulfStream</th>
              <th scope="col">Other Providers</th>
              <th scope="col">In-House</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, gulfStream, providers, inHouse]) => (
              <tr key={label}>
                <td>{label}</td>
                <td className="highlight-col"><span className={`comparison-status comparison-status-${gulfStream}`}>{statusLabels[gulfStream]}</span></td>
                <td><span className={`comparison-status comparison-status-${providers}`}>{statusLabels[providers]}</span></td>
                <td><span className={`comparison-status comparison-status-${inHouse}`}>{statusLabels[inHouse]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
