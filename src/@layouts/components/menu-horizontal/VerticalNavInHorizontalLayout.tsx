// React Imports
import type { ReactNode } from 'react'
import { isValidElement, Children } from 'react'

// Component Imports
import MenuHeader from '../menu-vertical/MenuHeader'

//* We have imported Menu, SubMenu & MenuItem from the horizontal-menu component for matching child component types in mapChildren function below, as the vertical-menu component has the same child components but they will not match the types.
import { Menu, SubMenu, MenuItem } from '../../../@menu-package/components/horizontal-menu'

//* We have also imported the VerticalMenu, VerticalSubmenu & VerticalMenuItem components from the vertical-menu component for mapping the children of the horizontal-menu components to the vertical-menu components.
import VerticalNav, {
  Menu as VerticalMenu,
  SubMenu as VerticalSubmenu,
  MenuItem as VerticalMenuItem
} from '../../../@menu-package/components/vertical-menu'

import VerticalNavCollapseIcons from '../menu-vertical/VerticalNavCollapseIcons'
import PerfectScrollbar from '../../../@menu-package/wrapper-componnents/perfectscrollbar'

type VerticalNavInHorizontalLayoutProps = {
  children: ReactNode
  className?: string
}

//* Reason behind mapping the children of the vertical-menu component to the horizontal-menu component: The Horizontal menu components will not work inside of Vertical menu on small screens. So, we have to map the children of the horizontal-menu components to the vertical-menu components. We also kept the same names and almost similar props for menuitem and submenu components for easy mapping.

const mapChildren = (children: ReactNode) => {
  return Children.map(children, child => {
    if (isValidElement(child)) {
      switch (child.type) {
        case MenuItem:
          return (
            // eslint-disable-next-line lines-around-comment
            // <VerticalMenuItem component={child.props.component} href={child.props.href}>
            <VerticalMenuItem {...child.props}>{child.props.children}</VerticalMenuItem>
          )
        case SubMenu:
          // return <VerticalSubmenu label={child.props.label}>{mapChildren(child.props.children)}</VerticalSubmenu>
          return <VerticalSubmenu {...child.props}>{mapChildren(child.props.children)}</VerticalSubmenu>
        case Menu:
          return <VerticalMenu>{mapChildren(child.props.children)}</VerticalMenu>
        default:
          return child
      }
    }

    return null
  })
}

const VerticalNavInHorizontalLayout = ({ children, className }: VerticalNavInHorizontalLayoutProps) => (
  <VerticalNav backgroundColor='rgba(255,255,0,1)' className={className}>
    <MenuHeader>
      Logo
      <VerticalNavCollapseIcons />
    </MenuHeader>
    <PerfectScrollbar options={{ wheelPropagation: false }}>{mapChildren(children)}</PerfectScrollbar>
  </VerticalNav>
)

export default VerticalNavInHorizontalLayout
