import { PHONE, PHONE_LABEL } from '../data/content'
import { Button } from './Button'
import { Reveal } from './Reveal'

export function CtaBand({ title = "Bepul o'lchovga yoziling" }: { title?: string }) {
  return (
    <section className="cta-band">
      <Reveal className="cta-in">
        <h2>
          {title} — <span className="gold">usta o'zi keladi</span>
        </h2>
        <div className="cta">
          <Button to="/aloqa">Ariza qoldirish →</Button>
          <Button href={`tel:${PHONE}`} variant="outline">
            {PHONE_LABEL}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
