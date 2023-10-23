// React Imports
import React from 'react'

// Docusaurus Imports
import Layout from '@theme-original/Layout'

// Third-party Imports
import { ToastContainer } from 'react-toastify'

// Component Imports
import BuyNowButton from '@docComponents/buy-now-button'

// Styled Components Imports
import ToastifyWrapper from '@docComponents/styled-components/react-toastify'

// MUI's Customized Theme Import
import ThemeProvider from '@site/src/mui-theme/ThemeProvider'

// Generated Icon CSS Imports
import '@/assets/iconify-icons/generated-icons.css'

const LayoutWrapper = (props) => {
  return (
    <Layout {...props} >
      <ThemeProvider>
        {props.children}
        <ToastifyWrapper>
          <ToastContainer hideProgressBar />
        </ToastifyWrapper>
        <BuyNowButton />
      </ThemeProvider>
    </Layout>
  )
}

export default LayoutWrapper
