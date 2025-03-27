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
    statusMessage: 'Initiating watermarking process...',
    progress: 10
  })

  try {
    const response = await fetch('/api/watermark/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recordId,
        ipfsUrl: recordData.ipfsUrl,
        certificateArgs: newCertificateArgs,
        walletAddress
      })
    })

    if (!response.ok) {
      throw new Error('Failed to start watermarking process')
    }

    const { jobId } = await response.json()

    // Poll Mentaport's status endpoint directly
    const pollInterval = setInterval(async () => {
      try {
        const statusResponse = await fetch(`https://api.mentaport.com/v1/certificates/${jobId}/status`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MENTAPORT_API_KEY}`
          }
        })

        const status = await statusResponse.json()

        if (status.completed) {
          // Refresh record data
          const updatedRecord = await getRecordById(recordId)
          setRecordData(updatedRecord)

          clearInterval(pollInterval)
          setIsWatermarking(false)
          setOpenWatermarkDialog(false)
          setShowSuccess(true)
          setSuccessMessage('File successfully watermarked!')
        } else {
          updateWatermarkProgress({
            statusMessage: status.message || 'Processing...',
            progress: status.progress || 0
          })
        }
      } catch (error) {
        console.error('Status check failed:', error)
      }
    }, 3000)

    // Clear interval after 10 minutes
    setTimeout(() => {
      clearInterval(pollInterval)
      if (isWatermarking) {
        setIsWatermarking(false)
        setSuccessMessage('Process started. Please check back later.')
        setShowSuccess(true)
      }
    }, 600000)
  } catch (error) {
    console.error('Error starting watermark process:', error)
    setIsWatermarking(false)
    setSuccessMessage('Failed to start watermarking process')
    setShowSuccess(true)
  }
}
