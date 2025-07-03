import React from 'react'

import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/views/home-page-features'

import './styles.scss'

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext()

  
return (
    <header className='hero hero--primary hero-banner'>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className='buttons'>
          <Link className='button button--primary button--lg' to='/docs/guide/overview'>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

const Home = (): JSX.Element => {
  return (
    <Layout
      title='Welcome'
      description='Vuexy - MUI Next.js Admin Template Documentation'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default Home
