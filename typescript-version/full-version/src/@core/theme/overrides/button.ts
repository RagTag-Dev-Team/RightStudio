// Config Imports
import themeConfig from '@configs/themeConfig'

const Button = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  }
}

export default Button
