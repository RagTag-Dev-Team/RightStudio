'use server'

import Replicate from 'replicate'
import { OpenAI } from 'openai'

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
    // Add timeout promise
    const timeoutDuration = 25000 // 25 seconds

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), timeoutDuration)
    })

    // Enhance the prompt to encourage faster generation
    const optimizedPrompt = `Create a simple album cover art: ${imagePrompt}. Focus on essential elements only.`

    // Race between the OpenAI request and timeout
    const response = await Promise.race([
      openai.images.generate({
        model: 'dall-e-3',
        prompt: optimizedPrompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard', // Use standard quality instead of HD for faster generation
        style: 'natural' // This tends to be faster than 'vivid'
      }),
      timeoutPromise
    ])

    if (!response || !('data' in response)) {
      throw new Error('Failed to generate image')
    }

    console.log('Generated image URL:', response.data[0].url)

    return response.data[0].url
  } catch (error) {
    console.error('Cover art generation error:', error)

    if (error instanceof Error) {
      if (error.message === 'Request timeout') {
        throw new Error('Image generation timed out. Please try again.')
      }

      // Handle rate limiting
      if (error.message.includes('Rate limit')) {
        throw new Error('Too many requests. Please wait a moment and try again.')
      }
    }

    throw new Error('Failed to generate image. Please try again later.')
  }
}
