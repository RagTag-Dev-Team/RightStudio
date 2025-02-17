'use client'

import { useState, useEffect } from 'react'

import { generateSong, checkGenerationStatus } from '@/app/server/ai-actions'

interface FormData {
  genre_description: string
  lyrics: string
  num_segments: number
  max_new_tokens: number
}

interface StatusUpdate {
  status: string
  output: string[] | null // Replicate returns array of URLs
  error: string | null
  timestamp: string
  logs?: string | null // Add this for stream output
}

const initialFormData: FormData = {
  genre_description: '',
  lyrics: '',
  num_segments: 1,
  max_new_tokens: 200
}

const STORAGE_KEY = 'song_generation_state'

interface GenerationState {
  formData: FormData
  predictionId: string
  startTime: string
}

export default function GenerateForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [statusUpdates, setStatusUpdates] = useState<StatusUpdate[]>([])
  const [currentStatus, setCurrentStatus] = useState<string>('')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [elapsedTime, setElapsedTime] = useState<string>('0:00')
  const [predictionId, setPredictionId] = useState<string | null>(null)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isLoading && startTime) {
      intervalId = setInterval(() => {
        const elapsed = new Date().getTime() - startTime.getTime()
        const minutes = Math.floor(elapsed / 60000)
        const seconds = Math.floor((elapsed % 60000) / 1000)

        setElapsedTime(`${minutes}:${seconds.toString().padStart(2, '0')}`)
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isLoading, startTime])

  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY)

    if (savedState) {
      const state: GenerationState = JSON.parse(savedState)

      setFormData(state.formData)

      setIsLoading(true)
      setPredictionId(state.predictionId)
      setStartTime(new Date(state.startTime))
      setCurrentStatus('Resuming generation...')
    }
  }, [])

  const saveGenerationState = (predictionId: string, formData: FormData) => {
    const state: GenerationState = {
      formData,
      predictionId,
      startTime: new Date().toISOString()
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }

  const clearGenerationState = () => {
    localStorage.removeItem(STORAGE_KEY)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const pollStatus = async () => {
      if (!predictionId || !isLoading) return

      try {
        const { statusUpdate, completed, finalOutput } = await checkGenerationStatus(predictionId)

        setStatusUpdates(prev => [...prev, statusUpdate])
        setCurrentStatus(statusUpdate.status)

        if (statusUpdate.error) {
          clearGenerationState()
          throw new Error(statusUpdate.error)
        }

        if (completed && finalOutput) {
          setAudioUrl(finalOutput[0])
          setIsLoading(false)
          setPredictionId(null)
          clearGenerationState()
        } else {
          timeoutId = setTimeout(pollStatus, 2000)
        }
      } catch (error) {
        console.error('Error checking generation status:', error)
        setCurrentStatus(error instanceof Error ? error.message : 'Generation failed')
        setIsLoading(false)
        setPredictionId(null)
        clearGenerationState()
      }
    }

    if (predictionId) {
      pollStatus()
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [predictionId, isLoading])

  useEffect(() => {
    const terminalElement = document.getElementById('terminal-output')

    if (terminalElement) {
      terminalElement.scrollTop = terminalElement.scrollHeight
    }
  }, [statusUpdates])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusUpdates([])
    setCurrentStatus('Starting generation...')
    setAudioUrl(null)
    setStartTime(new Date())
    setElapsedTime('0:00')

    try {
      const id = await generateSong(formData)

      setPredictionId(id)
      saveGenerationState(id, formData)
    } catch (error) {
      console.error('Error starting generation:', error)
      setCurrentStatus(error instanceof Error ? error.message : 'Generation failed')
      setIsLoading(false)
      clearGenerationState()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: name === 'num_segments' || name === 'max_new_tokens' ? parseInt(value) : value
    }))
  }

  const getProgressValue = (status: string) => {
    switch (status) {
      case 'starting':
        return 25
      case 'processing':
        return 50
      case 'succeeded':
        return 100
      case 'failed':
      case 'canceled':
        return 0
      default:
        return 0
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='space-y-4 max-w-2xl mx-auto'>
        <div>
          <label htmlFor='genre_description' className='block mb-2'>
            Genre Description
          </label>
          <input
            type='text'
            id='genre_description'
            name='genre_description'
            value={formData.genre_description}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label htmlFor='lyrics' className='block mb-2'>
            Lyrics
          </label>
          <textarea
            id='lyrics'
            name='lyrics'
            value={formData.lyrics}
            onChange={handleChange}
            className='w-full p-2 border rounded h-32'
            required
          />
        </div>

        <div>
          <label htmlFor='num_segments' className='block mb-2'>
            Number of Segments
          </label>
          <input
            type='number'
            id='num_segments'
            name='num_segments'
            value={formData.num_segments}
            onChange={handleChange}
            min='1'
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label htmlFor='max_new_tokens' className='block mb-2'>
            Max New Tokens
          </label>
          <input
            type='number'
            id='max_new_tokens'
            name='max_new_tokens'
            value={formData.max_new_tokens}
            onChange={handleChange}
            min='1'
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400'
        >
          {isLoading ? 'Generating...' : 'Generate Song'}
        </button>

        {audioUrl && (
          <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
            <h3 className='font-semibold mb-3'>Generated Song</h3>
            <div className='space-y-2'>
              <audio controls className='w-full' src={audioUrl}>
                Your browser does not support the audio element.
              </audio>
              <a
                href={audioUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-blue-600 hover:text-blue-800 block mt-2'
              >
                Download Audio
              </a>
            </div>
          </div>
        )}
      </form>

      {isLoading && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl'>
            <div className='space-y-4'>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div
                  className='bg-blue-600 h-2.5 rounded-full transition-all duration-500'
                  style={{ width: `${getProgressValue(currentStatus)}%` }}
                ></div>
              </div>

              <div className='text-center space-y-1'>
                <p className='text-sm text-gray-600'>{currentStatus}</p>
                <p className='text-xs text-gray-500'>Elapsed Time: {elapsedTime}</p>
              </div>

              <p className='text-center text-sm text-amber-600 max-w-xs mx-auto'>
                Generation may take several minutes depending on the length of lyrics and number of segments.
              </p>

              <div className='bg-black rounded-lg p-4 font-mono text-sm'>
                <div id='terminal-output' className='text-green-400 whitespace-pre-wrap h-48 overflow-hidden'>
                  {statusUpdates.length > 0 && statusUpdates[statusUpdates.length - 1].logs ? (
                    <>
                      <span className='text-blue-400'>$</span> Generating song...{'\n'}
                      {statusUpdates[statusUpdates.length - 1].logs}
                    </>
                  ) : (
                    <>
                      <span className='text-blue-400'>$</span> Initializing generation...
                    </>
                  )}
                  {statusUpdates.length > 0 && statusUpdates[statusUpdates.length - 1].error && (
                    <div className='text-red-500 mt-2'>Error: {statusUpdates[statusUpdates.length - 1].error}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
