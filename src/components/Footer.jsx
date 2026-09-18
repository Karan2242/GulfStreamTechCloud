import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { NAV_SERVICES } from './navConfig';

const footerServices = NAV_SERVICES
  .filter((service) => service.submenu?.length)
  .map((service) => ({
    title: service.label,
    href: service.href,
    links: service.submenu.map(({ label, href }) => ({ label, href })),
  }));

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <Image src="/assets/logo.png" alt="GulfStream Technologies" className="nav-logo-img" width={2000} height={2000} />
              <span className="brand">{siteConfig.name}</span>
            </Link>
            <p style={{ fontSize: '0.8rem' }}>One technology partner across Cloud, AI, IT and technology talent. GulfStream Technologies helps organizations modernize technology, adopt practical AI, strengthen IT operations and access specialized technology professionals.</p>
            <div className="footer-social">
              <a href={siteConfig.social.linkedin} className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href={siteConfig.social.x} className="social-btn" title="Twitter / X" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href={siteConfig.social.youtube} className="social-btn" title="YouTube" target="_blank" rel="noopener noreferrer">▶</a>
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
                  <li><a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a></li>
                  <li><a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a></li>
                  <li className="footer-address"><p style={{ fontSize: '0.8rem' }}>{siteConfig.headquarters.city}, {siteConfig.headquarters.country}</p></li>
                </ul>
              </section>
            </div>
            <section className="footer-manpower-row">
              <h6><Link href="/manpower-services">Manpower Services</Link></h6>
            </section>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 {siteConfig.name}. All rights reserved.</div>
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
