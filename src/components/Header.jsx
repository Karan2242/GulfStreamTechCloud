'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeMobileNav = (e) => {
      if (isMobileOpen && !e.target.closest('.navbar') && !e.target.closest('.nav-links') && !e.target.closest('.nav-cta')) {
        setIsMobileOpen(false);
      }
    };

    let rafId;
    if (isMobileOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY);
      rafId = requestAnimationFrame(() => {
        document.body.classList.add('nav-mobile-open');
        document.documentElement.classList.add('nav-mobile-open');
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.scrollTop = 0;
      });
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
      document.body.classList.remove('nav-mobile-open');
      document.documentElement.classList.remove('nav-mobile-open');
      document.documentElement.style.removeProperty('--scroll-y');
      window.scrollTo(0, scrollY);
    }

    document.addEventListener('click', closeMobileNav);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('click', closeMobileNav);

      if (isMobileOpen) {
        const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
        document.body.classList.remove('nav-mobile-open');
        document.documentElement.classList.remove('nav-mobile-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      }
    };
  }, [isMobileOpen]);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container-wide">
        <Link href="/" className="nav-logo">
          <Image src={logo} alt="GulfStream Technologies" className="nav-logo-img" priority />
          <span className="brand">GulfStream Technologies</span>
        </Link>

        <div className="nav-links">
          <div className={`nav-dropdown ${activeDropdown === 'services' ? 'expanded' : ''}`}>
            <Link
              href="/services"
              className={`nav-link nav-dropdown-toggle ${isActive('/services') ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  if (activeDropdown !== 'services') {
                    e.preventDefault();
                    setActiveDropdown('services');
                  }
                }
              }}
            >
              Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="dropdown-menu">
              <div className="dropdown-submenu">
                <Link href="/services/cloud-managed-services" className={`dropdown-item dropdown-submenu-toggle ${pathname.startsWith('/services/cloud-managed-services') ? 'active' : ''}`}>
                  <span><span className="item-icon">🌐</span>Managed Cloud Services</span>
                  <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"></polyline></svg>
                </Link>
                <div className="dropdown-submenu-menu">
                  <Link href="/services/cloud-managed-services/aws" className={`dropdown-item ${pathname === '/services/cloud-managed-services/aws' ? 'active' : ''}`}><span className="item-icon">☁️</span>AWS Managed Services</Link>
                  <Link href="/services/cloud-managed-services/azure" className={`dropdown-item ${pathname === '/services/cloud-managed-services/azure' ? 'active' : ''}`}><span className="item-icon">🔷</span>Azure Managed Services</Link>
                  <Link href="/services/cloud-managed-services/oracle" className={`dropdown-item ${pathname === '/services/cloud-managed-services/oracle' ? 'active' : ''}`}><span className="item-icon">🔴</span>Oracle Cloud Services</Link>
                  <Link href="/services/cloud-managed-services/google" className={`dropdown-item ${pathname === '/services/cloud-managed-services/google' ? 'active' : ''}`}><span className="item-icon">🟢</span>Google Cloud Services</Link>
                </div>
              </div>
              <Link href="/services/finops-cost-optimization" className={`dropdown-item ${pathname === '/services/finops-cost-optimization' ? 'active' : ''}`}><span className="item-icon">📊</span>FinOps &amp; Cost Optimization</Link>
              <Link href="/services/cloud-billing-management" className={`dropdown-item ${pathname === '/services/cloud-billing-management' ? 'active' : ''}`}><span className="item-icon">🧾</span>Cloud Billing Management</Link>
              <Link href="/services/cloud-migration" className={`dropdown-item ${pathname === '/services/cloud-migration' ? 'active' : ''}`}><span className="item-icon">🚀</span>Cloud Migration</Link>
              <Link href="/services/cloud-security-governance" className={`dropdown-item ${pathname === '/services/cloud-security-governance' ? 'active' : ''}`}><span className="item-icon">🔒</span>Cloud Security &amp; Governance</Link>
            </div>
          </div>
          <div className={`nav-dropdown ${activeDropdown === 'industries' ? 'expanded' : ''}`}>
            <Link
              href="/industries"
              className={`nav-link nav-dropdown-toggle ${isActive('/industries') ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  if (activeDropdown !== 'industries') {
                    e.preventDefault();
                    setActiveDropdown('industries');
                  }
                }
              }}
            >
              Industries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="dropdown-menu">
              <Link href="/industries/retail" className={`dropdown-item ${pathname === '/industries/retail' ? 'active' : ''}`}><span className="item-icon">🛒</span>Retail</Link>
              <Link href="/industries/healthcare" className={`dropdown-item ${pathname === '/industries/healthcare' ? 'active' : ''}`}><span className="item-icon">🏥</span>Healthcare</Link>
              <Link href="/industries/logistics" className={`dropdown-item ${pathname === '/industries/logistics' ? 'active' : ''}`}><span className="item-icon">🚛</span>Logistics</Link>
              <Link href="/industries/tech-saas" className={`dropdown-item ${pathname === '/industries/tech-saas' ? 'active' : ''}`}><span className="item-icon">💻</span>Technology / SaaS</Link>
              <Link href="/industries/professional-services" className={`dropdown-item ${pathname === '/industries/professional-services' ? 'active' : ''}`}><span className="item-icon">🏢</span>Professional Services</Link>
            </div>
          </div>
          <Link href="/case-studies" className={`nav-link ${pathname === '/case-studies' ? 'active' : ''}`}>Case Studies</Link>
          <Link href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          <Link href="/insights" className={`nav-link ${pathname === '/insights' ? 'active' : ''}`}>Insights</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>

        <div className="nav-cta">
          <Link href="/contact" className="btn btn-outline btn-sm">Contact</Link>
          <Link href="/book-a-review" className="btn btn-primary btn-sm">Book Free Review</Link>
        </div>

        <button className="nav-toggle" id="navToggle" aria-label="Open menu" onClick={toggleMobileNav}>
          <span style={isMobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={isMobileOpen ? { opacity: '0' } : {}}></span>
          <span style={isMobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
