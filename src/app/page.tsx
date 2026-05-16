import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <main className="pb-16 sm:pb-20">
      <Hero />
      <About />
      <Experience />
      <Work />
    </main>
  );
}
