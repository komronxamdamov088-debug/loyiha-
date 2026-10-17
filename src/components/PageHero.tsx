import type { ReactNode } from 'react'
import { Breadcrumbs } from './Breadcrumbs'

interface Props {
  crumbs: { name: string; to?: string }[]
  kicker: string
  title: ReactNode
  /** Answer-first summary, shown as the lead paragraph. */
  lead?: string
  meta?: ReactNode
}

export function PageHero({ crumbs, kicker, title, lead, meta }: Props) {
  return (
    <header className="phero">
      <Breadcrumbs items={crumbs} />
      <span className="tag">{kicker}</span>
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {meta && <div className="pmeta">{meta}</div>}
    </header>
  )
}
