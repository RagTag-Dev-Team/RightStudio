// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme, hexToRgb } from '@mui/material/styles'

const data = ['light', 'main', 'dark']

const Error = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader title='Error' />
      <CardContent className='flex flex-col gap-2'>
        {data.map((item) => (
          <Box
            key={item}
            className='color-wrapper'
            sx={{
              backgroundColor: theme.palette.error[item],
              color: theme.palette.getContrastText(theme.palette.error[item])
            }}
          >
            <Typography variant='h6'>{item}</Typography>
            <div className='color-text'>
              <Typography>{theme.palette.error[item]}</Typography>
              <Typography>{hexToRgb(theme.palette.error[item])}</Typography>
            </div>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default Error
