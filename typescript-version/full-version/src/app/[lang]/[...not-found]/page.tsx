// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

export default async function Page(props: any) {
  return (
    <Providers>
      <BlankLayout>
        <NotFound {...props} />
      </BlankLayout>
    </Providers>
  )
}
