import Queue from 'bull'
import { OpenAI } from 'openai'

import redis from '@/libs/redis'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

interface ImageJobData {
  prompt: string
  userId: string // To identify who requested the image
  callbackUrl?: string // Optional webhook URL
}

export const imageQueue = new Queue<ImageJobData>('image-generation', {
  redis: process.env.REDIS_URL || 'redis://redis:6379',
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000
    },
    removeOnComplete: true,
    removeOnFail: false
  }
})

// Process queue jobs
imageQueue.process(async job => {
  const { prompt, userId } = job.data

  try {
    const optimizedPrompt = `Create a simple album cover art: ${prompt}. Focus on essential elements only.`

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: optimizedPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      style: 'natural'
    })



    if (!response.data?.[0]?.url) {
      throw new Error('No image URL generated')
    }

    // Store the result in Redis with 24h expiration
    try {
      await redis.set(
        `image:${job.id}`,
        JSON.stringify({
          url: response.data[0].url,
          userId,
          timestamp: new Date().toISOString()
        }),
        'EX',
        86400 // 24 hours
      )
      console.log(`Successfully stored image data in Redis for job ${job.id}`)
    } catch (redisError) {
      console.error(`Failed to store image data in Redis for job ${job.id}:`, redisError)

      // Don't throw here - we still want to return the image URL even if Redis storage fails
    }

    return { imageUrl: response.data[0].url }
  } catch (error) {
    console.error(`Job ${job.id} failed:`, error)
    throw error
  }
})
