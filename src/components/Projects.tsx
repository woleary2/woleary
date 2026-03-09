import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">Projects</h2>
        <p className="text-sm text-neutral-500">
          A few things I&apos;ve been working on recently.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 shadow-sm hover:border-indigo-500/40 hover:bg-neutral-900 transition-colors duration-150"
          >
            <h3 className="text-base font-semibold text-neutral-50">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed flex-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <div className="mt-3 pt-3 border-t border-neutral-800">
                <a
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
