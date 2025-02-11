'use client'

import { useActiveAccount } from 'thirdweb/react'
import { useSession } from 'next-auth/react'
import { CircularProgress } from '@mui/material'

import RecordCreateForm from '@/views/media/record-form/RecordCreateForm'

export default function CreateMediaPage() {
  const activeAccount = useActiveAccount()
  const { data: session, status } = useSession()

  const ownerAddress = activeAccount?.address || session?.user?.wallet_address || ''

  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </div>
    )
  }

  if (!ownerAddress) {
    return (
      <div>
        <h1>Not Authorized</h1>
        <p>Please connect your wallet or sign in to create a record.</p>
      </div>
    )
  }

  return (
    <RecordCreateForm
      walletAddress={ownerAddress}
      onSuccess={() => {
        // Handle success if needed
      }}
    />
  )
}
