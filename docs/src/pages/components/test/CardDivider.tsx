// MUI Imports
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Styles Imports
import styles from './styles.module.css'

const CardDivider = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Basic Divider</Typography>
        <Divider />
        <Typography>Light Divider (below)</Typography>
        <Divider light />
        <div className='flex'>
          <Typography>Vertical</Typography>
          <Divider flexItem orientation='vertical' className='mis-4'/>
        </div>
      </CardContent>
      <Divider variant='middle'>Middle</Divider>
      <Divider variant='fullWidth'>Full Width</Divider>
      <Divider variant='inset'>Inset</Divider>
      <CardContent></CardContent>
      <CardContent className='flex'>
        <Divider flexItem className={styles.dividerHeight} variant='middle' orientation='vertical'>
          Middle
        </Divider>
        <Divider flexItem variant='fullWidth' orientation='vertical'>
          Full Width
        </Divider>
        <Divider flexItem variant='inset' orientation='vertical'>
          Inset
        </Divider>
      </CardContent>
    </Card>
  )
}

export default CardDivider
