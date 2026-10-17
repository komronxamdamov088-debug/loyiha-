import { ARTICLES } from '../data/articles'
import { CITIES } from '../data/cities'
import { GENERAL_FAQS } from '../data/faqs'
import { SERVICE_PAGES } from '../data/services'
import { absUrl, SITE } from '../site'
import { PAGES } from './pages'

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
]

export const robotsTxt = () =>
  [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${SITE.url}/sitemap.xml`,
    '',
  ].join('\n')

export const sitemapXml = () => {
  const urls = Object.values(PAGES)
    .map(
      (p) =>
        `  <url>\n    <loc>${absUrl(p.path)}</loc>\n    <lastmod>${p.modified}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`,
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const link = (path: string) => `- [${PAGES[path].title.replace(/ \| LUMIVERA$/, '')}](${absUrl(path)}): ${PAGES[path].summary}`

/** https://llmstxt.org — concise map of the site for language models. */
export const llmsTxt = () =>
  [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} — Uzbekistan-based maker of made-to-measure glass structures: shower enclosures, glass partitions, loft-style doors and insect screens. Tempered glass, free measuring, production in 3–7 days, installation and a 5-year warranty. Served cities: ${CITIES.map((c) => c.name).join(', ')}. Site language: Uzbek (Latin).`,
    '',
    '## Services',
    ...SERVICE_PAGES.map((s) => link(`/xizmatlar/${s.slug}`)),
    '',
    '## Company and process',
    link('/biz-haqimizda'),
    link('/jarayon'),
    link('/loyihalar'),
    link('/konfigurator'),
    link('/savollar'),
    link('/aloqa'),
    '',
    '## Service areas',
    ...CITIES.map((c) => link(`/hududlar/${c.slug}`)),
    '',
    '## Guides',
    ...ARTICLES.map((a) => link(`/maqolalar/${a.slug}`)),
    '',
    '## Optional',
    `- [Full content in one file](${SITE.url}/llms-full.txt)`,
    `- [Sitemap](${SITE.url}/sitemap.xml)`,
    '',
    '## Contact',
    `- Phone: ${SITE.phoneLabel}`,
    `- Email: ${SITE.email}`,
    `- Location: ${SITE.address.city}, Uzbekistan`,
    `- Hours: ${SITE.hours.opens}–${SITE.hours.closes}`,
    '',
  ].join('\n')

const faqMd = (faqs: { q: string; a: string }[]) => faqs.map((f) => `**${f.q}**\n${f.a}`).join('\n\n')

export const llmsFullTxt = () =>
  [
    `# ${SITE.name} — full content`,
    `Updated: ${SITE.modified}. Source: ${SITE.url}`,
    '',
    ...SERVICE_PAGES.flatMap((s) => [
      `## ${s.h1}`,
      `URL: ${absUrl(`/xizmatlar/${s.slug}`)}`,
      s.answer,
      ...s.intro,
      '### Specifications',
      ...s.specs.map((x) => `- ${x.label}: ${x.value}`),
      '### FAQ',
      faqMd(s.faqs),
      '',
    ]),
    '## General FAQ',
    faqMd(GENERAL_FAQS),
    '',
    ...CITIES.flatMap((c) => [`## ${c.name}`, `URL: ${absUrl(`/hududlar/${c.slug}`)}`, c.intro, ...c.details, faqMd(c.faqs), '']),
    ...ARTICLES.flatMap((a) => [
      `## ${a.title}`,
      `URL: ${absUrl(`/maqolalar/${a.slug}`)} (published ${a.published}, updated ${a.modified})`,
      a.answer,
      ...a.sections.flatMap((s) => [`### ${s.h}`, ...s.p]),
      faqMd(a.faqs),
      '',
    ]),
    '## Contact',
    `Phone: ${SITE.phoneLabel} | Email: ${SITE.email} | ${SITE.address.city} | ${SITE.hours.opens}–${SITE.hours.closes}`,
    '',
  ].join('\n')
