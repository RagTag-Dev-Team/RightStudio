// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

// Styled Component Imports
import StyledFooter from '../styles/StyledFooter'

// Util Imports
import { layoutClasses } from '../utils/utilityClasses'

const Footer = ({ children }: ChildrenType) => {
  return (
    <StyledFooter className={layoutClasses.footer}>
      <div className={layoutClasses.footerContentWrapper} style={{ width: '100%' }}>
        {children}
      </div>
    </StyledFooter>
  )
}

export default Footer
