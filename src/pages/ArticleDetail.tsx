import { useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { getArticle } from '../data/articles'
import { articleTiles, serviceTiles } from '../data/tiles'
import { Tiles } from '../components/Tiles'
import { Seo } from '../seo/Seo'
import NotFound from './NotFound'
import { ARTICLE_INLINE, ARTICLE_MEDIA } from '../data/media'

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
        media={ARTICLE_MEDIA[a.slug]}
        meta={
          <span>
            <time dateTime={a.published}>{a.published}</time> · yangilangan <time dateTime={a.modified}>{a.modified}</time> ·{' '}
            {a.readMinutes} daqiqa o'qish
          </span>
        }
      />
      <article className="prose-sec">
        <div className="prose">
          {a.sections.map((s, i) => (
            <Reveal key={s.h}>
              {i === 1 && (
                <figure className="inline-fig">
                  <Media item={ARTICLE_INLINE[a.slug]} />
                  <figcaption>{ARTICLE_INLINE[a.slug].alt}</figcaption>
                </figure>
              )}
              <h2>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </article>
      <Faq items={a.faqs} media={ARTICLE_MEDIA[a.slug]} />
      <section>
        <Tiles items={[...serviceTiles(), ...articleTiles(a.slug)]} />
      </section>
      <CtaBand />
    </>
  )
}
