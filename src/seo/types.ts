export type JsonLd = Record<string, unknown>

export interface PageMeta {
  path: string
  title: string
  description: string
  type?: 'website' | 'article'
  jsonLd: JsonLd[]
  /** Short, quotable summary reused in llms.txt. */
  summary: string
  priority: number
  changefreq: 'weekly' | 'monthly'
  modified: string
  published?: string
  noindex?: boolean
}
