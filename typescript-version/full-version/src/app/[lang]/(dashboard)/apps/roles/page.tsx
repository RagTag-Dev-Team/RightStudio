// Component Imports
import Roles from '@views/apps/roles'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const RolesApp = async () => {
  const data = await getData()

  return <Roles userData={data} />
}

export default RolesApp
