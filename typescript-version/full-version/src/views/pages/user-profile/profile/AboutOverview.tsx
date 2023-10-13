// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { ProfileTeamsType, ProfileCommonType, ProfileTabType } from '@/types/pages/profileTypes'

const renderList = (list: ProfileCommonType[]) => {
  return (
    list.length > 0 &&
    list.map((item, index) => {
      return (
        <div key={index} className='flex items-center'>
          <i className={item.icon} />
          <div className='flex items-center flex-wrap'>
            <Typography> {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}</Typography>
            <Typography> {item.value.charAt(0).toUpperCase() + item.value.slice(1)}</Typography>
          </div>
        </div>
      )
    })
  )
}

const renderTeams = (teams: ProfileTeamsType[]) => {
  return (
    teams.length > 0 &&
    teams.map((item, index) => {
      return (
        <div key={index} className='flex items-center flex-wrap'>
          <Typography>{item.property.charAt(0).toUpperCase() + item.property.slice(1)}</Typography>
          <Typography>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</Typography>
        </div>
      )
    })
  )
}

const AboutOverview = ({ data }: { data?: ProfileTabType }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <div>
              <Typography>About</Typography>
              {data?.about && renderList(data?.about)}
            </div>
            <div>
              <Typography>Contacts</Typography>
              {data?.contacts && renderList(data?.contacts)}
            </div>
            <div>
              <Typography>Teams</Typography>
              {data?.teams && renderTeams(data?.teams)}
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <div>
              <Typography>Overview</Typography>
              {data?.overview && renderList(data?.overview)}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutOverview
