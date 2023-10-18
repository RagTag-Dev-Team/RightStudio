'use client'

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

// Type Imports
import type { ProfileTeamsTechType, ProfileConnectionsType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

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
          <CardHeader
            title='Connections'
            action={<OptionMenu options={['Share Connections', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
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
                    <i className={connection.isFriend ? 'ri-user-3-line' : 'ri-user-add-line'} />
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
          <CardHeader
            title='Teams'
            action={<OptionMenu options={['Share Teams', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
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
