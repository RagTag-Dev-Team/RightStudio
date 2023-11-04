'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import DatePicker from 'react-datepicker'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'
import type { FormDataType } from './AddCustomerDrawer'

// Component Imports
import AddCustomerDrawer, { initialFormData } from './AddCustomerDrawer'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Style Imports
import styles from '@views/apps/invoice/styles.module.css'
import commonStyles from '@/styles/common.module.css'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const AddAction = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  // States
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [selectData, setSelectData] = useState<InvoiceType | null>(null)
  const [issuedDate, setIssuedDate] = useState<Date | null | undefined>(null)
  const [dueDate, setDueDate] = useState<Date | null | undefined>(null)
  const [formData, setFormData] = useState<FormDataType>(initialFormData)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const onFormSubmit = (data: FormDataType) => {
    setFormData(data)
  }

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }

  return (
    <DatePickerWrapper>
      <Card>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className={classnames(commonStyles.actionHoverColor, commonStyles.borderRadius)}>
                <div className={classnames('flex justify-between', { 'flex-col': isBelowSmScreen })}>
                  <div className='flex flex-col'>
                    <div className='flex items-center'>
                      <Typography>{themeConfig.templateName}</Typography>
                    </div>
                    <div>
                      <Typography>Office 149, 450 South Brand Brooklyn</Typography>
                      <Typography>San Diego County, CA 91905, USA</Typography>
                      <Typography>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Invoice</Typography>
                      <TextField
                        fullWidth
                        size='small'
                        value={invoiceData[0].id}
                        InputProps={{
                          disabled: true,
                          startAdornment: <InputAdornment position='start'>#</InputAdornment>
                        }}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Date Issued:</Typography>
                      <DatePicker
                        selected={issuedDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={(date: Date) => setIssuedDate(date)}
                        customInput={<TextField fullWidth size='small' />}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Date Due:</Typography>
                      <DatePicker
                        selected={dueDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={(date: Date) => setDueDate(date)}
                        customInput={<TextField fullWidth size='small' />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classnames('flex justify-between', { 'flex-col': isBelowSmScreen })}>
                <div className='flex flex-col'>
                  <Typography>Invoice To:</Typography>
                  <Select
                    size='small'
                    value={selectData?.id || ''}
                    onChange={e => {
                      setFormData({} as FormDataType)
                      setSelectData(invoiceData.slice(0, 5).filter(item => item.id === e.target.value)[0])
                    }}
                  >
                    <MenuItem
                      className='flex items-center'
                      value=''
                      onClick={() => {
                        setSelectData(null)
                        setOpen(true)
                      }}
                    >
                      <i className='ri-add-line' />
                      Add New Customer
                    </MenuItem>
                    {invoiceData.slice(0, 5).map((invoice: InvoiceType, index) => (
                      <MenuItem key={index} value={invoice.id}>
                        {invoice.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {selectData?.id ? (
                    <div>
                      <Typography>{selectData?.name}</Typography>
                      <Typography>{selectData?.company}</Typography>
                      <Typography>{selectData?.address}</Typography>
                      <Typography>{selectData?.contact}</Typography>
                      <Typography>{selectData?.companyEmail}</Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography>{formData?.name}</Typography>
                      <Typography>{formData?.company}</Typography>
                      <Typography>{formData?.address}</Typography>
                      <Typography>{formData?.contactNumber}</Typography>
                      <Typography>{formData?.email}</Typography>
                    </div>
                  )}
                </div>
                <div className='flex flex-col'>
                  <Typography>Bill To:</Typography>
                  <div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Total Due:</Typography>
                      <Typography>$12,110.55</Typography>
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Bank name:</Typography>
                      <Typography>American Bank</Typography>
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Country:</Typography>
                      <Typography>United States</Typography>
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>IBAN:</Typography>
                      <Typography>ETD95476213874685</Typography>
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>SWIFT code:</Typography>
                      <Typography>BR91905</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              {Array.from(Array(count).keys()).map((item, index) => (
                <div
                  key={index}
                  className={classnames('repeater-item flex relative', commonStyles.border, commonStyles.borderRadius)}
                >
                  <Grid container>
                    <Grid item lg={6} md={5} xs={12}>
                      <Typography
                        className={classnames({ static: isBelowSmScreen, 'absolute -top-6': !isBelowMdScreen })}
                      >
                        Item
                      </Typography>
                      <Select fullWidth size='small' defaultValue='App Design'>
                        <MenuItem value='App Design'>App Design</MenuItem>
                        <MenuItem value='App Customization'>App Customization</MenuItem>
                        <MenuItem value='ABC Template'>ABC Template</MenuItem>
                        <MenuItem value='App Development'>App Development</MenuItem>
                      </Select>
                      <TextField rows={2} fullWidth multiline size='small' defaultValue='Customization & Bug Fixes' />
                    </Grid>
                    <Grid item lg={2} md={3} xs={12}>
                      <Typography
                        className={classnames({ static: isBelowSmScreen, 'absolute -top-6': !isBelowMdScreen })}
                      >
                        Cost
                      </Typography>
                      <TextField
                        size='small'
                        type='number'
                        placeholder='24'
                        defaultValue='24'
                        InputProps={{ inputProps: { min: 0 } }}
                      />
                      <div>
                        <Typography component='span'>Discount:</Typography> <Typography component='span'>0%</Typography>
                        <Tooltip title='Tax 1' placement='top'>
                          <Typography component='span'>0%</Typography>
                        </Tooltip>
                        <Tooltip title='Tax 2' placement='top'>
                          <Typography component='span'>0%</Typography>
                        </Tooltip>
                      </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <Typography
                        className={classnames({ static: isBelowSmScreen, 'absolute -top-6': !isBelowMdScreen })}
                      >
                        Hours
                      </Typography>
                      <TextField
                        size='small'
                        type='number'
                        placeholder='1'
                        defaultValue='1'
                        InputProps={{ inputProps: { min: 0 } }}
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <Typography
                        className={classnames({ static: isBelowSmScreen, 'absolute -top-6': !isBelowMdScreen })}
                      >
                        Price
                      </Typography>
                      <Typography>$24.00</Typography>
                    </Grid>
                  </Grid>
                  <div className={classnames('flex flex-col justify-start', styles.borderLeft)}>
                    <IconButton size='small' onClick={deleteForm}>
                      <i className='ri-close-line' />
                    </IconButton>
                  </div>
                </div>
              ))}
              <Grid item xs={12}>
                <Button
                  size='small'
                  variant='contained'
                  onClick={() => setCount(count + 1)}
                  startIcon={<i className='ri-add-line' />}
                >
                  Add Item
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              <div className={classnames('flex justify-between', { 'flex-col': isBelowSmScreen })}>
                <div className={classnames('flex flex-col', { 'order-2': isBelowSmScreen })}>
                  <div className='flex items-center'>
                    <Typography>Salesperson:</Typography>
                    <TextField size='small' defaultValue='Tommy Shelby' />
                  </div>
                  <TextField size='small' placeholder='Thanks for your business' />
                </div>
                <div className='min-is-[200px]'>
                  <div className='flex items-center justify-between'>
                    <Typography>Subtotal:</Typography>
                    <Typography>$1800</Typography>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Typography>Discount:</Typography>
                    <Typography>$28</Typography>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Typography>Tax:</Typography>
                    <Typography>21%</Typography>
                  </div>
                  <Divider />
                  <div className='flex items-center justify-between'>
                    <Typography>Total:</Typography>
                    <Typography>$1690</Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor='invoice-note' className='inline-flex'>
                Note:
              </InputLabel>
              <TextField
                id='invoice-note'
                rows={2}
                fullWidth
                multiline
                className={classnames(commonStyles.border, commonStyles.borderRadius)}
                defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
              projects. Thank You!'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <AddCustomerDrawer open={open} setOpen={setOpen} onFormSubmit={onFormSubmit} />
    </DatePickerWrapper>
  )
}

export default AddAction
