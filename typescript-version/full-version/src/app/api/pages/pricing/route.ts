// Next Imports
import { NextResponse } from 'next/server'

import { db } from '@/app/api/fake-db/pages/pricing'

export async function GET() {
  return NextResponse.json(db)
}
