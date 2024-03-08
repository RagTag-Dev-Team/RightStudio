// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Headings = () => {
  return (
    <Card>
      <CardHeader title='Headings' />
      <CardContent className='flex flex-col gap-4'>
        <div>
          <Typography variant='h1' className='!m-0'>h1. Heading</Typography>
          <Typography variant='body2'>font-size: 46px / line-height: 68px / font-weight: 500</Typography>
        </div>
        <div>
          <Typography variant='h2'>h2. Heading</Typography>
          <Typography variant='body2'>font-size: 38px / line-height: 56px / font-weight: 500</Typography>
        </div>
        <div>
          <Typography variant='h3'>h3. Heading</Typography>
          <Typography variant='body2'>font-size: 28px / line-height: 42px / font-weight: 500</Typography>
        </div>
        <div>
          <Typography variant='h4'>h4. Heading</Typography>
          <Typography variant='body2'>font-size: 24px / line-height: 38px / font-weight: 500</Typography>
        </div>
        <div>
          <Typography variant='h5'>h5. Heading</Typography>
          <Typography variant='body2'>font-size: 18px / line-height: 28px / font-weight: 500</Typography>
        </div>
        <div>
          <Typography variant='h6'>h6. Heading</Typography>
          <Typography variant='body2'>font-size: 15px / line-height: 22px / font-weight: 500</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Headings
