// Next Imports
import { NextResponse } from 'next/server'

const icons = ['mdi-airplane', 'mdi-ab-testing', 'mdi-widgets-outline', 'mdi-whatsapp', 'mdi-water-well-outline']

export async function GET() {
  return NextResponse.json(icons)
}
