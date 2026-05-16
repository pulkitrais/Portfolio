import AWS from '@/components/technologies/AWS';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Cloud Security Monitoring Lab',
    description:
      'Built a security monitoring lab for alert triage, cloud log review, incident enrichment, and blue-team response workflows.',
    image: '/assets/logo.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'AWS Security', icon: <AWS key="aws" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Detection Engineering Toolkit',
    description:
      'Created blue-team utilities for alert parsing, triage workflows, and repeatable detection engineering experiments.',
    image: '/assets/logo.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'deleteditems (Digital Forensics Utility)',
    description:
      'Focused forensic utility for recovering deleted artifacts and investigating user-deleted traces during digital forensics workflows.',
    image: '/assets/logo.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'cachedrive (Security Utility)',
    description:
      'Built a utility focused on recovering cached artifacts and supporting malware-analysis and investigation workflows.',
    image: '/assets/logo.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'AWS Security', icon: <AWS key="aws" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
];
