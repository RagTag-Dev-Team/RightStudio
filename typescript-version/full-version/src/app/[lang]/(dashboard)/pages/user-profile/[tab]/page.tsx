// Component Imports
import UserProfile from '@views/pages/user-profile'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/pages/profile`)

  if (!res.ok) {
    throw new Error('Failed to fetch profileData')
  }

  return res.json()
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/pages/profile`).then(res => res.json())

  let tabs: { tab: string }[] = []

  if (res?.users) {
    tabs = Object.keys(res.users).map(key => ({
      tab: key
    }))
  }

  return tabs
}

const ProfileTab = async ({ params }: { params: { tab: string } }) => {
  const data = await getData()

  return <UserProfile data={data} tab={params.tab} />
}

export default ProfileTab
