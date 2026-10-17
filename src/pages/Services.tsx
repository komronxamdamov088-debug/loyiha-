import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { Services } from '../components/Services'
import { Seo } from '../seo/Seo'
import { PHOTO } from '../data/media'

export default function ServicesPage() {
  return (
    <>
      <Seo path="/xizmatlar" />
      <PageHero
        crumbs={[{ name: 'Xizmatlar' }]}
        kicker="✦ Xizmatlar"
        title={
          <>
            Shisha konstruksiyalar <span className="gold">buyurtmaga</span>
          </>
        }
        lead="To'rt yo'nalishda ishlaymiz: dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalari. Hammasi uchun o'lchov bepul, kafolat — 5 yil."
        media={PHOTO.hammom}
      />
      <Services />
      <CtaBand />
    </>
  )
}
