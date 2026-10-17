// Prerenders every route to static HTML after `vite build` (client) and `vite build --ssr` (server).
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverEntry = pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href

const { render, paths, files } = await import(serverEntry)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const inject = (url) => {
  const { html, head } = render(url)
  return template.replace('<!--seo-head-->', head).replace('<!--app-html-->', html)
}

const write = (file, data) => {
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, data)
}

for (const path of paths()) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
  write(file, inject(path))
}
write(join(dist, '404.html'), inject('/__not-found__'))

for (const [name, body] of Object.entries(files())) write(join(dist, name), body)

rmSync(join(root, 'dist-server'), { recursive: true, force: true })
console.log(`prerendered ${paths().length} pages + 404, sitemap, robots, llms.txt`)
