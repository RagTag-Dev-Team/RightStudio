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
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

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

import { useSession } from 'next-auth/react'

import { client } from '@/libs/thirdwebclient'

// import FormLayoutsSeparator from '../dashboards/fileUpload/form-layouts/FormLayoutsSeparator'
import RecordCreateForm from '@views/media/record-form/RecordCreateForm'

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
  originalIpfsUrl: string
  owner: string
  watermarkUrl?: string
  selected?: boolean
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

import { findByField } from '@/app/server/data-actions'

const MediaLibrary = () => {
  // States
  const [data, setData] = useState<TrackRecord[]>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Add pagination state
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  // Thirdweb hooks
  const account = useActiveAccount()

  // Replace getSession() with useSession hook
  const { data: session } = useSession()

  // Update the wallet address to use session data directly
  const walletAddress = account?.address || session?.user?.wallet_address

  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [recordToDelete, setRecordToDelete] = useState<string | null>(null)

  // Add delete handler
  const handleDelete = async (ids: string[]) => {
    try {
      setIsLoading(true)

      // Extract records to delete
      const recordsToDelete = data.filter(record => ids.includes(record.id))

      // Extract CIDs from original ipfsUrls
      const deletePayload = recordsToDelete.map(record => ({
        id: record.id,
        cid: record.originalIpfsUrl.replace('ipfs://', '').split('/')[0] // Extract CID portion
      }))

      console.log(deletePayload)

      // Make API call to delete records
      const response = await fetch('/api/media/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ records: deletePayload })
      })

      if (!response.ok) throw new Error('Failed to delete records')

      // Remove deleted records from the table
      setData(prevData => prevData.filter(record => !ids.includes(record.id)))
      setSelectedRows([])
      table.resetRowSelection() // Reset table selection state
    } catch (error) {
      console.error('Error deleting records:', error)
    } finally {
      setIsLoading(false)
      setDeleteDialogOpen(false)
      setRecordToDelete(null)
    }
  }

  const columns = [
    // Add selection column
    columnHelper.display({
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
    }),
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
    }),
    columnHelper.accessor('watermarkUrl', {
      cell: info => {
        return (
          <div className='flex justify-center items-center'>
            {info.getValue() === 'certified' ? (
              <Icon className='tabler-certificate text-success' fontSize='small'>
                verified
              </Icon>
            ) : (
              <Icon className='tabler-certificate-off text-disabled' fontSize='small'>
                gpp_bad
              </Icon>
            )}
          </div>
        )
      },
      header: 'Certification'
    }),

    // Add delete action column
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <IconButton
          onClick={() => {
            setRecordToDelete(row.original.id)
            setDeleteDialogOpen(true)
          }}
          color='error'
        >
          <Icon className='tabler-trash'>delete</Icon>
        </IconButton>
      )
    })
  ]

  useEffect(() => {
    // Update the wallet address check in useEffect
    const walletAddress = account?.address || session?.user?.wallet_address

    console.log(account)
    console.log(session?.user?.wallet_address)

    if (!walletAddress) {
      setIsLoading(true)

      return
    }

    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Use data-actions instead of API call
        const tracks = await findByField('media', 'owner', walletAddress)

        tracks.forEach((track: any) => {
          // Store original ipfsUrl before resolving
          const originalIpfsUrl = track.ipfsUrl

          // Resolve ipfsUrl for player
          track.ipfsUrl = resolveScheme({
            client,
            uri: `${track.ipfsUrl}`
          })

          // Store original URL in a new property
          track.originalIpfsUrl = originalIpfsUrl

          // Resolve coverArt if coverImage exists
          if (track.coverImage) {
            track.coverArt = resolveScheme({
              client,
              uri: `${track.coverImage}`
            })
          } else {
            track.coverArt = '/images/icons/default-cover-art.jpg'
          }

          // Check for watermarkedUrl existence
          if (track.watermarkedUrl) {
            // Add debug log for watermarkedUrl processing
            // console.log('Processing watermarkedUrl for track:', track.id)
            track.watermarkedUrl = 'certified'
          }
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
          originalIpfsUrl: track.originalIpfsUrl, // Keep the original URL
          owner: track.owner,
          watermarkUrl: track.watermarkedUrl // Map watermarkedUrl to watermarkUrl for the UI
        }))

        // Sort tracks by uploadedAt date in descending order
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
  }, [account?.address, session])

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
        pageIndex,
        pageSize
      },
      rowSelection: {} // Add row selection state
    },
    onRowSelectionChange: () => {
      // Clear selected rows when table selection changes
      setSelectedRows([])
    },
    enableRowSelection: true, // Enable row selection
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: updater => {
      if (typeof updater === 'function') {
        const newState = updater({
          pageIndex,
          pageSize
        })

        setPageIndex(newState.pageIndex)
        setPageSize(newState.pageSize)
      } else {
        setPageIndex(updater.pageIndex)
        setPageSize(updater.pageSize)
      }
    },
    globalFilterFn: fuzzyFilter
  })

  // Add drawer toggle handler
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  // Modify the drawer content to include the new loading handler
  const handleFormSuccess = () => {
    setIsRedirecting(true)

    //   setDrawerOpen(false)
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
                {selectedRows.length > 0 && (
                  <Button
                    variant='contained'
                    color='error'
                    onClick={() => setDeleteDialogOpen(true)}
                    startIcon={<Icon className='tabler-trash'>delete</Icon>}
                  >
                    Delete Selected ({selectedRows.length})
                  </Button>
                )}
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
              {isLoading ? (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : data.length > 0 ? (
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
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '400px',
                    p: 4,
                    textAlign: 'center',
                    gap: 2
                  }}
                >
                  <Icon
                    className='tabler-music-off'
                    sx={{
                      fontSize: '64px',
                      opacity: 0.5,
                      color: 'text.disabled'
                    }}
                  >
                    library_music
                  </Icon>
                  <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    Your Music Library is Empty
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ maxWidth: '500px', mb: 2 }}>
                    Start building your music collection by uploading your tracks. You can add music files, set cover
                    art, and manage your entire library from here.
                  </Typography>
                  <Button
                    variant='contained'
                    onClick={toggleDrawer}
                    startIcon={<Icon className='tabler-music-plus'>add</Icon>}
                    size='large'
                  >
                    Upload Your First Track
                  </Button>
                </Box>
              )}
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
                  value={pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                  size='small'
                >
                  {[10, 25, 50, 100].map(size => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant='body2'>
                  Page {pageIndex + 1} of {table.getPageCount()}
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

          {/* Add Delete Confirmation Dialog */}
          <Dialog
            open={deleteDialogOpen}
            onClose={() => {
              setDeleteDialogOpen(false)
              setRecordToDelete(null)
            }}
          >
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {recordToDelete
                  ? 'Are you sure you want to delete this record?'
                  : `Are you sure you want to delete ${selectedRows.length} selected records?`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setDeleteDialogOpen(false)
                  setRecordToDelete(null)
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(recordToDelete ? [recordToDelete] : selectedRows)}
                color='error'
                variant='contained'
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
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
          <RecordCreateForm onSuccess={handleFormSuccess} walletAddress={walletAddress} />
          {/* <FormLayoutsSeparator onSuccess={toggleDrawer} /> */}
        </Box>
      </Drawer>
    </Card>
  )
}

export default MediaLibrary
