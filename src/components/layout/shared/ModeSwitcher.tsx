// Icon Imports
import MoonIcon from '../../../@layouts/svg/Moon'
import SunIcon from '../../../@layouts/svg/Sun'
import DesktopIcon from '../../../@layouts/svg/Desktop'

const ModeSwitcher = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <MoonIcon fontSize='1.25rem' style={{ cursor: 'pointer' }} />
      <SunIcon fontSize='1.25rem' style={{ cursor: 'pointer' }} />
      <DesktopIcon fontSize='1.25rem' style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default ModeSwitcher
