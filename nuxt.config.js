export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  loading: {
    color: "#9f7aea",
    height: "5px",
    continuous: true,
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Application environment variables
   */
  env: {
    "3BOX_SPACE_NAME": "IDLock",
    IPFS_URL: process.env.IPFS_URL || "https://ipfs.infura.io/ipfs",
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/idlock.js", mode: "client" },
    "~/plugins/clipboard-copy.js",
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
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
