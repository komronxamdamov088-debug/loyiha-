import { createContext, useContext, useEffect } from 'react'
import { applyHead } from './head'
import { NOT_FOUND, PAGES } from './pages'
import type { PageMeta } from './types'

/** Filled during server rendering so the prerenderer can inject head tags. */
export interface HeadCollector {
  meta: PageMeta | null
}
export const HeadContext = createContext<HeadCollector | null>(null)

export function Seo({ path }: { path: string | 'notfound' }) {
  const collector = useContext(HeadContext)
  const meta = path === 'notfound' ? NOT_FOUND : PAGES[path]
  if (!meta) throw new Error(`No SEO metadata registered for ${path}`)

  if (collector) collector.meta = meta

  useEffect(() => {
    applyHead(meta)
  }, [meta])

  return null
}
