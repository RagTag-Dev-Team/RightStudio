// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationBasic = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} />
      <Pagination count={10} color='primary' />
      <Pagination count={10} color='secondary' />
    </div>
  )
}

export default PaginationBasic
