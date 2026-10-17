import { useEffect, useRef } from 'react'

interface Shard {
  x: number
  y: number
  s: number
  r: number
  vr: number
  vy: number
  a: number
  gold: boolean
}

/** Full-screen canvas of slowly drifting glass shards. */
export function GlassBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current!
    const g = cv.getContext('2d')!
    let W = 0
    let H = 0
    let mx = innerWidth / 2
    let raf = 0

    const resize = () => {
      W = cv.width = innerWidth
      H = cv.height = innerHeight
    }
    resize()

    const shards: Shard[] = Array.from({ length: 46 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      s: 20 + Math.random() * 70,
      r: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.004,
      vy: 0.1 + Math.random() * 0.3,
      a: 0.03 + Math.random() * 0.07,
      gold: Math.random() < 0.3,
    }))

    const draw = () => {
      g.clearRect(0, 0, W, H)
      const gr = g.createRadialGradient(W * 0.8, H * 0.1, 0, W * 0.8, H * 0.1, W * 0.7)
      gr.addColorStop(0, '#e3b86618')
      gr.addColorStop(1, 'transparent')
      g.fillStyle = gr
      g.fillRect(0, 0, W, H)

      for (const p of shards) {
        p.y -= p.vy
        p.r += p.vr
        if (p.y < -100) {
          p.y = H + 100
          p.x = Math.random() * W
        }
        g.save()
        g.translate(p.x + (mx - W / 2) * p.s * 0.0004, p.y)
        g.rotate(p.r)
        g.beginPath()
        g.moveTo(0, -p.s)
        g.lineTo(p.s * 0.6, 0)
        g.lineTo(0, p.s * 0.9)
        g.lineTo(-p.s * 0.5, 0)
        g.closePath()
        g.fillStyle = p.gold ? `rgba(227,184,102,${p.a})` : `rgba(127,214,255,${p.a})`
        g.fill()
        g.strokeStyle = `rgba(255,255,255,${p.a * 1.5})`
        g.stroke()
        g.restore()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
    }
    addEventListener('resize', resize)
    addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas id="bg" ref={canvasRef} />
}
