'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import DatePicker from 'react-datepicker'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import Repeater from '@components/Repeater'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Styles Imports
import styles from '@views/apps/invoice/styles.module.css'
import commonStyles from '@/styles/common.module.css'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const EditCard = ({ invoiceData, id, data }: { invoiceData: InvoiceType; id: string; data: InvoiceType[] }) => {
  // States
  const [selectData, setSelectData] = useState<InvoiceType>(data[0])
  const [count, setCount] = useState(1)
  const [issueDate, setIssueDate] = useState(new Date(invoiceData.issuedDate))
  const [dueDate, setDueDate] = useState(new Date(invoiceData.dueDate))

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  return (
    <DatePickerWrapper>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <div className={classnames(commonStyles.actionHoverBackground, commonStyles.borderRadius)}>
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
                        value={id}
                        InputProps={{
                          disabled: true,
                          startAdornment: <InputAdornment position='start'>#</InputAdornment>
                        }}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Date Issued:</Typography>
                      <DatePicker
                        selected={issueDate}
                        id='payment-date'
                        onChange={(date: Date) => setIssueDate(date)}
                        customInput={<TextField fullWidth size='small' />}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[100px]'>Date Due:</Typography>
                      <DatePicker
                        selected={dueDate}
                        id='payment-date'
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
                    className={classnames({ 'w-1/2': isBelowSmScreen })}
                    size='small'
                    value={selectData.id}
                    onChange={e => {
                      setSelectData(data.slice(0, 5).filter(item => item.id === e.target.value)[0])
                    }}
                  >
                    {data.slice(0, 5).map((invoice: InvoiceType, index) => (
                      <MenuItem key={index} value={invoice.id}>
                        {invoice.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <div>
                    <Typography>{selectData.name}</Typography>
                    <Typography>{selectData.company}</Typography>
                    <Typography>{selectData.address}</Typography>
                    <Typography>{selectData.contact}</Typography>
                    <Typography>{selectData.companyEmail}</Typography>
                  </div>
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
              <Repeater count={count}>
                {(i: number) => {
                  const Tag = i === 0 ? 'div' : Collapse

                  return (
                    <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          className={classnames('flex relative', commonStyles.border, commonStyles.borderRadius)}
                        >
                          <Grid container>
                            <Grid item lg={6} md={5} xs={12}>
                              <Typography
                                className={classnames({
                                  static: isBelowMdScreen,
                                  '-top-6 absolute': !isBelowMdScreen
                                })}
                              >
                                Item
                              </Typography>
                              <Select fullWidth size='small' defaultValue='App Design'>
                                <MenuItem value='App Design'>App Design</MenuItem>
                                <MenuItem value='App Customization'>App Customization</MenuItem>
                                <MenuItem value='ABC Template'>ABC Template</MenuItem>
                                <MenuItem value='App Development'>App Development</MenuItem>
                              </Select>
                              <TextField
                                rows={2}
                                fullWidth
                                multiline
                                size='small'
                                defaultValue='Customization & Bug Fixes'
                              />
                            </Grid>
                            <Grid item lg={2} md={3} xs={12}>
                              <Typography
                                className={classnames({
                                  static: isBelowMdScreen,
                                  '-top-6 absolute': !isBelowMdScreen
                                })}
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
                                <Typography component='span'>Discount:</Typography>{' '}
                                <Typography component='span'>0%</Typography>
                                <Tooltip title='Tax 1' placement='top'>
                                  <Typography component='span'>0%</Typography>
                                </Tooltip>
                                <Tooltip title='Tax 2' placement='top'>
                                  <Typography component='span'>0%</Typography>
                                </Tooltip>
                              </div>
                            </Grid>
                            <Grid item lg={2} md={2} xs={12}>
                              <Typography
                                className={classnames({
                                  static: isBelowMdScreen,
                                  '-top-6 absolute': !isBelowMdScreen
                                })}
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
                            <Grid item lg={2} md={1} xs={12}>
                              <Typography
                                className={classnames({
                                  static: isBelowMdScreen,
                                  '-top-6 absolute': !isBelowMdScreen
                                })}
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
                        </Grid>
                      </Grid>
                    </Tag>
                  )
                }}
              </Repeater>

              <Grid container>
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
                  <TextField size='small' defaultValue='Thanks for your business' />
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
    </DatePickerWrapper>
  )
}

export default EditCard
