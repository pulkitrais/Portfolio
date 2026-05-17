import { heroConfig, socialLinks } from '@/config/Hero';
import { Pencil } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import Spotify from '../svgs/Spotify';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const { name, title, email, bio, lastPlayed } = heroConfig;

  return (
    <Container className="pt-8">
      <div>
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
      <div className="mt-4 flex gap-3">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className="text-zinc-500 transition-colors hover:text-zinc-200"
              >
                <span className="size-5">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
