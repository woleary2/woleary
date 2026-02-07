import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path
    return [
      'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
      isActive
        ? 'bg-indigo-600/20 text-indigo-300'
        : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800',
    ].join(' ')
  }

  return (
    <header className="flex items-center justify-between gap-6 border-b border-neutral-800 pb-6 mb-8">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-900/30">
          W
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-50">Will O'Leary</h1>
          <p className="text-sm text-neutral-500">Software developer</p>
        </div>
      </div>

      <nav className="flex items-center gap-1">
        <Link className={navLinkClass('/projects')} to="/projects">Projects</Link>
        <Link className={navLinkClass('/about')} to="/about">About</Link>
        <Link className={navLinkClass('/contact')} to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
