// Data-driven navigation for Services dropdown
// Supports multi-level nested dropdowns
export const NAV_SERVICES = [
  {
    label: 'Cloud Services',
    href: '/cloud-services',
    submenu: [
      {
        label: 'Managed Cloud Services',
        href: '/cloud-services/cloud-managed-services',
        icon: '🌐',
      },
      {
        label: 'Cloud FinOps Optimization',
        href: '/cloud-services/finops-cost-optimization',
        icon: '📊',
      },
      {
        label: 'Cloud Billing Management',
        href: '/cloud-services/cloud-billing-management',
        icon: '🧾',
      },
      {
        label: 'Cloud Migration',
        href: '/cloud-services/cloud-migration',
        icon: '🚀',
      },
      {
        label: 'Cloud Security & Governance',
        href: '/cloud-services/cloud-security-governance',
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
  {
    label: 'Manpower Services',
    href: '/manpower-services',
  },
];
