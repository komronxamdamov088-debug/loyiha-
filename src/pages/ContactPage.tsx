import { Contact } from '../components/Contact'
import { PageHero } from '../components/PageHero'
import { Seo } from '../seo/Seo'
import { PHOTO } from '../data/media'

export default function ContactPage() {
  return (
    <>
      <Seo path="/aloqa" />
      <PageHero
        crumbs={[{ name: 'Aloqa' }]}
        kicker="✦ Aloqa"
        title={
          <>
            Biz bilan <span className="gold">bog'laning</span>
          </>
        }
        lead="Ariza qoldiring yoki qo'ng'iroq qiling — menejer qulay vaqtda bepul o'lchovni kelishadi."
        media={PHOTO.hammom}
      />
      <Contact />
    </>
  )
}
