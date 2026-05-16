import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My cybersecurity resume and experience summary.
          </p>
        </div>
        <Separator />
        <div className="mx-auto w-full max-w-5xl">
          <iframe
            src={resumeConfig.url}
            title="Pulkit Rai resume"
            className="bg-background min-h-[70vh] w-full rounded-2xl border border-black/10 shadow-sm md:min-h-[85vh] dark:border-white/10"
          />
        </div>
      </div>
    </Container>
  );
}
