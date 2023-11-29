// React Imports
import { ChangeEvent, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputVerticalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@docComponents/custom-inputs/Vertical'

// Icons Imports
import Logo from '@site/static/images/logo.svg'

type Data = Omit<CustomInputVerticalData, 'asset'>

const data: Data[] = [
  {
    value: 'starter',
    title: 'Starter',
    isSelected: true,
    content: 'A simple start for everyone.',
  },
  {
    value: 'standard',
    title: 'Standard',
    content: 'For small to medium businesses.',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    content: 'Solution for big organizations.',
  },
]

const SVGs = [
  {
    asset: <Logo height='1em' width='1em' fontSize='2.5rem' />,
  },
  {
    asset: <Logo height='1em' width='1em' fontSize='2.5rem' />,
  },
  {
    asset: <Logo height='1em' width='1em' fontSize='2.5rem' />,
  },
]

const CustomVerticalRadioSVG = () => {
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
        return (
          <CustomInputVertical
            type='radio'
            key={index}
            data={{ ...item, asset: SVGs[index].asset }}
            selected={selected}
            name='custom-radios-icons'
            handleChange={handleChange}
            gridProps={{ sm: 4, xs: 12 }}
          />
        )
      })}
    </Grid>
  )
}

export default CustomVerticalRadioSVG
