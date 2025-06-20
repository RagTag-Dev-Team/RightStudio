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

import Dialog from '@mui/material/Dialog'

import DialogTitle from '@mui/material/DialogTitle'

import DialogContent from '@mui/material/DialogContent'

import DialogActions from '@mui/material/DialogActions'

import DialogContentText from '@mui/material/DialogContentText'

import { client } from '@/libs/thirdwebclient'

import CustomTextField from '@core/components/mui/TextField'
import FileUploaderRestrictions from '@views/dashboards/fileUpload/record-form/FileUploaderRestrictions.tsx'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Add these imports at the top
import { getDb } from '@/libs/surreal'
import CovertArtUploader from './CovertArtUploader'

// Add this import
import { createMedia } from '@/app/server/data-actions'
import { generateCoverArt, checkImageStatus } from '@/app/server/ai-actions'

type FormDataType = {
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: Date | null
  coverImage: string
  owner: string
  dateCreated: Date
}

// If a file is dropped on the FileUploaderRestrictions component, we need to store the metadata in the database and populate the form with the metadata.

// Add this to the component's props
interface FormLayoutsSeparatorProps {
  onSuccess?: () => void
  walletAddress?: string
}

const RecordCreateForm = ({ onSuccess, walletAddress }: FormLayoutsSeparatorProps = {}) => {
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
    coverImage: '',
    owner: '',
    dateCreated: new Date()
  })

  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const activeAccount = useActiveAccount()

  const [openAIDialog, setOpenAIDialog] = useState(false)
  const [aiPrompt, setAiPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>('')
  const [generationError, setGenerationError] = useState<string | null>(null)

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
      coverImage: metadata.coverImage || '',
      owner: walletAddress || activeAccount?.address || '',
      dateCreated: new Date()
    }))

    console.log(metadata)

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
      coverImage: '',
      owner: '',
      dateCreated: new Date()
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      console.error('Please upload a file')

      return
    }

    if (!formData.title || !formData.artist || !formData.album) {
      console.error('Please fill in required fields: title, artist, and album')

      return
    }

    try {
      setIsUploading(true)
      setUploadProgress(10) // Show initial progress

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Upload timed out. Please try again.')), 300000) // 5 minute timeout
      })

      // Race between upload and timeout
      const uploadPromise = (async () => {
        try {
          console.log(client)

          // Single file upload
          const uploadUrl = await upload({
            client,
            files: [file]
          })

          setUploadProgress(70) // Update progress after file upload

          // Handle cover art upload
          let coverArtUrl = formData.coverImage

          if (coverArtUrl && coverArtUrl.startsWith('data:')) {
            try {
              const response = await fetch(coverArtUrl)
              const blob = await response.blob()
              const coverArtFile = new File([blob], 'cover-art.jpg', { type: 'image/jpeg' })

              coverArtUrl = await upload({
                client,
                files: [coverArtFile]
              })
            } catch (error) {
              console.error('Error uploading cover art:', error)
              coverArtUrl = ''
            }
          }

          setUploadProgress(90) // Update progress after cover art upload

          // Prepare metadata for database
          const mediaMetadata = {
            title: formData.title,
            artist: formData.artist,
            album: formData.album,
            label: formData.label || '',
            releaseDate: formData.releaseDate ? formData.releaseDate.toISOString() : null,
            filetype: formData.filetype,
            filesize: formData.filesize,
            duration: formData.duration,
            ipfsUrl: uploadUrl,
            coverImage: coverArtUrl || '',
            uploadedAt: new Date().toISOString(),
            status: 'unminted',
            owner: activeAccount?.address || formData.owner
          }

          const created = await createMedia(mediaMetadata)

          setUploadProgress(100) // Complete progress

          if (created && created[0] && created[0].id) {
            const recordId = String(created[0].id).split(':')[1]

            handleReset()

            if (onSuccess) {
              router.push(`/en/media/record/${recordId}`)
              onSuccess()
            }
          } else {
            throw new Error('Failed to get created record ID')
          }
        } catch (error) {
          throw error
        }
      })()

      await Promise.race([uploadPromise, timeoutPromise])
    } catch (error) {
      console.error('Error during upload or save:', error)
      const errorMessage = error instanceof Error ? error.message : 'Upload failed. Please try again.'

      // Show error dialog to user
      if (window.confirm(`${errorMessage}\n\nWould you like to try uploading again?`)) {
        // Reset form state but keep the file
        setUploadProgress(0)
        setIsUploading(false)

        return
      }

      // If user doesn't want to retry, reset everything
      handleReset()
      setFile(null)
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleGenerateArt = async () => {
    if (!aiPrompt) return

    setIsGenerating(true)
    setGenerationError(null)
    setGeneratedImageUrl('')

    try {
      const response = await generateCoverArt(aiPrompt)

      if (!response.jobId) {
        throw new Error('No job ID received')
      }

      // Poll for the result
      let attempts = 0
      const maxAttempts = 30 // 30 seconds timeout

      while (attempts < maxAttempts) {
        const statusResponse = await checkImageStatus(String(response.jobId))

        if (statusResponse.status === 'completed' && statusResponse.data) {
          setGeneratedImageUrl(statusResponse.data.url)
          break
        } else if (statusResponse.status === 'failed') {
          throw new Error(statusResponse.message || 'Image generation failed')
        }

        // Wait 1 second before next attempt
        await new Promise(resolve => setTimeout(resolve, 1000))
        attempts++
      }

      if (attempts >= maxAttempts) {
        throw new Error('Image generation timed out')
      }
    } catch (error) {
      console.error('Error generating cover art:', error)
      setGenerationError(error instanceof Error ? error.message : 'Failed to generate image')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleAcceptImage = async () => {
    if (!generatedImageUrl) return

    try {
      // Fetch the image through our API to handle CORS
      const response = await fetch('/api/fetch-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageUrl: generatedImageUrl })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch image')
      }

      const imageBlob = await response.blob()
      const reader = new FileReader()

      reader.onload = e => {
        if (e.target?.result) {
          setFormData({ ...formData, coverImage: e.target.result as string })
        }
      }

      reader.readAsDataURL(imageBlob)
      setOpenAIDialog(false)
    } catch (error) {
      console.error('Error saving generated image:', error)

      // You may want to add error handling UI here
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
          <CircularProgress variant='determinate' value={uploadProgress} size={60} sx={{ mb: 4 }} />
          <Typography variant='h6' sx={{ mb: 2 }}>
            Uploading File... {uploadProgress.toFixed(0)}%
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
            <Grid item xs={12}>
              {!file ? (
                <>
                  <Typography
                    variant='body1'
                    sx={{
                      mb: 4,
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                  >
                    To create a new media asset, start by uploading an audio file.
                    <br />
                    Supported formats: MP3, WAV, FLAC (max 100MB)
                  </Typography>
                  <FileUploaderRestrictions onMetadata={handleMetadata} />
                </>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                  <Button
                    variant='tonal'
                    color='primary'
                    onClick={() => {
                      setFile(null)
                      handleReset()
                    }}
                  >
                    Change File
                  </Button>
                </Box>
              )}
            </Grid>

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
                      cursor: !file ? 'not-allowed' : 'pointer',
                      opacity: !file ? 0.7 : 1,
                      position: 'relative',
                      '&:hover': {
                        '& .overlay': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    {formData.coverImage ? (
                      <>
                        <img
                          src={formData.coverImage}
                          alt='Cover Art'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        <Box
                          className='overlay'
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.2s'
                          }}
                        >
                          <Button variant='contained' onClick={() => setFormData({ ...formData, coverImage: '' })}>
                            Change Cover
                          </Button>
                        </Box>
                      </>
                    ) : !file ? (
                      <img
                        src={'/images/icons/default-cover-art.jpg'}
                        alt='Default Cover Art'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.5
                        }}
                      />
                    ) : (
                      <Box sx={{ textAlign: 'center', p: 3 }}>
                        <CovertArtUploader
                          disabled={!file}
                          onImageSelect={async (file: File) => {
                            const reader = new FileReader()

                            reader.onload = e => {
                              if (e.target?.result) {
                                setFormData({ ...formData, coverImage: e.target.result as string })
                              }
                            }

                            reader.readAsDataURL(file)
                          }}
                        />
                        <Button
                          variant='contained'
                          onClick={() => setOpenAIDialog(true)}
                          sx={{ mt: 2 }}
                          disabled={!file}
                        >
                          Generate with AI
                        </Button>
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
                        disabled={!file}
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
          <Button type='submit' variant='contained' className='mie-2' disabled={!file}>
            Store Media
          </Button>
          <Button
            type='reset'
            variant='tonal'
            color='secondary'
            disabled={!file}
            onClick={() => {
              handleReset()
            }}
          >
            Reset
          </Button>
        </CardActions>
      </form>

      <Dialog open={openAIDialog} onClose={() => setOpenAIDialog(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Generate Cover Art with AI</DialogTitle>
        <DialogContent>
          {!generatedImageUrl ? (
            <>
              <DialogContentText sx={{ mb: 2 }}>
                Describe the cover art you&apos;d like to generate. For best results, be specific about:
              </DialogContentText>

              <Box sx={{ mb: 3 }}>
                <ul>
                  <li>Style (e.g., photographic, illustration, abstract)</li>
                  <li>Colors and mood</li>
                  <li>Main elements or subjects</li>
                  <li>Composition and layout</li>
                </ul>

                <DialogContentText sx={{ mt: 2 }}>
                  Example: &quot;A dreamy watercolor illustration of a sunset over mountains, using purple and orange
                  tones, with musical notes floating in the sky&quot;
                </DialogContentText>
              </Box>
              <CustomTextField
                autoFocus
                fullWidth
                multiline
                rows={4}
                label='Describe your cover art'
                value={aiPrompt}
                onChange={e => setAiPrompt(e.target.value)}
                disabled={isGenerating}
                error={!!generationError}
                helperText={generationError}
              />
              {isGenerating && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    mt: 4
                  }}
                >
                  <CircularProgress size={40} />
                  <Typography variant='body2' color='text.secondary'>
                    Generating your cover art...
                  </Typography>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img
                src={generatedImageUrl}
                alt='Generated Cover Art'
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  borderRadius: '4px'
                }}
              />
              <Typography>Do you want to use this image as your cover art?</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenAIDialog(false)
              setGeneratedImageUrl('')
              setGenerationError(null)
            }}
            disabled={isGenerating}
          >
            Cancel
          </Button>
          {!generatedImageUrl ? (
            <Button
              onClick={handleGenerateArt}
              variant='contained'
              disabled={!aiPrompt || isGenerating}
              startIcon={isGenerating ? <CircularProgress size={20} color='inherit' /> : null}
            >
              {isGenerating ? 'Generating...' : 'Generate'}
            </Button>
          ) : (
            <>
              <Button
                onClick={() => {
                  setGeneratedImageUrl('')
                  setGenerationError(null)
                }}
              >
                Try Again
              </Button>
              <Button onClick={handleAcceptImage} variant='contained'>
                Use This Image
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default RecordCreateForm
