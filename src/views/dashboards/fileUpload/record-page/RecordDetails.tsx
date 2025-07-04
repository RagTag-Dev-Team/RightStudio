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
import { resolveScheme, download } from 'thirdweb/storage'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { RecordId, StringRecordId } from 'surrealdb'

import { useActiveAccount } from 'thirdweb/react'

import type { ICertificateArg, ICertificateUpdateArg } from '@mentaport/certificates'
import { ContentFormat, AITrainingMiningInfo, ICertificate } from '@mentaport/certificates'

import { client } from '@/libs/thirdwebclient'
import CustomTextField from '@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

import {
  CreateCertificate,
  Verify,
  GetCertificates,
  GetContracts,
  UpdateCertificate
} from '@/libs/mentaport/actions/mentaport/index'

// Database Import
import { getDb } from '@/libs/surreal'

// Add import for useSession

// Add this constant at the top with other constants
const AMOY_EXPLORER = 'https://amoy.polygonscan.com/tx/'

import { mintRecord, awardTagz, updateRecord } from '@/app/server/data-actions'

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

const newCert: ICertificateArg = {
  contractId: process.env.MENTAPORT_CONTRACT_ID!, // "your-contract-id",
  aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
  contentFormat: ContentFormat.png, // will be updated when file is selected
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

const updateCert: ICertificateUpdateArg = {
  contractId: process.env.NEXT_PUBLIC_CONTRACT_ID || '',
  certId: '',
  aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
  contentFormat: ContentFormat.png,
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

  const [certId, setCertId] = useState<string>('')

  const [contractId, setContractId] = useState<string>(process.env.NEXT_PUBLIC_CONTRACT_ID!)

  const [onlyActiveContracts, setOnlyActiveContracts] = useState<boolean>(true)

  const [newCertificateArgs, setNewCertificateArgs] = useState<ICertificateArg>({ ...newCert })

  useEffect(() => {
    const fetchData = async () => {
      const db = await getDb()

      // Fetch record data
      console.log('Fetching record:', recordId)
      const record = await db.select<RecordDataType>(new StringRecordId(`media:${recordId}`))

      console.log('record', record)

      if (record) {
        const recordWithDate: RecordDataType = {
          ...record,
          releaseDate: record.releaseDate ? new Date(record.releaseDate) : null
        }

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
      const updatedRecord = {
        id: recordId,
        title: recordData.title,
        artist: recordData.artist,
        album: recordData.album,
        filetype: recordData.filetype,
        filesize: recordData.filesize,
        duration: recordData.duration,
        label: recordData.label,
        releaseDate: recordData.releaseDate?.toISOString() || null,
        ipfsUrl: recordData.ipfsUrl,
        status: recordData.status || 'unminted',
        uploadedAt: recordData.uploadedAt,
        coverImage: recordData.coverImage,
        owner: recordData.owner,
        transactionHash: recordData.transactionHash,
        watermarkedUrl: recordData.watermarkedUrl,
        tokenId: recordData.tokenId,
        dateMinted: recordData.dateMinted?.toISOString() || null,
        certificateId: recordData.certificateId,
        certificateProjectId: recordData.certificateProjectId
      }

      await updateRecord(recordId, updatedRecord)
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

      console.log('Account', activeAccount)

      // Use mintRecord action instead of API call
      const queueId = await mintRecord(metadata, activeAccount.address)

      // Update record status in database
      const updatedRecord = {
        id: recordId,
        title: recordData.title,
        artist: recordData.artist,
        album: recordData.album,
        filetype: recordData.filetype,
        filesize: recordData.filesize,
        duration: recordData.duration,
        label: recordData.label,
        releaseDate: recordData.releaseDate?.toISOString() || null,
        ipfsUrl: recordData.ipfsUrl,
        status: 'minted',
        uploadedAt: recordData.uploadedAt,
        coverImage: recordData.coverImage,
        owner: activeAccount.address,
        transactionHash: queueId,
        watermarkedUrl: recordData.watermarkedUrl,
        tokenId: recordData.tokenId,
        dateMinted: new Date().toISOString(),
        certificateId: recordData.certificateId,
        certificateProjectId: recordData.certificateProjectId
      }

      await updateRecord(recordId, updatedRecord)

      // Update local state
      setRecordData(prev =>
        prev
          ? {
              ...prev,
              status: 'minted',
              owner: activeAccount.address,
              transactionHash: queueId,
              dateMinted: new Date()
            }
          : null
      )
      setIsEditing(false)

      // Reward user with tagz using the action
      const rewardData = await awardTagz(activeAccount.address, '100.0')

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
      // Download the file from IPFS
      const fileResponse = await download({
        client,
        uri: recordData.ipfsUrl
      })

      if (!fileResponse.ok) {
        throw new Error('Failed to download file from IPFS')
      }

      // Get the file blob
      const fileBlob = await fileResponse.blob()

      // Create payload with record data and file blob
      const payload = {
        recordId,
        title: recordData.title,
        artist: recordData.artist,
        album: recordData.album,
        fileType: recordData.filetype,
        fileBlob: await fileBlob.arrayBuffer() // Convert blob to array buffer for JSON
      }

      // Send to watermark API
      const response = await fetch('/api/watermark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const { status, data: resData, message } = response

      if (status && resData) {
        console.log('resData', resData)
        console.log('message', message)
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
                  s
                >
                  {imageUrl ? (
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
                  ) : (
                    <Box sx={{ textAlign: 'center', p: 3 }}>
                      <span>No cover image</span>
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
