import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { url } = await req.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the file from the S3 URL
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch file')
    }

    // Get the file as an ArrayBuffer
    const arrayBuffer = await response.arrayBuffer()

    // Return the file with appropriate headers
    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
        'Content-Disposition': response.headers.get('Content-Disposition') || 'attachment'
      }
    })
  } catch (error) {
    console.error('Error downloading file:', error)
    return NextResponse.json({ error: 'Failed to download file' }, { status: 500 })
  }
} 
