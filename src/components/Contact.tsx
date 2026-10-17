import { useState, type FormEvent } from 'react'
import { PHONE, PHONE_LABEL, SERVICE_OPTIONS } from '../data/content'
import { SITE } from '../site'
import { Reveal } from './Reveal'

const EMPTY = { name: '', phone: '', service: SERVICE_OPTIONS[0] }

export function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const set = (key: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: send `form` to the backend / CRM once an endpoint exists.
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <section id="aloqa">
      <Reveal className="ct">
        <div>
          <h2>
            Bepul o'lchovga <span className="gold">yoziling</span>
          </h2>
          <div className="info">
            Telefon
            <br />
            <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
            <br />
            Manzil: {SITE.address.city} shahri
            <br />
            Ish vaqti: {SITE.hours.opens} — {SITE.hours.closes}
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <input placeholder="Ismingiz" aria-label="Ismingiz" autoComplete="name" required value={form.name} onChange={set('name')} />
          <input placeholder="Telefon raqam" aria-label="Telefon raqam" autoComplete="tel" type="tel" required value={form.phone} onChange={set('phone')} />
          <select aria-label="Xizmat turi" value={form.service} onChange={set('service')}>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <button className="btn">Yuborish →</button>
          {sent && <small style={{ color: 'var(--gold)' }}>✓ Rahmat! Tez orada siz bilan bog'lanamiz.</small>}
        </form>
      </Reveal>
    </section>
  )
}
