// Third-party Imports
import classnames from 'classnames'

// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import HorizontalMenu from './HorizontalMenu'
import Translation from '../shared/Translation'
import ModeSwitcher from '../shared/ModeSwitcher'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div
      className={classnames(
        verticalLayoutClasses.navbarContent,
        'd-flex align-items-center gap-4 justify-content-between'
      )}
    >
      <div className='d-flex align-items-center gap-4'>
        <NavToggle />
        <NavSearch />
        <HorizontalMenu />
      </div>
      <div className='d-flex align-items-center gap-4'>
        <Translation />
        <ModeSwitcher />
      </div>
    </div>
  )
}

export default NavbarContent
