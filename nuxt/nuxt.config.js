'use strict';
const path = require('path');
module.exports = {
  telemetry: false,
  modules: [ '@nuxtjs/axios' ],
  plugins: [
    { src: '~/plugins/axios.js' },
  ],
  axios: {
    baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
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
  rootDir: path.dirname(__dirname, '../'),
};
