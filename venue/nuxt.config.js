const { I18N } = require("./config");

// Workaround for https://github.com/buefy/nuxt-buefy/issues/32
global.File = typeof window === "undefined" ? Object : window.File;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "venue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:image", content: "https://goo.gl/YtSxXC" },
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
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/google-analytics",
    ["nuxt-i18n", I18N]
  ],
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost/api",
    browserBaseURL: process.env.BROWSER_BASED_URL || "http://localhost/api"
  },
  auth: {
    redirect: {
      home: "/dashboard"
    },
    plugins: ["~/plugins/auth", "~plugins/axios"],

    // This is broken right now, so I've enabled it manuallyt in axios.js
    // resetOnError: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/authenticate/",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/logout/", method: "post" },
          user: {
            url: "/retrieve/user/",
            method: "get",
            propertyName: false
          }
        },
        // tokenRequired: true,
        tokenType: "Token"
      }
      // facebook: {
      //   client_id: "..."
      // }
    }
  },
  "google-analytics": {
    id: "UA-119876313-3"
  },
  plugins: [
    "~/plugins/vue-clipboard",
    "~/plugins/buefy",
    "~/plugins/mixin",
    "~/plugins/vue-social-sharing"
  ]
};
