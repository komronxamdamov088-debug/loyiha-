import { PHONE, PHONE_LABEL } from '../data/content'
import { PHOTO } from '../data/media'
import { Button } from './Button'
import { Media } from './Media'
import { Reveal } from './Reveal'

export function CtaBand({ title = "Bepul o'lchovga yoziling" }: { title?: string }) {
  return (
    <section className="cta-band">
      <Reveal className="cta-in">
        <div className="cta-bg" aria-hidden="true">
          <Media item={PHOTO.hammom} />
        </div>
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
