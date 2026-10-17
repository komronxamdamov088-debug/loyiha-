import { Link, useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ARTICLES, getArticle } from '../data/articles'
import { SERVICE_PAGES } from '../data/services'
import { Seo } from '../seo/Seo'
import NotFound from './NotFound'

export default function ArticleDetail() {
  const { slug = '' } = useParams()
  const a = getArticle(slug)
  if (!a) return <NotFound />

  return (
    <>
      <Seo path={`/maqolalar/${a.slug}`} />
      <PageHero
        crumbs={[{ name: 'Maqolalar', to: '/maqolalar' }, { name: a.title }]}
        kicker="✦ Maqola"
        title={a.title}
        lead={a.answer}
        meta={
          <span>
            <time dateTime={a.published}>{a.published}</time> · yangilangan <time dateTime={a.modified}>{a.modified}</time> ·{' '}
            {a.readMinutes} daqiqa o'qish
          </span>
        }
      />
      <article className="prose-sec">
        <div className="prose">
          {a.sections.map((s) => (
            <Reveal key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </article>
      <Faq items={a.faqs} />
      <section>
        <div className="chips">
          {SERVICE_PAGES.map((s) => (
            <Link key={s.slug} className="chip" to={`/xizmatlar/${s.slug}`}>
              {s.name}
            </Link>
          ))}
          {ARTICLES.filter((x) => x.slug !== a.slug).map((x) => (
            <Link key={x.slug} className="chip" to={`/maqolalar/${x.slug}`}>
              {x.title}
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
