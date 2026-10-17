import { REVIEWS } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Reviews() {
  return (
    <section>
      <SectionHeader label="Mijozlar">
        Ular <span className="gold">yoqtirdi</span>
      </SectionHeader>
      <Reveal className="rev">
        {REVIEWS.map((r) => (
          <div key={r.name}>
            <div className="stars">★★★★★</div>
            <q>{r.text}</q>
            <b>{r.name}</b>
            <small>{r.city}</small>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
