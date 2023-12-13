'use server'

// Next imports
import { cookies } from 'next/headers'

export const getMode = () => {
  const cookieStore = cookies()
  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')
  const colorPrefCookie = cookieStore.get('colorPref')?.value || 'light'

  return (settingsCookie.mode === 'system' ? colorPrefCookie : settingsCookie.mode) || 'light'
}

export const getSkin = () => {
  const cookieStore = cookies()
  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return settingsCookie.skin || 'default'
}
