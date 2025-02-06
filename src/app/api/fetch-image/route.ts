import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { imageUrl } = await req.json()

    // Fetch the image
    const imageResponse = await fetch(imageUrl)

    if (!imageResponse.ok) {
      throw new Error('Failed to fetch image')
    }

    // Get the image data as blob
    const imageBlob = await imageResponse.blob()

    // Return the image data
    return new NextResponse(imageBlob, {
      headers: {
        'Content-Type': imageBlob.type
      }
    })
  } catch (error) {
    console.error('Error fetching image:', error)

    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 })
  }
}
