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

import LinearProgress from '@mui/material/LinearProgress'

import { alpha } from '@mui/material/styles'

import { client } from '@/libs/thirdwebclient'

import CustomTextField from '@core/components/mui/TextField'
import FileUploaderRestrictions from '@views/dashboards/fileUpload/form-layouts/FileUploaderRestrictions.tsx'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Add these imports at the top
import { getDb } from '@/libs/surreal'

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
}

// If a file is dropped on the FileUploaderRestrictions component, we need to store the metadata in the database and populate the form with the metadata.

const FormLayoutsSeparator = () => {
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
    releaseDate: null
  })

  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

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
      coverImage: metadata.coverImage || undefined
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
      releaseDate: null
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

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90))
      }, 500)

      console.log('uploading file', file)

      // Upload audio file to IPFS
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

      console.log('Upload URL:', uploadUrl)
      console.log('Cover Art URL:', coverArtUrl)

      clearInterval(progressInterval)
      setUploadProgress(100)

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
        status: 'unminted'
      }

      console.log('Media Metadata:', mediaMetadata)

      // Save to SurrealDB
      const created = await db.create('media', mediaMetadata)

      console.log('Metadata saved to database:', created)

      // Navigate to the record page
      if (created && created[0] && created[0].id) {
        console.log('Created:', created)
        const recordId = String(created[0].id).split(':')[1]

        router.push(`/en/dashboards/record/${recordId}`)
      }

      // Reset form after successful upload and save
      handleReset()
    } catch (error) {
      console.error('Error during upload or save:', error)
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
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
          <Typography variant='h6' sx={{ mb: 4 }}>
            Uploading File...
          </Typography>
          <Box sx={{ width: '80%', maxWidth: 400 }}>
            <LinearProgress variant='determinate' value={uploadProgress} />
          </Box>
          <Typography variant='body2' sx={{ mt: 2 }}>
            {uploadProgress}%
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
                <Grid item xs={12} sm={4} md={3}>
                  {formData.coverImage ? (
                    <Box sx={{ width: '100%', height: 300, overflow: 'hidden', borderRadius: 1 }}>
                      <img
                        src={formData.coverImage}
                        alt='Cover Art'
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        height: 300,
                        borderRadius: 1,
                        bgcolor: 'action.disabledBackground',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography color='text.disabled'>Cover Image</Typography>
                    </Box>
                  )}
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
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
