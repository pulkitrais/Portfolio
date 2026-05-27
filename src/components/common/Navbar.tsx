import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React from 'react';

import Medium from '../svgs/Medium';
import Container from './Container';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 py-6 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="transition-colors duration-200 hover:text-zinc-100"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href={navbarConfig.mediumProfile}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium profile"
          className="text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
        >
          <Medium className="size-5" />
        </a>
      </div>
    </Container>
  );
}
