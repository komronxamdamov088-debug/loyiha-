import { useEffect, useState } from 'react'

export function useScroll() {
  const [state, setState] = useState({ y: 0, progress: 0 })

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - innerHeight
      setState({ y: scrollY, progress: max > 0 ? (scrollY / max) * 100 : 0 })
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return state
}
