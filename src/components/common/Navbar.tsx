import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 py-3 sm:py-4">
      <div className="bg-background/80 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/10 px-4 py-3 backdrop-blur-sm sm:px-6 dark:border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
            className="size-10 rounded-full border border-black/10 object-cover dark:border-white/10"
            priority
          />
          <span className="text-sm font-semibold sm:text-base">
            {navbarConfig.logo.alt}
          </span>
        </Link>
        <div className="ml-auto flex flex-wrap items-center justify-end gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="rounded-full px-3 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-black/5 hover:underline hover:decoration-2 hover:underline-offset-4 dark:hover:bg-white/10"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </div>
      </div>
    </Container>
  );
}
