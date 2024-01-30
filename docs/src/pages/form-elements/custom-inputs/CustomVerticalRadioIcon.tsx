// React Imports
import { ChangeEvent, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

const data: CustomInputVerticalData[] = [
  {
    value: 'starter',
    title: 'Starter',
    isSelected: true,
    content: 'A simple start for everyone.',
    asset: 'ri-rocket-line',
  },
  {
    value: 'standard',
    title: 'Standard',
    content: 'For small to medium businesses.',
    asset: 'ri-user-3-line',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    content: 'Solution for big organizations.',
    asset: 'ri-vip-crown-line'
  },
]

const CustomVerticalRadioIcon = () => {
  const initialSelected: string = data.filter((item) => item.isSelected)[
    data.filter((item) => item.isSelected).length - 1
  ].value

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
      {data.map((item, index) => {
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <i className={item.asset} />
        }

        return (
        <CustomInputVertical
          type='radio'
          key={index}
          data={{...item, asset}}
          selected={selected}
          name='custom-radios-icons'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      )})}
    </Grid>
  )
}

export default CustomVerticalRadioIcon
