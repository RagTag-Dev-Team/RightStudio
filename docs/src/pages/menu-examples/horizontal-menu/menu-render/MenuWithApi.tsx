'use client'

// MUI Imports
import { useEffect, useState } from 'react'

import { deepmerge } from '@mui/utils'

// React imports

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu } from '@menu/horizontal-menu'
import { GenerateHorizontalMenu } from '@docComponents/GenerateMenu'

// Style Imports
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import styles from '../styles.module.css'

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch('https://mocki.io/v1/bed77a1c-baa2-4a06-95f9-ee6423913b71')
      const data = await response.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu
          menuItemStyles={deepmerge(menuItemStyles(), {
            subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' }
          })}
        >
          {isLoading ? <div className='p-4'>Loading...</div> : <GenerateHorizontalMenu menuData={sidebarMenuData} />}
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default MenuWithAPI
