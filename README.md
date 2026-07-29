<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:06b6d4&height=180&section=header&text=Portfolio&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38" alt="banner" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=06B6D4&center=true&vCenter=true&width=520&lines=Next.js+15+%2B+React+19+%2B+TypeScript;MDX+blog+%E2%80%A2+Framer+Motion+%E2%80%A2+Tailwind+4;Live+at+pulkitrai.tech" alt="Typing SVG" />
</p>

# 🚀 Portfolio

**Personal portfolio & blog** — built with Next.js 15, React 19, and Tailwind CSS 4. Live at [pulkitrai.tech](https://pulkitrai.tech).

<p>
  <img src="https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Runtime-Bun-000000?logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/github/license/pulkitrais/Portfolio" alt="License" />
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fpulkitrai.tech&label=live%20site" alt="Live Site Status" />
</p>

## ✨ Features

- 📝 **MDX-powered blog** with syntax highlighting (Shiki) and frontmatter support
- 🎨 **Polished UI** using Radix UI primitives + shadcn-style components
- 🌗 **Light/dark theme** switching via `next-themes`
- 🎬 **Smooth animations & scrolling** with Framer Motion and Lenis
- 📅 **Meeting scheduling** embedded via Cal.com
- 📊 **GitHub-style activity calendar** and charts (Recharts)
- 📬 **Contact form** wired up to Telegram notifications
- ✅ **Type-safe forms** using React Hook Form + Zod

## 🛠️ Tech Stack

| Layer      | Tools |
|------------|-------|
| Framework  | Next.js 15 (App Router), React 19 |
| Language   | TypeScript |
| Styling    | Tailwind CSS 4, Radix UI, `class-variance-authority` |
| Content    | MDX, `gray-matter`, `shiki`, `remark`/`rehype` plugins |
| Motion     | Framer Motion (`motion`), Lenis smooth scroll |
| Forms      | React Hook Form, Zod |
| Tooling    | Bun, ESLint, Prettier, Husky, lint-staged, Knip |

## 🚦 Getting Started

**Prerequisites:** [Bun](https://bun.sh) installed locally.

```bash
# Install dependencies
bun install

# Start the dev server (Turbopack)
bun run dev

# Build for production
bun run build
bun run start
```

Copy `.env.example` to `.env` and fill in the required values (e.g. Telegram bot credentials for the contact form) before running locally.

## 📁 Useful Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start local dev server with Turbopack |
| `bun run build` | Production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format code with Prettier |
| `bun run knip` | Detect unused files/dependencies |
| `bun run test-telegram` | Test the Telegram contact-form integration |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📄 License

Licensed under the [MIT License](./LICENSE).

---

<p align="center">Built and maintained by <a href="https://github.com/pulkitrais">@pulkitrais</a></p>
