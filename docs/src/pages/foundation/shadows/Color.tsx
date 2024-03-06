// MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success']

const shadows = ['sm', 'md', 'lg']

const colorShadows = colors.flatMap(color => shadows.map(shadow => ({ color, shadow })));

const Color = () => {
  return (
    <Card>
      <CardHeader title='Color' className='p-[50px]'/>
      <CardContent className='flex gap-6 flex-wrap items-center justify-center !p-[50px] !pbs-0'>
        <Grid container spacing={12}>
          {colorShadows.map(({ color, shadow }, index) => (
            <Grid item key={index} sm={12} lg={4}>
              <Box
                sx={{ boxShadow: `var(--mui-customShadows-${color}-${shadow})` }}
                className='flex rounded-lg p-6 items-center justify-center min-is-[100px]'
              >
                <Typography variant='h6'>{color}-{shadow}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Color