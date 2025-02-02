// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import { useDropzone } from 'react-dropzone'

type FileProp = {
  name: string
  type: string
  size: number
}

interface CovertArtUploaderProps {
  disabled?: boolean
  onImageSelect: (file: File) => void
}

const CovertArtUploader = ({ disabled, onImageSelect }: CovertArtUploaderProps) => {
  // States
  const [files, setFiles] = useState<File[]>([])

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 2000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onImageSelect(acceptedFiles[0])
      }
    },
    onDropRejected: () => {
      toast.error('Image must be less than 2 MB in size.', {
        autoClose: 3000
      })
    },
    disabled
  })

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <div className='flex items-center flex-col'>
        <Avatar variant='rounded' className='bs-12 is-12 mbe-9'>
          <i className='tabler-upload' />
        </Avatar>
        <Typography variant='h4' className='mbe-2.5'>
          Upload Cover Art
        </Typography>
        <Typography>Add album artwork to make your music stand out</Typography>
        <Typography>Allowed *.jpeg, *.jpg, *.png</Typography>
      </div>
    </div>
  )
}

export default CovertArtUploader
