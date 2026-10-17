import { useEffect, useRef, useState } from 'react'

const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3)

/** Animates from the previous value to `target` over `duration` ms. */
export function useAnimatedNumber(target: number, duration: number, enabled = true, ease = (p: number) => p) {
  const [value, setValue] = useState(0)
  const from = useRef(0)

  useEffect(() => {
    if (!enabled) return
    const start = from.current
    let t0: number | null = null
    let raf = 0
    const tick = (ts: number) => {
      t0 ??= ts
      const p = Math.min((ts - t0) / duration, 1)
      const v = start + (target - start) * ease(p)
      from.current = v
      setValue(v)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, enabled])

  return value
}

export { easeOutCubic }
