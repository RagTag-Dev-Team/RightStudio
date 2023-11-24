import Layout from '@theme-original/Layout';
import BuyNowButton from '@docComponents/buy-now-button';

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
