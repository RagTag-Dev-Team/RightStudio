// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'

// Type Imports
import type { TeamsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Import
import styles from './styles.module.css'
import commonStyles from '@views/pages/user-profile/styles.module.css'

const Teams = ({ data }: { data?: TeamsTabType[] }) => {
  return (
    <Grid container>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center'>
                      <Avatar src={item.avatar} className={styles.avatarLogo} />
                      <Typography>{item.title}</Typography>
                    </div>
                    <div className='flex items-center'>
                      <IconButton size='small'>
                        <Icon icon='mdi:star-outline' />
                      </IconButton>
                      <OptionMenu
                        options={[
                          'Rename Team',
                          'View Details',
                          'Add to Favorite',
                          { divider: true },
                          { text: 'Delete Team', menuItemProps: { className: commonStyles.errorColor } }
                        ]}
                      />
                    </div>
                  </div>
                  <Typography>{item.description}</Typography>
                  <div className='flex items-center justify-between flex-wrap'>
                    <AvatarGroup className='items-center'>
                      {item.avatarGroup.map((person, index) => {
                        return (
                          <Tooltip key={index} title={person.name}>
                            <Avatar src={person.avatar} alt={person.name} className='h-8 w-8' />
                          </Tooltip>
                        )
                      })}
                      {item.extraMembers && (
                        <Tooltip title={`${item.extraMembers} more`}>
                          <Avatar className='h-8 w-8'>+{item.extraMembers}</Avatar>
                        </Tooltip>
                      )}
                    </AvatarGroup>
                    <div className='flex items-center'>
                      {item.chips.map((chip, index) => (
                        <Link href='/' key={index} onClick={e => e.preventDefault()}>
                          <Chip size='small' label={chip.title} color={chip.color} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Teams
