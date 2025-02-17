'use client'

import { useState, useEffect, useRef } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Icon from '@mui/material/Icon'
import { styled } from '@mui/material/styles'

// Define the track info type
export interface TrackInfo {
  title: string
  artist: string
  coverArt: string
  audioUrl: string
  owner: string
}

interface FooterPlayerProps {
  isOpen: boolean
  onToggle: () => void
  currentTrack: TrackInfo | null
  isPlaying: boolean
  onPlayPause: () => void
  currentUser?: string
}

// Styled components
const FooterWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1000,
  boxShadow: theme.shadows[3]
}))

const PlayerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2)
}))

const FooterPlayer = ({ isOpen, onToggle, currentTrack, isPlaying, onPlayPause, currentUser }: FooterPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  console.log('currentTrack', currentTrack)

  const isOwner = currentUser && currentTrack?.owner === currentUser

  useEffect(() => {
    if (audioRef.current) {
      if (!isOwner) {
        // If not owner, limit playback to 30 seconds
        audioRef.current.addEventListener('timeupdate', () => {
          if (audioRef.current && audioRef.current.currentTime > 30) {
            audioRef.current.pause()
            onPlayPause()
          }
        })
      }
    }
  }, [isOwner, onPlayPause])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime)
      setDuration(audioRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!currentTrack) return null

  return (
    <FooterWrapper
      sx={{
        transform: 'translateY(0)',
        height: '100px',
        display: isOpen ? 'block' : 'none'
      }}
    >
      <PlayerContent>
        {/* Toggle button */}
        <IconButton onClick={onToggle} size='small'>
          <Icon>{isOpen ? 'expand_more' : 'expand_less'}</Icon>
        </IconButton>

        {/* Cover art */}
        <Box
          component='img'
          src={currentTrack.coverArt}
          alt={currentTrack.title}
          sx={{ width: 60, height: 60, borderRadius: 1 }}
        />

        {/* Track info */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
            Now Playing
          </Typography>
          <Typography variant='body2'>{currentTrack.title}</Typography>
          <Typography variant='caption' color='text.secondary'>
            {currentTrack.artist}
          </Typography>
        </Box>

        {/* Player controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant='caption'>{formatTime(progress)}</Typography>
          <IconButton onClick={onPlayPause}>
            <Icon>{isPlaying ? 'pause' : 'play_arrow'}</Icon>
          </IconButton>
          <Typography variant='caption'>{formatTime(duration)}</Typography>
        </Box>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src={currentTrack.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => onPlayPause()}
        />

        {/* Add preview indicator if not owner */}
        {!isOwner && (
          <Typography variant='caption' color='warning.main' sx={{ position: 'absolute', top: 8, right: 8 }}>
            Preview Mode (30s)
          </Typography>
        )}
      </PlayerContent>
    </FooterWrapper>
  )
}

export default FooterPlayer
