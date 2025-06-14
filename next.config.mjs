/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64'
      ]
    },
    serverActions: true
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
  api: {
    bodyParser: {
      sizeLimit: '100mb'
    }
  }
}

export default nextConfig
