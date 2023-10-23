// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { ConnectionsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'

// Style Imports
import commonStyles from '@views/pages/user-profile/styles.module.css'

const Connections = ({ data }: { data?: ConnectionsTabType[] }) => {
  return (
    <Grid container>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className='relative'>
                <OptionMenu
                  options={[
                    'Share Connection',
                    'Block Connection',
                    { divider: true },
                    { text: 'Delete', menuItemProps: { className: commonStyles.errorColor } }
                  ]}
                  iconButtonProps={{ className: 'absolute' }}
                />
                <CardContent className='flex items-center flex-col'>
                  <Avatar src={item.avatar} />
                  <Typography>{item.name}</Typography>
                  <Typography>{item.designation}</Typography>
                  <div className='flex items-center'>
                    {item.chips.map((chip, index) => (
                      <Link key={index}>
                        <Chip label={chip.title} color={chip.color} size='small' />
                      </Link>
                    ))}
                  </div>
                  <div className='flex w-full items-center justify-around flex-wrap'>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.projects}</Typography>
                      <Typography>Projects</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.tasks}</Typography>
                      <Typography>Tasks</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.connections}</Typography>
                      <Typography>Connections</Typography>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant={item.isConnected ? 'contained' : 'outlined'}
                      startIcon={<i className={item.isConnected ? 'ri-user-follow-line' : 'ri-user-add-line'} />}
                    >
                      {item.isConnected ? 'connected' : 'connect'}
                    </Button>
                    <Button variant='outlined' color='secondary'>
                      <i className='ri-mail-line' />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Connections
