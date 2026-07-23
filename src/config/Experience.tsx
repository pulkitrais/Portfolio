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
    company: 'GenBoard',
    position: 'Digital Security Lead',
    location: 'India',
    image: '/company/promote.png',
    description: [
      'Leading digital security operations with a strong focus on proactive threat detection and incident response.',
      'Maintaining end-to-end email security controls, including anti-phishing enforcement and secure mail flow policies.',
      'Resolving geo-location access and policy bypass issues while preserving secure authentication controls.',
      'Working with DNS security controls and monitoring to harden domain-level protection and reduce abuse risk.',
      'Applied Zero Trust cloud security practices from the AICTE + Zscaler internship across operational workflows.',
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
