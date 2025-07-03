import { NextResponse } from 'next/server'

import { GetDownloadUrl } from '@/app/actions/mentaport/index'

export async function POST(req: Request) {
  try {
    const { projectId, certId } = await req.json()

    if (!projectId || !certId) {
      return NextResponse.json(
        { error: 'projectId and certId are required' },
        { status: 400 }
      )
    }

    console.log('Refreshing download URL for:', { projectId, certId })

    // Get a fresh download URL from Mentaport
    const downloadUrlResult = await GetDownloadUrl(projectId, certId)

    if (!downloadUrlResult.status || !downloadUrlResult.data) {
      console.error('Failed to get download URL:', downloadUrlResult.message)
      
return NextResponse.json(
        { error: downloadUrlResult.message || 'Failed to get download URL' },
        { status: 500 }
      )
    }

    console.log('Successfully refreshed download URL')

    return NextResponse.json({ url: downloadUrlResult.data })
  } catch (error) {
    console.error('Error refreshing download URL:', error)

    return NextResponse.json(
      { error: 'Failed to refresh download URL' },
      { status: 500 }
    )
  }
}
