// MUI Imports
import type { StepIconProps } from '@mui/material/StepIcon'

// Third-party Imports
import classNames from 'classnames'

// Style Imports
import styles from './styles.module.css'

// Custom Icon Import
import Icon from '@core/components/IconifyIcon'

const StepperCustomDot = (props: StepIconProps) => {
  // Props
  const { active, completed, error } = props

  if (error) {
    return <Icon icon='mdi:alert' fontSize={20} className={styles.errorColor} transform='scale(1.2)' />
  } else if (completed) {
    return <Icon icon='mdi:check-circle' fontSize={20} className={styles.completedColor} transform='scale(1.2)' />
  } else {
    return <div className={classNames(styles.stepperCustomDot, { [styles.activeStepperCustomDot]: active })} />
  }
}

export default StepperCustomDot
