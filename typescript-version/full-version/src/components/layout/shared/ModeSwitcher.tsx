// Icon Imports
import MoonIcon from '../../../@layouts/svg/Moon'
import SunIcon from '../../../@layouts/svg/Sun'
import DesktopIcon from '../../../@layouts/svg/Desktop'

const ModeSwitcher = () => {
  return (
    <div className='d-flex align-items-center'>
      <MoonIcon fontSize='1.25rem' className='cursor-pointer' />
      <SunIcon fontSize='1.25rem' className='cursor-pointer' />
      <DesktopIcon fontSize='1.25rem' className='cursor-pointer' />
    </div>
  )
}

export default ModeSwitcher
