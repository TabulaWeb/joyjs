/** */
const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  distDir: 'dist',
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    nextScriptWorkers: true,
  },
  devIndicators: {
    buildActivity: false
  }
}

/** */
module.exports = withLinaria(config)
