// React Imports
import { useState } from 'react'

// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const RatingsHoverFeedback = () => {
  // States
  const [hover, setHover] = useState<number>(-1)
  const [value, setValue] = useState<number | null>(2)

  return (
    <div className='flex items-center'>
      <Rating
        value={value}
        precision={0.5}
        name='hover-feedback'
        className='mie-4'
        onChange={(event, newValue) => setValue(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
      />
      {value !== null && <Typography>{labels[hover !== -1 ? hover : value]}</Typography>}
    </div>
  )
}

export default RatingsHoverFeedback
