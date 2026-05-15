/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import AWS from '@/components/technologies/AWS';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  AWS: AWS,
};

export const heroConfig = {
  // Personal Information
  name: 'Pulkit Rai',
  title: 'Cybersecurity Engineer & SOC Analyst',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'SIEM Engineering',
      href: 'https://learn.microsoft.com/en-us/azure/sentinel/',
      component: 'AWS',
    },
    {
      name: 'Threat Detection',
      href: 'https://owasp.org/',
      component: 'TypeScript',
    },
    {
      name: 'Cloud Security',
      href: 'https://learn.microsoft.com/en-us/azure/security/',
      component: 'NextJs',
    },
    {
      name: 'Automation',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Incident Response',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I design and defend modern systems with {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}. Focused on <b>resilience</b>, <b>detection engineering</b>, and human-first security outcomes.',
  },

  // Buttons Configuration
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

// Social Links Configuration
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
