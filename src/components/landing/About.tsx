import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-16 sm:mt-20 md:mt-24">
      <SectionHeading subHeading="About" heading="Me" />
      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <Image
          src="/assets/logo.png"
          alt={`Profile photo of ${about.name}`}
          width={240}
          height={240}
          className="size-40 shrink-0 rounded-3xl border border-black/10 object-cover shadow-sm sm:size-48 md:size-56 dark:border-white/10"
        />
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4 text-base leading-7 sm:text-lg">
            {about.description}
          </p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="mt-4 size-7 hover:cursor-pointer sm:size-8">
                    {skill}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
