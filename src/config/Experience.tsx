import AWS from '@/components/technologies/AWS';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
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
    image: '/company/promote.png',
    description: [
      'Architected and deployed a production-grade Microsoft Sentinel SIEM + SOAR environment for real-time threat detection and automated response.',
      'Engineered advanced KQL analytics rules including brute-force detection with high-fidelity alerting.',
      'Developed and integrated custom Logic Apps playbooks triggered via Automation Rules for account, source IP, host, and timestamp enrichment.',
      'Configured enterprise logging infrastructure using Azure Monitor Agent, custom DCRs, Syslog, and system logs.',
      'Implemented full SOC workflow: log ingestion → real-time KQL detection → incident creation → automated SOAR response.',
      'Conducted extensive testing, tuning, and documentation of detection rules, playbooks, and runbooks for production readiness.',
    ],
    startDate: 'May 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Azure Sentinel',
        href: 'https://learn.microsoft.com/en-us/azure/sentinel/',
        icon: <AWS />,
      },
      {
        name: 'KQL',
        href: 'https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/',
        icon: <TypeScript />,
      },
      {
        name: 'SOAR Playbooks',
        href: 'https://learn.microsoft.com/en-us/azure/sentinel/tutorial-respond-threats-playbook',
        icon: <NodeJs />,
      },
      {
        name: 'Azure Monitor Agent',
        href: 'https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview',
        icon: <Postman />,
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
  {
    isCurrent: false,
    company: 'Independent SOC Operations & Blue Team Projects',
    position: 'Defensive Security & Automation',
    location: 'India',
    image: '/company/upsurge.png',
    description: [
      'Completed TryHackMe premium defensive security path with advanced modules in alert triage, threat hunting, incident response, and purple-team simulations.',
      'Developed multiple Python-based automation frameworks for log parsing, behavioral anomaly detection, phishing email analysis, and security orchestration.',
      'Built and maintained client-side security tools focused on digital forensics, malware analysis support, and OSINT collection for threat intelligence.',
      'Performed regular threat-hunting exercises using MITRE ATT&CK framework and custom detection logic across simulated environments.',
    ],
    startDate: 'January 2023',
    endDate: 'Present',
    technologies: [
      {
        name: 'Threat Hunting',
        href: 'https://attack.mitre.org/resources/getting-started/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js Automation',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'MITRE ATT&CK',
        href: 'https://attack.mitre.org/',
        icon: <Postman />,
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
];
