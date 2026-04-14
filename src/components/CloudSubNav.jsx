'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cloudServices = [
  { name: 'AWS', href: '/services/cloud-managed-services/aws', icon: '☁️' },
  { name: 'Azure', href: '/services/cloud-managed-services/azure', icon: '🔷' },
  { name: 'Oracle Cloud', href: '/services/cloud-managed-services/oracle', icon: '🔴' },
  { name: 'Google Cloud', href: '/services/cloud-managed-services/google', icon: '🟢' },
];

const CloudSubNav = () => {
  const pathname = usePathname();

  return (
    <div className="cloud-subnav-wrapper">
      <div className="container">
        <nav className="cloud-subnav">
          {cloudServices.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className={`cloud-subnav-item${pathname === svc.href ? ' active' : ''}`}
            >
              <span className="cloud-subnav-icon">{svc.icon}</span>
              {svc.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CloudSubNav;
