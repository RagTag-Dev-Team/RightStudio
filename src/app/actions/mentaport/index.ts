'use server'

import type { ICertificateArg, ICertificate, IResults, ICertificateUpdateArg } from '@mentaport/certificates'
import { ContentTypes, ContentFormat, VerificationStatus, CertificateStatus } from '@mentaport/certificates'

import { _getMentaportSDK } from '@/app/actions/mentaport/mentaport-sdk'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const getFileTypeStr = (fileType: string) => {
  const types = fileType.split('/')
  let type = ''
  let format: ContentFormat = ContentFormat[types[1].toUpperCase() as keyof typeof ContentFormat]

  // Handle audio formats specifically
  if (types[0] === 'audio') {
    format =
      types[1] === 'mp3'
        ? ContentFormat.mp3
        : types[1] === 'wav'
          ? ContentFormat.wav
          : types[1] === 'mpeg'
            ? ContentFormat.mp3
            : format
  }

  // Handle image formats
  else if (!format && types[1] === 'jpeg') {
    format = ContentFormat.jpg
  }

  // If format is still undefined, try to match it directly
  if (!format) {
    format = ContentFormat[types[1].toUpperCase() as keyof typeof ContentFormat]
  }

  for (const key in ContentTypes) {
    if (ContentTypes[key as keyof typeof ContentTypes].toLowerCase() === types[0]) {
      type = ContentTypes[key as keyof typeof ContentTypes]
    }
  }

  return { type, format }
}

// Create new certificate
export async function CreateCertificate(
  data: FormData,
  initCertificateArgs: ICertificateArg
): Promise<IResults<ICertificate>> {
  try {
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const blob = new Blob([buffer], { type: file.type })
    const typeInfo = getFileTypeStr(file.type)

    // console.log('file', file)

    initCertificateArgs.contentFormat = typeInfo.format as ContentFormat

    const sdk = await _getMentaportSDK()

    // 1. Create certificate by setting information and uploading content
    const genRes = await sdk.createCertificate(initCertificateArgs, blob)

     console.log('genRes', genRes)

    if (!genRes.status || genRes.data == null) {
      console.error('There was a problem uploading content for certificate')

      return genRes
    }

    const projectId = initCertificateArgs.projectId
    const certId = genRes.data.certId
    let status = genRes.data.status



    // 2. Check status until is ready (Pending if successful or NonActive if failed)
    let resCertStatus = await sdk.getCertificateStatus(projectId, certId)

    while (status !== CertificateStatus.Pending && status !== CertificateStatus.NonActive) {
      await sleep(2000)
      resCertStatus = await sdk.getCertificateStatus(projectId, certId)

      if (!resCertStatus.status) {
        return {
          status: resCertStatus.status,
          message: resCertStatus.message,
          statusCode: resCertStatus.statusCode
        }
      }

      if (resCertStatus.data) {
        if (resCertStatus.data.status.error) {
          return {
            status: false,
            message: resCertStatus.data.status.statusMessage,
            statusCode: resCertStatus.statusCode
          }
        }

        status = resCertStatus.data.status.status

        // Update the response data with the status message
        if (genRes.data) {
          genRes.data.status = resCertStatus.data.status.status
        }
      }
    }

    // Add check for non-active status after the while loop
    if (resCertStatus.data?.status.status === CertificateStatus.NonActive) {
      return {
        status: false,
        message: resCertStatus.data.status.statusMessage || 'Certificate is not active',
        statusCode: resCertStatus.statusCode
      }
    }

    console.log('Now approving certificate')

    // TODO: Before approving, confirm the data from the above call to ensure everything looks good.
    // 3. Approve certificate for it to be ready for download
    const appRes = await sdk.approveCertificate(initCertificateArgs.projectId, certId, true)

    return appRes
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(error)
    let message = 'Error creating certificate'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    return { status: false, message, statusCode: 501 }
  }
}

// Update Certificate
export async function UpdateCertificate(
  data: FormData,
  updateArgs: ICertificateUpdateArg
): Promise<IResults<ICertificate>> {
  try {
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const blob = new Blob([buffer], { type: file.type })
    const typeInfo = getFileTypeStr(file.type)

    updateArgs.contentFormat = typeInfo.format as ContentFormat
    const sdk = await _getMentaportSDK()
    const genRes = await sdk.updateCertificate(updateArgs, blob)

    return genRes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    let message = 'Error updating certificate'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    return { status: false, message, statusCode: 501 }
  }
}

// Verify content
export async function Verify(data: FormData) {
  try {
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const blob = new Blob([buffer], { type: file.type })
    const typeInfo = getFileTypeStr(file.type)
    const sdk = await _getMentaportSDK()
    const url = 'http://examples.mentaport.com/upload'

    // 1. Verify content by uploading content
    console.log('jer 1e')
    const verRes = await sdk.verifyContent(typeInfo.format, url, blob)

    console.log('d', verRes)

    // check for result:

    if (!verRes.status || !verRes.data) {
      return verRes
    }

    // 2. Check status until is ready
    const verId = verRes.data.verId
    let status = VerificationStatus.Initiating
    let resVerStatus = null

    while (status !== VerificationStatus.NoCertificate && status !== VerificationStatus.Certified) {
      await sleep(2000)
      resVerStatus = await sdk.getVerificationStatus(verId)
      console.log(resVerStatus)

      if (resVerStatus.data) {
        status = resVerStatus.data.status.status
      }
    }

    return resVerStatus
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(error)
    let message = 'Error verifying content'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    return { status: false, message, statusCode: 501 }
  }
}

// Get Certificates
export async function GetCertificates(projectId?: string, certId?: string) {
  try {
    const sdk = await _getMentaportSDK()

    if (projectId && certId) {
      const result = await sdk.getCertificates(projectId, certId)

      console.log(result)

      return result
    }

    const result = await sdk.getCertificates()

    console.log(result)

    return result
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let message = 'Error getting certificates'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    console.log(error)

    return { status: false, message, statusCode: 501 }
  }
}

// Get users projects to extract certificates
export async function GetProjects(activeProjects: boolean) {
  try {
    const sdk = await _getMentaportSDK()
    const result = await sdk.getProjects(activeProjects)

    console.log(result)

    return result
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let message = 'Error getting projects'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    console.log(error)

    return { status: false, message, statusCode: 501 }
  }
}

export async function GetDownloadUrl(projectId: string, certId: string): Promise<IResults<string>> {
  try {
    const sdk = await _getMentaportSDK()
    const result = await sdk.getDownloadUrl(projectId, certId)

    return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    let message = 'Error getting URL'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    console.log(error)

    return { status: false, message, statusCode: 501 }
  }
}
