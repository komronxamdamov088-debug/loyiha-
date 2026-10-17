import { useEffect, useRef } from 'react'
import { Button } from './Button'
import { CountUp } from './CountUp'

export function Hero() {
  const doorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      if (doorRef.current) {
        doorRef.current.style.transform = `rotateY(${x * 40}deg) rotateX(${-y * 20}deg)`
      }
    }
    addEventListener('mousemove', onMove)
    return () => removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="top">
      <div>
        <span className="tag">✦ 15 yillik tajriba</span>
        <h1>
          <span className="l"><span>Shisha —</span></span>
          <span className="l"><span>bu shunchaki</span></span>
          <span className="l"><span className="gold">devor emas.</span></span>
        </h1>
        <p>
          Dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalari. Uyingizga nur,
          ko'lam va hashamat olib kiramiz.
        </p>
        <div className="cta">
          <Button to="/konfigurator">Narxni hisoblash →</Button>
          <Button to="/loyihalar" variant="outline">Ishlarimiz</Button>
        </div>
      </div>
      <div className="hero-r">
        <div className="door" ref={doorRef}>
          <div className="pane b" />
          <div className="pane"><div className="handle" /></div>
          <div className="pane f" style={{ opacity: 0.55 }} />
        </div>
        <div className="float f1"><CountUp to={2500} />bajarilgan loyiha</div>
        <div className="float f2"><b>5 yil</b>kafolat</div>
      </div>
      <div className="scroll" />
    </section>
  )
}
