import { PHONE } from '../data/content'

export function CallButton() {
  return (
    <a className="wa" href={`tel:${PHONE}`} aria-label="Qo'ng'iroq qilish">
      <svg viewBox="0 0 24 24">
        <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
      </svg>
    </a>
  )
}
