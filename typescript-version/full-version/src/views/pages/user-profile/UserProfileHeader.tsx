// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { ProfileHeaderType } from '@/types/pages/profileTypes'

const UserProfileHeader = ({ data }: { data?: ProfileHeaderType }) => {
  return (
    <Card>
      <CardMedia image={data?.coverImg} className='bs-[250px]' />
      <CardContent className='flex justify-center flex-col items-center md:items-end md:flex-row !pt-0 md:justify-start'>
        <div className='flex'>
          <img height={120} width={120} src={data?.profileImg} alt='Profile Background' />
        </div>
        <div className='flex is-full justify-start self-end flex-col items-center sm:flex-row sm:justify-between sm:items-end '>
          <div className='flex flex-col items-center sm:items-start'>
            <Typography>{data?.fullName}</Typography>
            <div className='flex justify-center sm:justify-normal'>
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
