import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { robotsTxt, sitemapXml, llmsTxt, llmsFullTxt } from './seo/files'
import { renderHeadHtml } from './seo/head'
import { NOT_FOUND, PAGES } from './seo/pages'
import { HeadContext, type HeadCollector } from './seo/Seo'

export function render(url: string) {
  const collector: HeadCollector = { meta: null }
  const html = renderToString(
    <HeadContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadContext.Provider>,
  )
  const meta = collector.meta ?? NOT_FOUND
  return { html, head: renderHeadHtml(meta) }
}

export const paths = () => Object.keys(PAGES)
export const files = () => ({
  'robots.txt': robotsTxt(),
  'sitemap.xml': sitemapXml(),
  'llms.txt': llmsTxt(),
  'llms-full.txt': llmsFullTxt(),
})
