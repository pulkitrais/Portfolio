import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[#020712]/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-[0.16em] text-cyan-300 uppercase">
            Pulkit Rai
          </span>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-4 text-sm text-zinc-400 md:flex">
              {navbarConfig.navItems.map((item) => (
                <Link
                  className="transition-colors hover:text-cyan-200"
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggleButton className="border border-cyan-400/20 bg-[#081529] text-cyan-100 hover:bg-[#0d1e35]" />
          </div>
        </div>
      </Container>
    </header>
  );
}
