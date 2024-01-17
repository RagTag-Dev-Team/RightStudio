// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'

const MenuExampleProviders = (props: ChildrenType) => {
  // Props
  const { children } = props

  return <VerticalNavProvider>{children}</VerticalNavProvider>
}

export default MenuExampleProviders
