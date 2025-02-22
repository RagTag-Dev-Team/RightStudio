import { NextResponse } from 'next/server'

import { loginUser } from '@/app/server/user-actions'

export async function POST(req: Request) {
  const { email, password, wallet_address } = await req.json()

  try {
    const userRecord = await loginUser(email, password, wallet_address)

    return NextResponse.json({
      status: 200,
      statusText: 'OK',
      userRecord
    })
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
