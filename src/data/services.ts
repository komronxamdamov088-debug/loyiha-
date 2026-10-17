export interface Faq {
  q: string
  a: string
}

export interface ServicePage {
  slug: string
  /** Matches SERVICES[].slug in content.ts */
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  /** Answer-first summary: the sentence AI assistants and snippets will quote. */
  answer: string
  intro: string[]
  benefits: { title: string; text: string }[]
  specs: { label: string; value: string }[]
  useCases: string[]
  faqs: Faq[]
  images?: { src: string; alt: string; w: number; h: number }[]
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'dush-kabinalari',
    name: 'Dush kabinalari',
    metaTitle: "Dush kabinalari buyurtmaga — temperlangan shisha | LUMIVERA",
    metaDescription:
      "Individual o'lchamdagi dush kabinalari: 8–10 mm temperlangan shisha, zanglamaydigan furnitura, bepul o'lchov, o'rnatish va 5 yil kafolat.",
    h1: "Individual o'lchamdagi dush kabinalari",
    answer:
      "LUMIVERA dush kabinalarni vannaxona o'lchamiga qarab temperlangan shishadan ishlab chiqaradi: bepul o'lchov, zavodda 3–7 kunda tayyorlash, o'rnatish va 5 yillik kafolat bilan.",
    intro: [
      "Standart tayyor kabinalar har bir vannaxonaga ham to'g'ri kelavermaydi: devor qiyshiq, truba noqulay joyda, shift past. Biz kabinani joyida o'lchab, aynan sizning xonangiz uchun ishlab chiqaramiz — shuning uchun shisha va devor orasida bo'shliq qolmaydi, suv oqib chiqmaydi.",
      "Ishlatiladigan shisha — temperlangan (qattiqlashtirilgan): oddiy shishadan bir necha barobar mustahkam va sinsa, o'tkir bo'laklarga emas, mayda donalarga uvalanadi. Furnitura zanglamaydigan po'latdan, shuning uchun nam muhitda ham yillar davomida o'z ko'rinishini saqlaydi.",
    ],
    benefits: [
      { title: 'Xavfsiz shisha', text: "Temperlangan shisha jarohat xavfini kamaytiradi va zarbaga chidamli." },
      { title: "Aniq o'lcham", text: "Usta joyida o'lchaydi, kabina millimetrgacha moslab ishlab chiqariladi." },
      { title: 'Suv o‘tkazmaydigan zichlash', text: "Silikon va magnitli zichlagichlar suv oqishining oldini oladi." },
      { title: 'Oson parvarish', text: "Himoya qoplamasi tufayli oxak izlari kam qoladi, artish yetarli." },
    ],
    specs: [
      { label: 'Shisha qalinligi', value: '8–10 mm temperlangan' },
      { label: 'Shisha turlari', value: 'Shaffof, matt, rifli, tonirovkali' },
      { label: 'Eshik turlari', value: 'Ochiladigan va sirpanuvchi' },
      { label: 'Ramka ranglari', value: 'Oltin, qora, kumush, mis' },
      { label: 'Tayyorlash muddati', value: '3–7 kun' },
      { label: 'Kafolat', value: '5 yil' },
    ],
    useCases: ["Kvartira vannaxonasi", 'Villa va kottedj', 'Mehmonxona va xostel', 'Fitnes-klub va SPA'],
    images: [
      { src: '/img/dush-marmar.jpg', alt: 'Marmar devorli vannaxonada ramkasiz shisha dush kabinasi', w: 1400, h: 933 },
      { src: '/img/dush-qora-ramka.jpg', alt: 'Qora ramkali sirpanuvchi eshikli dush kabinasi', w: 800, h: 1200 },
      { src: '/img/dush-oyna-eshik.jpg', alt: 'Shaffof shisha eshikli dush kabinasi', w: 800, h: 1200 },
    ],
    faqs: [
      {
        q: 'Dush kabinasi uchun qanday shisha qalinligi tanlanadi?',
        a: "Ramkasiz kabinalar uchun odatda 8–10 mm, ramkali va kichik kabinalar uchun 6–8 mm temperlangan shisha qo'llaniladi. Aniq qalinlikni usta o'lchov vaqtida eshik og'irligi va o'lchamga qarab tavsiya qiladi.",
      },
      {
        q: "Dush kabinasi qancha turadi?",
        a: "Narx kabina o'lchami, shisha turi, ramka rangi va eshik turiga bog'liq. Veb-saytdagi konfigurator taxminiy narxni darhol ko'rsatadi, yakuniy narx esa bepul o'lchovdan keyin aniqlanadi.",
      },
      {
        q: "Buyurtmadan o'rnatishgacha qancha vaqt ketadi?",
        a: "O'lchovdan keyin shisha zavodda odatda 3–7 kunda tayyorlanadi, o'rnatish esa bir kunda yakunlanadi.",
      },
      {
        q: 'Shisha singan taqdirda xavfli bo‘ladimi?',
        a: "Temperlangan shisha sinsa, o'tkir parchalarga emas, kichik to'mtoq donalarga bo'linadi, shuning uchun jarohat xavfi ancha past.",
      },
    ],
  },
  {
    slug: 'peregorodkalar',
    name: 'Peregorodkalar',
    metaTitle: "Shisha peregorodkalar — ofis va uy uchun | LUMIVERA",
    metaDescription:
      "Ofis va uy uchun shaffof, matt va rifli shisha peregorodkalar. Fazoni bo'ladi, nurni saqlaydi. Buyurtma asosida ishlab chiqarish va o'rnatish, 5 yil kafolat.",
    h1: "Ofis va uy uchun shisha peregorodkalar",
    answer:
      "Shisha peregorodka xonani devor qurmasdan zonalarga bo'ladi va tabiiy yorug'likni saqlaydi; LUMIVERA ularni buyurtma asosida tayyorlab, o'rnatib beradi.",
    intro: [
      "An'anaviy devor xonani qorong'i va tor qiladi. Shisha peregorodka esa zonalarni ajratadi, ammo yorug'lik va ko'lamni yo'qotmaydi. Ofisda bu — alohida kabinet va uchrashuv xonasi, uyda esa — oshxona, mehmonxona va ish burchagi o'rtasidagi chiroyli chegara.",
      "Ovoz izolyatsiyasi, shaffoflik darajasi (shaffof, matt, rifli) va ramka uslubi — barchasi loyihaga qarab tanlanadi. Qora metall ramkali variantlar zamonaviy loft interyerlariga, ramkasiz variantlar minimalistik fazolarga mos keladi.",
    ],
    benefits: [
      { title: "Yorug'lik saqlanadi", text: "Tabiiy nur butun xona bo'ylab tarqaladi, elektr xarajati kamayadi." },
      { title: 'Tez montaj', text: "G'isht yoki gipsokarton devorga qaraganda changsiz va tez o'rnatiladi." },
      { title: 'Maxfiylik darajasi', text: "Matt va rifli shisha ko'rinishni yumshatadi, maxfiylikni saqlaydi." },
      { title: "Ko'chma variantlar", text: "Sirpanuvchi va buklanuvchi tizimlar fazoni kerak bo'lganda ochadi." },
    ],
    specs: [
      { label: 'Shisha', value: 'Temperlangan yoki triplex' },
      { label: 'Shisha turlari', value: 'Shaffof, matt, rifli, tonirovkali' },
      { label: 'Ramka', value: 'Qora, oltin, kumush yoki ramkasiz' },
      { label: 'Tizimlar', value: 'Statik, sirpanuvchi, buklanuvchi' },
      { label: 'Tayyorlash muddati', value: '3–7 kun' },
      { label: 'Kafolat', value: '5 yil' },
    ],
    useCases: ['Ofis kabinetlari', 'Uchrashuv xonalari', 'Studiya kvartiralar', 'Klinika va salonlar'],
    faqs: [
      {
        q: 'Shisha peregorodka ovozni o‘tkazadimi?',
        a: "Oddiy bir qavatli shisha ovozni qisman to'sadi. Yuqori izolyatsiya kerak bo'lsa, qalinroq yoki triplex shisha hamda zichlagichli profil tavsiya etiladi.",
      },
      {
        q: 'Peregorodkani kvartirada ham o‘rnatish mumkinmi?',
        a: "Ha. Studiya kvartiralarda oshxona va mehmonxonani ajratish yoki yotoqxonani yorug'likni yo'qotmasdan bo'lish uchun keng qo'llaniladi.",
      },
      {
        q: 'Shisha peregorodka xavfsizmi?',
        a: "Biz temperlangan yoki triplex shisha ishlatamiz; ular odatdagi shishadan sezilarli mustahkam va sinish xavfi past.",
      },
      {
        q: "Buyurtma uchun nima kerak?",
        a: "Faqat qo'ng'iroq yoki ariza. Usta bepul o'lchaydi, 3D vizual va aniq narxni taqdim etadi.",
      },
    ],
  },
  {
    slug: 'loft-eshiklar',
    name: 'Loft eshiklar',
    metaTitle: "Loft eshiklar — qora metall ramka va shisha | LUMIVERA",
    metaDescription:
      "Qora metall ramkali loft uslubidagi shisha eshiklar va ichki to'siqlar. Individual o'lcham, sirpanuvchi va ochiladigan variantlar, o'rnatish va 5 yillik kafolat.",
    h1: "Loft uslubidagi shisha eshiklar",
    answer:
      "Loft eshik — qora metall ramka va shishadan iborat sanoat uslubidagi eshik; LUMIVERA uni xona o'lchamiga moslab tayyorlaydi va o'rnatadi.",
    intro: [
      "Loft eshiklar interyerga xarakter beradi: ingichka qora ramka, katta shisha maydon va aniq geometrik chiziqlar. Ular xonalarni ajratadi, lekin yorug'likni to'sib qo'ymaydi.",
      "Eshik ochiladigan, sirpanuvchi (rels ustida) yoki ikki qanotli bo'lishi mumkin. Shisha — shaffof yoki matt; ramka bo'limlari soni va joylashuvini siz dizayn bosqichida tanlaysiz.",
    ],
    benefits: [
      { title: 'Sanoat uslubi', text: "Qora metall va shisha uyg'unligi zamonaviy interyerning belgisi." },
      { title: "Joy tejaydi", text: "Sirpanuvchi tizim eshik ochilish uchun joy talab qilmaydi." },
      { title: "Mustahkam konstruksiya", text: "Metall karkas va temperlangan shisha uzoq xizmat qiladi." },
      { title: 'Individual dizayn', text: "Bo'limlar soni, rang va furnitura loyihaga qarab tanlanadi." },
    ],
    specs: [
      { label: 'Karkas', value: 'Metall profil, qora yoki boshqa rang' },
      { label: 'Shisha', value: 'Temperlangan, shaffof yoki matt' },
      { label: 'Ochilish', value: 'Ochiladigan, sirpanuvchi, ikki qanotli' },
      { label: 'Tayyorlash muddati', value: '3–7 kun' },
      { label: 'Kafolat', value: '5 yil' },
    ],
    useCases: ['Oshxona va mehmonxona oralig‘i', 'Kabinet va garderob', 'Restoran va kafe', 'Ofis kirish zonasi'],
    faqs: [
      {
        q: 'Loft eshik qanday xonalarga mos keladi?',
        a: "U ko'pincha oshxona-mehmonxona, kabinet, garderob va tijorat fazolarida qo'llaniladi — yorug'lik kerak, lekin zonalarni ajratish ham lozim bo'lgan joylarda.",
      },
      {
        q: 'Sirpanuvchi va ochiladigan eshikning farqi nima?',
        a: "Ochiladigan eshik ochilish uchun bo'sh joy talab qiladi, sirpanuvchisi esa devor bo'ylab harakatlanadi va tor xonalarda joy tejaydi.",
      },
      {
        q: 'Ramka rangini tanlash mumkinmi?',
        a: "Ha, eng mashhuri qora, shuningdek oltin, kumush va mis ranglari mavjud.",
      },
      {
        q: 'Eshik yetkazib berish va o‘rnatishni o‘z ichiga oladimi?',
        a: "Ha, ishlab chiqarish, yetkazish va o'rnatish bir paketda amalga oshiriladi.",
      },
    ],
  },
  {
    slug: 'moskit-setkalari',
    name: 'Moskit setkalari',
    metaTitle: "Moskit setkalari — deraza va eshik uchun | LUMIVERA",
    metaDescription:
      "Deraza va eshiklar uchun moskit setkalari: ramkali, rolikli va sirpanuvchi turlar. Hasharotlardan himoya, havo almashinuvi saqlanadi. Tez o'rnatish va kafolat.",
    h1: "Deraza va eshiklar uchun moskit setkalari",
    answer:
      "Moskit setka hasharotlarni kiritmaydi, lekin havo almashinuviga to'sqinlik qilmaydi; LUMIVERA ularni deraza va eshik o'lchamiga moslab ishlab chiqaradi hamda tez o'rnatadi.",
    intro: [
      "Yozda deraza ochiq bo'lsa-yu, hasharotlar uyga kirsa, qulaylik yo'qoladi. Moskit setka muammoni hal qiladi: toza havo kiradi, chivin, pashsha va boshqa hasharotlar esa yo'q.",
      "Setka turi deraza yoki eshikka qarab tanlanadi: ramkali (olinadigan), sirpanuvchi, rolikli (yig'iladigan) va eshik uchun magnitli yoki ochiladigan variantlar mavjud.",
    ],
    benefits: [
      { title: 'Havo almashadi', text: "Deraza ochiq, hasharotlar tashqarida qoladi." },
      { title: "Tez o'rnatish", text: "Odatda bir necha daqiqadan yarim soatgacha vaqt oladi." },
      { title: "Aniq o'lcham", text: "Har bir deraza va eshikka individual tayyorlanadi." },
      { title: 'Oson tozalash', text: "Olinadigan ramka suv bilan oson yuviladi." },
    ],
    specs: [
      { label: 'Turlari', value: 'Ramkali, sirpanuvchi, rolikli, eshik uchun' },
      { label: 'Ramka', value: 'Alyuminiy profil, bir necha rang' },
      { label: 'To‘r', value: 'Fiberglass, anti-pyl va boshqa turlar' },
      { label: 'Tayyorlash muddati', value: 'Qisqa muddatda' },
    ],
    useCases: ['Kvartira derazalari', 'Balkon va lodjiya', 'Kottedj eshiklari', 'Restoran terasalari'],
    faqs: [
      {
        q: 'Qaysi turdagi moskit setka tanlash kerak?',
        a: "Standart derazalar uchun ramkali setka eng arzon va oddiy; keng teshiklar va eshiklar uchun sirpanuvchi yoki rolikli variant qulayroq.",
      },
      {
        q: 'Setkani qishda yechib qo‘yish mumkinmi?',
        a: "Ramkali setkalar osongina olib, joyiga qo'yiladi, rolikli turlar esa yig'ib qo'yiladi.",
      },
      {
        q: 'Setka uy hayvonlariga chidaydimi?',
        a: "Standart to'r yirtilishi mumkin; mushuk va itlar bor uyga mustahkamlangan to'r tavsiya etiladi.",
      },
      {
        q: 'Qancha vaqtda tayyor bo‘ladi?',
        a: "Setkalar shisha konstruksiyalardan tezroq tayyorlanadi; aniq muddatni buyurtma vaqtida aytamiz.",
      },
    ],
  },
]

export const getService = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug)
