import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ARTICLES } from '../data/articles'
import { Seo } from '../seo/Seo'
import { ARTICLE_MEDIA, art } from '../data/media'

export default function Articles() {
  return (
    <>
      <Seo path="/maqolalar" />
      <PageHero
        crumbs={[{ name: 'Maqolalar' }]}
        kicker="✦ Blog"
        title={
          <>
            Foydali <span className="gold">maqolalar</span>
          </>
        }
        lead="Temperlangan shisha, dush kabinasi tanlash va loft peregorodkalar bo'yicha qisqa va aniq qo'llanmalar."
        media={art('tempered', 'gold')}
      />
      <section>
        <div className="grid">
          {ARTICLES.map((a) => (
            <Reveal key={a.slug} className="card flat">
              <div className="strip">
                <Media item={ARTICLE_MEDIA[a.slug]} />
              </div>
              <small className="date">
                {a.modified} · {a.readMinutes} daqiqa
              </small>
              <h3>
                <Link to={`/maqolalar/${a.slug}`}>{a.title}</Link>
              </h3>
              <p>{a.description}</p>
              <Link className="more" to={`/maqolalar/${a.slug}`}>
                O'qish →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
