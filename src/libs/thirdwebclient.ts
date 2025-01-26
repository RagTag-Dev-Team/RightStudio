import { createThirdwebClient } from 'thirdweb'

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_SECRET

if (!clientId) {
  throw new Error('No client ID provided')
}

export const client = createThirdwebClient({
  clientId: clientId
})
