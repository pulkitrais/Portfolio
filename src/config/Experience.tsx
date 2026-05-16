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
    company: 'Cloud Security Monitoring Lab',
    position: 'Security Operations & Automation',
    location: 'India',
    image: '/assets/logo.png',
    description: [
      'Built a cloud-focused security lab for alert triage, log review, and repeatable incident-response practice.',
      'Automated key investigation steps for enrichment, verification, and analyst-ready reporting.',
      'Documented defensive workflows for faster response, consistent evidence collection, and clearer post-incident review.',
      'Improved operational readiness by testing the lab against common detection and escalation scenarios.',
    ],
    startDate: 'May 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'AWS Security',
        href: 'https://aws.amazon.com/security/',
        icon: <AWS />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
  {
    isCurrent: false,
    company: 'Independent Cybersecurity Projects',
    position: 'Defensive Security & Automation',
    location: 'India',
    image: '/assets/logo.png',
    description: [
      'Built hands-on projects around threat hunting, alert review, and defensive security automation.',
      'Created utilities for digital forensics, investigation support, and malware-analysis preparation.',
      'Worked on repeatable workflows that connect scripting, cloud services, and analyst tooling for day-to-day blue-team tasks.',
    ],
    startDate: 'January 2023',
    endDate: 'Present',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'AWS Security',
        href: 'https://aws.amazon.com/security/',
        icon: <AWS />,
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
];
