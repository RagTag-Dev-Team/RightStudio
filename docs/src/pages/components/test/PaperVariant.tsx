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

const PaperVariant = () => {
  return (
    <>
      <Typography variant='h3'>Paper Variants</Typography>
      <div className='flex'>
        <Paper variant='outlined'>Default</Paper>
        <Paper variant='outlined' square>
          Square
        </Paper>
      </div>
    </>
  )
}

export default PaperVariant
