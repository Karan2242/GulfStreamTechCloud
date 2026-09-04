import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const footerServices = [
  {
    title: 'Cloud Services',
    href: '/services',
    links: [
      { label: 'Managed Cloud Services', href: '/services/cloud-managed-services' },
      { label: 'Cloud Migration', href: '/services/cloud-migration' },
      { label: 'Cloud Security & Governance', href: '/services/cloud-security-governance' },
      { label: 'FinOps & Cost Optimization', href: '/services/finops-cost-optimization' },
      { label: 'Cloud Billing Management', href: '/services/cloud-billing-management' },
    ],
  },
  {
    title: 'AI Services',
    href: '/ai-services',
    links: [
      { label: 'AI Use Case Discovery', href: '/ai-services/ai-use-case-discovery' },
      { label: 'Custom AI Applications', href: '/ai-services/custom-ai-applications' },
      { label: 'Data Engineering & BI', href: '/ai-services/data-engineering-bi' },
      { label: 'Automation Services', href: '/ai-services/automation-services' },
      { label: 'AI Governance & Security', href: '/ai-services/ai-governance-security' },
    ],
  },
  {
    title: 'IT Services',
    href: '/it-services',
    links: [
      { label: 'Managed IT Support', href: '/it-services/managed-it-support' },
      { label: 'Networking & Infrastructure', href: '/it-services/networking-infrastructure' },
      { label: 'Servers & Virtualization', href: '/it-services/on-prem-servers-virtualization' },
      { label: 'Backup & Disaster Recovery', href: '/it-services/backup-disaster-recovery' },
      { label: 'Cybersecurity', href: '/it-services/cybersecurity-smb' },
      { label: 'IT Projects & Deployments', href: '/it-services/it-projects-deployments' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <Image src={logo} alt="GulfStream Technologies" className="nav-logo-img" />
              <span className="brand">GulfStream Technologies</span>
            </Link>
            <p style={{ fontSize: '0.8rem' }}>One technology partner across Cloud, AI, IT and technology talent. GulfStream Technologies helps organizations modernize technology, adopt practical AI, strengthen IT operations and access specialized technology professionals.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/gulfstream-technology" className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://x.com/GulfStreamTech" className="social-btn" title="Twitter / X" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://www.youtube.com/@GulfStreamTechnology" className="social-btn" title="YouTube" target="_blank" rel="noopener noreferrer">▶</a>
            </div>
          </div>
          <div className="footer-col footer-services-col">
            <h5>Services</h5>
            <div className="footer-service-groups">
              {footerServices.map((service) => (
                <section key={service.href} className="footer-service-group" aria-labelledby={`footer-service-${service.title}`}>
                  <h6 id={`footer-service-${service.title}`}><Link href={service.href}>{service.title}</Link></h6>
                  <ul className="footer-links">
                    {service.links.map((link) => (
                      <li key={`${service.title}-${link.label}`}><Link href={link.href}>{link.label}</Link></li>
                    ))}
                  </ul>
                </section>
              ))}
              <section className="footer-service-group footer-company-group">
                <h6>Company</h6>
                <ul className="footer-links">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/insights">Insights</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/book-a-review">Book a Review</Link></li>
                </ul>
              </section>
              <section className="footer-service-group footer-contact-group">
                <h6>Contact</h6>
                <ul className="footer-links">
                  <li><a href="mailto:sales@gulfstreamtech.com.sa">sales@gulfstreamtech.com.sa</a></li>
                  <li><a href="tel:+966532019172">+966 53 201 9172</a></li>
                  <li className="footer-address"><p style={{ fontSize: '0.8rem' }}>Riyadh, Saudi Arabia</p></li>
                </ul>
              </section>
            </div>
            <section className="footer-manpower-row">
              <h6><Link href="/manpower-services">Manpower Services</Link></h6>
            </section>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 GulfStream Technologies. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/cookie-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
