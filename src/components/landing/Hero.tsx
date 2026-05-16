import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, skills, description, buttons } = heroConfig;

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
    <Container className="flex min-h-[calc(100vh-6rem)] flex-col justify-center py-8 sm:py-12 md:min-h-[calc(100vh-7rem)] md:py-16">
      <Image
        src={heroConfig.avatar}
        alt={name}
        width={160}
        height={160}
        className="size-20 rounded-full border border-black/10 object-cover shadow-sm sm:size-24 dark:border-white/10"
        priority
      />

      <div className="mt-6 flex max-w-4xl flex-col gap-3 sm:mt-8">
        <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-6xl">
          {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="text-secondary mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap md:text-xl">
          {renderDescription()}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
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
