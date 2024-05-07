'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsSkin = () => {
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
          <p>Skin:</p>
          <input
            type='radio'
            id='default'
            name='skin'
            value='default'
            checked={settings.skin === 'default'}
            onChange={() => handleChange('skin', 'default')}
          />
          <label htmlFor='default'>Default</label>
          <input
            type='radio'
            id='border'
            name='skin'
            value='bordered'
            checked={settings.skin === 'bordered'}
            onChange={() => handleChange('skin', 'bordered')}
          />
          <label htmlFor='border'>Border</label>
        </form>
        <p>value:{settings.skin}</p>
      </div>
    </main>
  )
}

export default SettingsSkin
