'use client'

// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Styles Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'
import tableStyles from '@core/styles/table.module.css'

const data = [
  {
    Item: 'Premium Branding Package',
    Description: 'Branding & Promotion',
    Hours: 48,
    Qty: 1,
    Total: '$32'
  },
  {
    Item: 'Social Media',
    Description: 'Social media templates',
    Hours: 42,
    Qty: 1,
    Total: '$28'
  },
  {
    Item: 'Web Design',
    Description: 'Web designing package',
    Hours: 46,
    Qty: 1,
    Total: '$24'
  },
  {
    Item: 'SEO',
    Description: 'Search engine optimization',
    Hours: 40,
    Qty: 1,
    Total: '$22'
  }
]

const PrintPage = ({ invoiceData, id }: { invoiceData: InvoiceType; id: string }) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      setTimeout(() => {
        window.print()
      }, 100)
    }
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classnames(commonStyles.actionHoverColor, commonStyles.borderRadius)}>
          <div
            className={classnames('flex justify-between', {
              'flex-col': isBelowSmScreen
            })}
          >
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
              <Typography>{`Invoice #${id}`}</Typography>
              <div>
                <Typography>{`Date Issued: ${invoiceData.issuedDate}`}</Typography>
                <Typography>{`Date Due: ${invoiceData.dueDate}`}</Typography>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className='flex flex-col'>
              <Typography>Invoice To:</Typography>
              <div>
                <Typography>{invoiceData.name}</Typography>
                <Typography>{invoiceData.company}</Typography>
                <Typography>{invoiceData.address}</Typography>
                <Typography>{invoiceData.contact}</Typography>
                <Typography>{invoiceData.companyEmail}</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='flex flex-col'>
              <Typography>Bill To:</Typography>
              <div>
                <div className='flex items-center'>
                  <Typography className={styles.minWidth100}>Total Due:</Typography>
                  <Typography>$12,110.55</Typography>
                </div>
                <div className='flex items-center'>
                  <Typography className={styles.minWidth100}>Bank name:</Typography>
                  <Typography>American Bank</Typography>
                </div>
                <div className='flex items-center'>
                  <Typography className={styles.minWidth100}>Country:</Typography>
                  <Typography>United States</Typography>
                </div>
                <div className='flex items-center'>
                  <Typography className={styles.minWidth100}>IBAN:</Typography>
                  <Typography>ETD95476213874685</Typography>
                </div>
                <div className='flex items-center'>
                  <Typography className={styles.minWidth100}>SWIFT code:</Typography>
                  <Typography>BR91905</Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classnames('overflow-x-auto', commonStyles.border, commonStyles.borderRadius)}>
          <table className={classnames(tableStyles.table)}>
            <thead className={tableStyles.thead}>
              <tr className={styles.borderBottom}>
                <th>Item</th>
                <th>Description</th>
                <th>Hours</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className={tableStyles.tbody}>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.Item}</td>
                  <td>{item.Description}</td>
                  <td>{item.Hours}</td>
                  <td>{item.Qty}</td>
                  <td>{item.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classnames('flex justify-between', { 'flex-col': isBelowSmScreen })}>
          <div className={classnames('flex flex-col', { 'order-2': isBelowSmScreen })}>
            <div className='flex items-center'>
              <Typography>Salesperson:</Typography>
              <Typography>Tommy Shelby</Typography>
            </div>
            <Typography>Thanks for your business</Typography>
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
        <Typography>
          Note: It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
          projects. Thank You!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PrintPage
