import type { Faq as FaqItem } from '../data/services'
import type { MediaItem } from '../data/media'
import { Media } from './Media'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Faq({ items, title = 'Savol-javob', media }: { items: FaqItem[]; title?: string; media?: MediaItem }) {
  return (
    <section className="faq">
      <SectionHeader label="FAQ">{title}</SectionHeader>
      <div className={`faq-wrap${media ? ' has-media' : ''}`}>
        <div className="faq-list">
          {items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        {media && (
          <Reveal className="faq-media">
            <Media item={media} />
          </Reveal>
        )}
      </div>
    </section>
  )
}
