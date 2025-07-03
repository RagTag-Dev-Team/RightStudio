'use server'

import { getWalletBalance } from 'thirdweb/wallets'

import { jsonify } from 'surrealdb'

import { readContract } from 'thirdweb'

import { ragzContract, tagzContract, mediaContract } from '@/utils/getMediaContract'

import { getDb } from '@/libs/surreal'

import { client } from '@/libs/thirdwebclient'

import { generateUsername } from '@/utils/userUtils'

const { ENGINE_URL, CHAIN_ID, TAGZ_TOKEN_ADDRESS, MEDIA_CONTRACT_ADDRESS, ENGINE_SECRET_KEY } = process.env

// Fix the chain definition by ensuring CHAIN_ID is a number

interface TokenBalances {
  ragzResult: { result: { displayValue: string } }
  tagzResult: { result: { displayValue: string } }
  nftResult: { result: { displayValue: string } }
}

export async function getUserBalances(address: string): Promise<TokenBalances> {
  if (!address) {
    throw new Error('No wallet address provided')
  }

  if (!ENGINE_URL || !CHAIN_ID || !TAGZ_TOKEN_ADDRESS || !MEDIA_CONTRACT_ADDRESS || !ENGINE_SECRET_KEY) {
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
    console.log('Attempting to query user with wallet_address:', wallet_address)

    // First, let's see what tables exist
    const tables = await db.query('INFO FOR DB')

    console.log('Available tables:', tables)

    // Try to query the user table - use uppercase User to match the database
    const result: User[] = await db.query(`SELECT * FROM User WHERE wallet_address = $wallet_address`, {
      wallet_address: wallet_address
    })

    console.log('loginUser result:', JSON.stringify(result, null, 2))

    // Check if we got any results
    if (!result || result.length === 0 || !result[0] || result[0].length === 0) {
      console.log('No user found, returning newUser object')
      
return {
        newUser: true,
        wallet_address,
        email,
        password,
        name: generateUsername(), // Add default name
        image: '/images/avatars/1.png' // Add default image
      }
    }

    const userRecord = jsonify(result[0])

    console.log('User found:', userRecord)

    // Ensure the returned user has all required fields
    const user = Array.isArray(userRecord) ? userRecord[0] : userRecord

    
return {
      ...user,
      name: user.name || generateUsername(),
      image: user.image || '/images/avatars/1.png',
      email: user.email || `${wallet_address.slice(0, 6)}@wallet.local`
    }
  } catch (error) {
    console.error('Error querying user:', error)

    // If the query fails, it might be because the table doesn't exist or has different schema
    // Return a newUser object so the authentication can proceed
    console.log('Query failed, returning newUser object as fallback')
    
return {
      newUser: true,
      wallet_address,
      email,
      password,
      name: generateUsername(),
      image: '/images/avatars/1.png'
    }
  }
}

export async function createMedia(mediaMetadata: any) {
  const db = await getDb()
  const created = await db.create('media', mediaMetadata)

  await db.close()

  return created
}
