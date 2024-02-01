// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputImgData } from '@core/components/custom-inputs/types'

// Components Imports
import CustomInputImg from '@core/components/custom-inputs/Image'

import useBaseUrl from '@docusaurus/useBaseUrl'

const data: CustomInputImgData[] = [
  {
    value: 'clock',
    isSelected: true,
    img: '/images/banners/27.jpg'
  },
  {
    value: 'donuts',
    img: '/images/banners/26.jpg'
  },
  {
    value: 'flowers',
    img: '/images/banners/22.jpg'
  }
]

const CustomCheckboxWithImage = () => {
  const initialSelected: string[] = data.filter(item => item.isSelected).map(item => item.value)

  // States
  const [selected, setSelected] = useState<string[]>(initialSelected)

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomInputImg
          type='checkbox'
          key={index}
          data={{...item, img: useBaseUrl(item.img as string)}}
          selected={selected}
          name='custom-checkbox-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomCheckboxWithImage
