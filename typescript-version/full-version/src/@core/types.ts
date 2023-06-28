// MUI Imports
import type { ComponentsPropsList, Theme } from '@mui/material/styles'

export type ThemeAndOwnerState = {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}
