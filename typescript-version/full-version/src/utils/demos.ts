// Config Imports
import demoConfigs from '@/configs/demoConfigs'

export const getDemoConfig = (demo: string) => {
  // Get the demo config
  const demoConfig = demoConfigs[demo]

  // Return the demo config
  return demoConfig
}
