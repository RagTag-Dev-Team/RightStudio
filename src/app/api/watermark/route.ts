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
  const { recordData } = request

  if (!recordData) {
    return new Response(JSON.stringify({ error: 'recordData is required' }), { status: 400 })
  }

  try {
    // Download file from IPFS URL
    const fileResponse = await fetch(recordData.ipfsUrl)
    const fileBlob = await fileResponse.blob()

    // Convert Blob to File
    const file = new File([fileBlob], recordData.title, { type: fileBlob.type })

    const formData = new FormData()
    
    formData.append('file', file)

    const { title, artist, album } = recordData

    const initCertificateArgs: ICertificateArg = {
      projectId: process.env.NEXT_PUBLIC_MENTAPORT_CONTRACT_ID!,
      name: title,
      description: `${artist} - ${album}`,
      copyrightInfo: CopyrightInfo.NoCopyright,
      aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
      usingAI: false,
      aiSoftware: '',
      aiModel: '',
      album: album,
      albumYear: '',
      city: '',
      country: '',
      username: ''
    }

    const baseUrl = process.env.NEXT_PUBLIC_MENTAPORT_API_URL!

    const params = new URLSearchParams({
      contractId: process.env.NEXT_PUBLIC_MENTAPORT_CONTRACT_ID!,
      name: title,
      description: `${artist} - ${album}`,
      copyrightInfo: CopyrightInfo.NoCopyright,
      contentType: ContentTypes.Audio,
      username: '',
      album: album,
      albumYear: '',
      aiTrainingMiningInfo: AITrainingMiningInfo.NotAllowed,
      usingAI: 'false',
      aiSoftware: '',
      aiModel: ''
    })

    const urlWithParams = `${baseUrl}/certificates/create/?${params.toString()}`

    console.log('urlWithParams', urlWithParams)

    const myHeaders = new Headers()

    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('x-api-key', process.env.MENTAPORT_API_KEY!)

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow' as RequestRedirect
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

    console.log('file', file)

    const sdk = await _getMentaportSDK()

    console.log('sdk', sdk)

    console.log('Creating Certificate')
    const createResult = await sdk.createCertificate(initCertificateArgs, blob)

    console.log('createResult', createResult)

    if (!createResult.status || !createResult.data) {
      console.error('There was a problem creating the certificate')
      return { status: false, statusCode: createResult.statusCode, message: createResult.message }
    }

    console.log('now uploading content')

    const certId = createResult.data.certId

    const genRes = await sdk.createCertificate(initCertificateArgs, blob)

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
