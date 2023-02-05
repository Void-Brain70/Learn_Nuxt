// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ['@nuxtjs/tailwindcss'],
   app: {
      head : {
         title: 'Simple Project',
         meta: [
            {name : 'description', content: 'Nuxt 3 Crush leran'}
         ],
         link: [
            {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
         ]
      }
   }
})
 