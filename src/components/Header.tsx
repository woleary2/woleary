import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-indigo-600 logo-small flex items-center justify-center text-white font-bold">W</div>
        <div>
          <h1 className="text-2xl font-bold">Will O'Leary</h1>
          <p className="muted">Software</p>
        </div>
      </div>

      <nav>
        <Link className="px-3 py-1 hover:underline" to="/projects">Projects</Link>
        <Link className="px-3 py-1 hover:underline" to="/about">About</Link>
        <Link className="px-3 py-1 hover:underline" to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
