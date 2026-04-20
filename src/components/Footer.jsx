import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ marginBottom: 0 }}>
              <Image src={logo} alt="GulfStream Technologies Logo" className="nav-logo-img" />
              <span className="brand">GulfStream Technologies</span>
            </Link>
            <p>Multi-Cloud Managed Services &mdash; AWS, Azure, GCP &amp; OCI &mdash; for Saudi enterprises. Optimize, secure, and scale your cloud with confidence.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/gulfstream-technology" className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://x.com/GulfStreamTech" className="social-btn" title="Twitter / X" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://www.youtube.com/@GulfStreamTechnology" className="social-btn" title="YouTube" target="_blank" rel="noopener noreferrer">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><Link href="/services/cloud-managed-services">Cloud Managed Services</Link></li>
              <li><Link href="/services/finops-cost-optimization">FinOps &amp; Cost Optimization</Link></li>
              <li><Link href="/services/cloud-billing-management">Cloud Billing Management</Link></li>
              <li><Link href="/services/cloud-migration">Cloud Migration</Link></li>
              <li><Link href="/services/cloud-security-governance">Cloud Security &amp; Governance</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/book-a-review">Book a Review</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-links">
              <li><a href="mailto:sales@gulfstreamtech.com.sa">sales@gulfstreamtech.com.sa</a></li>
              <li><a href="tel:+966053201917">+966 (0) 53 201 917</a></li>
              <li><span>6526 At Takhassusi Road Almathar Ash Shamali District Central Province, Riyadh 12332, Saudi Arabia</span></li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <Link href="/book-a-review" className="btn btn-primary btn-sm w-full" style={{ justifyContent: 'center' }}>Book Free Review</Link>
            </div>
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
