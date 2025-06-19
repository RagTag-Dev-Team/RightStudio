import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { url } = await req.json()
    console.log('Received download request for URL:', url)

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the file from the S3 URL
    console.log('Fetching from S3...')
    const response = await fetch(url)
    console.log('S3 Response status:', response.status)
    console.log('S3 Response headers:', Object.fromEntries(response.headers.entries()))
    
    if (!response.ok) {
      console.error('S3 Response not OK:', response.status, response.statusText)
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`)
    }

    // Get the file as an ArrayBuffer
    console.log('Converting to ArrayBuffer...')
    const arrayBuffer = await response.arrayBuffer()
    console.log('ArrayBuffer size:', arrayBuffer.byteLength)

    // Return the file with appropriate headers
    const contentType = response.headers.get('Content-Type') || 'application/octet-stream'
    const contentDisposition = response.headers.get('Content-Disposition') || 'attachment'
    
    console.log('Sending response with headers:', {
      'Content-Type': contentType,
      'Content-Disposition': contentDisposition
    })

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': contentDisposition
      }
    })
  } catch (error) {
    console.error('Error downloading file:', error)
    return NextResponse.json({ 
      error: 'Failed to download file',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 
