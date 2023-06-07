// React Imports
import type { ReactNode } from 'react'
import { isValidElement, Children } from 'react'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { BreakPointType } from '../../../@menu-package/types'

// Component Imports
import NavHeader from '../vertical/NavHeader'
import Logo from '../../../components/layout/shared/Logo'
import NavCollapseIcons from '../vertical/NavCollapseIcons'

//* We have imported Menu, SubMenu & MenuItem from the horizontal-menu component for matching child component types in mapChildren function below, as the vertical-menu component has the same child components but they will not match the types.
import { Menu, SubMenu, MenuItem } from '../../../@menu-package/components/horizontal-menu'

//* We have also imported the VerticalMenu, VerticalSubmenu & VerticalMenuItem components from the vertical-menu component for mapping the children of the horizontal-menu components to the vertical-menu components.
import VerticalNav, {
  Menu as VerticalMenu,
  SubMenu as VerticalSubmenu,
  MenuItem as VerticalMenuItem
} from '../../../@menu-package/components/vertical-menu'

// Type
export type VerticalNavInHorizontalLayoutProps = {
  children?: ReactNode
  className?: string
  breakPoint?: BreakPointType
  customBreakPoint?: string
}

//* Reason behind mapping the children of the horizontal-menu component to the vertical-menu component: The Horizontal menu components will not work inside of Vertical menu on small screens. So, we have to map the children of the horizontal-menu components to the vertical-menu components. We also kept the same names and almost similar props for menuitem and submenu components for easy mapping.

const mapChildren = (children: ReactNode) => {
  return Children.map(children, child => {
    if (isValidElement(child)) {
      const { children, ...rest } = child.props

      switch (child.type) {
        case MenuItem:
          return (
            // eslint-disable-next-line lines-around-comment
            // <VerticalMenuItem component={child.props.component} href={child.props.href}>
            <VerticalMenuItem {...rest}>{children}</VerticalMenuItem>
          )
        case SubMenu:
          // return <VerticalSubmenu label={child.props.label}>{mapChildren(child.props.children)}</VerticalSubmenu>

          return <VerticalSubmenu {...rest}>{mapChildren(children)}</VerticalSubmenu>
        case Menu:
          return <VerticalMenu>{mapChildren(child.props.children)}</VerticalMenu>
        default:
          return child
      }
    }

    return null
  })
}

const VerticalNavInHorizontalLayout = (props: VerticalNavInHorizontalLayoutProps) => {
  const { children, className, breakPoint, customBreakPoint } = props

  return (
    <VerticalNav className={className} breakPoint={breakPoint} customBreakPoint={customBreakPoint}>
      <NavHeader>
        <Logo />
        <NavCollapseIcons />
      </NavHeader>
      <PerfectScrollbar options={{ wheelPropagation: false }}>{mapChildren(children)}</PerfectScrollbar>
    </VerticalNav>
  )
}

export default VerticalNavInHorizontalLayout
