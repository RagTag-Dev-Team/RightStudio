import { NextResponse } from 'next/server'

import { type NextRequest } from 'next/server'

import { resolveScheme } from 'thirdweb/storage'

import { client } from '@/libs/thirdwebclient'

import { getDb } from '@/libs/surreal'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const owner = searchParams.get('owner')

    if (!owner) {
      return NextResponse.json({ error: 'Owner address is required' }, { status: 400 })
    }

    const db = await getDb()

    // Fetch tracks for specific owner
    const tracks = await db.query(
      `
      SELECT * FROM media
      WHERE owner = $owner
      ORDER BY created_at DESC
    `,
      {
        owner
      }
    )

    return NextResponse.json(tracks[0] || [])
  } catch (error) {
    console.error('Database error:', error)

    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 })
  }
}
