// Next Imports
import { cookies } from 'next/headers'

// Third-party Imports
import 'server-only'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies()

  const cookieName = themeConfig.settingsCookieName

  return JSON.parse(cookieStore.get(cookieName)?.value || '{}')
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()

  // Get mode from cookie or fallback to theme config
  const _mode = settingsCookie.mode || themeConfig.mode

  return _mode
}

export const getSystemMode = (): SystemMode => {
  const cookieStore = cookies()
  const mode = getMode()

  const colorPrefCookie = (cookieStore.get('colorPref')?.value || 'light') as SystemMode

  return (mode === 'system' ? colorPrefCookie : mode) || 'light'
}

export const getServerMode = () => {
  // Check if we're running on the client side
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_SERVER_MODE || 'development'
  }

  // Server-side logic (if needed)
  try {
    const { headers } = require('next/headers')

    // Add your server-side specific logic here
    return process.env.SERVER_MODE || 'development'
  } catch {
    // Fallback if headers are not available
    return process.env.NEXT_PUBLIC_SERVER_MODE || 'development'
  }
}

export const getSkin = () => {
  const settingsCookie = getSettingsFromCookie()

  return settingsCookie.skin || 'default'
}
