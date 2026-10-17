import { ARTICLES } from '../data/articles'
import { CITIES } from '../data/cities'
import { GENERAL_FAQS } from '../data/faqs'
import { SERVICE_PAGES } from '../data/services'
import { SITE } from '../site'
import { article, breadcrumb, cityBusiness, faqPage, graph, itemList, organization, service, webPage, website } from './schema'
import type { JsonLd, PageMeta } from './types'

const HOME = { name: 'Bosh sahifa', path: '/' }

interface Def {
  path: string
  title: string
  description: string
  summary: string
  crumbs?: { name: string; path: string }[]
  kind?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage'
  extra?: JsonLd[]
  type?: 'website' | 'article'
  priority?: number
  changefreq?: 'weekly' | 'monthly'
  published?: string
  modified?: string
}

const make = (d: Def): PageMeta => ({
  path: d.path,
  title: d.title,
  description: d.description,
  summary: d.summary,
  type: d.type ?? 'website',
  priority: d.priority ?? 0.6,
  changefreq: d.changefreq ?? 'monthly',
  modified: d.modified ?? SITE.modified,
  published: d.published,
  jsonLd: [
    graph([
      organization(),
      website(),
      webPage(d.path, d.title, d.description, d.kind),
      ...(d.crumbs ? [breadcrumb([HOME, ...d.crumbs])] : []),
      ...(d.extra ?? []),
    ]),
  ],
})

const servicesCrumb = { name: 'Xizmatlar', path: '/xizmatlar' }
const articlesCrumb = { name: 'Maqolalar', path: '/maqolalar' }
const citiesCrumb = { name: 'Hududlar', path: '/hududlar' }

