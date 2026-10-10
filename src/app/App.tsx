import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-pine/15 blur-3xl" />
          <div className="absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-amber-700/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-6 sm:px-8 sm:py-10">
          <Header />

          <main className="flex-1 py-4 sm:py-8">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer className="mt-10 border-t border-line pt-6 text-sm text-mute">
            <p>© {new Date().getFullYear()} Will O&apos;Leary</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}
