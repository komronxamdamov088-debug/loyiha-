import { useState } from 'react'
import { DOOR_TYPES, FRAME_COLORS, GLASS_TYPES } from '../data/content'
import { useAnimatedNumber } from '../hooks/useAnimatedNumber'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type GlassType = (typeof GLASS_TYPES)[number]['value']
type DoorType = (typeof DOOR_TYPES)[number]['value']

const BASE_PRICE = 2_200_000

const glassTint = (t: GlassType) => (t === 'tint' ? '#6b7280' : t === 'matt' ? '#ffffff' : '#7fd6ff')

interface SwatchProps<T extends string> {
  title: string
  options: readonly { value: T; label: string }[]
  value: T
  onChange: (v: T) => void
}

function OptionGroup<T extends string>({ title, options, value, onChange }: SwatchProps<T>) {
  return (
    <>
      <h4>{title}</h4>
      <div className="sw">
        {options.map((o) => (
          <button key={o.value} className={o.value === value ? 'on' : ''} onClick={() => onChange(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </>
  )
}

export function Configurator() {
  const [glass, setGlass] = useState<GlassType>('clear')
  const [color, setColor] = useState(FRAME_COLORS[0].value)
  const [door, setDoor] = useState<DoorType>('swing')
  const [width, setWidth] = useState(90)

  const glassMul = GLASS_TYPES.find((g) => g.value === glass)!.price
  const doorMul = DOOR_TYPES.find((d) => d.value === door)!.price
  const price = Math.round((BASE_PRICE * (width / 90) * glassMul * doorMul) / 10000) * 10000
  const shownPrice = Math.round(useAnimatedNumber(price, 500))

  const tint = glassTint(glass)
  const tintOpacity = glass === 'matt' || glass === 'tint' ? 0.6 : 0.35

  return (
    <section id="konf">
      <SectionHeader label="Interaktiv">
        O'zingizning <span className="gold">kabinangizni</span> yarating
      </SectionHeader>
      <Reveal className="conf">
        <div className="stage">
          <svg id="cab" viewBox="0 0 200 240" style={{ transform: `scaleX(${0.8 + width / 450})` }}>
            <defs>
              <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={tint} stopOpacity={tintOpacity} />
                <stop offset="1" stopColor={tint} stopOpacity={0.08} />
              </linearGradient>
              <pattern id="rib" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="2" height="6" fill="#fff" opacity=".18" />
              </pattern>
            </defs>
            <ellipse cx="100" cy="228" rx="85" ry="8" fill="#000" opacity=".5" />
            <g stroke={color} strokeWidth="4" fill="none">
              <rect x="30" y="20" width="140" height="200" />
              <path d="M100 20V220" style={{ opacity: door === 'swing' ? 0 : 1 }} />
            </g>
            <rect x="32" y="22" width="136" height="196" fill="url(#gg)" />
            <rect x="32" y="22" width="136" height="196" fill="url(#rib)" opacity={glass === 'rib' ? 1 : 0} />
            <path d="M45 30 80 30 40 120Z" fill="#fff" opacity=".12">
              <animate attributeName="opacity" values=".05;.22;.05" dur="4s" repeatCount="indefinite" />
            </path>
            <rect x="92" y="100" width="4" height="40" rx="2" fill={color} />
            <g fill="#7fd6ff" opacity=".7">
              <circle cx="60" cy="12" r="2">
                <animate attributeName="cy" values="12;60" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="140" cy="10" r="2">
                <animate attributeName="cy" values="10;70" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2.6s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        <div className="opts">
          <OptionGroup title="Shisha turi" options={GLASS_TYPES} value={glass} onChange={setGlass} />

          <h4>Ramka rangi</h4>
          <div className="sw">
            {FRAME_COLORS.map((c) => (
              <button
                key={c.value}
                className={`c ${c.value === color ? 'on' : ''}`}
                aria-label={`Ramka rangi ${c.value}`}
                style={{ background: c.bg, borderColor: c.border }}
                onClick={() => setColor(c.value)}
              />
            ))}
          </div>

          <OptionGroup title="Eshik turi" options={DOOR_TYPES} value={door} onChange={setDoor} />

          <h4>
            Eni: <b>{width}</b> sm
          </h4>
          <input
            type="range"
            min={70}
            max={160}
            value={width}
            aria-label="Eni (sm)"
            onChange={(e) => setWidth(+e.target.value)}
          />

          <div className="price">
            <span>{shownPrice.toLocaleString('ru-RU')}</span> <small>so'm dan</small>
          </div>
          <Button to="/aloqa" style={{ marginTop: 18 }}>
            Shu variantni buyurtma qilish
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
