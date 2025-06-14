import { defineChain, getContract } from 'thirdweb'

import { client } from '@/libs/thirdwebclient'

export const mediaCollectionAddress = process.env.MEDIA_CONTRACT_ADDRESS
export const tagzCollectionAddress = process.env.TAGZ_TOKEN_ADDRESS

//console.log(mediaCollectionAddress)

export const mediaContract = getContract({
  client,
  chain: defineChain(11155111),
  address: process.env.NEXT_PUBLIC_MEDIA_CONTRACT_ADDRESS!
})

export const tagzContract = getContract({
  client,
  chain: defineChain(11155111),
  address: process.env.TAGZ_TOKEN_ADDRESS!
})
