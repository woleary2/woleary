import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/projects') {
      return location.pathname === '/' || location.pathname === '/projects'
    }
    return location.pathname === path
  }

  const navLinkClass = (path: string) => {
    return [
      'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150',
      isActive(path)
        ? 'bg-pine text-paper shadow-sm'
        : 'text-mute hover:bg-pine-soft hover:text-ink',
    ].join(' ')
  }

  return (
    <header className="sticky top-4 z-20 mb-2 flex flex-col gap-3 rounded-2xl border border-line bg-surface/80 px-3 py-3 shadow-sm shadow-ink/5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine text-base font-semibold text-paper shadow-md shadow-pine/25">
          W
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-ink">Will O&apos;Leary</h1>
          <p className="text-xs text-mute">Software developer</p>
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
      </nav>
    </header>
  )
}
