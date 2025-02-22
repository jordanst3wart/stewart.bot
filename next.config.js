const { withContentlayer } = require('next-contentlayer2')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer]
  return plugins.reduce((acc, next) => next(acc), {
    output: 'export',
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
      ],
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
