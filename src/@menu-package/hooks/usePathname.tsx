// NOTE: We only re-export the useRouter to maintain consistency between CRA and Next.js

export { usePathname } from 'next/navigation'

/* import { useLocation } from 'react-router-dom'

export const usePathname = () => {
  const location = useLocation()

  return location.pathname
} */
