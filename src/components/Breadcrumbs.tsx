import { Link } from 'react-router-dom'

export function Breadcrumbs({ items }: { items: { name: string; to?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Sahifa yo'li">
      <Link to="/">Bosh sahifa</Link>
      {items.map((it) => (
        <span key={it.name}>
          <i aria-hidden="true">/</i>
          {it.to ? <Link to={it.to}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
        </span>
      ))}
    </nav>
  )
}
