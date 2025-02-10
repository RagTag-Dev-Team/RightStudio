import { Card, Skeleton } from '@mui/material'

const TokenBalancesSkeleton = () => {
  return (
    <Card>
      <Skeleton variant='rectangular' width='100%' height={200} />
    </Card>
  )
}

export default TokenBalancesSkeleton
