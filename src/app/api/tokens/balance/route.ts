import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { tagzContract, tagzCollectionAddress, mediaCollectionAddress } from '@/utils/getMediaContract'

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

  const ragzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${RAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      },
      agent: new (require('https').Agent)({
        rejectUnauthorized: false
      })
    }
  )

  const tagzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${TAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      }
    }
  )

  const nftRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/balance-of?walletAddress=${account}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      }
    }
  )

  const ragzResult = await ragzRes.json()

  const tagzResult = await tagzRes.json()

  const nftResult = await nftRes.json()

  console.log('ragzResult', ragzResult)
  console.log('tagzResult', tagzResult)
  console.log('nftResult', nftResult)

  return NextResponse.json({ ragzResult, tagzResult, nftResult }, { status: 200 })
}
