// Component Imports
import Footer from '@components/layout/front-pages/Footer'
import Header from '@components/layout/front-pages/Header'

// Type Imports
import type { ChildrenType } from '@core/types'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = ({ children }: ChildrenType) => {
  return (
    <div className={frontLayoutClasses.root}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default FrontLayout
