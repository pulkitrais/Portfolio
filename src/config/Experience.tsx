import Figma from '@/components/technologies/Figma';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'Azure Sentinel SIEM + SOAR Implementation Lab',
    position: 'Hands-on Security Operations & Automation',
    location: 'India',
    description: [
      'Architected and deployed a production-grade Microsoft Sentinel SIEM + SOAR environment for real-time threat detection and automated response.',
      'Engineered advanced KQL analytics rules including brute-force detection with high-fidelity alerting.',
      'Developed and integrated custom Logic Apps playbooks triggered via Automation Rules for account, source IP, host, and timestamp enrichment.',
      'Configured enterprise logging infrastructure using Azure Monitor Agent, custom DCRs, Syslog, and system logs.',
      'Implemented full SOC workflow: log ingestion → real-time KQL detection → incident creation → automated SOAR response.',
      'Conducted extensive testing, tuning, and documentation of detection rules, playbooks, and runbooks for production readiness.',
    ],
    startDate: 'Jan 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Azure Sentinel',
        href: 'https://learn.microsoft.com/en-us/azure/sentinel/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.922 1.677.325 3.433.325 5.11 0C20.176 19.29 24 14.591 24 9c0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
      {
        name: 'KQL',
        href: 'https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4"
            />
          </svg>
        ),
      },
      {
        name: 'SOAR Playbooks',
        href: 'https://learn.microsoft.com/en-us/azure/sentinel/tutorial-respond-threats-playbook',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.473a2 2 0 01-1.789-2.894l.5-1M7 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 018.263 21H3.79a2 2 0 01-1.789-2.894l.5-1"
            />
          </svg>
        ),
      },
      {
        name: 'Azure Monitor Agent',
        href: 'https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 01 2 2v10m-6 0a2 2 0 01-2-2m0 0V5a2 2 0 012-2 2 2 0 012 2v14a2 2 0 01-2 2"
            />
          </svg>
        ),
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
  {
    isCurrent: false,
    company: 'Independent SOC Operations & Blue Team Projects',
    position: 'Defensive Security & Automation',
    location: 'India',
    description: [
      'Completed TryHackMe premium defensive security path with advanced modules in alert triage, threat hunting, incident response, and purple-team simulations.',
      'Developed multiple Python-based automation frameworks for log parsing, behavioral anomaly detection, phishing email analysis, and security orchestration.',
      'Built and maintained client-side security tools focused on digital forensics, malware analysis support, and OSINT collection for threat intelligence.',
      'Performed regular threat-hunting exercises using MITRE ATT&CK framework and custom detection logic across simulated environments.',
    ],
    startDate: 'June 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Threat Hunting',
        href: 'https://attack.mitre.org/resources/getting-started/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z"
            />
          </svg>
        ),
      },
      {
        name: 'MITRE ATT&CK',
        href: 'https://attack.mitre.org/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.922"
            />
          </svg>
        ),
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
  {
    isCurrent: false,
    company: 'InAmigos Foundation',
    position: 'Visual Designer Intern (Hobby)',
    location: 'India',
    description: [
      'Completed a short-term design internship focused on visual communication for social initiatives.',
      'Created social creatives, campaign assets, and basic brand collateral for foundation activities.',
      'Worked on this role as a hobby-driven creative experience, not as a core career track.',
    ],
    startDate: 'October 2025',
    endDate: 'December 2025',
    technologies: [
      {
        name: 'Visual Design',
        href: 'https://www.figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Brand Assets',
        href: 'https://www.canva.com/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2 2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2H7"
            />
          </svg>
        ),
      },
      {
        name: 'Campaign Creatives',
        href: 'https://www.adobe.com/products/photoshop.html',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        ),
      },
    ],
    website: '',
  },
];
