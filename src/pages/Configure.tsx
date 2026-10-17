import { Configurator } from '../components/Configurator'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { getService } from '../data/services'
import { Seo } from '../seo/Seo'
import { PHOTO } from '../data/media'

export default function Configure() {
  const faqs = getService('dush-kabinalari')!.faqs
  return (
    <>
      <Seo path="/konfigurator" />
      <PageHero
        crumbs={[{ name: 'Konfigurator' }]}
        kicker="✦ Konfigurator"
        title={
          <>
            Dush kabinasi <span className="gold">narxini</span> hisoblang
          </>
        }
        lead="Shisha turi, ramka rangi, eshik turi va enini tanlang — taxminiy narx darhol ko'rinadi. Aniq narx bepul o'lchovdan keyin aytiladi."
        media={PHOTO.qora}
      />
      <Configurator />
      <Faq items={faqs} media={PHOTO.marmar} />
      <CtaBand />
    </>
  )
}
