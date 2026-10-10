import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <header className="max-w-2xl space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">Selected work</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Projects</h2>
        <p className="text-base leading-relaxed text-mute">
          A few things I&apos;ve been working on recently — systems tools, simulations, and this site.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, index) => (
          <article
            key={p.id}
            className={[
              'group flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-sm shadow-ink/5 transition duration-200 hover:-translate-y-0.5 hover:border-pine/40 hover:shadow-md hover:shadow-pine/10 sm:p-6',
              index === 0 ? 'sm:col-span-2' : '',
            ].join(' ')}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
              <span className="font-mono-tag text-[11px] text-mute">0{index + 1}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono-tag rounded-full bg-pine-soft px-2.5 py-1 text-[11px] text-pine-hover"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <div className="mt-5 border-t border-line pt-4">
                <a
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-pine transition-colors hover:text-pine-hover"
                  href={p.link.startsWith('http') ? p.link : `https://${p.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
