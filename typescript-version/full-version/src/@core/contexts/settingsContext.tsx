'use client'

// React Imports
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import { useLatest, useEffectOnce, useCookie } from 'react-use'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

// Type Imports
import type { Mode, Skin, Layout, LayoutComponentWidth, ChildrenType } from '@core/types'

export type Settings = {
  mode?: Mode
  skin?: Skin
  semiDark?: boolean
  layout?: Layout
  navbarContentWidth?: LayoutComponentWidth
  contentWidth?: LayoutComponentWidth
  footerContentWidth?: LayoutComponentWidth
  primaryColor?: 'primary-1' | 'primary-2' | 'primary-3' | 'primary-4' | 'primary-5' | string
}

type SettingsContextProps = {
  settings: Settings
  saveSettings: (value: Settings) => void
  updateSettings: (value: Settings) => void
  isSettingsChanged: boolean
  resetSettings: () => void
}

type Props = ChildrenType & {
  settingsCookie: Settings
}

// Initial Settings
const initialSettings: Settings = {
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  semiDark: themeConfig.semiDark,
  layout: themeConfig.layout,
  navbarContentWidth: themeConfig.navbar.contentWidth,
  contentWidth: themeConfig.contentWidth,
  footerContentWidth: themeConfig.footer.contentWidth,
  primaryColor: 'primary-1'
}

// Create Settings Context
const SettingsContext = createContext({} as SettingsContextProps)

export const SettingsProvider = (props: Props) => {
  // Props
  const { children, settingsCookie } = props

  // Cookies
  const [value, updateCookie] = useCookie('settings')

  const cookieValue = useMemo(() => {
    return value ? JSON.parse(value) : JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : initialSettings
  }, [value, settingsCookie])

  let initSettings = useMemo(() => ({ ...initialSettings, ...cookieValue }), [cookieValue])

  // States
  const [settings, setSettings] = useState<Settings>({})
  const [isSettingsChanged, setIsSettingsChanged] = useState(false)

  // Refs
  const prevSettings = useRef<Settings | null>(null)
  const updatedSettingsRef = useRef(false)
  const initialRenderRef = useRef(true)

  // Hooks
  const pathname = usePathname()
  const { collapseVerticalNav } = useVerticalNav()
  const latestSettings = useLatest(settings)

  // Compare settings from cookie with the current settings in state
  // If there is a difference then store cookie settings in prevSettings ref
  prevSettings.current = JSON.stringify(settings) !== JSON.stringify(cookieValue) ? (cookieValue as Settings) : null

  // Store Settings
  const storeSettings = (settings: Settings) => {
    // delete initSettings.footer

    // Update settings in cookie
    updateCookie(JSON.stringify(settings))
  }

  // Save settings in cookie and also update the state
  const saveSettings = useCallback((values: Settings) => {
    // Update settings in cookie
    storeSettings({
      // Settings are updated from any individual page, we store the previous settings in ref
      // So when the new page is visited we can merge the previous settings with the new settings
      // This is done to avoid losing the settings when the new page is visited which needs previous settings
      // Otherwise latest state will be merged with provided values in this function
      ...(prevSettings.current ? prevSettings.current : latestSettings.current),
      ...values
    })

    // Update settings in state
    setSettings(prevState => ({ ...prevState, ...values }))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resetSettings = useCallback(() => saveSettings(initialSettings), [])

  // Update state only
  const updateSettings = useCallback((values: Settings) => {
    // If its initial render then merge initial settings with provided values usually from individual page
    // Which will be used to set the initial settings from below useEffectOnce hook
    if (initialRenderRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      initSettings = { ...initSettings, ...values }
      initialRenderRef.current = false
    }

    // Update updatedSettingsRef to true to use as a flag to check if settings are updated
    updatedSettingsRef.current = true

    // Update settings in state
    setSettings(prevState => ({ ...prevState, ...values }))
  }, [])

  useEffect(() => {
    if (JSON.stringify(initialSettings) !== JSON.stringify(settings)) {
      setIsSettingsChanged(true)
      updatedSettingsRef.current = false
    } else {
      setIsSettingsChanged(false)
    }
  }, [settings])

  // Set initial settings in state for the first time
  useEffectOnce(() => {
    if (JSON.stringify(settingsCookie) === '{}') {
      updateCookie(JSON.stringify(initialSettings))
      setSettings(initSettings)
    }

    if (settings.layout === 'collapsed') {
      collapseVerticalNav(true)
    }
  })

  // This effect will run on page change and will update the settings in cookie and state
  useEffect(() => {
    // If settings state and settings value in cookie are different and there are no settings updates from any individual page
    // Then update the settings in cookie and settings state with the previous settings stored in cookie
    if (JSON.stringify(settings) !== JSON.stringify(cookieValue) && !updatedSettingsRef.current) {
      saveSettings(cookieValue as Settings)
    }

    // Change updatedSettingsRef to false, so it will allow other individual pages to update the settings
    updatedSettingsRef.current = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Settings Provider Value
  const SettingsProviderValue = useMemo(
    () => ({
      settings,
      saveSettings,
      updateSettings,
      isSettingsChanged,
      resetSettings
    }),
    [settings, saveSettings, updateSettings, isSettingsChanged, resetSettings]
  )

  return <SettingsContext.Provider value={SettingsProviderValue}>{children}</SettingsContext.Provider>
}

export default SettingsContext
