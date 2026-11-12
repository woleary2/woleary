import React from 'react'
import { Link } from 'react-router-dom'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section className="grid items-center gap-10 pb-16 pt-6 sm:pt-12 md:grid-cols-[1.15fr_1fr] md:gap-12">
      <div className="space-y-6">
        <div
          className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-mute backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
          </span>
          Third year at Tufts
        </div>

        <h2
          className="animate-fade-up text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl"
          style={{ animationDelay: '80ms' }}
        >
          Writing network tools in C++ and simulating{' '}
          <span className="font-display text-[1.12em] font-normal italic text-gradient">Markov chains</span>
          <span className="text-ember">.</span>
        </h2>

        <p
          className="max-w-md animate-fade-up text-lg leading-relaxed text-mute"
          style={{ animationDelay: '160ms' }}
        >
          Computer Science and Mathematics student. Mostly interested in systems programming, data
          processing, and mathematical modelling.
        </p>

        <div className="flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-sm font-medium text-paper shadow-lg shadow-pine/25 transition hover:-translate-y-0.5 hover:bg-pine-hover"
          >
            Projects
            <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-line bg-surface/70 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur transition hover:-translate-y-0.5 hover:border-pine/50"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: '320ms' }}>
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-pine/20 via-transparent to-ember/20 blur-2xl" />
        <div className="rotate-1 transition-transform duration-500 hover:rotate-0">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
