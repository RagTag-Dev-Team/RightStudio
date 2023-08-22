// React Imports
import { Fragment, useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

// Component Imports
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

const accountSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  'confirm-password': yup
    .string()
    .required()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
})
const personalSchema = yup.object().shape({
  'first-name': yup.string().required(),
  'last-name': yup.string().required(),
  country: yup.string().required(),
  language: yup.array().required().min(1)
})
const socialSchema = yup.object().shape({
  twitter: yup.string().required(),
  facebook: yup.string().required(),
  google: yup.string().required(),
  linkedIn: yup.string().required()
})

const StepperLinearWithValidation = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show)

  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    resolver: yupResolver(accountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      'confirm-password': ''
    }
  })
  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    resolver: yupResolver(personalSchema),
    defaultValues: {
      'first-name': '',
      'last-name': '',
      country: '',
      language: []
    }
  })
  const {
    reset: socialReset,
    control: socialControl,
    handleSubmit: handleSocialSubmit,
    formState: { errors: socialErrors }
  } = useForm({
    resolver: yupResolver(socialSchema),
    defaultValues: {
      twitter: '',
      facebook: '',
      google: '',
      linkedIn: ''
    }
  })

  const onSubmit = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    accountReset({ email: '', username: '', password: '', 'confirm-password': '' })
    personalReset({ country: '', language: [], 'last-name': '', 'first-name': '' })
    socialReset({ google: '', twitter: '', facebook: '', linkedIn: '' })
  }

  const Languages = ['English', 'French', 'Spanish', 'Portuguese', 'Italian', 'German', 'Arabic']

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <form key={0} onSubmit={handleAccountSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2'>{steps[0].title}</Typography>
                <Typography component='p' variant='caption'>
                  {steps[0].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='username'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Username'
                      placeholder='johnDoe'
                      {...(accountErrors.username && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='email'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Email'
                      placeholder='johndoe@gmail.com'
                      {...(accountErrors.email && { error: true, helperText: `${accountErrors.email.message}` })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='password'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
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
                      {...(accountErrors.password && { error: true, helperText: `${accountErrors.password.message}` })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='confirm-password'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Confirm Password'
                      id='outlined-adornment-password'
                      type={showConfirmPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <Icon icon={showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      {...(accountErrors['confirm-password'] && {
                        error: true,
                        helperText: `${accountErrors['confirm-password'].message}`
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' onClick={handleBack} disabled>
                  Back
                </Button>
                <Button variant='contained' type='submit'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 1:
        return (
          <form onSubmit={handlePersonalSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2'>{steps[1].title}</Typography>
                <Typography component='p' variant='caption'>
                  {steps[1].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='first-name'
                  control={personalControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='First Name'
                      placeholder='John'
                      {...(personalErrors['first-name'] && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='last-name'
                  control={personalControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Last Name'
                      placeholder='Doe'
                      {...(personalErrors['last-name'] && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(personalErrors.country)}>Country</InputLabel>
                  <Controller
                    name='country'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select label='Country' {...field} error={Boolean(personalErrors.country)}>
                        <MenuItem value='UK'>UK</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='Australia'>Australia</MenuItem>
                        <MenuItem value='Germany'>Germany</MenuItem>
                      </Select>
                    )}
                  />
                  {personalErrors.country && <FormHelperText error>This field is required</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(personalErrors.language)}>Language</InputLabel>
                  <Controller
                    name='language'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        label='Language'
                        multiple
                        value={Array.isArray(value) ? value : []}
                        onChange={onChange}
                        error={Boolean(personalErrors.language)}
                      >
                        {Languages.map(language => (
                          <MenuItem key={language} value={language}>
                            {language}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {personalErrors.language && <FormHelperText error>This field is required</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' onClick={handleBack}>
                  Back
                </Button>
                <Button variant='contained' type='submit'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 2:
        return (
          <form onSubmit={handleSocialSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2'>{steps[2].title}</Typography>
                <Typography component='p' variant='caption'>
                  {steps[2].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='twitter'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      fullWidth
                      label='Twitter'
                      placeholder='https://twitter.com/johndoe'
                      {...(socialErrors.twitter && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='facebook'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      fullWidth
                      label='Facebook'
                      placeholder='https://facebook.com/johndoe'
                      {...(socialErrors.facebook && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='google'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Google'
                      placeholder='https://google.com/johndoe'
                      {...(socialErrors.google && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name='linkedIn'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='LinkedIn'
                      placeholder='https://linkedin.com/johndoe'
                      {...(socialErrors.linkedIn && { error: true, helperText: 'This field is required' })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' onClick={handleBack}>
                  Back
                </Button>
                <Button variant='contained' type='submit'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      default:
        return <Typography>Unknown stepIndex</Typography>
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {}
              const labelProps: {
                error?: boolean
              } = {}

              if (index === activeStep) {
                labelProps.error = false
                if (
                  (accountErrors.email ||
                    accountErrors.username ||
                    accountErrors.password ||
                    accountErrors['confirm-password']) &&
                  activeStep === 0
                ) {
                  labelProps.error = true
                } else if (
                  (personalErrors.country ||
                    personalErrors.language ||
                    personalErrors['last-name'] ||
                    personalErrors['first-name']) &&
                  activeStep === 1
                ) {
                  labelProps.error = true
                } else if (
                  (socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
                  activeStep === 2
                ) {
                  labelProps.error = true
                } else {
                  labelProps.error = false
                }
              }

              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
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
      </CardContent>
      <Divider />
      <CardContent>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography className={styles.completedText}>All steps are completed!</Typography>
            <Box className='flex justify-end'>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Fragment>
        ) : (
          renderStepContent(activeStep)
        )}
      </CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
