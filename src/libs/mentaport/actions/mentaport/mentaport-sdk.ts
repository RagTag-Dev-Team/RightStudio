'use server'

//  import type { Environment } from '@mentaport/certificates'
import { CertificateSDK } from '@mentaport/certificates'

let _mentaportSDK: CertificateSDK | null = null

export async function _getMentaportSDK(): Promise<CertificateSDK> {
  if (_mentaportSDK != null) {
    return _mentaportSDK
  }

  return await _initMentaportSdk()
}

async function _initMentaportSdk() {
  _mentaportSDK = new CertificateSDK(process.env.MENTAPORT_API_KEY!)

  if (!_mentaportSDK) {
    throw new Error('It is not possible to create a CertificateSDK due to an initialization problem.')
  }

  _mentaportSDK.setClient()

  //_mentaportSDK.setClientEnv(process.env.MENTAPORT_ENVIRONMENT! as Environment)

  return _mentaportSDK
}
