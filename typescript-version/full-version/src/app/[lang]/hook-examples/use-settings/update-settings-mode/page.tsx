'use client'

// React Imports
import { useEffect } from 'react'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'

const UpdateSettingsModePage = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  useEffect(() => {
    updateSettings({
      mode: 'dark'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='p-4 flex-grow'>
      <p>Default Setting Mode is System</p>
      <p>Update Settings Mode:{settings.mode}</p>
    </main>
  )
}

export default UpdateSettingsModePage
