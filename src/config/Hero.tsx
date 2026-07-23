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
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Website from '@/components/svgs/Website';
import X from '@/components/svgs/X';
import AWS from '@/components/technologies/AWS';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  NodeJs: NodeJs,
  AWS: AWS,
  Postman: Postman,
};

export const heroConfig = {
  // Personal Information
  name: 'Pulkit Rai',
  title: 'Cybersecurity Engineer & SOC Analyst',
  email: 'pulkitonwork@gmail.com',
  avatar: '/assets/logo.png',

  // Short bio shown below the header
  bio: 'At work as Digital Security Lead at GenBoard. Right now focused on cloud security, SOC operations, AWS IAM, and log collection/analysis.',

  // Skills Configuration (kept for full work-experience page use)
  skills: [
    {
      name: 'Azure Sentinel',
      href: 'https://learn.microsoft.com/en-us/azure/sentinel/',
      component: 'AWS',
    },
    {
      name: 'KQL Detections',
      href: 'https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/',
      component: 'TypeScript',
    },
    {
      name: 'SOAR Playbooks',
      href: 'https://learn.microsoft.com/en-us/azure/sentinel/tutorial-respond-threats-playbook',
      component: 'Postman',
    },
    {
      name: 'Incident Automation',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
  ],

  // Description Configuration (kept for compatibility)
  description: {
    template:
      'Focused on {skills:0}, {skills:1}, {skills:2}, and {skills:3}. I build practical blue-team workflows for <b>detection engineering</b>, <b>incident response</b>, and <b>security operations</b>.',
  },
  lastPlayed: 'Starboy',
  featuredSkillsCount: 4,

  // Buttons Configuration
  buttons: [
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
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pulkitrai',
    icon: <LinkedIn />,
  },
  {
    name: 'At Work',
    href: 'https://genboard.com',
    icon: <Website />,
  },
  {
    name: 'Email',
    href: 'mailto:pulkitonwork@gmail.com',
    icon: <Mail />,
  },
];
