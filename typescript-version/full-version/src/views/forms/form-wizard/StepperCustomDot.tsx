// MUI Imports
import MuiBox from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'
import type { StepIconProps } from '@mui/material/StepIcon'

// Third-party Imports
import classNames from 'classnames'

// Style Imports
import styles from './styles.module.css'

// Custom Icon Import
import Icon from '../../../@core/components/IconifyIcon'

// Styled Box component
const Box = styled(MuiBox)<BoxProps>(() => ({
  width: 20,
  height: 20,
  borderWidth: 3,
  borderRadius: '50%',
  borderStyle: 'solid'
}))

const StepperCustomDot = (props: StepIconProps) => {
  // Props
  const { active, completed, error } = props

  if (error) {
    return <Icon icon='mdi:alert' fontSize={20} className={styles.errorColor} transform='scale(1.2)' />
  } else if (completed) {
    return <Icon icon='mdi:check-circle' fontSize={20} className={styles.completedColor} transform='scale(1.2)' />
  } else {
    return <Box className={classNames(styles.stepperCustomDot, { [styles.activeStepperCustomDot]: active })} />
  }
}

export default StepperCustomDot
