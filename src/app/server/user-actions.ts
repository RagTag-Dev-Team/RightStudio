'use server'

import { jsonify } from 'surrealdb'

import { getDb } from '@/libs/surreal'

const {
  ENGINE_URL,
  CHAIN_ID,
  TAGZ_TOKEN_ADDRESS,
  RAGZ_TOKEN_ADDRESS,
  NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
  MEDIA_CONTRACT_ADDRESS
} = process.env

// Fix the chain definition by ensuring CHAIN_ID is a number

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

interface User {
  length: number
  id: string
  name: string
  email: string
  password: string
  image: string
  wallet_address: string
}

export async function loginUser(email: string, password: string, wallet_address: string) {
  const db = await getDb()

  if (!db) {
    throw new Error('Database not initialized')
  }

  try {
    const result: User[] = await db.query(`SELECT * FROM User WHERE wallet_address = '${wallet_address}'`)

    console.log('result: ' + JSON.stringify(result, null, 2))

    const userRecord = result[0] ? jsonify(result[0]) : null

    if (!userRecord || result[0].length === 0) {
      return {
        newUser: true,
        wallet_address,
        email,
        password
      }
    }

    return userRecord[0]
  } catch (error) {
    console.error('Error querying user:', error)
    throw error
  }
}
