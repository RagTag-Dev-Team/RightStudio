// Next Imports
import { NextResponse } from 'next/server'

const icons = [
  'tabler-plane-tilt',
  'tabler-a-b-2',
  'tabler-layout-grid',
  'tabler-brand-whatsapp',
  'tabler-building-skyscraper'
]

export async function GET() {
  return NextResponse.json(icons)
}
