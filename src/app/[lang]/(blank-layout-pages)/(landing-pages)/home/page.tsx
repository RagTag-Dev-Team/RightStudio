// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Mark the component as the default page for this route
export const dynamic = 'force-dynamic'

const LandingPage = () => {
  // Vars
  const mode = getServerMode()

  return <LandingPageWrapper mode={mode} />
}

export default LandingPage
