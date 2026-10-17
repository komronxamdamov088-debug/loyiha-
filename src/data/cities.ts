import type { Faq } from './services'

export interface City {
  slug: string
  name: string
  /** Locative form used in sentences: "Toshkentda". */
  locative: string
  geo: { lat: number; lng: number }
  intro: string
  details: string[]
  faqs: Faq[]
}

export const CITIES: City[] = [
  {
    slug: 'toshkent',
    name: 'Toshkent',
    locative: 'Toshkentda',
    geo: { lat: 41.2995, lng: 69.2401 },
    intro:
      "Toshkentda LUMIVERA dush kabinalari, shisha peregorodkalar, loft eshiklar va moskit setkalarini buyurtma asosida ishlab chiqaradi va o'rnatadi.",
    details: [
      "Toshkent shahri va unga yaqin hududlarda usta bepul o'lchovga keladi, 3D vizual va aniq narxni taqdim etadi.",
      "Yangi qurilgan turar-joy majmualari, ofislar, klinikalar, restoranlar va xususiy uylar uchun loyihalar bajaramiz.",
    ],
    faqs: [
      { q: "Toshkentda o'lchovga usta qachon keladi?", a: "Ariza qoldirgandan keyin menejer siz bilan bog'lanib, qulay vaqtda ustani yuboradi. O'lchov bepul." },
      { q: "Toshkent bo'ylab o'rnatish pullikmi?", a: "O'rnatish xizmat paketiga kiradi; yakuniy narxga ishlab chiqarish, yetkazish va o'rnatish qo'shiladi." },
    ],
  },
  {
    slug: 'samarqand',
    name: 'Samarqand',
    locative: 'Samarqandda',
    geo: { lat: 39.6542, lng: 66.9597 },
    intro:
      "Samarqandda shisha konstruksiyalarni buyurtma asosida tayyorlab, o'rnatish xizmatini taklif qilamiz: dush kabinalari, peregorodkalar va loft eshiklar.",
    details: [
      "Samarqand mijozlari uchun ofis, mehmonxona va turar-joy loyihalarida shisha yechimlar bajaramiz.",
      "O'lchov, dizayn va o'rnatish bosqichlari Toshkentdagi kabi bir xil sifat standartida olib boriladi.",
    ],
    faqs: [
      { q: "Samarqandda xizmat mavjudmi?", a: "Ha, Samarqand shahrida buyurtmalarni qabul qilamiz. Ariza qoldiring, menejer muddat va narxni aytadi." },
      { q: "Kafolat Samarqandda ham amal qiladimi?", a: "Ha, 5 yillik kafolat barcha hududlardagi o'rnatishlarga tegishli." },
    ],
  },
  {
    slug: 'buxoro',
    name: 'Buxoro',
    locative: 'Buxoroda',
    geo: { lat: 39.7747, lng: 64.4286 },
    intro:
      "Buxoroda uy, mehmonxona va tijorat fazolari uchun shisha peregorodkalar, dush kabinalari va loft eshiklarni ishlab chiqaramiz hamda o'rnatamiz.",
    details: [
      "Buxoro mehmonxonalari va xususiy uylari uchun individual o'lchamdagi shisha konstruksiyalar tayyorlaymiz.",
      "Loyiha bosqichida o'lchov, vizualizatsiya va narx kelishiladi, so'ng ishlab chiqarish va montaj amalga oshiriladi.",
    ],
    faqs: [
      { q: "Buxoroga yetkazib berish bormi?", a: "Ha, tayyor konstruksiyalar Buxoroga yetkaziladi va joyida o'rnatiladi." },
      { q: "Buyurtmani qanday boshlash mumkin?", a: "Telefon orqali qo'ng'iroq qiling yoki saytdagi arizani to'ldiring." },
    ],
  },
]

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug)
