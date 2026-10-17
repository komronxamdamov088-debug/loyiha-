import { CtaBand } from '../components/CtaBand'
import { Media } from '../components/Media'
import { PHOTO, VALUE_MEDIA } from '../data/media'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { Stats } from '../components/Stats'
import { Seo } from '../seo/Seo'

const VALUES = [
  { title: 'Xavfsizlik', text: "Faqat temperlangan yoki triplex shisha va zanglamaydigan furnitura ishlatamiz." },
  { title: 'Aniqlik', text: "Har bir konstruksiya joyida o'lchanib, millimetrgacha moslab tayyorlanadi." },
  { title: 'Shaffoflik', text: "Narx va muddat oldindan kelishiladi, yashirin to'lovlar yo'q." },
  { title: 'Kafolat', text: "Barcha ishlarga 5 yillik kafolat beramiz va uni bajaramiz." },
]

export default function About() {
  return (
    <>
      <Seo path="/biz-haqimizda" />
      <PageHero
        crumbs={[{ name: 'Biz haqimizda' }]}
        kicker="✦ Kompaniya"
        title={
          <>
            Shisha — <span className="gold">bizning hunarimiz</span>
          </>
        }
        lead="LUMIVERA — 15 yillik tajribaga ega shisha konstruksiyalar ustaxonasi: dush kabinalari, peregorodkalar, loft eshiklar va moskit setkalari."
        media={PHOTO.qora}
      />
      <section className="prose-sec">
        <div className="split">
        <Reveal className="prose">
          <p>
            Biz uyga nur, ko'lam va hashamat olib kirishni maqsad qilganmiz. Har bir loyiha o'lchovdan boshlanadi: usta
            xonangizni joyida o'lchaydi, 3D vizual tayyorlanadi, shisha esa zavodda aniq o'lchamda ishlab chiqariladi.
          </p>
          <p>
            Shu yillar davomida 2500 dan ortiq loyiha bajardik — xususiy uylar, kvartiralar, ofislar, klinikalar va
            restoranlar uchun. Mijozlarimiz Toshkent, Samarqand va Buxoroda.
          </p>
        </Reveal>
        <Reveal className="split-media">
          <Media item={PHOTO.hammom} />
        </Reveal>
        </div>
      </section>
      <Stats />
      <section>
        <SectionHeader label="Qadriyatlar">
          Nimaga <span className="gold">tayanamiz</span>
        </SectionHeader>
        <div className="grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} className="card flat" delay={i > 0 ? (Math.min(i, 3) as 1 | 2 | 3) : undefined}>
              <div className="strip">
                <Media item={VALUE_MEDIA[i]} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
