// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

const PaginationRounded = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Pagination count={10} shape='rounded' color='primary' />
      <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />
    </Box>
  )
}

export default PaginationRounded
