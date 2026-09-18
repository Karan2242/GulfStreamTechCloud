'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NAV_SERVICES } from './navConfig';
import { siteConfig } from '@/config/siteConfig';

function ServiceMenuItem({ service, isActive }) {
  const hasSubmenu = service.submenu?.length > 0;
  const itemClassName = `dropdown-item ${isActive(service.href) ? 'active' : ''}`;
  const icon = service.icon?.startsWith('/') ? (
    <span className="item-icon">
      <Image src={service.icon} alt="" width={18} height={18} />
    </span>
  ) : service.icon ? (
    <span className="item-icon" aria-hidden="true">{service.icon}</span>
  ) : null;

  if (!hasSubmenu) {
    return (
      <Link href={service.href} className={itemClassName} role="menuitem">
        {icon}
        <span>{service.label}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown-submenu">
      <Link
        href={service.href}
        className={`${itemClassName} dropdown-submenu-toggle`}
        role="menuitem"
      >
        {icon}
        <span>{service.label}</span>
        <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="9 6 15 12 9 18"></polyline>
        </svg>
      </Link>
      <div className="dropdown-submenu-menu">
        {service.submenu.map((child) => (
          <ServiceMenuItem key={child.label} service={child} isActive={isActive} />
        ))}
      </div>
    </div>
  );
}

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navToggleRef = useRef(null);
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

  const handleMobileNavKeyDown = (event) => {
    if (event.key === 'Escape' && isMobileOpen) {
      setIsMobileOpen(false);
      navToggleRef.current?.focus();
    }
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
          <Image src="/assets/logo.png" alt="GulfStream Technologies" className="nav-logo-img" width={2000} height={2000} priority />
          <span className="brand">{siteConfig.name}</span>
        </Link>

        <div className="nav-links" id="mobile-navigation" onKeyDown={handleMobileNavKeyDown}>
          <div
            className={`nav-dropdown services-nav-dropdown ${activeDropdown === 'services' ? 'expanded' : ''}`}
            onMouseEnter={() => { if (window.innerWidth > 768) setActiveDropdown('services'); }}
            onMouseLeave={() => { if (window.innerWidth > 768) setActiveDropdown(null); }}
          >
            <Link
              href="/services"
              className={`nav-link services-direct-link ${isActive('/services') ? 'active' : ''}`}
            >
              Services
            </Link>
            <button
              className={`nav-link nav-dropdown-toggle ${isActive('/cloud-services') || isActive('/ai-services') || isActive('/it-services') || isActive('/manpower-services') ? 'active' : ''}`}
              type="button"
              aria-label="Open Services menu"
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'services'}
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                }
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div
              className="dropdown-menu"
              role="menu"
            >
              {NAV_SERVICES.map((service) => (
                <ServiceMenuItem key={service.label} service={service} isActive={isActive} />
              ))}
            </div>
          </div>
          <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>Industries</Link>
          <Link href="/insights" className={`nav-link ${pathname === '/insights' ? 'active' : ''}`}>Insights</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>

        <div className="nav-cta">
          <Link href={siteConfig.cta.secondary.href} className="btn btn-outline btn-sm">{siteConfig.cta.secondary.label}</Link>
          <Link href={siteConfig.cta.primary.href} className="btn btn-primary btn-sm">{siteConfig.cta.primary.label}</Link>
        </div>

        <button
          ref={navToggleRef}
          className="nav-toggle"
          id="navToggle"
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isMobileOpen}
          onClick={toggleMobileNav}
          onKeyDown={handleMobileNavKeyDown}
        >
          <span style={isMobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={isMobileOpen ? { opacity: '0' } : {}}></span>
          <span style={isMobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
