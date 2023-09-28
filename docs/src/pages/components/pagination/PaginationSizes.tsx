// React Imports
import React from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationSizes = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} size='small' />
      <Pagination count={10} color='primary' />
      <Pagination count={10} size='large' color='secondary' />
    </div>
  )
}

export default PaginationSizes
