// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Chips = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="40" y="81" width="120" height="38" rx="19" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <circle cx="61" cy="100" r="12" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <path d="M67.6314 98.1193C67.5895 97.9959 67.5124 97.8875 67.4095 97.8074C67.3067 97.7273 67.1827 97.6791 67.0527 97.6687L63.2521 97.3667L61.6074 93.726C61.555 93.6087 61.4698 93.5091 61.3621 93.4392C61.2544 93.3693 61.1287 93.3321 61.0003 93.332C60.8719 93.3319 60.7461 93.369 60.6383 93.4388C60.5305 93.5086 60.4452 93.6081 60.3927 93.7253L58.7481 97.3667L54.9474 97.6687C54.8197 97.6788 54.6976 97.7255 54.5958 97.8031C54.4939 97.8808 54.4166 97.9862 54.3731 98.1067C54.3295 98.2272 54.3216 98.3576 54.3503 98.4825C54.379 98.6073 54.443 98.7213 54.5347 98.8107L57.3434 101.549L56.3501 105.85C56.3199 105.98 56.3296 106.116 56.3778 106.241C56.426 106.366 56.5106 106.473 56.6206 106.549C56.7306 106.625 56.8608 106.666 56.9944 106.667C57.1281 106.668 57.259 106.629 57.3701 106.555L61.0001 104.135L64.6301 106.555C64.7436 106.63 64.8775 106.669 65.0138 106.666C65.1501 106.663 65.2822 106.618 65.3923 106.538C65.5025 106.458 65.5854 106.346 65.6299 106.217C65.6744 106.088 65.6784 105.949 65.6414 105.817L64.4221 101.551L67.4461 98.8293C67.6441 98.6507 67.7167 98.372 67.6314 98.1193Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="84" y="96" width="62" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Chips
