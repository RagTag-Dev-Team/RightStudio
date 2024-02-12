// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRounded = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} shape='rounded' color='primary' />
      <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />
      <Pagination count={10} variant='tonal' shape='rounded' color='primary' />
    </div>
  )
}

export default PaginationRounded
