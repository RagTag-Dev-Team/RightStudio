// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const System = () => {
  return (
    <Card>
      <CardHeader title='System' className='p-[50px]'/>
      <CardContent className='flex gap-6 flex-wrap items-center justify-center !p-[50px] !pbs-0'>
        <Grid container spacing={12}>
          {Array.from({ length: 24 }).map((_, i) => (
            <Grid item key={i} xs={12} sm={4} md={3} lg={2}>
              <Box
                key={i}
                sx={{ boxShadow: `var(--mui-shadows-${i + 1})` }}
                className='flex rounded-lg p-6 items-center justify-center min-is-[100px]'
              >
                <Typography variant='h6'>{`Z${i + 1}`}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default System
