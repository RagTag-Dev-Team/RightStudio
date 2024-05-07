'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsContentWidth = () => {
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
          <p>Content:</p>
          <input
            type='radio'
            id='compact'
            name='content'
            value='compact'
            checked={settings.contentWidth === 'compact'}
            onChange={() => handleChange('contentWidth', 'compact')}
          />
          <label htmlFor='compact'>Compact</label>
          <input
            type='radio'
            id='wide'
            name='content'
            value='wide'
            checked={settings.contentWidth === 'wide'}
            onChange={() => handleChange('contentWidth', 'wide')}
          />
          <label htmlFor='wide'>Wide</label>
        </form>
        <p>Value:{settings.contentWidth}</p>
      </div>
    </main>
  )
}

export default SettingsContentWidth
