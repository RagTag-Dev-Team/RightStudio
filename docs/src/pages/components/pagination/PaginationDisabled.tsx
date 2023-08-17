// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

const PaginationDisabled = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Pagination count={10} disabled />
      <Pagination count={10} variant='outlined' disabled />
    </Box>
  )
}

export default PaginationDisabled
