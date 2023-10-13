// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center'
}))

const customInputData: CustomInputVerticalData[] = [
  {
    title: 'Basic',
    value: 'basic',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col h-full'>
        <Typography className='mlb-auto'>A simple start for start ups & Students</Typography>
        <div>
          <Typography component='sup' className='self-start'>
            $
          </Typography>
          <Typography component='span'>0</Typography>
          <Typography component='sub' className='self-end'>
            /month
          </Typography>
        </div>
      </Content>
    ),
    isSelected: true
  },
  {
    title: 'Standard',
    value: 'standard',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col h-full'>
        <Typography className='mlb-auto'>For small to medium businesses</Typography>
        <div>
          <Typography component='sup' className='self-start'>
            $
          </Typography>
          <Typography component='span'>99</Typography>
          <Typography component='sub' className='self-end'>
            /month
          </Typography>
        </div>
      </Content>
    )
  },
  {
    title: 'Enterprise',
    value: 'enterprise',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col h-full'>
        <Typography className='mlb-auto'>Solution for enterprise & organizations</Typography>
        <div>
          <Typography component='sup' className='self-start'>
            $
          </Typography>
          <Typography component='span'>499</Typography>
          <Typography component='sub' className='self-end'>
            /month
          </Typography>
        </div>
      </Content>
    )
  }
]

const StepBillingDetails = ({ handlePrev }: { handlePrev: () => void }) => {
  const initialSelectedOption: string = customInputData.filter(item => item.isSelected)[
    customInputData.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <>
      <Typography>Select Plan</Typography>
      <Typography>Select plan as per your requirement</Typography>
      <Grid container>
        {customInputData.map((item, index) => (
          <CustomInputVertical
            type='radio'
            key={index}
            data={item}
            gridProps={{ xs: 12, sm: 4 }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
          />
        ))}
      </Grid>
      <Typography>Payment Information</Typography>
      <Typography>Enter your card information</Typography>
      <Grid container>
        <Grid item xs={12}>
          <TextField fullWidth label='Card Number' placeholder='1234 1234 1234 1234' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label='Name on Card' placeholder='John Doe' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label='CVV' placeholder='123' />
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button
            variant='contained'
            color='secondary'
            onClick={handlePrev}
            startIcon={<i className='ri-arrow-left-s-line' />}
          >
            Previous
          </Button>
          <Button variant='contained' onClick={() => alert('Submitted..!!')}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepBillingDetails
