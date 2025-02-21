'use client'

import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import CustomTextField from '@core/components/mui/TextField'

import { generateSong, checkGenerationStatus } from '@/app/server/ai-actions'
import { genreTags } from '@/data/genreTags'
import tags from '@/data/top_200_tags.json'

interface FormData {
  genre_description: string[]
  instrument_description: string[]
  mood_description: string[]
  gender_description: string[]
  timbre_description: string[]
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
  genre_description: [],
  instrument_description: [],
  mood_description: [],
  gender_description: [],
  timbre_description: [],
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const containsText = (text: string, searchText: string) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1

export default function GenerateForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [statusUpdates, setStatusUpdates] = useState<StatusUpdate[]>([])
  const [currentStatus, setCurrentStatus] = useState<string>('')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [elapsedTime, setElapsedTime] = useState<string>('0:00')
  const [predictionId, setPredictionId] = useState<string | null>(null)
  const [searchText, setSearchText] = useState('')

  const displayedGenres = genreTags.filter(genre => containsText(genre, searchText))

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

  const handleGenreChange = (event: any) => {
    const {
      target: { value }
    } = event

    setFormData(prev => ({
      ...prev,
      genre_description: typeof value === 'string' ? value.split(',') : value
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
    <Card>
      <CardHeader title='Generate AI Song' />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Music Characteristics Section */}
            <Grid item xs={12}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Music Characteristics
              </Typography>
            </Grid>

            {/* Genre Selection */}
            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                id='genre-description'
                options={tags.genre}
                value={formData.genre_description}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    genre_description: newValue
                  }))
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    label='Genres'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <i className='tabler-music' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip {...getTagProps({ index })} key={option} label={option} size='small' />
                  ))
                }
              />
            </Grid>

            {/* Instruments Selection */}
            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                id='instrument-description'
                options={tags.instrument}
                value={formData.instrument_description}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    instrument_description: newValue
                  }))
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    label='Instruments'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <i className='tabler-violin' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip {...getTagProps({ index })} key={option} label={option} size='small' />
                  ))
                }
              />
            </Grid>

            {/* Mood Selection */}
            <Grid item xs={12} md={4}>
              <Autocomplete
                multiple
                id='mood-description'
                options={tags.mood}
                value={formData.mood_description}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    mood_description: newValue
                  }))
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    label='Mood'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <i className='tabler-mood-happy' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip {...getTagProps({ index })} key={option} label={option} size='small' />
                  ))
                }
              />
            </Grid>

            {/* Gender Selection */}
            <Grid item xs={12} md={4}>
              <Autocomplete
                multiple
                id='gender-description'
                options={tags.gender}
                value={formData.gender_description}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    gender_description: newValue
                  }))
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    label='Voice Type'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <i className='tabler-user' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip {...getTagProps({ index })} key={option} label={option} size='small' />
                  ))
                }
              />
            </Grid>

            {/* Timbre Selection */}
            <Grid item xs={12} md={4}>
              <Autocomplete
                multiple
                id='timbre-description'
                options={tags.timbre.map(t => t.replace(' vocal', ''))}
                value={formData.timbre_description}
                onChange={(_, newValue) => {
                  setFormData(prev => ({
                    ...prev,
                    timbre_description: newValue
                  }))
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    label='Voice Character'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <i className='tabler-wave-sine' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip {...getTagProps({ index })} key={option} label={option} size='small' />
                  ))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Rest of the form remains the same */}
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                multiline
                rows={4}
                id='lyrics'
                name='lyrics'
                label='Lyrics'
                value={formData.lyrics}
                onChange={handleChange}
                placeholder='Enter your lyrics here...'
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-text-plus' />
                    </InputAdornment>
                  )
                }}
                sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                id='num_segments'
                name='num_segments'
                label='Number of Segments'
                value={formData.num_segments}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-separator' />
                    </InputAdornment>
                  )
                }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                id='max_new_tokens'
                name='max_new_tokens'
                label='Max New Tokens'
                value={formData.max_new_tokens}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='tabler-tokens' />
                    </InputAdornment>
                  )
                }}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth type='submit' variant='contained' disabled={isLoading} sx={{ height: '3rem' }}>
                {isLoading ? 'Generating...' : 'Generate Song'}
              </Button>
            </Grid>

            {audioUrl && (
              <Grid item xs={12}>
                <Card variant='outlined' sx={{ bgcolor: 'action.hover' }}>
                  <CardContent>
                    <h3 className='font-semibold mb-3'>Generated Song</h3>
                    <div className='space-y-2'>
                      <audio controls className='w-full' src={audioUrl}>
                        Your browser does not support the audio element.
                      </audio>
                      <Button
                        component='a'
                        href={audioUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='text'
                        startIcon={<i className='tabler-download' />}
                      >
                        Download Audio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </form>
      </CardContent>

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
    </Card>
  )
}
