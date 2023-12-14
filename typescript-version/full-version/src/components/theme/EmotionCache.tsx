'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import { useServerInsertedHTML } from 'next/navigation'

// MUI Imports
import type { Direction } from '@mui/material/styles'

// Third-party Imports
import createCache from '@emotion/cache'
import { CacheProvider as DefaultCacheProvider } from '@emotion/react'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache'

export type EmotionCacheProviderProps = {
  direction: Direction

  /* This is the options passed to createCache() from "import createCache from '@emotion/cache'" */
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>

  /* By default <CacheProvider /> from "import { CacheProvider } from '@emotion/react'" */
  CacheProvider?: (props: { value: EmotionCache; children: ReactNode }) => JSX.Element | null
  children: ReactNode
}

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: EmotionCacheProviderProps) {
  // Props
  const { options, direction, CacheProvider = DefaultCacheProvider, children } = props

  const getCacheState = () => {
    const cache = createCache({
      ...options,
      prepend: true,
      ...(direction === 'rtl' && {
        key: 'rtl',
        stylisPlugins: [stylisRTLPlugin]
      })
    })

    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []

    cache.insert = (...args) => {
      const serialized = args[1]

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }

      return prevInsert(...args)
    }

    const flush = () => {
      const prevInserted = inserted

      inserted = []

      return prevInserted
    }

    return { cache, flush }
  }

  const [{ cache, flush }, setCacheState] = useState(getCacheState)

  // ℹ️ Regenerate the cache when the options change
  useEffect(() => {
    setCacheState(getCacheState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  useServerInsertedHTML(() => {
    const names = flush()

    if (names.length === 0) {
      return null
    }
    let styles = ''

    for (const name of names) {
      styles += cache.inserted[name]
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />
    )
  })

  useEffect(() => {
    document.dir = direction
  }, [direction])

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
