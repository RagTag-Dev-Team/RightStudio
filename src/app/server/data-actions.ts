'use server'

import { RecordId, StringRecordId } from 'surrealdb'

import { constrainPoint } from '@fullcalendar/core/internal'

import { Engine, prepareContractCall } from 'thirdweb'

import { mintTo } from 'thirdweb/extensions/erc721'

import { mediaContract, tagzContract } from '@/utils/getMediaContract'

import { client } from '@/libs/thirdwebclient'

import { getDb } from '@/libs/surreal'

// Initialize SurrealDB connection
const db = await getDb()

const myServerWallet = Engine.serverWallet({
  client,
  address: process.env.THIRDWEB_SERVER_WALLET,
  vaultAccessToken: process.env.THIRDWEB_VAULT_TOKEN
})

// Connection configuration

// Generic CRUD Operations
export async function create<T>(table: string, data: Partial<T>): Promise<T> {
  try {
    const created = await db.create(table, data)

    return created as T
  } catch (error) {
    console.error(`Error creating record in ${table}:`, error)
    throw error
  }
}

export async function getById<T>(table: string, id: string): Promise<T | null> {
  try {
    const record = await db.select(`${table}:${id}`)

    return record as T
  } catch (error) {
    console.error(`Error fetching record from ${table}:`, error)
    throw error
  }
}

export async function getAll<T>(table: string): Promise<T[]> {
  try {
    const records = await db.select(table)

    return records as T[]
  } catch (error) {
    console.error(`Error fetching all records from ${table}:`, error)
    throw error
  }
}

export async function update<T>(table: string, id: string, data: Partial<T>): Promise<T> {
  try {
    const updated = await db.merge(`${table}:${id}`, data)

    return updated as T
  } catch (error) {
    console.error(`Error updating record in ${table}:`, error)
    throw error
  }
}

export async function remove(table: string, id: string): Promise<boolean> {
  try {
    const deletedRecord = await db.delete(new RecordId(table, id))

    console.log(deletedRecord)

    return true
  } catch (error) {
    console.error(`Error deleting record from ${table}:`, error)
    throw error
  }
}

// Utility Functions
export async function query<T>(sql: string, vars?: Record<string, any>): Promise<T> {
  try {
    const result = await db.query(sql, vars)

    return result as T
  } catch (error) {
    console.error('Error executing query:', error)
    throw error
  }
}

export async function findByField(table: string, field: string, value: any): Promise<any> {
  try {
    const result = await db.query(`SELECT * FROM ${table} WHERE ${field} = $value`, { value })
    const tracks = JSON.parse(JSON.stringify(result[0]))

    return tracks
  } catch (error) {
    console.error(`Error finding records in ${table} by ${field}:`, error)
    throw error
  }
}

export async function countRecords(table: string): Promise<number> {
  try {
    const result = await db.query(`SELECT count() FROM ${table}`)

    return (result[0] as any).count
  } catch (error) {
    console.error(`Error counting records in ${table}:`, error)
    throw error
  }
}

export async function paginate<T>(
  table: string,
  page: number = 1,
  limit: number = 10
): Promise<{ data: T[]; total: number; pages: number }> {
  try {
    const start = (page - 1) * limit

    const [data, countResult] = await Promise.all([
      db.query(`SELECT * FROM ${table} LIMIT $limit START $start`, {
        limit,
        start
      }),
      db.query(`SELECT count() FROM ${table}`)
    ])

    const total = (countResult[0] as any).count
    const pages = Math.ceil(total / limit)

    return {
      data: data as T[],
      total,
      pages
    }
  } catch (error) {
    console.error(`Error paginating records in ${table}:`, error)
    throw error
  }
}

export async function getLatestTracks(limit: number = 10): Promise<any> {
  try {
    const result = await db.query(
      `
      SELECT * FROM media
      ORDER BY uploadedAt DESC
      LIMIT $limit
    `,
      { limit }
    )

    return JSON.parse(JSON.stringify(result[0]))
  } catch (error) {
    console.error('Error fetching latest tracks:', error)
    throw error
  }
}

interface MediaRecordData {
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: string
  coverImage?: string
  owner: string
  dateCreated: string
  ipfsUrl: string
}

