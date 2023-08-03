// Third-party Imports
import classnames from 'classnames'

// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import HorizontalMenu from './HorizontalMenu'
import Translation from '../shared/Translation'
import ModeSwitcher from '../../../@layouts/components/ModeSwitcher'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div
      className={classnames(
        verticalLayoutClasses.navbarContent,
        'd-flex align-items-center justify-content-between gap-16px width-100'
      )}
    >
      <div className='d-flex align-items-center gap-16px'>
        <NavToggle />
        {/* <NavSearch /> */}
        <HorizontalMenu />
      </div>
      <div className='d-flex align-items-center gap-16px'>
        <Translation />
        <ModeSwitcher />
      </div>
    </div>
  )
}

export default NavbarContent
