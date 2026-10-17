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

const ph = (name: string, w: number, h: number, alt: string): MediaItem => ({ kind: 'photo', src: `/img/${name}.jpg`, alt, w, h })

const VARIANTS: Record<ArtKind, MediaItem[]> = {
  partition: [
    ph('peregorodka-1', 900, 1350, "Qora ramkali matt shisha peregorodka bilan ajratilgan xona"),
    ph('peregorodka-2', 900, 1200, "Matt shisha peregorodka ortidagi yotoqxona"),
    ph('peregorodka-3', 900, 1350, "Oq qabulxonada shisha peregorodkalar"),
  ],
  loft: [
    ph('loft-1', 900, 1350, "Qora metall ramkali ikki qanotli shisha eshik"),
    ph('loft-2', 900, 1200, "Qora ramkali loft uslubidagi shisha eshik va peregorodka"),
    ph('loft-3', 1400, 933, "Rifli shishali qora ramkali eshiklar"),
  ],
  screen: [
    ph('setka-1', 1400, 1400, "Moskit setkali qora ramkali derazalar"),
    ph('setka-2', 1000, 667, "Mayda to'rli moskit setka"),
    ph('setka-3', 900, 1200, "Marmar devordagi setkali qora ramkali deraza"),
  ],
  tempered: [
    ph('shisha-1', 1400, 1050, "Matt temperlangan shisha panellar"),
    ph('shisha-2', 1400, 1400, "Shisha peregorodkali zamonaviy ofis"),
  ],
}

const TONE_INDEX: Record<Tone, number> = { gold: 0, ice: 1, rose: 2, green: 1 }

/** Picks a real photo for a topic; `tone` only selects between variants so repeated uses differ. */
export const art = (kind: ArtKind, tone: Tone = 'gold'): MediaItem => {
  const list = VARIANTS[kind]
  return list[TONE_INDEX[tone] % list.length]
}

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

export const ARTICLE_INLINE: Record<string, MediaItem> = {
  'temperlangan-shisha-nima': art('partition', 'ice'),
  'dush-kabinasi-tanlash': PHOTO.marmar,
  'loft-uslubidagi-peregorodka': art('partition', 'gold'),
}

/** One visual per process step (O'lchov, Dizayn, Ishlab chiqarish, O'rnatish). */
export const STEP_MEDIA: MediaItem[] = [art('partition', 'ice'), art('tempered', 'ice'), art('loft', 'gold'), PHOTO.marmar]

export const VALUE_MEDIA: MediaItem[] = [art('tempered', 'gold'), art('partition', 'ice'), art('screen', 'green'), PHOTO.qora]
