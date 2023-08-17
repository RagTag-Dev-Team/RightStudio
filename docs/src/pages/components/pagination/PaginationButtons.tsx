// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

const PaginationButtons = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Box>
  )
}

export default PaginationButtons
