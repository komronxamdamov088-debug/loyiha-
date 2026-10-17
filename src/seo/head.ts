import { absUrl, SITE } from '../site'
import { ogImage } from './schema'
import type { PageMeta } from './types'

interface Tag {
  tag: 'title' | 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  text?: string
}

/** Attribute that marks head nodes owned by the SEO layer, so they can be swapped on navigation. */
export const SEO_ATTR = 'data-seo'

export function headTags(m: PageMeta): Tag[] {
  const url = absUrl(m.path)
  const tags: Tag[] = [
    { tag: 'title', attrs: {}, text: m.title },
    { tag: 'meta', attrs: { name: 'description', content: m.description } },
    {
      tag: 'meta',
      attrs: {
        name: 'robots',
        content: m.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1',
      },
    },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    { tag: 'link', attrs: { rel: 'alternate', hreflang: SITE.lang, href: url } },
    { tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default', href: url } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { tag: 'meta', attrs: { property: 'og:type', content: m.type ?? 'website' } },
    { tag: 'meta', attrs: { property: 'og:title', content: m.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: m.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: m.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: m.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } },
  ]
  if (m.type === 'article' && m.published) {
    tags.push({ tag: 'meta', attrs: { property: 'article:published_time', content: m.published } })
    tags.push({ tag: 'meta', attrs: { property: 'article:modified_time', content: m.modified } })
  }
  for (const ld of m.jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(ld) })
  }
  return tags
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Server side: serialise tags into the HTML template. */
export function renderHeadHtml(m: PageMeta): string {
  return headTags(m)
    .map((t) => {
      const attrs = Object.entries(t.attrs)
        .map(([k, v]) => ` ${k}="${esc(v)}"`)
        .join('')
      const mark = ` ${SEO_ATTR}`
      if (t.tag === 'title') return `<title${mark}>${esc(t.text ?? '')}</title>`
      if (t.tag === 'script') return `<script${attrs}${mark}>${(t.text ?? '').replace(/</g, '\\u003c')}</script>`
      return `<${t.tag}${attrs}${mark}>`
    })
    .join('\n    ')
}

/** Client side: replace SEO-owned head nodes after route changes. */
export function applyHead(m: PageMeta) {
  const head = document.head
  head.querySelectorAll(`[${SEO_ATTR}]`).forEach((n) => n.remove())
  for (const t of headTags(m)) {
    const el = document.createElement(t.tag)
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v)
    if (t.text) el.textContent = t.text
    el.setAttribute(SEO_ATTR, '')
    head.appendChild(el)
  }
}
