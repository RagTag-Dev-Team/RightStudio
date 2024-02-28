// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const data = [
  {
    name: 'lighterOpacity',
    opacity: 0.08
  }, 
  {
    name: 'lightOpacity',
    opacity: 0.16
  }, 
  {
    name: 'mainOpacity',
    opacity: 0.24
  }, 
  {
    name: 'darkOpacity',
    opacity: 0.32
  }, 
  {
    name: 'darkerOpacity',
    opacity: 0.38
  }
]

const InfoOpacity = () => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader title='InfoOpacity' />
      <CardContent className='flex flex-col gap-2'>
        {data.map((item) => (
          <Box
            key={item.name}
            className='color-wrapper'
            sx={{
              backgroundColor: `rgb(${theme.palette.info.mainChannel} / ${item.opacity})`,
              color: theme.palette.text.primary
            }}
          >
            <Typography variant='h6'>{item.name}</Typography>
            <Typography>{`rgb(${theme.palette.info.mainChannel} / ${item.opacity})`}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default InfoOpacity
