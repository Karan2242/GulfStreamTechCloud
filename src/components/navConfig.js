// Data-driven navigation for Services dropdown
// Supports multi-level nested dropdowns
export const NAV_SERVICES = [
  {
    label: 'Cloud Services',
    href: '/services',
    submenu: [
      {
        label: 'Managed Cloud Services',
        href: '/services/cloud-managed-services',
        icon: '🌐',
        // Optional: Can have nested submenu for platform-specific services
        submenu: [
          {
            label: 'AWS Managed Services',
            href: '/services/cloud-managed-services/aws',
            icon: '/assets/images/logo-aws.png',
          },
          {
            label: 'Microsoft Cloud',
            href: '/services/cloud-managed-services/microsoft-cloud',
            icon: '/assets/images/logo-microsoft-365.png',
          },
          {
            label: 'Oracle Cloud Services',
            href: '/services/cloud-managed-services/oracle',
            icon: '/assets/images/logo-oracle.png',
          },
          {
            label: 'Google Cloud Services',
            href: '/services/cloud-managed-services/google',
            icon: '/assets/images/logo-gcp.png',
          },
        ],
      },
      {
        label: 'Cloud FinOps Optimization',
        href: '/services/finops-cost-optimization',
        icon: '📊',
      },
      {
        label: 'Cloud Billing Management',
        href: '/services/cloud-billing-management',
        icon: '🧾',
      },
      {
        label: 'Cloud Migration',
        href: '/services/cloud-migration',
        icon: '🚀',
      },
      {
        label: 'Cloud Security & Governance',
        href: '/services/cloud-security-governance',
        icon: '🔒',
      },
    ],
  },
  {
    label: 'AI Services',
    href: 'https://gulfstreamtech.sa',
    external: true,
    noArrow: true,
  },
  {
    label: 'IT Solutions Services',
    href: 'https://gulfstreamtech.net',
    external: true,
    noArrow: true,
  },
];
