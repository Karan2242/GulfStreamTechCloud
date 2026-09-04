'use client';

const services = [
  {
    icon: '⚙️',
    title: 'Cloud Operations',
    description: 'Day-to-day infrastructure management, patching, updates, and operational support across all cloud platforms.',
  },
  {
    icon: '🔔',
    title: 'Monitoring & Incident Response',
    description: '24/7 real-time monitoring, alerting, and human-backed incident response to maintain uptime and performance.',
  },
  {
    icon: '📊',
    title: 'Cost Optimization (FinOps)',
    description: 'Continuous rightsizing, reserved instance management, and FinOps practices to reduce cloud spend by up to 30%.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'CSPM, IAM governance, encryption management, and compliance automation aligned with Saudi regulatory standards.',
  },
  {
    icon: '🔄',
    title: 'Backup & Disaster Recovery',
    description: 'Automated backups, cross-region replication, and tested disaster recovery plans ensuring business continuity.',
  },
  {
    icon: '🚀',
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, Infrastructure as Code, and automated deployments to accelerate delivery and reduce risk.',
  },
];

const ServicesGrid = () => (
  <section className="section" style={{ background: 'var(--dark-surface)' }} >
    <div className="container">
      <div className="section-header reveal">
        <div className="badge badge-primary">🛠️ Full Coverage</div>
        <h2 className="display-md">What We Manage</h2>
        <p>End-to-end cloud management services that cover every aspect of your infrastructure across Saudi Arabia.</p>
      </div>
      <div className="grid-3 reveal">
        {services.map((s) => (
          <div className="card premium-card" key={s.title}>
  <div className="card-header">
    <div className="icon-box">{s.icon}</div>
    <h3>{s.title}</h3>
  </div>
  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)' }}>{s.description}</p>
</div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
