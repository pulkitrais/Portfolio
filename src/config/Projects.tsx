import AWS from '@/components/technologies/AWS';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'SOC Lab on Azure',
    description:
      'Built a practical SOC lab in Azure with SIEM pipelines, alert rules, incident triage playbooks, and dashboard-driven threat visibility.',
    image: '/project/notesbuddy.png',
    link: '#',
    technologies: [
      { name: 'Cloud SIEM', icon: <AWS key="aws" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Human-Centric Cybersecurity Thesis',
    description:
      'Research thesis on human factors in cybersecurity, balancing user behavior, security controls, and response workflows to reduce real-world risk.',
    image: '/project/appwrite.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Wearthebeer',
    description:
      'Designed and secured an e-commerce workflow with hardened auth, secure checkout patterns, and monitoring-first operational controls.',
    image: '/project/syncify.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Cachedrive',
    description:
      'Implemented a secure file and cache service architecture on AWS with policy controls, telemetry hooks, and reliability-focused data handling.',
    image: '/project/festx.png',
    link: '#',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Music-based social media platform',
    description:
      'Built a social platform centered around music sharing with moderation-aware design, protected user flows, and scalable backend services.',
    image: '/project/moonstone.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
];
