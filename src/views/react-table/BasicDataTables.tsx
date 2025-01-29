'use client'

// React Imports
import { useState, useEffect } from 'react'

import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Chip from '@mui/material/Chip'

// Third-party Imports
import type { FilterFn } from '@tanstack/react-table'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import { useActiveAccount } from 'thirdweb/react'
import { rankItem } from '@tanstack/match-sorter-utils'
import { resolveScheme } from 'thirdweb/storage'

import { client } from '@/libs/thirdwebclient'

// Style Imports
import styles from '@core/styles/table.module.css'

// Types
interface TrackRecord {
  id: string
  coverArt: string
  title: string
  artist: string
  album: string
  createdDate: string
  status: 'minted' | 'unminted'
  tokenId?: string
}

const fuzzyFilter: FilterFn<TrackRecord> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

// Column Definitions
const columnHelper = createColumnHelper<TrackRecord>()

const columns = [
  columnHelper.accessor('coverArt', {
    cell: info => <img src={info.getValue()} alt='Cover Art' className='w-12 h-12 rounded' />,
    header: 'Cover Art'
  }),
  columnHelper.accessor('title', {
    cell: info => {
      // Strip 'media:' prefix from the ID
      const recordId = info.row.original.id.replace('media:', '')

      return (
        <Link href={`/en/dashboards/record/${recordId}`} className='text-primary hover:underline'>
          {info.getValue()}
        </Link>
      )
    },
    header: 'Title'
  }),
  columnHelper.accessor('artist', {
    cell: info => info.getValue(),
    header: 'Artist'
  }),
  columnHelper.accessor('album', {
    cell: info => info.getValue(),
    header: 'Album'
  }),
  columnHelper.accessor('createdDate', {
    cell: info => {
      const date = new Date(info.getValue())

      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    header: 'Created Date'
  }),
  columnHelper.accessor('status', {
    cell: info => (
      <Chip
        label={info.getValue().toUpperCase()}
        color={info.getValue() === 'minted' ? 'success' : 'warning'}
        size='small'
      />
    ),
    header: 'Status'
  })
]

const MusicLibrary = () => {
  // States
  const [data, setData] = useState<TrackRecord[]>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Thirdweb hooks
  const account = useActiveAccount()

  useEffect(() => {
    // Don't fetch until we have an account
    if (!account?.address) {
      setIsLoading(true)

      return
    }

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/tracks/all?owner=${account.address}`)
        const tracks = await response.json()

        tracks.forEach((track: any) => {
          const coverArt = resolveScheme({
            client,
            uri: `${track.coverImage}`
          })

          track.coverArt = coverArt
        })

        const transformedTracks = tracks.map((track: any) => ({
          id: track.id,
          coverArt: track.coverArt,
          title: track.title,
          artist: track.artist,
          album: track.album,
          createdDate: track.createdDate,
          status: track.status,
          tokenId: track.tokenId
        }))

        // Sort tracks by createdAt date in descending order (most recent first)
        const sortedTracks = transformedTracks.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )

        setData(sortedTracks)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [account?.address])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter
  })

  return (
    <Card>
      {isLoading && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <CircularProgress size={60} />
        </div>
      )}
      <CardHeader
        title='My Music Library'
        action={
          <TextField
            placeholder='Search...'
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            size='small'
          />
        }
      />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                  >
                    {header.isPlaceholder ? null : (
                      <div className='flex items-center gap-2'>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽'
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default MusicLibrary
