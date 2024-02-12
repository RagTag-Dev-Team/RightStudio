// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationButtons = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} showFirstButton showLastButton variant='tonal' color='primary' />
      <Pagination count={10} hidePrevButton hideNextButton variant='tonal' color='primary' />
    </div>
  )
}

export default PaginationButtons
