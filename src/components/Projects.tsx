import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.id}
          className="bg-neutral-800/80 rounded-xl p-5 shadow-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200"
        >
          <h3 className="text-lg font-semibold text-neutral-50">{p.title}</h3>
          <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{p.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-neutral-700/80 text-neutral-300 rounded-md font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          {p.link && (
            <div className="mt-4 pt-4 border-t border-neutral-700/50">
              <a
                className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
