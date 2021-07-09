'use strict';
import path from 'path'

export default {
  telemetry: false,
  modules: [ '@nuxtjs/axios' ],
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/sentry.client.js' },
  ],
  axios: {
    baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },
  loading: { color: '#fff' },
  generate: {
    dir: '',
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  srcDir: path.join(__dirname),
  rootDir: path.join(__dirname, '../'),
}
