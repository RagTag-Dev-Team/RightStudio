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
import { resolveScheme, upload, download } from 'thirdweb/storage'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import styled from '@emotion/styled'

import { RecordId, StringRecordId } from 'surrealdb'

import { useActiveAccount } from 'thirdweb/react'

import type { ICertificateArg } from '@mentaport/certificates'
import { ContentFormat, AITrainingMiningInfo } from '@mentaport/certificates'

import { useSession } from 'next-auth/react'

import { CreateCertificate, GetDownloadUrl } from '@/app/actions/mentaport/index'

import { client } from '@/libs/thirdwebclient'
import CustomTextField from '@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Database Import
import { getDb } from '@/libs/surreal'
import { getRecordById } from '@/app/server/data-actions'

// Add import for useSession

// Add this constant at the top with other constants
const AMOY_EXPLORER = 'https://amoy.polygonscan.com/tx/'

const newCert: ICertificateArg = {
  projectId: process.env.NEXT_PUBLIC_MENTAPORT_PROJECT_ID!, // "your-project-id",
  aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
  contentFormat: ContentFormat.mp3, // Default to mp3 for audio files
  name: 'Certificate Example',
  username: 'ExampleUsername',
  description: 'This certifcate was created to test the sdk example',
  usingAI: false,
  aiSoftware: '',
  aiModel: '',
  album: '',
  albumYear: '',
  city: '',
  country: ''
}

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
  watermarkedUrl?: string
}

// Add this type definition at the top of the file, after the imports

const getContentFormat = (fileType: string): ContentFormat => {
  // Extract the extension from the filetype (e.g., "audio/wav" -> "wav")
  const extension = fileType.split('/').pop()?.toLowerCase() || ''

  switch (extension) {
    case 'mp3':
      return ContentFormat.mp3
    case 'wav':
      return ContentFormat.wav
    case 'png':
      return ContentFormat.png
    case 'jpg':
    case 'jpeg':
      return ContentFormat.jpg
    case 'mp4':
      return ContentFormat.mp4
    default:
      console.warn(`Unrecognized file type: ${fileType}, defaulting to mp3`)

      return ContentFormat.mp3 // Default to mp3 if unknown
  }
}

// Update the StyledRibbon component with wider dimensions
const StyledRibbon = styled('div')`
  position: absolute;
  inset-inline-end: -5px;
  inset-block-start: 0;
  z-index: 2;
  overflow: hidden;
  inline-size: 100px;
  block-size: 100px;
  text-align: end;
  & span {
    font-size: 10px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    inline-size: 140px;
    display: block;
    background: #4caf50;
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    inset-block-start: 25px;
    inset-inline-end: -30px;
    & i {
      font-size: 1rem;
      vertical-align: middle;
      margin-inline-end: 4px;
    }
  }
`

