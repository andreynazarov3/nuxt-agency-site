const config = require("./.contentful.json");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "dobrosite",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    script: [
      {
        src: "/js/gsap/TweenMax.js",
      },
      {
        src: "/js/gsap/TimelineMax.js",
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#000000",
  },
  /*
   ** Build configuration
   */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  },
  css: ["@/assets/scss/style.scss"],

  build: {
    analyze: true,
    vendor: [
      "babel-polyfill",
      "eventsource-polyfill",
      "axios",
      "imagesloaded",
      "isotope-layout",
      "isotope-packery",
      "stackblur-canvas",
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
