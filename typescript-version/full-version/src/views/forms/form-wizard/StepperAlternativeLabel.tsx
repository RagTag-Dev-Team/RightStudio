// React Imports
import { useState, Fragment } from 'react'
import type { ReactNode } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import type { SelectChangeEvent } from '@mui/material/Select'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

// Styled Component Imports
import StepperWrapper from '../../../@core/styles/stepper'
import StepperCustomDot from './StepperCustomDot'

// Style Imports
import styles from './styles.module.css'

const steps = [
  {
    title: 'Account Details',
    subtitle: 'Enter your account details'
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]

const StepperAlternativeLabel = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [languages, setLanguages] = useState<string[]>([])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show)

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setLanguages(event.target.value as string[])
  }

  const Languages = ['English', 'French', 'Spanish', 'Portuguese', 'Italian', 'German', 'Arabic']

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Username' placeholder='johnDoe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='johndoe@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Password'
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Confirm Password'
                id='outlined-confirm-password'
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle confirm password visibility'
                      >
                        <Icon icon={showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='First Name' placeholder='John' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Last Name' placeholder='Doe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label='Country'>
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select label='Language' multiple value={languages} onChange={handleChange}>
                  {Languages.map(language => (
                    <MenuItem key={language} value={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Facebook' placeholder='https://www.facebook.com/johndoe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Twitter' placeholder='https://www.twitter.com/johndoe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Instagram' placeholder='https://www.instagram.com/johndoe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Github' placeholder='https://www.github.com/johndoe' />
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown step'
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            const stepProps: { completed?: boolean } = {}
            const labelProps: {
              optional?: ReactNode
            } = {}

            return (
              <Step key={label.title} {...stepProps}>
                <StepLabel StepIconComponent={StepperCustomDot} {...labelProps}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{label.title}</Typography>
                      <Typography className='step-subtitle'>{label.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card>
        <CardContent>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography className={styles.completedText}>All steps are completed!</Typography>
              <Box className='flex justify-end'>
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </Fragment>
          ) : (
            <Fragment>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='body2'>{steps[activeStep].title}</Typography>
                    <Typography variant='caption' component='p'>
                      {steps[activeStep].subtitle}
                    </Typography>
                  </Grid>
                  {renderStepContent(activeStep)}
                  <Grid item xs={12} className='flex justify-between'>
                    <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button variant='contained' onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Fragment>
          )}
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default StepperAlternativeLabel