// Add this type definition near other type definitions
type CertificateStatusStep = {
  statusMessage: string
  progress: number
}

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
  const { data: session } = useSession()

  const [successMessage, setSuccessMessage] = useState<string>('')

  // Add new state for watermark processing
  const [isWatermarking, setIsWatermarking] = useState(false)

  // Add these state variables with the other useState declarations
  const [openAIDialog, setOpenAIDialog] = useState(false)
  const [aiPrompt, setAiPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const [newCertificateArgs, setNewCertificateArgs] = useState<ICertificateArg>({ ...newCert }) // eslint-disable-line

  // Add these new state variables near the top with other useState declarations
  const [openWatermarkDialog, setOpenWatermarkDialog] = useState(false)
  const [watermarkProgress, setWatermarkProgress] = useState(0)
  const [watermarkStep, setWatermarkStep] = useState('')

  // Add this function near other handlers
  const updateWatermarkProgress = ({ statusMessage, progress }: CertificateStatusStep) => {
    setWatermarkStep(statusMessage)
    setWatermarkProgress(progress)
  }

  // Add this function near other handlers
  const handleOpenWatermarkDialog = () => {
    if (!recordData) return

    // Pre-populate the certificate args with record data
    setNewCertificateArgs({
      projectId: process.env.NEXT_PUBLIC_MENTAPORT_PROJECT_ID!,
      aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
      contentFormat: getContentFormat(recordData.filetype), // Set content format based on file type
      name: recordData.title,
      username: recordData.artist,
      description: `${recordData.artist} - ${recordData.album}`,
      album: recordData.album,
      albumYear: recordData.releaseDate ? recordData.releaseDate.getFullYear().toString() : '',
      usingAI: false,
      aiSoftware: '',
      aiModel: '',
      city: '',
      country: ''
    })

    setOpenWatermarkDialog(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await getRecordById(recordId)

        if (record) {
          const recordWithDate: RecordDataType = {
            ...record,
            status: record.status || 'unminted',
            releaseDate: record.releaseDate ? new Date(record.releaseDate) : null
          }

          setRecordData(recordWithDate)

          if (record.coverImage) {
            try {
              const url = resolveScheme({
                client,
                uri: record.coverImage
              })

              setImageUrl(url)
            } catch (error) {
              console.error('Error downloading cover image:', error)
            }
          }
        }
      } catch (error) {
        console.error('Error fetching record:', error)
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
      await updateRecord(recordId, recordData)
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving record:', error)
    }
  }

  const handleMint = async () => {
    const walletAddress = activeAccount?.address || session?.user?.wallet_address

    if (!walletAddress) {
      console.error('No wallet address found in session or active account')
      setSuccessMessage('Please connect your wallet to mint')
      setShowSuccess(true)

      return
    }

    setIsMinting(true)

    try {
      console.log('Minting record:', recordId)

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
        owner: walletAddress,
        transactionHash: transactionHash
      })

      //    console.log('updatedRecord', updatedRecord)

      // Update local state with the hash
      setRecordData(prev =>
        prev
          ? {
              ...prev,
              status: 'minted',
              owner: walletAddress,
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
        body: JSON.stringify({ walletAddress, amount: '100.0' })
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

  // Update the handleWatermark function
  const handleWatermark = async () => {
    const walletAddress = activeAccount?.address || session?.user?.wallet_address

    if (!recordData || !walletAddress) {
      console.error('No wallet address found in session or active account')
      setSuccessMessage('Please connect your wallet to add watermark')
      setShowSuccess(true)

      return
    }

    setIsWatermarking(true)
    updateWatermarkProgress({
      statusMessage: 'Initializing certificate creation...',
      progress: 10
    })

    try {
      // Download file from IPFS
      const fileUrl = await download({
        client,
        uri: recordData.ipfsUrl
      })

      updateWatermarkProgress({
        statusMessage: 'Downloading original file...',
        progress: 20
      })

      // Create a blob from the URL
      const response = await fetch(fileUrl.url)
      const blob = await response.blob()
      const file = new File([blob], recordData.title, { type: blob.type })

      // Extract file extension from the filetype or filename
      const fileExtension =
        recordData.filetype.split('/').pop()?.toLowerCase() || file.name.split('.').pop()?.toLowerCase() || ''

      // Use the helper function to determine the correct content format
      const contentFormat = getContentFormat(`audio/${fileExtension}`)

      console.log('File type:', recordData.filetype)
      console.log('File extension:', fileExtension)
      console.log('Content format:', contentFormat)

      // Create certificate args with all required fields
      const certificateArgs: ICertificateArg = {
        ...newCertificateArgs,
        projectId: process.env.NEXT_PUBLIC_MENTAPORT_PROJECT_ID!,
        contentFormat, // Set the content format based on file extension
        name: recordData.title || 'Untitled',
        username: recordData.artist || 'Unknown Artist',
        description: `${recordData.artist} - ${recordData.album}` || 'No description',
        album: recordData.album || '',
        albumYear: recordData.releaseDate ? recordData.releaseDate.getFullYear().toString() : ''
      }

      updateWatermarkProgress({
        statusMessage: 'Uploading file for certification...',
        progress: 30
      })

      // Create form data with file
      const formData = new FormData()

      formData.append('file', file)

      const createdCert = await CreateCertificate(formData, certificateArgs)

      if (!createdCert.status || !createdCert.data) {
        throw new Error(createdCert.message || 'Failed to create certificate')
      }

      // Get certificate details
      const { projectId, certId } = createdCert.data

      // Show the status message from the certificate creation
      if (createdCert.data.status) {
        updateWatermarkProgress({
          statusMessage: createdCert.data.status,
          progress: 50
        })
      }

      // Get the download URL for the watermarked file
      const downloadUrl = await GetDownloadUrl(projectId, certId)

      if (!downloadUrl.status || !downloadUrl.data) {
        throw new Error(downloadUrl.message || 'Failed to get download URL')
      }

      updateWatermarkProgress({
        statusMessage: 'Certificate created successfully!',
        progress: 100
      })

      // Update the record in the database with the certificate info
      const db = await getDb()

      const updatedRecord = {
        ...recordData,
        certificateId: certId,
        certificateProjectId: projectId,
        watermarkedUrl: downloadUrl.data
      }

      await db.update(new RecordId('media', recordId), updatedRecord)

      // Update local state
      setRecordData(updatedRecord)

      // Reward user with TAGZ
      const rewardResponse = await fetch('/api/reward', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          walletAddress,
          amount: '100.0'
        })
      })

      const rewardData = await rewardResponse.json()

      // Show confetti
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)

      // Update success message to include TAGZ reward
      setSuccessMessage(
        `File successfully watermarked! You've earned ${Number(rewardData.amount).toFixed(2)} TAGZ for watermarking this file.`
      )
    } catch (error) {
      console.error('Error during watermarking:', error)
      setSuccessMessage('Failed to add watermark to the file')
    } finally {
      setIsWatermarking(false)
      setOpenWatermarkDialog(false)
      setShowSuccess(true)
      setWatermarkProgress(0)
      setWatermarkStep('')
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

  // Add this function near other handler functions
  const handleDownloadWatermarked = async () => {
    if (!recordData?.watermarkedUrl) return

    try {
      // Fetch the watermarked file
      const response = await fetch(recordData.watermarkedUrl)
      const blob = await response.blob()

      // Create a download link
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url

      // Extract filename from the original title or use a default
      const filename = `${recordData.title || 'watermarked'}.${recordData.filetype.split('/')[1]}`

      a.download = filename
      document.body.appendChild(a)
      a.click()

      // Cleanup
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error downloading watermarked file:', error)
      setSuccessMessage('Failed to download watermarked file')
      setShowSuccess(true)
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
      <Card sx={{ position: 'relative' }}>
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
                    position: 'relative',
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
                      {recordData.watermarkedUrl && (
                        <StyledRibbon>
                          <span>
                            <i className='tabler-certificate' /> Certified
                          </span>
                        </StyledRibbon>
                      )}
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
                      {/* Only show the Generate with AI button if we're editing */}
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
              {/* Empty Box on the left for spacing */}
              <Box sx={{ flex: 1 }} />

              {/* Centered download button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                {!recordData.watermarkedUrl ? (
                  <Button variant='contained' onClick={handleOpenWatermarkDialog} disabled={isWatermarking}>
                    {isWatermarking ? 'Processing...' : 'Add Watermark'}
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    onClick={handleDownloadWatermarked}
                    startIcon={<i className='tabler-download' />}
                  >
                    Download Watermarked File
                  </Button>
                )}
              </Box>

              {/* Logo on the right */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, justifyContent: 'flex-end' }}>
                {recordData.watermarkedUrl && (
                  <>
                    <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                      Certified with
                    </Typography>
                    <img
                      src='/images/logos/mentaport_logo_black_small.svg'
                      alt='Mentaport'
                      style={{
                        height: '14px',
                        filter: 'brightness(0) invert(1) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))',
                        opacity: 1
                      }}
                    />
                  </>
                )}
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
              />
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

      <Dialog
        open={openWatermarkDialog}
        onClose={() => !isWatermarking && setOpenWatermarkDialog(false)}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center' }}>Certify Your Media File</DialogTitle>

        <DialogContent>
          {isWatermarking ? (
            <Box sx={{ width: '100%', mt: 2 }}>
              <Typography variant='body2' sx={{ mb: 1 }}>
                {watermarkStep}
              </Typography>
              <LinearProgress variant='determinate' value={watermarkProgress} />
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Name'
                  value={newCertificateArgs.name}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, name: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Username'
                  value={newCertificateArgs.username}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, username: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  multiline
                  rows={3}
                  label='Description'
                  value={newCertificateArgs.description}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, description: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  label='Content Format'
                  value={newCertificateArgs.contentFormat}
                  disabled
                  helperText='Automatically set based on file type'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Album'
                  value={newCertificateArgs.album}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, album: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Album Year'
                  value={newCertificateArgs.albumYear}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, albumYear: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='City'
                  value={newCertificateArgs.city}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, city: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Country'
                  value={newCertificateArgs.country}
                  onChange={e => setNewCertificateArgs(prev => ({ ...prev, country: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  select
                  fullWidth
                  label='AI Training/Mining Info'
                  value={newCertificateArgs.aiTrainingMiningInfo}
                  onChange={e =>
                    setNewCertificateArgs(prev => ({
                      ...prev,
                      aiTrainingMiningInfo: e.target.value as AITrainingMiningInfo
                    }))
                  }
                >
                  {Object.values(AITrainingMiningInfo).map(value => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newCertificateArgs.usingAI}
                      onChange={e =>
                        setNewCertificateArgs(prev => ({
                          ...prev,
                          usingAI: e.target.checked
                        }))
                      }
                    />
                  }
                  label='Using AI'
                />
              </Grid>

              {newCertificateArgs.usingAI && (
                <>
                  <Grid item xs={12} sm={6}>
                    <CustomTextField
                      fullWidth
                      label='AI Software'
                      value={newCertificateArgs.aiSoftware}
                      onChange={e =>
                        setNewCertificateArgs(prev => ({
                          ...prev,
                          aiSoftware: e.target.value
                        }))
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <CustomTextField
                      fullWidth
                      label='AI Model'
                      value={newCertificateArgs.aiModel}
                      onChange={e =>
                        setNewCertificateArgs(prev => ({
                          ...prev,
                          aiModel: e.target.value
                        }))
                      }
                    />
                  </Grid>
                </>
              )}
            </Grid>
          )}
        </DialogContent>

        <Divider sx={{ mt: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2
          }}
        >
          <DialogActions
            sx={{
              p: 0,
              flex: 1,
              justifyContent: 'center'
            }}
          >
            <Button onClick={() => setOpenWatermarkDialog(false)} disabled={isWatermarking}>
              Cancel
            </Button>
            <Button variant='contained' onClick={handleWatermark} disabled={isWatermarking}>
              Create Certificate
            </Button>
          </DialogActions>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              typography: 'caption',
              color: 'text.primary',
              fontWeight: 500
            }}
          >
            Powered By
            <img
              src='/images/logos/mentaport_logo_black_small.svg'
              alt='Mentaport'
              style={{
                height: '14px',
                filter: 'brightness(0) invert(1) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))',
                opacity: 1
              }}
            />
          </Box>
        </Box>
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
