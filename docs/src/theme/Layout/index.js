// Docusaurus Imports
import Layout from '@theme-original/Layout'
import Head from '@docusaurus/Head';

// Third-party Imports
import { ToastContainer } from 'react-toastify'

// Component Imports
import BuyNowButton from '@docComponents/buy-now-button'
import AppReactToastify from '@docComponents/styled-components/AppReactToastify'

// MUI's Customized Theme Import
import ThemeProvider from '@site/src/mui-theme/ThemeProvider'

// Generated Icon CSS Imports
import '@/assets/iconify-icons/generated-icons.css'

const LayoutWrapper = (props) => {
  return (
    <Layout {...props}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider>
        {props.children}
          <AppReactToastify hideProgressBar />
        <BuyNowButton />
      </ThemeProvider>
    </Layout>
  )
}

export default LayoutWrapper
