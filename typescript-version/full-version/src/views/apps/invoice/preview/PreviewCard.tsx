// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import './print.css'

// Vars
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

const PreviewCard = ({ invoiceData, id }: { invoiceData: InvoiceType; id: string }) => {
  return (
    <Card className='previewCard'>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <div className='bg-actionHover rounded'>
              <div className='flex justify-between flex-col sm:flex-row'>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className='overflow-x-auto border rounded'>
              <table className={tableStyles.table}>
                <thead>
                  <tr className='border-be'>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Hours</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
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
            <div className='flex justify-between flex-col sm:flex-row'>
              <div className='flex flex-col order-2 sm:order-[unset]'>
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
              Note: It was a pleasure working with you and your team. We hope you will keep us in mind for future
              freelance projects. Thank You!
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PreviewCard
