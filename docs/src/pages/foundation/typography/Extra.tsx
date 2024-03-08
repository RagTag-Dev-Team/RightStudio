import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Extra = () => {
  return (
    <Card>
      <CardHeader title='Extra' />
      <CardContent className='flex flex-col gap-3'>
        <div>
          <Typography variant='button'>button. Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          <Typography variant='body2'>
            font-size: 15px / line-height: 22px / font-weight: 500 / text-transform: none
          </Typography>
        </div>
        <div>
          <Typography variant='caption'>caption. Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          <Typography variant='body2'>font-size: 13px / line-height: 18px / font-weight: 400 / letter-spacing: 0.4px</Typography>
        </div>
        <div>
          <Typography variant='overline'>overline. Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          <Typography variant='body2'>
            font-size: 12px / line-height: 14px / font-weight: 400 / text-transform: uppercase / letter-spacing: 0.8px
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Extra
