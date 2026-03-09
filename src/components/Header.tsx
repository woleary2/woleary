import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path
    return [
      'px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-150',
      isActive
        ? 'border-indigo-400 text-neutral-50'
        : 'border-transparent text-neutral-400 hover:text-neutral-100 hover:border-neutral-600',
    ].join(' ')
  }

  return (
    <header className="flex items-center justify-between gap-6 border-b border-neutral-800 pb-4 mb-8">
      <div className="flex items-center gap-4">
        <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-base">
          W
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-neutral-50">Will O'Leary</h1>
          <p className="text-xs text-neutral-500">Software developer</p>
        </div>
      </div>

      <nav className="flex items-center gap-2">
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
