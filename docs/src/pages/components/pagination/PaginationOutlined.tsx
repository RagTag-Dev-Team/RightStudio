// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

const PaginationOutlined = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Pagination count={10} variant='outlined' />
      <Pagination count={10} variant='outlined' color='primary' />
      <Pagination count={10} variant='outlined' color='secondary' />
    </Box>
  )
}

export default PaginationOutlined
