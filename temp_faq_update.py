import os
import re

root = r'C:\Users\Pramod Deshpande\Desktop\website-nextjs'

replacements = {
    r'src\components\pages\AboutContent.jsx': '''  const aboutFaqs = [
    {
      question: 'What are Managed Cloud Services?',
      answer: 'Managed Cloud Services mean outsourcing cloud operations, monitoring, security, and optimization to specialists so your team can focus on business outcomes.',
    },
    {
      question: 'How much do your cloud services cost in Saudi Arabia?',
      answer: 'Costs depend on environment size, platform mix, and support level. We offer flexible packages with clear ROI and a free assessment to provide a tailored quote.',
    },
    {
      question: 'How quickly can you deliver results?',
      answer: 'Most clients see measurable cost savings and improved cloud stability within 60-90 days after engagement.',
    },
    {
      question: 'Do you support multi-cloud and hybrid environments?',
      answer: 'Yes. We manage AWS, Azure, Google Cloud, Oracle Cloud, and hybrid on-premises/cloud environments with unified governance.',
    },
    {
      question: 'Why choose GulfStream Technologies over other providers?',
      answer: 'A local Saudi team of certified multi-cloud engineers, FinOps focus, and transparent delivery helps enterprises achieve faster savings and stronger compliance.',
    },
  ];''',
    r'src\components\pages\BookReviewContent.jsx': '''  const bookReviewFaqs = [
    {
      question: 'What is included in the free cloud review?',
      answer: 'The review includes a cost analysis, security posture check, operational assessment, and a practical optimization roadmap delivered within five business days.',
    },
    {
      question: 'Is the cloud review really free?',
      answer: 'Yes. The cloud review is free with no obligation, and you keep the full report and savings recommendations regardless of engagement.',
    },
    {
      question: 'How long does the assessment take?',
      answer: 'The assessment typically completes in 3-5 business days after the initial discovery call, with a live findings presentation included.',
    },
    {
      question: 'Which cloud platforms do you assess?',
      answer: 'We assess AWS, Azure, Google Cloud, and Oracle Cloud environments, including single-cloud and multi-cloud estates.',
    },
    {
      question: 'Will I receive a cost savings report?',
      answer: 'Yes. You receive a detailed savings report showing expected cost reductions and practical actions to secure immediate ROI.',
    },
  ];''',
    r'src\components\pages\CaseStudiesContent.jsx': '''  const caseStudiesFaqs = [
    {
      question: 'What results do GulfStream clients achieve?',
      answer: 'Clients typically achieve 25-35% cloud cost reduction, 99.99% uptime, and stronger operational visibility within months of engagement.',
    },
    {
      question: 'How quickly can cloud transformation deliver value?',
      answer: 'Most enterprises see measurable results in 60-90 days, with early wins from cost and performance optimization.',
    },
    {
      question: 'Which industries do you serve with cloud services?',
      answer: 'We support retail, healthcare, SaaS, logistics, government, and professional services clients across Saudi Arabia.',
    },
    {
      question: 'Do you support multi-cloud or hybrid environments?',
      answer: 'Yes. We manage AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments with a unified operations model.',
    },
    {
      question: 'Why choose GulfStream for enterprise cloud transformation?',
      answer: 'We combine local Saudi expertise, multi-cloud certifications, and a measurable ROI approach focused on cost savings and compliance.',
    },
  ];''',
    r'src\components\pages\ContactContent.jsx': '''  const contactFaqs = [
    {
      question: 'Do you offer a free cloud consultation?',
      answer: 'Yes. Every new enquiry includes a free cloud consultation and assessment to identify savings, security gaps, and operational improvements.',
    },
    {
      question: 'How quickly do you respond to enquiries?',
      answer: 'We respond within four business hours on working days, and existing clients receive priority support through our 24/7 operations team.',
    },
    {
      question: 'Which cloud platforms do you support?',
      answer: 'We support AWS, Azure, Google Cloud, and Oracle Cloud, including single-cloud and multi-cloud enterprise environments.',
    },
    {
      question: 'Can you help reduce our cloud costs?',
      answer: 'Yes. Our managed services and FinOps teams regularly deliver 25-35% cost reduction for Saudi enterprises.',
    },
    {
      question: 'Do you support multi-cloud and hybrid environments?',
      answer: 'Yes. We help enterprises manage multi-cloud estates and hybrid on-premises environments with consistent governance and automation.',
    },
  ];''',
    r'src\components\pages\HomeContent.jsx': '''  const homeFaqs = [
    {
      question: 'What are Managed Cloud Services?',
      answer: 'Managed Cloud Services involve outsourcing cloud operations, security, monitoring, and optimization to certified experts.',
    },
    {
      question: 'How much can you save on cloud costs?',
      answer: 'Our clients typically save 25-35% on cloud spend through rightsizing, reserved capacity, and ongoing FinOps governance.',
    },
    {
      question: 'How quickly can you see results?',
      answer: 'Most organizations see measurable savings and stability improvements within 60-90 days of starting with us.',
    },
    {
      question: 'Do you support AWS, Azure, Google Cloud, and Oracle Cloud?',
      answer: 'Yes. We manage AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments with unified visibility and control.',
    },
    {
      question: 'Why choose GulfStream for cloud management in Saudi Arabia?',
      answer: 'A local Saudi team with multi-cloud certifications, FinOps expertise, and Saudi compliance experience delivers faster outcomes.',
    },
  ];''',
    r'src\components\pages\IndustriesIndexContent.jsx': '''  const industriesFaqs = [
    {
      question: 'Which industries do you support with cloud services?',
      answer: 'We support retail, healthcare, logistics, SaaS, and professional services enterprises across Saudi Arabia.',
    },
    {
      question: 'Do you manage multi-cloud environments for different industries?',
      answer: 'Yes. We build industry-specific cloud solutions across AWS, Azure, Google Cloud, Oracle Cloud, and hybrid environments.',
    },
    {
      question: 'How much can industry cloud services reduce costs?',
      answer: 'Industry clients typically save 25-35% on cloud costs through tailored FinOps and platform optimization.',
    },
    {
      question: 'How quickly can you start working with us?',
      answer: 'We can begin assessments and planning immediately, with the first improvement recommendations delivered within days.',
    },
    {
      question: 'Why choose GulfStream for Saudi enterprise cloud?',
      answer: 'Because we combine local Saudi expertise with certified multi-cloud engineering and industry-specific compliance experience.',
    },
  ];''',
    r'src\components\pages\InsightsContent.jsx': '''  const insightsFaqs = [
    {
      question: 'Who writes GulfStream cloud insights?',
      answer: 'Our insights are written by certified cloud architects and engineers with hands-on experience in enterprise AWS, Azure, Google Cloud, and Oracle Cloud projects.',
    },
    {
      question: 'Are these insights relevant to Saudi Arabia?',
      answer: 'Yes. Our content covers Saudi-specific cloud regulations, local region considerations, and enterprise requirements for Riyadh, Jeddah, and Dammam.',
    },
    {
      question: 'How can I get help beyond these articles?',
      answer: 'You can book a free cloud assessment or contact our team to turn the recommendations into a practical managed cloud engagement.',
    },
    {
      question: 'Do you offer managed services for cloud platforms?',
      answer: 'Yes. We provide managed services across AWS, Azure, Google Cloud, Oracle Cloud, and hybrid cloud environments.',
    },
    {
      question: 'Why choose GulfStream for cloud transformation?',
      answer: 'We focus on measurable outcomes, local Saudi support, multi-cloud expertise, and fast ROI from cost optimization and governance.',
    },
  ];''',
    r'src\components\pages\industries\HealthcareContent.jsx': '''  const healthcareFaqs = [
    {
      question: 'What is healthcare cloud infrastructure?',
      answer: 'Healthcare cloud infrastructure supports clinical applications, patient data, and compliance requirements with high availability and secure access.',
    },
    {
      question: 'How do you ensure healthcare compliance in Saudi Arabia?',
      answer: 'We build cloud environments aligned to NCA ECC, Saudi MOH, and healthcare data protection requirements with audit-ready governance.',
    },
    {
      question: 'Which cloud platforms do you support for healthcare?',
      answer: 'We support AWS, Azure, Google Cloud, and Oracle Cloud for healthcare workloads, including secure storage and compliant compute.',
    },
    {
      question: 'Can you reduce healthcare cloud costs?',
      answer: 'Yes. We reduce healthcare cloud costs through optimized storage, rightsizing, and FinOps practices while preserving compliance and uptime.',
    },
    {
      question: 'Why choose GulfStream for healthcare cloud in Saudi Arabia?',
      answer: 'We combine healthcare compliance experience with local Saudi cloud expertise and certified multi-cloud operations.',
    },
  ];''',
    r'src\components\pages\industries\LogisticsContent.jsx': '''  const logisticsFaqs = [
    {
      question: 'What is logistics cloud infrastructure?',
      answer: 'Logistics cloud infrastructure supports fleet management, IoT data, supply chain analytics, and warehouse systems with reliable, scalable operations.',
    },
    {
      question: 'Do you support logistics IoT and real-time data?',
      answer: 'Yes. We design and manage cloud platforms for real-time IoT telemetry, tracking, and analytics across AWS and Azure.',
    },
    {
      question: 'Which cloud platforms do you support for logistics?',
      answer: 'We support AWS, Azure, Google Cloud, and Oracle Cloud, choosing the best platform for your logistics workload and data needs.',
    },
    {
      question: 'Can you reduce logistics cloud costs?',
      answer: 'Yes. Our logistics clients save 25-35% through elastic scaling, workload optimization, and FinOps governance.',
    },
    {
      question: 'Why choose GulfStream for logistics cloud operations?',
      answer: 'Because we deliver reliable, compliant logistics cloud solutions with local Saudi support and multi-cloud engineering expertise.',
    },
  ];''',
    r'src\components\pages\industries\RetailContent.jsx': '''  const retailFaqs = [
    {
      question: 'What is retail cloud infrastructure?',
      answer: 'Retail cloud infrastructure supports e-commerce, inventory, payments, and peak traffic events with scalable, secure cloud architecture.',
    },
    {
      question: 'How do you handle PCI DSS compliance?',
      answer: 'We build and manage PCI DSS-compliant retail cloud environments with network controls, encryption, and continuous monitoring.',
    },
    {
      question: 'Which cloud platforms do you support for retail?',
      answer: 'We support AWS, Azure, Google Cloud, and Oracle Cloud, tailoring retail solutions to your existing systems and growth needs.',
    },
    {
      question: 'Can you reduce retail cloud costs?',
      answer: 'Yes. We cut retail cloud spending through seasonal scaling, rightsizing, and FinOps controls without impacting performance.',
    },
    {
      question: 'Why choose GulfStream for retail cloud in Saudi Arabia?',
      answer: 'We combine retail cloud experience, peak-event scaling, and Saudi regulatory awareness to keep your customer experience reliable.',
    },
  ];''',
    r'src\components\pages\industries\TechSaasContent.jsx': '''  const saasFaqs = [
    {
      question: 'What is SaaS cloud infrastructure management?',
      answer: 'SaaS cloud infrastructure management means outsourcing your platform operations, deployments, security, and cost control to expert cloud engineers.',
    },
    {
      question: 'Can you reduce SaaS cloud costs?',
      answer: 'Yes. We reduce SaaS costs through Kubernetes optimization, rightsizing, reserved capacity, and FinOps automation.',
    },
    {
      question: 'Do you manage Kubernetes for SaaS companies?',
      answer: 'Yes. We manage Kubernetes clusters, autoscaling, security, and cost governance for SaaS workloads on AWS and Azure.',
    },
    {
      question: 'Do you support multi-cloud SaaS deployments?',
      answer: 'Yes. We support multi-cloud SaaS platforms and hybrid deployments with consistent observability and governance.',
    },
    {
      question: 'Why choose GulfStream for SaaS cloud operations in Saudi Arabia?',
      answer: 'Our team combines SaaS product expertise with cloud operations, enabling faster launches and stable growth with lower infrastructure costs.',
    },
  ];''',
    r'src\components\pages\industries\ProfessionalServicesContent.jsx': '''  const professionalServicesFaqs = [
    {
      question: 'What is secure cloud for professional services?',
      answer: 'Secure cloud for professional services is a compliance-first environment that protects sensitive client data while enabling collaboration and productivity.',
    },
    {
      question: 'How do you ensure regulatory compliance?',
      answer: 'We build cloud governance around NCA ECC, ISO 27001, and industry requirements with automated monitoring and audit-ready reporting.',
    },
    {
      question: 'Which cloud platforms do you support?',
      answer: 'We support AWS, Azure, Google Cloud, and Oracle Cloud for professional services workloads, including secure data management and file sharing.',
    },
    {
      question: 'Can you reduce IT overhead costs?',
      answer: 'Yes. We reduce costs by managing cloud operations, automating compliance, and optimizing resource usage across the estate.',
    },
    {
      question: 'Why choose GulfStream for professional services cloud?',
      answer: 'Because we deliver secure, compliant cloud operations with local Saudi support and a focus on protecting sensitive client information.',
    },
  ];''',
    r'src\components\pages\services\FinopsCostOptimizationContent.jsx': '''  const finopsFaqs = [
    {
      question: 'What is FinOps?',
      answer: 'FinOps is a cloud financial operations framework that brings visibility, accountability, and optimization to cloud spend.',
    },
    {
      question: 'How much can you reduce cloud costs?',
      answer: 'Most clients save 25-35% through rightsizing, reserved capacity, and continuous cost governance.',
    },
    {
      question: 'How quickly can FinOps deliver savings?',
      answer: 'You can expect measurable savings within 60-90 days, with quick wins from waste elimination and billing governance.',
    },
    {
      question: 'Do you support multi-cloud FinOps?',
      answer: 'Yes. We provide FinOps across AWS, Azure, Google Cloud, Oracle Cloud, and multi-cloud environments.',
    },
    {
      question: 'Why choose GulfStream for cloud cost optimization?',
      answer: 'We combine FinOps methodology with local Saudi expertise and managed services to deliver sustainable savings and transparency.',
    },
  ];''',
    r'src\components\pages\services\CloudMigrationContent.jsx': '''  const migrationFaqs = [
    {
      question: 'How long does a cloud migration take?',
      answer: 'Migration timelines vary, but simple cloud moves can complete in 4-8 weeks and enterprise modernization projects typically take 3-6 months.',
    },
    {
      question: 'Is downtime required during cloud migration?',
      answer: 'We design migrations to avoid or minimize downtime using phased cutovers, replication, and blue-green deployment patterns.',
    },
    {
      question: 'How much does cloud migration cost in Saudi Arabia?',
      answer: 'Costs depend on workload complexity and scope. We provide a free migration assessment with a tailored estimate.',
    },
    {
      question: 'Do you support AWS, Azure, Google Cloud, and Oracle Cloud migrations?',
      answer: 'Yes. We migrate workloads to AWS, Azure, Google Cloud, and Oracle Cloud, including multi-cloud and hybrid transition strategies.',
    },
    {
      question: 'Do you provide post-migration support?',
      answer: 'Yes. Every migration includes post-migration optimization, monitoring, and transition support to our managed cloud operations team.',
    },
  ];''',
    r'src\components\pages\services\CloudBillingManagementContent.jsx': '''  const billingFaqs = [
    {
      question: 'What is cloud billing management?',
      answer: 'Cloud billing management tracks, analyzes, and optimizes cloud spend across providers so you can eliminate surprises and charge costs accurately.',
    },
    {
      question: 'Can you manage billing across multiple cloud providers?',
      answer: 'Yes. We unify billing for AWS, Azure, Google Cloud, and Oracle Cloud into a single view with consistent reporting.',
    },
    {
      question: 'How much does cloud billing management cost?',
      answer: 'Costs depend on the number of accounts and complexity. We offer flexible pricing with a free audit to estimate your needs.',
    },
    {
      question: 'How quickly can you set up billing dashboards?',
      answer: 'We typically deploy unified billing dashboards within 2-4 weeks, including budget alerts and cost allocation reports.',
    },
    {
      question: 'Why choose GulfStream for cloud billing management?',
      answer: 'We combine managed billing, FinOps controls, and local Saudi support to deliver accurate, audit-ready cloud spend visibility.',
    },
  ];''',
    r'src\components\pages\services\CloudSecurityGovernanceContent.jsx': '''  const securityFaqs = [
    {
      question: 'How do you ensure NCA ECC compliance?',
      answer: 'We implement NCA ECC controls with automated monitoring, policy enforcement, and audit-ready reporting across your cloud estate.',
    },
    {
      question: 'Do you provide 24/7 security monitoring?',
      answer: 'Yes. Our security operations team monitors threats around the clock and responds to incidents with SLA-backed support.',
    },
    {
      question: 'Can you secure multi-cloud environments?',
      answer: 'Yes. We secure AWS, Azure, Google Cloud, Oracle Cloud, and multi-cloud environments with centralized governance and controls.',
    },
    {
      question: 'How much does cloud security governance cost?',
      answer: 'Costs depend on your cloud estate and compliance needs. We offer a free security assessment with a customized estimate.',
    },
    {
      question: 'Why choose GulfStream for cloud security in Saudi Arabia?',
      answer: 'We combine local compliance expertise, certified security engineers, and managed operations to protect cloud workloads effectively.',
    },
  ];''',
    r'src\components\pages\services\cloud-managed\AwsManagedContent.jsx': '''  const awsFaqs = [
    {
      question: 'What are AWS Managed Services?',
      answer: 'AWS Managed Services means outsourcing your AWS operations to certified experts who handle monitoring, security, optimization, and incident response.',
    },
    {
      question: 'How much do AWS Managed Services cost in Saudi Arabia?',
      answer: 'Costs vary by AWS account count and support level. We provide flexible pricing with a free assessment to deliver a tailored quote.',
    },
    {
      question: 'How quickly can you reduce AWS costs?',
      answer: 'Many AWS clients see 20-35% cost reduction within 90 days through rightsizing, reserved capacity, and workload optimization.',
    },
    {
      question: 'Do you support AWS multi-account and hybrid environments?',
      answer: 'Yes. We manage AWS multi-account structures and hybrid AWS deployments with consistent operations and governance.',
    },
    {
      question: 'Why choose GulfStream for AWS management in Saudi Arabia?',
      answer: 'A local team of certified AWS engineers offers Saudi compliance, Arabic support, and a focus on measurable cost and performance results.',
    },
  ];''',
    r'src\components\pages\services\cloud-managed\AzureManagedContent.jsx': '''  const azureFaqs = [
    {
      question: 'What are Azure Managed Services?',
      answer: 'Azure Managed Services means outsourcing your Azure operations, security, monitoring, and optimization to certified cloud engineers.',
    },
    {
      question: 'How much do Azure Managed Services cost in Saudi Arabia?',
      answer: 'Costs vary with subscription count and support requirements. We provide a tailored quote after a free assessment.',
    },
    {
      question: 'How quickly can you reduce Azure costs?',
      answer: 'Most Azure clients see 25-35% savings within 90 days through reserved instances, hybrid benefit optimization, and rightsizing.',
    },
    {
      question: 'Do you support hybrid Azure environments?',
      answer: 'Yes. We support Azure hybrid environments with Azure Arc, ExpressRoute, and on-premises integration.',
    },
    {
      question: 'Why choose GulfStream for Azure in Saudi Arabia?',
      answer: 'We offer local Saudi expertise, Azure certifications, and compliance experience for reliable hybrid cloud operations.',
    },
  ];''',
    r'src\components\pages\services\cloud-managed\GoogleCloudContent.jsx': '''  const gcpFaqs = [
    {
      question: 'What are Google Managed Cloud Services?',
      answer: 'Google Managed Cloud Services means outsourcing GCP operations, monitoring, security, and optimization to certified cloud professionals.',
    },
    {
      question: 'How much do Google Cloud services cost?',
      answer: 'Costs depend on your workload mix and project count. We provide flexible pricing and a free assessment for a custom estimate.',
    },
    {
      question: 'Do you manage GKE clusters and BigQuery optimization?',
      answer: 'Yes. We manage GKE cluster lifecycle and optimize BigQuery costs through reservations, query tuning, and data lifecycle policies.',
    },
    {
      question: 'Do you support multi-cloud environments with GCP?',
      answer: 'Yes. We integrate GCP into multi-cloud environments with consistent governance and centralized monitoring.',
    },
    {
      question: 'Why choose GulfStream for Google Cloud in Saudi Arabia?',
      answer: 'We combine GCP expertise with Saudi compliance knowledge and local support to deliver reliable analytics and cloud operations.',
    },
  ];''',
    r'src\components\pages\services\cloud-managed\OracleCloudContent.jsx': '''  const ociiFaqs = [
    {
      question: 'What are Oracle Managed Cloud Services?',
      answer: 'Oracle Managed Cloud Services means outsourcing your OCI operations, security, and optimization to experienced Oracle cloud specialists.',
    },
    {
      question: 'How much do Oracle managed services cost?',
      answer: 'Costs depend on tenancy and database workload complexity. We provide a tailored estimate after a free OCI assessment.',
    },
    {
      question: 'Can you manage Oracle database migrations to OCI?',
      answer: 'Yes. We handle Oracle database migrations to OCI with zero-downtime planning and full validation.',
    },
    {
      question: 'Do you support Oracle Cloud licensing optimization?',
      answer: 'Yes. We optimize Oracle licensing with BYOL and Universal Credits strategies to reduce costs by up to 35%.',
    },
    {
      question: 'Why choose GulfStream for OCI managed services in Saudi Arabia?',
      answer: 'We offer local Oracle expertise, Saudi compliance support, and deep OCI management experience for enterprise workloads.',
    },
  ];''',
}


