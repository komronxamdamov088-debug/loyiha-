import { Configurator } from '../components/Configurator'
import { Contact } from '../components/Contact'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { Media } from '../components/Media'
import { Marquee } from '../components/Marquee'
import { Process } from '../components/Process'
import { Reviews } from '../components/Reviews'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { Services } from '../components/Services'
import { Stats } from '../components/Stats'
import { Tiles } from '../components/Tiles'
import { cityTiles } from '../data/tiles'
import { GENERAL_FAQS } from '../data/faqs'
import { art, PHOTO } from '../data/media'
import { Seo } from '../seo/Seo'

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <Marquee />
      <section className="about-sum">
        <div className="split about-split">
        <Reveal>
          <p className="lead">
            LUMIVERA — temperlangan shishadan dush kabinalari, peregorodkalar, loft eshiklar va moskit setkalarini
            buyurtma asosida ishlab chiqaradigan ustaxona. Usta bepul o'lchaydi, shisha zavodda 3–7 kunda tayyorlanadi,
            o'rnatish va 5 yillik kafolat narxga kiradi.
          </p>
        </Reveal>
        <Reveal className="split-media duo">
          <Media item={PHOTO.marmar} />
          <Media item={art('partition', 'gold')} />
        </Reveal>
        </div>
      </section>
      <Services />
      <Configurator />
      <Stats />
      <Gallery />
      <Process />
      <section>
        <SectionHeader label="Hududlar">
          Qayerda <span className="gold">ishlaymiz</span>
        </SectionHeader>
        <Tiles items={cityTiles()} />
      </section>
      <Reviews />
      <Faq items={GENERAL_FAQS.slice(0, 5)} title="Ko'p beriladigan savollar" media={PHOTO.qora} />
      <CtaBand />
      <Contact />
    </>
  )
}
