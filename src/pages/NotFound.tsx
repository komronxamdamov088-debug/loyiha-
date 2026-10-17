import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Seo } from '../seo/Seo'
import { art } from '../data/media'

export default function NotFound() {
  return (
    <>
      <Seo path="notfound" />
      <PageHero
        crumbs={[{ name: '404' }]}
        kicker="✦ 404"
        title={
          <>
            Sahifa <span className="gold">topilmadi</span>
          </>
        }
        lead="Bu manzil mavjud emas yoki ko'chirilgan. Bosh sahifaga qayting yoki xizmatlarimizni ko'ring."
        media={art('tempered', 'rose')}
      />
      <section className="prose-sec">
        <div className="cta">
          <Button to="/">Bosh sahifa</Button>
          <Button to="/xizmatlar" variant="outline">
            Xizmatlar
          </Button>
        </div>
      </section>
    </>
  )
}
