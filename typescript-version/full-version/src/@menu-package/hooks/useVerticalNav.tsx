// React Imports
import { useContext } from 'react'

// Context Imports
import VerticalNavContext from '../contexts/verticalNavContext'

const useVerticalNav = () => {
  return useContext(VerticalNavContext)
}

export default useVerticalNav
