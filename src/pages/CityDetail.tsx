import { Link, useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { getCity } from '../data/cities'
import { SERVICE_PAGES } from '../data/services'
import { Seo } from '../seo/Seo'
import NotFound from './NotFound'
import { CITY_MEDIA } from '../data/media'

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
        <Reveal className="prose">
          {c.details.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </section>
      <section>
        <SectionHeader label="Xizmatlar">
          {c.locative} <span className="gold">nimalar qilamiz</span>
        </SectionHeader>
        <div className="chips">
          {SERVICE_PAGES.map((s) => (
            <Link key={s.slug} className="chip" to={`/xizmatlar/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
      </section>
      <Faq items={c.faqs} />
      <CtaBand title={`${c.name}da bepul o'lchov`} />
    </>
  )
}
