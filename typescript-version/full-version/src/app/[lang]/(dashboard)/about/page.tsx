'use client'

import { useEffect } from 'react'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'

const AboutPage = () => {
  const { updatePageSettings } = useSettings()

  useEffect(() => {
    updatePageSettings({
      mode: 'dark'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <h1>About Page</h1>
}

export default AboutPage
