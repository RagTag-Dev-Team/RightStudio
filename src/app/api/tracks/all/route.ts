import { NextResponse } from 'next/server'

import { type NextRequest } from 'next/server'

import { getDb } from '@/libs/surreal'

// Cache duration in seconds (e.g., 60 seconds = 1 minute)
const CACHE_DURATION = 60

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

    // Create a response with cache headers
    const response = NextResponse.json(tracks[0] || [])

    // Set cache control headers
    response.headers.set('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`)

    return response
  } catch (error) {
    console.error('Database error:', error)

    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 })
  }
}
