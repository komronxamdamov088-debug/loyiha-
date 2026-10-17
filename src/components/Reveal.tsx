import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3
  style?: CSSProperties
}

export function Reveal({ children, className = '', delay, style }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const cls = ['rv', delay && `d${delay}`, className, inView && 'in'].filter(Boolean).join(' ')
  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  )
}
