// MUI Imports
import type { Theme } from '@mui/material/styles'

const avatar: Theme['components'] = {
  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        justifyContent: 'flex-end'
      }
    }
  }
}

export default avatar
