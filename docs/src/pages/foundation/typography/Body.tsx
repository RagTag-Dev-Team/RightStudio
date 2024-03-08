import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Body = () => {
  return (
    <Card>
      <CardHeader title='Body' />
      <CardContent className='flex flex-col gap-3'>
        <div>
          <Typography variant='body1'>body1. Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          <Typography variant='body2'>font-size: 15px / line-height: 22px / font-weight: 400</Typography>
        </div>
        <div>
          <Typography variant='body2'>body2. Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          <Typography variant='body2'>font-size: 13px / line-height: 20px / font-weight: 400</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Body
