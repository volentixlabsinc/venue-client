module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'venue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A rewards and bounty tracker platform' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', 
        integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // '@/assets/scss/mdb.scss'
    '@/assets/mystyles.scss'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000/api'
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],
  axios: {
    baseURL: 'http://localhost:8000/api'
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fad'
  },
  plugins: [
    '~/plugins/vue-clipboard',
    // '~/plugins/vue-sweetalert2',
    '~/plugins/vee-validate',
    // { src: '~/plugins/local-storage', ssr: false }
  ]
}
