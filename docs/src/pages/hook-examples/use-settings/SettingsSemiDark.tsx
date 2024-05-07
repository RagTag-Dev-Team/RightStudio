'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsSemiDark = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    updateSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex justify-between'>
        <form>
          <input
            type='checkbox'
            id='semiDark'
            name='semiDark'
            checked={settings.semiDark}
            onChange={() => handleChange('semiDark', !settings.semiDark)}
          />
          <label id='semiDark'>Semi Dark</label>
        </form>
        <p>Value:{settings.semiDark?.toString()}</p>
      </div>
    </main>
  )
}

export default SettingsSemiDark
