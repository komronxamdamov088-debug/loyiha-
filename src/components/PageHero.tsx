import type { ReactNode } from 'react'
import type { MediaItem } from '../data/media'
import { Breadcrumbs } from './Breadcrumbs'
import { Media } from './Media'

interface Props {
  crumbs: { name: string; to?: string }[]
  kicker: string
  title: ReactNode
  /** Answer-first summary, shown as the lead paragraph. */
  lead?: string
  meta?: ReactNode
  media?: MediaItem
}

export function PageHero({ crumbs, kicker, title, lead, meta, media }: Props) {
  return (
    <header className={`phero${media ? ' has-media' : ''}`}>
      <div className="ptext">
        <Breadcrumbs items={crumbs} />
        <span className="tag">{kicker}</span>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {meta && <div className="pmeta">{meta}</div>}
      </div>
      {media && (
        <div className="pmedia">
          <Media item={media} eager />
        </div>
      )}
    </header>
  )
}
