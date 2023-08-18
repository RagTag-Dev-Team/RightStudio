// Icon Imports
import MoonIcon from '../svg/Moon'
import SunIcon from '../svg/Sun'
import DesktopIcon from '../svg/Desktop'

const ModeSwitcher = () => {
  return (
    <div className='flex items-center'>
      <MoonIcon fontSize='1.25rem' className='cursor-pointer' />
      <SunIcon fontSize='1.25rem' className='cursor-pointer' />
      <DesktopIcon fontSize='1.25rem' className='cursor-pointer' />
    </div>
  )
}

export default ModeSwitcher
