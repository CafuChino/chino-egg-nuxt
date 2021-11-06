'use strict';
// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path');

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  telemetry: false,
  modules: [ '@nuxtjs/axios' ],
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/sentry.js' },
  ],
  axios: {
    baseURL: 'http://localhost:3000/api', // Used as fallback if no runtime config is provided
  },
  loading: { color: '#fff' },
  generate: {
    dir: '',
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
    sentry : {
      enabled: false,
      DSN: ''
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  srcDir: path.join(__dirname),
  rootDir: path.join(__dirname, '../'),
};
