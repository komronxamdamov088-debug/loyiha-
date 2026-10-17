import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/content'
import { Button } from './Button'

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className={`top ${scrolled || open ? 's' : ''} ${open ? 'open' : ''}`.trim()} aria-label="Asosiy menyu">
      <Link className="logo" to="/" aria-label="LUMIVERA — bosh sahifa">
        <svg viewBox="0 0 60 60" fill="none" stroke="#e3b866" strokeWidth="3" aria-hidden="true">
          <path d="M30 4 54 30 30 56 6 30Z" />
          <path d="M30 4 30 56M6 30H54" opacity=".5" />
        </svg>
        LUMIVERA
      </Link>
      <ul>
        {NAV_LINKS.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to}>{l.label}</NavLink>
          </li>
        ))}
      </ul>
      <Button to="/aloqa" className="nav-cta">
        Buyurtma
      </Button>
      <button
        className="burger"
        aria-label="Menyuni ochish"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <i />
        <i />
      </button>
    </nav>
  )
}
