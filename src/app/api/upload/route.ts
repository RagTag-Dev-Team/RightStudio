import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { upload } from 'thirdweb/storage'

import { client } from '@/libs/thirdwebclient'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const file = formData.get('file') as File

    console.log('formData', formData)

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const uploadUrl = await upload({
      client,
      files: [file]
    })

    console.log('uploadUrl', uploadUrl)

    return NextResponse.json({ url: uploadUrl })
  } catch (error) {
    console.error('Upload error:', error)

    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
