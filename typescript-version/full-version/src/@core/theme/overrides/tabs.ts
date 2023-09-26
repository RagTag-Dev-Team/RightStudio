// MUI Imports
import type { Theme } from '@mui/material/styles'

const tabs: Theme['components'] = {
  MuiTabs: {
    styleOverrides: {
      vertical: {
        minWidth: 130,
        '& .MuiTab-root': {
          minWidth: 130
        }
      }
    }
  }
}

export default tabs
