import { navbarConfig } from '@/config/Navbar';
import { Search } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

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

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <Search className="size-3.5" />
            <span>Ctrl</span>
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300">
              K
            </span>
          </div>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
