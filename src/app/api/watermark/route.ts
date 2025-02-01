import type { ICertificateArg, ICertificate, IResults } from '@mentaport/certificates'
import { ContentTypes, ContentFormat, AITrainingMiningInfo, CopyrightInfo } from '@mentaport/certificates'

import { _getMentaportSDK } from '@/libs/mentaport/actions/mentaport/mentaport-sdk'

const getFileTypeStr = (fileType: string) => {
  const types = fileType.split('/')
  let type = ''
  let format: ContentFormat = ContentFormat[types[1] as keyof typeof ContentFormat]

  if (!format && types[1] == 'jpeg') format = ContentFormat.jpg

  for (const key in ContentTypes) {
    if (ContentTypes[key as keyof typeof ContentTypes].toLowerCase() === types[0]) {
      type = ContentTypes[key as keyof typeof ContentTypes]
    }
  }

  return { type, format }
}

export async function POST(req: Request) {
  const request = await req.json()

  const { recordId, title, artist, album, fileType, fileBlob } = request

  if (!recordId || !fileBlob) {
    return new Response(JSON.stringify({ error: 'recordId and file data are required' }), { status: 400 })
  }

  try {
    // Convert the array buffer back to a Blob
    const file = new Blob([fileBlob], { type: fileType })

    const formData = new FormData()

    formData.append('file', file)

    const initCertificateArgs: ICertificateArg = {
      contractId: process.env.NEXT_PUBLIC_MENTAPORT_CONTRACT_ID!,
      name: title,
      description: `${artist} - ${album}`,
      copyrightInfo: CopyrightInfo.Copyrighted,
      aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
      usingAI: false,
      aiSoftware: '',
      aiModel: '',
      album,
      albumYear: '',
      city: '',
      country: '',
      contentType: ContentTypes.Audio,
      username: ''
    }

    const myHeaders = new Headers()

    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('x-api-key', `${process.env.MENTAPORT_API_KEY!}`)

    // Create URL with query parameters
    const baseUrl = 'https://public.api.mentaport.xyz/prod/v1/certificates/create'

    const params = new URLSearchParams({
      contractId: process.env.NEXT_PUBLIC_MENTAPORT_CONTRACT_ID!,
      contentFormat: initCertificateArgs.contentType,
      username: initCertificateArgs.username,
      name: initCertificateArgs.name,
      description: initCertificateArgs.description,
      copyrightInfo: initCertificateArgs.copyrightInfo,
      aiTrainingMiningInfo: initCertificateArgs.aiTrainingMiningInfo,
      usingAI: initCertificateArgs.usingAI,
      aiSoftware: initCertificateArgs.aiSoftware,
      aiModel: initCertificateArgs.aiModel,
      album: initCertificateArgs.album,
      albumYear: initCertificateArgs.albumYear,
      city: initCertificateArgs.city,
      country: initCertificateArgs.country
    })

    const urlWithParams = `${baseUrl}?${params.toString()}`

    console.log('urlWithParams', urlWithParams)

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    const presignedURL = await fetch(urlWithParams, requestOptions)
      .then(response => response.json()) // Changed from response.text()
      .then(result => {
        console.log('Presigned URL result:', result)

        return result
      })
      .catch(error => console.error('Error getting presigned URL:', error))

    console.log('presignedURL', presignedURL)

    // console.log('initCertificateArgs', initCertificateArgs)
    const result = await Create(formData, initCertificateArgs)

    console.log('result', result)

    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error) {
    console.error('Error processing watermark:', error)

    return new Response(JSON.stringify({ error: 'Failed to process watermark' }), { status: 500 })
  }
}

// Create new certificate
export async function Create(data: FormData, initCertificateArgs: ICertificateArg): Promise<IResults<ICertificate>> {
  try {
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()

    const buffer = Buffer.from(bytes)
    const blob = new Blob([buffer], { type: file.type })
    const typeInfo = getFileTypeStr(file.type)

    initCertificateArgs.contentType = typeInfo.type as ContentTypes

    const sdk = await _getMentaportSDK()

    // console.log('sdk', sdk)
    const initResult = await sdk.initCertificate(initCertificateArgs)

    console.log('initResult', initResult)

    if (!initResult.status || !initResult.data) {
      console.error('There was a problem creating the certificate')

      return { status: false, statusCode: initResult.statusCode, message: initResult.message }
    }

    console.log('now uploading content')

    const certId = initResult.data.certId

    // generate

    const genRes = await sdk.generateCertificate(
      initCertificateArgs.contractId,
      certId,
      typeInfo.format as ContentFormat,
      blob
    )

    if (!genRes.status) {
      console.error('There was a problem uploading contnet for certificate')

      return genRes
    }

    console.log('Now approving certificate')

    // TODO: Before approving, confirm the data from the above call to ensure everything looks good.
    const appRes = await sdk.approveCertificate(initCertificateArgs.contractId, certId, true)

    return appRes
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let message = 'Error creating certificate'

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
    const url = 'app_url'
    const verRes = await sdk.verifyContentPresignURL(typeInfo.format, url, blob)

    // const verRes = await sdk.verifyContent(format, url, blob);∂
    return verRes
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let message = 'Error verifying content'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    return { status: false, message, statusCode: 501 }
  }
}

// Get Certificates
export async function GetCertificates(contractId?: string, certId?: string) {
  try {
    console.log(contractId)
    const sdk = await _getMentaportSDK()

    if (contractId && certId) {
      const result = await sdk.getCertificate(contractId, certId)

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

// Get users contracts to extract certificates
export async function GetContracts(activeContracts: boolean) {
  try {
    const sdk = await _getMentaportSDK()
    const result = await sdk.getContracts(activeContracts)

    console.log(result)

    return result
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let message = 'Error getting contracts'

    if (error.response && error.response.data) {
      message = error.response.data.message
    }

    console.log(error)

    return { status: false, message, statusCode: 501 }
  }
}
