import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { Engine } from '@thirdweb-dev/engine'

import { defineChain } from 'thirdweb'

import { mediaCollectionAddress } from '@/utils/getMediaContract'

const { ENGINE_URL, BACKEND_WALLET_ADDRESS, CHAIN_ID, ENGINE_SECRET_KEY, MEDIA_CONTRACT_ADDRESS } = process.env

export async function POST(req: NextRequest) {
  if (!ENGINE_URL || !BACKEND_WALLET_ADDRESS || !CHAIN_ID || !ENGINE_SECRET_KEY) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 })
  }

  const engine = new Engine({
    url: ENGINE_URL,
    accessToken: ENGINE_SECRET_KEY
  })

  const { metadata, walletAddress } = await req.json()

  console.log('metadata', metadata)
  console.log('walletAddress', walletAddress)

  const contract = MEDIA_CONTRACT_ADDRESS
  const chainId = CHAIN_ID
  const backendWalletAddress = BACKEND_WALLET_ADDRESS

  try {
    // console.log(`URL:  ${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/mint-to?simulateTx=true`)

    console.log('Sending request to engine to mint NFT ')

    const mint = await engine.erc721.mintTo(chainId, contract as string, backendWalletAddress, {
      receiver: walletAddress,
      metadata: {
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        properties: metadata.properties
      }
    })

    console.log(mint)

    {
      /*

    const res = await fetch(
      `${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/mint-to?simulateTx=true`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${ENGINE_SECRET_KEY}`,
          'Content-Type': 'application/json',
          'x-backend-wallet-address': `${BACKEND_WALLET_ADDRESS}`
        },
        body: JSON.stringify({
          receiver: walletAddress,
          metadata: {
            name: name,
            image: image,
            description: description
          }
        })
      }
    )

    const data = await res.json()

    return new NextResponse(JSON.stringify({ message: 'NFT minted successfully', data }), { status: 200 })
*/
    }
  } catch (error) {
    console.log('Error minting NFT:', error)

    return NextResponse.json({ error: 'Failed to mint NFT' }, { status: 500 })
  }
}
