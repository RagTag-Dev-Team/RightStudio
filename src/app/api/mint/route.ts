import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { mintTo } from 'thirdweb/extensions/erc721'

import { prepareContractCall, sendTransaction } from 'thirdweb'
import { useActiveAccount } from 'thirdweb/react'

import { mediaCollectionAddress, mediaContract } from '@/utils/getMediaContract'

const { ENGINE_URL, BACKEND_WALLET_ADDRESS, CHAIN_ID, ENGINE_SECRET_KEY, MEDIA_CONTRACT_ADDRESS } = process.env

export async function POST(req: NextRequest) {
  if (!ENGINE_URL || !BACKEND_WALLET_ADDRESS || !CHAIN_ID || !ENGINE_SECRET_KEY) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 })
  }

  const { metadata, walletAddress } = await req.json()

  const contract = mediaContract
  const chainId = CHAIN_ID
  const backendWalletAddress = BACKEND_WALLET_ADDRESS

  try {
    // console.log(`URL:  ${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/mint-to?simulateTx=true`)

    const NFTMetadata = {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      properties: metadata.properties
    }

    console.log('Sending request to engine to mint NFT ')

    const transaction = mintTo({
      contract,
      to: walletAddress.address,
      nft: NFTMetadata
    })

    const { transactionHash } = await sendTransaction({
      walletAddress,
      transaction
    })

    return new NextResponse(JSON.stringify({ message: 'NFT minted successfully', transactionHash }), { status: 200 })

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
