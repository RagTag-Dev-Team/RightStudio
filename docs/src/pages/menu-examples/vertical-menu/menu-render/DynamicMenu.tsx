'use client'

// MUI Imports
import { deepmerge } from '@mui/utils'

// Component Imports
import VerticalNav, { Menu } from '@menu/vertical-menu'
import { GenerateVerticalMenu } from '@docComponents/GenerateMenu'
import type { VerticalMenuDataType } from '@site/src/types/menuTypes'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const menuData: VerticalMenuDataType[] = [
  {
    label: 'Dashboards & Apps',
    isSection: true,
    children: [
      {
        label: 'Dashboards',
        children: [
          {
            label: 'Analytics'
          },
          {
            label: 'eCommerce'
          }
        ]
      },
      {
        label: 'Calendar'
      }
    ]
  },
  {
    label: 'Others',
    isSection: true,
    children: [
      {
        label: 'FAQ'
      },
      {
        label: 'Menu Level',
        children: [
          {
            label: 'Menu Level 2.1'
          },
          {
            label: 'Menu Level 2.2',
            children: [
              {
                label: 'Menu Level 3.1'
              },
              {
                label: 'Menu Level 3.2'
              }
            ]
          }
        ]
      },
      {
        label: 'Documentation'
      }
    ]
  }
]

const DynamicMenu = () => {
  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ minHeight: '100%', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu
        menuItemStyles={deepmerge(menuItemStyles(), { subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' } })}
      >
        <GenerateVerticalMenu menuData={menuData} />
      </Menu>
    </VerticalNav>
  )
}

export default DynamicMenu
