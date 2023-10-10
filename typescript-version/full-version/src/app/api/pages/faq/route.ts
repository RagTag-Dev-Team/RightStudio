// Next Imports
import { NextResponse } from 'next/server'

import { db } from '@/app/api/fake-db/pages/faq'

export async function GET() {
  return NextResponse.json(db)
}
