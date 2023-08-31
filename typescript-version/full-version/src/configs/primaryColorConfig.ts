// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

type PrimaryPaletteOverride = {
  palette?: {
    primary?: PrimaryColorConfig
  }
}

type PrimaryColorSchemeOverride = {
  colorSchemes?: {
    light?: PrimaryPaletteOverride
    dark?: PrimaryPaletteOverride
  }
}

const primaryColorConfig = [
  {
    name: 'primary-1',
    light: '#42a5f5',
    main: '#1976d2',
    dark: '#1565c0'
  },
  {
    name: 'primary-2',
    light: '#ba68c8',
    main: '#9c27b0',
    dark: '#7b1fa2'
  },
  {
    name: 'primary-3',
    light: '#ef5350',
    main: '#d32f2f',
    dark: '#c62828'
  },
  {
    name: 'primary-4',
    light: '#ff9800',
    main: '#ed6c02',
    dark: '#e65100'
  },
  {
    name: 'primary-5',
    light: '#4caf50',
    main: '#2e7d32',
    dark: '#1b5e20'
  }
]

export const getPrimaryColorScheme = (settings: Settings) => {
  const primaryColor: PrimaryColorConfig | undefined = primaryColorConfig.find(
    color => color.name === settings.primaryColor
  )

  // Clone the primary color object
  let primaryColorClone = Object.assign({}, primaryColor)

  // If the primary color is undefined and the primary color is a hex color, then create a new primary color object
  if (primaryColor === undefined && settings.primaryColor?.indexOf('#') === 0) {
    primaryColorClone = {
      main: settings.primaryColor
    }
  } else {
    delete primaryColorClone?.name
  }

  // Create the primary palette override object
  const primaryPaletteOverride: PrimaryPaletteOverride = {
    palette: {
      primary: { ...primaryColorClone }
    }
  }

  // Create color schemes with the primary color
  const primaryColorSchemeOverride: PrimaryColorSchemeOverride = {
    colorSchemes: {
      light: { ...primaryPaletteOverride },
      dark: { ...primaryPaletteOverride }
    }
  }

  return primaryColorSchemeOverride
}

export default primaryColorConfig
