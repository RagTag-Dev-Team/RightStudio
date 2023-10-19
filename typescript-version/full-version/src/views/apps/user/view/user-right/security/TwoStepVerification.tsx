// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Style Imports
import styles from './styles.module.css'

const TwoStepVerification = () => {
  return (
    <Card>
      <CardHeader title='Two-step verification' subheader='Keep your account secure with authentication step.' />
      <CardContent>
        <InputLabel htmlFor='sms'>SMS</InputLabel>
        <div className='flex items-center'>
          <TextField id='sms' placeholder='+1(968) 819-2547' fullWidth size='small' />
          <div className='flex'>
            <Button variant='outlined' color='secondary'>
              <i className='ri-edit-box-line text-2xl' />
            </Button>
            <Button variant='outlined' color='secondary'>
              <i className='ri-user-add-line text-2xl' />
            </Button>
          </div>
        </div>
        <Typography>
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a
          password to log in. <span className={styles.primaryColor}>Learn more.</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TwoStepVerification
