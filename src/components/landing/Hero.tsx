import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const {
    name,
    title,
    skills,
    description,
    avatar,
    lastPlayed,
    featuredSkillsCount,
  } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="pt-8">
      <div className="flex items-start gap-4">
        <Image
          src={avatar}
          alt={name}
          width={72}
          height={72}
          className="rounded-full border border-zinc-700 object-cover"
        />
        <div>
          <h1 className="text-4xl leading-tight font-semibold text-zinc-100">
            {name}
          </h1>
          <p className="mt-1 text-lg text-zinc-400">{title}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-zinc-400">
        {renderDescription()}
      </div>

      <div className="mt-6 flex gap-3">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
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

      <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-400">
        <span className="font-medium text-zinc-300">Last played</span> —{' '}
        {lastPlayed}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.slice(0, featuredSkillsCount).map((skill) => {
          const SkillComponent =
            skillComponents[skill.component as keyof typeof skillComponents];
          return (
            <Skill key={skill.name} name={skill.name} href={skill.href}>
              <SkillComponent />
            </Skill>
          );
        })}
      </div>
    </Container>
  );
}
