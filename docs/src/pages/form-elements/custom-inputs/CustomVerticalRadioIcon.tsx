// React Imports
import type { ChangeEvent} from 'react';
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Import
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

const data: CustomInputVerticalData[] = [
  {
    value: 'starter',
    title: 'Starter',
    isSelected: true,
    content: 'A simple start for everyone.',
    asset: 'tabler-rocket',
  },
  {
    value: 'standard',
    title: 'Standard',
    content: 'For small to medium businesses.',
    asset: 'tabler-star',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    content: 'Solution for big organizations.',
    asset: 'tabler-briefcase'
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
          asset = <i className={classnames(item.asset, 'text-[28px]')} />
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
