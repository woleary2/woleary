import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative ml-1 flex h-8 w-8 items-center justify-center rounded-full text-mute transition hover:bg-pine-soft hover:text-ink"
    >
      <svg
        viewBox="0 0 24 24"
        className={`absolute h-4 w-4 transition-all duration-300 ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className={`absolute h-4 w-4 transition-all duration-300 ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  )
}

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/projects') {
      return location.pathname === '/' || location.pathname === '/projects'
    }
    return location.pathname === path
  }

  const navLinkClass = (path: string) =>
    [
      'rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200',
      isActive(path) ? 'bg-pine text-paper shadow-md shadow-pine/25' : 'text-mute hover:bg-pine-soft hover:text-ink',
    ].join(' ')

  return (
    <header className="sticky top-4 z-20 mb-2 flex flex-col gap-3 rounded-2xl border border-line bg-surface/75 px-3 py-3 shadow-lg shadow-ink/5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <Link to="/" className="group flex items-center gap-3">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pine to-pine-hover text-paper shadow-md shadow-pine/25 transition-transform duration-300 group-hover:-rotate-6">
          <span className="font-display text-2xl italic leading-none">W</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-ink">Will O&apos;Leary</h1>
          <p className="font-mono-tag text-[11px] text-mute">software developer</p>
        </div>
      </Link>

      <nav className="flex items-center gap-0.5 sm:gap-1">
        <Link className={navLinkClass('/projects')} to="/projects">
          Projects
        </Link>
        <Link className={navLinkClass('/about')} to="/about">
          About
        </Link>
        <Link className={navLinkClass('/contact')} to="/contact">
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}