export async function createMediaRecord(data: MediaRecordData): Promise<string> {
  const db = await getDb()

  try {
    // Create the record in the database
    const [record] = await db.create('media', {
      ...data,

      // Add any additional fields or transformations needed
      status: 'active',
      createdAt: new Date().toISOString()
    })

    if (!record) {
      throw new Error('Failed to create record')
    }

    //change the id to a string
    const recordId = String(record.id).split(':')[1]

    // Return the ID of the created record
    return recordId
  } catch (error) {
    console.error('Error creating media record:', error)
    throw new Error('Failed to create media record')
  }
}

export async function createMedia(mediaMetadata: any) {
  const db = await getDb()
  const created = await db.create('media', mediaMetadata)

  await db.close()

  return created
}

export async function getRecordById(recordId: string) {
  const db = await getDb()
  const record = await db.select(new RecordId('media', recordId))

  await db.close()

  if (!record) return null

  // Transform the record to a plain object
  return {
    id: recordId,
    title: record.title || '',
    artist: record.artist || '',
    album: record.album || '',
    filetype: record.filetype || '',
    filesize: record.filesize || '',
    duration: record.duration || '',
    label: record.label || '',
    releaseDate: record.releaseDate || null,
    ipfsUrl: record.ipfsUrl || '',
    status: record.status || 'unminted',
    uploadedAt: record.uploadedAt || '',
    coverImage: record.coverImage || '',
    owner: record.owner || '',
    transactionHash: record.transactionHash || '',
    watermarkedUrl: record.watermarkedUrl || '',
    certificateId: record.certificateId || '',
    certificateProjectId: record.certificateProjectId || '',
    tokenId: record.tokenId || '',
    dateMinted: record.dateMinted || null
  }
}

// Define the media record type
type MediaRecord = {
  id: string
  title: string
  artist: string
  album: string
  filetype: string
  filesize: string
  duration: string
  label: string
  releaseDate: string | null
  ipfsUrl: string
  status: 'unminted' | 'minted'
  uploadedAt: string
  coverImage?: string
  owner?: string
  transactionHash?: string
  watermarkedUrl?: string
  certificateId?: string
  certificateProjectId?: string
  tokenId?: string
  dateMinted?: string | null
}

export async function updateRecord(recordId: string, data: Partial<MediaRecord>) {
  const db = await getDb()

  // Remove any complex objects that might cause serialization issues
  const cleanData: MediaRecord = {
    id: recordId,
    title: data.title || '',
    artist: data.artist || '',
    album: data.album || '',
    filetype: data.filetype || '',
    filesize: data.filesize || '',
    duration: data.duration || '',
    label: data.label || '',
    releaseDate: typeof data.releaseDate === 'string' ? data.releaseDate : null,
    ipfsUrl: data.ipfsUrl || '',
    status: data.status || 'unminted',
    uploadedAt: data.uploadedAt || '',
    coverImage: data.coverImage,
    owner: data.owner,
    transactionHash: data.transactionHash,
    watermarkedUrl: data.watermarkedUrl,
    certificateId: data.certificateId,
    certificateProjectId: data.certificateProjectId,
    tokenId: data.tokenId,
    dateMinted: typeof data.dateMinted === 'string' ? data.dateMinted : null
  }

  const updated = await db.update<MediaRecord>(new RecordId('media', recordId), cleanData)

  await db.close()

  if (!updated) return null

  // Transform the response to match the same structure as getRecordById
  return {
    id: recordId,
    title: updated.title || '',
    artist: updated.artist || '',
    album: updated.album || '',
    filetype: updated.filetype || '',
    filesize: updated.filesize || '',
    duration: updated.duration || '',
    label: updated.label || '',
    releaseDate: updated.releaseDate || null,
    ipfsUrl: updated.ipfsUrl || '',
    status: updated.status || 'unminted',
    uploadedAt: updated.uploadedAt || '',
    coverImage: updated.coverImage || '',
    owner: updated.owner || '',
    transactionHash: updated.transactionHash || '',
    watermarkedUrl: updated.watermarkedUrl || '',
    certificateId: updated.certificateId || '',
    certificateProjectId: updated.certificateProjectId || '',
    tokenId: updated.tokenId || '',
    dateMinted: updated.dateMinted || null
  }
}

