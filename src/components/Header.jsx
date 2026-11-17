'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { NAV_SERVICES } from './navConfig';

function ServiceMenuItem({ service, isActive, isExpanded, onToggle, onNavigate }) {
  const hasSubmenu = service.submenu?.length > 0;
  const panelId = `service-submenu-${service.href.replace(/[^a-z0-9]/gi, '-')}`;
  const icon = service.icon?.startsWith('/') ? (
    <span className="item-icon">
      <Image src={service.icon} alt="" width={18} height={18} />
    </span>
  ) : service.icon ? (
    <span className="item-icon" aria-hidden="true">{service.icon}</span>
  ) : null;

  return (
    <div className={`dropdown-submenu ${hasSubmenu && isExpanded ? 'expanded' : ''}`}>
      <div className="dropdown-submenu-heading">
        <Link
          href={service.href}
          className={`dropdown-item${isActive(service.href) ? ' active' : ''}`}
          aria-current={isActive(service.href) ? 'page' : undefined}
          onClick={onNavigate}
        >
          {icon}
          <span>{service.label}</span>
        </Link>
        {hasSubmenu && (
          <button
            className="dropdown-submenu-toggle"
            type="button"
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${service.label} links`}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={() => onToggle(service.href)}
          >
            <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
      {hasSubmenu && (
        <div className="dropdown-submenu-menu" id={panelId} hidden={!isExpanded}>
          {service.submenu.map((child) => (
            <ServiceMenuItem
              key={child.label}
              service={child}
              isActive={isActive}
              isExpanded={false}
              onToggle={onToggle}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const headerRef = useRef(null);
  const menuToggleRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 30);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false);
    setExpandedService(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    };
    const closeAtDesktopBreakpoint = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setIsMenuOpen(false);
    };

    document.addEventListener('click', closeOnOutsideClick);
    window.addEventListener('resize', closeAtDesktopBreakpoint);
    return () => {
      document.removeEventListener('click', closeOnOutsideClick);
      window.removeEventListener('resize', closeAtDesktopBreakpoint);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    scrollPositionRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
    document.body.classList.add('nav-mobile-open');
    document.documentElement.classList.add('nav-mobile-open');

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('nav-mobile-open');
      document.documentElement.classList.remove('nav-mobile-open');
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setIsServicesExpanded(false);
        setExpandedService(null);
        menuToggleRef.current?.focus();
      } else if (expandedService) {
        setExpandedService(null);
      } else if (isServicesExpanded) {
        setIsServicesExpanded(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [expandedService, isMenuOpen, isServicesExpanded]);

  const isActive = (path) => path === '/'
    ? pathname === '/'
    : pathname === path || pathname.startsWith(`${path}/`);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false);
    setExpandedService(null);
  };

  return (
    <nav ref={headerRef} className={`navbar${isScrolled ? ' scrolled' : ''}`} id="navbar" aria-label="Main navigation">
      <div className="container-wide">
        <Link href="/" className="nav-logo" aria-label="GulfStream Technologies home">
          <Image src="/assets/logo.png" alt="" className="nav-logo-img" width={2000} height={2000} priority />
          <span className="brand">{siteConfig.name}</span>
        </Link>

        <div
          className={`nav-links${isMenuOpen ? ' menu-open' : ''}`}
          id="mobile-navigation"
        >
          <div
            className={`nav-dropdown services-nav-dropdown${isServicesExpanded ? ' expanded' : ''}`}
          >
            <div className="services-nav-heading">
              <Link
                href="/services"
                className={`nav-link services-direct-link${isActive('/services') ? ' active' : ''}`}
                aria-current={isActive('/services') ? 'page' : undefined}
                onClick={closeMenus}
              >
                Services
              </Link>
              <button
                className={`nav-link nav-dropdown-toggle${NAV_SERVICES.some((service) => isActive(service.href)) ? ' active' : ''}`}
                style={{ display: 'inline-flex' }}
                type="button"
                aria-label={`${isServicesExpanded ? 'Collapse' : 'Expand'} Services menu`}
                aria-haspopup="true"
                aria-expanded={isServicesExpanded}
                aria-controls="services-menu"
                onClick={() => setIsServicesExpanded((expanded) => !expanded)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="dropdown-menu" id="services-menu" hidden={!isServicesExpanded}>
              {NAV_SERVICES.map((service) => (
                <ServiceMenuItem
                  key={service.label}
                  service={service}
                  isActive={isActive}
                  isExpanded={expandedService === service.href}
                  onToggle={(href) => setExpandedService((current) => current === href ? null : href)}
                  onNavigate={closeMenus}
                />
              ))}
            </div>
          </div>
          <Link href="/industries" className={`nav-link${isActive('/industries') ? ' active' : ''}`} aria-current={isActive('/industries') ? 'page' : undefined} onClick={closeMenus}>Industries</Link>
          <Link href="/insights" className={`nav-link${isActive('/insights') ? ' active' : ''}`} aria-current={isActive('/insights') ? 'page' : undefined} onClick={closeMenus}>Insights</Link>
          <Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`} aria-current={isActive('/about') ? 'page' : undefined} onClick={closeMenus}>About</Link>
        </div>

        <div className="nav-cta">
          <Link href={siteConfig.cta.secondary.href} className="btn btn-outline btn-sm nav-secondary-cta" onClick={closeMenus}>
            {siteConfig.cta.secondary.label}
          </Link>
          <Link href={siteConfig.cta.primary.href} className="btn btn-primary btn-sm nav-primary-cta" onClick={closeMenus}>
            {siteConfig.cta.primary.label}
          </Link>
        </div>

        <button
          ref={menuToggleRef}
          className="nav-toggle"
          id="navToggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={isMenuOpen ? 'open-first' : ''} />
          <span className={isMenuOpen ? 'open-middle' : ''} />
          <span className={isMenuOpen ? 'open-last' : ''} />
        </button>
      </div>
    </nav>
  );
}
