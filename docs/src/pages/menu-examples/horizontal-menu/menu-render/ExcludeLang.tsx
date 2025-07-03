'use client'

// MUI Imports
import { deepmerge } from '@mui/utils'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { HorizontalMenuDataType } from '@site/src/types/menuTypes'

// Component Imports
import HorizontalNav, { Menu } from '@menu/horizontal-menu'
import { GenerateHorizontalMenu } from '@docComponents/GenerateMenu'

// Style Imports
import menuItemStyles from "@docComponents/styles/horizontal/menuItemStyles";

import styles from '../styles.module.css'

const menuData: HorizontalMenuDataType[] = [
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
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={deepmerge(menuItemStyles(), {
            subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' }
          })}
        >
          <GenerateHorizontalMenu menuData={menuData} />
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default ExcludeLang
