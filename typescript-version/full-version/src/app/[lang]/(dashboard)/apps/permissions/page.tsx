// Component Imports
import Permissions from '@views/apps/permissions'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/apps/permissions`)

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }

  return res.json()
}

const PermissionsApp = async () => {
  const data = await getData()

  return <Permissions permissionsData={data} />
}

export default PermissionsApp
