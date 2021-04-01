import path from 'path'
require('dotenv').config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  target: 'static',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  server: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s | First Stable Exclusive Digital Fashion NFT Auctions',
    title: 'First Stable Exclusive Digital Fashion NFT Auctions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'DIGITALAX is the first dedicated Digital-Only Fashion Auction Exchange Platform and Open Source Digital Fashion Toolkit. We are bringing new industry standards around digital fashion and NFTs, and solving challenges and problems faced in these industries today.'
      },
      { hid: 'og:title', property: 'og:title', content: 'DIGITALAX' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/images/favicon.png'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'DIGITALAX is the first dedicated Digital-Only Fashion Auction Exchange Platform and Open Source Digital Fashion Toolkit. We are bringing new industry standards around digital fashion and NFTs, and solving challenges and problems faced in these industries today.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap'
      },
      {
        rel: 'chrome-webstore-item',
        href:
          'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
      }
    ]
  },

  loading: false,
  /*
   ** Global CSS
   */
  css: [
    // css
    '~assets/scss/elements.css',
    '~assets/scss/styles.scss'
  ],

  styleResources: {
    scss: [
      '~assets/scss/abstracts/_variables.scss',
      '~assets/scss/abstracts/_mixins.scss'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/youtube.js', ssr: false },
    '@/plugins/vuezoomer'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  proxy: {
    '/api/': { target: process.env.API_ROOT, pathRewrite: { '^/api/': '' } }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },

  /*
   ** set up apollo
   */

  apollo: {
    clientConfigs: {
      default: '~/apollo/configs/client-config'
    },
    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading'
        // fetchPolicy: 'cache-and-network'
      }
    }
    // watchLoading: '~/apollo/configs/watch-loading-handler.js',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['element-ui', 'vue-youtube-embed'],

    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: { name: '[path][name].[ext]' }
      })
      config.module.rules.push({
        test: /\.(pug)$/,
        loader: 'pug-plain-loader',
        options: {
          basedir: path.resolve(__dirname, 'templates')
        }
      })
    }
  }
}
