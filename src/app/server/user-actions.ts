'use server'

import { getWalletBalance } from 'thirdweb/wallets'

import { jsonify } from 'surrealdb'

import { readContract } from 'thirdweb'

import { ragzContract, tagzContract, mediaContract } from '@/utils/getMediaContract'

import { getDb } from '@/libs/surreal'

import { client } from '@/libs/thirdwebclient'

const {
  ENGINE_URL,
  CHAIN_ID,
  TAGZ_TOKEN_ADDRESS,
  RAGZ_TOKEN_ADDRESS,
  NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
  MEDIA_CONTRACT_ADDRESS,
  ENGINE_SECRET_KEY,
  CLIENT_ID
} = process.env

// Fix the chain definition by ensuring CHAIN_ID is a number
const chain = CHAIN_ID

interface TokenBalances {
  ragzResult: { result: { displayValue: string } }
  tagzResult: { result: { displayValue: string } }
  nftResult: { result: { displayValue: string } }
}

export async function getUserBalances(address: string): Promise<TokenBalances> {
  console.log('Getting balances for address:', address)
  console.log('Using ENGINE_URL:', ENGINE_URL)
  console.log('Using CHAIN_ID:', CHAIN_ID)

  if (!address) {
    throw new Error('No wallet address provided')
  }

  if (
    !ENGINE_URL ||
    !CHAIN_ID ||
    !RAGZ_TOKEN_ADDRESS ||
    !TAGZ_TOKEN_ADDRESS ||
    !MEDIA_CONTRACT_ADDRESS ||
    !ENGINE_SECRET_KEY
  ) {
    throw new Error('Missing required environment variables')
  }

  try {
    // Get RAGZ balance
    const ragzRes = await readContract({
      contract: ragzContract,
      method: 'function balanceOf(address owner) view returns (uint256)',
      params: [address]
    })

    // Get TAGZ balance

    const tagzRes = await readContract({
      contract: tagzContract,
      method: 'function balanceOf(address owner) view returns (uint256)',
      params: [address]
    })

    // Get NFT balance
    const nftRes = await readContract({
      contract: mediaContract,
      method: 'function balanceOf(address owner) view returns (uint256)',
      params: [address]
    })

    const TOKEN_DECIMALS = 18n // Most ERC20 tokens use 18 decimals

    const ragzResult = {
      result: {
        displayValue: (Number(ragzRes) / Number(10n ** TOKEN_DECIMALS)).toString()
      }
    }

    const tagzResult = {
      result: {
        displayValue: (Number(tagzRes) / Number(10n ** TOKEN_DECIMALS)).toString()
      }
    }

    const nftResult = {
      result: {
        displayValue: nftRes.toString() // NFT balance is already a count
      }
    }

    console.log('RAGZ Result:', ragzResult)
    console.log('TAGZ Result:', tagzResult)
    console.log('NFT Result:', nftResult)

    return {
      ragzResult,
      tagzResult,
      nftResult
    }
  } catch (error) {
    console.error('Error fetching balances:', error)
    throw error
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

    //    console.log('result: ' + JSON.stringify(result, null, 2))

    const userRecord = result[0] ? jsonify(result[0]) : null

    if (!userRecord || result[0].length === 0) {
      return {
        newUser: true,
        wallet_address,
        email,
        password
      }
    }

    return result[0]
  } catch (error) {
    console.error('Error querying user:', error)
    throw error
  }
}

export async function createMedia(mediaMetadata: any) {
  const db = await getDb()
  const created = await db.create('media', mediaMetadata)

  await db.close()

  return created
}
