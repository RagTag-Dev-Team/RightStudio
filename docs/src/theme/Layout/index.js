// React Imports
import React from 'react';

// Docusaurus Imports
import Layout from '@theme-original/Layout';

// Third-party Imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Component Imports
import BuyNowButton from '@docComponents/buy-now-button';

// MUI's Customized Theme Import
import ThemeProvider from '../../mui-theme/ThemeProvider';

const LayoutWrapper = (props) => {
  return (
    <Layout {...props} >
      <ThemeProvider>
        {props.children}
        <ToastContainer />
        <BuyNowButton />
      </ThemeProvider>
    </Layout>
  );
}

export default LayoutWrapper
