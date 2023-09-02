// React Imports
import React, { ChangeEvent, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputVerticalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@docComponents/custom-inputs/Vertical'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const data: CustomInputVerticalData[] = [
  {
    value: 'starter',
    title: 'Starter',
    isSelected: true,
    content: 'A simple start for everyone.',
    asset: 'mdi:rocket-launch-outline',
  },
  {
    value: 'standard',
    title: 'Standard',
    content: 'For small to medium businesses.',
    asset: 'mdi:account-outline',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    content: 'Solution for big organizations.',
    asset: 'mdi:crown-outline'
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
          asset = <Icon icon={item.asset} />
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
