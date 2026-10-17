import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES, SERVICE_MEDIA } from '../data/content'
import { useInView } from '../hooks/useInView'
import { Media } from './Media'
import { SectionHeader } from './SectionHeader'

type Service = (typeof SERVICES)[number]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [ref, inView] = useInView<HTMLAnchorElement>()

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.transform = `perspective(800px) rotateY(${(x - 0.5) * 14}deg) rotateX(${(0.5 - y) * 14}deg)`
  }

  const cls = ['card', 'rv', index > 0 && `d${index}`, inView && 'in'].filter(Boolean).join(' ')

  return (
    <Link
      ref={ref}
      to={`/xizmatlar/${service.slug}`}
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
    >
      <div className="cmedia" aria-hidden="true">
        <Media item={SERVICE_MEDIA[service.slug as keyof typeof SERVICE_MEDIA]} />
      </div>
      <span className="n">{String(index + 1).padStart(2, '0')}</span>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <rect {...service.shape} />
        <path d={service.path} />
      </svg>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <span className="more">Batafsil →</span>
    </Link>
  )
}

export function Services() {
  return (
    <section id="xizmat">
      <SectionHeader label="Xizmatlar">
        Har bir <span className="gold">xonaga</span> o'z shishasi
      </SectionHeader>
      <div className="grid">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
