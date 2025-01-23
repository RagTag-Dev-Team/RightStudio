import { useCallback } from 'react'

import { useRouter } from 'next/navigation'

export const useNavigation = (setIsNavigating: (value: boolean) => void) => {
  const router = useRouter()

  const navigate = useCallback(
    (href: string) => {
      setIsNavigating(true)
      router.push(href)
    },
    [router, setIsNavigating]
  )

  return { navigate }
}
