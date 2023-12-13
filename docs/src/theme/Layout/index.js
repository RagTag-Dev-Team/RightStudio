import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import BuyNowButton from '@docComponents/buy-now-button';

const LayoutWrapper = (props) => {
  return (
    <>
      <Layout {...props}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        {props.children}
        <BuyNowButton />
      </Layout>
    </>
  );
}

export default LayoutWrapper
