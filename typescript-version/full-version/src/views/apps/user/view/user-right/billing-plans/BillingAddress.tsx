// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import AddNewAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Style Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/table.module.css'

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  country: 'US',
  address1: '100 Water Plant Avenue,',
  address2: 'Building 1303 Wake Island',
  landmark: 'Near Water Plant',
  city: 'New York',
  state: 'Capholim',
  zipCode: '403114',
  taxId: 'TAX-875623',
  vatNumber: 'SDF754K77',
  contact: '+1(609) 933-44-22'
}

const BillingAddress = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Edit Address',
    size: 'small',
    startIcon: <i className='ri-add-line' />
  }

  return (
    <>
      <Card>
        <CardHeader
          title='Billing Address'
          action={
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps}
              dialog={AddNewAddress}
              dialogProps={{ data }}
            />
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <table className={classnames(styles.addressTable1, tableStyles.table)}>
                <tbody className={tableStyles.tbody}>
                  <tr>
                    <td>Name:</td>
                    <td>{`${data.firstName} ${data.lastName}`}</td>
                  </tr>
                  <tr>
                    <td>Billing Email:</td>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <td>Tax ID:</td>
                    <td>{data.taxId}</td>
                  </tr>
                  <tr>
                    <td>VAT Number:</td>
                    <td>{data.vatNumber}</td>
                  </tr>
                  <tr>
                    <td>Billing Address:</td>
                    <td>{`${data.address1} ${data.address2}`}</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={6}>
              <table className={classnames(styles.addressTable1, tableStyles.table)}>
                <tbody className={tableStyles.tbody}>
                  <tr>
                    <td>Contact:</td>
                    <td>{data.contact}</td>
                  </tr>
                  <tr>
                    <td>Landmark:</td>
                    <td>{data.landmark}</td>
                  </tr>
                  <tr>
                    <td>Landmark:</td>
                    <td>{data.city}</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>{data.country}</td>
                  </tr>
                  <tr>
                    <td>State:</td>
                    <td>{data.state}</td>
                  </tr>
                  <tr>
                    <td>Zip Code:</td>
                    <td>{data.zipCode}</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default BillingAddress
