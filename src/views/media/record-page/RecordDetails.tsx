'use client'

import { useState, useEffect } from 'react'

import ReactConfetti from 'react-confetti'

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
import { resolveScheme, download, upload } from 'thirdweb/storage'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'

import { RecordId, StringRecordId } from 'surrealdb'

import { useActiveAccount } from 'thirdweb/react'

import type { ICertificateArg, ICertificateUpdateArg } from '@mentaport/certificates'

import { client } from '@/libs/thirdwebclient'
import CustomTextField from '@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Database Import
import { getDb } from '@/libs/surreal'

// Add import for useSession

// Add this constant at the top with other constants
const AMOY_EXPLORER = 'https://amoy.polygonscan.com/tx/'

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
  owner?: string
  transactionHash?: string
}

// Add this type definition at the top of the file, after the imports

const RecordDetails = ({ recordId }: { recordId: string }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [recordData, setRecordData] = useState<RecordDataType | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')

  const [isMinting, setIsMinting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  const activeAccount = useActiveAccount()

  const [successMessage, setSuccessMessage] = useState<string>('')

  // Add new state for watermark processing
  const [isWatermarking, setIsWatermarking] = useState(false)

  // Add these state variables with the other useState declarations
  const [openAIDialog, setOpenAIDialog] = useState(false)
  const [aiPrompt, setAiPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const db = await getDb()

      console.log('Fetching record:', recordId)
      const record = await db.select<RecordDataType>(new StringRecordId(`media:${recordId}`))

      // Add this debug log
      console.log('Record data:', record)

      if (record) {
        const recordWithDate: RecordDataType = {
          ...record,

          // Ensure status is set if missing
          status: record.status || 'unminted',
          releaseDate: record.releaseDate ? new Date(record.releaseDate) : null
        }

        // Add this debug log
        console.log('Processed record data:', recordWithDate)

        setRecordData(recordWithDate)

        // If there's a coverImage URI, fetch it from thirdweb
        if (record.coverImage) {
          try {
            const url = resolveScheme({
              client,
              uri: record.coverImage
            })

            //  console.log(url)
            setImageUrl(url)
          } catch (error) {
            console.error('Error downloading cover image:', error)
          }
        }
      }
    }

    fetchData()
  }, [recordId])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    if (!activeAccount?.address) {
      console.error('No wallet address found in session')

      return
    }

    setIsMinting(true)

    try {
      console.log('Minting record:', recordId)

      //  console.log('activeAccount', activeAccount)
      // console.log('imageUrl', imageUrl)

      // Create metadata object from record fields
      const metadata = {
        name: recordData?.title,
        description: `${recordData?.artist} - ${recordData?.album}`,
        image: recordData?.coverImage || '',
        properties: {
          artist: recordData?.artist,
          album: recordData?.album,
          label: recordData?.label,
          releaseDate: recordData?.releaseDate?.toISOString(),
          duration: recordData?.duration,
          fileType: recordData?.filetype,
          ipfsUrl: recordData?.ipfsUrl
        }
      }

      const walletAddress = activeAccount

      const mintResponse = await fetch('/api/mint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ metadata, walletAddress })
      })

      if (!mintResponse.ok) {
        throw new Error('Minting failed')
      }

      console.log('mintResponse', mintResponse)

      const { transactionHash } = await mintResponse.json()

      console.log('hash', transactionHash)

      // Update record status in database
      const db = await getDb()

      await db.update(new RecordId('media', `${recordId}`), {
        ...recordData,
        status: 'minted',
        owner: activeAccount.address,
        transactionHash: transactionHash
      })

      //    console.log('updatedRecord', updatedRecord)

      // Update local state with the hash
      setRecordData(prev =>
        prev
          ? {
              ...prev,
              status: 'minted',
              owner: activeAccount.address,
              transactionHash: transactionHash,
              dateMinted: new Date()
            }
          : null
      )
      setIsEditing(false)

      // Reward user with tagz
      const rewardResponse = await fetch('/api/reward', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ walletAddress: activeAccount.address, amount: '100.0' })
      })

      const rewardData = await rewardResponse.json()

      console.log('rewardResponse', rewardData)

      // Show confetti after both minting and reward are complete
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)

      setShowSuccess(true)
      setSuccessMessage(
        `Record successfully minted! You've earned ${Number(rewardData.amount).toFixed(2)} TAGZ for minting this record.`
      )
    } catch (error) {
      console.error('Error during minting process:', error)
    } finally {
      setIsMinting(false)
    }
  }

  // Add watermark handler function
  const handleWatermark = async () => {
    if (!recordData) return

    setIsWatermarking(true)

    try {
      // Send to watermark API
      const response = await fetch('/api/watermark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recordData)
      })

      const res = await response.json()

      if (res) {
        console.log('res', res)
      }

      setSuccessMessage('Watermark successfully added to the media file!')
      setShowSuccess(true)
    } catch (error) {
      console.error('Error during watermarking:', error)
      setSuccessMessage('Failed to add watermark to the file')
      setShowSuccess(true)
    } finally {
      setIsWatermarking(false)
    }
  }

  // Add this handler function with other handlers
  const handleGenerateArt = async () => {
    if (!aiPrompt) return

    setIsGenerating(true)
    setGeneratedImageUrl('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imagePrompt: aiPrompt })
      })

      const res = await response.json()

      if (res.data.url) {
        setGeneratedImageUrl(res.data.url)
      } else {
        throw new Error('No image URL in response')
      }
    } catch (error) {
      console.error('Error generating cover art:', error)
      setSuccessMessage('Failed to generate cover art')
      setShowSuccess(true)
      setOpenAIDialog(false)
    } finally {
      setIsGenerating(false)
    }
  }

  // Add new handler for accepting the generated image
  const handleAcceptImage = async () => {
    console.log('generatedImageUrl', generatedImageUrl)
    console.log('recordData', recordData)
    if (!generatedImageUrl || !recordData) return

    setIsUploading(true)

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
      const imageFile = new File([imageBlob], 'cover-art.jpg', { type: 'image/jpeg' })

      // Upload to IPFS
      const uri = await upload({
        client,
        files: [imageFile]
      })

      console.log('uri', uri)

      // Update database
      const db = await getDb()

      const updatedRecord = {
        ...recordData,
        coverImage: uri
      }

      const dbResult = await db.update(new RecordId('media', `${recordId}`), updatedRecord)

      console.log('dbResult', dbResult)

      // Update local state
      setRecordData(updatedRecord)
      setImageUrl(resolveScheme({ client, uri }))

      setSuccessMessage('Cover art updated successfully!')
      setShowSuccess(true)
      setOpenAIDialog(false)
    } catch (error) {
      console.error('Error saving generated image:', error)
      setSuccessMessage('Failed to save generated image')
      setShowSuccess(true)
    } finally {
      setIsUploading(false)
    }
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
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      <Card>
        {isMinting && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 1000,
              gap: 2
            }}
          >
            <CircularProgress size={60} />
            <Box sx={{ color: 'white', mt: 2 }}>
              {recordData?.transactionHash ? 'Awarding TAGZ...' : 'Minting Record...'}
            </Box>
          </Box>
        )}
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
            {/* Left side image column - updated order */}
            <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 1 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <Box
                  sx={{
                    width: '100%',
                    minHeight: 300,
                    border: theme => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isEditing ? 'pointer' : 'default',
                    '&:hover': isEditing ? { opacity: 0.8 } : {}
                  }}
                  onClick={() => {
                    if (isEditing) {
                      document.getElementById('cover-image-input')?.click()
                    }
                  }}
                >
                  {imageUrl ? (
                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <img
                        src={imageUrl}
                        alt='Cover Art'
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: '100%',
                          display: 'block'
                        }}
                      />
                      {/* Only show the Generate with AI button if we're editing and there's no image */}
                      {isEditing && (
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            display: 'flex',
                            gap: 1,
                            zIndex: 1
                          }}
                        >
                          <Button
                            variant='contained'
                            size='small'
                            onClick={e => {
                              e.stopPropagation()
                              setOpenAIDialog(true)
                            }}
                          >
                            Generate with AI
                          </Button>
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center',
                        width: '100%',
                        height: '300px'
                      }}
                    >
                      <Typography>No cover image</Typography>
                      <Button
                        variant='contained'
                        onClick={e => {
                          e.stopPropagation()
                          setOpenAIDialog(true)
                        }}
                      >
                        Generate with AI
                      </Button>
                    </Box>
                  )}
                </Box>
                {isEditing && (
                  <>
                    <input
                      type='file'
                      id='cover-image-input'
                      hidden
                      accept='image/*'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files?.[0]

                        if (file) {
                          const reader = new FileReader()

                          reader.onload = e => {
                            setImageUrl(e.target?.result as string)
                            setRecordData({ ...recordData!, coverImage: e.target?.result as string })
                          }

                          reader.readAsDataURL(file)
                        }
                      }}
                    />
                    <CustomTextField
                      fullWidth
                      label='Image URL'
                      value={recordData?.coverImage || ''}
                      onChange={e => {
                        setRecordData({ ...recordData!, coverImage: e.target.value })
                        setImageUrl(e.target.value)
                      }}
                    />
                  </>
                )}
              </Box>
            </Grid>

            {/* Right side form fields - updated order */}
            <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 2 } }}>
              <Grid container spacing={6}>
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
                <Grid item xs={12}>
                  {recordData.transactionHash && (
                    <CustomTextField
                      fullWidth
                      label='Transaction Hash'
                      value={recordData.transactionHash}
                      disabled
                      InputProps={{
                        endAdornment: (
                          <Button
                            component='a'
                            href={`${AMOY_EXPLORER}${recordData.transactionHash}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            size='small'
                          >
                            View on Explorer
                          </Button>
                        )
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'space-between' }}>
          {recordData.status === 'minted' ? (
            <>
              <Box sx={{ p: 2 }}>
                <Chip label='MINTED' color='success' />
              </Box>
              <Box sx={{ p: 2 }}>
                <Button variant='contained' onClick={handleWatermark} disabled={isWatermarking}>
                  {isWatermarking ? 'Processing...' : 'Add Watermark'}
                </Button>
              </Box>
            </>
          ) : (
            <>
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
                  <Button variant='contained' color='secondary' onClick={handleMint}>
                    Mint Media
                  </Button>
                </>
              )}
            </>
          )}
        </CardActions>
      </Card>

      <Dialog open={openAIDialog} onClose={() => setOpenAIDialog(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Generate Cover Art with AI</DialogTitle>
        <DialogContent>
          {!generatedImageUrl ? (
            // Existing prompt input view
            <>
              <DialogContentText sx={{ mb: 2 }}>
                Describe the cover art you'd like to generate. For best results, be specific about:
              </DialogContentText>

              <Box sx={{ mb: 3 }}>
                <ul>
                  <li>Style (e.g., photographic, illustration, abstract)</li>
                  <li>Colors and mood</li>
                  <li>Main elements or subjects</li>
                  <li>Composition and layout</li>
                </ul>

                <DialogContentText sx={{ mt: 2 }}>
                  Example: "A dreamy watercolor illustration of a sunset over mountains, using purple and orange tones,
                  with musical notes floating in the sky"
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
              />
            </>
          ) : (
            // Generated image preview
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
            }}
            disabled={isGenerating || isUploading}
          >
            Cancel
          </Button>
          {!generatedImageUrl ? (
            <Button onClick={handleGenerateArt} variant='contained' disabled={!aiPrompt || isGenerating}>
              {isGenerating ? 'Generating...' : 'Generate'}
            </Button>
          ) : (
            <>
              <Button onClick={() => setGeneratedImageUrl('')} disabled={isUploading}>
                Try Again
              </Button>
              <Button onClick={handleAcceptImage} variant='contained' disabled={isUploading}>
                {isUploading ? 'Saving...' : 'Use This Image'}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity='success' onClose={() => setShowSuccess(false)}>
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default RecordDetails
