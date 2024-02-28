import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Color = () => {
  return (
    <Card>
      <CardHeader title='Color' />
      <CardContent className='flex flex-col gap-2'>
        <Typography color='primary.main'>Primary - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
        <Typography color='secondary.main'>Secondary - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
        <Typography color='error.main'>Error - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
        <Typography color='warning.main'>Warning - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
        <Typography color='info.main'>Info - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
        <Typography color='success.main'>Success - Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
      </CardContent>
    </Card>
  )
}

export default Color
