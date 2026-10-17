import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CITIES } from '../data/cities'
import { Seo } from '../seo/Seo'
import { CITY_MEDIA, PHOTO } from '../data/media'

export default function Cities() {
  return (
    <>
      <Seo path="/hududlar" />
      <PageHero
        crumbs={[{ name: 'Hududlar' }]}
        kicker="✦ Hududlar"
        title={
          <>
            Xizmat <span className="gold">hududlari</span>
          </>
        }
        lead="Toshkent, Samarqand va Buxoroda o'lchov, yetkazish va o'rnatish xizmatini ko'rsatamiz."
        media={PHOTO.marmar}
      />
      <section>
        <div className="grid">
          {CITIES.map((c) => (
            <Reveal key={c.slug} className="card flat">
              <div className="strip">
                <Media item={CITY_MEDIA[c.slug]} />
              </div>
              <h3>
                <Link to={`/hududlar/${c.slug}`}>{c.name}</Link>
              </h3>
              <p>{c.intro}</p>
              <Link className="more" to={`/hududlar/${c.slug}`}>
                Batafsil →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
