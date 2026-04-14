'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';

const platforms = [
  {
    id: 'aws',
    name: 'AWS',
    fullName: 'AWS Managed Services',
    href: '/services/cloud-managed-services/aws',
    logo: '/assets/images/logo-aws.png',
    description: 'Complete management of your Amazon Web Services environment — from EC2, RDS, and EKS to Lambda, S3, and CloudFront. Our certified AWS architects deliver 24/7 operations, cost optimization, and security governance for enterprises across Riyadh, Jeddah, and Dammam.',
    services: [
      'EC2 & Auto Scaling Management',
      'RDS & Aurora Database Ops',
      'EKS Container Orchestration',
      'Lambda Serverless Operations',
      'S3 & CloudFront CDN',
      'IAM & Security Hub Governance',
      'Cost Explorer & FinOps',
      'CloudWatch Monitoring',
    ],
  },
  {
    id: 'azure',
    name: 'Azure',
    fullName: 'Azure Managed Services',
    href: '/services/cloud-managed-services/azure',
    logo: '/assets/images/logo-azure.png',
    description: 'Full lifecycle management of Microsoft Azure — VMs, AKS, Azure SQL, Entra ID, and Defender for Cloud. We provide enterprise governance, hybrid cloud integration, and FinOps cost optimization tailored to Saudi enterprises.',
    services: [
      'Virtual Machines & Scale Sets',
      'AKS Container Management',
      'Azure SQL & Cosmos DB',
      'Entra ID & Access Management',
      'Defender for Cloud Security',
      'Azure DevOps Pipelines',
      'Cost Management & Advisor',
      'Azure Monitor & Alerts',
    ],
  },
  {
    id: 'oracle',
    name: 'Oracle Cloud',
    fullName: 'Oracle Cloud Managed Services',
    href: '/services/cloud-managed-services/oracle',
    logo: '/assets/images/logo-oracle.png',
    description: 'Enterprise Oracle Cloud Infrastructure management — OCI Compute, Autonomous Database, networking, and security. Optimized for performance, cost efficiency, and mission-critical workloads running in the Kingdom of Saudi Arabia.',
    services: [
      'OCI Compute & Block Storage',
      'Autonomous Database Management',
      'Exadata Cloud Operations',
      'OCI Networking & Load Balancers',
      'Identity & Access Management',
      'Cloud Guard Security',
      'Cost Analysis & Optimization',
      'Performance Monitoring',
    ],
  },
  {
    id: 'google',
    name: 'Google Cloud',
    fullName: 'Google Cloud Managed Services',
    href: '/services/cloud-managed-services/google',
    logo: '/assets/images/logo-gcp.png',
    description: 'Comprehensive Google Cloud Platform management — GKE, BigQuery, Cloud Run, and Cloud SQL. We bring FinOps-driven cost governance, 24/7 operations, and data analytics expertise to Saudi enterprises in Riyadh and beyond.',
    services: [
      'GKE Kubernetes Management',
      'BigQuery & Data Analytics',
      'Cloud Run & Functions',
      'Cloud SQL & Spanner',
      'VPC & Network Security',
      'IAM & Security Command Center',
      'Billing & Cost Management',
      'Cloud Monitoring & Logging',
    ],
  },
];

const PlatformSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const active = platforms[activeIndex];

  return (
    <section className="section" style={{ background: 'var(--dark-surface)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="badge badge-accent">☁️ Platforms</div>
          <h2 className="display-md">Choose Your Cloud Platform</h2>
          <p>We provide expert managed cloud services across the four leading platforms, tailored to enterprise requirements in Saudi Arabia.</p>
        </div>

        <div className="platform-tabs reveal">
          {platforms.map((p, i) => (
            <button
              key={p.id}
              className={`platform-tab${i === activeIndex ? ' active' : ''}`}
              onClick={() => handleTabClick(i)}
              type="button"
              aria-selected={i === activeIndex}
            >
              <img src={p.logo} alt={p.name} className="platform-tab-logo" width={24} height={24} loading="lazy" />
              {p.name}
            </button>
          ))}
        </div>

        <div className="platform-panel active reveal" key={active.id}>
          <div className="platform-panel-info">
            <h3>{active.fullName}</h3>
            <p>{active.description}</p>
            <ul className="platform-services-list">
              {active.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link href={active.href} className="btn btn-primary">
              Explore {active.name} Services →
            </Link>
          </div>
          <div className="platform-panel-visual">
            <div className="platform-logo-showcase">
              <img src={active.logo} alt={`${active.name} logo`} width={120} height={120} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;
