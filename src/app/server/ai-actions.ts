'use server'

import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY
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
