// React Imports
import React from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationButtons = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </div>
  )
}

export default PaginationButtons
