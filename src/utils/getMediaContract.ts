import { defineChain, getContract } from 'thirdweb'

import { client } from '@/libs/thirdwebclient'

export const mediaCollectionAddress = process.env.MEDIA_CONTRACT_ADDRESS

// console.log(mediaCollectionAddress)

export const mediaContract = getContract({
  client,
  chain: defineChain(80002),
  address: mediaCollectionAddress as string
})
