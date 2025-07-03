import { NextResponse } from 'next/server'

import Queue from 'bull'

const watermarkQueue = new Queue('watermark-queue', process.env.REDIS_URL || '')

export async function GET(request: Request, { params }: { params: { jobId: string } }) {
  try {
    const job = await watermarkQueue.getJob(params.jobId)

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    const state = await job.getState()
    const progress = job.progress()

    if (state === 'completed') {
      return NextResponse.json({
        completed: true,
        data: job.returnvalue
      })
    }

    if (state === 'failed') {
      return NextResponse.json(
        {
          error: job.failedReason || 'Job failed'
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      completed: false,
      progress,
      message: `Job is ${state}`
    })
  } catch (error) {
    console.error('Failed to check job status:', error)
    
return NextResponse.json({ error: 'Failed to check status' }, { status: 500 })
  }
}
