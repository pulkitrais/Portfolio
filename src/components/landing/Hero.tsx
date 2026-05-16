import { heroConfig, socialLinks } from '@/config/Hero';
import {
  Github,
  Instagram,
  Linkedin,
  Pencil,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Spotify from '../svgs/Spotify';

const socialIcons = {
  X: Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
  YouTube: Youtube,
  Instagram: Instagram,
};

const socialAriaLabels = {
  X: 'Visit X (Twitter) profile',
  LinkedIn: 'Visit LinkedIn profile',
  GitHub: 'Visit GitHub profile',
  YouTube: 'Visit YouTube channel',
  Instagram: 'Visit Instagram profile',
};

export default function Hero() {
  const { name, title, email, avatar, bio, lastPlayed } = heroConfig;

  return (
    <Container className="pt-8">
      {/* Avatar + Name / Subtitle */}
      <div className="flex items-start gap-4">
        {/* Avatar with bright yellow circular background */}
        <div className="flex-shrink-0 rounded-full bg-yellow-400 p-1.5">
          <Image
            src={avatar}
            alt={name}
            width={68}
            height={68}
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl leading-tight font-bold text-zinc-100">
            {name}
          </h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-zinc-400">
            {title}&nbsp;·&nbsp;
            <a
              href={`mailto:${email}`}
              className="transition-colors hover:text-zinc-200"
            >
              {email}
            </a>
            <Pencil className="size-3 text-zinc-600" aria-hidden="true" />
          </p>
        </div>
      </div>

      {/* Short bio */}
      <p className="mt-6 text-base leading-relaxed text-zinc-400">{bio}</p>

      {/* Last Played – minimal */}
      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
        <span className="text-green-500">
          <Spotify className="size-4" />
        </span>
        <span>Last played</span>
        <span>—</span>
        <span className="text-zinc-300">{lastPlayed}</span>
      </div>

      {/* Social Icons */}
      <div className="mt-5 mb-2 flex items-center gap-[18px]">
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.name as keyof typeof socialIcons];
          if (!Icon) return null;

          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                socialAriaLabels[link.name as keyof typeof socialAriaLabels]
              }
              className="text-[#a1a1aa] transition-colors duration-200 hover:text-white"
            >
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </Container>
  );
}
