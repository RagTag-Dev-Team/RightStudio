// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme, hexToRgb } from '@mui/material/styles'

const data = ['light', 'main', 'dark']

const Primary = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader title='Primary' />
      <CardContent className='flex flex-col gap-2'>
        {data.map((item) => (
          <Box
            key={item}
            className='color-wrapper'
            sx={{
              backgroundColor: theme.palette.primary[item],
              color: theme.palette.getContrastText(theme.palette.primary[item])
            }}
          >
            <Typography variant='h6'>{item}</Typography>
            <div className='color-text'>
              <Typography>{theme.palette.primary[item]}</Typography>
              <Typography>{hexToRgb(theme.palette.primary[item])}</Typography>
            </div>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default Primary
