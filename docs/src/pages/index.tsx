import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import HomepageFeatures from '@docViews/home-page-features'

import styles from './index.module.css'

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={classnames('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg flex items-center gap-2"
            to="/docs/guide/overview/getting-started"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  )
}

const Home = (): JSX.Element => {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default Home
