import React, { useEffect, useState } from 'react'

type Line = { cmd: string; out: string[] }

const SCRIPT: Line[] = [
  { cmd: 'whoami', out: ['will — cs + math @ tufts'] },
  { cmd: 'ls ~/interests', out: ['systems/  networking/  data/  modeling/'] },
  { cmd: './network_activity', out: ['↓ 12.4 MB/s   ↑ 1.8 MB/s   conns: 37'] },
]

const TYPE_MS = 55
const PAUSE_MS = 650

export default function Terminal() {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // step = which line we're on; chars = how much of its cmd is typed; shown = whether output is visible
  const [step, setStep] = useState(reduced ? SCRIPT.length : 0)
  const [chars, setChars] = useState(0)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (step >= SCRIPT.length) return
    const cmd = SCRIPT[step].cmd
    let t: number
    if (chars < cmd.length) {
      t = window.setTimeout(() => setChars((c) => c + 1), TYPE_MS + Math.random() * 40)
    } else if (!shown) {
      t = window.setTimeout(() => setShown(true), 220)
    } else {
      t = window.setTimeout(() => {
        setStep((s) => s + 1)
        setChars(0)
        setShown(false)
      }, PAUSE_MS)
    }
    return () => window.clearTimeout(t)
  }, [step, chars, shown])

  const Prompt = () => (
    <span className="select-none text-pine">
      ~<span className="text-ember">$</span>{' '}
    </span>
  )

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-xl shadow-ink/10 backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono-tag ml-3 text-[11px] text-mute">will@tufts — zsh</span>
      </div>
      <div className="font-mono-tag min-h-[188px] space-y-1.5 px-4 py-4 text-[13px] leading-relaxed">
        {SCRIPT.map((line, i) => {
          if (i > step) return null
          const done = i < step
          const typed = done ? line.cmd : line.cmd.slice(0, chars)
          return (
            <div key={line.cmd}>
              <div className="text-ink">
                <Prompt />
                {typed}
                {i === step && !shown && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-pine" />
                )}
              </div>
              {(done || shown) &&
                line.out.map((o) => (
                  <div key={o} className="text-mute">
                    {o}
                  </div>
                ))}
            </div>
          )
        })}
        {step >= SCRIPT.length && (
          <div className="text-ink">
            <Prompt />
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-pine" />
          </div>
        )}
      </div>
    </div>
  )
}
