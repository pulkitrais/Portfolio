import AWS from '@/components/technologies/AWS';
import NextJs from '@/components/technologies/NextJs';
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
    company: 'Independent Security Lab',
    position: 'Cybersecurity Engineer & SOC Analyst',
    location: 'Remote',
    image: '/company/promote.png',
    description: [
      'Designed and maintained a SOC lab on Azure with curated detections, alert correlation, and triage workflows.',
      'Built repeatable incident response playbooks to improve containment time and investigation quality.',
      'Implemented telemetry-driven dashboards and log pipelines for proactive threat monitoring.',
      'Improved security posture through threat modeling, control validation, and attack-surface reduction.',
    ],
    startDate: 'January 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
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
    company: 'Research & Security Engineering',
    position: 'Cybersecurity Researcher',
    location: 'India',
    image: '/company/upsurge.png',
    description: [
      'Authored a human-centric cybersecurity thesis focused on secure behavior design and user-aware controls.',
      'Evaluated common security friction points and proposed practical, measurable mitigation strategies.',
      'Mapped defense controls to realistic attacker workflows for stronger operational readiness.',
      'Translated research findings into implementation checklists for secure product teams.',
    ],
    startDate: 'June 2024',
    endDate: 'December 2024',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://github.com/pulkitrais',
  },
];
