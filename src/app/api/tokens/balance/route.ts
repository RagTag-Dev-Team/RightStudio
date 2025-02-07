import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { mediaCollectionAddress } from '@/utils/getMediaContract'

// Cache duration in seconds (e.g., 60 seconds = 1 minute)
const CACHE_DURATION = 60

const {
  ENGINE_URL,
  BACKEND_WALLET_ADDRESS,
  CHAIN_ID,
  ENGINE_SECRET_KEY,
  TAGZ_TOKEN_ADDRESS,
  RAGZ_TOKEN_ADDRESS,
  NEXT_PUBLIC_THIRDWEB_SECRET_KEY
} = process.env

export async function POST(req: NextRequest) {
  if (
    !ENGINE_URL ||
    !BACKEND_WALLET_ADDRESS ||
    !CHAIN_ID ||
    !ENGINE_SECRET_KEY ||
    !NEXT_PUBLIC_THIRDWEB_SECRET_KEY ||
    !TAGZ_TOKEN_ADDRESS
  ) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 })
  }

  const { account } = await req.json()

  // Create a response with cache headers
  const response = await fetchBalances(account)

  response.headers.set('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`)

  return response
}

async function fetchBalances(account: string) {
  console.log('ENGINE_URL', ENGINE_URL)

  //  console.log('NEXT_PUBLIC_THIRDWEB_SECRET_KEY', NEXT_PUBLIC_THIRDWEB_SECRET_KEY)

  const ragzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${RAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      },
      next: { revalidate: CACHE_DURATION }
    }
  )

  const tagzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${TAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      },
      next: { revalidate: CACHE_DURATION }
    }
  )

  const nftRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/balance-of?walletAddress=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      },
      next: { revalidate: CACHE_DURATION }
    }
  )

  console.log('ragzRes', ragzRes)
  console.log('tagzRes', tagzRes)
  console.log('nftRes', nftRes)

  const ragzResult = await ragzRes.json()
  const tagzResult = await tagzRes.json()
  const nftResult = await nftRes.json()

  return NextResponse.json({ ragzResult, tagzResult, nftResult }, { status: 200 })
}
