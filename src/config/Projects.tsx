import AWS from '@/components/technologies/AWS';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'CheckYourWeb',
    description:
      'Live web-checking project for quickly validating website availability and key uptime checks.',
    image: '/project/checkyourweb.png',
    link: 'https://checkyourweb.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'API Testing', icon: <Postman key="postman" /> },
    ],
    live: 'https://checkyourweb.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Azure Sentinel SIEM + SOAR Implementation Lab',
    description:
      'Architected and deployed a production-grade Sentinel SIEM + SOAR environment with KQL detections, automation rules, and real-time incident response workflows.',
    image: '/project/notesbuddy.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'Azure Sentinel', icon: <AWS key="aws" /> },
      { name: 'KQL Analytics', icon: <TypeScript key="typescript" /> },
      { name: 'SOAR Playbooks', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
  {
    title: 'Independent SOC Operations & Blue Team Projects',
    description:
      'Built hands-on defensive security workflows for alert triage, threat hunting, incident response, and purple-team simulations aligned with MITRE ATT&CK.',
    image: '/project/appwrite.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'Detection Engineering', icon: <TypeScript key="typescript" /> },
      { name: 'Threat Hunting', icon: <NodeJs key="nodejs" /> },
      { name: 'MITRE ATT&CK', icon: <Postman key="postman" /> },
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
      'Focused forensic utility for recovering deleted artifacts and investigating user-deleted traces to support practical digital forensics workflows.',
    image: '/project/syncify.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'Digital Forensics', icon: <Postman key="postman" /> },
      { name: 'Automation', icon: <NodeJs key="nodejs" /> },
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
      'Built a utility focused on recovering cached artifacts and supporting malware-analysis and OSINT-adjacent investigations.',
    image: '/project/festx.png',
    link: 'https://github.com/pulkitrais',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Cloud Security', icon: <AWS key="aws" /> },
    ],
    github: 'https://github.com/pulkitrais',
    live: 'https://github.com/pulkitrais',
    details: false,
    projectDetailsPageSlug: '/projects',
    isWorking: true,
  },
];
