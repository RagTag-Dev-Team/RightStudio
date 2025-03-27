import { NextResponse } from 'next/server'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '6mb' // Slightly larger than chunk size to account for overhead
    }
  }
}

const UPLOAD_DIR = '/tmp' // Temporary directory for chunks

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const chunk = formData.get('file') as File
    const chunkIndex = formData.get('chunk_index')
    const totalChunks = formData.get('total_chunks')
    const fileSize = formData.get('file_size')
    const certificateArgs = JSON.stringify(formData.get('certificate_args'))

    // Store chunk in temporary storage
    // You might want to use a service like S3 for production
    const chunkPath = `${UPLOAD_DIR}/chunk_${chunkIndex}`
    await Bun.write(chunkPath, chunk)

    // If this is the last chunk, combine all chunks and process
    if (Number(chunkIndex) === Number(totalChunks) - 1) {
      const completeFile = await combineChunks(totalChunks, UPLOAD_DIR)

      // Create certificate with complete file
      const certFormData = new FormData()
      certFormData.append('file', completeFile)

      const cert = await CreateCertificate(certFormData, JSON.parse(certificateArgs))

      // Clean up chunks
      cleanupChunks(totalChunks, UPLOAD_DIR)

      return NextResponse.json(cert)
    }

    return NextResponse.json({ success: true, message: 'Chunk uploaded successfully' })
  } catch (error) {
    console.error('Error handling chunk upload:', error)
    return NextResponse.json({ success: false, error: 'Failed to process chunk' }, { status: 500 })
  }
}

async function combineChunks(totalChunks: number, uploadDir: string): Promise<File> {
  // Implement chunk combination logic
  // Return combined file
}

function cleanupChunks(totalChunks: number, uploadDir: string) {
  // Implement cleanup logic for temporary chunks
}
