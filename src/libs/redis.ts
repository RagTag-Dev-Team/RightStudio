import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
  retryStrategy: times => {
    const delay = Math.min(times * 50, 2000)

    
return delay
  }
})

redis.on('error', err => {
  console.error('Redis connection error:', err)
})

redis.on('connect', () => {
  console.log('Successfully connected to Redis')
})

export default redis
