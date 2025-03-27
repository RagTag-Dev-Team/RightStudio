import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { recordId, ipfsUrl, certificateArgs, walletAddress } = await req.json()

    // Start the watermarking process with Mentaport directly
    // using their webhook functionality
    const response = await fetch('https://api.mentaport.com/v1/certificates', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MENTAPORT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...certificateArgs,
        fileUrl: ipfsUrl,
        webhookUrl: `${process.env.VERCEL_URL}/api/watermark/webhook`,
        metadata: {
          recordId,
          walletAddress
        }
      })
    })

    const { jobId } = await response.json()

    return NextResponse.json({ jobId })
  } catch (error) {
    console.error('Failed to start watermark process:', error)
    return NextResponse.json({ error: 'Failed to start watermarking process' }, { status: 500 })
  }
}
