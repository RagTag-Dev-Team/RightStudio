// React Imports
import React from 'react'
import type { ReactNode } from 'react'

// Docusaurus Imports
import Admonition from '@theme/Admonition'
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

type FeatureItem = {
  title: ReactNode
  imgLightSrc: string
  imgDarkSrc: string
  imgAlt: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: <>Based on Next.js, MUI & <br /> Tailwind</>,
    imgLightSrc: '/images/home-page/light-mui-nextjs-tailwind.png',
    imgDarkSrc: '/images/home-page/dark-mui-nextjs-tailwind.png',
    imgAlt: 'Next.js, MUI & Tailwind',
    description: (
      <>
        With Next.js, MUI & Tailwind you can build responsive and mobile-first projects on the web.
      </>
    ),
  },
  {
    title: <>TypeScript & <br /> JavaScript</>,
    imgLightSrc: '/images/home-page/light-ts-js.png',
    imgDarkSrc: '/images/home-page/dark-ts-js.png',
    imgAlt: 'TypeScript & JavaScript',
    description: (
      <>
        We offer support for both TypeScript and JavaScript, ensuring comprehensive coverage for all developer use cases.
      </>
    ),
  },
  {
    title: <>Next Auth, React Hook Form & Translations</>,
    imgLightSrc: '/images/home-page/light-auth-translation-hook.png',
    imgDarkSrc: '/images/home-page/dark-auth-translation-hook.png',
    imgAlt: 'Next Auth, React Hook Form & Translations',
    description: (
      <>
        Authenticate users, Validate Forms and Translate your app using built-in Next Auth, React Hook Form & Translation support.
      </>
    ),
  },
]

const Feature = ({title, imgLightSrc, imgDarkSrc, imgAlt, description}: FeatureItem) => {
  return (
    <div className='col col--4'>
      <div className="text--center">
        <ThemedImage
          alt={imgAlt}
          className='is-[350px] mbe-4'
          sources={{ light: useBaseUrl(imgLightSrc), dark: useBaseUrl(imgDarkSrc) }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className='flex items-center is-full plb-8 pli-4 mbe-8'>
      <div className="container">
        <Admonition type="warning" title='📣 Heads up' className='!mbe-8'>
          <p>You are viewing <strong>Next.js App Directory Routing</strong> documentation of Vuexy admin template. For <strong>Next.js Pages Directory Routing</strong> documentation, please visit <a href="https://demos.pixinvent.com/vuexy-nextjs-admin-template-old/documentation" target='_blank'>this page</a>.</p>
        </Admonition>
        <div className="row gap-y-4">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
  </section>
  )
}

export default HomepageFeatures
