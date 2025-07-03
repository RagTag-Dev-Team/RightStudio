'use client'

// MUI Imports
import { useEffect, useState } from 'react'

import { deepmerge } from '@mui/utils'

// React imports

// Component imports
import VerticalNav, { Menu } from '@menu/vertical-menu'
import { GenerateVerticalMenu } from '@docComponents/GenerateMenu'

// Style Imports
import menuItemStyles from '@site/src/components/styles/vertical/menuItemStyles'

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch('https://mocki.io/v1/7eccec25-2c67-4da3-9ab5-02835e1b1d45')
      const data = await response.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ minHeight: '100%', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu menuItemStyles={menuItemStyles()}>
        {isLoading ? (
          <div className='p-4'>Loading...</div>
        ) : (
          <Menu
            menuItemStyles={deepmerge(menuItemStyles(), {
              subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
            })}
          >
            <GenerateVerticalMenu menuData={sidebarMenuData} />
          </Menu>
        )}
      </Menu>
    </VerticalNav>
  )
}

export default MenuWithAPI
