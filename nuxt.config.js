module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "venue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A rewards and bounty tracker platform"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity:
          "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
    vendor: ["axios", "vue-js-modal"]
  },
  css: [
    { src: "~/assets/main.scss", lang: "scss" },
    { src: "~/assets/spacing.scss", lang: "scss" }
  ],
  modules: ["@nuxtjs/axios"],
  axios: {
    // FIXME This should be set as an env variable, but I'm not able to get it to work.
    // Passing -e seems to work ([NUXT:AXIOS] baseURL: http://server.venue.ninja:80/api
    // in logs), but still axios is going to localhost :(
    baseURL: "http://server.venue.ninja/api"
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: "fad"
  },
  plugins: [
    "~/plugins/vue-clipboard",
    "~/plugins/vue-qriously",
    "~/plugins/buefy",
    "~/plugins/token",
    "~/plugins/vee-validate",
    { src: "~/plugins/vue-js-modal.js", ssr: false }
  ]
};
