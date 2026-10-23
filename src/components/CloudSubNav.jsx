'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cloudServices = [
  { name: 'AWS', href: '/cloud-services/cloud-managed-services/aws' },
  { name: 'Microsoft Cloud', href: '/cloud-services/cloud-managed-services/microsoft-cloud' },
  { name: 'Oracle Cloud', href: '/cloud-services/cloud-managed-services/oracle' },
  { name: 'Google Cloud', href: '/cloud-services/cloud-managed-services/google' },
];

const CloudSubNav = () => {
  const pathname = usePathname();

  return (
    <div className="cloud-subnav-wrapper" style={{ background: 'var(--dark-surface)' }} >
      <div className="container">
        <nav className="platform-tabs cloud-subnav" role="tablist" aria-label="Cloud platform navigation">
          {cloudServices.map((svc, index) => (
            <Link
              key={svc.href}
              href={svc.href}
              className={`platform-tab cloud-subnav-item${pathname === svc.href ? ' active' : ''}`}
            >
              <span className="platform-tab-index">0{index + 1}</span>
              {svc.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CloudSubNav;
