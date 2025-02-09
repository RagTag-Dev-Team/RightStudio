'use server'

import { getWalletBalance } from 'thirdweb/wallets'
import { defineChain } from 'thirdweb'
import { type Chain } from 'thirdweb/chains'

import { client } from '@/libs/thirdwebclient'

const {
  ENGINE_URL,
  BACKEND_WALLET_ADDRESS,
  CHAIN_ID,
  ENGINE_SECRET_KEY,
  TAGZ_TOKEN_ADDRESS,
  RAGZ_TOKEN_ADDRESS,
  NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
  MEDIA_CONTRACT_ADDRESS
} = process.env

// Fix the chain definition by ensuring CHAIN_ID is a number
const chain = defineChain(Number(CHAIN_ID)) as Chain

interface TokenBalances {
  ragzResult: { result: { displayValue: string } }
  tagzResult: { result: { displayValue: string } }
  nftResult: { result: { displayValue: string } }
}

export async function getUserBalances(address: string): Promise<TokenBalances> {
  // Get RAGZ balance
  const ragzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${RAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${address}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      }
    }
  )

  // Get TAGZ balance
  const tagzRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${TAGZ_TOKEN_ADDRESS}/erc20/balance-of?wallet_address=${address}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`
      }
    }
  )

  // Get NFT balance (media contract)
  const nftRes = await fetch(
    `${ENGINE_URL}/contract/${CHAIN_ID}/${MEDIA_CONTRACT_ADDRESS}/erc721/balance-of?walletAddress=${address}`,
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

  return {
    ragzResult,
    tagzResult,
    nftResult
  }
}
