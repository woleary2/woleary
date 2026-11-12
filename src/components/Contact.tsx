import React from 'react'

const EMAIL = 'will.oleary217@gmail.com'

const links = [
  { label: 'LinkedIn', text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/will-o-leary-3b6638329/' },
  { label: 'GitHub', text: 'GitHub Profile', href: 'https://github.com/woleary2' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">Contact</p>
        <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Email, LinkedIn, <span className="font-display text-[1.15em] font-normal italic text-gradient">GitHub</span>
        </h2>
        <p className="text-base leading-relaxed text-mute">
          The best way to reach me is email. I also have a LinkedIn and GitHub, which you can find below.
        </p>
      </header>

      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-7 backdrop-blur sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pine/15 blur-3xl" />
        <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">Email</p>
        <a
          className="group mt-2 inline-flex flex-wrap items-center gap-2 break-all text-2xl font-medium text-ink transition-colors hover:text-pine sm:text-3xl"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
          <span aria-hidden="true" className="text-pine transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        <div className="mt-6">
          <a
            className="inline-flex items-center rounded-full bg-pine px-5 py-2.5 text-sm font-medium text-paper shadow-lg shadow-pine/25 transition hover:-translate-y-0.5 hover:bg-pine-hover"
            href={`mailto:${EMAIL}`}
          >
            Send an email
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-lg hover:shadow-pine/10"
          >
            <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">{l.label}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-pine">
              {l.text}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
