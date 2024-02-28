// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme, hexToRgb } from '@mui/material/styles'

const data = ['light', 'main', 'dark']

const Warning = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader title='Warning' />
      <CardContent className='flex flex-col gap-2'>
        {data.map((item) => (
          <Box
            key={item}
            className='color-wrapper'
            sx={{
              backgroundColor: theme.palette.warning[item],
              color: theme.palette.getContrastText(theme.palette.warning[item])
            }}
          >
            <Typography variant='h6'>{item}</Typography>
            <div className='color-text'>
              <Typography>{theme.palette.warning[item]}</Typography>
              <Typography>{hexToRgb(theme.palette.warning[item])}</Typography>
            </div>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default Warning
