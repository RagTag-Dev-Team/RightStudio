// Component Imports
import IconsTest from '@views/icons-test'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/icons-test`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const IconsTestPage = async () => {
  const data = await getData()

  return <IconsTest data={data} />
}

export default IconsTestPage
