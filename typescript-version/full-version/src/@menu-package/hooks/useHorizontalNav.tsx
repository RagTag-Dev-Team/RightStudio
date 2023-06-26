// React Imports
import { useContext } from 'react'

// Context Imports
import HorizontalNavContext from '../contexts/horizontalNavContext'

const useHorizontalNav = () => {
  return useContext(HorizontalNavContext)
}

export default useHorizontalNav
