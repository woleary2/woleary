import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="space-y-4 max-w-2xl">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">Contact</h2>
        <p className="text-sm text-neutral-500">
          Reach out
        </p>
      </div>

      <a
        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium"
        href="mailto:will.oleary217@gmail.com"
      >
        will.oleary217@gmail.com
      </a>
    </section>
  )
}
