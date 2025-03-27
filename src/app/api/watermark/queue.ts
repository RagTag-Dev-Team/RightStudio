import Queue from 'bull'
import { getDb } from '@/libs/surreal'
import { RecordId } from 'surrealdb'
import { CreateCertificate, GetDownloadUrl } from '@/app/actions/mentaport/index'

const watermarkQueue = new Queue('watermark-queue', process.env.REDIS_URL || '')

watermarkQueue.process(async job => {
  const { recordId, ipfsUrl, certificateArgs, walletAddress } = job.data

  try {
    // Download file from IPFS
    job.progress(20)
    const response = await fetch(ipfsUrl)
    const blob = await response.blob()
    const file = new File([blob], 'audio', { type: blob.type })

    // Create form data
    const formData = new FormData()
    formData.append('file', file)

    // Create certificate
    job.progress(40)
    const createdCert = await CreateCertificate(formData, certificateArgs)

    if (!createdCert.status || !createdCert.data) {
      throw new Error(createdCert.message || 'Failed to create certificate')
    }

    const { projectId, certId } = createdCert.data

    // Get download URL
    job.progress(60)
    const downloadUrl = await GetDownloadUrl(projectId, certId)

    if (!downloadUrl.status || !downloadUrl.data) {
      throw new Error(downloadUrl.message || 'Failed to get download URL')
    }

    // Update database
    job.progress(80)
    const db = await getDb()
    await db.update(new RecordId('media', recordId), {
      certificateId: certId,
      certificateProjectId: projectId,
      watermarkedUrl: downloadUrl.data
    })

    // Award TAGZ
    job.progress(90)
    const rewardResponse = await fetch('/api/reward', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        walletAddress,
        amount: '100.0'
      })
    })

    const rewardData = await rewardResponse.json()

    job.progress(100)

    return {
      certId,
      projectId,
      downloadUrl: downloadUrl.data,
      tagzAmount: rewardData.amount
    }
  } catch (error) {
    console.error('Watermark job failed:', error)
    throw error
  }
})

export default watermarkQueue
