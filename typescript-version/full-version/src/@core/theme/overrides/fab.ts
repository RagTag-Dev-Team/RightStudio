// Type Imports
import type { ThemeAndOwnerState } from '../../types'

const FabButton = () => {
  return {
    MuiFab: {
      styleOverrides: {
        default: ({ theme }: ThemeAndOwnerState) => ({
          color: theme.palette.text.primary
        })
      }
    }
  }
}

export default FabButton
