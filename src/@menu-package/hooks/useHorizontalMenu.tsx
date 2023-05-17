import { useContext } from 'react'
import { HorizontalMenuContext, HorizontalMenuContextProps } from '../components/horizontal-menu/Menu'

const useHorizontalMenu = (): HorizontalMenuContextProps => {
  const context = useContext(HorizontalMenuContext)
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('Menu Component is required!')
  }

  return context
}

export default useHorizontalMenu
