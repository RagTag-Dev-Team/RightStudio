import { useContext } from 'react'
import { VerticalMenuContext, VerticalMenuContextProps } from '../components/vertical-menu/Menu'

const useVerticalMenu = (): VerticalMenuContextProps => {
  const context = useContext(VerticalMenuContext)
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('Menu Component is required!')
  }

  return context
}

export default useVerticalMenu
