// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRanges = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={11} defaultPage={6} siblingCount={0} variant='tonal' color='primary' />
      <Pagination count={11} defaultPage={6} variant='tonal' color='primary' /> {/* Default ranges */}
      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} variant='tonal' color='primary' />
      <Pagination count={11} defaultPage={6} boundaryCount={2} variant='tonal' color='primary' />
    </div>
  )
}

export default PaginationRanges
