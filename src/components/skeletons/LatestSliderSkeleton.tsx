import { Card, Skeleton } from '@mui/material'

const LatestSliderSkeleton = () => {
  return (
    <Card>
      <Skeleton variant='rectangular' width='100%' height={400} />
    </Card>
  )
}

export default LatestSliderSkeleton
