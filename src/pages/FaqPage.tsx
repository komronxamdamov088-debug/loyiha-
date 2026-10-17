import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { GENERAL_FAQS } from '../data/faqs'
import { Seo } from '../seo/Seo'
import { art, PHOTO } from '../data/media'

export default function FaqPage() {
  return (
    <>
      <Seo path="/savollar" />
      <PageHero
        crumbs={[{ name: 'Savollar' }]}
        kicker="✦ FAQ"
        title={
          <>
            Ko'p so'raladigan <span className="gold">savollar</span>
          </>
        }
        lead="Muddat, narx, kafolat va temperlangan shisha haqida qisqa javoblar."
        media={art('tempered', 'ice')}
      />
      <Faq items={GENERAL_FAQS} title="Javoblar" media={PHOTO.hammom} />
      <CtaBand />
    </>
  )
}
