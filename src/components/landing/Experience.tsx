import { experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';

export default function Experience() {
  return (
    <Container className="mt-14">
      <h2 className="text-4xl font-semibold text-zinc-100">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.slice(0, 3).map((experience) => (
          <div
            key={experience.company}
            className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold text-zinc-100">
                  {experience.company}
                </h3>
                {experience.isCurrent && (
                  <div className="flex items-center gap-1 rounded-md border border-green-300/30 bg-green-500/10 px-2 py-1 text-xs text-green-400">
                    <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                    Working
                  </div>
                )}
              </div>
              <p className="mt-1 text-lg text-zinc-400">
                {experience.position}
              </p>
            </div>
            <div className="text-sm text-zinc-500 md:text-right">
              <p>
                {experience.startDate} -{' '}
                {experience.isCurrent ? 'Present' : experience.endDate}
              </p>
              <p>{experience.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/work-experience"
          className="inline-flex rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-900"
        >
          Show all work experiences
        </Link>
      </div>
    </Container>
  );
}
