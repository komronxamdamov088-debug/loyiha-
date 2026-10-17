import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'solid' | 'outline'
  /** Internal route; renders a client-side router link. */
  to?: string
  /** External or tel:/mailto: target; renders a plain anchor. */
  href?: string
}

/** Anchor styled as a button, with a subtle magnetic hover effect. */
export function Button({ variant = 'solid', className = '', children, to, href, ...rest }: Props) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`
  }
  const onLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = ''
  }
  const props = {
    className: `btn ${variant === 'outline' ? 'o' : ''} ${className}`.trim(),
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    ...rest,
  }
  return to ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
