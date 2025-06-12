/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
        'node_modules/.pnpm',
        'node_modules/.cache',
        'node_modules/.bin',
        'node_modules/.vite'
      ]
    }
  },

  // Enable static optimization
  swcMinify: true,

  // Configure images if you're using them
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  basePath: process.env.BASEPATH,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        child_process: false
      }
    }

    // Add this to ensure proper standalone output
    if (isServer) {
      config.output = {
        ...config.output,
        libraryTarget: 'commonjs2'
      }
    }

    return config
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboards/main',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar)',
        destination: '/:lang/dashboards/main',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  },
  serverRuntimeConfig: {
    api: {
      bodyParser: {
        sizeLimit: '100mb'
      }
    }
  },

  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },

  // Add compression
  compress: true,

  // Add CORS configuration
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          has: [
            {
              type: 'header',
              key: 'origin'
            }
          ],
          destination: '/api/:path*'
        }
      ]
    }
  }
}

export default nextConfig