def replace_block(text, start_marker, open_char, close_char, replacement):
    start = text.find(start_marker)
    if start == -1:
        raise ValueError(f"Start marker not found: {start_marker}")
    start_brace = text.find(open_char, start + len(start_marker))
    if start_brace == -1:
        raise ValueError(f"Open char {open_char} not found after start marker")
    depth = 0
    idx = start_brace
    while idx < len(text):
        ch = text[idx]
        if ch == open_char:
            depth += 1
        elif ch == close_char:
            depth -= 1
            if depth == 0:
                end = idx + 1
                break
        idx += 1
    else:
        raise ValueError(f"Matching {close_char} not found for {start_marker}")

    # find closing semicolon after end
    semi = text.find(';', end)
    if semi == -1:
        raise ValueError("Semicolon not found after block end")
    new_text = text[:start] + replacement + text[semi+1:]
    return new_text

for relpath, replacement in replacements.items():
    path = os.path.join(root, relpath)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'const faqSchema =' in replacement:
        updated = replace_block(content, 'const faqSchema =', '{', '}', replacement)
    else:
        # find specific const name in replacement
        const_name = replacement.split('=')[0].strip()
        updated = replace_block(content, const_name + ' =', '[', ']', replacement)
    if updated != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f'Updated {relpath}')
    else:
        print(f'No changes for {relpath}')
