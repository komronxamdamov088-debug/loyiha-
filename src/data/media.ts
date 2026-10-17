export type ArtKind = 'partition' | 'loft' | 'screen' | 'tempered'
export type Tone = 'gold' | 'ice' | 'rose' | 'green'

export type MediaItem =
  | { kind: 'photo'; src: string; alt: string; w: number; h: number }
  | { kind: 'art'; art: ArtKind; tone: Tone; alt: string }

export const PHOTO = {
  marmar: { kind: 'photo', src: '/img/dush-marmar.jpg', alt: 'Marmar devorli vannaxonada ramkasiz shisha dush kabinasi', w: 1400, h: 933 },
  qora: { kind: 'photo', src: '/img/dush-qora-ramka.jpg', alt: 'Qora ramkali sirpanuvchi eshikli dush kabinasi', w: 800, h: 1200 },
  hammom: { kind: 'photo', src: '/img/hammom-oq.jpg', alt: 'Oq hammomda vanna va shisha dush kabinasi', w: 1400, h: 933 },
  oyna: { kind: 'photo', src: '/img/dush-oyna-eshik.jpg', alt: 'Shaffof shisha eshikli dush kabinasi', w: 800, h: 1200 },
} satisfies Record<string, MediaItem>

const ALT: Record<ArtKind, string> = {
  partition: 'Ofis uchun shisha peregorodkalar (illyustratsiya)',
  loft: 'Qora metall ramkali loft shisha eshik (illyustratsiya)',
  screen: 'Moskit setkali deraza (illyustratsiya)',
  tempered: 'Temperlangan shisha tuzilishi (illyustratsiya)',
}

export const art = (kind: ArtKind, tone: Tone = 'gold'): MediaItem => ({ kind: 'art', art: kind, tone, alt: ALT[kind] })

export const CITY_MEDIA: Record<string, MediaItem> = {
  toshkent: PHOTO.hammom,
  samarqand: art('partition', 'gold'),
  buxoro: art('loft', 'rose'),
}

export const ARTICLE_MEDIA: Record<string, MediaItem> = {
  'temperlangan-shisha-nima': art('tempered', 'ice'),
  'dush-kabinasi-tanlash': PHOTO.oyna,
  'loft-uslubidagi-peregorodka': art('loft', 'gold'),
}
