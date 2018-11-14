const { I18N } = require("./lang");
const express = require("express");
const cookieParser = require("cookie-parser");

// Workaround for https://github.com/buefy/nuxt-buefy/issues/32
global.File = typeof window === "undefined" ? Object : window.File;

module.exports = {
  srcDir: "src",
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
        href: "/static/favicon.png"
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
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
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
    extractCSS: true,
    // Notice: Please do not deploy bundles built with analyze mode, it's only for analyzing purpose.
    // analyze: {
    //   analyzerMode: "static",
    //   excludeAssets: /^vendor.*/
    // },
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
    }
  },
  serverMiddleware: [express.json(), cookieParser()],
  css: [
    { src: "~/styles/custom.css", lang: "css" },
    { src: "~/styles/custom.sass", lang: "sass" },
    { src: "~/styles/main.scss", lang: "scss" },
    { src: "~/styles/spacing.scss", lang: "scss" }
  ],
  render: {
    etag: false,
    // Disabled compression
    compressor: { threshold: Infinity }
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/google-analytics",
    ["nuxt-i18n", I18N]
  ],
  axios: {
    baseURL: process.env.NUXT_ENV_BTT_URL
  },
  auth: {
    redirect: {
      home: "/dashboard"
    },
    plugins: ["~/plugins/auth", "~/plugins/axios"],

    // This is broken right now, so I've enabled it manually in axios.js
    // resetOnError: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/authenticate/",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/logout/", method: "get" },
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
    { src: "~/plugins/vue-clipboard", ssr: false },
    "~/plugins/buefy",
    "~/plugins/mixin",
    "~/plugins/vue-social-sharing"
  ]
};
