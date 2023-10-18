// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Type Imports
import type { Data } from '@/types/pages/profileTypes'

// Component Imports
import UserProfile from '@views/pages/user-profile'

const ProfileTab = dynamic(() => import('@views/pages/user-profile/profile/index'))
const TeamsTab = dynamic(() => import('@views/pages/user-profile/teams/index'))
const ProjectsTab = dynamic(() => import('@views/pages/user-profile/projects/index'))
const ConnectionsTab = dynamic(() => import('@views/pages/user-profile/connections/index'))

const tabContentList = (data?: Data): { [key: string]: ReactElement } => ({
  profile: <ProfileTab data={data?.users.profile} />,
  teams: <TeamsTab data={data?.users.teams} />,
  projects: <ProjectsTab data={data?.users.projects} />,
  connections: <ConnectionsTab data={data?.users.connections} />
})

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/pages/profile`)

  if (!res.ok) {
    throw new Error('Failed to fetch profileData')
  }

  return res.json()
}

const ProfilePage = async () => {
  const data = await getData()

  return <UserProfile data={data} tabContentList={tabContentList(data)} />
}

export default ProfilePage
