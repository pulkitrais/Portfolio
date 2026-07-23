'use client';

import { useEffect, useState } from 'react';

const TAGLINES = [
  'Building Secure Cloud Environments',
  'Automating Threat Detection',
  'SOC & SIEM Specialist',
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % TAGLINES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="mt-4 min-h-7 text-base font-medium text-cyan-300 md:text-xl">
      {TAGLINES[index]}
    </p>
  );
}
