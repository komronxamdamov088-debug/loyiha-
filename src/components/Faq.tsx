import type { Faq as FaqItem } from '../data/services'
import { SectionHeader } from './SectionHeader'

export function Faq({ items, title = 'Savol-javob' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="faq">
      <SectionHeader label="FAQ">{title}</SectionHeader>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
