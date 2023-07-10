'use client'

import { useEffect } from 'react'

// Component Imports
import useSettings from '../../../@core/hooks/useSettings'

const AboutPage = () => {
  const { updateSettings } = useSettings()

  useEffect(() => {
    updateSettings({
      mode: 'dark'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>About Page</h1>
      <br />
    </div>
  )
}

export default AboutPage
