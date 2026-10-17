import { useEffect, useState } from 'react'

const KEY = 'lv-loader'

/** Brand splash shown once per session; skipped on prerendered output so crawlers see content immediately. */
export function Loader() {
  const [show, setShow] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!document.documentElement.classList.contains('loader-on')) return
    setShow(true)
    const t = setTimeout(() => {
      setDone(true)
      document.documentElement.classList.remove('loader-on')
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        /* storage unavailable — splash will simply show again */
      }
    }, 1700)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div id="loader" className={done ? 'done' : ''} aria-hidden="true">
      <div className="ld">
        <svg viewBox="0 0 60 60" fill="none" stroke="#e3b866" strokeWidth="2">
          <path d="M30 4 54 30 30 56 6 30Z" />
          <path d="M30 4 30 56M6 30H54M18 17 42 43M42 17 18 43" opacity=".4" />
        </svg>
        <b>LUMIVERA</b>
        <i />
      </div>
    </div>
  )
}
