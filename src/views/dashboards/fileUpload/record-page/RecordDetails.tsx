'use client'

import { useState, useEffect } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// Component Imports
import { StringRecordId } from 'surrealdb'

import CustomTextField from '@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Database Import
import { getDb } from '@/libs/surreal'

type RecordDataType = {
  id?: string
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: Date | null
  ipfsUrl: string
  status: 'unminted' | 'minted'
  uploadedAt: string
  coverImage?: string
}

const RecordDetails = ({ recordId }: { recordId: string }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [recordData, setRecordData] = useState<RecordDataType | null>(null)

  useEffect(() => {
    const fetchRecord = async () => {
      const db = await getDb()

      console.log('Fetching record:', recordId)
      const record = await db.select<RecordDataType>(new StringRecordId(`media:${recordId}`))

      console.log('Record:', record)

      if (record) {
        const recordWithDate: RecordDataType = {
          ...record,
          releaseDate: record.releaseDate ? new Date(record.releaseDate) : null
        }

        setRecordData(recordWithDate)
      }
    }

    fetchRecord()
  }, [recordId])

  const handleSave = async () => {
    if (!recordData) return

    try {
      const db = await getDb()

      await db.update(`media:${recordId}`, recordData)
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving record:', error)
    }
  }

  const handleMint = async () => {
    // Implement minting logic here
    console.log('Minting record:', recordId)
  }

  if (!recordData) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}
      >
        <CircularProgress size={60} />
      </Box>
    )
  }

  return (
    <Card>
      <CardHeader
        title='Media Details'
        action={
          <Chip
            label={recordData.status.toUpperCase()}
            color={recordData.status === 'unminted' ? 'warning' : 'success'}
          />
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {recordData.coverImage && (
                <Box sx={{ width: 200, height: 200 }}>
                  <img
                    src={recordData.coverImage}
                    alt='Cover Art'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              )}
              <CustomTextField
                type='file'
                fullWidth
                label='Cover Image'
                disabled={!isEditing}
                InputLabelProps={{ shrink: true }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0]

                  if (file) {
                    const reader = new FileReader()

                    reader.onload = e => {
                      setRecordData({ ...recordData, coverImage: e.target?.result as string })
                    }

                    reader.readAsDataURL(file)
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              label='Title'
              value={recordData.title}
              disabled={!isEditing}
              onChange={e => setRecordData({ ...recordData, title: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              label='Artist'
              value={recordData.artist}
              disabled={!isEditing}
              onChange={e => setRecordData({ ...recordData, artist: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              label='Album'
              value={recordData.album}
              disabled={!isEditing}
              onChange={e => setRecordData({ ...recordData, album: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              label='Label'
              value={recordData.label}
              disabled={!isEditing}
              onChange={e => setRecordData({ ...recordData, label: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppReactDatepicker
              selected={recordData.releaseDate}
              showYearDropdown
              showMonthDropdown
              disabled={!isEditing}
              onChange={(date: Date | null) => setRecordData({ ...recordData, releaseDate: date })}
              customInput={<CustomTextField fullWidth label='Release Date' />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField fullWidth label='File Type' value={recordData.filetype} disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField fullWidth label='File Size' value={recordData.filesize} disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField fullWidth label='Duration' value={recordData.duration} disabled />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField fullWidth label='IPFS URL' value={recordData.ipfsUrl} disabled />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        {isEditing ? (
          <>
            <Button variant='contained' onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant='tonal' color='secondary' onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant='contained' onClick={() => setIsEditing(true)}>
              Edit Details
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleMint}
              disabled={recordData.status === 'minted'}
            >
              Mint Media
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  )
}

export default RecordDetails
