'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsFooterContentWidth = () => {
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
          <p>Footer Content:</p>
          <input
            type='radio'
            id='compact'
            name='content'
            value='compact'
            checked={settings.footerContentWidth === 'compact'}
            onChange={() => handleChange('footerContentWidth', 'compact')}
          />
          <label htmlFor='compact'>Compact</label>
          <input
            type='radio'
            id='wide'
            name='content'
            value='wide'
            checked={settings.footerContentWidth === 'wide'}
            onChange={() => handleChange('footerContentWidth', 'wide')}
          />
          <label htmlFor='wide'>Wide</label>
        </form>
        <p>Value:{settings.footerContentWidth}</p>
      </div>
    </main>
  )
}

export default SettingsFooterContentWidth
