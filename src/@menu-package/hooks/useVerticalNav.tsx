import { useContext } from 'react'
import VerticalNavContext from '../contexts/verticalNavContext'

const useVerticalNav = () => {
  return useContext(VerticalNavContext)
}

export default useVerticalNav
