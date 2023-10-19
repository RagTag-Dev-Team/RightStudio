// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import UserListTable from './UserListTable'

const UserList = ({ userData }: { userData?: UsersType[] }) => {
  return <UserListTable tableData={userData} />
}

export default UserList
