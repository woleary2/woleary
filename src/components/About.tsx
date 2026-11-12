import React from 'react'

const facts = [
  { label: 'School', value: 'Tufts University', icon: '◆' },
  { label: 'Majors', value: 'CS + Mathematics', icon: '∑' },
  { label: 'Interests', value: 'Systems programming, Data Analytics, Math Modelling', icon: '⌘' },
]

const toolbox = ['C++', 'TypeScript', 'React', 'Tailwind', 'Networking', 'TCP/UDP', 'Statistics']

export default function About() {
  return (
    <section id="about" className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">About</p>
        <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          CS + Math at <span className="font-display text-[1.15em] font-normal italic text-gradient">Tufts</span>
        </h2>
      </header>

      <p className="text-xl leading-relaxed text-ink/80">
        I&apos;m a third-year student at Tufts University studying Computer Science and Mathematics. I
        enjoy low-level and systems programming, as well as data processing and mathematical modelling.
      </p>

      <ul className="grid gap-4 sm:grid-cols-3">
        {facts.map((item, i) => (
          <li
            key={item.label}
            style={{ animationDelay: `${i * 90}ms` }}
            className="group animate-fade-up rounded-2xl border border-line bg-surface/80 px-5 py-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-lg hover:shadow-pine/10"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">{item.label}</p>
              <span className="text-lg text-pine/50 transition-colors group-hover:text-pine">{item.icon}</span>
            </div>
            <p className="mt-2 text-sm font-medium leading-snug text-ink">{item.value}</p>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">Toolbox</p>
        <div className="flex flex-wrap gap-2">
          {toolbox.map((t) => (
            <span
              key={t}
              className="font-mono-tag rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-ink transition hover:-translate-y-0.5 hover:border-pine/50 hover:text-pine"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
