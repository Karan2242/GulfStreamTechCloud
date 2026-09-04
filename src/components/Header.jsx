'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { NAV_SERVICES } from './navConfig';

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
            <button
              className={`nav-link nav-dropdown-toggle ${isActive('/services') ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'services'}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                }
              }}
              onMouseEnter={() => { if (window.innerWidth > 768) setActiveDropdown('services'); }}
              onMouseLeave={() => { if (window.innerWidth > 768) setActiveDropdown(null); }}
            >
              Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div 
              className="dropdown-menu" 
              role="menu"
              onMouseLeave={() => { if (window.innerWidth > 768) setActiveDropdown(null); }}
            >
              {NAV_SERVICES.map((category) => (
                <div key={category.label}>
                  {category.submenu && !category.href ? (
                    // Category without href (e.g., Cloud Services) - submenu opener only
                    <div className="dropdown-submenu">
                      <div className={`dropdown-item dropdown-submenu-toggle`} style={{ cursor: 'default', opacity: 0.9 }}>
                        <span>{category.label}</span>
                        <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"></polyline></svg>
                      </div>
                      <div className="dropdown-submenu-menu">
                        {category.submenu.map((item) => (
                          <div key={item.label}>
                            {item.submenu ? (
                              // Item with nested submenu (e.g., Managed Cloud Services)
                              <div className="dropdown-submenu">
                                <Link
                                  href={item.href}
                                  className={`dropdown-item dropdown-submenu-toggle ${pathname === item.href || pathname.startsWith(item.href + '/') ? 'active' : ''}`}
                                >
                                  {item.icon && item.icon.startsWith('/') ? (
                                    <span className="item-icon">
                                      <Image src={item.icon} alt={item.label + ' logo'} width={18} height={18} />
                                    </span>
                                  ) : item.icon ? (
                                    <span className="item-icon">{item.icon}</span>
                                  ) : null}
                                  <span>{item.label}</span>
                                  <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"></polyline></svg>
                                </Link>
                                <div className="dropdown-submenu-menu">
                                  {item.submenu.map((subitem) => (
                                    <Link
                                      key={subitem.label}
                                      href={subitem.href}
                                      className={`dropdown-item ${pathname === subitem.href ? 'active' : ''}`}
                                    >
                                      {subitem.icon && subitem.icon.startsWith('/') ? (
                                        <span className="item-icon">
                                          <Image src={subitem.icon} alt={subitem.label + ' logo'} width={18} height={18} />
                                        </span>
                                      ) : subitem.icon ? (
                                        <span className="item-icon">{subitem.icon}</span>
                                      ) : null}
                                      {subitem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              // Item without nested submenu
                              <Link
                                href={item.href}
                                className={`dropdown-item ${pathname === item.href ? 'active' : ''}`}
                              >
                                {item.icon && item.icon.startsWith('/') ? (
                                  <span className="item-icon">
                                    <Image src={item.icon} alt={item.label + ' logo'} width={18} height={18} />
                                  </span>
                                ) : item.icon ? (
                                  <span className="item-icon">{item.icon}</span>
                                ) : null}
                                {item.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : category.external ? (
                    // External link
                    <a
                      href={category.href}
                      className="dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                    >
                      {category.label} {!category.noArrow && <span style={{ fontSize: '.9rem', marginLeft: '4px' }}>↗</span>}
                    </a>
                  ) : category.submenu && category.href ? (
                    // Category with both href and submenu (fallback for future use)
                    <div className="dropdown-submenu">
                      <Link 
                        href={category.href} 
                        className={`dropdown-item dropdown-submenu-toggle ${isActive(category.href) ? 'active' : ''}`}
                      >
                        <span>{category.label}</span>
                        <svg className="submenu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"></polyline></svg>
                      </Link>
                      <div className="dropdown-submenu-menu">
                        {category.submenu.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={`dropdown-item ${pathname === item.href ? 'active' : ''}`}
                          >
                            {item.icon && item.icon.startsWith('/') ? (
                              <span className="item-icon">
                                <Image src={item.icon} alt={item.label + ' logo'} width={18} height={18} />
                              </span>
                            ) : item.icon ? (
                              <span className="item-icon">{item.icon}</span>
                            ) : null}
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Simple link item
                    <Link href={category.href} className="dropdown-item" role="menuitem">{category.label}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>Industries</Link>
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
