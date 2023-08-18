// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

const FormLayoutsWithTabs = () => {
  const [value, setValue] = useState('personal_info')
  const [date, setDate] = useState<Date | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <Box className='tabBorder'>
          <TabList onChange={handleChange}>
            <Tab label='Personal Info' value='personal_info' />
            <Tab label='Account Details' value='account_details' />
            <Tab label='SOCIAL LINKS' value='social_links' />
          </TabList>
        </Box>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='First Name' placeholder='John' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Last Name' placeholder='Doe' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select label='Country'>
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select label='Language'>
                      <MenuItem value='English'>English</MenuItem>
                      <MenuItem value='French'>French</MenuItem>
                      <MenuItem value='Spanish'>Spanish</MenuItem>
                      <MenuItem value='Portuguese'>Portuguese</MenuItem>
                      <MenuItem value='Italian'>Italian</MenuItem>
                      <MenuItem value='German'>German</MenuItem>
                      <MenuItem value='Arabic'>Arabic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    selected={date}
                    showYearDropdown
                    showMonthDropdown
                    onChange={date => setDate(date)}
                    placeholderText='MM/DD/YYYY'
                    customInput={<TextField fullWidth label='Birth Date' placeholder='MM-DD-YYYY' />}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Phone Number' type='number' placeholder='123-456-7890' />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='account_details'>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Username' placeholder='johnDoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Email' placeholder='johndoe@gmail.com ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Password'
                    id='outlined-adornment-password'
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Confirm Password'
                    id='outlined-adornment-password'
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='social_links'>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Twitter' placeholder='https://twitter.com/johndoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Facebook' placeholder='https://facebook.com/johndoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Google+' placeholder='https://plus.google.com/johndoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='LinkedIn' placeholder='https://linkedin.com/johndoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Instagram' placeholder='https://instagram.com/johndoe ' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Quora' placeholder='https://quora.com/johndoe ' />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
            <Button type='reset' variant='outlined'>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsWithTabs
