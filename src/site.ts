/** Single source of truth for brand facts. Replace the placeholders before launch. */
export const SITE = {
  name: 'LUMIVERA',
  // TODO: replace with the real production domain — used for canonical URLs, sitemap and schema.
  url: 'https://lumivera.uz',
  locale: 'uz_UZ',
  lang: 'uz',
  phone: '+998900000000',
  phoneLabel: '+998 90 000 00 00',
  email: 'info@lumivera.uz',
  address: { city: 'Toshkent', region: 'Toshkent shahri', country: 'UZ' },
  hours: { opens: '09:00', closes: '19:00' },
  founded: 2011,
  instagram: 'https://instagram.com/lumivera',
  tagline: "Shisha va nur san'ati",
  modified: '2026-10-18',
} as const

export const absUrl = (path: string) => `${SITE.url}${path === '/' ? '' : path}`
