/** */
const withLinaria = require('next-with-linaria')

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

/** */
module.exports = withLinaria(config)
