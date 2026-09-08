import Link from 'next/link';
import ServicesFaq from './ServicesFaq';
import { businessOutcomes, coreCapabilities, differentiators, engagementModels, industries, lifecycleSteps } from './servicesData';

function SectionIntro({ eyebrow, title, description }) {
  return <div className="section-header"><div className="badge badge-primary">{eyebrow}</div><h2 className="display-md">{title}</h2>{description ? <p>{description}</p> : null}</div>;
}

function CapabilityCard({ capability }) {
  return <article className="card premium-card services-capability-card"><div className="services-capability-image"><img src={`/assets/images/${capability.image}`} alt={`${capability.title} illustration`} /></div><h3>{capability.title}</h3><h4>{capability.subheading}</h4><p>{capability.description}</p><ul className="check-list">{capability.services.map((service) => <li key={service}>{service}</li>)}</ul><p className="services-outcome">{capability.outcome}</p><Link className="text-link" href={capability.href}>Explore {capability.title} <span aria-hidden="true">→</span></Link></article>;
}

export default function ServicesIndexContent() {
  return <main className="services-page">
    <section className="page-hero services-hero"><div className="container" style={{ textAlign: 'left' }}>
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Services</span></nav>
      <h1 className="display-lg"><span className="text-gradient">Technology services built around your business needs</span></h1><p>GulfStream Technologies brings Cloud, AI, IT and technology talent together under one accountable partner. From strategy and implementation to managed operations and specialized expertise, we help organizations build, modernize and optimize technology with a clear focus on business outcomes.</p><div className="hero-actions"><Link href="/book-a-review" className="btn btn-primary btn-lg">Talk to a Technology Expert</Link><Link href="/contact" className="btn btn-outline btn-lg"style={{ backgroundColor: '#ffffff', color: '#0052CC', borderColor: 'rgba(0,0,0,0.08)' }}>Contact Us</Link></div>
    </div></section>

    <section className="section" id="core-capabilities" style={{ background: 'var(--dark-surface)' }}><div className="container"><SectionIntro eyebrow="FOUR CORE CAPABILITIES" title="One partner. Four connected capabilities." description="Modern technology initiatives rarely fit into a single category. Cloud supports applications and data, AI depends on strong technology foundations, IT keeps environments reliable and secure, and skilled people turn strategy into execution. GulfStream brings these capabilities together so organizations can move forward without stitching together multiple providers." /><div className="services-capability-grid">{coreCapabilities.map((capability) => <CapabilityCard key={capability.title} capability={capability} />)}</div></div></section>


    <section className="section"><div className="container"><SectionIntro eyebrow="BUSINESS OUTCOMES" title="Technology services focused on outcomes, not activity" /><div className="services-outcomes-grid">{businessOutcomes.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="section services-tone"><div className="container"><SectionIntro eyebrow="HOW WE HELP" title="From strategy to continuous optimization" description="GulfStream can engage at any stage of the technology lifecycle, from initial discovery through implementation, operations and optimization." /><div className="services-lifecycle">{lifecycleSteps.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>



    <section className="section"><div className="container"><SectionIntro eyebrow="WHY GULFSTREAM" title="One accountable partner across the technology lifecycle" /><div className="services-differentiators">{differentiators.map(([number, title, description]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>


    <section className="section services-tone"><div className="container"><SectionIntro eyebrow="FAQ" title="Questions about our services" /><ServicesFaq /></div></section>

    <section className="section"><div className="container"><div className="cta-banner"><h2 className="display-md">Let&apos;s turn your technology priorities into action.</h2><p>Whether you are modernizing infrastructure, exploring AI, improving IT operations or expanding technology capacity, GulfStream can help define the right next step.</p><div className="cta-actions"><Link href="/book-a-review" className="btn btn-white btn-lg">Talk to a Technology Expert</Link><Link href="/contact" className="btn-white-outline">Contact GulfStream</Link></div></div></div></section>
  </main>;
}
