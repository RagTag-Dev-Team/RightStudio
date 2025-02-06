'use client'

// React Imports
import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// import TablePagination from '@mui/material/TablePagination'

// Third-party Imports
import type { FilterFn } from '@tanstack/react-table'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'
import { useActiveAccount } from 'thirdweb/react'
import { rankItem } from '@tanstack/match-sorter-utils'
import { resolveScheme } from 'thirdweb/storage'

import { client } from '@/libs/thirdwebclient'

// import FormLayoutsSeparator from '../dashboards/fileUpload/form-layouts/FormLayoutsSeparator'
import RecordCreateForm from '../dashboards/fileUpload/record-form/RecordCreateForm'

// Style Imports
import styles from '@core/styles/table.module.css'
import '@assets/iconify-icons/generated-icons.css'

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
  ipfsUrl: string
  owner: string
}

const fuzzyFilter: FilterFn<TrackRecord> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

// Column Definitions
const columnHelper = createColumnHelper<TrackRecord>()

const CoverArtWithPlayButton = ({
  coverArt,
  ipfsUrl,
  owner,
  currentAccount
}: {
  coverArt: string
  ipfsUrl: string
  owner: string
  currentAccount: string
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const isOwner = owner.toLowerCase() === currentAccount.toLowerCase()
  const previewDuration = 30000 // 30 seconds in milliseconds

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(ipfsUrl)

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }

    if (isPlaying) {
      audioRef.current.pause()

      if (timer) {
        clearTimeout(timer)
        setTimer(null)
      }
    } else {
      audioRef.current.play()

      if (!isOwner) {
        // Set timer for preview duration
        const newTimer = setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(false)
            alert('To listen to the full track, please send an offer to the owner.')
          }
        }, previewDuration)

        setTimer(newTimer)
      }
    }

    setIsPlaying(!isPlaying)
  }

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }

      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <div className='relative w-16 h-16'>
      <img src={coverArt} alt='Cover Art' className='w-16 h-16 rounded' />
      <button
        onClick={handlePlayPause}
        className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded hover:bg-opacity-60 transition-opacity'
      >
        <Icon className={`text-white text-xl ${isPlaying ? 'tabler-pause' : 'tabler-play'}`}>
          {isPlaying ? 'pause' : 'play_arrow'}
        </Icon>
      </button>
    </div>
  )
}

const MediaLibrary = () => {
  // States
  const [data, setData] = useState<TrackRecord[]>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Thirdweb hooks
  const account = useActiveAccount()

  const columns = [
    columnHelper.accessor('coverArt', {
      cell: info => (
        <CoverArtWithPlayButton
          coverArt={info.getValue()}
          ipfsUrl={info.row.original.ipfsUrl}
          owner={info.row.original.owner}
          currentAccount={account?.address || ''}
        />
      ),
      header: 'Cover Art'
    }),
    columnHelper.accessor('title', {
      cell: info => {
        // Strip 'media:' prefix from the ID
        const recordId = info.row.original.id.replace('media:', '')

        return (
          <Link href={`/en/media/record/${recordId}`} className='text-primary hover:underline'>
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
          //   console.log('track', track)

          // Only resolve the coverArt if coverImage exists
          if (track.coverImage) {
            track.coverArt = resolveScheme({
              client,
              uri: `${track.coverImage}`
            })
          } else {
            // Set a default or placeholder image URL
            track.coverArt = '/images/icons/default-cover-art.jpg' // Replace with your default image path
          }

          track.ipfsUrl = resolveScheme({
            client,
            uri: `${track.ipfsUrl}`
          })
        })

        const transformedTracks = tracks.map((track: any) => ({
          id: track.id,
          coverArt: track.coverArt,
          title: track.title,
          artist: track.artist,
          album: track.album,
          createdDate: track.uploadedAt,
          status: track.status,
          tokenId: track.tokenId,
          ipfsUrl: track.ipfsUrl,
          owner: track.owner
        }))

        // Sort tracks by uploadedAt date in descending order (most recent first)
        const sortedTracks = transformedTracks.sort(
          (a: { createdDate: string | number | Date }, b: { createdDate: string | number | Date }) =>
            new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
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
    getPaginationRowModel: getPaginationRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter,
      pagination: {
        pageIndex: 0,
        pageSize: 10
      }
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter
  })

  // Add drawer toggle handler
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  // Modify the drawer content to include the new loading handler
  const handleFormSuccess = () => {
    setIsRedirecting(true)
    setDrawerOpen(false)
  }

  return (
    <Card sx={{ blockSize: '100%', display: 'flex', flexDirection: 'column' }}>
      {(isLoading || isRedirecting) && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <CircularProgress size={60} />
        </div>
      )}

      {/* Only show content when not redirecting */}
      {!isRedirecting && (
        <>
          <CardHeader
            title='My Music Library'
            action={
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                  placeholder='Search...'
                  value={globalFilter}
                  onChange={e => setGlobalFilter(e.target.value)}
                  size='small'
                />
                <Button
                  variant='contained'
                  onClick={toggleDrawer}
                  startIcon={<Icon className='tabler-music-plus'>add</Icon>}
                >
                  Add New Media
                </Button>
              </Box>
            }
          />
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              minHeight: 0,
              maxHeight: 'calc(100vh - 300px)',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className='overflow-y-auto overflow-x-auto h-full scrollbar-hide'>
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
          </Box>

          <Box
            sx={{
              borderTop: theme => `1px solid ${theme.palette.divider}`,
              backgroundColor: theme => theme.palette.background.paper
            }}
          >
            {/* Add pagination controls */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant='body2'>Rows per page:</Typography>
                <Select
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                  size='small'
                >
                  {[10, 25, 50, 100].map(pageSize => (
                    <MenuItem key={pageSize} value={pageSize}>
                      {pageSize}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant='body2'>
                  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </Typography>
                <Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} size='small'>
                  {'<<'}
                </Button>
                <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} size='small'>
                  Previous
                </Button>
                <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} size='small'>
                  Next
                </Button>
                <Button
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                  size='small'
                >
                  {'>>'}
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}

      {/* Modify the Drawer to pass the success handler */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: {
              xs: '100%',
              sm: '1000px'
            },
            maxWidth: '100vw'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: theme => theme.spacing(3, 4)
          }}
        >
          <Typography variant='h6'>Add New Media</Typography>
          <IconButton className='tabler:x' onClick={toggleDrawer}>
            <Icon className='tabler-x'>close</Icon>
          </IconButton>
        </Box>
        <Divider sx={{ mb: 0 }} />
        <Box sx={{ p: theme => theme.spacing(4) }}>
          <RecordCreateForm onSuccess={handleFormSuccess} />
          {/* <FormLayoutsSeparator onSuccess={toggleDrawer} /> */}
        </Box>
      </Drawer>
    </Card>
  )
}

export default MediaLibrary