export async function mintRecord(metadata: any, walletAddress: string) {
  try {
    // Format metadata according to ERC721 standard
    const nftMetadata = {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      attributes: [
        {
          trait_type: 'Artist',
          value: metadata.properties.artist
        },
        {
          trait_type: 'Album',
          value: metadata.properties.album
        },
        {
          trait_type: 'Label',
          value: metadata.properties.label
        },
        {
          trait_type: 'Release Date',
          value: metadata.properties.releaseDate
        },
        {
          trait_type: 'Duration',
          value: metadata.properties.duration
        }
      ],
      properties: {
        files: [
          {
            uri: metadata.properties.ipfsUrl,
            type: metadata.properties.fileType
          }
        ],
        category: 'audio'
      }
    }

    // Prepare the contract call for minting
    const transaction = mintTo({
      contract: mediaContract,
      to: walletAddress,
      nft: nftMetadata
    })

    // Send the transaction using the backend wallet
    const { transactionId } = await myServerWallet.enqueueTransaction({
      transaction
    })

    return transactionId
  } catch (error) {
    console.error('Error minting record:', error)
    throw error
  }
}

export async function getMintingStatus(queueId: string) {
  const transactionId = queueId

  console.log('TransactionId', JSON.stringify(transactionId))

  try {
    const executionResult = await Engine.getTransactionStatus({
      client,
      transactionId
    })

    return executionResult
  } catch (error) {
    console.error('Error getting minting status:', error)
    throw error
  }

  /*

  try {
    const resp = await fetch(`${process.env.ENGINE_URL}/transaction/status/${queueId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.ENGINE_SECRET_KEY}`
      }
    })

    const statusData = await resp.json()

    console.log(statusData)

    return statusData.result
  } catch (error) {
    console.error('Error getting minting status:', error)
    throw error
  }
    */
}

export async function awardTagz(walletAddress: string, amount: string = '100.0') {
  try {
    const transaction = await prepareContractCall({
      contract: tagzContract,
      method: 'function mintTo(address to, uint256 amount)',
      params: [walletAddress, BigInt(Math.floor(parseFloat(amount) * 1e18))]
    })

    const { transactionId } = await myServerWallet.enqueueTransaction({
      transaction
    })

    /*
  if (
    !process.env.ENGINE_URL ||
    !process.env.BACKEND_WALLET_ADDRESS ||
    !process.env.CHAIN_ID ||
    !process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY ||
    !process.env.TAGZ_TOKEN_ADDRESS
  ) {
    throw new Error('Missing environment variables')
  }






  try {
    const res = await fetch(
      `${process.env.ENGINE_URL}/contract/${process.env.CHAIN_ID}/${process.env.TAGZ_TOKEN_ADDRESS}/erc20/mint-to?simulateTx=true`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.ENGINE_SECRET_KEY}`,
          'Content-Type': 'application/json',
          'x-backend-wallet-address': `${process.env.BACKEND_WALLET_ADDRESS}`
        },
        body: JSON.stringify({
          toAddress: walletAddress,
          amount: amount
        }),
        agent: new (require('https').Agent)({
          rejectUnauthorized: false
        })
      }
    )

    const data = await res.json()

    */

    // Add polling mechanism to check transaction status
    const maxAttempts = 10
    let attempts = 0
    let transactionStatus

    while (attempts < maxAttempts) {
      const resp = await Engine.getTransactionStatus({
        client,
        transactionId
      })

      console.log(resp.status)

      // Check for error message in the response
      if (resp.errorMessage) {
        throw new Error(`Transaction failed: ${resp.errorMessage}`)
      }

      // Break if status is 'mined' or 'failed'
      if (resp.status === 'CONFIRMED' || resp.status === 'FAILED') {
        transactionStatus = resp.status

        if (transactionStatus === 'CONFIRMED') {
          return {
            message: 'Tagz minted successfully',
            transactionHash: resp.transactionHash,
            amount
          }
        }

        break
      }

      attempts++

      // Wait 2 seconds before next attempt
      await new Promise(resolve => setTimeout(resolve, 6000))
    }

    if (transactionStatus !== 'CONFIRMED') {
      throw new Error(`Minting failed with status: ${transactionStatus}`)
    }

    return { message: 'Tagz rewarded successfully' }
  } catch (error) {
    console.error('Error awarding TAGZ:', error)
    throw error
  }
}
