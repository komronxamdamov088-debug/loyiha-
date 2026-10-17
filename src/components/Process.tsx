import { STEPS } from '../data/content'
import { STEP_MEDIA } from '../data/media'
import { Media } from './Media'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Process() {
  return (
    <section id="jarayon">
      <SectionHeader label="Jarayon">
        G'oyadan <span className="gold">o'rnatishgacha</span>
      </SectionHeader>
      <div className="steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} className="step" delay={i > 0 ? (i as 1 | 2 | 3) : undefined}>
            <i>{i + 1}</i>
            <div className="strip" aria-hidden="true">
              <Media item={STEP_MEDIA[i]} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
