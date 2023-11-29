// MUI Imports
import Switch from '@mui/material/Switch'

const SwitchStandalone = () => {
  return (
    <div>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </div>
  )
}

export default SwitchStandalone
