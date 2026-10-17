import { useId } from 'react'
import type { ArtKind, Tone } from '../data/media'

const TONES: Record<Tone, [string, string, string]> = {
  gold: ['#2a1d06', '#0a0d18', '#e3b866'],
  ice: ['#0d2a3f', '#07090f', '#7fd6ff'],
  rose: ['#3f1a1a', '#0a0a12', '#e8a0a0'],
  green: ['#0f3a2b', '#07090f', '#7fe0b0'],
}

/** Deterministic pseudo-random so server and client render identical shards. */
function shards() {
  let s = 7
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  return Array.from({ length: 22 }, () => {
    const x = r() * 800
    const y = r() * 600
    const k = 70 + r() * 110
    const f = (n: number) => Math.round(n)
    return `${f(x)},${f(y)} ${f(x + k * (r() - 0.2))},${f(y + k * r())} ${f(x - k * r())},${f(y + k * (0.4 + r()))}`
  })
}

export function Art({ kind, tone = 'gold', label }: { kind: ArtKind; tone?: Tone; label: string }) {
  const id = useId().replace(/:/g, '')
  const [c1, c2, ac] = TONES[tone]
  const glass = `url(#${id}g)`

  return (
    <svg className="art" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".3" />
          <stop offset=".45" stopColor={ac} stopOpacity=".07" />
          <stop offset="1" stopColor="#fff" stopOpacity=".18" />
        </linearGradient>
        <radialGradient id={`${id}l`} cx=".78" cy=".12" r=".85">
          <stop offset="0" stopColor={ac} stopOpacity=".4" />
          <stop offset="1" stopColor={ac} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={ac} stopOpacity=".16" />
          <stop offset="1" stopColor={ac} stopOpacity="0" />
        </linearGradient>
        <pattern id={`${id}m`} width="7" height="7" patternUnits="userSpaceOnUse">
          <path d="M0 0H7M0 0V7" stroke="#fff" strokeOpacity=".4" strokeWidth=".9" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}b)`} />
      <rect width="800" height="600" fill={`url(#${id}l)`} />

      {kind === 'partition' && (
        <g>
          <rect x="60" y="480" width="680" height="120" fill={`url(#${id}f)`} />
          <g fill={ac} opacity=".16">
            <rect x="120" y="330" width="560" height="14" rx="3" />
            <rect x="160" y="344" width="10" height="136" />
            <rect x="630" y="344" width="10" height="136" />
            <rect x="260" y="290" width="90" height="40" rx="6" />
          </g>
          {[60, 230, 400, 570].map((x) => (
            <g key={x}>
              <rect x={x} y="70" width="160" height="410" fill={glass} stroke="#05070d" strokeWidth="7" />
              <rect x={x} y="70" width="160" height="410" fill="none" stroke={ac} strokeOpacity=".55" strokeWidth="1.2" />
              <rect x={x + 7} y="215" width="146" height="70" fill="#fff" opacity=".1" />
              <path d={`M${x + 20} 80 ${x + 70} 80 ${x + 20} 300Z`} fill="#fff" opacity=".1" />
            </g>
          ))}
          <rect x="468" y="260" width="8" height="70" rx="3" fill={ac} />
        </g>
      )}

      {kind === 'loft' && (
        <g>
          <rect x="120" y="480" width="560" height="120" fill={`url(#${id}f)`} />
          <rect x="170" y="70" width="460" height="410" fill={glass} />
          <path d="M190 80 330 80 190 330Z" fill="#fff" opacity=".1" />
          <g stroke="#05070d" strokeWidth="8" fill="none">
            <rect x="170" y="70" width="460" height="410" strokeWidth="14" />
            <path d="M400 70V480M285 70V480M515 70V480M170 207H630M170 344H630" />
          </g>
          <rect x="170" y="70" width="460" height="410" fill="none" stroke={ac} strokeOpacity=".5" strokeWidth="1.2" />
          <rect x="378" y="262" width="9" height="76" rx="4" fill={ac} />
          <rect x="413" y="262" width="9" height="76" rx="4" fill={ac} />
        </g>
      )}

      {kind === 'screen' && (
        <g>
          <path d="M150 490 90 600H710L650 490Z" fill={ac} opacity=".1" />
          <rect x="150" y="70" width="500" height="420" fill={`url(#${id}l)`} />
          <circle cx="560" cy="150" r="46" fill={ac} opacity=".28" />
          <rect x="158" y="78" width="484" height="404" fill={`url(#${id}m)`} />
          <rect x="150" y="70" width="500" height="420" fill="none" stroke="#05070d" strokeWidth="14" />
          <rect x="150" y="70" width="500" height="420" fill="none" stroke={ac} strokeOpacity=".5" strokeWidth="1.2" />
          <path d="M400 70V490" stroke="#05070d" strokeWidth="8" />
          <path d="M150 490C130 420 90 380 60 350 90 300 120 250 150 120Z" fill="#fff" opacity=".08" />
          <g fill={ac} opacity=".22">
            <ellipse cx="90" cy="560" rx="60" ry="26" />
            <ellipse cx="130" cy="520" rx="22" ry="52" transform="rotate(-18 130 520)" />
            <ellipse cx="60" cy="520" rx="18" ry="44" transform="rotate(16 60 520)" />
          </g>
        </g>
      )}

      {kind === 'tempered' && (
        <g>
          {shards().map((p, i) => (
            <polygon key={p} points={p} fill={glass} stroke={ac} strokeOpacity={0.25 + (i % 4) * 0.1} strokeWidth="1.2" />
          ))}
          <g stroke={ac} strokeOpacity=".5" strokeWidth="1.4" fill="none">
            {Array.from({ length: 14 }, (_, i) => {
              const a = (i / 14) * Math.PI * 2
              return <path key={i} d={`M400 300L${Math.round(400 + Math.cos(a) * 340)} ${Math.round(300 + Math.sin(a) * 340)}`} />
            })}
          </g>
          <circle cx="400" cy="300" r="10" fill={ac} opacity=".7" />
        </g>
      )}
    </svg>
  )
}
