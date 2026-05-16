import Github from '@/components/svgs/Github';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import AWS from '@/components/technologies/AWS';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript: TypeScript,
  NodeJs: NodeJs,
  AWS: AWS,
  Postman: Postman,
};

export const heroConfig = {
  name: 'Pulkit Rai',
  title: 'Cybersecurity Engineer & SOC Analyst',
  avatar: '/assets/logo.png',

  skills: [
    {
      name: 'AWS Security',
      href: 'https://aws.amazon.com/security/',
      component: 'AWS',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Postman',
      href: 'https://www.postman.com/',
      component: 'Postman',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
  ],

  description: {
    template:
      'I use {skills:0}, {skills:1}, {skills:2}, and {skills:3} to build practical blue-team tooling for <b>detection engineering</b>, <b>incident response</b>, and <b>security operations</b>.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/pulkitrais',
    icon: <X />,
  },
  {
    name: 'Github',
    href: 'https://github.com/pulkitrais',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:pulkitonwork@gmail.com',
    icon: <Mail />,
  },
];