const defs: Def[] = [
  {
    path: '/',
    title: "LUMIVERA — dush kabinalari, shisha peregorodka va loft eshiklar",
    description:
      "Dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalari buyurtmaga. 15 yillik tajriba, bepul o'lchov, 5 yil kafolat.",
    summary: "Asosiy sahifa: kompaniya, xizmatlar, jarayon va aloqa haqida umumiy ma'lumot.",
    priority: 1,
    changefreq: 'weekly',
    extra: [itemList(SERVICE_PAGES.map((s) => ({ name: s.name, path: `/xizmatlar/${s.slug}` })))],
  },
  {
    path: '/xizmatlar',
    title: "Xizmatlar — shisha konstruksiyalar buyurtmaga | LUMIVERA",
    description:
      "LUMIVERA xizmatlari: dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalari. Bepul o'lchov, ishlab chiqarish, o'rnatish va 5 yillik kafolat.",
    summary: "Barcha xizmatlar ro'yxati: dush kabinalari, peregorodkalar, loft eshiklar, moskit setkalari.",
    crumbs: [servicesCrumb],
    kind: 'CollectionPage',
    priority: 0.9,
    extra: [itemList(SERVICE_PAGES.map((s) => ({ name: s.name, path: `/xizmatlar/${s.slug}` })))],
  },
  ...SERVICE_PAGES.map(
    (s): Def => ({
      path: `/xizmatlar/${s.slug}`,
      title: s.metaTitle,
      description: s.metaDescription,
      summary: s.answer,
      crumbs: [servicesCrumb, { name: s.name, path: `/xizmatlar/${s.slug}` }],
      priority: 0.9,
      extra: [service(`/xizmatlar/${s.slug}`, s.name, s.metaDescription), faqPage(s.faqs)],
    }),
  ),
  {
    path: '/konfigurator',
    title: "Dush kabinasi konfiguratori — narxni hisoblash | LUMIVERA",
    description:
      "Shisha turi, ramka rangi, eshik turi va enini tanlab, dush kabinasining taxminiy narxini bir zumda ko'ring. Aniq narx bepul o'lchovdan keyin.",
    summary: "Interaktiv konfigurator: dush kabinasining taxminiy narxini hisoblash.",
    crumbs: [{ name: 'Konfigurator', path: '/konfigurator' }],
    priority: 0.8,
  },
  {
    path: '/loyihalar',
    title: "Loyihalar — bajarilgan ishlar galereyasi | LUMIVERA",
    description:
      "LUMIVERA bajargan loyihalar: villa dush zonalari, ofis peregorodkalari, loft eshiklar, klinika va restoran fazolari.",
    summary: "Bajarilgan loyihalar portfoliosi.",
    crumbs: [{ name: 'Loyihalar', path: '/loyihalar' }],
    kind: 'CollectionPage',
    priority: 0.7,
  },
  {
    path: '/jarayon',
    title: "Ish jarayoni — o'lchovdan o'rnatishgacha | LUMIVERA",
    description:
      "Buyurtma 4 bosqichda: bepul o'lchov, 3D dizayn va narx, zavodda ishlab chiqarish (3–7 kun) hamda toza o'rnatish. Kafolat 5 yil.",
    summary: "Buyurtma bosqichlari: o'lchov, dizayn, ishlab chiqarish, o'rnatish.",
    crumbs: [{ name: 'Ish jarayoni', path: '/jarayon' }],
    priority: 0.6,
  },
  {
    path: '/biz-haqimizda',
    title: "Biz haqimizda — 15 yillik tajriba | LUMIVERA",
    description:
      "LUMIVERA — 15 yillik tajribaga ega shisha konstruksiyalar ustaxonasi. 2500+ loyiha, 5 yillik kafolat, mijozlarga individual yondashuv.",
    summary: "Kompaniya haqida: tajriba, qiymatlar va natijalar.",
    crumbs: [{ name: 'Biz haqimizda', path: '/biz-haqimizda' }],
    kind: 'AboutPage',
    priority: 0.6,
  },
  {
    path: '/savollar',
    title: "Ko'p so'raladigan savollar | LUMIVERA",
    description:
      "Shisha konstruksiyalar bo'yicha javoblar: muddat, narx, kafolat, temperlangan shisha, o'lchov va o'rnatish haqida.",
    summary: "Mijozlar eng ko'p beradigan savollarga javoblar.",
    crumbs: [{ name: 'Savollar', path: '/savollar' }],
    priority: 0.7,
    extra: [faqPage(GENERAL_FAQS)],
  },
  {
    path: '/hududlar',
    title: "Xizmat hududlari — Toshkent, Samarqand, Buxoro | LUMIVERA",
    description:
      "LUMIVERA xizmat ko'rsatadigan hududlar: Toshkent, Samarqand va Buxoro. O'lchov, yetkazish va o'rnatish.",
    summary: "Xizmat hududlari ro'yxati.",
    crumbs: [citiesCrumb],
    kind: 'CollectionPage',
    priority: 0.7,
    extra: [itemList(CITIES.map((c) => ({ name: c.name, path: `/hududlar/${c.slug}` })))],
  },
  ...CITIES.map(
    (c): Def => ({
      path: `/hududlar/${c.slug}`,
      title: `${c.name}da dush kabinalari va shisha peregorodkalar | LUMIVERA`,
      description: `${c.locative} dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalari: bepul o'lchov, ishlab chiqarish, o'rnatish va 5 yil kafolat.`,
      summary: c.intro,
      crumbs: [citiesCrumb, { name: c.name, path: `/hududlar/${c.slug}` }],
      priority: 0.7,
      extra: [cityBusiness(`/hududlar/${c.slug}`, c.name, c.geo.lat, c.geo.lng), faqPage(c.faqs)],
    }),
  ),
  {
    path: '/maqolalar',
    title: "Maqolalar — shisha va interyer bo'yicha qo'llanmalar | LUMIVERA",
    description:
      "Temperlangan shisha, dush kabinasi tanlash va loft peregorodkalar bo'yicha foydali maqolalar.",
    summary: "Shisha konstruksiyalar bo'yicha maqolalar.",
    crumbs: [articlesCrumb],
    kind: 'CollectionPage',
    priority: 0.6,
    changefreq: 'weekly',
    extra: [itemList(ARTICLES.map((a) => ({ name: a.title, path: `/maqolalar/${a.slug}` })))],
  },
  ...ARTICLES.map(
    (a): Def => ({
      path: `/maqolalar/${a.slug}`,
      title: `${a.title} | LUMIVERA`,
      description: a.description,
      summary: a.answer,
      crumbs: [articlesCrumb, { name: a.title, path: `/maqolalar/${a.slug}` }],
      type: 'article',
      priority: 0.6,
      published: a.published,
      modified: a.modified,
      extra: [article(`/maqolalar/${a.slug}`, a.title, a.description, a.published, a.modified), faqPage(a.faqs)],
    }),
  ),
  {
    path: '/aloqa',
    title: "Aloqa — bepul o'lchovga yoziling | LUMIVERA",
    description:
      "LUMIVERA bilan bog'laning: telefon, manzil va ish vaqti. Bepul o'lchovga ariza qoldiring.",
    summary: "Aloqa ma'lumotlari va bepul o'lchovga ariza.",
    crumbs: [{ name: 'Aloqa', path: '/aloqa' }],
    kind: 'ContactPage',
    priority: 0.8,
  },
]

export const PAGES: Record<string, PageMeta> = Object.fromEntries(defs.map((d) => [d.path, make(d)]))

export const NOT_FOUND: PageMeta = {
  path: '/404',
  title: 'Sahifa topilmadi | LUMIVERA',
  description: 'Bunday sahifa mavjud emas.',
  summary: '',
  jsonLd: [],
  priority: 0,
  changefreq: 'monthly',
  modified: SITE.modified,
  noindex: true,
}
