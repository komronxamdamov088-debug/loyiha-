import type { CSSProperties } from 'react'
import { GALLERY } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Gallery() {
  return (
    <section id="galereya">
      <SectionHeader label="Portfolio">
        Ishlarimizdan <span className="gold">lavhalar</span>
      </SectionHeader>
      <div className="gal">
        {GALLERY.map((item, i) => (
          <Reveal
            key={item.title}
            className="g"
            delay={i % 3 ? ((i % 3) as 1 | 2) : undefined}
            style={{ '--bgi': item.bg } as CSSProperties}
          >
            <span>{item.title}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
