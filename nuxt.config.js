const path = require('path')


export default {
  /*
  ** Rendering mode
  ** Doc: https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',

  /*
  ** Headers of the page
  ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
  */
  head: {
    title: 'TailwindCSS + PostCSS + Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official Nuxt.js starter for CodeSandBox' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Global CSS
  ** Doc: https://nuxtjs.org/api/configuration-css
  */
  css: [
    '~assets/styles/tailwind.css', 
  ],

  /*
  ** Plugins to load before mounting the App
  ** Doc: https://nuxtjs.org/guide/plugins
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  ** Doc: https://nuxtjs.org/guide/modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    'nuxt-purgecss',
    '@nuxt/http',
    // TODO: Remove it if you want to eject from codeSandbox
    './codesandbox'
  ],

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },

  /*
  ** HTTP module configuration
  */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
  ** Build configuration
  ** Doc: https://nuxtjs.org/api/configuration-build
  */
 build: {
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      'postcss-nested': {}
    }
  },
  preset: {
    stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tailwindConfig: {
          test: /tailwind\.config/,
          chunks: 'all',
          priority: 10,
          name: true
        }
      }
    }
  }
}
};
