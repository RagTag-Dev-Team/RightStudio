// React Imports
import { useState } from 'react'

import { upload } from 'thirdweb/storage'

// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'
import { parseBlob } from 'music-metadata-browser'

// Icon Imports
import { useDropzone } from 'react-dropzone'

import { client } from '@/libs/thirdwebclient'

type FileProp = {
  name: string
  type: string
  size: number
}

interface FileUploaderRestrictionsProps {
  onMetadata?: (metadata: {
    title?: string
    artist?: string
    album?: string
    filetype?: string
    filesize?: string
    duration?: string
  }) => void
}

const FileUploaderRestrictions = ({ onMetadata }: FileUploaderRestrictionsProps) => {
  // States
  const [files, setFiles] = useState<File[]>([])

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'audio/*': ['.wav', '.mp3']
    },
    onDrop: async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))

      const file = acceptedFiles[0]

      // read the metadata of the first file (since maxFiles is 1)
      const metadata = await parseBlob(acceptedFiles[0])

      // Format metadata for the form
      if (onMetadata) {
        const formattedMetadata = {
          // Standard ID3v2.4 tags
          title: metadata.common.title || '', // TIT2
          artist: metadata.common.artist || '', // TPE1
          album: metadata.common.album || '', // TALB
          label: metadata.common.label || '', // TPUB
          releaseDate: metadata.common.date
            ? new Date(metadata.common.date.toString()) // Handle various date formats
            : null,

          // File information
          filetype: file.type,
          filesize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          duration: metadata.format.duration
            ? `${Math.floor(metadata.format.duration / 60)}:${Math.floor(metadata.format.duration % 60)
                .toString()
                .padStart(2, '0')}`
            : ''
        }

        onMetadata(formattedMetadata)
        console.log('Showing metadata', JSON.stringify(formattedMetadata, null, 2))
      }

      //console.log('Showing metadata', JSON.stringify(metadata, null, 2))
    },
    onDropRejected: () => {
      toast.error('You can only upload wav files that have been mastered', {
        autoClose: 3000
      })
    }
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

  const handleUploadFiles = async () => {
    // console.log('Uploading files', files)

    //upload files to IPFS
    const uris = await upload({
      client,
      files: [files[0]]
    })

    console.log('Uploaded files', uris)
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <>
      <div
        {...getRootProps({
          className: 'dropzone',
          style: { border: '2px dashed #000', padding: '20px', borderColor: 'rgb(225 222 245/0.12)' }
        })}
      >
        <input {...getInputProps()} />
        <div className='flex items-center flex-col'>
          <Avatar variant='rounded' className='bs-12 is-12 mbe-9'>
            <i className='tabler-upload' />
          </Avatar>
          <Typography variant='h4' className='mbe-2.5'>
            Drop files here or click to upload.
          </Typography>
          <Typography>Only audio files are with *.wav extension are allowed.</Typography>
          <Typography>Max 1 file.</Typography>
        </div>
      </div>
      {files.length ? (
        <>
          <List>{fileList}</List>
          <div className='buttons'>
            {/*
            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
              Remove All
            </Button>

            <Button variant='contained' onClick={handleUploadFiles}>
              Upload Files
            </Button>
            */}
          </div>
        </>
      ) : null}
    </>
  )
}

export default FileUploaderRestrictions
