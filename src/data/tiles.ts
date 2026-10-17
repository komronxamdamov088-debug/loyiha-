import type { TileItem } from '../components/Tiles'
import { CITIES } from './cities'
import { ARTICLES } from './articles'
import { ARTICLE_MEDIA, CITY_MEDIA } from './media'
import { SERVICE_MEDIA } from './content'
import { SERVICE_PAGES } from './services'

export const serviceTiles = (exclude?: string): TileItem[] =>
  SERVICE_PAGES.filter((s) => s.slug !== exclude).map((s) => ({
    to: `/xizmatlar/${s.slug}`,
    label: s.name,
    media: SERVICE_MEDIA[s.slug as keyof typeof SERVICE_MEDIA],
  }))

export const cityTiles = (): TileItem[] =>
  CITIES.map((c) => ({ to: `/hududlar/${c.slug}`, label: c.name, sub: 'Xizmat hududi', media: CITY_MEDIA[c.slug] }))

export const articleTiles = (exclude?: string): TileItem[] =>
  ARTICLES.filter((a) => a.slug !== exclude).map((a) => ({
    to: `/maqolalar/${a.slug}`,
    label: a.title,
    sub: 'Maqola',
    media: ARTICLE_MEDIA[a.slug],
  }))
