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
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity:
          "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Titillium+Web"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#84429a" },
  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: "static",
      excludeAssets: /^vendor.*/
    },
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
    vendor: ["axios", "moment", "chart.js", "numeral"]
  },
  css: [
    { src: "~/assets/custom.css", lang: "css" },
    { src: "~/assets/custom.sass", lang: "sass" },
    { src: "~/assets/main.scss", lang: "scss" },
    { src: "~/assets/spacing.scss", lang: "scss" }
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/google-analytics"],
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost/api",
    browserBaseURL: process.env.BROWSER_BASED_URL || "http://localhost/api"
  },
  "google-analytics": {
    id: "UA-119876313-3"
  },
  plugins: ["~/plugins/vue-clipboard", "~/plugins/buefy", "~/plugins/axios"]
};
