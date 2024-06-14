'use client'

// MUI Imports
import { deepmerge } from '@mui/utils'

// Type Imports
import type { VerticalMenuDataType } from '@site/src/types/menuTypes'

// Component Imports
import VerticalNav, { Menu } from '@menu/vertical-menu'
import { GenerateVerticalMenu } from '@docComponents/GenerateMenu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const menuData: VerticalMenuDataType[] = [
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
    label: 'Front Pages',
    excludeLang: true
  },
  {
    label: 'Calendar'
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

const ExcludeLang = () => {
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

export default ExcludeLang
