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

  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <i className='tabler-file-description' />
    }
  }

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)

    setFiles([...filtered])
  }

  const fileList = files.map((file: FileProp) => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <i className='tabler-x text-xl' />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

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
