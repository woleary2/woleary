import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {projects.map((p) => (
        <article key={p.id} className="project-card">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="muted mt-2">{p.description}</p>
          <div className="mt-4 flex items-center gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-sm px-2 py-1 bg-neutral-700 rounded">{t}</span>
            ))}
          </div>
          <div className="mt-4">
            {p.link && (
              <a className="text-indigo-400 hover:underline" href={p.link} target="_blank" rel="noreferrer">View project</a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
