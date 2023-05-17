// NOTE: We only re-export the useRouter to maintain consistency between CRA and Next.js

// export { useSearchParams } from 'next/navigation'

import { useSearchParams as _useSearchParams } from 'react-router-dom'

// TODO: Maybe unify React-Router and Next.js Router to have the same behavior
//  In Next.js we do not have the set. There we need to redirect manually.

/**
 * Returns ReadOnly search params
 */
export const useSearchParams = () => {
  const [searchParams] = _useSearchParams()

  return searchParams
}
