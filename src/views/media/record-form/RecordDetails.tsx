const handleWatermark = async () => {
  const walletAddress = activeAccount?.address || session?.user?.wallet_address

  if (!recordData || !walletAddress) {
    console.error('No wallet address found in session or active account')
    setSuccessMessage('Please connect your wallet to add watermark')
    setShowSuccess(true)
    return
  }

  setIsWatermarking(true)
  updateWatermarkProgress({
    statusMessage: 'Initializing watermarking process...',
    progress: 10
  })

  try {
    // Start watermarking process and get job ID
    const response = await fetch('/api/watermark/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recordId: recordId,
        ipfsUrl: recordData.ipfsUrl,
        certificateArgs: newCertificateArgs,
        walletAddress
      })
    })

    if (!response.ok) {
      throw new Error('Failed to start watermarking process')
    }

    const { jobId } = await response.json()

    // Poll for status every 3 seconds
    const pollInterval = setInterval(async () => {
      try {
        const statusResponse = await fetch(`/api/watermark/status/${jobId}`)
        const status = await statusResponse.json()

        if (status.completed) {
          // Update record data with new watermark info
          setRecordData({
            ...recordData,
            certificateId: status.data.certId,
            certificateProjectId: status.data.projectId,
            watermarkedUrl: status.data.downloadUrl
          })

          // Show success message
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 5000)
          setSuccessMessage(
            `File successfully watermarked! You've earned ${Number(status.data.tagzAmount).toFixed(2)} TAGZ for watermarking this file.`
          )

          clearInterval(pollInterval)
          setIsWatermarking(false)
          setOpenWatermarkDialog(false)
          setShowSuccess(true)
        } else if (status.error) {
          throw new Error(status.error)
        } else {
          // Update progress
          updateWatermarkProgress({
            statusMessage: status.message || 'Processing...',
            progress: status.progress || 0
          })
        }
      } catch (error) {
        console.error('Status check failed:', error)
        clearInterval(pollInterval)
        setIsWatermarking(false)
        setSuccessMessage('Failed to watermark file: ' + (error instanceof Error ? error.message : 'Unknown error'))
        setShowSuccess(true)
      }
    }, 3000)

    // Set timeout after 10 minutes
    setTimeout(() => {
      clearInterval(pollInterval)
      if (isWatermarking) {
        setIsWatermarking(false)
        setSuccessMessage('Watermarking process is taking longer than expected. Please check back later.')
        setShowSuccess(true)
      }
    }, 600000) // 10 minutes
  } catch (error) {
    console.error('Error starting watermark process:', error)
    setIsWatermarking(false)
    setSuccessMessage('Failed to start watermarking process')
    setShowSuccess(true)
  }
}
