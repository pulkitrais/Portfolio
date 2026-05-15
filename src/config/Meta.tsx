import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Pulkit Rai | Cybersecurity Portfolio',
  description: 'Premium cybersecurity portfolio by Pulkit Rai',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@pulkitrais',
    github: 'pulkitrais',
    email: 'pulkitonwork@gmail.com',
  },
  keywords: [
    'portfolio',
    'cybersecurity',
    'soc analyst',
    'security engineer',
    'threat detection',
    'cloud security',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my cybersecurity projects, SOC initiatives, and security engineering expertise.`,
    keywords: [
      'cybersecurity portfolio',
      'soc analyst',
      'security engineer',
      'threat hunting',
      'incident response',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/contact': {
    title: 'Contact - Security Collaboration',
    description:
      'Get in touch for cybersecurity consulting, SOC engineering, and security-focused collaborations.',
    keywords: ['contact', 'cybersecurity', 'consulting', 'soc', 'security'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  '/work-experience': {
    title: 'Work Experience - Security Journey',
    description:
      'Explore my professional journey across cybersecurity, SOC operations, and defensive engineering.',
    keywords: [
      'work experience',
      'cybersecurity career',
      'soc operations',
      'security engineering',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects - Security Labs & Platforms',
    description:
      'Discover my cybersecurity projects, lab implementations, and secure platform engineering work.',
    keywords: [
      'security projects',
      'soc lab',
      'azure sentinel',
      'secure platform',
      'portfolio',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  '/blog': {
    title: 'Blog - Cybersecurity Insights',
    description:
      'Read my thoughts and technical insights on cybersecurity engineering and SOC operations.',
    keywords: [
      'cybersecurity blog',
      'security insights',
      'detection engineering',
      'incident response',
      'technical writing',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  '/resume': {
    title: 'Resume - Cybersecurity CV',
    description: `View and download ${heroConfig.name}'s cybersecurity resume and CV. Skills, experience, and impact.`,
    keywords: [
      'resume',
      'cybersecurity cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  '/gears': {
    title: 'Gears - Security Stack & Tools',
    description:
      'Discover the devices, tools, and workflow setup I use for cybersecurity engineering.',
    keywords: [
      'security setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'cybersecurity environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  '/setup': {
    title: 'Setup Guide - Security-focused Workspace',
    description:
      'Complete guide to my coding and security workspace setup, extensions, and productive defaults.',
    keywords: [
      'vscode',
      'security setup',
      'configuration',
      'extensions',
      'development environment',
      'guide',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
