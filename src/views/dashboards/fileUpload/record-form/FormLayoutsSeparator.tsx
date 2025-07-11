'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// Components Imports

import { upload } from 'thirdweb/storage'

import Box from '@mui/material/Box'

import { alpha } from '@mui/material/styles'

import CircularProgress from '@mui/material/CircularProgress'

import { useActiveAccount } from 'thirdweb/react'

import { client } from '@/libs/thirdwebclient'

import CustomTextField from '@core/components/mui/TextField'
import FileUploaderRestrictions from '@views/dashboards/fileUpload/form-layouts/FileUploaderRestrictions.tsx'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Add these imports at the top
import { getDb } from '@/libs/surreal'

// Add this import

type FormDataType = {
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: Date | null
  coverImage?: string
  owner: string
  dateCreated: Date
}

// If a file is dropped on the FileUploaderRestrictions component, we need to store the metadata in the database and populate the form with the metadata.

// Add this to the component's props
interface FormLayoutsSeparatorProps {
  onSuccess?: () => void
}

const FormLayoutsSeparator = ({ onSuccess }: FormLayoutsSeparatorProps = {}) => {
  const router = useRouter()

  // States
  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    artist: '',
    album: '',
    filetype: '',
    filesize: '',
    duration: '',
    label: '',
    releaseDate: null,
    owner: '',
    dateCreated: new Date()
  })

  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const activeAccount = useActiveAccount()

  const handleMetadata = (metadata: Partial<FormDataType>, uploadedFile: File) => {
    // Update form data with metadata
    setFormData(prevData => ({
      ...prevData,
      title: metadata.title || '',
      artist: metadata.artist || '',
      album: metadata.album || '',
      label: metadata.label || '',
      releaseDate: metadata.releaseDate || null,
      filetype: metadata.filetype || '',
      filesize: metadata.filesize || '',
      duration: metadata.duration || '',
      coverImage: metadata.coverImage || undefined,
      owner: activeAccount?.address || '',
      dateCreated: new Date()
    }))

    // Update file state
    setFile(uploadedFile)
  }

  const handleReset = () => {
    setFormData({
      title: '',
      artist: '',
      album: '',
      filetype: '',
      filesize: '',
      duration: '',
      label: '',
      releaseDate: null,
      owner: '',
      dateCreated: new Date()
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const db = await getDb()
    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null)

    if (!isFormValid || !file) {
      console.error('Please fill in all required fields and upload a file')

      return
    }

    try {
      setIsUploading(true)

      const uploadUrl = await upload({
        client,
        files: [file]
      })

      // Upload cover art to IPFS if it exists
      let coverArtUrl = formData.coverImage

      if (coverArtUrl && coverArtUrl.startsWith('data:')) {
        // Convert base64 to blob
        const response = await fetch(coverArtUrl)
        const blob = await response.blob()
        const coverArtFile = new File([blob], 'cover-art.jpg', { type: 'image/jpeg' })

        // Upload cover art to IPFS
        coverArtUrl = await upload({
          client,
          files: [coverArtFile]
        })
      }

      // Prepare metadata for database
      const mediaMetadata = {
        title: formData.title,
        artist: formData.artist,
        album: formData.album,
        label: formData.label,
        releaseDate: formData.releaseDate,
        filetype: formData.filetype,
        filesize: formData.filesize,
        duration: formData.duration,
        ipfsUrl: uploadUrl,
        coverImage: coverArtUrl,
        uploadedAt: new Date().toISOString(),
        status: 'unminted',
        owner: formData.owner
      }

      const created = await db.create('media', mediaMetadata)

      console.log('Metadata saved to database:', created)

      // Only hide the spinner after successful redirect
      if (created && created[0] && created[0].id) {
        console.log('Created:', created)
        const recordId = String(created[0].id).split(':')[1]

        // Reset states before redirect
        handleReset()

        // Call onSuccess if provided
        if (onSuccess) {
          onSuccess()
        }

        router.push(`/en/dashboards/record/${recordId}`)
      }
    } catch (error) {
      console.error('Error during upload or save:', error)
      setIsUploading(false)
    }
  }

  return (
    <Card>
      {isUploading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: theme => alpha(theme.palette.background.paper, 0.8),
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4
          }}
        >
          <CircularProgress size={60} sx={{ mb: 4 }} />
          <Typography variant='h6' sx={{ mb: 2 }}>
            Uploading File...
          </Typography>
          <Typography variant='body2' color='text.secondary' textAlign='center'>
            Please keep this window open while we process your transaction.
            <br />
            This may take a few moments.
          </Typography>
        </Box>
      )}
      <CardHeader title='File Uploader' />
      <Divider />
      <form onSubmit={e => handleSubmit(e)}>
        <CardContent>
          <Grid container spacing={6}>
            {!formData.title && (
              <Grid item xs={12}>
                <FileUploaderRestrictions onMetadata={handleMetadata} />
              </Grid>
            )}

            <Grid item xs={12}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={5} md={4}>
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '1/1',
                      border: theme => `1px solid ${theme.palette.divider}`,
                      borderRadius: 1,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': { opacity: 0.8 }
                    }}
                  >
                    {formData.coverImage ? (
                      <img
                        src={formData.coverImage}
                        alt='Cover Art'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <Box sx={{ textAlign: 'center', p: 3 }}>
                        <span>No cover image</span>
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Title'
                        placeholder='Song Title'
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        type='artist'
                        label='Artist Name'
                        value={formData.artist}
                        placeholder='Artist Name'
                        onChange={e => setFormData({ ...formData, artist: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        type='album'
                        label='Album'
                        value={formData.album}
                        placeholder='Album'
                        onChange={e => setFormData({ ...formData, album: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Label'
                        type='string'
                        placeholder='Label Name'
                        value={formData.label}
                        onChange={e => setFormData({ ...formData, label: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <AppReactDatepicker
                        required
                        selected={formData.releaseDate}
                        showYearDropdown
                        showMonthDropdown
                        onChange={(date: Date | null) => setFormData({ ...formData, releaseDate: date })}
                        placeholderText='MM/DD/YYYY'
                        customInput={
                          <CustomTextField required fullWidth label='Release Date' placeholder='MM-DD-YYYY' />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        type='filetype'
                        label='File Type'
                        value={formData.filetype}
                        placeholder='File Type'
                        onChange={e => setFormData({ ...formData, filetype: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='File Size'
                        placeholder='0 MB'
                        value={formData.filesize}
                        onChange={e => setFormData({ ...formData, filesize: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Duration'
                        placeholder='0:00'
                        value={formData.duration}
                        onChange={e => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2'>
            Store Media
          </Button>
          <Button
            type='reset'
            variant='tonal'
            color='secondary'
            onClick={() => {
              handleReset()
            }}
          >
            Reset
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
