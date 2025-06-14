import { NextResponse } from 'next/server'
import { getDb } from '@/libs/surreal'
import { RecordId } from 'surrealdb'

export async function POST(req: Request) {
  try {
    const { status, certificateId, projectId, downloadUrl, metadata } = await req.json()

    const { recordId, walletAddress } = metadata

    if (status === 'completed') {
      // Update database
      const db = await getDb()
      await db.update(new RecordId('media', recordId), {
        certificateId,
        certificateProjectId: projectId,
        watermarkedUrl: downloadUrl
      })

      // Award TAGZ
      await fetch('/api/reward', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          amount: '100.0'
        })
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook processing failed:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
