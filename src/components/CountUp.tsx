import { useInView } from '../hooks/useInView'
import { easeOutCubic, useAnimatedNumber } from '../hooks/useAnimatedNumber'

interface Props {
  to: number
  suffix?: string
  className?: string
}

export function CountUp({ to, suffix = '', className }: Props) {
  const [ref, inView] = useInView<HTMLElement>()
  const value = useAnimatedNumber(inView ? to : 0, 1800, inView, easeOutCubic)
  return (
    <b ref={ref} className={className}>
      {Math.floor(value)}
      {suffix}
    </b>
  )
}
