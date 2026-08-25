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
    href: '/ai-services',
    submenu: [
      { label: 'AI Use-Case Discovery Workshop', href: '/ai-services/ai-use-case-discovery', icon: '🧭' },
      { label: 'Custom AI Applications', href: '/ai-services/custom-ai-applications', icon: '🤖' },
      { label: 'Data Engineering & BI', href: '/ai-services/data-engineering-bi', icon: '📊' },
      { label: 'Automation Services', href: '/ai-services/automation-services', icon: '⚙️' },
      { label: 'AI Governance & Security', href: '/ai-services/ai-governance-security', icon: '🛡️' },
    ],
  },
  {
    label: 'IT Services',
    href: '/it-services',
    submenu: [
      { label: 'Managed IT Support in Saudi Arabia', href: '/it-services/managed-it-support', icon: '🛠️' },
      { label: 'Networking & Infrastructure Services', href: '/it-services/networking-infrastructure', icon: '🌐' },
      { label: 'On-Prem Servers & Virtualization', href: '/it-services/on-prem-servers-virtualization', icon: '🖥️' },
      { label: 'Backup & Disaster Recovery', href: '/it-services/backup-disaster-recovery', icon: '💾' },
      { label: 'Cybersecurity Essentials for SMB', href: '/it-services/cybersecurity-smb', icon: '🔐' },
      { label: 'IT Projects & Deployments', href: '/it-services/it-projects-deployments', icon: '🚀' },
    ],
  },
];
