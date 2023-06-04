// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {

      meta: [

      ],
    },
  },
  srcDir: "./src/",
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon'
  ],

  build: {
    // ...
    transpile: ["nuxt-child"],
  },
  css: [
    // '~/assets/css/main.css',
    "~/assets/css/main.css"
  ],
});
