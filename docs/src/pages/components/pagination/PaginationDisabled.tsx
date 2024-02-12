// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationDisabled = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} disabled />
      <Pagination count={10} variant='outlined' disabled />
      <Pagination count={10} variant='tonal' disabled />
    </div>
  )
}

export default PaginationDisabled
