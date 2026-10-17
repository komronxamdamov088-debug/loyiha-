import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { Tiles } from '../components/Tiles'
import { getService } from '../data/services'
import { cityTiles, serviceTiles } from '../data/tiles'
import { Seo } from '../seo/Seo'
import { SITE } from '../site'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />

  return (
    <>
      <Seo path={`/xizmatlar/${s.slug}`} />
      <PageHero
        crumbs={[{ name: 'Xizmatlar', to: '/xizmatlar' }, { name: s.name }]}
        kicker={`✦ ${s.name}`}
        title={s.h1}
        lead={s.answer}
        meta={<span>Yangilangan: {SITE.modified}</span>}
        media={s.hero}
      />
      <section className="prose-sec">
        <Reveal className="prose">
          {s.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="cta">
            <Button to="/konfigurator">Narxni hisoblash →</Button>
            <Button to="/aloqa" variant="outline">
              Bepul o'lchov
            </Button>
          </div>
        </Reveal>
      </section>
      <section className="shots-sec">
        <div className="shots">
          {s.gallery.map((im, i) => (
            <Reveal key={`${i}-${im.alt}`} className={`shot s${i}`} delay={i > 0 ? (Math.min(i, 3) as 1 | 2 | 3) : undefined}>
              <Media item={im} />
            </Reveal>
          ))}
        </div>
      </section>
      <section>
        <SectionHeader label="Afzalliklar">
          Nega <span className="gold">LUMIVERA</span>
        </SectionHeader>
        <div className="grid">
          {s.benefits.map((b, i) => (
            <Reveal key={b.title} className="card flat" delay={i > 0 ? (Math.min(i, 3) as 1 | 2 | 3) : undefined}>
              <div className="strip">
                <Media item={[s.hero, ...s.gallery][i % 4]} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section>
        <SectionHeader label="Xususiyatlar">
          Texnik <span className="gold">ma'lumotlar</span>
        </SectionHeader>
        <Reveal>
          <table className="specs">
            <tbody>
              {s.specs.map((x) => (
                <tr key={x.label}>
                  <th scope="row">{x.label}</th>
                  <td>{x.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <div className="chips" style={{ marginTop: 30 }}>
          {s.useCases.map((u) => (
            <span key={u} className="chip static">
              {u}
            </span>
          ))}
        </div>
      </section>
      <Faq items={s.faqs} media={s.gallery[0]} />
      <section>
        <SectionHeader label="Boshqa xizmatlar">
          Yana <span className="gold">ko'ring</span>
        </SectionHeader>
        <Tiles items={[...serviceTiles(s.slug), ...cityTiles()]} />
      </section>
      <CtaBand />
    </>
  )
}
