import { NextResponse } from 'next/server'

import Queue from 'bull'

import { RecordId } from 'surrealdb'

import { getDb } from '@/libs/surreal'
import { CreateCertificate, GetDownloadUrl } from '@/app/actions/mentaport/index'

// Initialize Redis queue
const watermarkQueue = new Queue('watermark-queue', process.env.REDIS_URL || '')

export async function POST(req: Request) {
  try {
    const { recordId, ipfsUrl, certificateArgs, walletAddress } = await req.json()

    // Add job to queue
    const job = await watermarkQueue.add({
      recordId,
      ipfsUrl,
      certificateArgs,
      walletAddress
    })

    return NextResponse.json({ jobId: job.id })
  } catch (error) {
    console.error('Failed to create watermark job:', error)
    
return NextResponse.json({ error: 'Failed to start watermarking process' }, { status: 500 })
  }
}
