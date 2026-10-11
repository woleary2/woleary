import React from 'react'

export default function About() {
  return (
    <section id="about" className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-pine">About</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">About me</h2>
      </header>

      <p className="text-lg leading-relaxed text-ink/80">
        I&apos;m Will, a third-year student at Tufts University studying Computer Science and
        Mathematics. I enjoy low-level and systems programming, as well as data processing and
        mathematical modelling.
      </p>

      <ul className="grid gap-3 sm:grid-cols-3">
        {[
          { label: 'School', value: 'Tufts University' },
          { label: 'Majors', value: 'CS + Mathematics' },
          { label: 'Interests', value: 'Systems programming, Data Analytics, Math Modelling' },
        ].map((item) => (
          <li
            key={item.label}
            className="rounded-2xl border border-line bg-surface px-4 py-4"
          >
            <p className="font-mono-tag text-[11px] uppercase tracking-wider text-mute">{item.label}</p>
            <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
