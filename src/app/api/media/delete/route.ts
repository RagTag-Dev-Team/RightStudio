import { NextResponse } from 'next/server'

import { unpin } from 'thirdweb/storage'

import { client } from '@/libs/thirdwebclient'

import { remove } from '@/app/server/data-actions'

interface DeleteRecord {
  id: string
  cid: string
}

export async function DELETE(request: Request) {
  try {
    const { records } = (await request.json()) as { records: DeleteRecord[] }

    // Unpin the records from IPFS one at a time
    for (const record of records) {
      console.log(record.cid)

      try {
        const result = await unpin({
          client,
          cid: record.cid
        })

        console.log(result)
      } catch (error: any) {
        // If the error is "Not Found", log it but continue
        if (error.message?.includes('Not Found')) {
          console.log(error.message)
          console.log(`CID not found in IPFS, continuing with database deletion: ${record.cid}`)
        } else {
          // For other errors, throw to be caught by outer try-catch
          throw error
        }
      }

      // Remove 'media:' prefix from the ID before deletion
      const recordId = record.id.replace('media:', '')

      await remove('media', recordId)
      console.log('Record deleted:', recordId)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting records:', error)

    return NextResponse.json({ error: 'Failed to delete records' }, { status: 500 })
  }
}
