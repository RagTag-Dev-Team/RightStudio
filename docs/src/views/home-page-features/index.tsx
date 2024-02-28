// React Imports
import React from 'react'

// Docusaurus Imports
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

type FeatureItem = {
  title: string
  imgLightSrc: string
  imgDarkSrc: string
  imgAlt: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Based on MUI & Next.js',
    imgLightSrc: '/images/home-page/light-mui-nextjs-tailwind.png',
    imgDarkSrc: '/images/home-page/dark-mui-nextjs-tailwind.png',
    imgAlt: 'MUI & Next.js',
    description: (
      <>
       With MUI & Next.js you can build responsive, mobile-first, and ARIA accessible projects on the web.
      </>
    ),
  },
  {
    title: 'TypeScript & JavaScript',
    imgLightSrc: '/images/home-page/light-ts-js.png',
    imgDarkSrc: '/images/home-page/dark-ts-js.png',
    imgAlt: 'TypeScript & JavaScript',
    description: (
      <>
        Use TypeScript or JavaScript to build your website. We handle all the
        configuration, so you can focus on writing code.
      </>
    ),
  },
  {
    title: 'Next Auth & Translations',
    imgLightSrc: '/images/home-page/light-auth-translation-hook.png',
    imgDarkSrc: '/images/home-page/dark-auth-translation-hook.png',
    imgAlt: 'Next Auth & Translations',
    description: (
      <>
        With Next Auth you can utilize and auth service and with Translations you can translate your app to any language.
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
          className='is-[350px]'
          sources={{ light: useBaseUrl(imgLightSrc), dark: useBaseUrl(imgDarkSrc) }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className='flex items-center is-full plb-8'>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures
