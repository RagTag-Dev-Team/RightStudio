'use server'

import Replicate from 'replicate'
import OpenAI from 'openai'

import { imageQueue } from './queues/imageQueue'
import redis from '@/libs/redis'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

interface GenerateSongInput {
  lyrics: string
  num_segments: number
  max_new_tokens: number
  genre_description: string
}

export interface StatusUpdate {
  status: string
  output: string[] | null
  error: string | null
  timestamp: string
  logs?: string | null
}

export async function generateSong(input: GenerateSongInput) {
  console.log(input)

  const prediction = await replicate.predictions.create({
    version: 'f45da0cfbe372eb9116e87a1e3519aceb008fd03b0d771d21fb8627bee2b4117',
    input
  })

  return prediction.id
}

export async function checkGenerationStatus(predictionId: string): Promise<{
  statusUpdate: StatusUpdate
  completed: boolean
  finalOutput?: string[]
}> {
  const latest = await replicate.predictions.get(predictionId)

  const statusUpdate = {
    status: latest.status,
    output: latest.output,
    error: latest.error,
    timestamp: new Date().toISOString(),
    logs: latest.logs
  }

  if (latest.status === 'failed' || latest.status === 'canceled') {
    throw new Error(`Generation ${latest.status}: ${latest.error}`)
  }

  return {
    statusUpdate: statusUpdate as StatusUpdate,
    completed: latest.status === 'succeeded',
    finalOutput: latest.status === 'succeeded' ? latest.output : undefined
  }
}

export async function generateCoverArt(imagePrompt: string) {
  if (!imagePrompt) {
    throw new Error('Missing required fields')
  }

  try {
    // Add job to queue
    console.log('image Promt', imagePrompt)

    const job = await imageQueue.add({
      prompt: imagePrompt,
      userId: 'user-id' // Replace with actual user ID if available
    })

    // Return job ID for status checking
    return {
      jobId: job.id,
      status: 'queued',
      message: 'Image generation has been queued'
    }
  } catch (error) {
    console.error('Failed to queue image generation:', error)
    throw new Error('Failed to start image generation')
  }
}

export async function checkImageStatus(jobId: string) {
  try {
    // Check Redis first for completed job
    const cachedResult = await redis.get(`image:${jobId}`)

    if (cachedResult) {
      return { status: 'completed', data: JSON.parse(cachedResult) }
    }

    // Check job status in queue
    const job = await imageQueue.getJob(jobId)

    if (!job) {
      throw new Error('Job not found')
    }

    const state = await job.getState()

    return {
      status: state,
      progress: job.progress(),
      message: state === 'failed' ? job.failedReason : undefined
    }
  } catch (error) {
    console.error('Failed to check image status:', error)
    throw new Error('Failed to check image status')
  }
}
