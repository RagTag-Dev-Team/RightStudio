// React Imports
import { useContext } from 'react'

// Context Imports
import SettingsContext from '../contexts/settingsContext'

const useSettings = () => {
  return useContext(SettingsContext)
}

export default useSettings
