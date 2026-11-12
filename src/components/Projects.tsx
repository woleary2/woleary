import React from 'react'
import { projects } from '../data/projects'

const trackSpotlight = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 space-y-8">
      <header className="max-w-2xl space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">Work</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Projects
        </h2>
        <p className="text-base leading-relaxed text-mute">What I&apos;ve been working on recently.</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, index) => {
          const href = p.link ? (p.link.startsWith('http') ? p.link : `https://${p.link}`) : undefined
          return (
            <article
              key={p.id}
              onMouseMove={trackSpotlight}
              style={{ animationDelay: `${index * 90}ms` }}
              className={[
                'spotlight group flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-5 shadow-sm shadow-ink/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-xl hover:shadow-pine/10 sm:p-7',
                index === 0 ? 'sm:col-span-2' : '',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                <span className="font-display text-3xl italic leading-none text-line transition-colors duration-300 group-hover:text-pine/60">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono-tag rounded-full border border-pine/15 bg-pine-soft px-2.5 py-1 text-[11px] text-pine-hover"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {href && (
                <div className="mt-6 border-t border-line pt-4">
                  <a
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-pine transition-colors hover:text-pine-hover"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
