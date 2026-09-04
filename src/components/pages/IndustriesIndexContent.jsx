import Link from 'next/link';

const industries = [
  {
    number: '01', name: 'Retail & E-commerce',
    description: 'Help retail organizations create scalable digital operations, improve customer experiences and manage technology across stores, commerce platforms, data and cloud environments.',
    challenges: ['Omnichannel complexity', 'Customer experience expectations', 'Data and analytics fragmentation', 'Cybersecurity and operational resilience'],
    outcomes: ['Scalable digital commerce', 'Better customer insight', 'More reliable technology operations', 'Improved cost and performance visibility'],
  },
  {
    number: '02', name: 'Professional Services',
    description: 'Support consulting, legal and advisory organizations with productive collaboration, accessible data, secure business applications and dependable IT operations.',
    challenges: ['Fragmented systems', 'Collaboration and productivity demands', 'Limited data accessibility', 'Cybersecurity and scaling technology capabilities'],
    outcomes: ['Improved productivity', 'Stronger collaboration', 'Secure operations', 'Better technology scalability'],
  },
  {
    number: '03', name: 'Logistics & Supply Chain',
    description: 'Connect fleet and logistics systems, operational data and automation on resilient infrastructure that gives supply chain teams clearer visibility and faster decisions.',
    challenges: ['Limited real-time visibility', 'Fragmented fleet and logistics systems', 'Operational inefficiencies', 'Infrastructure reliability and data complexity'],
    outcomes: ['Better operational visibility', 'Process automation', 'Improved decision-making', 'More resilient systems'],
  },
  {
    number: '04', name: 'Technology & SaaS',
    description: 'Build and operate scalable, cloud-native platforms for product teams that need stronger security, reliable data and AI foundations, and a faster path from development to delivery.',
    challenges: ['Scaling infrastructure', 'Development velocity', 'Cloud cost control', 'Cybersecurity and data or AI adoption'],
    outcomes: ['Scalable infrastructure', 'Faster innovation', 'Improved cloud efficiency', 'Stronger security and product reliability'],
  },
  {
    number: '05', name: 'Healthcare',
    description: 'Strengthen secure systems, data access and digital healthcare operations with availability-minded, compliance-aware technology that supports clinical and administrative teams.',
    challenges: ['Sensitive data', 'System availability', 'Interoperability', 'Cybersecurity and legacy infrastructure'],
    outcomes: ['Stronger security', 'Reliable systems', 'Improved operational efficiency', 'Better data access and scalable digital capabilities'],
  },
  {
    number: '06', name: 'Real Estate',
    description: 'Modernize property operations with connected digital platforms, clearer portfolio analytics and workflow automation that improves service for tenants, owners and internal teams.',
    challenges: ['Fragmented property data', 'Manual workflows', 'Disconnected systems', 'Customer experience and operational visibility'],
    outcomes: ['Streamlined operations', 'Better portfolio visibility', 'Workflow automation', 'Improved customer experience and scalable technology'],
  },
  {
    number: '07', name: 'Financial Services',
    description: 'Support secure digital services, data-driven decisions and resilient operations with infrastructure and cybersecurity shaped around the needs of financial organizations.',
    challenges: ['Cybersecurity', 'Data complexity', 'Legacy infrastructure', 'Digital transformation and operational resilience'],
    outcomes: ['Stronger security posture', 'Improved data visibility', 'Modernized infrastructure', 'More reliable operations and scalable digital services'],
  },
  {
    number: '08', name: 'Oil & Gas',
    description: 'Improve reliability across distributed operations with secure operational technology, remote visibility, industrial data platforms and analytics that support better field decisions.',
    challenges: ['Complex distributed operations', 'Infrastructure reliability', 'Data silos', 'Cybersecurity and remote visibility'],
    outcomes: ['Improved operational visibility', 'Stronger infrastructure resilience', 'Better analytics', 'Improved security and more efficient technology operations'],
  },
  {
    number: '09', name: 'Manufacturing',
    description: 'Connect production operations, industrial data and workforce technology with automation-ready infrastructure and predictive intelligence that supports efficient plants.',
    challenges: ['Legacy systems', 'Production visibility', 'Operational downtime', 'Disconnected data and cybersecurity'],
    outcomes: ['Improved operational visibility', 'Automation opportunities', 'Better predictive insights', 'Stronger infrastructure and improved efficiency'],
  },
  {
    number: '10', name: 'Government',
    description: 'Modernize secure infrastructure and citizen-facing digital services with accessible data, dependable operations and technology foundations that can scale with public demand.',
    challenges: ['Legacy systems', 'Digital transformation', 'Data silos', 'Cybersecurity and scalable infrastructure'],
    outcomes: ['Modernized technology environments', 'Improved digital services', 'Better data accessibility', 'Stronger security and scalable infrastructure'],
  },
];

function IndustryCard({ industry }) {
  return (
    <article className="industry-card industry-card-detailed">
      <div className="industry-card-header"><span className="industry-number" aria-hidden="true">{industry.number}</span><h3>{industry.name}</h3></div>
      <p className="industry-description">{industry.description}</p>
      <div className="industry-card-section"><h4>Business Challenges</h4><ul>{industry.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></div>
      <div className="industry-card-section industry-outcomes"><h4>Outcomes</h4><ul>{industry.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
    </article>
  );
}

export default function IndustriesIndexContent() {
  return (
    <main>
      <section className="page-hero"><div className="container" style={{ textAlign: 'left' }}>
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Industries</span></nav>
        <h1 className="display-lg"><span className="text-gradient">Technology Solutions Shaped Around Your Industry</span></h1>
        <p>Every industry has different operational realities, technology priorities and business challenges. GulfStream combines Cloud, AI, IT and technology talent to help organizations build, modernize and operate technology around the way their business works.</p>
        <div className="hero-actions"><Link href="/contact" className="btn btn-primary btn-lg">Talk to a Technology Expert</Link><Link href="/services" className="btn btn-cta-white btn-lg"><span className="gradient-text">Explore Our Services</span></Link></div>
      </div></section>



      <section className="section" id="industry-solutions" style={{ background: 'var(--dark-surface)' }} aria-labelledby="industry-solutions-heading"><div className="container">
        <div className="section-header"><div className="badge badge-primary">INDUSTRIES WE SERVE</div><h2 id="industry-solutions-heading" className="display-md">Industry expertise connected to business outcomes.</h2><p>Understand the challenge, apply the right GulfStream capability and move toward more reliable, scalable operations.</p></div>
        <div className="industry-card-grid">{industries.map((industry) => <IndustryCard industry={industry} key={industry.number} />)}</div>
      </div></section>

      <section className="section"><div className="container"><div className="cta-banner">
<h2 className="display-md">Technology decisions are better when they start with your business.</h2>
        <p>Tell us about your goals, challenges and current technology environment. We&apos;ll help identify where Cloud, AI, IT or technology talent can create the most value.</p>
        <div className="cta-actions"><Link href="/contact" className="btn btn-white btn-lg">Talk to a Technology Expert</Link><Link href="/services" className="btn-white-outline">Explore Our Services</Link></div>
      </div></div></section>
    </main>
  );
}
