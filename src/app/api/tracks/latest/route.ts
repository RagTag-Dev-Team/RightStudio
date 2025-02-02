import { NextResponse } from 'next/server'

import { getDb } from '@/libs/surreal'

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

    return NextResponse.json(tracks[0])
  } catch (error) {
    console.error('Database error:', error)

    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 })
  }
}
