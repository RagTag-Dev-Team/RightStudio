import React from 'react';
import Layout from '@theme-original/Layout';
import BuyNowButton from '@site/src/components/buy-now-button';

const LayoutWrapper = (props) => {
  return (
    <>
      <Layout {...props} >
        {props.children}
        <BuyNowButton />
      </Layout>
    </>
  );
}

export default LayoutWrapper
