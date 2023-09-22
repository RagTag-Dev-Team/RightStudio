// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Type Imports
import type { ProfileTeamsTechType, ProfileConnectionsType } from '@/app/api/pages/profile/types'

type Props = {
  teamsTech?: ProfileTeamsTechType[]
  connections?: ProfileConnectionsType[]
}

const ConnectionsTeams = (props: Props) => {
  // props
  const { teamsTech, connections } = props

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Connections' />
          <CardContent>
            {connections &&
              connections.map((connection, index) => (
                <div key={index} className='flex items-center'>
                  <div className='flex items-center flex-grow'>
                    <Avatar src={connection.avatar} />
                    <div className='flex flex-grow flex-col'>
                      <Typography>{connection.name}</Typography>
                      <Typography>{connection.connections} Connections</Typography>
                    </div>
                  </div>
                  <Button variant={connection.isFriend ? 'contained' : 'outlined'}>
                    <Icon icon={connection.isFriend ? 'mdi:account-outline' : 'mdi:account-plus-outline'} />
                  </Button>
                </div>
              ))}
            <div className='text-center'>
              <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                View all connections
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Teams' />
          <CardContent>
            {teamsTech &&
              teamsTech.map((team: ProfileTeamsTechType, index) => (
                <div key={index} className='flex'>
                  <div className='flex flex-grow  items-center'>
                    <Avatar src={team.avatar} />
                    <div className='flex flex-grow flex-col'>
                      <Typography>{team.title}</Typography>
                      <Typography>{team.members} Members</Typography>
                    </div>
                  </div>
                  <Chip color={team.ChipColor} label={team.chipText} size='small' />
                </div>
              ))}
            <div>
              <div className='text-center'>
                <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                  View all teams
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectionsTeams
