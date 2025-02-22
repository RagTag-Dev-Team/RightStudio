import { getDb } from '@/libs/surreal'

import { client } from '@/libs/thirdwebclient'

export async function POST(req: Request) {
  try {
    const { recordId, ipfsUrl, coverImage, transactionHash } = await req.json()

    if (!recordId) {
      return new Response(JSON.stringify({ error: 'Record ID is required' }), { status: 400 })
    }

    // 1. If record was minted, burn the token
    if (transactionHash) {
      try {
        // Call your contract's burn function
        // Implementation depends on your smart contract setup
        await burnNFT(transactionHash)
      } catch (error) {
        console.error('Error burning NFT:', error)

        return new Response(JSON.stringify({ error: 'Failed to burn NFT' }), { status: 500 })
      }
    }

    // 2. Unpin files from IPFS
    try {
      if (ipfsUrl) {
        await client.storage.delete(ipfsUrl)
      }

      if (coverImage) {
        await client.storage.delete(coverImage)
      }
    } catch (error) {
      console.error('Error unpinning from IPFS:', error)

      // Continue with deletion even if unpinning fails
    }

    // 3. Delete record from database
    const db = await getDb()

    await db.delete(new RecordId('media', recordId))

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Error in delete route:', error)

    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}

// Implement this function based on your smart contract setup
async function burnNFT(transactionHash: string) {
  // Add your NFT burning logic here
  throw new Error('NFT burning not implemented')
}
