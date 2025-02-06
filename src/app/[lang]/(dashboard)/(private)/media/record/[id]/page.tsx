'use client'

import RecordDetails from '@views/dashboards/fileUpload/record-page/RecordDetails'

export default function RecordPage({ params }: { params: { id: string } }) {
  return <RecordDetails recordId={params.id} />
}
