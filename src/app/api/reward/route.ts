import { Agent } from 'https'

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import fetch from 'node-fetch'

const {
  ENGINE_URL,
  BACKEND_WALLET_ADDRESS,
  CHAIN_ID,
  ENGINE_SECRET_KEY,
  NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
  TAGZ_TOKEN_ADDRESS
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

  const { walletAddress, amount } = await req.json()

  console.log('walletAddress', walletAddress)

  try {
    // console.log(`URL:  ${ENGINE_URL}/contract/${CHAIN_ID}/${mediaCollectionAddress}/erc721/mint-to?simulateTx=true`)

    console.log('Sending request to engine to mint Tagz ')

    /*
    const transaction = mintTo({
      contract,
      to: walletAddress.address,
      nft: NFTMetadata
    })

    const { transactionHash } = await sendTransaction({
      transaction,
      backendWalletAddress
    })

    console.log('Transaction hash:', transactionHash)

    return new NextResponse(JSON.stringify({ message: 'NFT minted successfully', transactionHash }), { status: 200 })
*/

    console.log('walletAddress', walletAddress)

    const res = await fetch(`${ENGINE_URL}/contract/${CHAIN_ID}/${TAGZ_TOKEN_ADDRESS}/erc20/mint-to?simulateTx=true`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'x-backend-wallet-address': `${BACKEND_WALLET_ADDRESS}`
      },
      body: JSON.stringify({
        toAddress: walletAddress,
        amount: '100.0'
      }),
      agent: new Agent({
        rejectUnauthorized: false
      })
    })

    const data = await res.json()

    // Add polling mechanism to check transaction status
    const maxAttempts = 10
    let attempts = 0
    let transactionStatus

    console.log('data', data)

    while (attempts < maxAttempts) {
      const resp = await fetch(`${ENGINE_URL}/transaction/status/${data.result.queueId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
        }
      })

      const statusData = await resp.json()

      console.log('Transaction status attempt', attempts + 1, statusData)

      // Check for error message in the response
      if (statusData.result.errorMessage) {
        throw new Error(`Transaction failed: ${statusData.result.errorMessage}`)
      }

      // Break if status is 'mined' or 'failed'
      if (statusData.result.status === 'mined' || statusData.result.status === 'failed') {
        transactionStatus = statusData.result.status

        // Store the transaction hash when mined
        const transactionHash = statusData.result.transactionHash

        if (transactionStatus === 'mined') {
          return new NextResponse(
            JSON.stringify({
              message: 'Tagz minted successfully',
              transactionHash,
              amount
            }),
            { status: 200 }
          )
        }

        break
      }

      attempts++

      // Wait 2 seconds before next attempt
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    if (transactionStatus === 'mined') {
      return new NextResponse(JSON.stringify({ message: 'Tagz rewarded successfully' }), { status: 200 })
    } else {
      throw new Error(`Minting failed with status: ${transactionStatus}`)
    }
  } catch (error) {
    console.log('Error minting NFT:', error)

    return NextResponse.json({ error: 'Failed to reward Tagz', data: error }, { status: 500 })
  }
}
