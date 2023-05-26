// React Imports
import { useContext } from 'react'

// Context Imports
import LayoutContext from '../contexts/layoutContext'

const useLayout = () => {
  return useContext(LayoutContext)
}

export default useLayout
