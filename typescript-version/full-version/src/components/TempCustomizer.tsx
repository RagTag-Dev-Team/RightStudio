'use client'

// Type Imports
import type { Settings } from '../@core/contexts/settingsContext'

// Hook Imports
import useSettings from '../@core/hooks/useSettings'

const TempCustomizer = () => {
  const { settings, saveSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    saveSettings({
      [field]: value
    })
  }

  return (
    <div>
      <form>
        <label htmlFor='mode'>Mode:</label>
        <br />
        <input
          type='radio'
          id='dark'
          name='mode'
          value='dark'
          checked={settings.mode === 'dark'}
          onChange={() => handleChange('mode', 'dark')}
        />
        <label htmlFor='dark'>Dark</label>
        <br />
        <input
          type='radio'
          id='light'
          name='mode'
          value='light'
          checked={settings.mode === 'light'}
          onChange={() => handleChange('mode', 'light')}
        />
        <label htmlFor='light'>Light</label>
        <br />
        <input
          type='radio'
          id='system'
          name='mode'
          value='system'
          checked={settings.mode === 'system'}
          onChange={() => handleChange('mode', 'system')}
        />
        <label htmlFor='system'>System</label>
        <br />

        <br />

        <label htmlFor='skin'>Skin:</label>
        <br />
        <input
          type='radio'
          id='default'
          name='skin'
          value='default'
          checked={settings.skin === 'default'}
          onChange={() => handleChange('skin', 'default')}
        />
        <label htmlFor='default'>Default</label>
        <br />
        <input
          type='radio'
          id='border'
          name='skin'
          value='bordered'
          checked={settings.skin === 'bordered'}
          onChange={() => handleChange('skin', 'bordered')}
        />
        <label htmlFor='border'>Border</label>
        <br />
        <input
          type='radio'
          id='semi-dark'
          name='skin'
          value='semi-dark'
          checked={settings.skin === 'semi-dark'}
          onChange={() => handleChange('skin', 'semi-dark')}
        />
        <label htmlFor='semi-dark'>Semi-dark</label>
        <br />

        <br />

        <label htmlFor='layout'>Layout:</label>
        <br />
        <input
          type='radio'
          id='vertical'
          name='layout'
          value='vertical'
          checked={settings.layout === 'vertical'}
          onChange={() => handleChange('layout', 'vertical')}
        />
        <label htmlFor='vertical'>Vertical</label>
        <br />
        <input
          type='radio'
          id='collapsed'
          name='layout'
          value='collapsed'
          checked={settings.layout === 'collapsed'}
          onChange={() => handleChange('layout', 'collapsed')}
        />
        <label htmlFor='collapsed'>Collapsed</label>
        <br />
        <input
          type='radio'
          id='horizontal'
          name='layout'
          value='horizontal'
          checked={settings.layout === 'horizontal'}
          onChange={() => handleChange('layout', 'horizontal')}
        />
        <label htmlFor='horizontal'>Horizontal</label>
        <br />

        <br />

        <label htmlFor='content'>Content:</label>
        <br />
        <input
          type='radio'
          id='compact'
          name='content'
          value='compact'
          checked={settings.contentWidth === 'compact'}
          onChange={() => handleChange('contentWidth', 'compact')}
        />
        <label htmlFor='compact'>Compact</label>
        <br />
        <input
          type='radio'
          id='wide'
          name='content'
          value='wide'
          checked={settings.contentWidth === 'wide'}
          onChange={() => handleChange('contentWidth', 'wide')}
        />
        <label htmlFor='wide'>Wide</label>
        <br />

        <br />

        <label htmlFor='direction'>Direction:</label>
        <br />
        <input
          type='radio'
          id='ltr'
          name='direction'
          value='ltr'
          checked={settings.direction === 'ltr'}
          onChange={() => handleChange('direction', 'ltr')}
        />
        <label htmlFor='ltr'>LTR</label>
        <br />
        <input
          type='radio'
          id='rtl'
          name='direction'
          value='rtl'
          checked={settings.direction === 'rtl'}
          onChange={() => handleChange('direction', 'rtl')}
        />
        <label htmlFor='rtl'>RTL</label>
        <br />
        <br />

        <label htmlFor='navbarBlur'>Navbar Blur</label>
        <br />
        <input
          type='radio'
          id='yes'
          name='navbarBlur'
          value='true'
          checked={settings.navbarBlur === true}
          onChange={() => handleChange('navbarBlur', true)}
        />
        <label htmlFor='yes'>Yes</label>
        <br />
        <input
          type='radio'
          id='no'
          name='navbarBlur'
          value='No'
          checked={settings.navbarBlur === false}
          onChange={() => handleChange('navbarBlur', false)}
        />
        <label htmlFor='no'>No</label>
        <br />
      </form>
    </div>
  )
}

export default TempCustomizer
