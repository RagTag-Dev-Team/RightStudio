// MUI Imports
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
      <Typography variant='h3'>Simple Paper</Typography>
      <div className='flex flex-wrap'>
        <Paper elevation={0}>
          <div className='flex flex-col items-center'>
            <Typography>elevation</Typography>
            <Typography variant='h6'>0</Typography>
          </div>
        </Paper>
        <Paper>
          <div className='flex flex-col items-center'>
            <Typography>elevation</Typography>
            <Typography variant='h6'>Basic</Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className='flex flex-col items-center'>
            <Typography>elevation</Typography>
            <Typography variant='h6'>3</Typography>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default PaperBasic
