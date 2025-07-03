import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { url } = await req.json()

    console.log('Received download request for URL:', url)

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the file from the URL
    console.log('Fetching from URL...')

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RightStudio/1.0)'
      }
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText)
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`)
    }

    // Get the file as an ArrayBuffer
    console.log('Converting to ArrayBuffer...')
    const arrayBuffer = await response.arrayBuffer()

    console.log('ArrayBuffer size:', arrayBuffer.byteLength)

    if (arrayBuffer.byteLength === 0) {
      throw new Error('Downloaded file is empty')
    }

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
        'Content-Disposition': contentDisposition,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
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
