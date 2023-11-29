// React Imports
import { ChangeEvent, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputHorizontalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputHorizontal from '@docComponents/custom-inputs/Horizontal'

const data: CustomInputHorizontalData[] = [
  {
    meta: 'Free',
    title: 'Basic',
    value: 'basic',
    isSelected: true,
    content: 'Get 1 project with 1 team member.'
  },
  {
    meta: '$5.00',
    title: 'Premium',
    value: 'premium',
    content: 'Get 5 projects with 5 team members.'
  }
]

const CustomHorizontalRadio = () => {
  const initialSelected: string = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // States
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomInputHorizontal
          type='radio'
          key={index}
          data={item}
          selected={selected}
          name='custom-radios-basic'
          handleChange={handleChange}
          gridProps={{ sm: 6, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomHorizontalRadio
