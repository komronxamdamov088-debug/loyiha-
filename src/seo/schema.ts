import { absUrl, SITE } from '../site'
import { CITIES } from '../data/cities'
import type { Faq } from '../data/services'
import type { JsonLd } from './types'

const ORG_ID = `${SITE.url}/#organization`
const SITE_ID = `${SITE.url}/#website`

export const ogImage = `${SITE.url}/og.png`

export const organization = (): JsonLd => ({
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  image: ogImage,
  description:
    "Dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalarini buyurtma asosida ishlab chiqarish va o'rnatish.",
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.founded),
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: CITIES.map((c) => ({ '@type': 'City', name: c.name })),
  knowsAbout: ['Dush kabinalari', 'Shisha peregorodkalar', 'Loft eshiklar', 'Moskit setkalari', 'Temperlangan shisha'],
  sameAs: [SITE.instagram],
})

export const website = (): JsonLd => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: SITE.lang,
  publisher: { '@id': ORG_ID },
})

export const breadcrumb = (items: { name: string; path: string }[]): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
})

export const faqPage = (faqs: Faq[]): JsonLd => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const webPage = (
  path: string,
  name: string,
  description: string,
  kind: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' = 'WebPage',
): JsonLd => ({
  '@type': kind,
  '@id': `${absUrl(path)}#webpage`,
  url: absUrl(path),
  name,
  description,
  inLanguage: SITE.lang,
  isPartOf: { '@id': SITE_ID },
  about: { '@id': ORG_ID },
  dateModified: SITE.modified,
})

export const service = (path: string, name: string, description: string): JsonLd => ({
  '@type': 'Service',
  '@id': `${absUrl(path)}#service`,
  name,
  description,
  url: absUrl(path),
  provider: { '@id': ORG_ID },
  areaServed: CITIES.map((c) => ({ '@type': 'City', name: c.name })),
})

export const article = (path: string, headline: string, description: string, published: string, modified: string): JsonLd => ({
  '@type': 'Article',
  '@id': `${absUrl(path)}#article`,
  headline,
  description,
  url: absUrl(path),
  datePublished: published,
  dateModified: modified,
  inLanguage: SITE.lang,
  image: ogImage,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  mainEntityOfPage: absUrl(path),
})

export const itemList = (items: { name: string; path: string }[]): JsonLd => ({
  '@type': 'ItemList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    url: absUrl(it.path),
  })),
})

export const cityBusiness = (path: string, cityName: string, lat: number, lng: number): JsonLd => ({
  '@type': 'Service',
  '@id': `${absUrl(path)}#service`,
  name: `Shisha konstruksiyalar — ${cityName}`,
  url: absUrl(path),
  provider: { '@id': ORG_ID },
  areaServed: {
    '@type': 'City',
    name: cityName,
    geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
  },
})

/** Wraps nodes into a single @graph document. */
export const graph = (nodes: JsonLd[]): JsonLd => ({ '@context': 'https://schema.org', '@graph': nodes })
