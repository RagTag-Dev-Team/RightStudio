'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'
import { parseBlob } from 'music-metadata-browser'

// Icon Imports
import { useDropzone } from 'react-dropzone'

interface FileUploaderRestrictionsProps {
  onMetadata?: (
    metadata: {
      title?: string
      artist?: string
      album?: string
      label?: string
      releaseDate?: Date | null
      filetype?: string
      filesize?: string
      duration?: string
      coverImage?: string
    },
    file: File
  ) => void
}

const FileUploaderRestrictions = ({ onMetadata }: FileUploaderRestrictionsProps) => {
  // States
  const [, setFiles] = useState<File[]>([])

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'audio/*': ['.wav', '.mp3']
    },
    onDrop: async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))

      const file = acceptedFiles[0]

      try {
        // read the metadata of the first file (since maxFiles is 1)
        const metadata = await parseBlob(acceptedFiles[0])

        //  console.log('Metadata:', metadata)

        // Format metadata for the form
        if (onMetadata) {
          const formattedMetadata = {
            // Standard ID3v2.4 tags
            title: metadata.common.title || '',
            artist: metadata.common.artist || '',
            album: metadata.common.album || '',
            label: Array.isArray(metadata.common.label) ? metadata.common.label[0] || '' : metadata.common.label || '',
            releaseDate: metadata.common.date ? new Date(metadata.common.date.toString()) : null,

            // Add cover art if available
            coverImage: metadata.common.picture?.[0]
              ? `data:${metadata.common.picture[0].format};base64,${metadata.common.picture[0].data.toString('base64')}`
              : undefined,

            // File information
            filetype: file.type,
            filesize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
            duration: metadata.format.duration
              ? `${Math.floor(metadata.format.duration / 60)}:${Math.floor(metadata.format.duration % 60)
                  .toString()
                  .padStart(2, '0')}`
              : ''
          }

          // Pass both metadata and file to parent component
          onMetadata(formattedMetadata, file)
        }
      } catch (error) {
        console.error('Error reading file metadata:', error)
        toast.error('Error reading file metadata')
      }
    },
    onDropRejected: () => {
      toast.error('You can only upload wav files that have been mastered', {
        autoClose: 3000
      })
    }
  })

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
    </>
  )
}

export default FileUploaderRestrictions
