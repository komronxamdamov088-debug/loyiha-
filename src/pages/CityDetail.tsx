import { useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { Tiles } from '../components/Tiles'
import { getCity } from '../data/cities'
import { serviceTiles } from '../data/tiles'
import { Seo } from '../seo/Seo'
import NotFound from './NotFound'
import { CITY_MEDIA, PHOTO } from '../data/media'

export default function CityDetail() {
  const { slug = '' } = useParams()
  const c = getCity(slug)
  if (!c) return <NotFound />

  return (
    <>
      <Seo path={`/hududlar/${c.slug}`} />
      <PageHero
        crumbs={[{ name: 'Hududlar', to: '/hududlar' }, { name: c.name }]}
        kicker={`✦ ${c.name}`}
        title={
          <>
            {c.locative} <span className="gold">shisha konstruksiyalar</span>
          </>
        }
        lead={c.intro}
        media={CITY_MEDIA[c.slug]}
      />
      <section className="prose-sec">
        <div className="split">
          <Reveal className="prose">
            {c.details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="split-media">
            <Media item={PHOTO.marmar} />
          </Reveal>
        </div>
      </section>
      <section>
        <SectionHeader label="Xizmatlar">
          {c.locative} <span className="gold">nimalar qilamiz</span>
        </SectionHeader>
        <Tiles items={serviceTiles()} />
      </section>
      <Faq items={c.faqs} media={CITY_MEDIA[c.slug]} />
      <CtaBand title={`${c.name}da bepul o'lchov`} />
    </>
  )
}
