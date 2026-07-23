'use client';

import { FormEvent, useState } from 'react';

export default function QuickContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phone: '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus('Could not send message. Please email me directly.');
        return;
      }

      event.currentTarget.reset();
      setStatus('Message sent successfully.');
    } catch {
      setStatus('Could not send message. Please email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm text-slate-600 dark:text-zinc-300">
        Name
        <input
          required
          name="name"
          minLength={2}
          className="mt-2 w-full rounded-lg border border-cyan-400/30 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-400 dark:bg-[#061225] dark:text-zinc-100"
        />
      </label>
      <label className="block text-sm text-slate-600 dark:text-zinc-300">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-lg border border-cyan-400/30 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-400 dark:bg-[#061225] dark:text-zinc-100"
        />
      </label>
      <label className="block text-sm text-slate-600 dark:text-zinc-300">
        Message
        <textarea
          required
          name="message"
          minLength={10}
          rows={5}
          className="mt-2 w-full rounded-lg border border-cyan-400/30 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-400 dark:bg-[#061225] dark:text-zinc-100"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-[#001018] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {status && <p className="text-sm text-cyan-700 dark:text-cyan-200">{status}</p>}
    </form>
  );
}
