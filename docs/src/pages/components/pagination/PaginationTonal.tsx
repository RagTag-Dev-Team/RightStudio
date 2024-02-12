// React Imports
import React from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationTonal = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} variant='tonal' />
      <Pagination count={10} variant='tonal' color='primary' />
      <Pagination count={10} variant='tonal' color='secondary' />
    </div>
  )
}

export default PaginationTonal
