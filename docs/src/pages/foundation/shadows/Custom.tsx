// MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const shadows = ['xs', 'sm', 'md', 'lg', 'xl']

const Custom = () => {
  return (
    <Card>
      <CardHeader title='Custom' className='p-[50px]'/>
      <CardContent className='flex gap-6 flex-wrap items-center justify-center !p-[50px] !pbs-0'>
        <Grid container spacing={12}>
          {shadows.map((shadow, index) => (
            <Grid item xs={12} sm={index === (shadows.length-1) ? 12 : 6} lg={2.4} key={shadow}>
              <Box
                sx={{boxShadow: `var(--mui-customShadows-${shadow})`}}
                className='flex rounded-lg p-6 items-center justify-center min-is-[100px]'
              >
                <Typography variant='h6'>{shadow}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Custom
