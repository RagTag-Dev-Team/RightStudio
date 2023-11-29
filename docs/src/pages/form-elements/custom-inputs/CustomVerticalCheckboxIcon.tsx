// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import { CustomInputVerticalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@docComponents/custom-inputs/Vertical'

const data: CustomInputVerticalData[] = [
  {
    value: 'backup',
    title: 'Backup',
    isSelected: true,
    content: 'Backup every file from your project.',
    asset: 'ri-server-line',
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    content: 'Translate your data to encrypted text.',
    asset: 'ri-shield-line',
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    content: 'Security tool to protect your website.',
    asset: 'ri-lock-2-line',
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
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <i className={item.asset} />
        }

        return (
          <CustomInputVertical
            type='checkbox'
            key={index}
            selected={selected}
            data={{...item, asset}}
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
