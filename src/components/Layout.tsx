import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScroll } from '../hooks/useScroll'
import { CallButton } from './CallButton'
import { Footer } from './Footer'
import { GlassBackground } from './GlassBackground'
import { Loader } from './Loader'
import { Navbar } from './Navbar'
import { ProgressBar } from './ProgressBar'

export function Layout() {
  const { y, progress } = useScroll()
  const { pathname } = useLocation()

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <ProgressBar progress={progress} />
      <Loader />
      <GlassBackground />
      <a className="skip" href="#main">
        Asosiy kontentga o'tish
      </a>
      <Navbar scrolled={y > 40} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}
