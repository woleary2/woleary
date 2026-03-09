import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen max-w-4xl mx-auto px-6 py-10 sm:px-8">
        <Header />

        <main className="space-y-12">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
