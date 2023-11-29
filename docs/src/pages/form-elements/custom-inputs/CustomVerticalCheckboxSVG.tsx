// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import { CustomInputVerticalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@docComponents/custom-inputs/Vertical'

// Icons Imports
import Logo from '@site/static/images/logo.svg'

type Data = Omit<CustomInputVerticalData, 'asset'>

const data: Data[] = [
  {
    value: 'backup',
    title: 'Backup',
    isSelected: true,
    content: 'Backup every file from your project.',
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    content: 'Translate your data to encrypted text.',
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    content: 'Security tool to protect your website.',
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

const CustomVerticalCheckboxIcon = () => {
  const initialSelected: string[] = data
    .filter((item) => item.isSelected)
    .map((item) => item.value)

  // States
  const [selected, setSelected] = useState<string[]>(initialSelected)

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter((item) => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => {
        return (
          <CustomInputVertical
            type='checkbox'
            key={index}
            selected={selected}
            data={{ ...item, asset: SVGs[index].asset }}
            handleChange={handleChange}
            name='custom-checkbox-icons'
            gridProps={{ sm: 4, xs: 12 }}
          />
        )
      })}
    </Grid>
  )
}

export default CustomVerticalCheckboxIcon
