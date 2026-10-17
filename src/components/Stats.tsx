import { STATS } from '../data/content'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section>
      <div className="stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i > 0 ? (i as 1 | 2 | 3) : undefined}>
            <CountUp to={s.n} suffix={s.suffix} className="gold" />
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
