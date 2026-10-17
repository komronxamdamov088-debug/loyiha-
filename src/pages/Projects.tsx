import { CtaBand } from '../components/CtaBand'
import { Gallery } from '../components/Gallery'
import { PageHero } from '../components/PageHero'
import { Reviews } from '../components/Reviews'
import { Stats } from '../components/Stats'
import { Seo } from '../seo/Seo'
import { PHOTO } from '../data/media'

export default function Projects() {
  return (
    <>
      <Seo path="/loyihalar" />
      <PageHero
        crumbs={[{ name: 'Loyihalar' }]}
        kicker="✦ Portfolio"
        title={
          <>
            Bajarilgan <span className="gold">loyihalar</span>
          </>
        }
        lead="Villa dush zonalaridan ofis peregorodkalari, klinika va restoran fazolarigacha — 2500 dan ortiq bajarilgan loyiha."
        media={PHOTO.marmar}
      />
      <Gallery />
      <Stats />
      <Reviews />
      <CtaBand />
    </>
  )
}
