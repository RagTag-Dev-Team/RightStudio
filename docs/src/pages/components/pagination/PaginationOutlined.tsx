// React Imports
import React from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationOutlined = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} variant='outlined' />
      <Pagination count={10} variant='outlined' color='primary' />
      <Pagination count={10} variant='outlined' color='secondary' />
    </div>
  )
}

export default PaginationOutlined
