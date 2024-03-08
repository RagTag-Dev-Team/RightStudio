'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

// Third Party Imports
import type { useReactTable } from '@tanstack/react-table'

const TablePaginationComponent = ({ table }: { table: ReturnType<typeof useReactTable> }) => {
  const [currentPage, setCurrentPage] = useState(table.getState().pagination.pageIndex + 1)
  const totalPages = Math.ceil(table.getFilteredRowModel().rows.length / table.getState().pagination.pageSize)

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getFilteredRowModel().rows.length])

  return (
    <div className='flex justify-between items-center flex-wrap pli-6 border-bs bs-auto plb-[12.5px] gap-2'>
      <Typography color='text.disabled'>
        {`Showing ${
          table.getFilteredRowModel().rows.length === 0
            ? 0
            : (currentPage - 1) * table.getState().pagination.pageSize + 1
        }
        to ${Math.min(
          currentPage * table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length
        )} of ${table.getFilteredRowModel().rows.length} entries`}
      </Typography>
      <Pagination
        shape='rounded'
        color='primary'
        variant='tonal'
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => {
          setCurrentPage(page)
        }}
        showFirstButton
        showLastButton
      />
    </div>
  )
}

export default TablePaginationComponent
