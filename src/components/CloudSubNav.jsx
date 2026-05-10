'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cloudServices = [
  { name: 'AWS', href: '/services/cloud-managed-services/aws', iconSrc: '/assets/images/logo-aws.png', alt: 'AWS logo' },
  { name: 'Azure', href: '/services/cloud-managed-services/azure', iconSrc: '/assets/images/logo-azure.png', alt: 'Azure logo' },
  { name: 'Oracle Cloud', href: '/services/cloud-managed-services/oracle', iconSrc: '/assets/images/logo-oracle.png', alt: 'Oracle Cloud logo' },
  { name: 'Google Cloud', href: '/services/cloud-managed-services/google', iconSrc: '/assets/images/logo-gcp.png', alt: 'Google Cloud logo' },
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
              <span className="cloud-subnav-icon">
                <Image src={svc.iconSrc} alt={svc.alt} width={24} height={24} />
              </span>
              {svc.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CloudSubNav;
