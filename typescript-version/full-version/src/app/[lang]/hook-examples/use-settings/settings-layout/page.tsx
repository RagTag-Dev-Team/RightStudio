'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsLayout = () => {
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
          <p>Layout:</p>
          <input
            type='radio'
            id='vertical'
            name='layout'
            value='vertical'
            checked={settings.layout === 'vertical'}
            onChange={() => handleChange('layout', 'vertical')}
          />
          <label htmlFor='vertical'>Vertical</label>
          <input
            type='radio'
            id='collapsed'
            name='layout'
            value='collapsed'
            checked={settings.layout === 'collapsed'}
            onChange={() => handleChange('layout', 'collapsed')}
          />
          <label htmlFor='collapsed'>Collapsed</label>
          <input
            type='radio'
            id='horizontal'
            name='layout'
            value='horizontal'
            checked={settings.layout === 'horizontal'}
            onChange={() => handleChange('layout', 'horizontal')}
          />
          <label htmlFor='horizontal'>Horizontal</label>
        </form>
        <p>Value:{settings.layout}</p>
      </div>
    </main>
  )
}

export default SettingsLayout
