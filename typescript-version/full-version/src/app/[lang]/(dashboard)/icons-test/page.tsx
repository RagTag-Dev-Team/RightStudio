// Component Imports
import IconsTest from '@views/icons-test'

// Data Imports
import { getIconTest } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/icons-test` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getIconTest = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/icons-test`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */

const IconsTestPage = async () => {
  // Vars
  const data = await getIconTest()

  return <IconsTest data={data} />
}

export default IconsTestPage
