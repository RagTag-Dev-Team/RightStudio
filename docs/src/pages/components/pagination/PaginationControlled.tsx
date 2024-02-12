// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'

const PaginationControlled = () => {
  // State
  const [page, setPage] = useState<number>(1)

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <>
      <Typography className='mbe-2' color='text.primary'>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} variant='tonal' color='primary' />
    </>
  )
}

export default PaginationControlled
