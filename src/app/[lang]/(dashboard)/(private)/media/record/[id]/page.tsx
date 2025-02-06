'use client'

import RecordDetails from '@views/media/record-page/RecordDetails'

export default function RecordPage({ params }: { params: { id: string } }) {
  return <RecordDetails recordId={params.id} />
}
