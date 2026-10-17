import { SITE } from '../site'

export const PHONE = SITE.phone
export const PHONE_LABEL = SITE.phoneLabel

export const NAV_LINKS = [
  { to: '/xizmatlar', label: 'Xizmatlar' },
  { to: '/konfigurator', label: 'Konfigurator' },
  { to: '/loyihalar', label: 'Loyihalar' },
  { to: '/maqolalar', label: 'Maqolalar' },
  { to: '/biz-haqimizda', label: 'Biz haqimizda' },
  { to: '/aloqa', label: 'Aloqa' },
]

export const MARQUEE_WORDS = [
  'Dush kabinalari',
  'Peregorodka',
  'Loft eshiklar',
  'Moskit setka',
  'Temperlangan shisha',
]

export const SERVICES = [
  {
    slug: 'dush-kabinalari',
    title: 'Dush kabinalari',
    text: "Zamonaviy, xavfsiz temperlangan shisha. Har qanday o'lchamga individual.",
    shape: { x: 25, y: 10, width: 50, height: 80, rx: 3 },
    path: 'M42 40l-4 12M52 40l-4 12M62 40l-4 12',
  },
  {
    slug: 'peregorodkalar',
    title: 'Peregorodkalar',
    text: "Ofis va uy uchun shaffof devorlar: fazoni bo'ladi, nurni saqlaydi.",
    shape: { x: 10, y: 15, width: 80, height: 70 },
    path: 'M50 15v70M10 50h80M30 35h10M60 65h10',
  },
  {
    slug: 'loft-eshiklar',
    title: 'Loft eshiklar',
    text: "Qora metall ramka va yog'och-shisha uyg'unligi. Sanoat uslubi.",
    shape: { x: 15, y: 10, width: 70, height: 80 },
    path: 'M15 36h70M15 62h70M50 10v80',
  },
  {
    slug: 'moskit-setkalari',
    title: 'Moskit setkalari',
    text: "Hasharotlardan himoya, havo almashinuvi saqlanadi. Tez o'rnatish.",
    shape: { x: 15, y: 15, width: 70, height: 70 },
    path: 'M15 29h70M15 43h70M15 57h70M15 71h70M29 15v70M43 15v70M57 15v70M71 15v70',
  },
]

export const STATS = [
  { n: 15, suffix: '', label: 'yillik tajriba' },
  { n: 2500, suffix: '+', label: 'loyiha' },
  { n: 88, suffix: 'K', label: 'instagram obunachi' },
  { n: 5, suffix: ' yil', label: 'kafolat' },
]

export const GALLERY = [
  { title: 'Villa — dush zonasi', bg: 'linear-gradient(135deg,#3a2a0a,#c9964a 60%,#1b1505)' },
  { title: 'Ofis peregorodka', bg: 'linear-gradient(160deg,#0d2a3f,#2a7ca8)' },
  { title: 'Loft eshik', bg: 'linear-gradient(160deg,#1a1a1a,#555)' },
  { title: 'Klinika', bg: 'linear-gradient(200deg,#2d1a3f,#7a4aa8)' },
  { title: 'Zamonaviy hammom', bg: 'linear-gradient(120deg,#0f3a2b,#3aa87a)' },
  { title: 'Restoran zonasi', bg: 'linear-gradient(120deg,#3f1a1a,#b84a4a)' },
]

export const STEPS = [
  { title: "O'lchov", text: 'Usta bepul kelib o\'lchaydi.' },
  { title: 'Dizayn', text: '3D vizual va aniq narx.' },
  { title: 'Ishlab chiqarish', text: 'Zavodda 3–7 kun ichida.' },
  { title: "O'rnatish", text: 'Toza, tez va kafolat bilan.' },
]

export const REVIEWS = [
  { text: "Vannaxonamiz butunlay boshqacha ko'rindi. Usta aniq vaqtda keldi.", name: 'Dilnoza A.', city: 'Toshkent' },
  { text: 'Ofisga peregorodka qildirdik, jamoa juda xursand. Sifat a\'lo.', name: 'Jasur M.', city: 'Samarqand' },
  { text: 'Loft eshik uyimizning yuziga aylandi. Rahmat!', name: 'Malika R.', city: 'Buxoro' },
  { text: 'Narx ham, sifat ham o\'zini oqladi. Tavsiya qilaman.', name: 'Aziz K.', city: 'Toshkent' },
]

export const GLASS_TYPES = [
  { value: 'clear', label: 'Shaffof', price: 1 },
  { value: 'matt', label: 'Matt', price: 1.15 },
  { value: 'rib', label: 'Rifli', price: 1.3 },
  { value: 'tint', label: 'Tonirovka', price: 1.25 },
] as const

export const FRAME_COLORS = [
  { value: '#e3b866', bg: '#e3b866', border: undefined },
  { value: '#111111', bg: '#111', border: '#555' },
  { value: '#c9ced8', bg: '#c9ced8', border: undefined },
  { value: '#b87333', bg: '#b87333', border: undefined },
]

export const DOOR_TYPES = [
  { value: 'swing', label: 'Ochiladigan', price: 1 },
  { value: 'slide', label: 'Sirpanuvchi', price: 1.2 },
] as const

export const SERVICE_OPTIONS = ['Dush kabinasi', 'Peregorodka', 'Loft eshik', 'Moskit setka']
