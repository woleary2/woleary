import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Get in touch</h2>
        <p className="text-base leading-relaxed text-mute">
          The best way to reach me is email. I also have a LinkedIn and GitHub, which you can find below.
        </p>
      </header>

      <div className="rounded-2xl border border-line bg-surface p-6">
        <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">Email</p>
        <a
          className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-pine transition-colors hover:text-pine-hover"
          href="mailto:will.oleary217@gmail.com"
        >
          will.oleary217@gmail.com
          <span aria-hidden="true">→</span>
        </a>
        <div className="mt-5">
          <a
            className="inline-flex items-center rounded-full bg-pine px-4 py-2 text-sm font-medium text-paper shadow-lg shadow-pine/20 transition hover:bg-pine-hover"
            href="mailto:will.oleary217@gmail.com"
          >
            Send an email
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-6">
        <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">LinkedIn</p>
        <a
          className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-pine transition-colors hover:text-pine-hover"
          href="https://www.linkedin.com/in/will-o-leary-3b6638329/"
        >
          LinkedIn Profile
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-6">
        <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">GitHub</p>
        <a
          className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-pine transition-colors hover:text-pine-hover"
          href="https://github.com/woleary2"
        >
          GitHub Profile
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
