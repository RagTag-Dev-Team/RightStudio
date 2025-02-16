'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { resolveScheme } from 'thirdweb/storage'

import { useKeenSlider } from 'keen-slider/react'

import { Card, CardHeader, CardContent, Button, Grid, Typography, Box, CircularProgress } from '@mui/material'

import { client } from '@/libs/thirdwebclient'

import AppKeenSlider from '@/libs/styles/AppKeenSlider'

import '@assets/iconify-icons/generated-icons.css'

import { getLatestTracks } from '@/app/server/data-actions'

// Define the Track interface
interface Track {
  id: string
  title: string
  artist: string
  coverImage: string
  uploadedAt: string
}

const LatestSlider = () => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16
    },
    loop: true,
    drag: true,
    defaultAnimation: {
      duration: 1000
    }
  })

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next()
      }
    }, 5000) // Change slide every 5 seconds

    // Cleanup on unmount
    return () => {
      clearInterval(timer)
    }
  }, [instanceRef])

  // Updated fetch logic
  useEffect(() => {
    const fetchLatestTracks = async () => {
      try {
        const latestTracks = await getLatestTracks(10)

        //  console.log(latestTracks)

        const resolvedTracks = await Promise.all(
          latestTracks.map(async (track: Track) => {
            if (!track.coverImage) {
              return {
                ...track,
                coverImage: '/images/icons/default-cover-art.jpg'
              }
            }

            const coverImageUrl = await resolveScheme({
              client,
              uri: `${track.coverImage}`
            })

            return {
              ...track,
              coverImage: coverImageUrl
            }
          })
        )

        setTracks(resolvedTracks)
      } catch (error) {
        console.error('Error fetching tracks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestTracks()
  }, [])

  if (loading) {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader title='Latest Tracks' />
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3
          }}
        >
          <CircularProgress size={60} />
          <Typography variant='body1' color='text.secondary'>
            Loading latest tracks...
          </Typography>
        </CardContent>
      </Card>
    )
  }

  if (tracks.length === 0) {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader title='Latest Tracks' />
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3
          }}
        >
          <Typography variant='h6' color='text.secondary'>
            No tracks found
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Start creating new tracks to see them here!
          </Typography>
          <Link href='/media/library' passHref>
            <Button variant='contained' endIcon={<i className='tabler-plus' />}>
              Create New Track
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader title='Latest Tracks' />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 4 }}>
        <AppKeenSlider sx={{ flex: 1 }}>
          <div ref={sliderRef} className='keen-slider h-full'>
            {tracks.map((track, index) => (
              <div key={track.id} className='keen-slider__slide'>
                <Grid container spacing={4} alignItems='center' sx={{ height: '100%' }}>
                  {/* Left side - Image */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: 1,
                        overflow: 'hidden',
                        width: '75%',
                        paddingTop: '75%',
                        marginRight: 'auto'
                      }}
                    >
                      <Image
                        src={track.coverImage}
                        alt={`${track.title} cover art`}
                        fill
                        sizes='(max-width: 768px) 75vw, 300px'
                        className='rounded-lg object-cover'
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        priority={index === 0}
                      />
                    </Box>
                  </Grid>

                  {/* Right side - Details */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div>
                        <Typography variant='h5' gutterBottom noWrap>
                          {track.title}
                        </Typography>
                        <Typography variant='subtitle1' color='text.secondary' gutterBottom noWrap>
                          {track.artist}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Mined on {new Date(track.uploadedAt).toLocaleDateString()}
                        </Typography>
                      </div>

                      <Box sx={{ mt: 'auto' }}>
                        <Link href={`/dashboards/record/${track.id.replace('media:', '')}`} passHref>
                          <Button variant='contained' endIcon={<i className='tabler-arrow-badge-right' />}>
                            View Track Details
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        </AppKeenSlider>
      </CardContent>
    </Card>
  )
}

export default LatestSlider
