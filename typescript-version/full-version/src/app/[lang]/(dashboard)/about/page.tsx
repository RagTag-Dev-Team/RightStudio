'use client'

import { useEffect } from 'react'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'

const AboutPage = () => {
  // Hooks
  const { updatePageSettings } = useSettings()

  useEffect(() => {
    return updatePageSettings({
      mode: 'dark'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <h1>About Page</h1>
}

export default AboutPage
