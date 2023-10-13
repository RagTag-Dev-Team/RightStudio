'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ProfileHeaderType } from '@/types/pages/profileTypes'

// Style Imports
import styles from './styles.module.css'

const UserProfileHeader = ({ data }: { data?: ProfileHeaderType }) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Card>
      <CardMedia image={data?.coverImg} className={styles.cardMedia} />
      <CardContent
        className={classnames('flex items-end pt-0 flex-wrap justify-start', { 'justify-center': isBelowMdScreen })}
      >
        <div className='flex'>
          <img height={120} width={120} src={data?.profileImg} alt='Profile Background' />
        </div>
        <div
          className={classnames('flex w-full flex-wrap justify-between items-end', {
            'justify-center flex-col items-center': isBelowSmScreen
          })}
        >
          <div className={classnames('flex flex-col items-start', { 'items-center': isBelowSmScreen })}>
            <Typography>{data?.fullName}</Typography>
            <div
              className={classnames('flex flex-wrap', {
                'justify-center': isBelowSmScreen
              })}
            >
              <div className='flex items-center'>
                {data?.designationIcon && <i className={data?.designationIcon} />}
                <Typography>{data?.designation}</Typography>
              </div>
              <div className='flex items-center'>
                <i className='ri-map-pin-2-line' />
                <Typography>{data?.location}</Typography>
              </div>
              <div className='flex items-center'>
                <i className='ri-calendar-line' />
                <Typography>{data?.joiningDate}</Typography>
              </div>
            </div>
          </div>
          <Button variant='contained'>Connected</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserProfileHeader
