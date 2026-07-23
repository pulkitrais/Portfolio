import QuickContactForm from './QuickContactForm';
import RotatingTagline from './RotatingTagline';

const projectHighlights = [
  'Architected and deployed production-grade Microsoft Sentinel SIEM + SOAR with Log Analytics, DCRs, Analytics Rules, Automation Rules, and Logic Apps.',
  'Engineered high-fidelity KQL detections with MITRE ATT&CK mapping, threat-hunting workflows, and alert tuning.',
  'Built automated incident response and enrichment playbooks with Azure Logic Apps.',
  'Built AWS cloud security home lab with IAM, CloudTrail, GuardDuty, EventBridge, and SNS for threat visibility.',
  'Created CheckYourWeb: a client-side browser security dashboard for file scanning, URL/IP safety checks, and private local reporting.',
];

const skills = {
  'SIEM & SOAR': [
    'Microsoft Sentinel',
    'KQL',
    'Analytics Rules',
    'Automation Rules',
    'Logic Apps Playbooks',
  ],
  'Threat Detection': [
    'Brute Force Detection',
    'Log Correlation',
    'MITRE ATT&CK',
    'Threat Hunting',
    'Real-time Alerting',
  ],
  'Cloud Security': [
    'Azure Monitor',
    'AWS IAM',
    'CloudTrail',
    'GuardDuty',
    'Microsoft Defender XDR',
  ],
  Tools: [
    'Wireshark',
    'Nmap',
    'OSINT Tools',
    'PowerShell',
    'Bash',
    'Splunk (Basic)',
  ],
  'Programming & Scripting': ['Python', 'SQL', 'Git', 'Bash Scripting', 'KQL'],
};

const certifications = [
  'AWS Identity and Access Management - Architecture and Terminology',
  'Zscaler Academy Fundamentals of Cybersecurity (EDU-102)',
  'TryHackMe Defending Security Path + Adversarial Defence Ops Room (Rare 1.4%)',
  'Microsoft Learn Azure Sentinel Fundamentals & Security Operations (In Progress)',
  'CompTIA Security+ Self-Study (Expected 2026) | Blue Team Level 1 (BTL1) Ongoing',
];

const activities = [
  'Actively explores dark web and underground forums for threat intelligence and OSINT research.',
  'Co-author of research on Deepfake Detection using Error Level Analysis (ELA).',
  'Owns and moderates r/csdf (Cyber Security & Digital Forensics subreddit).',
  'Active contributor across cybersecurity Discord servers and Reddit communities.',
];

const cyberTags = ['Microsoft Sentinel', 'KQL', 'SOAR', 'Azure', 'AWS', 'MITRE ATT&CK'];

export default function PortfolioPage() {
  return (
    <main className="cyber-grid relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#020712] dark:text-zinc-100">
      <div className="binary-overlay pointer-events-none" aria-hidden="true" />

      <section
        id="home"
        className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24"
      >
        <p className="text-sm tracking-[0.18em] text-cyan-700 uppercase dark:text-cyan-300">
          Pulkit Rai • Noida, India
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          Pulkit Rai
        </h1>
        <RotatingTagline />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-zinc-300">
          Cybersecurity professional focused on Microsoft Sentinel SIEM, SOAR
          automation, AWS Cloud Security, Zero Trust architecture, and real-time
          threat hunting.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#00131f] transition hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="mailto:pulkitonwork@gmail.com?subject=Pulkit%20Rai%20CV%20Request"
            className="rounded-lg border border-cyan-400/50 px-5 py-2.5 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-500/10 dark:text-cyan-200"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
        <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Actively working on SIEM + SOAR solutions
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700 dark:text-zinc-300">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            GitHub (placeholder)
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            LinkedIn (placeholder)
          </a>
          <a
            href="https://pulkitrai.tech"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            pulkitrai.tech
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          About Me
        </h2>
        <p className="mt-5 max-w-4xl leading-relaxed text-slate-700 dark:text-zinc-300">
          I am passionate about cybersecurity operations, cloud security
          hardening, threat detection engineering, and security automation. I
          actively engage in threat intelligence and OSINT research while
          collaborating with cybersecurity communities to stay ahead of evolving
          attacker behavior.
        </p>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-600 dark:text-zinc-400">
          SOC Operations, SIEM Automation & Cloud Security Labs (2025 – Present)
        </p>
        <article className="project-card mt-8 rounded-2xl border border-cyan-400/25 bg-white/80 p-7 shadow-[0_0_24px_rgba(34,211,238,0.12)] backdrop-blur dark:bg-[#061225]/70 dark:shadow-[0_0_24px_rgba(34,211,238,0.08)]">
          <ul className="space-y-3 text-slate-800 dark:text-zinc-200">
            {projectHighlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {cyberTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://checkyourweb.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#042012] transition hover:bg-emerald-300"
            >
              Live Demo: CheckYourWeb
            </a>
            <a
              href="https://github.com/pulkitrais"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-400/50 px-4 py-2 text-sm text-cyan-700 hover:bg-cyan-500/10 dark:text-cyan-100"
            >
              Documentation
            </a>
            <a
              href="https://github.com/pulkitrais"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-400/50 px-4 py-2 text-sm text-cyan-700 hover:bg-cyan-500/10 dark:text-cyan-100"
            >
              Architecture
            </a>
          </div>
        </article>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Professional Experience
        </h2>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 dark:border-zinc-800 dark:bg-[#040d1d]">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-zinc-100">
            Zero Trust Cloud Security Intern — AICTE + Zscaler
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">
            July 2025 – September 2025
          </p>
          <p className="mt-4 text-slate-700 dark:text-zinc-300">
            Focused on Zero Trust Architecture, Cloud Security, IAM, Network
            Segmentation, and hands-on implementation of Zscaler security
            solutions.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Technical Skills
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([category, values]) => (
            <div
              key={category}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#041022]"
            >
              <h3 className="text-sm font-semibold tracking-wide text-cyan-700 uppercase dark:text-cyan-200">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {values.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-zinc-900 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        className="mx-auto w-full max-w-6xl px-6 py-16"
      >
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Certifications & Professional Development
        </h2>
        <ul className="mt-6 space-y-3 text-slate-800 dark:text-zinc-200">
          {certifications.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-[#040f1f]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="community" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Community & Activities
        </h2>
        <ul className="mt-6 space-y-3 text-slate-800 dark:text-zinc-200">
          {activities.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-[#040f1f]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-700 dark:text-cyan-200">
          Contact
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#040f1f]">
            <QuickContactForm />
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 dark:border-zinc-800 dark:bg-[#040f1f] dark:text-zinc-200">
            <p>
              <span className="text-cyan-700 dark:text-cyan-300">Phone:</span>{' '}
              +91 91206 56608
            </p>
            <p>
              <span className="text-cyan-700 dark:text-cyan-300">Email:</span>{' '}
              pulkitonwork@gmail.com
            </p>
            <p>
              <span className="text-cyan-700 dark:text-cyan-300">Website:</span>{' '}
              pulkitrai.tech
            </p>
            <div className="pt-2">
              <a
                href="mailto:pulkitonwork@gmail.com?subject=Pulkit%20Rai%20CV%20Request"
                className="inline-flex rounded-lg border border-cyan-400/40 px-4 py-2 text-sm text-cyan-700 hover:bg-cyan-500/10 dark:text-cyan-200"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-4 pt-3 text-sm">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                GitHub (placeholder)
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                LinkedIn (placeholder)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
