import { Link } from 'react-router-dom'
import { CITIES } from '../data/cities'
import { PHONE, PHONE_LABEL } from '../data/content'
import { SERVICE_PAGES } from '../data/services'
import { SITE } from '../site'

export function Footer() {
  return (
    <footer>
      <div className="ft">
        <div>
          <b className="serif ft-logo">LUMIVERA</b>
          <p>{SITE.tagline}. Dush kabinalari, peregorodkalar, loft eshiklar va moskit setkalari — buyurtma asosida.</p>
          <a className="ft-phone" href={`tel:${PHONE}`}>
            {PHONE_LABEL}
          </a>
          <address>
            {SITE.address.city}, O'zbekiston
            <br />
            {SITE.hours.opens} — {SITE.hours.closes}
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
        </div>
        <nav aria-label="Xizmatlar">
          <h4>Xizmatlar</h4>
          {SERVICE_PAGES.map((s) => (
            <Link key={s.slug} to={`/xizmatlar/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </nav>
        <nav aria-label="Hududlar">
          <h4>Hududlar</h4>
          {CITIES.map((c) => (
            <Link key={c.slug} to={`/hududlar/${c.slug}`}>
              {c.name}
            </Link>
          ))}
        </nav>
        <nav aria-label="Kompaniya">
          <h4>Kompaniya</h4>
          <Link to="/biz-haqimizda">Biz haqimizda</Link>
          <Link to="/jarayon">Ish jarayoni</Link>
          <Link to="/loyihalar">Loyihalar</Link>
          <Link to="/maqolalar">Maqolalar</Link>
          <Link to="/savollar">Savollar</Link>
          <Link to="/aloqa">Aloqa</Link>
        </nav>
      </div>
      <div className="ft-bottom">© 2026 LUMIVERA. Barcha huquqlar himoyalangan.</div>
    </footer>
  )
}
