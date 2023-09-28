// React Imports
import { useEffect, useMemo, useRef, useState } from 'react'
import type { HTMLProps } from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/libs/reactTables.module.css'
import commonStyles from '@views/pages/user-profile/styles.module.css'

type DataType = {
  id: number
  title: string
  subtitle: string
  leader: string
  avatar?: string
  avatarGroup: string[]
  status: number
  actions?: string
}

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const projectTable: DataType[] = [
  {
    id: 1,
    title: 'BGC eCommerce App',
    subtitle: 'React Project',
    leader: 'Eileen',
    avatarGroup: ['/images/avatars/1.png', '/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png'],
    status: 78
  },
  {
    id: 2,
    leader: 'Owen',
    title: 'Falcon Logo Design',
    subtitle: 'Figma Project',
    avatar: '/images/icons/project-icons/social-label.png',
    avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png'],
    status: 18
  },
  {
    id: 3,
    title: 'Dashboard Design',
    subtitle: 'VueJs Project',
    leader: 'Keith',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png', '/images/avatars/2.png'],
    status: 62
  },
  {
    id: 4,
    title: 'Foodista Mobile App',
    subtitle: 'Xamarin Project',
    leader: 'Merline',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png', '/images/avatars/6.png'],
    status: 8
  },
  {
    id: 5,
    leader: 'Harmonia',
    title: 'Dojo React Project',
    subtitle: 'Python Project',
    avatar: '/images/icons/project-icons/figma-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png'],
    status: 36
  },
  {
    id: 6,
    leader: 'Allyson',
    title: 'Blockchain Website',
    subtitle: 'Sketch Project',
    avatar: '/images/icons/project-icons/html-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png'],
    status: 92
  },
  {
    id: 7,
    title: 'Hoffman Website',
    subtitle: 'HTML Project',
    leader: 'Georgie',
    avatar: '/images/icons/project-icons/react-label.png',
    avatarGroup: ['/images/avatars/6.png', '/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png'],
    status: 88
  }
]

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

const ProjectTables = () => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[projectTable])
  const [globalFilter, setGlobalFilter] = useState('')

  const columnHelper = createColumnHelper<DataType>()

  const columns = useMemo<ColumnDef<DataType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            className={styles.selectColumn}
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            className={styles.selectColumn}
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('title', {
        header: () => <span>Name</span>,
        cell: ({ row }) => (
          <div className={classnames('flex items-center', styles.nameColumn)}>
            <Avatar src={row.original.avatar} />
            <div className='flex flex-col'>
              <Typography>{row.original.title}</Typography>
              <Typography>{row.original.subtitle}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('leader', {
        header: () => <div className={styles.leaderColumn}>Leader</div>,
        cell: ({ row }) => <Typography>{row.original.leader}</Typography>
      }),
      columnHelper.accessor('avatarGroup', {
        header: () => <div className={styles.teamColumn}>Team</div>,
        cell: ({ row }) => (
          <AvatarGroup max={4} className='flex items-center'>
            {row.original.avatarGroup.map((avatar, index) => (
              <Avatar key={index} src={avatar} />
            ))}
          </AvatarGroup>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('status', {
        header: () => <div className={styles.progressColumn}>Progress</div>,
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <LinearProgress color='primary' value={row.original.status} variant='determinate' className='w-full' />
            <Typography>{`${row.original.status}%`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('actions', {
        header: () => <div>Actions</div>,
        cell: () => (
          <OptionMenu
            options={[
              'Details',
              'Archive',
              { divider: true },
              { text: 'Delete', menuItemProps: { className: commonStyles.errorColor } }
            ]}
          />
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        title='Projects'
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search all columns...'
          />
        }
      />

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className={tableStyles.tr}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={tableStyles.th}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <Icon icon='mdi:chevron-up' fontSize='1.25rem' />,
                            desc: <Icon icon='mdi:chevron-down' fontSize='1.25rem' />
                          }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames(tableStyles.tr, { selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className='flex items-center gap-3'>
        <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          {'<<'}
        </button>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {'<'}
        </button>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
          {'>>'}
        </button>
        <div className='flex items-center gap-1'>
          <div>Page</div>
          <strong>{`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}</strong>
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[5, 7, 10].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </Card>
  )
}

export default ProjectTables
