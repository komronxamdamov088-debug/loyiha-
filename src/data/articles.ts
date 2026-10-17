import type { Faq } from './services'

export interface Article {
  slug: string
  title: string
  description: string
  answer: string
  published: string
  modified: string
  readMinutes: number
  sections: { h: string; p: string[] }[]
  faqs: Faq[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'temperlangan-shisha-nima',
    title: 'Temperlangan shisha nima va nega u xavfsiz?',
    description:
      "Temperlangan shisha qanday tayyorlanadi, oddiy shishadan qanday farq qiladi va dush kabinasi hamda peregorodka uchun nega aynan u tanlanadi — qisqa qo'llanma.",
    answer:
      "Temperlangan shisha — qizdirib, keyin tez sovitish orqali qattiqlashtirilgan shisha. U oddiy shishadan taxminan bir necha barobar mustahkam va sinsa, o'tkir bo'laklarga emas, mayda to'mtoq donalarga bo'linadi.",
    published: '2026-10-01',
    modified: '2026-10-18',
    readMinutes: 4,
    sections: [
      {
        h: 'Temperlash qanday amalga oshiriladi?',
        p: [
          "Shisha maxsus pechda taxminan 600–700 °C gacha qizdiriladi, so'ng sirti havo oqimi bilan tez sovitiladi. Natijada sirt qatlami siqilgan, ichki qatlam esa cho'zilgan holatda qoladi va shisha mustahkamlanadi.",
          "Muhim: temperlangan shishani tayyorlangandan keyin kesib yoki burg'ulab bo'lmaydi, shuning uchun barcha o'lchamlar oldindan aniq belgilanadi.",
        ],
      },
      {
        h: 'Oddiy shishadan farqi',
        p: [
          "Temperlangan shisha zarba va harorat o'zgarishiga yaxshi chidaydi. Oddiy shisha sinsa, uzun o'tkir parchalar hosil bo'ladi; temperlangan shisha esa mayda, kamroq xavfli donalarga uvalanadi.",
        ],
      },
      {
        h: 'Qayerlarda qo‘llaniladi?',
        p: [
          "Dush kabinalari, shisha peregorodkalar, loft eshiklar, balustradalar va fasadlarda. Odam tez-tez tegadigan va xavfsizlik muhim bo'lgan joylarda temperlangan shisha tavsiya etiladi.",
        ],
      },
    ],
    faqs: [
      { q: 'Temperlangan shisha sinmaydimi?', a: "Sinishi mumkin, lekin oddiy shishadan ancha qiyin; singanda esa kichik to'mtoq bo'laklarga bo'linadi." },
      { q: 'Uni keyin kesish mumkinmi?', a: "Yo'q, temperlashdan keyin shisha kesilmaydi va burg'ulanmaydi, shuning uchun o'lchamlar oldindan aniqlanadi." },
    ],
  },
  {
    slug: 'dush-kabinasi-tanlash',
    title: 'Dush kabinasini qanday tanlash kerak: shisha va eshik',
    description:
      "Dush kabinasi tanlashda nimalarga e'tibor berish kerak: shisha qalinligi va turi, eshik tizimi, ramka rangi hamda vannaxona o'lchamiga moslash bo'yicha maslahatlar.",
    answer:
      "Dush kabinasini tanlashda uchta narsa muhim: temperlangan shisha (8–10 mm), xonaga mos eshik tizimi (ochiladigan yoki sirpanuvchi) va vannaxona o'lchamiga aniq moslik.",
    published: '2026-10-05',
    modified: '2026-10-18',
    readMinutes: 5,
    sections: [
      {
        h: '1. Shisha qalinligi va turi',
        p: [
          "Ramkasiz kabinalar uchun odatda 8–10 mm temperlangan shisha ishlatiladi. Shaffof shisha xonani kengroq ko'rsatadi, matt va rifli shisha maxfiylik beradi, tonirovkali esa interyerga chuqurlik qo'shadi.",
        ],
      },
      {
        h: '2. Eshik tizimi',
        p: [
          "Ochiladigan eshik sodda va ishonchli, lekin ochilish uchun joy kerak. Sirpanuvchi eshik tor vannaxonada joy tejaydi. Tanlov xona o'lchami va eshik atrofidagi bo'sh joyga bog'liq.",
        ],
      },
      {
        h: '3. O‘lcham va o‘rnatish',
        p: [
          "Devorlar kamdan-kam hollarda mukammal tekis bo'ladi, shuning uchun kabinani joyida o'lchab buyurtma qilish eng ishonchli yo'l. Bu shisha va devor orasidagi tirqishni oldini oladi.",
        ],
      },
      {
        h: '4. Furnitura va parvarish',
        p: [
          "Zanglamaydigan po'lat furnitura va sifatli zichlagichlar kabina umrini uzaytiradi. Shisha sirtini har safar dushdan keyin yumshoq mato bilan artish oxak izini kamaytiradi.",
        ],
      },
    ],
    faqs: [
      { q: 'Kichik vannaxonaga qaysi eshik mos?', a: "Odatda sirpanuvchi eshik, chunki u ochilish uchun qo'shimcha joy talab qilmaydi." },
      { q: 'Shaffof yoki matt shisha yaxshiroqmi?', a: "Shaffof shisha kenglik hissini beradi; matt yoki rifli shisha maxfiylik uchun qulay. Tanlov didingizga bog'liq." },
    ],
  },
  {
    slug: 'loft-uslubidagi-peregorodka',
    title: 'Loft uslubidagi peregorodka: ofis va uy uchun g‘oyalar',
    description:
      "Qora metall ramkali shisha peregorodkalar interyerga qanday xarakter beradi, qayerda ishlatiladi va tanlashda nimalarga e'tibor berish kerak.",
    answer:
      "Loft uslubidagi peregorodka — qora metall ramka va shishadan iborat bo'lib, xonani zonalarga bo'ladi, lekin yorug'likni to'smaydi; ofis, studiya kvartira va restoranlar uchun mos.",
    published: '2026-10-10',
    modified: '2026-10-18',
    readMinutes: 4,
    sections: [
      {
        h: 'Loft peregorodka nimasi bilan ajralib turadi?',
        p: [
          "Ingichka qora ramka shisha maydonni bo'limlarga ajratadi va peregorodkaga grafik ko'rinish beradi. Bu uslub sanoat binolaridan kelib chiqqan, hozir esa uy va ofis interyerlarida keng tarqalgan.",
        ],
      },
      {
        h: 'Qayerlarda qo‘llash yaxshi?',
        p: [
          "Oshxona va mehmonxona orasida, ofisda uchrashuv xonasi va ochiq maydon o'rtasida, restoran zonalarini ajratishda. Studiya kvartirada yotoq zonasini ajratish uchun ham qulay.",
        ],
      },
      {
        h: 'Tanlashda nimalarga e‘tibor berish kerak?',
        p: [
          "Bo'limlar soni, shisha turi (shaffof yoki matt), ramka rangi va eshik tizimi. Ovoz izolyatsiyasi muhim bo'lsa, qalinroq shisha va zichlagich so'rang. Barcha o'lchamlarni oldindan aniq belgilash uchun usta o'lchovini kuting.",
        ],
      },
    ],
    faqs: [
      { q: 'Loft peregorodka faqat qora rangdami?', a: "Qora eng mashhur, lekin oltin, kumush va mis ranglar ham mavjud." },
      { q: 'Uyda ham o‘rnatish mumkinmi?', a: "Ha, ayniqsa studiya kvartira va ochiq rejali uylarda zonalarni ajratish uchun yaxshi yechim." },
    ],
  },
]

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug)
