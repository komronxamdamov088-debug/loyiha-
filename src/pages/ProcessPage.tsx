import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { Process } from '../components/Process'
import { GENERAL_FAQS } from '../data/faqs'
import { Seo } from '../seo/Seo'
import { art } from '../data/media'

export default function ProcessPage() {
  return (
    <>
      <Seo path="/jarayon" />
      <PageHero
        crumbs={[{ name: 'Ish jarayoni' }]}
        kicker="✦ Jarayon"
        title={
          <>
            O'lchovdan <span className="gold">o'rnatishgacha</span>
          </>
        }
        lead="Buyurtma to'rt bosqichda amalga oshadi: bepul o'lchov, 3D dizayn va narx, zavodda 3–7 kunlik ishlab chiqarish hamda toza o'rnatish."
        media={art('loft', 'ice')}
      />
      <Process />
      <Faq items={GENERAL_FAQS.slice(1, 5)} media={art('partition', 'gold')} />
      <CtaBand />
    </>
  )
}
