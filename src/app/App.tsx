import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}

function Shell() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-40 h-80 w-80 animate-float rounded-full bg-pine/15 blur-3xl" />
        <div className="absolute -right-16 top-[60%] h-72 w-72 animate-float-slow rounded-full bg-ember/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-6 sm:px-8 sm:py-10">
        <Header />

        <main key={location.pathname} className="flex-1 animate-fade-up py-4 sm:py-8">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Will O&apos;Leary
          </p>
          <div className="flex gap-4">
            <a className="transition-colors hover:text-pine" href="https://github.com/woleary2" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              className="transition-colors hover:text-pine"
              href="https://www.linkedin.com/in/will-o-leary-3b6638329/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="transition-colors hover:text-pine" href="mailto:will.oleary217@gmail.com">
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
