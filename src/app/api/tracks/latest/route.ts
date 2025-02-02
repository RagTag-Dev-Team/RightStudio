import { NextResponse } from 'next/server'

import { getDb } from '@/libs/surreal'

// Cache duration in seconds (e.g., 60 seconds = 1 minute)
const CACHE_DURATION = 60

export async function GET() {
  try {
    const db = await getDb()

    // Query to get the 5 most recent tracks
    const tracks = await db.query(`
      SELECT
        *
      FROM media
      WHERE status = 'minted'
      ORDER BY uploadedAt DESC
      LIMIT 5
    `)

    console.log(tracks)

    // Create a response with cache headers
    const response = NextResponse.json(tracks[0])

    // Set cache control headers
    response.headers.set('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`)

    return response
  } catch (error) {
    console.error('Database error:', error)

    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 })
  }
}
