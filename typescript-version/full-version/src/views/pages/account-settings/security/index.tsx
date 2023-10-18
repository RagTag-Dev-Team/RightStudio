// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ChangePasswordCard from './ChangePasswordCard'
import TwoFactorAuthenticationCard from './TwoFactorAuthenticationCard'
import CreateApiKey from './CreateApiKey'
import ApiKeyList from './ApiKeyList'
import RecentDevicesTable from './RecentDevicesTable'

// Type IMports
import type { Direction } from '@core/types'

const Security = ({ direction }: { direction: Direction }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ChangePasswordCard />
      </Grid>
      <Grid item xs={12}>
        <TwoFactorAuthenticationCard direction={direction} />
      </Grid>
      <Grid item xs={12}>
        <CreateApiKey />
      </Grid>
      <Grid item xs={12}>
        <ApiKeyList />
      </Grid>
      <Grid item xs={12}>
        <RecentDevicesTable />
      </Grid>
    </Grid>
  )
}

export default Security
