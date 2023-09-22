// Component Imports
import AccountSettings from '@views/pages/account-settings'

const getPricingData = async () => {
  const pricingData = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!pricingData.ok) {
    throw new Error('Failed to fetch data')
  }

  return pricingData.json()
}

export async function generateStaticParams() {
  const tabs = [
    { tab: 'account' },
    { tab: 'security' },
    { tab: 'billing-plans' },
    { tab: 'notifications' },
    { tab: 'connections' }
  ]

  return tabs
}

const AccountSettingsTab = async ({ params }: { params: { tab: string } }) => {
  const data = await getPricingData()

  return <AccountSettings tab={params.tab} data={data} />
}

export default AccountSettingsTab
