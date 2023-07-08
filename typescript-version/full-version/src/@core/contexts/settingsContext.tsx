'use client'

// React Imports
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import { useLatest, useUpdateEffect, useEffectOnce, useLocalStorage } from 'react-use'

// Config Imports
import themeConfig from '../../configs/themeConfig'

// Hook Imports
import useVerticalNav from '../../@menu-package/hooks/useVerticalNav'

// Type Imports
import type { Mode, Skin, Direction, Layout, ContentWidth, ChildrenType } from '../types'

export type Settings = {
  mode?: Mode
  skin?: Skin
  semiDark?: boolean
  direction?: Direction
  layout?: Layout
  contentWidth?: ContentWidth
}

type SettingsContextProps = {
  settings: Settings
  saveSettings: (value: Settings) => void
  updateSettings: (value: Settings) => void
  isSettingsChanged: boolean
  resetSettings: () => void
}

// Initial Settings
const initialSettings: Settings = {
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  semiDark: themeConfig.semiDark,
  direction: themeConfig.direction,
  layout: themeConfig.layout,
  contentWidth: themeConfig.contentWidth
}

// Create Settings Context
const SettingsContext = createContext({} as SettingsContextProps)

export const SettingsProvider = ({ children }: ChildrenType) => {
  // Hooks
  const pathname = usePathname()
  const { isCollapsed, collapseVerticalNav, isBreakpointReached } = useVerticalNav()
  const [value, setValue] = useLocalStorage('settings', initialSettings)
  const [isSettingsChanged, setIsSettingsChanged] = useState(false)
  let initSettings = useMemo(() => ({ ...initialSettings, ...(value as Settings) }), [value])
  const prevSettings = useRef<Settings | null>(null)
  const updatedSettingsRef = useRef(false)
  const initialRenderRef = useRef(true)

  // State
  const [settings, setSettings] = useState<Settings>({})
  const latestSettings = useLatest(settings)

  // Compare settings from localStorage with the current settings in state
  // If there is a difference then store localstorage settings in prevSettings ref
  prevSettings.current = JSON.stringify(settings) !== value ? (value as Settings) : null

  // Store Settings
  const storeSettings = (settings: Settings) => {
    // delete initSettings.footer

    // Update settings in localStorage
    setValue(settings)
  }

  // Save settings in localStorage and also update the state
  const saveSettings = useCallback((values: Settings) => {
    // Update settings in localStorage
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
    } else {
      setIsSettingsChanged(false)
    }
  }, [settings])

  // Set initial settings in state for the first time
  useEffectOnce(() => {
    setSettings(initSettings)
  })

  // When layout is vertical and it's collapsed or expanded using customizer or menu lock/unlock we handle the vertical nav collapse
  useUpdateEffect(() => {
    if (settings.layout === 'collapsed' && !isCollapsed && !isBreakpointReached) {
      collapseVerticalNav(true)
    } else {
      isCollapsed && collapseVerticalNav(false)
    }
    updatedSettingsRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout])

  // This effect will run on page change and will update the settings in localStorage and state
  useEffect(() => {
    // If settings state and settings value in localStorage are different and there are no settings updates from any individual page
    // Then update the settings in localStorage and settings state with the previous settings stored in localStorage
    if (JSON.stringify(settings) !== value && !updatedSettingsRef.current) {
      saveSettings(value as Settings)
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
