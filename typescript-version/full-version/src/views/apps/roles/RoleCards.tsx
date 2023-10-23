'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import type { TypographyProps } from '@mui/material/Typography'
import type { CardProps } from '@mui/material/Card'

// Component Imports
import RoleDialog from '@components/dialogs/role-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import Link from '@components/Link'

// Style Imports
import commonStyles from '@/styles/common.module.css'

type CardDataType = {
  title: string
  avatars: string[]
  totalUsers: number
}

const cardData: CardDataType[] = [
  { totalUsers: 4, title: 'Administrator', avatars: ['1.png', '2.png', '3.png', '4.png'] },
  { totalUsers: 7, title: 'Editor', avatars: ['5.png', '6.png', '7.png'] },
  { totalUsers: 5, title: 'Users', avatars: ['4.png', '5.png', '6.png'] },
  { totalUsers: 6, title: 'Support', avatars: ['1.png', '2.png', '3.png'] },
  { totalUsers: 10, title: 'Restricted User', avatars: ['4.png', '5.png', '6.png'] }
]

const RoleCards = () => {
  const typographyProps: TypographyProps = {
    children: 'Edit Role',
    variant: 'body2',
    component: Link,
    className: commonStyles.primaryColor,
    onClick: e => e.preventDefault()
  }

  const CardProps: CardProps = {
    className: 'cursor-pointer h-full',
    children: (
      <Grid container className='h-full'>
        <Grid item xs={5}>
          <div className='flex items-end justify-center h-full'>
            <img alt='add-role' src='/images/cards/pose_m1.png' />
          </div>
        </Grid>
        <Grid item xs={7}>
          <CardContent>
            <div className='text-right'>
              <Button variant='contained'>Add Role</Button>
              <Typography>Add role, if it doesn&#39;t exist.</Typography>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Grid container>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card>
              <CardContent>
                <div className='flex items-center justify-between'>
                  <Typography>{`Total ${item.totalUsers} users`}</Typography>
                  <AvatarGroup total={item.totalUsers}>
                    {item.avatars.map((img, index: number) => (
                      <Avatar key={index} alt={item.title} src={`/images/avatars/${img}`} />
                    ))}
                  </AvatarGroup>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col items-start'>
                    <Typography variant='h6'>{item.title}</Typography>
                    <OpenDialogOnElementClick element={Typography} elementProps={typographyProps} dialog={RoleDialog} />
                  </div>
                  <IconButton>
                    <i className='ri-file-copy-line' />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} lg={4}>
          <OpenDialogOnElementClick element={Card} elementProps={CardProps} dialog={RoleDialog} />
        </Grid>
      </Grid>
    </>
  )
}

export default RoleCards
