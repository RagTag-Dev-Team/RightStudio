// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

type FileProp = {
  name: string
  type: string
  size: number
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(15.75)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 160
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const FileUploaderSingle = () => {
  // States
  const [files, setFiles] = useState<File[]>([])

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })
  const theme = useTheme()

  const img = files.map((file: FileProp) => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file as any)} />
  ))

  return (
    <Box {...getRootProps({ className: 'dropzone' })} {...files.length && { sx: { height: 450 } }}>
      <input {...getInputProps()} />
      {files.length ? (
        img
      ) : (
        <div className='flex items-center flex-col md:flex-row'>
          <Img alt='Upload img' src='/assets/upload.png' />
          <div className='flex flex-col md:[text-align:unset] text-center'>
            <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>
            <Typography color='text.secondary'>
              Drop files here or click{' '}
              <a href='/' onClick={e => e.preventDefault()} className='text-textPrimary no-underline'>
                browse
              </a>{' '}
              thorough your machine
            </Typography>
          </div>
        </div>
      )}
    </Box>
  )
}

export default FileUploaderSingle
