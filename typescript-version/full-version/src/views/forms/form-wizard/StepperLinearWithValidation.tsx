'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
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
import { valibotResolver } from '@hookform/resolvers/valibot'
import { email, object, minLength, string, array, ValiError } from 'valibot'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
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

type AccountSchemaData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const accountSchema = object(
  {
    username: string([minLength(1, 'This field is required')]),
    email: string([minLength(1, 'This field is required'), email()]),
    password: string([
      minLength(1, 'This field is required'),
      minLength(8, 'Password must be at least 8 characters long')
    ]),
    confirmPassword: string([minLength(1, 'This field is required')])
  },
  [
    (input: AccountSchemaData) => {
      if (input.password !== input.confirmPassword) {
        throw new ValiError([
          {
            reason: 'string',
            validation: 'custom',
            origin: 'value',
            message: 'Passwords do not match.',
            input: input.confirmPassword,
            path: [
              {
                schema: 'object',
                input: input,
                key: 'confirmPassword',
                value: input.confirmPassword
              }
            ]
          }
        ])
      }

      return { output: input }
    }
  ]
)

const personalSchema = object({
  'first-name': string([minLength(1, 'This field is required')]),
  'last-name': string([minLength(1, 'This field is required')]),
  country: string([minLength(1, 'This field is required')]),
  language: array(string(), [minLength(1, 'This field is required')])
})

const socialSchema = object({
  twitter: string([minLength(1, 'This field is required')]),
  facebook: string([minLength(1, 'This field is required')]),
  google: string([minLength(1, 'This field is required')]),
  linkedIn: string([minLength(1, 'This field is required')])
})

const StepperLinearWithValidation = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    resolver: valibotResolver(accountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })
  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    resolver: valibotResolver(personalSchema),
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
    resolver: valibotResolver(socialSchema),
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
    accountReset({ email: '', username: '', password: '', confirmPassword: '' })
    personalReset({ 'last-name': '', 'first-name': '', country: '', language: [] })
    socialReset({ twitter: '', facebook: '', google: '', linkedIn: '' })
    setIsPasswordShown(false)
    setIsConfirmPasswordShown(false)
  }

  const Languages = ['English', 'French', 'Spanish', 'Portuguese', 'Italian', 'German', 'Arabic']

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <form onSubmit={handleAccountSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className='font-medium'>{steps[0].title}</Typography>
                <Typography variant='body2'>{steps[0].subtitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(accountErrors.username && { error: true, helperText: accountErrors.username.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='email'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type='email'
                      label='Email'
                      placeholder='johndoe@gmail.com'
                      {...(accountErrors.email && { error: true, helperText: accountErrors.email.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='password'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Password'
                      placeholder='············'
                      id='stepper-linear-validation-password'
                      type={isPasswordShown ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <Icon icon={isPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      {...(accountErrors.password && { error: true, helperText: accountErrors.password.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='confirmPassword'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Confirm Password'
                      placeholder='············'
                      id='stepper-linear-confirmPassword'
                      type={isConfirmPasswordShown ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <Icon icon={isConfirmPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      {...(accountErrors['confirmPassword'] && {
                        error: true,
                        helperText: accountErrors['confirmPassword'].message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' disabled color='secondary'>
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
            <Grid container>
              <Grid item xs={12}>
                <Typography className='font-medium'>{steps[1].title}</Typography>
                <Typography variant='body2'>{steps[1].subtitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(personalErrors['first-name'] && {
                        error: true,
                        helperText: personalErrors['first-name'].message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(personalErrors['last-name'] && {
                        error: true,
                        helperText: personalErrors['last-name'].message
                      })}
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
                  {personalErrors.country && <FormHelperText error>country is a required field</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(personalErrors.language)}>Language</InputLabel>
                  <Controller
                    name='language'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        multiple
                        label='Language'
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
                  {personalErrors.language && <FormHelperText error>language is a required field</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' onClick={handleBack} color='secondary'>
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
            <Grid container>
              <Grid item xs={12}>
                <Typography className='font-medium'>{steps[2].title}</Typography>
                <Typography variant='body2'>{steps[2].subtitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(socialErrors.twitter && { error: true, helperText: socialErrors.twitter.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(socialErrors.facebook && { error: true, helperText: socialErrors.facebook.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(socialErrors.google && { error: true, helperText: socialErrors.google.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                      {...(socialErrors.linkedIn && { error: true, helperText: socialErrors.linkedIn.message })}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} className='flex justify-between'>
                <Button variant='outlined' onClick={handleBack} color='secondary'>
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
              const labelProps: {
                error?: boolean
              } = {}

              if (index === activeStep) {
                labelProps.error = false
                if (
                  (accountErrors.email ||
                    accountErrors.username ||
                    accountErrors.password ||
                    accountErrors['confirmPassword']) &&
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
                <Step key={index}>
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
          <>
            <Typography className={styles.completedText}>All steps are completed!</Typography>
            <div className='flex justify-end mt-4'>
              <Button variant='contained' onClick={handleReset}>
                Reset
              </Button>
            </div>
          </>
        ) : (
          renderStepContent(activeStep)
        )}
      </CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
