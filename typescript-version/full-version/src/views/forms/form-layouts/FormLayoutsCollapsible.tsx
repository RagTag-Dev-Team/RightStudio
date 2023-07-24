// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Accordion from '@mui/material/Accordion'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// Third-party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards-2'
import type { Focused } from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

// Util Imports
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from '../../../@core/utils/format'

// Style Imports
import styles from './styles.module.css'

const FormLayoutsCollapsible = () => {
  const [cvc, setCvc] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [focus, setFocus] = useState<string>('')
  const [expiry, setExpiry] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [expanded, setExpanded] = useState<string | false>('panel1')
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [option, setOption] = useState('standard')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleBlur = () => setFocus('')

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<Icon icon='mdi:chevron-down' />}>
          <Typography>Delivery Address</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Full Name' placeholder='John Doe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='123-456-7890' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth rows={4} multiline label='Address' placeholder='1456, Liberty Street' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='ZIP Code' placeholder='10005' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Landmark' placeholder='Nr Wall Street' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='City' placeholder='New York' />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <FormLabel>Address Type</FormLabel>
              <RadioGroup row name='radio-buttons-group'>
                <FormControlLabel value='home' control={<Radio />} label='Home (All day delivery)' />
                <FormControlLabel value='office' control={<Radio />} label='Office (Delivery between 10 AM - 5 PM)' />
              </RadioGroup>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<Icon icon='mdi:chevron-down' />}>
          <Typography>Delivery Options</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Box
            className={`${styles.optionWrapper} ${option === 'standard' ? styles.activeOption : ''}`}
            onClick={() => setOption('standard')}
          >
            <Radio
              value='standard'
              name='collapsible-options-radio'
              checked={option === 'standard'}
              className={styles.radioStyles}
            />
            <Box className='width-100'>
              <Box className={styles.deliveryOption}>
                <Typography>Standard 3-5 Days</Typography>
                <Typography>Free</Typography>
              </Box>
              <Typography variant='body2'>Friday, 15 Nov - Monday, 18 Nov</Typography>
            </Box>
          </Box>
          <Box
            className={`${styles.optionWrapper} ${option === 'express' ? styles.activeOption : ''}`}
            onClick={() => setOption('express')}
          >
            <Radio
              value='express'
              name='collapsible-options-radio'
              checked={option === 'express'}
              className={styles.radioStyles}
            />
            <Box className='width-100'>
              <Box className={styles.deliveryOption}>
                <Typography>Express</Typography>
                <Typography>$5.00</Typography>
              </Box>
              <Typography variant='body2'>Friday, 15 Nov - Sunday, 17 Nov</Typography>
            </Box>
          </Box>
          <Box
            className={`${styles.optionWrapper} ${option === 'overnight' ? styles.activeOption : ''}`}
            onClick={() => setOption('overnight')}
          >
            <Radio
              value='overnight'
              name='collapsible-options-radio'
              checked={option === 'overnight'}
              className={styles.radioStyles}
            />
            <Box className='width-100'>
              <Box className={styles.deliveryOption}>
                <Typography>Overnight</Typography>
                <Typography>$10.00</Typography>
              </Box>
              <Typography variant='body2'>Friday, 15 Nov - Saturday, 16 Nov</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<Icon icon='mdi:chevron-down' />}>
          <Typography>Payment Method</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <RadioGroup
                    row
                    name='payment-method-radio'
                    value={paymentMethod}
                    onChange={e => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel value='credit' control={<Radio />} label='Credit/Debit/ATM Card' />
                    <FormControlLabel value='cash' control={<Radio />} label='Cash on Delivery' />
                  </RadioGroup>
                </Grid>
                {paymentMethod === 'credit' ? (
                  <Grid item xs={12}>
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <Cards cvc={cvc} focused={focus as Focused} expiry={expiry} name={name} number={cardNumber} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={6}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              name='number'
                              value={cardNumber}
                              autoComplete='off'
                              label='Card Number'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              placeholder='0000 0000 0000 0000'
                              onFocus={e => setFocus(e.target.name)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              name='name'
                              value={name}
                              label='Name'
                              autoComplete='off'
                              onBlur={handleBlur}
                              placeholder='John Doe'
                              onFocus={e => setFocus(e.target.name)}
                              onChange={e => setName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              fullWidth
                              name='expiry'
                              value={expiry}
                              autoComplete='off'
                              label='Expiry Date'
                              placeholder='MM/YY'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              inputProps={{ maxLength: '5' }}
                              onFocus={e => setFocus(e.target.name)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              fullWidth
                              name='cvc'
                              value={cvc}
                              label='CVC Code'
                              autoComplete='off'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              onFocus={e => setFocus(e.target.name)}
                              placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <Button type='submit' variant='contained'>
            Place Order
          </Button>
          <Button type='reset' variant='outlined'>
            Reset
          </Button>
        </AccordionDetails>
      </Accordion>
    </form>
  )
}

export default FormLayoutsCollapsible
