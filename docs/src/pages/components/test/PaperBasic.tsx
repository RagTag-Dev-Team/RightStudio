// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiPaper from '@mui/material/Paper'
import type { PaperProps } from '@mui/material/Paper'

// Styled Paper component
const Paper = styled(MuiPaper)<PaperProps>(({ theme }) => ({
  width: 100,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  marginRight: theme.spacing(4)
}))

const PaperBasic = () => {
  return (
    <>
      <Typography variant='h6'>Simple Paper</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Paper elevation={0}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>elevation</Typography>
            <Typography variant='h6'>0</Typography>
          </Box>
        </Paper>
        <Paper>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>elevation</Typography>
            <Typography variant='h6'>Default</Typography>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>elevation</Typography>
            <Typography variant='h6'>3</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default PaperBasic
