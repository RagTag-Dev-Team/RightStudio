// React Imports
import type { ChangeEvent} from 'react';
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import type { CustomInputImgData } from '@core/components/custom-inputs/types'

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
  },
]

const CustomRadioWithImage = () => {
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
      {data.map((item, index) => (
        <CustomInputImg
          type='radio'
          key={index}
          data={{...item, img: useBaseUrl(item.img as string)}}
          selected={selected}
          name='custom-radios-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomRadioWithImage
