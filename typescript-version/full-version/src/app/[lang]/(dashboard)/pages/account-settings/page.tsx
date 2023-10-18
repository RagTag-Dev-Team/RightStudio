// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Type Imports
import type { Locale } from '@configs/i18n'
import type { Direction } from '@core/types'

// Component Imports
import AccountSettings from '@views/pages/account-settings'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const AccountTab = dynamic(() => import('@views/pages/account-settings/account'))
const SecurityTab = dynamic(() => import('@views/pages/account-settings/security'))
const BillingPlansTab = dynamic(() => import('@views/pages/account-settings/billing-plans'))
const NotificationsTab = dynamic(() => import('@views/pages/account-settings/notifications'))
const ConnectionsTab = dynamic(() => import('@views/pages/account-settings/connections'))

const tabContentList = (direction: Direction): { [key: string]: ReactElement } => ({
  account: <AccountTab />,
  security: <SecurityTab direction={direction} />,
  'billing-plans': <BillingPlansTab />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const AccountSettingsPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <AccountSettings tabContentList={tabContentList(direction)} />
}

export default AccountSettingsPage
