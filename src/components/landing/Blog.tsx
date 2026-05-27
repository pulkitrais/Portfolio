import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import Calender from '../svgs/Calender';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-14 pb-16">
      <h2 className="text-4xl font-semibold text-zinc-100">Blog</h2>
      <div className="mt-6 space-y-8">
        {posts.slice(0, 3).map((post) => (
          <article
            key={post.slug}
            className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-semibold text-zinc-100 transition-colors hover:text-zinc-300">
                  {post.frontmatter.title}
                </h3>
              </Link>
              <p className="mt-1 text-lg text-zinc-400">
                {post.frontmatter.description}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                <Calender className="size-4" />
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Read more about ${post.frontmatter.title}`}
              className="text-zinc-400 transition-colors hover:text-zinc-200"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="inline-flex rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-900"
          >
            Show all blogs
          </Link>
          <Link
            href="https://medium.com/@pulkitrai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-900"
          >
            Read on Medium
          </Link>
        </div>
      </div>
    </Container>
  );
}
