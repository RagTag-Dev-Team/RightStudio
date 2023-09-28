// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const data: CustomInputVerticalData[] = [
  {
    title: 'I am the Builder',
    value: 'builder',
    content: 'List property as Builder, list your project and get highest reach.',
    asset: 'mdi:home-variant-outline',
    isSelected: true
  },
  {
    title: 'I am the Owner',
    value: 'owner',
    content: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    asset: 'mdi:account-outline'
  },
  {
    title: 'I am the broker',
    value: 'broker',
    content: 'Earn highest commission by listing your clients properties at the best price.',
    asset: 'mdi:currency-usd'
  }
]

const StepPersonalDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container>
      {data.map((item, index) => {
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <Icon icon={item.asset} />
        }

        return (
          <CustomInputVertical
            type='radio'
            key={index}
            gridProps={{ sm: 4, xs: 12 }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='First Name' placeholder='John' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Last Name' placeholder='Doe' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Username' placeholder='john.doe' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Password'
          placeholder='············'
          id='personal-details-password'
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
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Email' placeholder='john.doe@gmail.com' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Contact'
          placeholder='202 555 0111'
          InputProps={{
            startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<Icon icon='mdi:arrow-left' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={<Icon icon={activeStep === steps.length - 1 ? 'mdi:check' : 'mdi:arrow-right'} />}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepPersonalDetails
