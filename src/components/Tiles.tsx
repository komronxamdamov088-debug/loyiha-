import { Link } from 'react-router-dom'
import type { MediaItem } from '../data/media'
import { Media } from './Media'
import { Reveal } from './Reveal'

export interface TileItem {
  to: string
  label: string
  sub?: string
  media: MediaItem
}

/** Grid of image-backed link tiles, used instead of bare text chips. */
export function Tiles({ items }: { items: TileItem[] }) {
  return (
    <div className="tiles">
      {items.map((t, i) => (
        <Reveal key={t.to} delay={i > 0 ? (Math.min(i, 3) as 1 | 2 | 3) : undefined}>
          <Link className="tile" to={t.to}>
            <Media item={t.media} />
            <span className="tl">
              <b>{t.label}</b>
              {t.sub && <small>{t.sub}</small>}
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
