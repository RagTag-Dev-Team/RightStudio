// app/ThemeRegistry.tsx
'use client'
import type { ReactNode } from 'react'

import { useEffect, useState } from 'react'

import { useServerInsertedHTML } from 'next/navigation'

import type { Options as CacheOptions } from '@emotion/cache'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: { children: ReactNode; options: CacheOptions }) {
  const { options, children } = props

  const getCacheState = () => {
    const cache = createCache(options)

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

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
