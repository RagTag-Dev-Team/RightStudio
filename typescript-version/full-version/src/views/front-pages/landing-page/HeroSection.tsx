// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'

const HeroSection = ({ mode }: { mode: Mode }) => {
  // States
  const [dashboardPosition, setDashboardPosition] = useState({ x: 0, y: 0 })
  const [elementsPosition, setElementsPosition] = useState({ x: 0, y: 0 })

  // Vars
  const dashboardImageLight = '/images/front-pages/landing-page/hero-dashboard-light.png'
  const dashboardImageDark = '/images/front-pages/landing-page/hero-dashboard-dark.png'
  const elementsImageLight = '/images/front-pages/landing-page/hero-elements-light.png'
  const elementsImageDark = '/images/front-pages/landing-page/hero-elements-dark.png'

  // Hooks
  const dashboardImage = useImageVariant(mode, dashboardImageLight, dashboardImageDark)
  const elementsImage = useImageVariant(mode, elementsImageLight, elementsImageDark)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const speedDashboard = 2
      const speedElements = 2.5

      const updateMousePosition = (ev: MouseEvent) => {
        const x = ev.clientX
        const y = ev.clientY

        setDashboardPosition({
          x: (window.innerWidth - x * speedDashboard) / 100,
          y: Math.max((window.innerHeight - y * speedDashboard) / 100, -40)
        })

        setElementsPosition({
          x: (window.innerWidth - x * speedElements) / 100,
          y: Math.max((window.innerHeight - y * speedElements) / 100, -40)
        })
      }

      window.addEventListener('mousemove', updateMousePosition)

      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return (
    <section className='relative'>
      <img src='/images/front-pages/landing-page/hero-bg-light.png' alt='hero-bg' className={styles.heroSectionBg} />
      <div className='pbs-16 md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto pli-6'>
        <div className='md:max-is-[550px] mlb-0 mli-auto text-center'>
          <Typography className='font-extrabold text-primary sm:text-[38px] text-3xl mbe-4 leading-[44px]'>
            All in one sass application for your business
          </Typography>
          <Typography className='font-medium'>
            No coding required to make customizations. The live customizer has everything your marketing need.
          </Typography>
          <div className='mbs-8'>
            <Button variant='contained' color='primary'>
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
      <div
        className='relative text-center md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] pli-6 mli-auto'
        style={{ transform: `translate(${dashboardPosition.x}px, ${dashboardPosition.y}px)` }}
      >
        <img src={dashboardImage} alt='dashboard-image' className={classnames('mli-auto', styles.heroSecDashboard)} />
        <div className={classnames('absolute', styles.heroSectionElements)}>
          <img
            src={elementsImage}
            alt='dashboard-elements'
            style={{ transform: `translate(${elementsPosition.x}px, ${elementsPosition.y}px)` }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
