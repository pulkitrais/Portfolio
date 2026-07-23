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
    company: 'Genboard.com',
    position: 'Domain Security Lead',
    location: 'India',
    image: '/company/promote.png',
    description: [
      'Leading cloud security and SOC operations with a strong focus on proactive threat detection and incident response.',
      'Designed and enforced AWS IAM controls with least-privilege access, role governance, and security guardrails across environments.',
      'Built log collection and analysis workflows for security telemetry to improve detection coverage and investigation speed.',
      'Driving security operations improvements through continuous monitoring, alert tuning, and response process hardening.',
    ],
    startDate: '2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Cloud Security',
        href: 'https://aws.amazon.com/security/',
        icon: <AWS key="cloud-security" />,
      },
      {
        name: 'AWS IAM',
        href: 'https://aws.amazon.com/iam/',
        icon: <TypeScript key="aws-iam" />,
      },
      {
        name: 'SOC Operations',
        href: 'https://www.sans.org/cyber-security-skills-roadmap/',
        icon: <NodeJs key="soc-operations" />,
      },
      {
        name: 'Log Analysis',
        href: 'https://www.elastic.co/what-is/log-analysis',
        icon: <Postman key="log-analysis" />,
      },
    ],
    website: 'https://genboard.com',
  },
];
