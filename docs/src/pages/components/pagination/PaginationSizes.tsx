// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

const PaginationSizes = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Pagination count={10} size='small' />
      <Pagination count={10} color='primary' />
      <Pagination count={10} size='large' color='secondary' />
    </Box>
  )
}

export default PaginationSizes
