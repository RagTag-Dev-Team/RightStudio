import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { id, status, output, error } = data

    // Store the generation result in KV store
    await kv.set(`cover-art:${id}`, {
      status,
      output,
      error,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
