import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeader({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal className="sh">
      <small>{label}</small>
      <h2>{children}</h2>
    </Reveal>
  )
}
