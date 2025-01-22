'use client'

// React Imports
import { useState } from 'react'

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

import { getContract, defineChain, prepareContractCall, sendTransaction } from 'thirdweb'

// Get Session
import { getSession } from 'next-auth/react'

import { client } from '@/libs/thirdwebclient'

const assetcontract = getContract({
  client,
  chain: defineChain(80002),
  address: '0xAdb629cd79CabC7cB33ff5219716AE24Cb21437E'
})

const tagzcontract = getContract({
  client,
  chain: defineChain(80002),
  address: '0xAdb629cd79CabC7cB33ff5219716AE24Cb21437E'
})

// import InputAdornment from '@mui/material/InputAdornment'
// import IconButton from '@mui/material/IconButton'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import FileUploaderRestrictions from '@views/dashboards/fileUpload/form-layouts/FileUploaderRestrictions.tsx'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type FormDataType = {
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: Date | null
}

// If a file is dropped on the FileUploaderRestrictions component, we need to store the metadata in the database and populate the form with the metadata.

const FormLayoutsSeparator = () => {
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

  const handleMetadata = (metadata: Partial<FormDataType>) => {
    console.log('Metadata received:', metadata)
    setFormData(prevData => ({
      ...prevData,
      ...metadata
    }))
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
    console.log(JSON.stringify(formData, null, 2))
  }

  return (
    <Card>
      <CardHeader title='File Uploader' />
      <Divider />
      <form onSubmit={e => handleSubmit(e)}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <FileUploaderRestrictions onMetadata={handleMetadata} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' className='font-medium'>
                1. File Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Title'
                placeholder='Song Title'
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
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
                label='Label'
                type='string'
                placeholder='Label Name'
                value={formData.label}
                onChange={e => setFormData({ ...formData, label: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppReactDatepicker
                selected={formData.releaseDate}
                showYearDropdown
                showMonthDropdown
                onChange={(date: Date | null) => setFormData({ ...formData, releaseDate: date })}
                placeholderText='MM/DD/YYYY'
                customInput={<CustomTextField fullWidth label='Release Date' placeholder='MM-DD-YYYY' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
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
                label='File Size'
                placeholder='0 MB'
                value={formData.filesize}
                onChange={e => setFormData({ ...formData, filesize: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Duration'
                placeholder='0:00'
                value={formData.duration}
                onChange={e => setFormData({ ...formData, duration: e.target.value })}
              />
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
